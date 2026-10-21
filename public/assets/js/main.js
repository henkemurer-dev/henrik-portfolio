const root = document.documentElement;
const projects = [...document.querySelectorAll(".project")];
const cursor = document.querySelector(".cursor");

document.getElementById("year").textContent = new Date().getFullYear();

const mouse = { x: innerWidth / 2, y: innerHeight / 2 };
const smooth = { x: mouse.x, y: mouse.y };

window.addEventListener("pointermove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;

  root.style.setProperty("--cursor-x", `${event.clientX - 31}px`);
  root.style.setProperty("--cursor-y", `${event.clientY - 31}px`);
});

function updatePreviews() {
  smooth.x += (mouse.x - smooth.x) * 0.13;
  smooth.y += (mouse.y - smooth.y) * 0.13;

  document.querySelectorAll(".project.is-hovered .project__preview").forEach((preview) => {
    const x = Math.min(innerWidth - 260, Math.max(260, smooth.x));
    const y = Math.min(innerHeight - 190, Math.max(190, smooth.y));
    preview.style.left = `${x}px`;
    preview.style.top = `${y}px`;
  });

  requestAnimationFrame(updatePreviews);
}
updatePreviews();

projects.forEach((project) => {
  project.addEventListener("mouseenter", () => {
    project.classList.add("is-hovered");
    document.body.classList.add("show-project-cursor");
  });
  project.addEventListener("mouseleave", () => {
    project.classList.remove("is-hovered");
    document.body.classList.remove("show-project-cursor");
  });
});

// Lightweight animated grain. Intentionally low-resolution for performance.
const canvas = document.getElementById("noiseCanvas");
const ctx = canvas.getContext("2d", { alpha: true });
let frame = 0;

function resizeNoise() {
  canvas.width = Math.max(180, Math.floor(innerWidth / 5));
  canvas.height = Math.max(120, Math.floor(innerHeight / 5));
}
resizeNoise();
addEventListener("resize", resizeNoise);

function drawNoise() {
  frame++;
  if (frame % 4 === 0) {
    const image = ctx.createImageData(canvas.width, canvas.height);
    const data = image.data;
    for (let i = 0; i < data.length; i += 4) {
      const v = Math.random() * 255;
      data[i] = v;
      data[i + 1] = v;
      data[i + 2] = v;
      data[i + 3] = 35;
    }
    ctx.putImageData(image, 0, 0);
  }
  requestAnimationFrame(drawNoise);
}
drawNoise();
