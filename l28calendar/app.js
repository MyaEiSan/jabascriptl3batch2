 // Init
var getcurmonth = document.getElementById('curmonth');
var getcuryear = document.getElementById('curyear');
var getcaldays = document.getElementById('caldays');
var getuimonths = document.getElementById('months');
var getuiyears = document.getElementById('years');

var getyearbtn = document.querySelector('.year-btn');

var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var startyear = 2010;
var endyear = 2030;

var month,year;

window.addEventListener('load',function(){
	// console.log('hay i am working');

	var svday = new Date();
	month = svday.getMonth();
	year = svday.getFullYear();
	console.log(svday); // Mon Feb 20 2023 07: 24:26 GMT+0630 (Myanmar Time)
	console.log(month); // 1
	console.log(year); // 2023

	getcurmonth.textContent = months[month];
	getcuryear.innerText = year;

	initmonths();
	inityears();
	initdays();

});

function initmonths(){

	// console.log('hay i am month');

	getuimonths.innerHTML = '';

	for(var x = 0; x < months.length; x++){
		// <div class="dropdown-item">Jan</div>

		var newdiv = document.createElement('div');
		newdiv.textContent = months[x];
		newdiv.classList.add('dropdown-item');

		// console.log(newdiv);

		// newdiv.addEventListener('click',function(){
			// console.log(this);
			// console.log(this.textContent);

			// console.log(x); //12
		// });


		// newdiv.onclick = (function(){
			// console.log(x);
		// })();

		newdiv.onclick = selectmonth(x);
		getuimonths.appendChild(newdiv);


	}
}

function selectmonth(num){
	// console.log(num);

	var allidx = num; // 0 to 11

	return function(){
		month = allidx;
		// console.log(num);
		getcurmonth.textContent = months[month];
		initdays();
	}


}


function inityears(){
	getuiyears.innerText = '';

	for(var x = startyear; x <= endyear ; x++){
		// console.log(x);
		// <div class="dropdown-item">2000</div>

		var newdiv = document.createElement('div');
		newdiv.innerText = x;
		newdiv.className = "dropdown-item";

		// console.log(newdiv);

		newdiv.onclick = (function(){
			// console.log(x);

			var allidx = x; 
			console.log(allidx); // 2000 to 2030

			return function(){
				year = allidx;
				console.log(year);
				getcuryear.innerText = year;
				initdays();
			}

		})();

		getuiyears.appendChild(newdiv);
	}
}



function initdays(){
	getcaldays.innerHTML = '';

	var tmpdays = new Date(year,month,0);
	// console.log(tmpdays); //Tue Jan 31 2023 00:00:00 GMT+0630  (Myanmar Time)
	var getalldays = alldays(year,month);
	// console.log(tmpendday);
	var getweekday = tmpdays.getDay();
	// console.log(getweekday); // 2(2 mean Tuesday)

	// <div id="" class="day">1</div>

	// get space for previous days
	for(var i = 0; i <= getweekday; i++){
		// console.log(i);

		var newdiv = document.createElement('div');
		newdiv.className = "day blank";

		// console.log(newdiv);

		getcaldays.appendChild(newdiv);
	}

	for(var x = 0; x < getalldays; x++){
		// console.log(x);

		var addday = x+1;

		var newdiv = document.createElement('div');
		newdiv.textContent = addday;
		newdiv.classList.add('day');

		// console.log(newdiv);

		getcaldays.appendChild(newdiv);
	}

}

function alldays(year,month){
	// console.log(year,month);

	// console.log(new Date());
	// year month day
	// console.log(new Date(2023,1,10));
	// console.log(new Date(2023,1,0));
	// console.log(new Date(2023,0,0));
	// console.log(new Date(2023,5,0));
	// console.log(new Date(2023,1,30));

	var curalldays = new Date(year,month+1,0);
	// console.log(curalldays);
	curalldays = curalldays.getDate();
	console.log(curalldays);

	// 28 

	return curalldays;
}


getyearbtn.addEventListener('click',function(){

	if(this.lastElementChild.classList.contains('show')){
		this.lastElementChild.classList.remove('show');
	}else{
		this.lastElementChild.classList.add('show');
	}

});


// 20CL
