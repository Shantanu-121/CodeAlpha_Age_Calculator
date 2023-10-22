
$(".result").on("click", function (e) {
    var userInput = document.querySelector(".month").value + "/" + document.querySelector(".day").value + "/" + document.querySelector(".year").value;
    var dob = new Date(userInput);
    var monthDiff = Date.now() - dob.getTime();
    var ageDt = new Date(monthDiff);
    var year = ageDt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    const message = document.createElement("li");
    if (age > 0 && age < 13) {
        message.innerHTML = "Your age is " + age + " years. You are living your best time , Enjoy ! ";
    }
    if (age > 13 && age < 18) {
        message.innerHTML = "Your age is " + age + " years. You are a teenager, enjoy your erupting hormones !";
    }
    if (age > 18) {
        message.innerHTML = "Your age is " + age + " years. You are an adult , don't forget that 'You only live once !' ";
    }
    document.querySelector("div.result").setAttribute("class", "result customize");
    document.querySelector("ul.result").appendChild(message);
});