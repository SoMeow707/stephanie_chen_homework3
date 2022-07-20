let data = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

let list = document.getElementById("myList");

data.forEach((item) => {
  let li = document.createElement("li");

  li.innerText = item;

  list.appendChild(li);
});

//ordered list//

let list2 = document.getElementById("myList2");

data.forEach((item) => {
  let li = document.createElement("li");

  li.innerText = item;

  list.appendChild(li);
});
