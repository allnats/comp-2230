const startTrolleyButton = document.getElementById("start-trolley");
const trolleyImg = document.getElementById("trolley");

startTrolleyButton.addEventListener("click", (e) => {
    trolleyImg.style.animation = "none";
    trolleyImg.offsetHeight;

    trolleyImg.style.animation = "";
    trolleyImg.style.animationPlayState = "running";
});
