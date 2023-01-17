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
  /* quoteout: document.querySelector("#quoteout"), */
  amiout: document.querySelector("#amiout"),
  input: document.getElementById("input"),
  display: document.querySelector("#display"),
  img: document.querySelector("#image"),
};

/* const URLquote = "https://api.quotable.io/random";

DOMSelectors.quoteout.addEventListener("click", function () {
  getquote(URLquote);
});
 */
async function getam() {
  DOMSelectors.display.innerHTML = "";
  let input3 = DOMSelectors.input.value;
  let URLamib = `https://www.amiiboapi.com/api/amiibo/?name=${input3}`;
  try {
    const response = await fetch(URLamib);

    if (response.status < 200 || response.status > 299) {
      console.log(response.status);
      DOMSelectors.display.insertAdjacentHTML(
        "afterbegin",
        `<h3 class="unfound">Can't find this amiibo</h3>`
      );
    } else {
      const data = await response.json();
      console.log(data);
      /*       let amongus = data[1];
      console.log(amongus);
      console.log(data[0].character); */
      DOMSelectors.display.insertAdjacentHTML(
        "afterbegin",
        `
        <div class = "card">
      <h1>${data.amiibo[0].character}</h1>
        <img src = "${data.amiibo[0].image}">
      </div>
      `
      );
      DOMSelectors.input.value = "";
    }
  } catch (error) {
    console.log(error);
    console.log("Get outta here fix your code");
    document.getElementById("display").innerHTML = "Out today. Back tommorow.";
  }
}

DOMSelectors.amiout.addEventListener("click", function () {
  getam();
});

/* 
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
    console.log(data); 
  } catch (error) {
    console.log(error);
    console.log("Get outta here fix your code");
    document.getElementById("api-response").textContent =
      "Sorry boss, on my break right now";
  }
}
*/
