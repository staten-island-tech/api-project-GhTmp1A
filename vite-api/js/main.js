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
  amiout: document.querySelector("#amiOut"),
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
  let input3 = DOMSelectors.input.value;
  let URLamib = `https://www.amiiboapi.com/api/amiibo/?name=${input3}`;
  try {
    const response = await fetch(URLamib);

    if (response.status < 200 || response.status > 299) {
      DOMSelectors.input.value = "";
      console.log(response.status);
      DOMSelectors.display.insertAdjacentHTML(
        "afterbegin",
        `<div id= "noamiibo">
        <h3 class="unfound">Can't find this amiibo</h3>
        <button type="button" id="errorbutton" class= "button"> <label for="Deleting the given card" class="deletelabel"> Delete </label></button>
        </div>
        `
      );
      DOMSelectors.input.value = "";

      let rnoamiibo = document.getElementById("noamiibo");
      let removederror = document.getElementById("errorbutton");

      removederror.addEventListener("click", function () {
        rnoamiibo.remove();
      });
    } else {
      const data = await response.json();
      console.log(data);
      /*       let amongus = data[1];
      console.log(amongus);
      console.log(data[0].character); */
      DOMSelectors.display.insertAdjacentHTML(
        "afterbegin",
        `
        <div class = "card" id = "rcard">
        <div class = "info">

      <h2 class="cardText" alt = "The name of the nintendo character">${data.amiibo[0].character} </h2>
      <h3 class= "cardType"> Type of Amiibo: ${data.amiibo[0].type}</h3>
        <img alt= "A figure displaying a nintendo character" class="cardImage" src = "${data.amiibo[0].image} ">

        <h3 class= "cardRelease">Released in America: ${data.amiibo[0].release.na} 
        </div>
        <button type="button" id="rbutton" class= "button"> <label for="Deleting the given card" class="deletelabel"> Delete </label></button>
      </div>
      `
      );
      DOMSelectors.input.value = "";

      let removed = document.getElementById("rbutton");
      let rcard = document.getElementById("rcard");

      removed.addEventListener("click", function () {
        rcard.remove();
      });
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

async function getmar() {
  DOMSelectors.input.value = "Mario";
  let input2 = DOMSelectors.input.value;
  let URLmar = `https://www.amiiboapi.com/api/amiibo/?name=${input2}`;
  try {
    const response = await fetch(URLmar);
    {
      const data1 = await response.json();
      console.log(data1);
      /*       let amongus = data[1];
      console.log(amongus);
      console.log(data[0].character); */
      DOMSelectors.display.insertAdjacentHTML(
        "afterbegin",
        `
        <div class = "card" id = "rcard">
        <div class = "info">
        <h2 class="cardIntro" alt ="A description of the website"> Here is an example of what happens when you type "mario" into the search bar. Try it yourself!</h2> </h2>
      <h2 class="cardText" alt = "The name of the nintendo character">${data1.amiibo[0].character} </h2>
      <h3 class= "cardType"> Type of Amiibo: ${data1.amiibo[0].type}</h3>
        <img alt= "A figure displaying a nintendo character" class="cardImage" src = "${data1.amiibo[0].image} ">

        <h3 class= "cardRelease">Released in America: ${data1.amiibo[0].release.na}
        </div>
        <button type="button" id="rbutton" class= "button"> <label for="Deleting the given card" class="deletelabel"> Delete </label></button>
      </div>
      `
      );

      let removed = document.getElementById("rbutton");
      let rcard = document.getElementById("rcard");

      removed.addEventListener("click", function () {
        rcard.remove();
      });
    }
  } catch (error) {}
}

getmar();

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
