import dynamic from 'next/dynamic';

const jsPDF = dynamic(() => import('jspdf').then((mod) => mod.default), {
  ssr: false,
});
const html2canvas = dynamic(() => import('html2canvas'), {
  ssr: false,
});

export async function downloadPDF() {
  try {
    const element = document.getElementById('cvContent');
    const canvas = await html2canvas(element, {
      scale: window.devicePixelRatio,
      useCORS: true,
      scrollY: -window.scrollY,
      scrollX: -window.scrollX,
      windowHeight: document.documentElement.offsetHeight,
    });
    const data = canvas.toDataURL('image/png');

    const { jsPDF } = await import('jspdf');
    let pdf = new jsPDF('p', 'mm', 'a4');
    let pageWidth = pdf.internal.pageSize.getWidth();
    let pageHeight = pdf.internal.pageSize.getHeight();
    let margin = 10;
    let contentWidth = pageWidth - 2 * margin;
    let contentHeight = pageHeight - 2 * margin;

    let imageWidth = canvas.width;
    let imageHeight = canvas.height;

    let ratio = contentWidth / imageWidth;
    let newWidth = imageWidth * ratio;
    let newHeight = imageHeight * ratio;

    if (newHeight > contentHeight) {
      let pages = Math.ceil(newHeight / contentHeight);
      for (let i = 0; i < pages; i++) {
        if (i > 0) {
          pdf.addPage();
        }
        let heightPosition = i * contentHeight;

        pdf.addImage(
          data,
          'PNG',
          margin,
          margin - heightPosition,
          newWidth,
          newHeight
        );
      }
    } else {
      pdf.addImage(data, 'PNG', margin, margin, newWidth, newHeight);
    }

    pdf.save('CV_TaeyKim.pdf');
  } catch (error) {
    console.error('Error generating PDF', error);
  }
}
