 var parap = document.getElementsByTagName("p")[0];

function Mq(){
		document.getElementsByTagName("nav")[0].style.flexDirection  = 'column';
//	document.getElementsByClassName('Dq')[0].style.transitionDuration="1s";
//document.getElementsByClassName('Dq')[0].style.marginLeft= "-"+ 50+"%";
	document.getElementsByTagName("header")[0].style.marginLeft= "-"+ 20+"%";
	document.getElementsByTagName("header")[0].style.transitionDuration="0.5s";

		





  




}


window.addEventListener('scroll', function() {
 YbiraemBlock();
});

function Giv(){


alert(window.pageYOffset);
}

function YbiraemBlock(){   // функция для смена фоны у header при скроллинге!!!
	if (window.pageYOffset < document.getElementsByTagName("header")[0].clientHeight) {
		

		document.getElementsByClassName('Center-Block')[0].style.visibility = "visible";
			document.getElementsByClassName('pe')[0].style.transitionDuration = "0.5s";
		  	document.getElementsByTagName('h1')[0].style.transitionDuration = "0.5s";
		  	document.getElementsByTagName('span')[0].style.transitionDuration = "0.5s";
		  	document.getElementsByClassName('btn')[0].style.transitionDuration = "0.5s";
		  	
		  	
			/*setTimeout( function() { document.getElementsByClassName('pe')[0].style.marginTop= "-"+15 +"%"; } , 800) // выполнение функций через время!!!
			setTimeout( function() { document.getElementsByTagName('h1')[0].style.marginTop= 2 +"%"; } , 1800)
			setTimeout( function() { document.getElementsByTagName('span')[0].style.marginTop= 5 +"%"; } , 2200)
			setTimeout( function() { document.getElementsByClassName('btn')[0].style.marginTop= 5 +"%"; } , 2200)*/
			
		
	}
		 else {
		  
	

		





}
function gg(){
if(window.pageYOffset/1.8 > document.getElementsByClassName('browse')[0].clientHeight){
		  	document.getElementsByClassName('browse')[0].style.visibility = 'visible';
		  	
		  	
document.getElementsByClassName('menu')[0].style.transitionDuration = '0.3s';
document.getElementsByClassName('stats')[0].style.transitionDuration = '0.3s';
document.getElementsByClassName('luks')[0].style.transitionDuration = '0.3s';

		  		setTimeout( function() { document.getElementsByClassName('luks')[0].style.marginTop= "-"+25 +"%"; } , 100) // выполнение функций через время!!!
		  		setTimeout( function() { document.getElementsByClassName('menu')[0].style.marginTop="-"+ 0 +"%"; } , 200) // выполнение функций через время!!!
			setTimeout( function() { document.getElementsByClassName('stats')[0].style.marginTop="-"+ 0 +"%"; } , 300)

} else {}

}

gg(); // выполнение функции при скроллинге блока browse


function mm(){
if(window.pageYOffset/0.6 > document.getElementsByClassName('Two-Section')[0].clientHeight){
		  		document.getElementsByClassName('Card')[0].style.transitionDuration = "0.5s";
		  	document.getElementsByClassName('Card')[1].style.transitionDuration = "0.5s";
		  	document.getElementsByClassName('Card')[2].style.transitionDuration = "0.5s";
		  	document.getElementsByClassName('Two-Section')[0].style.visibility = "visible";
		  	
			setTimeout( function() { document.getElementsByClassName('Card')[0].style.marginTop="-"+ 5 +"%"; } , 0) // выполнение функций через время!!!
			setTimeout( function() { document.getElementsByClassName('Card')[1].style.marginTop="-"+ 5 +"%"; } , 200)
			setTimeout( function() { document.getElementsByClassName('Card')[2].style.marginTop="-"+ 5 +"%"; } , 400)
		  	


} else {}

}

mm();
}