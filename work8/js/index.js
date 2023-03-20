/*document.querySelector(".button").onclick = () => {
    document.body.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, 50%, 50%)`
}*/

const firstButton = document.getElementById("first-button");

firstButton.addEventListener("click", function() {
    const diameterInput = document.createElement("input");
    diameterInput.type = "number";
    diameterInput.placeholder = "Введіть діаметр кола";
    const secondButton = document.createElement("button");
    secondButton.innerText = "Намалювати";
    const body = document.getElementsByTagName("body")[0];
    body.appendChild(diameterInput);
    body.appendChild(secondButton);
    firstButton.style.display = "none";

    secondButton.addEventListener("click", function() {
        const diameter = parseInt(diameterInput.value);
        const circleContainer = document.createElement("div");
        circleContainer.style.display = "flex";
        circleContainer.style.flexWrap = "wrap";
        body.appendChild(circleContainer);
        secondButton.style.display = "none";
        diameterInput.style.display = "none";
        
        for (let i = 0; i < 100; i++) {
            const circle = document.createElement("div");
            circle.className = "circle";
            circle.style.width = diameter + "px";
            circle.style.height = diameter + "px";
            circle.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, 50%, 50%)`;
            circleContainer.appendChild(circle);

            circle.addEventListener("click", function() {
                circleContainer.removeChild(circle);
                const circles = circleContainer.querySelectorAll(".circle");
                for (let j = i + 1; j < circles.length + 1; j++) {
                    circles[j - 1].style.left = ((j - 1) % 10) * (diameter + 10) + "px";
                    circles[j - 1].style.top = Math.floor((j - 1) / 10) * (diameter + 10) + "px";
                }
            });
        }
    });
});