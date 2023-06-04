var firstnameerror=document.getElementById('firstnameerror');
var middlenameerror=document.getElementById('middlenameerror');
var rollnoerror=document.getElementById('rollnoerror');
var noerror=document.getElementById('noerror');
var emailerror=document.getElementById('emailerror');
var submiterror=document.getElementById('submiterror');




function validatefirstname(){
  var firstname=document.getElementById('firstname').value ;

  if(firstname.length == 0){
    firstnameerror.innerHTML='First-name is required';
    return false;

  }
  if(!firstname.match(/^[a-zA-Z]*$/)){
    firstnameerror.innerHTML='Invalid character';
    return false;
    
  }

  firstnameerror.innerHTML='<i class="fa-solid fa-circle-check"></i>';
  return true;

}

function validatemiddlename(){
  var middlename=document.getElementById('middlename').value ;

  if(middlename.length == 0){
    middlenameerror.innerHTML='Middle-name is required';
    return false;

  }
  if(!middlename.match(/^[a-zA-Z]*$/)){
    middlenameerror.innerHTML='Invalid character';
    return false;
    
  }

  middlenameerror.innerHTML='<i class="fa-solid fa-circle-check"></i>';
  return true;

}

function validaterollno(){
  var rollno=document.getElementById('Roll Number').value ;

  if(rollno.length == 0){
    rollnoerror.innerHTML='Roll-No is required';
    return false;

  }
  if(rollno.length < 9 || rollno.length > 9){
    rollnoerror.innerHTML='Roll-No is invalid';
    return false;
  
  }
  if(rollno.match(/^[a-zA-Z]*$/)){
    rollnoerror.innerHTML='Invalid character';
    return false;
    
  }

  rollnoerror.innerHTML='<i class="fa-solid fa-circle-check"></i>';
  return true;

}

function validateno(){
  var no=document.getElementById('contact number').value ;

  if(no.length == 0){
    noerror.innerHTML='Contact number is required';
    return false;

  }
  if(!no.length == 10){
    noerror.innerHTML='Contact number should be of 10 digits';
    return false;
  
  }
  if(!no.match(/^[0-9]{10}$/)){
    noerror.innerHTML='Invalid character';
    return false;
    
  }

  noerror.innerHTML='<i class="fa-solid fa-circle-check"></i>';
  return true;

}

function validateemail(){
  var email=document.getElementById('Email').value ;

  if(email.length == 0){
    emailerror.innerHTML='email is required';
    return false;

  }
  
  if(!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailerror.innerHTML='Invalid email';
    return false;
    
  }

  emailerror.innerHTML='<i class="fa-solid fa-circle-check"></i>';
  return true;

}

function validatelink(){
  var link=document.getElementById('url').value ;

  if(link.length == 0){
    linkerror.innerHTML='link is required';
    return false;

  }
  

  linkerror.innerHTML='<i class="fa-solid fa-circle-check"></i>';
  return true;

}

function validatesubmit(){
  if(!validatefirstname() || !validatemiddlename()|| !validaterollno()|| !validateno()|| !validateemail())
  submiterror.innerHTML='Please fix erroe to submit'
}








