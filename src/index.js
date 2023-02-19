import "./style.css";
import Email from "./Email";
import Test from "./odinbook-pic.png";

const linkedinBtn = document.querySelector("#linkedin-btn");
linkedinBtn.onclick = () => {
  location.href = "https://www.linkedin.com/in/ryanmassey2573/";
};

const githubBtn = document.querySelector("#github-btn");
githubBtn.onclick = () => {
  location.href = "https://github.com/rmassey95?tab=repositories";
};

const contactForm = document.querySelector("#contact-form");

function sendEmail(data) {
  Email.send({
    SecureToken: "221d3df8-b6f4-4eb8-a1c2-958cda44cd45",
    To: "rmassey.95@gmail.com",
    From: "rmassey.95@gmail.com",
    Subject: `${data.subject}`,
    Body: `NAME: ${data.name}, EMAIL: ${data.email} 
    MESSAGE: ${data.msg}`,
  }).then((message) => alert(message));
}

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {};
  data.name = e.target[0].value;
  data.email = e.target[1].value;
  data.subject = e.target[2].value;
  data.msg = e.target[3].value;

  sendEmail(data);
});

const mobileNavBtn = document.querySelector("#icon");

mobileNavBtn.addEventListener("click", () => {
  const mobileNavbar = document.querySelector("#mobile-navbar-links");
  const navbar = document.querySelector(".navbar");
  if (mobileNavbar.style.display === "none") {
    mobileNavbar.style.display = "flex";
    navbar.classList.add("navbar-mobile");
  } else {
    mobileNavbar.style.display = "none";
    navbar.classList.remove("navbar-mobile");
  }
});
