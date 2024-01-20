import React from 'react';
import dynamic from 'next/dynamic';
import lottieJson from '/public/animation';

// Dynamic import of Lottie with SSR disabled
const Lottie = dynamic(() => import('react-lottie-player'), {
  ssr: false, // Disable server-side rendering
});

export default function Animation() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      // style={{ width: 300, height: 300 }}
    />
  );
}


// import React from 'react'

// // import Lottie from 'react-lottie-player'
// import Lottie from 'react-lottie-player';

// // Alternatively:
// // import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

// import lottieJson from '/public/animation'

// export default function Animation() {
// return (
//     <Lottie
//         loop
//         animationData={lottieJson}
//         play
//         // style={{ width: 300, height: 300 }}
        
//         />
//     )
// }