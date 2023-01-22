const languages = ["Nodejs","Reatjs","Vuejs","Laravel"];
const colors = ["red","skyblue","violet","yellow"];
const gettxtani = document.querySelector('.txtani');

// console.log(languages);
// console.log(languages[0]); //give index take value
// console.log(languages[1]);
// console.log(languages[2]);
// console.log(languages[3]); 

// console.log(languages.indexOf("Reactjs")); // give value take index
// console.log(languages.indexOf("Laravel"));

// console.log(colors[languages.indexOf("Reatjs")]);
// console.log(colors[languages.indexOf("Vuejs")]);

// return 0 - 3 
function* generator(){
	var idx = 0;

	while(true){
		yield idx++;

		if(idx > 3){
			idx = 0;
		}
	}
}

const testnumber = generator();

// console.log(testnumber.next()); // {value: 0, done: false}
// console.log(testnumber.next().value); // 0
// console.log(testnumber.next().value); // 1
// console.log(testnumber.next().value); // 2
// console.log(testnumber.next().value); // 3


// console.log(testnumber.next().value); // 0
// console.log(testnumber.next().value); // 1
// console.log(testnumber.next().value); // 2
// console.log(testnumber.next().value); // 3

// console.log(languages[testnumber.next().value]);
// console.log(languages[testnumber.next().value]);
// console.log(languages[testnumber.next().value]);
// console.log(languages[testnumber.next().value]);
// console.log(languages[testnumber.next().value]);


function showwords(word){

	let x = 0;

	// console.log(word);

	gettxtani.innerHTML = "";
	gettxtani.classList.add(colors[languages.indexOf(word)]);

	// gettxtani.innerHTML = word;
	// gettxtani.innerHTML += word[0];
	// gettxtani.innerHTML += word[1];


	let showintval = setInterval(function(){
		// gettxtani.innerHTML = word[0];
		// gettxtani.innerHTML += word[1];

		if(x >= word.length){
			clearInterval(showintval);
			deletewords();
		}else{
			gettxtani.innerHTML += word[x];
			x++;
		}
	},300);
}


function deletewords(){
	let getword = gettxtani.innerHTML;
	// console.log(getword);

	let getlastidx = getword.length - 1;
	// console.log(getlastidx);

	let delintval = setInterval(function(){
		if(getlastidx >= 0){
			gettxtani.innerHTML = gettxtani.innerHTML.substring(0,gettxtani.innerHTML.length -1);
			getlastidx--;
		}else{
			gettxtani.classList.remove(colors[languages.indexOf(getword)]);
			showwords(languages[gen.next().value]);
			clearInterval(delintval);
		}
	},300);
}

let gen = generator();
showwords(languages[gen.next().value]);


 let gettxtlights = document.querySelectorAll('.text-light');
 // console.log(gettxtlights);

 gettxtlights.forEach(function(gettxtlight){
 	// console.log(gettxtlight);

 	let arrtexts = gettxtlight.textContent.split("");
 	// console.log(arrtexts);

 	gettxtlight.textContent = "";

 	arrtexts.forEach(function(arrtext,idx){
 		// console.log(arrtext);

 		let newem = document.createElement('em');
 		newem.textContent = arrtext;
 		newem.style.animationDelay = `${idx * .05}s`;

 		gettxtlight.append(newem);
 	});

 });


// 28TE


// Generator Function

// function* genfun(){
// 	yield 1;
// 	yield 2;
// 	yield 3;
// }

// const getgen = genfun();

// console.log(getgen.next().value); //1
// console.log(getgen.next().value); //2
// console.log(getgen.next().value); //3
// console.log(getgen.next().vlaue); //undefined
// console.log(getgen.next().value); //undefined

// console.log(getgen.next()); //{value: 1, done: false}
// console.log(getgen.next().value); // 2
// console.log(getgen.next().value); // 3
// console.log(getgen.next().value); // undefined

// function abc(){ 
// 	return 1; 
// 	return 2; 
// 	return 3;
// }

// const getabc = abc();

// console.log(getabc);
// console.log(getabc);
// console.log(getabc);

