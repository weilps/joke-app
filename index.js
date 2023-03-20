//https://api.blablagues.net/?rub=blagues
const header = document.getElementById("header");
const contentJ = document.getElementById("content");

function getJoke() {
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((data) => {
      const { content } = data.data; //destructuring
      // equivalent a const joke = data.data.content; et on remplace content par joke.
      header.textContent = content.text_head;
      contentJ.textContent =
        content.text !== "" ? content.text : content.text_hidden;
      console.log(content);
    });
}

getJoke();

document.body.addEventListener("click", () => getJoke());
