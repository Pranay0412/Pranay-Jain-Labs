// This runs when the page is loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("Pranay Jain Labs Hub is Live!");

  const welcomeMsg = document.getElementById("welcome-msg");
  const now = new Date();
  const hour = now.getHours();

  let greeting = "";
  if (hour < 12) greeting = "Good Morning!";
  else if (hour < 18) greeting = "Good Afternoon!";
  else greeting = "Good Evening!";

  // Updates your header text with a greeting
  welcomeMsg.innerText = `${greeting} | Computer Engineering Student | Full-Stack & Data Portfolio`;
});

document.addEventListener("DOMContentLoaded", () => {
  let lastScroll = 0;
  const header = document.getElementById("main-header");
  const welcomeMsg = document.getElementById("welcome-msg");

  // --- IST / LOCAL TIME LOGIC ---
  const hour = new Date().getHours();
  let greeting = "";

  if (hour < 12) {
    greeting = "Good Morning ☀️";
  } else if (hour < 18) {
    greeting = "Good Afternoon 🌤️";
  } else {
    greeting = "Good Evening 🌙";
  }

  // This fills the empty <p> tag in the footer once
  if (welcomeMsg) {
    welcomeMsg.innerText = `${greeting} | Computer Engineering Student | Full-Stack & Data Portfolio`;
  }

  // --- SMART SCROLL LOGIC ---
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 10) {
      header.classList.remove("hide-header", "show-search-only");
      header.style.borderBottom = "3px solid var(--power-lime)";
    } else if (currentScroll > lastScroll) {
      header.classList.add("hide-header");
      header.classList.remove("show-search-only");
    } else {
      header.classList.remove("hide-header");
      header.classList.add("show-search-only");
      header.style.borderBottom = "none";
    }
    lastScroll = currentScroll;
  });

  // --- SEARCH LOGIC ---
  document.getElementById("project-search").addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    document.querySelectorAll(".card").forEach((card) => {
      const isMatch = card.innerText.toLowerCase().includes(term);
      card.style.display = isMatch ? "flex" : "none";
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("project-modal");
  const closeBtn = document.querySelector(".close-button");
  const cards = document.querySelectorAll(".card");

  // 1. OPEN MODAL
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const title = card.getAttribute("data-title");
      const desc = card.getAttribute("data-desc");
      const tech = card.getAttribute("data-tech").split(",");

      document.getElementById("modal-title").innerText = title;
      document.getElementById("modal-desc").innerText = desc;

      // Clear and build tech pills
      const techContainer = document.getElementById("modal-tech");
      techContainer.innerHTML = "";
      tech.forEach((t) => {
        const span = document.createElement("span");
        span.classList.add("tech-pill");
        span.innerText = t.trim();
        techContainer.appendChild(span);
      });

      modal.style.display = "block";
    });
  });

  // 2. CLOSE MODAL (X Button)
  closeBtn.onclick = () => (modal.style.display = "none");

  // 3. CLOSE MODAL (Click Outside)
  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
