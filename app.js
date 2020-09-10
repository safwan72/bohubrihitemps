
shownotes();

let addbtn = document.querySelectorAll(".addbtn");

addbtn.forEach((e) => {
  e.addEventListener("click", initial);
});

function checklocal() {
  let notes = localStorage.getItem("notes");
  if (notes === null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
}


function initial(e) {
  e.preventDefault();
  checklocal();
  let text = e.target.previousElementSibling.innerText;
  let myob = {
    name: text,
    quantity: 1
  };


  // if already exists increase the value
  for (const key in notesobj) {
  notesobj[key].name === myob.name ?notesobj[key].quantity++:" ";    
  }


  //  if exists then dont push
 notesobj.some((e) => e.name === myob.name) ? " ": notesobj.push(myob);  
  document.querySelector("table").classList.add("d-block");
//  sets values and displays
 localStorage.setItem("notes", JSON.stringify(notesobj));
  shownotes();
}

function shownotes() {
  checklocal();
  let html = "";
  notesobj.forEach((e, i) => {
    html += `<tr>
            <th scope="row">${i + 1}</th>
            <td>${e.name}</td>
            <td class="increased">${e.quantity}</td>
            <td><button class="btn btn-outline-secondary" id=${i} onclick="removey(this.id)">Remove</button></td>
        </tr>`;
  });
  if(notesobj.length>0){
    document.querySelector("tbody").innerHTML = html;
  }
  else{
    document.querySelector("table").classList.remove("d-block");
    document.querySelector("tbody").innerHTML = "<h2>ADD Something</h2>";
  }
}

function clearal() {
  localStorage.clear();
  shownotes();
}

function removey(a) {
  let ind = parseInt(a);
  checklocal();
  notesobj.splice(ind, 1);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  shownotes();
}
