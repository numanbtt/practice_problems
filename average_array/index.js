var arr = []
const sum_of_array = () =>{
    var integer_array = +document.getElementById("integer_array").value;
    arr.push(integer_array);
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    document.getElementById("answer").innerHTML=` Your array: [${arr}] and sum is ${sum}`
    document.getElementById("integer_array").value="";
}