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