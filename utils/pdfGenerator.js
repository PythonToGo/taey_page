import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export async function downloadPDF() {
    try {
        const element = document.getElementById('cvContent'); 
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL('image/png');

        let pdf = new jsPDF('p', 'mm', 'a4');
        let pageWidth = pdf.internal.pageSize.getWidth();
        let pageHeight = pdf.internal.pageSize.getHeight();
        let imageWidth = canvas.width;
        let imageHeight = canvas.height;

        let ratio = pageWidth / imageWidth;
        let newHeight = imageHeight * ratio;

        if (newHeight > pageHeight) {
            ratio = pageHeight / imageHeight;
            pageWidth = imageWidth * ratio;
            pdf = new jsPDF('l', 'mm', [pageWidth, pageHeight]);
        }

        pdf.addImage(data, 'PNG', 0, 0, pageWidth, newHeight);
        pdf.save('cv.pdf');
    } catch (error) {
        console.error("Error generating PDF", error);
    }
}
