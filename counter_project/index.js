let count = 0; //sets initial count 

const value = document.querySelector("#value"); 
const btns = document.querySelectorAll(".btn");

console.log(value)
console.log(btns)

btns.forEach(function(btn){
  btn.addEventListener('click', function(e){
    const styles = e.currentTarget.classList;

    if(styles.contains('decrease')){
count --; 
    }else if(styles.contains('increase')){
      count ++;
    }else{count = 0}

    if(count > 0){
      value.style.color = 'green'
    }
    if(count < 0){
      value.style.color = 'red'
    }
    value.textContent = count;
    if(count === 0){
      value.style.color = '#222'
    }
  }); 
});
// function buttonSwitcher(button){
//   if(button-co)
// }









// testing - not needed 
// const testSelector = document.querySelector("span")
// console.log(testSelector)