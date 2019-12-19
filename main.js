let name = document.getElementById('name');
let weight = document.getElementById('weight');
let ul = document.getElementById('list');
let form = document.querySelector('form');


loadEvent();

function loadEvent(){

  form.addEventListener('submit', AddWeight);


}

function AddWeight(e){

  let listItem = document.createElement('li');
  listItem.className = 'list-item';
  let nametext = document.createTextNode(name.value);
  listItem.appendChild(nametext);


  let detail = document.createElement('span');
  detail.className = 'weight-detail';
  let Value = document.createTextNode(weight.value);
  detail.appendChild(Value);
  listItem.appendChild(detail);
let link = document.createElement('a');
  link.innerHTML = '<i class="fa fa-remove"></i>';
  listItem.appendChild(link);

  ul.appendChild(listItem);
  let values = name.value + ' ' + weight.value;

  storeWeight(values);
  


  console.log(listItem);

  

  e.preventDefault();

}

function storeWeight(task){
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}