var windowScrolled;
var mute = 0;
var cp6 = 0;
var cp8 = 0;
var cp10 = 0;
var cs1 = 0;
// function myFunction(x) {
//     if (x.matches) { // If media query matches
//       document.body.style.backgroundColor = "yellow";
//     } else {
//      document.body.style.backgroundColor = "pink";
//     }
//   }
  
// var x = window.matchMedia("(max-width: 480px)")
// myFunction(x)
// x.addListener(myFunction)
window.onload = () => {
    document.body.classList.add("stop-scrolling");
};
window.addEventListener('scroll', () => {
    windowScrolled = window.pageYOffset || this.document.documentElement.scrollTop;
    console.log(windowScrolled);
// if(windowScrolled == 0){
//     if(cs1 == 0){
//         document.body.classList.add("stop-scrolling");
//         cs1 = 1
//     }
// }
    var w = window.innerWidth;
    var h = window.innerHeight;
    
    let cloud_tleft = document.querySelector('.cloud_tleft');
    cloud_tleft.style.transform = `translateX(${windowScrolled * 2}px)`;

    let cloud_bleft = document.querySelector('.cloud_bleft');
    cloud_bleft.style.transform = `translateX(${windowScrolled}px)`;

    let cloud_right = document.querySelector('.cloud_right');
    cloud_right.style.transform = `translateX(${windowScrolled * 0.5}px)`;

    let main_bus = document.querySelector('.car_b');
    let bus_location = main_bus.offsetTop;
    console.log('bus is : ' + bus_location);

    let human_animate_1 = document.querySelector('#driver1');
    let human_animate_2 = document.querySelector('#driver2');
    
    human_animate_1.style.transform = `translateX(-${windowScrolled * 0.13}px) scaleX(-1)`;
    human_animate_2.style.transform = `translateX(-${windowScrolled * 0.13}px) scaleX(-1)`;
    if (windowScrolled > bus_location - 300) {
        human_animate_1.style.visibility = 'hidden';
        human_animate_2.style.visibility = 'hidden';
    } else {
        human_animate_1.style.visibility = 'visible';
        human_animate_2.style.visibility = 'visible';
    }
    let pop_up6 = document.querySelector('.di_6');
    let pop_up8 = document.querySelector('.di_8');
    let pop_up10 = document.querySelector('.di_10');
    let pop_up11 = document.querySelector('.pop-up11');
    
    
    if(w > 1000){
        if (windowScrolled - bus_location > -250) {
            if(windowScrolled - pop_up11.offsetTop > -618){
                main_bus.style.transform = `translate3d(0,${windowScrolled - bus_location + 550}px, 0)`;
                pop_up6.style.opacity = 1;
                pop_up6.style.transform = `scale(0)`;
                pop_up8.style.opacity = 0;
                pop_up8.style.transform = `scale(0)`;
                pop_up10.style.transform = `scale(0)`;
                pop_up11.style.opacity = 0;
            }   else{
                    main_bus.style.transform = `translate3d(0,${windowScrolled - bus_location + 250}px, 0)`;
                }
        }
    }else{
        if (windowScrolled - bus_location > -250) {
            if(windowScrolled - pop_up11.offsetTop > -818){
                main_bus.style.transform = `translate3d(0,${windowScrolled - bus_location + 550}px, 0)`;
                pop_up6.style.opacity = 0;
                pop_up6.style.transform = `scale(0)`;
                pop_up8.style.opacity = 0;
                pop_up8.style.transform = `scale(0)`;
                pop_up10.style.transform = `scale(0)`;
                pop_up11.style.opacity = 0;
            }   else{
                    main_bus.style.transform = `translate3d(0,${windowScrolled - bus_location + 250}px, 0)`;
                }
    }
        // main_bus.style.position = `fixed`;
        // main_bus.style.transform = `translateY(0,${windowScrolled - bus_location + 250}px, 0)`;
    }


    // Bus ultra instinct ver.
    let vehicle_col = document.querySelector('.vehicle_col');
    let vehicle_col1 = document.querySelector('.vehicle_col1');
    let vehicle_col2 = document.querySelector('.vehicle_col2');
    let vehicle_col3 = document.querySelector('.vehicle_col3');
    let vehicle_col4 = document.querySelector('.vehicle_col4');
    let vehicle_col5 = document.querySelector('.vehicle_col5');
    // console.log('result : ' + vehicle_col.offsetTop - vehicle_col.offsetHeight);
    // console.log('box height : ' + vehicle_col.offsetHeight);
    // console.log('box offsetTop : ' + vehicle_col.offsetTop);
    // let bstyle = window.getComputedStyle(vehicle_col);
    // let btop = bstyle.getPropertyValue('top');
    // console.log('box Top : ' + btop);


    console.log('bus run : ' + (windowScrolled - bus_location + 250));
    console.log('col : ' + vehicle_col.offsetTop);
    console.log('range detected :' + ((windowScrolled + 250) - vehicle_col.offsetTop));
    if (windowScrolled + 270 > vehicle_col.offsetTop - vehicle_col.offsetHeight) {
        // if(windowScrolled - vehicle_col1.offsetTop > -460)
        // main_bus.style.transform = `translate3d(-${windowScrolled - vehicle_col.offsetTop + 460}px, ${windowScrolled - bus_location + 250}px, 0)`;
        main_bus.style.transform = `translate3d(-10vw, ${windowScrolled - bus_location + 250}px, 0)`;
    }

    if (windowScrolled + 270 > vehicle_col1.offsetTop - vehicle_col1.offsetHeight) {
        main_bus.style.transform = `translate3d(0, ${windowScrolled - bus_location + 250}px, 0)`;
    }

    // if (w > 330 && h > 700) {
    //     if (windowScrolled > vehicle_col2.offsetTop - vehicle_col2.offsetHeight) {
    //         main_bus.style.transform = `translate3d(-10vw, ${windowScrolled - bus_location + 250}px, 0)`;
    //     }

    //     if (windowScrolled > vehicle_col3.offsetTop - vehicle_col3.offsetHeight) {
    //         main_bus.style.transform = `translate3d(0, ${windowScrolled - bus_location + 250}px, 0)`;
    //     }
    // }

    if (windowScrolled + 270 > vehicle_col2.offsetTop - vehicle_col2.offsetHeight) {
        main_bus.style.transform = `translate3d(-10vw, ${windowScrolled - bus_location + 250}px, 0)`;
    }

    if (windowScrolled + 270 > vehicle_col3.offsetTop - vehicle_col3.offsetHeight) {
        main_bus.style.transform = `translate3d(0, ${windowScrolled - bus_location + 250}px, 0)`;
    }

    if (windowScrolled + 270 > vehicle_col4.offsetTop - vehicle_col4.offsetHeight) {
        main_bus.style.transform = `translate3d(-10vw, ${windowScrolled - bus_location + 250}px, 0)`;
    }
    if (windowScrolled + 270 > vehicle_col5.offsetTop - vehicle_col5.offsetHeight) {
        main_bus.style.transform = `translate3d(0, ${windowScrolled - bus_location + 250}px, 0)`;
    }
    let bts_detect = document.querySelector('#bts_detect');
    let bts = document.querySelector('.train');
    let bts_sound = document.querySelector('#bts_sound');
    // console.log('range between el : ' + (windowScrolled - bts_detect.offsetTop));
    if (windowScrolled - bts_detect.offsetTop > 150) {
        bts.style.transform = `translate3d(-${(windowScrolled - bts_detect.offsetTop - 150) * 0.35}px, 0, 0)`;
        if (mute == 0) {
            bts_sound.play();
            mute += 1;
        }
    }

    let ferris_wheel = document.querySelector('.h_spin');
    ferris_wheel.style.transform = `rotate(${windowScrolled * 0.15}deg)`;

    // console.log('windowScrolled - vehicle_col3.offsetTop = ' + (windowScrolled - vehicle_col3.offsetTop));//-419
    
    
    // console.log('windowScrolled - vehicle_col4.offsetTop = ' + (windowScrolled - vehicle_col4.offsetTop));
    // console.log('windowScrolled - vehicle_col1.offsetTop = ' + (windowScrolled - vehicle_col1.offsetTop));
    
    // if (windowScrolled - h_spin.offsetTop > -2373) {
    //     main_bus.style.transform = `translate3d(0, ${windowScrolled - bus_location + 417}px, 0)`;
    // }

    // if (windowScrolled - h_spin.offsetTop > -1657) {
    //     main_bus.style.transform = `translate3d(0, ${windowScrolled - bus_location + 417}px, 0)`;
    // }

    // if (windowScrolled - h_spin.offsetTop > 4314) {
    //     main_bus.style.transform = `translate3d(-10vw, ${windowScrolled - bus_location + 417}px, 0)`;
    // }

    // if (windowScrolled - h_spin.offsetTop > 4912) {
    //     main_bus.style.transform = `translate3d(0, ${windowScrolled - bus_location + 417}px, 0)`;
    // }

    // คอมเม้นไว้ก่อน
    // -------------------------------------------------------------------------------------------------
    // let human_animate_3 = document.querySelector('#driver3');
    // let human_animate_4 = document.querySelector('#driver4');
    // human_animate_3.style.transform = `translateX(${windowScrolled * 0.02}px) `;
    // human_animate_4.style.transform = `translateX(${windowScrolled * 0.02}px) `;
    // console.log('driver3 : ' + human_animate_3.offsetTop);
    
    // let final_garage = document.querySelector('.garageEnd');
    // let final_text = document.querySelector('.textEnd');
    // console.log('garage end is ' + final_garage.offsetTop);
    // // let final_garage = document.querySelector('.garageEnd');
    // // console.log('main bus is : ' + main_bus.offsetTop);
    // // console.log('garage end is ' + final_garage.offsetTop);
    // // if (windowScrolled - final_garage.offsetTop > -205) {
    // //     main_bus.style.transform = `translateY(${final_garage.offsetTop - 20}px)`;
    // // }
    // if (windowScrolled - bus_location > -300 && windowScrolled - final_garage.offsetTop <= -205 ) {
    //     main_bus.style.transform = `translate3d(0, ${windowScrolled - bus_location + 300}px, 0)`;
    // } 
    // else if (windowScrolled - final_garage.offsetTop > -205) {
    //     windowScrolled = final_garage.offsetTop;
    //     main_bus.style.transform = `translate3d(0, ${windowScrolled - bus_location + 205}px, 0)`;
    // }
 // -------------------------------------------------------------------------------------------------
    let dialog1 = document.querySelector('.paragraph');
    let peed = document.querySelector('#peed');
    // peed.preload = 'auto';
    if (windowScrolled - dialog1.offsetTop < -435) {
        dialog1.style.opacity = 0;
        // dialog1.style.left = `18vw`;
        dialog1.style.transform = `translateX(-4vw)`;
        dialog1.style.transition = `0.4s`
    } else {
        dialog1.style.opacity = 1;
        //dialog1.style.left = `24vw`;
        dialog1.style.transform = `translateX(4vw)`;
        dialog1.style.transition = `0.4s`
        if (mute == 0) {
            // peed.play();
            mute += 1;
        }
    }

    let pop_up1 = document.querySelector('.pop-up1');
    // console.log('dialog is : ' + pop_up1.offsetTop);
    if (windowScrolled - pop_up1.offsetTop < -484) {
            pop_up1.style.opacity = 0;
            pop_up1.style.transform = `scale(0)`;
            pop_up1.style.transition = `0.4s`
        } else {
            pop_up1.style.opacity = 1;
            pop_up1.style.transform = `scale(1)`;
            pop_up1.style.transition = `0.4s`
        }
    
    let car_container = document.querySelector('.car_middleweb_container');
    let green_car = document.querySelector('.car_r');
    let red_car = document.querySelector('.car_g');
    let green2_car = document.querySelector('.car_r2');
    let gray_car = document.querySelector('.car_gray');
    if (windowScrolled - car_container.offsetTop > -1138) {
        green_car.style.transform = `translateX(${(windowScrolled - car_container.offsetTop + 1138) * 0.3}px)`;
        green2_car.style.transform = `translateX(${(windowScrolled - car_container.offsetTop + 938) * 0.4}px)`;
        red_car.style.transform = `translateX(${(windowScrolled - car_container.offsetTop - 1438) * -0.5}px)`;
       gray_car.style.transform = `translateX(${(windowScrolled - car_container.offsetTop - 1138) * -0.2}px)`;
        // red_car.style.left 
        // (windowScrolled - car_container.offsetTop + 1138) * -0.5 + 'px'
    }
    
    let pop_up2 = document.querySelector('.pop-up2');
    // console.log('dialog is : ' + pop_up2.offsetTop);
    if (windowScrolled - pop_up2.offsetTop < -465) {
        pop_up2.style.opacity = 0;
        pop_up2.style.transform = `scale(0)`;
        pop_up2.style.transition = `0.4s`
    } else {
        pop_up2.style.opacity = 1;
        pop_up2.style.transform = `scale(1)`;
        pop_up2.style.transition = `0.4s`
    }

    let pop_up3 = document.querySelector('.pop-up3');
    // console.log('dialog is : ' + pop_up3.offsetTop);
    if (windowScrolled - pop_up3.offsetTop < -414) {
        pop_up3.style.opacity = 0;
        pop_up3.style.transform = `scale(0)`;
        pop_up3.style.transition = `0.4s`
    } else {
        pop_up3.style.opacity = 1;
        pop_up3.style.transform = `scale(1)`;
        pop_up3.style.transition = `0.4s`
    }

    // คอมเม้นไว้ก่อน
    // -------------------------------------------------------------------------------------------------
    // let memorial_bridge_location = document.querySelector('#memorial-bridge');
    // let bridgeSound = document.getElementById('bridge_sound')
    // // console.log('bridge is : ' + memorial_bridge_location.offsetTop);
    // let br1 = document.getElementById('br1');
    // let br2 = document.getElementById('br2');
    // br1.style.transformOrigin = "left bottom";
    // br2.style.transformOrigin = "right bottom";
    // if (windowScrolled - memorial_bridge_location.offsetTop < -340) {
    //     br1.style.transition = '2s';
    //     br2.style.transition = '2s';
    //     br1.style.rotate = 0 + 'deg';
    //     br2.style.rotate = 0 + 'deg';
    // } 
    // else {
    //     br1.style.transition = '2s';
    //     br2.style.transition = '2s';
    //     br1.style.rotate = `-45deg`;
    //     br2.style.rotate = `45deg`;
    //     if (mute == 1) {
    //         // bridgeSound.play();
    //         mute += 1;
    //     }
    // }
// -------------------------------------------------------------------------------------------------




    // // //   // if (windowScrolled - memorial_bridge_location.offsetTop > -340) {
    //     if()
    //     br1.style.rotate = `${windowScrolled - memorial_bridge_location.offsetTop + 340}deg`;
    // }

    let pop_up4 = document.querySelector('.pop-up4');
    // console.log('dialog is : ' + pop_up4.offsetTop);
    if (windowScrolled - pop_up4.offsetTop < -401) {
        pop_up4.style.opacity = 0;
        pop_up4.style.transform = `scale(0)`;
        pop_up4.style.transition = `0.4s`
    } else {
        pop_up4.style.opacity = 1;
        pop_up4.style.transform = `scale(1)`;
        pop_up4.style.transition = `0.4s`
    }

    //End Scene
    // let final_garage = document.querySelector('.garageEnd');
    // console.log('main bus is : ' + main_bus.offsetTop);
    // if (windowScrolled - final_garage.offsetTop > -205) {
    //     main_bus.style.transform = `translateY(${final_garage.offsetTop - 20}px)`;
    // }

    // Start Converstion here!
    let pop_up5 = document.querySelector('.pop-up5');
    // console.log('pop5 is = ' + pop_up5.offsetTop);
    if (windowScrolled - pop_up5.offsetTop < -412) {
        pop_up5.style.opacity = 0;
        pop_up5.style.transform = `scale(0)`;
        pop_up5.style.transition = `0.4s`;
    } else {
        pop_up5.style.opacity = 1;
        pop_up5.style.transform = `scale(1)`;
        pop_up5.style.transition = `0.4s`;
    }


    // -------------------------------------------------------------------------------------------------

    console.log('pop6 = ' + pop_up6.offsetTop);
    pop_up6.style.opacity = 1;
    // let pop_up5 = document.querySelector('.pop-up5');
    if (windowScrolled - pop_up6.offsetTop < -336) {
        pop_up6.style.opacity = 1;
        pop_up6.style.transform = `scale(0)`;
        pop_up6.style.transition = `0.4s`;
    } else {
        pop_up6.style.opacity = 1;
        pop_up6.style.transform = `scale(1)`;
        pop_up6.style.transition = `0.4s`;
        if (cp6 == 0){
            document.body.classList.add("stop-scrolling");
            cp6 = 1;
        }
    }
    // -------------------------------------------------------------------------------------------------
    let pop_up7 = document.querySelector('.pop-up7');
    if (windowScrolled - pop_up7.offsetTop < -395) {
        pop_up7.style.opacity = 0;
        pop_up7.style.transform = `scale(0)`;
        pop_up7.style.transition = `0.4s`;
    } else {
        pop_up7.style.opacity = 1;
        pop_up7.style.transform = `scale(1)`;
        pop_up7.style.transition = `0.4s`;
    }
    if (windowScrolled - pop_up8.offsetTop < -312){
        pop_up8.style.transform = `scale(0)`; 
        pop_up8.style.opacity = 0;
        pop_up8.style.transform = `scale(0)`;
        pop_up8.style.transform = `scale(0)`;
        pop_up8.style.transition = `0.4s`;
    } else {
        pop_up8.style.opacity = 1;
        pop_up8.style.transform = `scale(1)`;
        pop_up8.style.transition = `0.4s`;
        if (cp8 == 0){
            document.body.classList.add("stop-scrolling");
            cp8 = 1;
        }
    }
    let pop_up9 = document.querySelector('.pop-up9');
    if (windowScrolled - pop_up9.offsetTop < -689) {
        pop_up9.style.opacity = 0;
        pop_up9.style.transform = `scale(0)`;
        pop_up9.style.transition = `0.4s`;
    } else {
        pop_up9.style.opacity = 1;
        pop_up9.style.transform = `scale(1)`;
        pop_up9.style.transition = `0.4s`;
    }
    if (windowScrolled - pop_up10.offsetTop < -389) {
        pop_up10.style.transform = `scale(0)`;
        pop_up10.style.opacity = 0;
        pop_up10.style.transform = `scale(0)`;
        pop_up10.style.transition = `0.4s`;
    } else {
        pop_up10.style.opacity = 1;
        pop_up10.style.transform = `scale(1)`;
        pop_up10.style.transition = `0.4s`;
        if (cp10 == 0){
            document.body.classList.add("stop-scrolling");
            cp10 = 1;
        }
    }
    // console.log('diff11 = ' + (windowScrolled - pop_up11.offsetTop)); //-718
    if (w > 1000){
        if (windowScrolled - pop_up11.offsetTop < -718) {
            pop_up11.style.opacity = 0;
            pop_up11.style.transform = `scale(0)`;
            pop_up11.style.transition = `0.4s`;
        } else {
            pop_up11.style.opacity = 1;
            pop_up11.style.transform = `scale(1)`;
            pop_up11.style.transition = `0.4s`;
        }
    }   else{
        if (windowScrolled - pop_up11.offsetTop < -618) {
            pop_up11.style.opacity = 0;
            pop_up11.style.transform = `scale(0)`;
            pop_up11.style.transition = `0.4s`;
        } else {
            pop_up11.style.opacity = 1;
            pop_up11.style.transform = `scale(1)`;
            pop_up11.style.transition = `0.4s`;
        }
    }

    let bad1 = document.querySelector('.bad1');
    bad1.style.opacity = 0;
    // console.log('bad1 offset : ' + bad1.offsetTop);
    if (w > 1000){
        if (windowScrolled - bad1.offsetTop > -300) {
            bad1.style.opacity = 1;
            bad1.style.transform = `translate3d(0, ${(windowScrolled - bad1.offsetTop + 300) * 1}px, 0)`;
            bad1.style.transition = '0.2s';
        }
        if (windowScrolled - bad1.offsetTop > 200){
            bad1.style.opacity = 0;
            bad1.style.transition = '0.2s';
        }
    }
    if (w > 481 && w < 1000){
        if (windowScrolled - bad1.offsetTop > -166) {
            bad1.style.opacity = 1;
            bad1.style.transform = `translate3d(0, ${(windowScrolled - bad1.offsetTop + 250) * 1}px, 0)`;
            bad1.style.transition = '0.2s';
        }
        if (windowScrolled - bad1.offsetTop > 200){
            bad1.style.opacity = 0;
            bad1.style.transition = '0.2s';
        }
    }
    if (w > 1 && w < 480){
        if (windowScrolled - bad1.offsetTop > -216) {
            bad1.style.opacity = 1;
            bad1.style.transform = `translate3d(0, ${(windowScrolled - bad1.offsetTop + 250) * 1}px, 0)`;
            bad1.style.transition = '0.2s';
        }
        if (windowScrolled - bad1.offsetTop > -156){
            bad1.style.opacity = 0;
            bad1.style.transition = '0.2s';
        }
    }
    let bad2 = document.querySelector('.bad2');
    bad2.style.opacity = 0;
    // console.log('bad2 offset : ' + bad2.offsetTop);
    if (w > 1000){
        if (windowScrolled - bad2.offsetTop > -160) {
            bad2.style.opacity = 1;
            bad2.style.transform = `translate3d(0, ${(windowScrolled - bad2.offsetTop + 200) * 1}px, 0)`;
            bad2.style.transition = '0.2s';
        }
        if (windowScrolled - bad2.offsetTop > 400){
            bad2.style.opacity = 0;
            bad2.style.transition = '0.2s';
        }
    }
    
    if (w > 481 && w < 1000){
        if (windowScrolled - bad2.offsetTop > 229) {
            bad2.style.opacity = 1;
            bad2.style.transform = `translate3d(0, ${(windowScrolled - bad2.offsetTop + 250) * 1}px, 0)`;
            bad2.style.transition = '0.2s';
        }
        if (windowScrolled - bad2.offsetTop > 675){
            bad2.style.opacity = 0;
            bad2.style.transition = '0.2s';
        }
    }
    if (w > 1 && w < 480){
        if (windowScrolled - bad2.offsetTop > -140) {
            bad2.style.opacity = 1;
            bad2.style.transform = `translate3d(0, ${(windowScrolled - bad2.offsetTop + 250) * 1}px, 0)`;
            bad2.style.transition = '0.2s';
        }
        if (windowScrolled - bad2.offsetTop > 182){
            bad2.style.opacity = 0;
            bad2.style.transition = '0.2s';
        }
    }
    let car_block = document.querySelector('.car_block');
    // console.log('car block offset : ' + car_block.offsetTop);
    // if (windowScrolled - car_block.offsetTop > -512) {
    //     car_block.style.transform = `translate3d(${5}px, 0, 0)`;
    //     car_block.style.transition = `0.25s`;
    // }
    // vehicle_col.getBoundingClientRect().top)
    let car_enemy = document.querySelector('.car_enemy');
    console.log('topc: '+document.querySelector('#dialog9').getBoundingClientRect().top)
    if (w > 1000) {
        if (document.querySelector('#dialog9').getBoundingClientRect().top < -5200) {
            car_enemy.style.opacity = 0;
            car_enemy.style.transform = `translate3d(0, 0, 0)`;
            
        } else {
        if (document.querySelector('#dialog9').getBoundingClientRect().top < -200) {
            car_enemy.style.transform = `translate3d(0, ${(windowScrolled - car_enemy.offsetTop - main_bus.getBoundingClientRect().top) * 1.5 - 1000}px, 0)`
            console.log('after bus :'+car_enemy.offsetTop);
            car_enemy.style.opacity = 1;
            }   else{
                car_enemy.style.opacity = 0;
                }
            }
        } 
    if (w > 1 && w < 480) {
        if (document.querySelector('#dialog9').getBoundingClientRect().top < -800) {
            car_enemy.style.opacity = 0;
            car_enemy.style.transform = `translate3d(0, 0, 0)`;
            
        } else {
        if (document.querySelector('#dialog9').getBoundingClientRect().top < 100) {
            car_enemy.style.transform = `translate3d(0, ${(windowScrolled - car_enemy.offsetTop - main_bus.getBoundingClientRect().top) * 3 + 650}px, 0)`;
            console.log('after bus :'+car_enemy.offsetTop);
            car_enemy.style.opacity = 1;
        }else{
            car_enemy.style.opacity = 0;
        }
        }
    } 
    if (w > 481 && w < 1000) {
        if (document.querySelector('#dialog9').getBoundingClientRect().top < -1800) {
            car_enemy.style.opacity = 0;
            car_enemy.style.transform = `translate3d(0, 0, 0)`;
            
        } else {
            if (document.querySelector('#dialog9').getBoundingClientRect().top < 0) {
                car_enemy.style.transform = `translate3d(0, ${(windowScrolled - car_enemy.offsetTop - main_bus.getBoundingClientRect().top) * 2 - 100}px, 0)`;
                console.log('after bus :'+car_enemy.offsetTop);
                car_enemy.style.opacity = 1;
        }else{
            car_enemy.style.opacity = 0;
            
        }
        }
    }
    if (windowScrolled - pop_up11.offsetTop < -2118) {
        // car_enemy.style.opacity = 0;
    }
    // else if(windowScrolled - car_enemy.offsetTop > 200) {
    //     car_enemy.style.transform = `translate3d(0, ${(windowScrolled - car_enemy.offsetTop + 660) * 0.95}px, 0)`;
    // }  windowScrolled - bus_location + 550   if(windowScrolled - bus_location + 250 > 13660)
    let end_door = document.querySelector('.end_door');
    console.log('end : ' + end_door.offsetTop);
    if (w > 481 && w < 1000) {
        if(windowScrolled - pop_up11.offsetTop > -720){
            main_bus.style.transform = `translate3d(0,${windowScrolled - bus_location + 550}px, 0)`;
            main_bus.style.transition = 'none';
        }
        // }else if(windowScrolled - pop_up11.offsetTop > -760){
        //         main_bus.style.transform = `translate3d(0,${windowScrolled - bus_location + 550}px, 0)`;
        //         main_bus.style.transition = '0.5s';
        // }else{
        //     main_bus.style.transition = 'none';
        // }
    }
    console.log('w:' + w)
    if(w>376 && w < 481){
        if(windowScrolled - pop_up11.offsetTop > -680){
            main_bus.style.transform = `translate3d(0,${windowScrolled - bus_location + 770}px, 0)`;
            main_bus.style.transition = 'none';
            pop_up6.style.opacity = 0;
            pop_up6.style.transform = `scale(0)`;
            pop_up8.style.opacity = 0;
            pop_up8.style.transform = `scale(0)`;
            pop_up10.style.transform = `scale(0)`;
            pop_up10.style.opacity = 0;
        
        }else if(windowScrolled - pop_up11.offsetTop > -700){
                main_bus.style.transform = `translate3d(0,${windowScrolled - bus_location + 770}px, 0)`;
                main_bus.style.transition = '0.5s';
                pop_up6.style.opacity = 0;
                pop_up6.style.transform = `scale(0)`;
                pop_up8.style.opacity = 0;
                pop_up8.style.transform = `scale(0)`;
                pop_up10.style.transform = `scale(0)`;
                pop_up10.style.opacity = 0;
        }else{
            main_bus.style.transition = 'none';
        }
    }else if(w>1 && w < 376){
        if(windowScrolled - pop_up11.offsetTop > -680){
            main_bus.style.transform = `translate3d(0,${windowScrolled - bus_location + 580}px, 0)`;
            main_bus.style.transition = 'none';
            pop_up6.style.opacity = 0;
            pop_up6.style.transform = `scale(0)`;
            pop_up8.style.opacity = 0;
            pop_up8.style.transform = `scale(0)`;
            pop_up10.style.transform = `scale(0)`;
            pop_up10.style.opacity = 0;
        
        }else if(windowScrolled - pop_up11.offsetTop > -700){
                main_bus.style.transform = `translate3d(0,${windowScrolled - bus_location + 580}px, 0)`;
                main_bus.style.transition = '0.5s';
                pop_up6.style.opacity = 0;
                pop_up6.style.transform = `scale(0)`;
                pop_up8.style.opacity = 0;
                pop_up8.style.transform = `scale(0)`;
                pop_up10.style.transform = `scale(0)`;
                pop_up10.style.opacity = 0;
        }else{
            main_bus.style.transition = 'none';
        }
    }
    let greenEnd = document.querySelector('.greenEnd');
    console.log('greenEnd : ' + greenEnd.offsetTop);
    if (w>1000){
        if(windowScrolled - greenEnd.offsetTop > 123){
            greenEnd.style.right = '23.8vw';
            greenEnd.style.transition = '0.2s';
            
        }
        if(windowScrolled - greenEnd.offsetTop < 123){
            greenEnd.style.right = '40vw';
            greenEnd.style.transition = '0.2s';
            
        }
    }
    if (w > 481 && w < 1000){
        if(windowScrolled - greenEnd.offsetTop > -408){
            greenEnd.style.right = '24.7vw';
            greenEnd.style.transition = '0.2s';
            
        }
        if(windowScrolled - greenEnd.offsetTop < -408){
            greenEnd.style.right = '40vw';
            greenEnd.style.transition = '0.2s';
            
        }
    }
    if (w > 1 && w < 480){
        if(windowScrolled - greenEnd.offsetTop > -697){
            greenEnd.style.right = '24.7vw';
            greenEnd.style.transition = '0.2s';
            
        }
        if(windowScrolled - greenEnd.offsetTop < -697){
            greenEnd.style.right = '40vw';
            greenEnd.style.transition = '0.2s';
            
        }
    }
    
});

