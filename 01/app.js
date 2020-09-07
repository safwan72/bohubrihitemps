let addbtn = document.querySelectorAll(".addbtn"),
  arr = [],
  i = 0;
addbtn.forEach((e) => {
  e.addEventListener("click", passit);
});

function passit(e) {
  i++;
  let a = e.target.previousElementSibling.innerText,
    j = 1;
  arr.push(a);
  let newarr = removeDuplicates(arr);
  addtolist(newarr);
}

function removeDuplicates(array) {
  let a = [];
  array.map((x) => {
    if (!a.includes(x)) {
      a.push(x);
    }
  });
  return a;
}
function addtolist(arr) {
  let html = "",
    i = 0;
  if (arr.length > 0) {
    document.querySelector("table").classList.add("d-block");
  } else {
    document.querySelector("table").classList.add("d-none");
  }
  arr.forEach((e, i) => {
    i++;
    html += `<tr>
        <th scope="row">${i}</th>
        <td>${e}</td>
        <td class="increased">1</td>
        <td><button class="btn btn-outline-secondary" id=${i} onclick="removey(this.parentElement.parentElement,this.id,arr)">Remove</button></td>
    </tr>`;
    document.querySelector("tbody").innerHTML = html;
  });
}

function removey(param, ind, arr) {
  param.remove();
  arr.splice(ind, 1);
  console.log(ind, arr);
  // console.log(param);
}
