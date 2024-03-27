const output_day = document.querySelector(".output-day");
const output_month = document.querySelector(".output-month");
const output_year = document.querySelector(".output-year");
const submit_btn = document.querySelector(".calculate-btn");
const input_day = document.querySelector("#day");
const input_month = document.querySelector("#month");
const input_year = document.querySelector("#year");
const error_day = document.querySelector(".error-day");
const error_month = document.querySelector(".error-month");
const error_year = document.querySelector(".error-year");
let isValid = false;
submit_btn.addEventListener("click", calculate);
input_day.addEventListener("input", (e) => {
  if (+input_day.value > 31) {
    error_day.textContent = "Must be a valid date";
    isValid = false;
    return;
  } else {
    error_day.textContent = "";
    isValid = true;
  }
  if (+input_day.value == 0) {
    isValid = false;
    error_day.textContent = "Field is required";
    isValid = false;
    return;
  } else {
    error_day.textContent = "";
  }
});
input_month.addEventListener("input", (e) => {
  if (+input_month.value > 12) {
    isValid = false;
    error_month.textContent = "Must be a valid Month";
    isValid = false;
    return;
  } else {
    error_month.textContent = "";
    isValid = true;
  }
  if (+input_month.value == 0) {
    isValid = false;
    error_month.textContent = "Field is required";
    isValid = false;
    return;
  } else {
    error_month.textContent = "";
    isValid = true;
  }
});
input_year.addEventListener("input", (e) => {
  if (+input_year.value > 2024) {
    isValid = false;
    error_year.textContent = "Must be a valid Year";
    isValid = false;
    return;
  } else {
    error_year.textContent = "";
    isValid = true;
  }
  if (+input_year.value == 0) {
    isValid = false;
    error_year.textContent = "Field is required";
    isValid = false;
    return;
  } else {
    error_year.textContent = "";
    isValid = true;
  }
});
function calculate() {
  if (isValid) {
    let date = `${input_month.value}/${input_day.value}/${input_year.value}`;
    let dateobj = new Date(date);
    let agedifference = Date.now() - dateobj;
    let age = new Date(agedifference);
    let ageyear = age.getUTCFullYear() - 1970;
    let agemonth = age.getUTCMonth();
    let ageday = age.getUTCDay();
    output_day.textContent = ageday;
    output_month.textContent = agemonth;
    output_year.textContent = ageyear;
  } else {
    alert("Entered Values Are Invalid");
  }
}
