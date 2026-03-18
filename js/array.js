const arrLista = document.getElementById("educatie-lista");
const items = Array.from(arrLista.querySelectorAll("li"), li => li.textContent.trim());

console.log(items);

//EX 2 array filter
// items with length > 5
const filtered = items.filter(item => item.length < 10);
console.log(filtered);

// if item should contain 2025 somewhere
const filtered2 = items.filter(item => item.includes("2025"));
console.log(filtered2);

//ex 3 displaying only the first word
let first = items.map(item => item.split(' ')[0]);
console.log(first);

//ex4 extragem anii din fiecare element, afisam durata totala a studiilor (reduce)
const aniText = items.map(item => {
	const gasit = item.match(/\d{4}/);
	return gasit ? gasit[0] : null;
});


const ani = aniText
	.filter(an => an !== null)
	.map(an => Number(an));

console.log("Ani extrasi:", ani);


let durataTotala = 0;
if (ani.length >= 2) {
	const primulAn = ani[0];
	const ultimulAn = ani[ani.length - 1];
	durataTotala = ultimulAn - primulAn;
}


const sumaAni = ani.reduce((acc, an) => acc + an, 0);

console.log("Durata totala a studiilor:", durataTotala, "ani");
console.log("Suma anilor (reduce):", sumaAni);

