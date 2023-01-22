// Get Ui
const getvideoscreen = document.getElementById('videoscreen');

const playbtn = document.getElementById('play');
const prevbtn = document.getElementById('prev');
const nextbtn = document.getElementById('next');
const stopbtn = document.getElementById('stop');

// FOR RANGE
// const progress = document.getElementById('progress');

const getdisplaytime = document.getElementById('displaytime');
const getfullscreen = document.getElementById('fullscreen');

const getcontainer = document.querySelector('.container');
const getopnfullscreen = document.querySelector('.openfullscreen');
const getclsfullscreen = document.querySelector('.closefullscreen');

const gettitle = document.getElementById('title');
// FOR PROGRESS CONTAINER

const getprogressctn = document.querySelector('.progress-container');
const progress = document.getElementById('progress');

const videos = ['samplevideo1','samplevideo2'];

let curridx = 0;

loadvideo(videos[curridx]);

function loadvideo(vdo){
	getvideoscreen.src = `./source/${vdo}.mp4`;
	gettitle.textContent = vdo;
}

function playvdo(){
	playbtn.querySelector('i.fas').classList.remove('fa-play');
	playbtn.querySelector('i.fas').classList.add('fa-pause');
	// play() method came from video api
	getvideoscreen.play();
}

function pausevdo() {

    playbtn.querySelector('i.fas').classList.remove('fa-pause');
    playbtn.querySelector('i.fas').classList.add('fa-play');

    // pause() methd came from video api
    getvideoscreen.pause();
}

function playpausevdo() {
    //  paused keyword came from video api
    if (getvideoscreen.paused) {
        //getvideoscreen.play();
        playvdo();
    } else {
        //getvideoscreen.pause();
        pausevdo();
    }

}

function previousvdo(){
	curridx -=1;

	if (curridx < 0) {
        curridx = videos.length - 1;
    }

    //  console.log(curridx);
    loadvideo(videos[curridx]);
    playvdo();
}

function nextvdo(){
	curridx++;

    if (curridx > videos.length - 1) {
        curridx = 0;
    }

    // console.log(curridx);
    loadvideo(videos[curridx]);
    playvdo();
}


function updateprogress(e){

	// console.log(e.target);
	// console.log(e.srcElement);
	// console.log(this);

	// Method 2
	// const currentTime = e.target.currentTime;
	// const duration = e.target.duration;
	// console.log(currentTime,duration);

	// Method 3
	// const {currentTime} = e.target;
	// const {duration} = e.target;
	// console.log(currentTime,duration);

	// Method 4
	// const {currentTime,duration} = e.target;
	// console.log(currentTime,duration);

	// Method 5
	const [currentTime,duration] = [e.target.currentTime,e.srcElement.duration];
	// console.log(currentTime,duration);


	// Method 1

	// currentTime came from video api
	// console.log(getvideoscreen.currentTime);
	// console.log(getvideoscreen.duration);

	// console.log(getvideoscreen.currentTime / getvideoscreen.duration) * 100;

	// FOR RANGE
     // if(getvideoscreen.currentTime === 0){
     // 	progress.value = 0;
     // }else{
     // 	progress.value = (currentTime / duration) * 100;
     // }
	
	// FOR PROGRESS CONTAINER
	if(getvideoscreen.currentTime === 0){
     	progress.style.width = '0%';
     }else{
     	const progresspercent = (currentTime / duration) * 100;
     	progress.style.width = `${progresspercent}%`;
     }

	let getmins = Math.floor(getvideoscreen.currentTime/60);
	// console.log(getmins);

	// if(getmins < 10){
	// 	// getmins = '0'+getmins;
	// 	getmins = '0'+String(getmins);
	// }

	let getsecs = Math.floor(getvideoscreen.currentTime%60);
	// console.log(getsecs);

	// if(getsecs < 10){
	// 	// getsecs = '0'+gesecs;
	// 	getsecs = '0'+String(getsecs);
	// }

	// console.log(getmins,getsecs);
	// console.log(typeof getmins,typeof getsecs);

	// getdisplaytime.innerText = `${getmins}:${getsecs}`

	// Method 2 
	// Noted : padStart(area,startvalue) must be string data type
	const minutevalue = getmins.toString().padStart(2,'0');
	const secondvalue = getsecs.toString().padStart(2,'0');

	getdisplaytime.innerText = `${minutevalue}:${secondvalue}`

}


function openfullscreen(){
	if(getcontainer.requestFullscreen){
		getcontainer.requestFullscreen(); //standard w3c
	}else if(getcontainer.mozRequestFullscreen){
		getcontainer.mozRequestFullscreen(); //firefox
	}else if(getcontainer.webkitRequestFullscreen){
		getcontainer.webkitRequestFullscreen(); //webkit
	}else if(getcontainer.msRequestFullscreen){
		getcontainer.msRequestFullscreen(); //microsoft pro/ id / edge
	}

	getopnfullscreen.style.display = 'none';
	getclsfullscreen.style.display = "inline-block";
}

function closefullscreen(){
	if(document.exitFullscreen){
		document.exitFullscreen();
	}else if(document.mozCancelFullscreen){
		document.mozCancelFullscreen();
	}else if(document.webkitExitFullscreen){
		document.webkitExitFullscreen();
	}else if(document.msExitFullscreen){
		document.msExitFullscreen();
	}

	getopnfullscreen.style.display = 'inline-block';
	getclsfullscreen.style.display = "none";
}

function stopvideo(){
	getvideoscreen.currentTime = 0;

	pausevdo();
}

function setprogress(e){
	// console.log('hay');
	// console.log(progress.value*getvideoscreen.duration)/100;

	// FOR RANGE
	// getvideoscreen.currentTime = (progress.value*getvideoscreen.duration)/100;

	// FOR PROGRESS CONTAINER

	const getelewidth = this.clientWidth;
	// console.log(getelewidth);

	const getclickx = e.offsetX;
	// console.log(getclickx);

	const duration = getvideoscreen.duration;

	getvideoscreen.currentTime = (getclickx/getelewidth) * duration;
	// console.log(getvideoscreen.currentTime);
}



playbtn.addEventListener('click',playpausevdo);
nextbtn.addEventListener('click',nextvdo);
prevbtn.addEventListener('click',previousvdo);
stopbtn.addEventListener('click',stopvideo);

getvideoscreen.addEventListener('timeupdate',updateprogress);
getvideoscreen.addEventListener('ended',nextvdo);
getvideoscreen.addEventListener('click',playpausevdo);

// FOR RANGE
// progress.addEventListener('click',setprogress);

// FOR PROGRESS CONTAINER
getprogressctn.addEventListener('click',setprogress);

getopnfullscreen.addEventListener('click',openfullscreen);
getclsfullscreen.addEventListener('click',closefullscreen);