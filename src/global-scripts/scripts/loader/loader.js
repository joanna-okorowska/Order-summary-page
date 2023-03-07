/// Sample js file for demo purposes
/// Remember to always export your functions
/// so that they can be used in other files

export function handleClick() {
  const btnClicked = document.querySelector("button");
  btnClicked.addEventListener("click", function () {
    btnClicked.innerHTML = "Loading...";
    btnClicked.classList.add("spinning");
  });
}
