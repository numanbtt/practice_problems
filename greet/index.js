const greet = ()=>{
    var person_name = document.getElementById("person_name").value;
    document.getElementById("greeting").innerHTML= `Hello ${person_name}, How are you?`
}