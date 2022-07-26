"use strict";
const telephone = document.querySelector(".telephone");
const telephoneValue = Number(telephone).value;
const redirect = document.querySelector(".info-btn");
const password1 = document.querySelector(".password");
const password2 = document.querySelector(".confirmPassword");
const form = document.getElementById("registration");
const mtn_image = document.querySelector(".mtn_image");
const glo_image = document.querySelector(".glo_image");
const etisalat_image = document.querySelector(".etisalat_image");
const airtel_image = document.querySelector(".airtel_image");
const wrong_image = document.querySelector(".wrong_image");

const mtn = [803, 806, 703, 706, 813, 816, 810, 814, 903];
const glo = [805, 807, 705, 815, 811, 905];
const airtel = [802, 808, 812, 701, 902];
const etisalat = [809, 818, 817, 909];

telephone.addEventListener("keyup", function () {
  if (
    mtn.includes(Number(telephone.value.slice(1, 4))) ||
    mtn.includes(Number(telephone.value.slice(4, 7)))
  ) {
    mtn_image.classList.remove("hidden");
    glo_image.classList.add("hidden");
    airtel_image.classList.add("hidden");
    etisalat_image.classList.add("hidden");
    wrong_image.classList.add("hidden");
  } else if (
    glo.includes(Number(telephone.value.slice(1, 4))) ||
    glo.includes(Number(telephone.value.slice(4, 7)))
  ) {
    glo_image.classList.remove("hidden");
    mtn_image.classList.add("hidden");
    airtel_image.classList.add("hidden");
    etisalat_image.classList.add("hidden");
    wrong_image.classList.add("hidden");
  } else if (
    airtel.includes(Number(telephone.value.slice(1, 4))) ||
    airtel.includes(Number(telephone.value.slice(4, 7)))
  ) {
    airtel_image.classList.remove("hidden");
    mtn_image.classList.add("hidden");
    glo_image.classList.add("hidden");
    etisalat_image.classList.add("hidden");
    wrong_image.classList.add("hidden");
  } else if (
    etisalat.includes(Number(telephone.value.slice(1, 4))) ||
    etisalat.includes(Number(telephone.value.slice(4, 7)))
  ) {
    etisalat_image.classList.remove("hidden");
    mtn_image.classList.add("hidden");
    airtel_image.classList.add("hidden");
    glo_image.classList.add("hidden");
    wrong_image.classList.add("hidden");
  } else {
    wrong_image.classList.remove("hidden");
    mtn_image.classList.add("hidden");
    airtel_image.classList.add("hidden");
    glo_image.classList.add("hidden");
    etisalat_image.classList.add("hidden");
  }
});
// begining of integration of paul's code

password2.addEventListener("keyup", function () {
  if (password1.value == password2.value) {
    document.getElementById("password").style.borderColor = "green";
    document.getElementById("password").style.transition = "0.5s";
    document.getElementById("confirmPassword").style.borderColor = "green";
    document.getElementById("confirmPassword").style.transition = "0.5s";
    console.log(password1.value);
    console.log(password2.value);
    return;
  } else if (password1 != password2) {
    document.getElementById("confirmPassword").style.borderColor = "red";
    document.getElementById("confirmPassword").style.transition = "0.5s";
    // document.getElementById("hidden").classList.remove("hidden")
    return;
  }
});

let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");

password1.addEventListener("focus", function () {
  document.getElementById("message").style.display = "block";
});

password1.addEventListener("blur", function () {
  document.getElementById("message").style.display = "none";
});

password1.addEventListener("keyup", function () {
  let lowerCaseLetters = /[a-z]/g;
  if (password1.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.add("invalid");
    letter.classList.remove("valid");
  }

  let upperCaseLetters = /[A-Z]/g;
  if (password1.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.add("invalid");
    capital.classList.remove("valid");
  }

  let numbers = /[0-9]/g;
  if (password1.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.add("invalid");
    number.classList.remove("valid");
  }

  if (password1.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.add("invalid");
    length.classList.remove("valid");
  }
});
// ending of integration of paul's code
redirect.addEventListener("click", function () {
  if (password1.value === password2.value) {
    form.action = "./thank-you.html";
  } else {
    alert("passwords are not matching");
    form.action = "./registration.html";
  }
});
