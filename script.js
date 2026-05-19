// Menu //
const menuBar = document.querySelector(".fa-bars");
const closeBtn = document.querySelector(".fa-x");
const navbar = document.querySelector(".navbar");

menuBar.addEventListener("click", () => {
  navbar.style.right = 0;
});
closeBtn.addEventListener("click", () => {
  navbar.style.right = "-300px";
});
// skill-section //
const tablinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-contents");

tablinks.forEach((tab) => {
  tab.addEventListener("click", () => {
    // remove old active classes
    tablinks.forEach((t) => t.classList.remove("active-link"));
    tabContents.forEach((c) => c.classList.remove("active-tab"));

    // add active to clicked tab
    tab.classList.add("active-link");

    // get correct content id
    const tabName = tab.id.replace("tab-", "");

    // show content
    document.getElementById(tabName).classList.add("active-tab");
  });
});
// form //
const form = document.querySelector("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const btn = document.getElementById("submit");
const error = document.querySelector(".error");
const emailerror = document.querySelector(".email-error");
const msg = document.querySelector(".msg");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (validateInputs()) {
    msg.innerText = "Message sent successfully!";
    setTimeout(() => {
      msg.innerText = "";
    }, 5000);
    form.reset();
  }
});
const validateInputs = () => {
  const nameVal = name.value.trim();
  const emailVal = email.value.trim();
  let isValid = true;

  if (nameVal === "") {
    error.innerText = "Name is required";
    isValid = false;
  } else {
    error.innerText = "";
  }
  if (emailVal === "") {
    emailerror.innerText = "Email is required";
    isValid = false;
  } else if (!checkEmail(emailVal)) {
    emailerror.innerText = "Invalid email format";
    isValid = false;
  } else {
    emailerror.innerText = "";
  }
  return isValid;
};
const checkEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
};
