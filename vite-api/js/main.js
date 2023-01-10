import "../styles/style.css";

/* document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
 */

//how promises work
/* function greet(name) {
  const greetPromise = new Promise(function (resolve, reject) {
    resolve(`Hello ${name}`);
  });
  return greetPromise;
}

const suzie = greet("suzie");

suzie.then((result) => {
  console.log(result);
});
 */

const DOMSelectors = {
  quoteout: document.querySelector("#quoteout"),
  dogout: document.querySelector("#dogout"),
  display: document.querySelector("#display"),
  img: document.querySelector("#image"),
};

let namo = "mario";
const URLquote = "https://api.quotable.io/random";
const URLamib = `https://www.amiiboapi.com/api/amiibo/?name=${namo}`;

DOMSelectors.quoteout.addEventListener("click", function () {
  getquote(URLquote);
});

DOMSelectors.dogout.addEventListener("click", function () {
  getam(URLamib);
});

async function getam(URL) {
  DOMSelectors.display.innerHTML = "";
  try {
    const response = await fetch(URL);
    if (response.status < 200 || response.status > 299) {
      console.log(response.status);
      throw error(response);
    } else {
      const data = await response.json();
      data.forEach((amiibo) => {
        amiibo.forEach((figure) => {
          DOMSelectors.display.insertAdjacentHTML(
            "afterbegin",
            `<div class = "apic">
              <h1> ${figure.character}</h1>
              <img src= "${figure.image}" alt= "">
              </div>`
          );
        });
      });
      console.log(data);
      console.log(response);
    }
  } catch (error) {
    console.log(error);
    console.log("Get outta here fix your code");
    document.getElementById("api-response").textContent =
      "Out today. Back tommorow.";
  }
}
//find way to extract random image

getam(URLamib);

async function getquote(URL) {
  DOMSelectors.display.innerHTML = "";
  try {
    const response = await fetch(URL);
    if (response.status < 200 || response.status > 299) {
      console.log(response.status);
      throw error(response);
    } else {
      const data = await response.json();
      document.getElementById("api-response").textContent = data.content;
      console.log(data);
    }
    /*    const data = await response.json();
    document.getElementById("api-response").textContent = data.content;
    console.log(data); */
  } catch (error) {
    console.log(error);
    console.log("Get outta here fix your code");
    document.getElementById("api-response").textContent =
      "Sorry boss, on my break right now";
  }
}
