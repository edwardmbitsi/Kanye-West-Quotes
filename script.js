const quote = document.querySelector(".quote");
const btn = document.querySelector(".quotebtn");
function getdata() {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => {
      quote.innerHTML = " ";
      quote.innerHTML = `<h2 class="bg-success bg-gradient text-black text-center" style="font-size: 15px;"></h2>
        <p class="ms-2 fs-4 text-white shadow-black">${data.quote}</p>`;
    })
    .catch((error) => {
      console.log(error);
    });
}
btn.addEventListener("click", getdata);

VanillaTilt.init(document.querySelectorAll(".card"),{
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1
  })