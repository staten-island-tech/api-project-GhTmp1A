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
};

const URLquote = "https://api.quotable.io/random";
const URLdog = "https://place.dog/300/200";

DOMSelectors.quoteout.addEventListener("click", function () {
  getquote(URLquote);
});

DOMSelectors.dogout.addEventListener("click", function () {
  getdog(URLdog);
});

async function getquote(URL) {
  DOMSelectors.display.innerHTML = "";
  try {
    const response = await fetch(URL);
    const data = await response.json();
    document.getElementById("api-response").textContent = data.content;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

async function getdog(URL) {
  DOMSelectors.display.innerHTML = "";
  try {
    const response = await fetch(URL);
    const data = await response.json();
    document.getElementById("api-response").textContent = data.content;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
