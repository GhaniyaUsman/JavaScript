let helloBtn = document.querySelector('button');
helloBtn.addEventListener('click', inputMsg);

//document in first line is used to select ducoment object model (dom)
//queryselector is function which allow us to select any element


function inputMsg(){
   let name = prompt('Enter name of studnet');
   helloBtn.textContent = 'Roll No.1: ' + name;
   //alert("Hello world!");
}

    var num;
    console.log(typeof num);
//data types above

