let form = document.getElementById("parking-form");
let formIsValid;


form.addEventListener("submit", validate);
function validate(event) {
  event.preventDefault();
  
  validateName();
  validateYear();
  validateMake();
  validateModel();
  validateStartdate();
  validateDays();
  validateCard();
  validateCVV();
  validateEXP();

  formIsValid = true;
}

function markFormInvalid() {
  formIsValid = false;
}

function validateName() {
  let nameInput = document.getElementById("name");
  let parentEl = nameInput.parentElement;
  if (nameInput.value) {
    parentEl.classList.remove("input-invalid");
    parentEl.classList.add("input-valid");
    clear_name();
  } else {
    parentEl.classList.remove("input-valid");
    parentEl.classList.add("input-invalid");
    markFormInvalid();
    InvalidMessageName();
  }
}

function validateYear() {
  let caryear = document.getElementById("car-year");
  let parentElA = caryear.parentElement;
  if (caryear.value) {
    parentElA.classList.remove("input-invalid");
    parentElA.classList.add("input-valid");
    clear_year();
  } else {
    console.log("invalid");
    parentElA.classList.remove("input-valid");
    parentElA.classList.add("input-invalid");
    markFormInvalid();
    InvalidMessageCarYear();
  }
}

function validateMake() {
  let carmake = document.getElementById("car-make");
  let parentElB = carmake.parentElement;
  if (carmake.value) {
    parentElB.classList.remove("input-invalid");
    parentElB.classList.add("input-valid");
    clear_make();
  } else {
    parentElB.classList.remove("input-valid");
    parentElB.classList.add("input-invalid");
    markFormInvalid();
    InvalidMessageCarMake();
  }
}


function validateModel() {
  let carmodel = document.getElementById("car-model");
  let parentElC = carmodel.parentElement;
  if (carmodel.value) {
    parentElC.classList.remove("input-invalid");
    parentElC.classList.add("input-valid");
    clear_model();
  } else {
    parentElC.classList.remove("input-valid");
    parentElC.classList.add("input-invalid");
    markFormInvalid();
    InvalidMessageCarModel();
    
  }
}


function validateStartdate() {
  let date = document.getElementById("start-date");
  let parentElD = date.parentElement;
  if (date.value) {
    parentElD.classList.remove("input-invalid");
    parentElD.classList.add("input-valid");
    clear_date();
  } else {
    parentElD.classList.remove("input-valid");
    parentElD.classList.add("input-invalid");
    markFormInvalid();
    InvalidMessageDate();
  }
}


function validateDays() {
  let numdays = document.getElementById("days");
  let parentElE = numdays.parentElement;
  if (numdays.value) {
    parentElE.classList.remove("input-invalid");
    parentElE.classList.add("input-valid");
    clear_day();
  } else {
    parentElE.classList.remove("input-valid");
    parentElE.classList.add("input-invalid");
    markFormInvalid();
    InvalidMessageDays();
  }
}


function validateCard() {
  let card = document.getElementById("credit-card");
  let parentElF = card.parentElement;
  if (card.value) {
    parentElF.classList.remove("input-invalid");
    parentElF.classList.add("input-valid");
    clear_cc();
  } else {
    parentElF.classList.remove("input-valid");
    parentElF.classList.add("input-invalid");
    markFormInvalid();
    InvalidMessageCC();
  }
}


function validateCVV() {
  let cvvnum = document.getElementById("cvv");
  let parentElG = cvvnum.parentElement;
  if (cvvnum.value) {
    parentElG.classList.remove("input-invalid");
    parentElG.classList.add("input-valid");
    clear_cvv();
  } else {
    parentElG.classList.remove("input-valid");
    parentElG.classList.add("input-invalid");
    markFormInvalid();
    InvalidMessageCVV();
  }
}


function validateEXP() {
  let exp = document.getElementById("expiration");
  let parentElH = exp.parentElement;
  if (exp.value) {
    parentElH.classList.remove("input-invalid");
    parentElH.classList.add("input-valid");
    console.log("it works");
    clear_exp();
  } else {
    console.log("invalid");
    parentElH.classList.remove("input-valid");
    parentElH.classList.add("input-invalid");
    markFormInvalid();
    InvalidMessageExp();
  }
}

