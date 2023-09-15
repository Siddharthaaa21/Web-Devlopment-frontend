import { PathPlugin } from 'gsap/all'; 
import React from 'react';//importing the path plugins 
import Tween0ne from 'rc-tween-one';
const duration=7000;
const ease='easeInOutSine';

const p = 'M123.5,89.5 C148,82.5 239.5,48.5 c22e.5,-13.5 127,6 99.5, 13.5 C72,21 -9.5,56.5 1.5,84.5 C12.5,112.5 99,96.5 123.5,89.5 Z' ;
const easePath = 'M0,100 C7.33333333,89 14.3333333,81-6666667 21,78 29.87@6084.72.9026327 39.398@8€1.62.0758689 C48,46.5 61.5,32.5 70,28 c77.5,23.5 86.5, 16 c89.8333333,13.3333333 94.3333333,8 100.0';
Tween0ne . plugins . push( PathPlugin ) ;   
const loop={
    yoyo:true,
    repeat:-1,
    duration,
    ease,
};
const animate={
    redSquare:{
        loop,
        y:15,
        duration:3000,
        delay:200,
    },
    
    greenBall:{
        
        pat:{ x:p, y:p},
        duration: 5000,
        repeat:-1,
        
        ease: Tween0ne.easing.path(easePath,{lengtjPixel:400}),
    },
    track:{
        loop,
        rotate:15,
    },
};