const input = document.querySelector("#binary");
const form = document.querySelector("#binary-form");
const ul = document.querySelector("#decimals");
const cardbody = document.querySelector(".card-body");


form.addEventListener("submit", convert);


function convert(e) {
  let binary = Number(input.value.trim());
  let array = Array.from(input.value.trim());
  console.log(array);
  console.log(isArrayBool(array));
   if (isArrayBool(array) ==false) {
     alert("danger", "It is not a binary number");
     input.value = "";  
     e.preventDefault();  
     return;
   }

  console.log(binary);
  let decimal = parseInt(binary, 2);
  createList(decimal);

  input.value = "";

  e.preventDefault();
}

function isArrayBool(array) {
  for (var i of array) {
    if (i != 0 && i != 1) return false;
  }
  return true;
}




function createList(number) {
  let li = document.createElement('li');
  li.className = "list-group-item bg-info d-flex justify-content-center";
  li.textContent = number;
  ul.prepend(li);

}

function alert(type, info) {
  let alert = document.createElement("div");
  alert.className = `alert alert-${type} mt-2 `;
  alert.textContent = `${info}`;
  cardbody.appendChild(alert);

  setTimeout(function () {
    alert.remove();
  }, 1500);


}