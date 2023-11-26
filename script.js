const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".user_result img");
const computerResult = document.querySelector(".computer_result img");
const result = document.querySelector(".result");
const optionImages = document.querySelectorAll(".option_image");

optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    userResult.src = computerResult.src = "images/rock.png";
    result.innerHTML = "Wait...";

    optionImages.forEach((image2, index2) => {
      index !== index2 && image2.classList.remove("active");
    });

    gameContainer.classList.add("start");

    let time = setTimeout(() => {
      gameContainer.classList.remove("start");

      let imageSrc = e.target.querySelector("img").src;
      userResult.src = imageSrc;

      let randomNumber = Math.floor(Math.random() * 3);
      let computerImages = [
        "images/rock.png",
        "images/paper.png",
        "images/scissors.png",
      ];
      computerResult.src = computerImages[randomNumber];

      let computerValue = ["R", "P", "S"][randomNumber];
      let userValue = ["R", "P", "S"][index];

      let outcomes = {
        RR: "Draw",
        RP: "Computer",
        RS: "User",
        PP: "Draw",
        PR: "User",
        PS: "Computer",
        SS: "Draw",
        SR: "Computer",
        SP: "User",
      };

      let outComeValue = outcomes[userValue + computerValue];

      result.innerHTML =
        userValue === computerValue ? "Match Draw" : `${outComeValue} Won!`;
    }, 2500);
  });
});
