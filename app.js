// Function to check and see if two objects on the DOM are overlapping
function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

// Selecting the avatar and coin image
const avatar = document.querySelector("#player");
const coin = document.querySelector("#coin");

// Listening for the arrow keys to be press and which one
window.addEventListener("keyup", (e) => {
  // indicate for only down arrow key is pressed
  if (e.key === "ArrowDown" || e.key === "Down") {
    const currTop = extractPos(avatar.style.top);
    avatar.style.top = `${currTop + 50}px`;
  // indicate for only up arrow key is pressed
  } else if (e.key === "ArrowUp" || e.key === "Up") {
    const currTop = extractPos(avatar.style.top);
    avatar.style.top = `${currTop - 50}px`;
    // indicate for only right arrow key is pressed
  } else if (e.key === "ArrowRight" || e.key === "Right") {
    const currLeft = extractPos(avatar.style.left);
    avatar.style.left = `${currLeft + 50}px`;
    // Flips avatar to face right
    avatar.style.transform = "scale(1,1)"
    // indicate for only left arrow key is pressed
  } else if (e.key === "ArrowLeft" || e.key === "Left") {
    const currLeft = extractPos(avatar.style.left);
    avatar.style.left = `${currLeft - 50}px`;
    // Flips the avatar to face left
    avatar.style.transform = "scale(-1,1)"
  }
  // Checks to see if the avatar image is touching the coin, then call moveCoin function
  if (isTouching(avatar, coin)) moveCoin();
});

const extractPos = (pos) => {
  if (!pos) return 100;
  // removing the "px" from the position and converting into a number
  return parseInt(pos.slice(0, -2));
};

// Moves the coin by randomly generating the x & y axis and assigning it to the 
// width and height of the coin style properties
const moveCoin = () => {
 const y = Math.floor(Math.random() * window.innerHeight);
 const x = Math.floor(Math.random() * window.innerWidth);
  coin.style.top = `${y}px`
  coin.style.left = `${x}px`
}

// Coin starts at a random spot everytime the page is reloaded
moveCoin();