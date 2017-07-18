function JSalert(){
  if(document.getElementById('block-a').checked){
        swal("Congrats", "You have selected the correct answer. Press Next to move on!!", "success");
    document.getElementById("next").style.display = "";
    document.getElementById('block-d').disabled = true;
    document.getElementById('block-b').disabled = true;
    document.getElementById('block-c').disabled = true;
        }
  else if(document.getElementById('block-b').checked){
    swal("Incorrect", "Press Next to move on!!", "error");
    document.getElementById('block-a').disabled = true;
    document.getElementById('block-b').disabled = true;
    document.getElementById('block-c').disabled = true;
    document.getElementById('block-d').disabled = true;
    document.getElementById("next").style.display = "";
  }
  else if(document.getElementById('block-c').checked){
    swal("Incorrect", "Press Next to move on!!", "error");
    document.getElementById('block-a').disabled = true;
    document.getElementById('block-b').disabled = true;
    document.getElementById('block-c').disabled = true;
    document.getElementById('block-d').disabled = true;
    document.getElementById("next").style.display = "";
  }
  else if(document.getElementById('block-d').checked){
    swal("Incorrect", "Press Next to move on!!", "error");
    document.getElementById('block-a').disabled = true;
    document.getElementById('block-b').disabled = true;
    document.getElementById('block-c').disabled = true;
    document.getElementById('block-d').disabled = true;
    document.getElementById("next").style.display = "";
  }
  else{
    swal("Sorry", "Please Select answer!!", "question");
  }
}
function JSalert2(){
  if(document.getElementById('block-a').checked){
        swal("Thank You", "Your Response is recorded!!", "success");
        document.getElementById("again").style.display = "";
        document.getElementById("nextLesson").style.display = "";
        }
  else if(document.getElementById('block-b').checked){
        swal("Thank You", "Your Response is recorded!!", "success");
        document.getElementById("again").style.display = "";
        document.getElementById("nextLesson").style.display = "";
  }
  else{
        swal("Sorry", "Please, select a response!!", "question");
        }
}
function JSalert4(){
        swal("Great", "Press Next to move on or Hit reveal answers");
        document.getElementById("next").style.display = "";
        document.getElementById("reveal").style.display = "";
        }
function JSalert3(){
  if(document.getElementById('block-a').checked){
        swal("Congrats", "You have selected the correct answer. Press Next to move on!!", "success");
    document.getElementById("next").style.display = "";
    document.getElementById('block-b').disabled = true;
    document.getElementById('block-c').disabled = true;
        }
  else if(document.getElementById('block-b').checked){
    swal("Incorrect", "Press Next to move on!!", "error");
    document.getElementById('block-a').disabled = true;
    document.getElementById('block-b').disabled = true;
    document.getElementById('block-c').disabled = true;
    document.getElementById("next").style.display = "";
  }
  else if(document.getElementById('block-c').checked){
    swal("Incorrect", "Press Next to move on!!", "error");
    document.getElementById('block-a').disabled = true;
    document.getElementById('block-b').disabled = true;
    document.getElementById('block-c').disabled = true;
    document.getElementById("next").style.display = "";
  }
  else{
    swal("Sorry", "Please Select answer!!", "question");
  }
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}