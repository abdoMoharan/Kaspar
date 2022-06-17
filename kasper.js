const myNav = document.querySelector('.main-ul');
const myBtn = document.querySelector('.btn');
myBtn.addEventListener('click',()=>{
    myNav.classList.toggle('show');
});
/*Start Sleder */
var sliderImage = Array.from(document.querySelectorAll('.img-slider img')),
    sliderConunt = sliderImage.length,
    startSlider =1,
    backBoutton = document.getElementById('back'),
    nextBoutton = document.getElementById('next');

    backBoutton.onclick = backSlider;
    nextBoutton.onclick = nextSlider;


    /*Crrat The Ul Element */
    var sliderUl = document.createElement('ul');
    sliderUl.setAttribute('id','polet-ul');
    /*Creat The li */
  for(var i = 1; i <= sliderConunt; i++){
      var sliderLi = document.createElement('li');
           sliderLi.setAttribute('data-index',i);
           sliderLi.appendChild(document.createTextNode(i));
           sliderUl.appendChild(sliderLi);
  }
  /*Add The Ul In Html */
  document.getElementById('ul-control').appendChild(sliderUl);
  var sliderIdUl = document.getElementById('polet-ul');
  var SlederIdUlLi = Array.from(document.querySelectorAll('#polet-ul li'));
 for(var i = 0; i <  SlederIdUlLi.length; i++ ){
    SlederIdUlLi[i].onclick = function(){
        startSlider =parseInt( this.getAttribute('data-index'));

        theChecher();
    }
   
 }
 setInterval(function(){
    if( startSlider <  sliderConunt ){
        startSlider++
    }else if(startSlider = sliderConunt){
        clearInterval;
        startSlider = 1;
    }
    theChecher();
 },5000);
  theChecher();
 
  /*Start The Function */
    /*Start THe Function Buttom */
    function nextSlider(){
      if(nextBoutton.classList.contains('despel')){
          return false;
      }else{
        startSlider++;
        theChecher();
      }
    }
    function backSlider(){
        if(backBoutton.classList.contains('despel')){
            return false;
        }else{
          startSlider--;
          theChecher();
        }
    }
    function theChecher(){
        removeAllClass();

        sliderImage[ startSlider - 1].classList.add('enargy');

        sliderIdUl.children[ startSlider - 1].classList.add('enargy');
        if(startSlider == 1){
            backBoutton.classList.add('despel');
        }else{
            backBoutton.classList.remove('despel');
        }
        
        if(startSlider == sliderConunt){
           nextBoutton.classList.add('despel');
        }else{
            nextBoutton.classList.remove('despel');
        }
    }
    function removeAllClass(){
        sliderImage.forEach(function(img){
            img.classList.remove('enargy');
        });

        SlederIdUlLi .forEach(function(item){
            item.classList.remove('enargy');
        });
    }
    /*End The Function Buttom */
    /*End The Function */
 
/*End Sleder */
/*Start Scolor Top*/
var mySclor = document.getElementById('top');
window.onscroll = function(){
    if(window.pageYOffset >= 950){
        mySclor.style.display = 'block';
    }else{
        mySclor.style.display = 'none';
    }
};
mySclor.onclick = function(){
    window.scrollTo(0,0);
};
/*End SSclor Top*/
/*Start The loop Image */
var myElment1 = document.getElementById('img-1'),
    image1 = [
        './image/shuffle-01.jpg',
        './image/set-1.jpg'
    ];
    function chancImage1(myElment1,image1){
        setInterval(()=>{
            var myRandom1 = Math.floor(Math.random() * image1.length);
            myElment1.src =   image1[myRandom1];
        },1000);
    };
    chancImage1(myElment1,image1);

    var myElment2 = document.getElementById('img-2'),
    image2 = [
        './image/shuffle-02.jpg',
        './image/set-2.jpg'
    ];

    function chancImage2(myElment2,image2){
        setInterval(()=>{
            var myRandom2 = Math.floor(Math.random() * image2.length);
            myElment2.src =   image2[myRandom2];
        },1000);
    };
    chancImage2(myElment2,image2);

    var myElment3 = document.getElementById('img-3'),
    image3 = [
        './image/shuffle-03.jpg',
        './image/set-3.jpg'
    ];

    function chancImage3(myElment3,image3){
        setInterval(()=>{
            var myRandom3 = Math.floor(Math.random() * image3.length);
            myElment3.src =   image3[myRandom3];
        },1000);
    };
    chancImage3(myElment3,image3);
   

        var myElment4 = document.getElementById('img-4'),
    image4 = [
        './image/shuffle-04.jpg',
        './image/set-4.jpg'
    ];

    function chancImage4(myElment4,image4){
        setInterval(()=>{
            var myRandom4 = Math.floor(Math.random() * image4.length);
            myElment4.src =   image4[myRandom4];
        },1000);
    };
    chancImage4(myElment4,image4);



        var myElment5 = document.getElementById('img-5'),
    image5 = [
        './image/shuffle-05.jpg',
        './image/set-5.jpg'
    ];

    function chancImage5(myElment5,image5){
        setInterval(()=>{
            var myRandom5 = Math.floor(Math.random() * image5.length);
            myElment5.src =   image5[myRandom5];
        },1000);
    };
    chancImage5(myElment5,image5);

        var myElment6 = document.getElementById('img-6'),
    image6 = [
        './image/shuffle-06.jpg',
        './image/set-6.jpg'
    ];

    function chancImage6(myElment6,image6){
        setInterval(()=>{
            var myRandom6 = Math.floor(Math.random() * image6.length);
            myElment6.src =   image6[myRandom6];
        },1000);
    };
    chancImage1(myElment6,image6);

        var myElment7 = document.getElementById('img-7'),
    image7 = [
        './image/shuffle-07.jpg',
        './image/set-7.jpg'
    ];

    function chancImage7(myElment7,image7){
        setInterval(()=>{
            var myRandom7 = Math.floor(Math.random() * image7.length);
            myElment7.src =   image7[myRandom7];
        },1000);
    };
    chancImage7(myElment7,image7);

var myElment8 = document.getElementById('img-8'),
    image8 = [
        './image/shuffle-08.jpg',
        './image/set-8.jpg'
    ];

    function chancImage8(myElment8,image8){
        setInterval(()=>{
            var myRandom8 = Math.floor(Math.random() * image8.length);
            myElment8.src =   image8[myRandom8];
        },1000);
    };
    chancImage8(myElment8,image8);
 
    
/*End The loop Image */

/*Start Contact Us*/
var myInputText = document.getElementById('text');
 
myInputText.onfocus = function(){
    if(this.placeholder === 'Your Name'){
        this.placeholder = '';
    }
}
myInputText.onblur = function(){
    if(this.placeholder === ''){
        this.placeholder = 'Your Name';
    }
};

var myInputEmail = document.getElementById('email');
 
myInputEmail.onfocus = function(){
    if(this.placeholder === 'Your Email'){
        this.placeholder = '';
    }
}
myInputEmail.onblur = function(){
    if(this.placeholder === ''){
        this.placeholder = 'Your Email';
    }
}


var myInputMassge= document.getElementById('arrea');
 
myInputMassge.onfocus = function(){
    if(this.placeholder === 'Your Messge'){
        this.placeholder = '';
    }
}
myInputMassge.onblur = function(){
    if(this.placeholder === ''){
        this.placeholder = 'Your Messge';
    }
}

 
/*End Contact us*/


