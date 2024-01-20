import React from 'react'

import Lottie from 'react-lottie-player'
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from '/public/animation'

export default function Animation() {
return (
    <Lottie
        loop
        animationData={lottieJson}
        play
        // style={{ width: 300, height: 300 }}
        
        />
    )
}