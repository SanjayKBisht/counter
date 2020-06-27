
var counter = 0;
var increase = document.getElementsByClassName("increase")[0];
var decrease = document.getElementsByClassName("decrease")[0];
var reset = document.getElementsByClassName("reset")[0];

increase.addEventListener("click", function(){
  counter = counter + 1;
  value.textContent = counter
  if (counter > 0) {
    document.querySelector("#value").style.color = "green";
  } else if (counter == 0) {
    document.querySelector("#value").style.color = "black";
  };
});

decrease.addEventListener("click", function(){
  counter = counter - 1;
  value.textContent = counter
  if (counter < 0) {
    document.querySelector("#value").style.color = "red";
  } else if (counter == 0) {
      document.querySelector("#value").style.color = "black";
  };
});

reset.addEventListener("click", function(){
  value.textContent = 0;
  counter = 0;

  document.querySelector("#value").style.color = "rgb(34,34,34)";
});
