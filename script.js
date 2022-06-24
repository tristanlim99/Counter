//set initial count
let count = 0;

//select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

//used forEach to identify the class list
btns.forEach(function (btn) {
  //addEventlistener for the specific classlist in the forEach func parameter
  btn.addEventListener("click", (e) => {
    //variable to target the specific node list that was clicked
    const styles = e.currentTarget.classList;

    styles.contains("decrease") //if the class list contains 'decrease'
      ? count-- //count var should decrement
      : styles.contains("increase") //if the class list contains 'increase'
      ? count++ //count var should increment
      : (count = 0); //else count is only = 0
    count > 0 //if count is greater than 0
      ? (value.style.color = "green") //value var shoul be green
      : count < 0 //if count is less than 0
      ? (value.style.color = "red") //count should be red
      : (value.style.color = "#222"); //else count should be black
    value.textContent = count; //the value var display should be equal to the count var
  });
});
