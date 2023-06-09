// Dodajte svoje skripte za animacije i interaktivnost ovdje

// Primjer animacije kada korisnik prelazi mišem preko slike mladenaca
const mladenacSlika = document.querySelector("img");

mladenacSlika.addEventListener("mouseover", () => {
  // Dodajte kod za animaciju (npr. prikazivanje animiranih čestica ljubavi)
  mladenacSlika.classList.add("animate");
});

mladenacSlika.addEventListener("mouseout", () => {
  // Uklonite animaciju kada korisnik prestane prelaziti mišem preko slike
  mladenacSlika.classList.remove("animate");
});

// Primjer interaktivnosti - klik na cvijet
const cvijet = document.querySelector(".cvijet");

cvijet.addEventListener("click", () => {
  // Dodajte kod za dodatnu animaciju ili prikaz poruke
  console.log("Kliknuli ste na cvijet!");
});
