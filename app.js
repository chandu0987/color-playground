const test = document.querySelector('div');
const light1 =document.querySelector('#light1');
const light2 =document.querySelector('#light2');
const light3 =document.querySelector('#light3');
console.log(test)

test.addEventListener('mousemove', runEvent)

 function runEvent(e){
document.body.style.backgroundColor = `rgb( ${e.offsetX}, ${e.offsetY}, 40)`;
light1.style.backgroundColor = `rgb( ${e.offsetX}, ${e.offsetY}, 180)`;
light2.style.backgroundColor = `rgb( 120, ${e.offsetX}, ${e.offsetY})`;
light3.style.backgroundColor = `rgb(230, ${e.offsetX}, ${e.offsetY})`

}