function InvalidMessageName() {
    clear_name();
  let existingEl = document.getElementById("name-field");
  let newElement = document.createElement("p");
  let invalidMessage = document.createTextNode("Name is required.");
  newElement.classList.add("namemessage");
  newElement.appendChild(invalidMessage);
  existingEl.appendChild(newElement);
}

function InvalidMessageCarYear() {
    clear_year();
  let existingEl = document.getElementById("car-field");
  let newElement = document.createElement("p");
  let invalidMessage = document.createTextNode("Car year is required.");
  newElement.classList.add("yearmessage");
  newElement.appendChild(invalidMessage);
  existingEl.appendChild(newElement);
}

function InvalidMessageCarMake() {
  clear_make();
  let existingEl = document.getElementById("car-field");
  let newElement = document.createElement("p");
  let invalidMessage = document.createTextNode("Car make is required.");
  newElement.classList.add("makeMessage");
  newElement.appendChild(invalidMessage);
  existingEl.appendChild(newElement);
}

function InvalidMessageCarModel() {
    clear_model();
  let existingEl = document.getElementById("car-field");
  let newElement = document.createElement("p");
  let invalidMessage = document.createTextNode("Car model is required.");
  newElement.classList.add("messageModel");
  newElement.appendChild(invalidMessage);
  existingEl.appendChild(newElement);
}

function InvalidMessageDate() {
    clear_date();
  let existingEl = document.getElementById("start-date-field");
  let newElement = document.createElement("p");
  let invalidMessage = document.createTextNode("Date is required.");
  newElement.classList.add("dateMessage");
  newElement.appendChild(invalidMessage);
  existingEl.appendChild(newElement);
}

function InvalidMessageDays() {
    clear_day();
  let existingEl = document.getElementById("days-field");
  let newElement = document.createElement("p");
  let invalidMessage = document.createTextNode("Number of days is required.");
  newElement.classList.add("numMessage");
  newElement.appendChild(invalidMessage);
  existingEl.appendChild(newElement);
}

function InvalidMessageCC() {
    clear_cc();
  let existingEl = document.getElementById("credit-card-field");
  let newElement = document.createElement("p");
  let invalidMessage = document.createTextNode("Credit card is required.");
  newElement.classList.add("CCmessage");
  newElement.appendChild(invalidMessage);
  existingEl.appendChild(newElement);
}

function InvalidMessageCVV() {
    clear_cvv();
  let existingEl = document.getElementById("cvv-field");
  let newElement = document.createElement("p");
  let invalidMessage = document.createTextNode("CVV number is required.");
  newElement.classList.add("cvvmessage");
  newElement.appendChild(invalidMessage);
  existingEl.appendChild(newElement);
}

function InvalidMessageExp() {
    clear_exp();
  let existingEl = document.getElementById("expiration-field");
  let newElement = document.createElement("p");
  let invalidMessage = document.createTextNode("Expiration date is required.");
  newElement.classList.add("expmessage");
  newElement.appendChild(invalidMessage);
  existingEl.appendChild(newElement);
}


function clear_name() {
    let pElement = document.querySelector('.namemessage')
    if (pElement != null) {
        pElement.remove ()
    }
}

function clear_year () {
    let pElement = document.querySelector('.yearmessage')
    if (pElement != null) {
        pElement.remove ()
    }
}

function clear_make () {
    let pElement = document.querySelector('.makeMessage')
    if (pElement != null) {
        pElement.remove ()
    }
}

function clear_model () {
    let pElement = document.querySelector('.messageModel')
    if (pElement != null) {
        pElement.remove ()
    }
}

function clear_date () {
    let pElement = document.querySelector('.dateMessage')
    if (pElement != null) {
        pElement.remove ()
    }
}

function clear_day () {
    let pElement = document.querySelector('.numMessa')
    if (pElement != null) {
        pElement.remove ()
    }
}

function clear_cc () {
    let pElement = document.querySelector('.CCmessage')
    if (pElement != null) {
        pElement.remove ()
    }
}

function clear_cvv () {
    let pElement = document.querySelector('.cvvmessage')
    if (pElement != null) {
        pElement.remove ()
    }
}

function clear_exp () {
    let pElement = document.querySelector('.expmessage')
    if (pElement != null) {
        pElement.remove ()
    }
}














