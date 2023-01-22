var getimgs = document.querySelectorAll('.img');
// console.log(getimgs); // NodeList

var getmodal = document.querySelector('.modal');
var getbtnclose = document.querySelector('.btn-close');
var getviews = document.getElementsByClassName('view');
// console.log(getviews);//HTML Collection

var getprevbtn = document.querySelector('.prev');
var getnextbtn = document.querySelector('.next');
var getcounter = document.querySelector('.counter');
var getcaption = document.querySelector('.caption');
var getnoactives = document.getElementsByClassName('noactive')
// console.log(getnoactives); //HTML Collection

var curidx = 1;

for(var i = 0; i < getimgs.length; i++){
	// console.log(getimgs[i]);

	// getimgs[i].addEventListener('click',showmodal);

	getimgs[i].addEventListener('click',function(e){
		showmodal();

        // console.log(e.target.alt);
        // console.log(this.alt);

        const findids = this.alt.split('').filter(rmspace=>rmspace.trim() !== '');

        // console.log(findids);
        // console.log(findids[findids.length-1]);

        curidx = Number(findids[findids.length-1]);
        // console.log(curidx);
        // console.log(typeof curidx);

        slideshow(curidx);
	});
}

function showmodal(){
	getmodal.style.display = "block";
}

// getbtnclose.addEventListener('click',function(){
// 	getmodal.style.display = "none";
// });

getbtnclose.onclick = function(){
	getmodal.style.display = "none";
}

document.addEventListener('click',function(e){
	// console.log(e.target);

	if(e.target === getmodal){
		getmodal.style.display = "none";
	}
	
});

function currentview(num){
	slideshow(num);
}

getnextbtn.addEventListener('click',function(){
	// console.log('i am next');

	slideshow(curidx += 1);
});

getprevbtn.addEventListener('click',function(){
	// console.log('i am prev');

	slideshow(curidx -= 1);
});

slideshow(curidx);

function slideshow(num){

	// console.log(num);
	var x;

	for(x = 0; x < getviews.length; x++){
		getviews[x].style.display = "none";
	}

	for(x=0; x < getnoactives.length; x++){
		// getnoactives[x].classList.remove('active');
		getnoactives[x].className = getnoactives[x].className.replace(" active","");
	}

	if(num > getviews.length){
		num = 1; 
		curidx = 1;
	}

	if(num < 1){
		num = getviews.length;
		curidx = getviews.length;
	}

	// console.log("this is curidx = ",curidx);
	// console.log("this is num = ",num);

	getcounter.textContent = `${num} / ${getviews.length}`;

	        // 1-1 = 0
	getviews[num-1].style.display = "block";
	        // 1-1 = 0
	getnoactives[num-1].className += " active";
	getcaption.innerText = getnoactives[num-1].alt;

}
