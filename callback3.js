
function hello(x, fun1){  // x = a , fun1 = ()=>{sum(10, 20)}
    console.log(x);
    fun1()
}

let a = 10

let sum = (a, b) => console.log("sum",a + b)


hello(a , ()=>{sum(10, 20)})


// function fun1(){
//      sum(10,20)
// }