// function toggle(){
//     var blur = document.getElementById('blur');
//     blur.classList.toggle('active')
//     var popup = document.getElementById(>'popup');
//     popup.classList.toggle('active')
// }

function releaseLockScreen() {
    document.body.classList.remove("stop-scrolling");
}


function myFunction() {
    window.addEventListener
    var valueY = window.scrollY;
    document.getElementById("myText").innerHTML = valueY + '<br>w:'+widthD+ '<br>h:'+hightD;
    document.getElementById("myText").innerHTML = valueY + '<br>w:'+widthD+ '<br>h:'+hightD;
    
}

// olded

function div_show(){
    bulur.style.visibility = "visible";
    document.getElementById('abc').style.display = "block";
    document.body.classList.add("stop-scrolling");
    //Unlock ScrollMouse
    // window.onscroll = () => {};
};
function div_show2(){
        
    document.getElementById('abc2').style.display = "block";
    document.getElementById('abc').style.display = "none";
    document.getElementById('abc3').style.display = "none";
    // document.body.classList.add("stop-scrolling");

    //Unlock ScrollMouse
    // window.onscroll = () => {};
};
function div_show3(){
        
    document.getElementById('abc3').style.display = "block";
    document.getElementById('abc').style.display = "none";
    document.getElementById('abc2').style.display = "none";
    // document.body.classList.add("stop-scrolling");

    //Unlock ScrollMouse
    // window.onscroll = () => {};
};

