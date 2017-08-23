/**
 * Created by Alice on 8/23/2017.
 */
document.addEventListener("DOMContentLoaded",
    function (event) {

        var decisions = [];
        document.querySelector("#startNew").addEventListener("click", startNew);
        document.querySelector("#Answer").addEventListener("click", answer);

        function startNew() {
            // clean our decisions
            // не нашла как это сделать
            decisions = "";
            decisions = [];

            var newdecision = "";
            while (true) {
                //while (newdecision !== null) {
                newdecision = prompt("Enter decision", "");
                if ((newdecision === null) || (newdecision === "")) {break}
                decisions[decisions.length] = newdecision;
            }


            var message = "<h2>Our desicions:</h2><ul>";
            for (var i = 0; i < decisions.length; i++) {
                message += "<li>" + decisions[i] + "</li>";
            }

            if (decisions.length == 0) {
                message = "<h2>Put some decisions here</h2><p>Press 'Start new' button and write few advices</p>";
            }
            else {
                message += "</ul><p>Click on 'Answer' button to get the solution</p>";
            }

            document.getElementById("content").innerHTML = message;
        }

        function answer() {

            if (decisions.length == 0) {
                document.getElementById("content").innerHTML = "<h1>There are no any decisions for making choice :(</h2>";
                return(null);
            }

            var rand = Math.random();
            var ranc = 1 / decisions.length;
            var message = document.getElementById("content").innerHTML;
            //console.log("One step for make choice = " + ranc);
            //console.log("Our random = " + rand);
            for (var i = 0; i < decisions.length; i++){
                if ((rand < (i + 1) * ranc)&&(rand > (i * ranc))){
                    message += "<h2>We think all you need is:</h2><p>" + decisions[i] + "</p>"
                }
            }
            document.getElementById("content").innerHTML = message;
        }
    });