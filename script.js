const image = document.getElementById("characterImage");
const select = document.getElementById("characterSelect");

const images = {
  garfield: "images/garfield.png",
  odie: "images/odie.png",
  normal: "images/nermal.png",
  jon: "images/john.png"
};

select.addEventListener("change", () => {
  image.src = images[select.value];
});
