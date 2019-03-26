const button = document.getElementById("get_hash");

button.addEventListener("click", function() {
  const text = document.getElementById("text").value;
  const output = document.getElementById("output");
  const title = document.getElementById("title");
  if (text == "") {
    title.innerHTML = "Please inter a text to hash";
    output.innerHTML = "";
  } else {
    title.innerHTML = "your hash is:";
    const hash = CryptoJS.SHA256(text);
    output.innerHTML = hash;
  }
});

const response = fetch("https://quota.glitch.me/random")
  .then(res => console.log(res))
  .then(data => data.json());

console.log(response);
