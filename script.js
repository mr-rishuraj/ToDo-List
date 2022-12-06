//write code for clear button below
var clear = document.getElementById("clearBtn");
clear.onclick = function(){
  document.getElementById("inputTask").value = "HELLO RISHU";
}

//function to add tasks on clicking Add button
function addTask(){
  //Creating tasks and adding them to body
  var task = document.createElement("li");
  var input = document.getElementById("inputTask").value;
  var txt = document.createTextNode(input);
  task.appendChild(txt);
  if(input === ""){
    alert("Please enter a task!")
  }else{
    document.getElementById("taskList").appendChild(task);
  }
  document.getElementById("inputTask").value = "";

  //Code for remove button
  var removeBtn = document.createElement("button");
  var btnText = document.createTextNode("Remove");
  removeBtn.appendChild(btnText);
  task.appendChild(removeBtn);
  removeBtn.className = "remove";
  var remove = document.getElementsByClassName("remove");

  for(var i=0;i<remove.length;i++){
    remove[i].onclick = function(){
      var listItem = this.parentElement;
      listItem.remove();
    }
  }

  //creating done button
  var doneBtn = document.createElement("button");
  var doneText = document.createTextNode("Done");
  doneBtn.appendChild(doneText);
  task.appendChild(doneBtn);
  doneBtn.className = "done";
  var done = document.getElementsByClassName("done");
  //write code for done button below
  for(var i=0;i<done.length;i++){
    done[i].onclick = function(){
     var textDec = this.parentElement;
     textDec.style.backgroundColor = "teal";
     textDec.style.textDecoration = "line-through";
    }
  }
  
}