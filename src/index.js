const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Initial position of the person
let x = 50;
const y = canvas.height / 2;
const speed = 2; // Adjust the speed of movement

function drawPerson() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the person
  ctx.fillStyle = "blue"; // Set the fill color to blue

  // Body
  ctx.fillRect(x - 5, y - 20, 10, 30);

  // Head
  ctx.beginPath();
  ctx.arc(x, y - 30, 10, 0, Math.PI * 2);
  ctx.fill();

  // Arms
  ctx.fillRect(x - 15, y - 20, 10, 5); // Left arm
  ctx.fillRect(x + 5, y - 20, 10, 5); // Right arm

  // Legs
  ctx.fillRect(x - 5, y + 10, 5, 20); // Left leg
  ctx.fillRect(x + 5, y + 10, 5, 20); // Right leg

  // Update the x position for the next frame
  x += speed;

  // Reset the position if the person goes off-screen
  if (x > canvas.width) {
    x = -20;
  }

  // Request animation frame to create a smooth animation loop
  requestAnimationFrame(drawPerson);
}

// Call the function to start the animation
drawPerson();
