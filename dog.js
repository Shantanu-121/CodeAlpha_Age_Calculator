
$(".result").on("click", function (e) {
    var age = document.querySelector(".age").value ;
    var calAge = 16 * Math.log(age) + 31;
    const message = document.createElement("li");
    message.innerHTML = "The age of your dog , if it was a human would have been "+Math.round(calAge)+" years.";
    document.querySelector("div.result").setAttribute("class", "result customize");
    document.querySelector("ul.result").appendChild(message);
});