var windowScrolled;
var mute = 0;
var w = window.innerWidth;
var num_lock = 0;
var check = 0;
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
// var vid1 = document.getElementById("traffic");
// var vid2 = document.getElementById("peed");
// var vid3 = document.getElementById("bridge_sound");
// window.onscroll = () => {
//     window.scrollTo(0, 500);
// };

window.addEventListener('scroll', () => {
    windowScrolled = window.pageYOffset || this.document.documentElement.scrollTop;
    console.log(windowScrolled);
    console.log('mute: '+mute)
    // vid1.volume = 0.2;
    // vid1.volume = 0.8;
    // vid2.volume = 0.8;
    // vid3.volume = 0.2;
    let btn = document.querySelector('.btn_register_container');
    if(w > 1000){
        if(windowScrolled > btn.offsetTop - 500 && windowScrolled < btn.offsetTop + 100){
            if(check==0){
                document.body.classList.add("stop-scrolling");
                check = 1;
        }
            
        }
    }else if (w > 481 && w < 1000){
        if(windowScrolled > btn.offsetTop - 200 && windowScrolled < btn.offsetTop + 50){
            if(check==0){
                document.body.classList.add("stop-scrolling");
                check = 1;
        }
        }
    }else if (w > 1 && w < 481){
        if(windowScrolled > btn.offsetTop - 100 && windowScrolled < btn.offsetTop + 20){
            if(check==0){
                document.body.classList.add("stop-scrolling");
                check = 1;
        }
        }
    }
    let cloud_tleft = document.querySelector('.cloud_tleft');
    cloud_tleft.style.transform = `translateX(${windowScrolled * 2}px)`;

    let cloud_bleft = document.querySelector('.cloud_bleft');
    cloud_bleft.style.transform = `translateX(${windowScrolled}px)`;

    let cloud_right = document.querySelector('.cloud_right');
    cloud_right.style.transform = `translateX(${windowScrolled * 0.5}px)`;

    let bus_A = document.querySelector('.car_a');
    bus_A.style.transform = `translate3d(${windowScrolled * 0.3}px, 0, 0)`;

    let main_bus = document.querySelector('.car_b');
    let bus_location = main_bus.offsetTop;
    console.log('bus is : ' + bus_location);

    let human_animate_1 = document.querySelector('#driver1');
    let human_animate_2 = document.querySelector('#driver2');
    
    human_animate_1.style.transform = `translateX(-${windowScrolled * 0.155}px) scaleX(-1)`;
    human_animate_2.style.transform = `translateX(-${windowScrolled * 0.155}px) scaleX(-1)`;
    if (windowScrolled > bus_location - 300) {
        human_animate_1.style.visibility = 'hidden';
        human_animate_2.style.visibility = 'hidden';
    } else {
        human_animate_1.style.visibility = 'visible';
        human_animate_2.style.visibility = 'visible';
    }
    
    let human_animate_3 = document.querySelector('#driver3');
    let human_animate_4 = document.querySelector('#driver4');
    if (w > 1000){
        human_animate_3.style.opacity = 0;
        human_animate_4.style.opacity = 0;
        if (windowScrolled - human_animate_3.offsetTop > -416){
            human_animate_3.style.opacity = 1;
            human_animate_4.style.opacity = 1;
            human_animate_3.style.transform = `translateX(${windowScrolled * 0.02}px) `;
            human_animate_4.style.transform = `translateX(${windowScrolled * 0.02}px) `;
        
        }
        else if (windowScrolled - human_animate_3.offsetTop < -416){
            human_animate_3.style.opacity = 0;
            human_animate_4.style.opacity = 0;
        }
    }
    
    
    
    console.log('driver3 : ' + human_animate_3.offsetTop);
    
    let final_garage = document.querySelector('.garageEnd');
    let final_text = document.querySelector('.textEnd');
    console.log('garage end is ' + final_garage.offsetTop);
    // let final_garage = document.querySelector('.garageEnd');
    // console.log('main bus is : ' + main_bus.offsetTop);
    // console.log('garage end is ' + final_garage.offsetTop);
    // if (windowScrolled - final_garage.offsetTop > -205) {
    //     main_bus.style.transform = `translateY(${final_garage.offsetTop - 20}px)`;
    // }
    if (windowScrolled - bus_location > -300 && windowScrolled - final_garage.offsetTop <= -205 ) {
        main_bus.style.transform = `translate3d(0, ${windowScrolled - bus_location + 300}px, 0)`;
    } 
    else if (windowScrolled - final_garage.offsetTop > -205) {
        windowScrolled = final_garage.offsetTop;
        main_bus.style.transform = `translate3d(0, ${windowScrolled - bus_location + 205}px, 0)`;
    }

    let dialog1 = document.querySelector('.paragraph');
    let peed = document.querySelector('#peed');
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
            peed.play();
            mute += 1;
        }
    }

    let pop_up1 = document.querySelector('.pop-up1');
    // console.log('dialog is : ' + pop_up1.offsetTop);
    if (windowScrolled - pop_up1.offsetTop < -484) {
        pop_up1.style.opacity = 0;
        pop_up1.style.transform = `scale(0)`;
        pop_up1.style.transition = `0.4s`;
    } else {
        pop_up1.style.opacity = 1;
        pop_up1.style.transform = `scale(1)`;
        pop_up1.style.transition = `0.4s`;
    }
    
    let car_container = document.querySelector('.car_middleweb_container');
    let red_car = document.querySelector('.car_r');
    let green_car = document.querySelector('.car_g');
    if (windowScrolled - car_container.offsetTop > -1138) {
        red_car.style.transform = `translateX(${(windowScrolled - car_container.offsetTop + 1138) * -0.5}px)`;
        green_car.style.transform = `translateX(${(windowScrolled - car_container.offsetTop + 1138) * 0.5}px)`;
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

    let memorial_bridge_location = document.querySelector('#memorial-bridge');
    let bridgeSound = document.getElementById('bridge_sound');
    // console.log('bridge is : ' + memorial_bridge_location.offsetTop);
    let br1 = document.getElementById('br1');
    let br2 = document.getElementById('br2');
    br1.style.transformOrigin = "left bottom";
    br2.style.transformOrigin = "right bottom";
    if (windowScrolled - memorial_bridge_location.offsetTop < -340) {
        br1.style.transition = '7s';
        br2.style.transition = '7s';
        br1.style.rotate = 0 + 'deg';
        br2.style.rotate = 0 + 'deg';
    } 
    else {
        br1.style.transition = '7s';
        br2.style.transition = '7s';
        br1.style.rotate = `-45deg`;
        br2.style.rotate = `45deg`;
        if (mute == 1) {
            bridgeSound.play();
            bridgeSound.volume = 0.07;
            mute += 1;
        }
    }
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
    let pop_up5 = document.querySelector('.di_5');
    // console.log('pop5 is = ' + pop_up5.offsetTop);
    if (windowScrolled - pop_up5.offsetTop < -312) {
        pop_up5.style.opacity = 0;
        pop_up5.style.transform = `scale(0)`;
        pop_up5.style.transition = `0.4s`;
    } else {
        pop_up5.style.opacity = 1;
        pop_up5.style.transform = `scale(1)`;
        pop_up5.style.transition = `0.4s`;
        if (num_lock == 0) {
            document.body.classList.add("stop-scrolling");
            num_lock += 1;
        }
    }
    console.log('num lock : ' + num_lock);


    let pop_up6 = document.querySelector('.pop-up6');
    // console.log('pop6 = ' + pop_up6.offsetTop);
    if (windowScrolled - pop_up6.offsetTop < -416) {
        pop_up6.style.opacity = 0;
        pop_up6.style.transform = `scale(0)`;
        pop_up6.style.transition = `0.4s`;
    } else {
        pop_up6.style.opacity = 1;
        pop_up6.style.transform = `scale(1)`;
        pop_up6.style.transition = `0.4s`;
    }

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

    let car_block = document.querySelector('.car_block');
    // console.log('car block offset : ' + car_block.offsetTop);
    if (windowScrolled - car_block.offsetTop > -660) {
        car_block.style.transform = `translate3d(0, ${(windowScrolled - car_block.offsetTop + 660) * 0.9}px, 0)`;
        // car_block.style.transition = `0.25s`;
    }
    
    let good1 = document.querySelector('.good1');
    good1.style.opacity = 0;
    console.log('good1 offset : ' + good1.offsetTop);
    if (w > 1000){
        if (windowScrolled - good1.offsetTop > -400) {
            good1.style.opacity = 1;
            good1.style.transform = `translate3d(0, ${(windowScrolled - good1.offsetTop + 400) * 1}px, 0)`;
            // car_block.style.transition = `0.25s`;
            good1.style.transition = '0.2s';
        }
        if (windowScrolled - good1.offsetTop > 200){
            good1.style.opacity = 0;
            good1.style.transition = '0.2s';
        }
    }
    
    if (w > 481 && w < 1000){
        if (windowScrolled - good1.offsetTop > 443) {
            good1.style.opacity = 1;
            good1.style.transform = `translate3d(0, ${(windowScrolled - good1.offsetTop + 300) * 1}px, 0)`;
            good1.style.transition = '0.2s';
        }
        if (windowScrolled - good1.offsetTop > 737){
            good1.style.opacity = 0;
            good1.style.transition = '0.2s';
        }
    }
    if (w > 1 && w < 480){
        if (windowScrolled - good1.offsetTop > -294) {
            good1.style.opacity = 1;
            good1.style.transform = `translate3d(0, ${(windowScrolled - good1.offsetTop + 320) * 1}px, 0)`;
            good1.style.transition = '0.2s';
        }
        if (windowScrolled - good1.offsetTop > -36){
            good1.style.opacity = 0;
            good1.style.transition = '0.2s';
        }
    }
    let good2 = document.querySelector('.good2');
    good2.style.opacity = 0;
    console.log('good2 offset : ' + good2.offsetTop);
    if (w > 1000){
        if (windowScrolled - good2.offsetTop > -300) {
            good2.style.opacity = 1;
            good2.style.transform = `translate3d(0, ${(windowScrolled - good2.offsetTop + 300) * 1}px, 0)`;
            good2.style.transition = '0.2s';
        }
        if (windowScrolled - good2.offsetTop > 250){
            good2.style.opacity = 0;
            good2.style.transition = '0.2s';
        }
    }
    if (w > 481 && w < 1000){
        if (windowScrolled - good2.offsetTop > -532) {
            good2.style.opacity = 1;
            good2.style.transform = `translate3d(0, ${(windowScrolled - good2.offsetTop + 300) * 1}px, 0)`;
            // car_block.style.transition = `0.25s`;
            good2.style.transition = '0.2s';
        }
        if (windowScrolled - good2.offsetTop > 68){
            good2.style.opacity = 0;
            good2.style.transition = '0.2s';
        }
    }
    if (w > 1 && w < 480){
        if (windowScrolled - good2.offsetTop > -406) {
            good2.style.opacity = 1;
            good2.style.transform = `translate3d(0, ${(windowScrolled - good2.offsetTop + 320) * 1}px, 0)`;
            good2.style.transition = '0.2s';
        }
        if (windowScrolled - good2.offsetTop > 200){
            good2.style.opacity = 0;
            good2.style.transition = '0.2s';
        }
    }

    let pop_up8 = document.querySelector('.di_8');
    if (windowScrolled - pop_up8.offsetTop < -312) {
        pop_up8.style.opacity = 0;
        pop_up8.style.transform = `scale(0)`;
        pop_up8.style.transition = `0.4s`;
    } else {
        pop_up8.style.opacity = 1;
        pop_up8.style.transform = `scale(1)`;
        pop_up8.style.transition = `0.4s`;
        if (num_lock == 1) {
            document.body.classList.add("stop-scrolling");
            num_lock += 1;
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

    let pop_up10 = document.querySelector('.pop-up10');
    if (windowScrolled - pop_up10.offsetTop < -389) {
        pop_up10.style.opacity = 0;
        pop_up10.style.transform = `scale(0)`;
        pop_up10.style.transition = `0.4s`;
    } else {
        pop_up10.style.opacity = 1;
        pop_up10.style.transform = `scale(1)`;
        pop_up10.style.transition = `0.4s`;
    }

    let pop_up11 = document.querySelector('.di_11');
    // console.log('diff11 = ' + (windowScrolled - pop_up11.offsetTop)); //-718
    if (windowScrolled - pop_up11.offsetTop < -318) {
        pop_up11.style.opacity = 0;
        pop_up11.style.transform = `scale(0)`;
        pop_up11.style.transition = `0.4s`;
    } else {
        pop_up11.style.opacity = 1;
        pop_up11.style.transform = `scale(1)`;
        pop_up11.style.transition = `0.4s`;
        if (num_lock == 2) {
            document.body.classList.add("stop-scrolling");
            num_lock += 3;
        }
    }

    let pop_up12 = document.querySelector('.pop-up12');
    // console.log('diff11 = ' + (windowScrolled - pop_up11.offsetTop)); //-718
    console.log('pop_up12 offset : ' + pop_up12.offsetTop);
    if (w > 481 && w < 1000){
        if (windowScrolled - pop_up12.offsetTop < -300) {
            pop_up12.style.opacity = 0;
            pop_up12.style.transform = `scale(0)`;
            pop_up12.style.transition = `0.4s`;
        } else {
            pop_up12.style.opacity = 1;
            pop_up12.style.transform = `scale(1)`;
            pop_up12.style.transition = `0.4s`;
            
        }
    }
    if (w>1000){
        if (windowScrolled - pop_up12.offsetTop < -535) {
            pop_up12.style.opacity = 0;
            pop_up12.style.transform = `scale(0)`;
            pop_up12.style.transition = `0.4s`;
        } else {
            pop_up12.style.opacity = 1;
            pop_up12.style.transform = `scale(1)`;
            pop_up12.style.transition = `0.4s`;
            
        }
    }
    


});

// function toggle(){
//     var blur = document.getElementById('blur');
//     blur.classList.toggle('active')
//     var popup = document.getElementById('popup');
//     popup.classList.toggle('active')
// }

function myFunction() {
    window.addEventListener
    var valueY = window.scrollY;
    document.getElementById("myText").innerHTML = valueY + '<br>w:'+widthD+ '<br>h:'+hightD;
    
}

// olded

function releaseLockScreen() {
    document.body.classList.remove("stop-scrolling");
}

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
    // document.body.classList.add("stop-scrolling");

    //Unlock ScrollMouse
    // window.onscroll = () => {};
};

function div_hide(){
    document.getElementById('abc').style.display = "none";
    document.getElementById('abc2').style.display = "none";
    document.body.classList.remove("stop-scrolling");
    bulur.style.visibility = "hidden";
}

//lock submit button
$(".check-policy").on("change", function() {
    checkedFunc("check1", "check2", "check3", "check4");
});

function checkedFunc(element1Id, element2Id, element3Id, element4Id) {
    var mybutton = document.getElementById("submit");
    var accept = document.getElementById("accept");
    var element1 = document.getElementById(element1Id);
    var element2 = document.getElementById(element2Id);
    var element3 = document.getElementById(element3Id);
    var element4 = document.getElementById(element4Id);
    if (element1.checked == true && element2.checked == true && element3.checked == true
        && element4.checked == true) {
    //   mybutton.class = "submit";
      mybutton.removeAttribute("disabled");
      accept.style.display = "block";
    } else {
    //   mybutton.class = "button:disabled";
      mybutton.setAttribute("disabled", "disabled");
      accept.style.display = "none";
    }
}
// old

// function scrollUnlock() {
//     window.onscroll = () => {};
// }

