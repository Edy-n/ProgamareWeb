let ora = 20;
let salut = document.getElementById("numele");

// Verificăm dacă am găsit elementul în HTML înainte să îl modificăm
if (salut) {
	if (ora < 12) {
		salut.textContent = "Bună dimineața!";
	}
	else if (ora < 18) {
		salut.textContent = "Bună ziua!";
	}
	else {
		salut.textContent = "Bună seara!";
	}
	console.log("Mesajul afișat este: " + salut.textContent);
} else {
	console.error("Elementul cu id-ul 'numele' nu a fost găsit.");
}

const form = document.getElementById("form");
const feedbackElement = document.getElementById("form-feedback");

if (form && feedbackElement) {
	form.addEventListener("submit", function (event) {
		event.preventDefault();

		const nume = document.getElementById("nume").value.trim();
		const email = document.getElementById("email").value.trim();
		const mesaj = document.getElementById("message").value.trim();

		if (nume.length < 3) {
			feedbackElement.style.color = "red";
			feedbackElement.textContent = "Nume prea scurt!";
			return;
		}

		if (!email.includes("@")) {
			feedbackElement.style.color = "red";
			feedbackElement.textContent = "Email invalid!";
			return;
		}

		if (mesaj.length < 10) {
			feedbackElement.style.color = "red";
			feedbackElement.textContent = "Mesaj prea scurt!";
			return;
		}

		feedbackElement.style.color = "green";
		feedbackElement.textContent = `Multumim, ${nume}! Mesajul a fost trimis.`;
	});
} else {
	console.error("Formularul sau elementul de feedback nu a fost găsit.");
}

// fetching the button 
let darkmode = document.getElementById("darkmode-btn");
// adding event listener to the button
if (darkmode) {
	darkmode.addEventListener("click", function () {
		const darkModeActiv = document.body.classList.toggle("dark-mode");
		alert(darkModeActiv ? "Dark mode activat!" : "Dark mode dezactivat!");
	});
} else {
	console.error("Butonul cu id-ul 'darkmode-btn' nu a fost găsit.");
}
