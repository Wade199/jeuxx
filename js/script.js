
var btnJouer = document.getElementById("btJouer");

window.addEventListener("load", onLoad);
btnJouer.addEventListener("click",btnclick, false);
var images = new Array(2);

var plateau = document.getElementById('plateau');
var liste = document.getElementById('liste');


function btnclick(){
		console.log("test");
		for(let i = 0; i < images.length; i++){
			images[i] = new Array(4);
		}
	console.log(images);
	var possible = new Array(0);
	for(let k=0;k<8;k++){
		possible.push(k%4);
	}
	console.log(possible);
	
	let nb = possible.length;
	for(let ligne = 0; ligne < images.length;ligne++){
		for(let colonne = 0; colonne < images[ligne].length;colonne++){
			let random = Math.round(Math.random() * (nb-1));
			//console.log('random -> ' + random);
			images[ligne][colonne]=possible[random];
			for(let x = random; x < nb-1; x++){
				possible[x] = possible [x+1];
			}
			//console.log('nb -> ' + nb + ' résultat -> '+possible[random]);
			possible[nb-1] = 'x';
			//console.log('possible ->');
			//console.log(possible);
			nb--;
		}
	}
	
	plateau.innerHTML = "";
	table = document.createElement("table");
	plateau.appendChild(table);
	
	for(let ligne = 0; ligne < images.length;ligne++){
		tr = document.createElement("tr");
		table.appendChild(tr);
		for(let colonne = 0; colonne < images[ligne].length;colonne++){
			td = document.createElement("td");
			td.classList.add('text-center');
			td.addEventListener("click", tdClick, false);
			td.classList.add('image');
			tr.appendChild(td);
			img = document.createElement("img");
			console.log('ligne '+ligne+'colonne'+colonne+' '+images[ligne][colonne]);
			img.src = liste.children[images[ligne][colonne]].src;
			img.style.display = "none";
			span = document.createElement("span");
			span.innerText = '?';
			span.classList.add('dos');
			span.classList.add('text-danger');
			span.classList.add('font-weight-bold');
			span.classList.add('text-center');
			td.appendChild(img);
			td.appendChild(span);
		}
	}	
	
	console.log(images);
}

function onLoad(){
	btnJouer.removeAttribute("disabled");
	
}
function tdClick(){
	this.children[0].style.display = "block";
	this.children[1].style.display = "none";
	
	setTimeout(()=>{
		this.children[0].style.display = "none";
		this.children[1].style.display = "block";
	},"1000");
}



