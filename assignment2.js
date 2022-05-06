let form = document.getElementById("form");
let Name = document.getElementById("Name");
let Email = document.getElementById("Email");
let Mobileno = document.getElementById("mob-no");


//  creating set error function
const setError = (ele) => {
  ele.classList.add("invalid");
  ele.nextElementSibling.classList.remove("hidden");
}

// creating  reset error function
const resetError = (ele) => {
  ele.classList.remove("invalid");
  ele.nextElementSibling.classList.add("hidden");
}

// Validating Name
const isValidName = (Name) => {
    var regex = /^[a-zA-Z ]{2,30}$/;
  return regex.test(Name);
 
};

const validateName = () => {
  resetError(Name);
  if (!isValidName(Name.value)) {
    setError(Name);
  }
};

Name.addEventListener('input', () => {
  validateName();
});

// Validating Email
const isValidEmail = (Email) => {
  const regex2 = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})*$/;
  return regex2.test(Email);
     
};

const validateEmail = () => {
  resetError(Email);
  if (!isValidEmail(Email.value)) {
    setError(Email);
  }
};

Email.addEventListener('input', () => {
  validateEmail();
  console.log(Email);
});

// Validating Mobile number
const isValidNumber = (Mobileno) => {
  const regex3 = /^[6789]\d{9}$/;
  if (Mobileno.length === 0) {
    return true;
  } else {
    return regex3.test(Mobileno);
    // return true;
  }
 };

const validateNumber = () => {
  resetError(Mobileno);
  if (!isValidNumber(Mobileno.value)) {
    setError(Mobileno);
  }
};

Mobileno.addEventListener('input', () => {
  validateNumber();
  console.log(Mobileno.value);
});

// Table Elements
var table = document.getElementById('#table');
var tbody = document.querySelector('#tableBody');

// Storing form into LocalStorage

const submitForm = (e) => {
  e.preventDefault();

  if(
    isValidName(Name.value) &&
    isValidEmail(Email.value) &&
    isValidNumber(Mobileno.value)
  ){
    console.log("Submit Button Called");

    var info = {
      "Name"  : Name.value,
      "Email" : Email.value,
      "Mobileno": Mobileno.value
    };
    console.log(info);
    // localStorage.setItem("InfoDetails", JSON.stringify(info));
    // sessionStorage.setItem("InfoDetails", JSON.stringify(info));

    var array = JSON.parse(localStorage.getItem('Details') || '[]');
    array.push(info);
    localStorage.setItem('Details', JSON.stringify(array));
    var data = JSON.parse(localStorage.getItem('Details'));
    show(data);
    }
    else{
        alert('Please enter correct details');
    }
    console.log(data);
    console.log(data[1]);
}
form.addEventListener('submit', submitForm);

//function for fetching data from local storage


function show(data){
     
        var j = data.length-1;
        var row = document.createElement('tr');
    
            var cell = document.createElement('td');
            var cellText = document.createTextNode(j+1);
            cell.appendChild(cellText);
            row.appendChild(cell);
    
            var cell = document.createElement('td');
            var cellText = document.createTextNode(data[j].Name);
            cell.appendChild(cellText);
            row.appendChild(cell);
            
            var cell = document.createElement('td');
            var cellText = document.createTextNode(data[j].Email);
            cell.appendChild(cellText);
            row.appendChild(cell);
    
            var cell = document.createElement('td');
            var cellText = document.createTextNode(data[j].Mobileno);
            cell.appendChild(cellText);
            row.appendChild(cell);
    
        tbody.appendChild(row);
}