function div_hide(){
    document.getElementById('abc').style.display = "none";
    document.getElementById('abc2').style.display = "none";
    document.getElementById('abc3').style.display = "none";
    document.body.classList.remove("stop-scrolling");
    bulur.style.visibility = "hidden";
}

//lock submit button
$(".check-policy").on("change", function() {
    checkedFunc("check1", "check2", "check3", "check4", "check5");
});

function checkedFunc(element1Id, element2Id, element3Id, element4Id, element5Id) {
    var mybutton = document.getElementById("submit");
    var accept = document.getElementById("accept");
    var element1 = document.getElementById(element1Id);
    var element2 = document.getElementById(element2Id);
    var element3 = document.getElementById(element3Id);
    var element4 = document.getElementById(element4Id);
    var element5 = document.getElementById(element5Id);
    if (element1.checked == true && element2.checked == true && element3.checked == true
        && element4.checked == true && element5.checked == true) {
    //   mybutton.class = "submit";
      mybutton.removeAttribute("disabled");
      accept.style.display = "block";
    } else {
    //   mybutton.class = "button:disabled";
      mybutton.setAttribute("disabled", "disabled");
      accept.style.display = "none";
    }
}

function changeImage(fileName){
    let img = document.querySelector('.car_b');
    img.setAttribute("src", fileName);
}
// old

// function scrollUnlock() {
//     window.onscroll = () => {};
// }

