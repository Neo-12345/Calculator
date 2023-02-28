document.addEventListener("DOMContentLoaded", function (event) {

    if (document.getElementById("display").textContent.length == 0) {
        document.getElementById("display").innerHTML = 0;
    }
});

async function nummer(nummer) {
    if (nummer == "102") {
        document.getElementById("display").innerHTML =
            `${document.getElementById("display").textContent = ""}`;

        if (document.getElementById("display").textContent.length = "0") {
            document.getElementById("display").innerHTML = "0";
        }

        if (document.getElementById("error")) {
            let errorModule = document.getElementById("error");

            errorModule.remove();
        }
    }

    if (document.getElementById("display").textContent.length <= 50) {
        if (document.getElementById("error")) {
            let errorText = document.getElementById("error");

            document.body.removeChild(errorText);
        }

        if (nummer == "0") {
            if (document.getElementById("display").textContent.includes("=")) {
                document.getElementById("display").innerHTML = "";
            }

            if (document.getElementById("display").textContent.startsWith("0")) {
                document.getElementById("display").innerHTML = "";
            }

            document.getElementById("display").innerHTML =
                `${document.getElementById("display").textContent}0`;
        }

        if (nummer == "1") {
            if (document.getElementById("display").textContent.includes("=")) {
                document.getElementById("display").innerHTML = "";
            }

            if (document.getElementById("display").textContent.startsWith("0")) {
                document.getElementById("display").innerHTML = "";
            }

            document.getElementById("display").innerHTML =
                `${document.getElementById("display").textContent}1`;
        }

        if (nummer == "2") {
            if (document.getElementById("display").textContent.includes("=")) {
                document.getElementById("display").innerHTML = "";
            }

            if (document.getElementById("display").textContent.startsWith("0")) {
                document.getElementById("display").innerHTML = "";
            }

            document.getElementById("display").innerHTML =
                `${document.getElementById("display").textContent}2`;
        }

        if (nummer == "3") {
            if (document.getElementById("display").textContent.includes("=")) {
                document.getElementById("display").innerHTML = "";
            }

            if (document.getElementById("display").textContent.startsWith("0")) {
                document.getElementById("display").innerHTML = "";
            }

            document.getElementById("display").innerHTML =
                `${document.getElementById("display").textContent}3`;
        }

        if (nummer == "4") {
            if (document.getElementById("display").textContent.includes("=")) {
                document.getElementById("display").innerHTML = "";
            }

            if (document.getElementById("display").textContent.startsWith("0")) {
                document.getElementById("display").innerHTML = "";
            }

            document.getElementById("display").innerHTML =
                `${document.getElementById("display").textContent}4`;
        }

        if (nummer == "5") {
            if (document.getElementById("display").textContent.includes("=")) {
                document.getElementById("display").innerHTML = "";
            }

            if (document.getElementById("display").textContent.startsWith("0")) {
                document.getElementById("display").innerHTML = "";
            }

            document.getElementById("display").innerHTML =
                `${document.getElementById("display").textContent}5`;
        }

        if (nummer == "6") {
            if (document.getElementById("display").textContent.includes("=")) {
                document.getElementById("display").innerHTML = "";
            }

            if (document.getElementById("display").textContent.startsWith("0")) {
                document.getElementById("display").innerHTML = "";
            }

            document.getElementById("display").innerHTML =
                `${document.getElementById("display").textContent}6`;
        }

        if (nummer == "7") {
            if (document.getElementById("display").textContent.includes("=")) {
                document.getElementById("display").innerHTML = "";
            }

            if (document.getElementById("display").textContent.startsWith("0")) {
                document.getElementById("display").innerHTML = "";
            }

            document.getElementById("display").innerHTML =
                `${document.getElementById("display").textContent}7`;
        }

        if (nummer == "8") {
            if (document.getElementById("display").textContent.includes("=")) {
                document.getElementById("display").innerHTML = "";
            }

            if (document.getElementById("display").textContent.startsWith("0")) {
                document.getElementById("display").innerHTML = "";
            }

            document.getElementById("display").innerHTML =
                `${document.getElementById("display").textContent}8`;
        }

        if (nummer == "9") {
            if (document.getElementById("display").textContent.includes("=")) {
                document.getElementById("display").innerHTML = "";
            }

            if (document.getElementById("display").textContent.startsWith("0")) {
                document.getElementById("display").innerHTML = "";
            }

            document.getElementById("display").innerHTML =
                `${document.getElementById("display").textContent}9`;
        }

        if (nummer == "100") {
            if (document.getElementById("display").textContent.includes("=")) {
                document.getElementById("display").innerHTML = "";
            }

            if (document.getElementById("display").textContent.startsWith("0")) {
                document.getElementById("display").innerHTML = "";
            }

            document.getElementById("display").innerHTML =
                `${document.getElementById("display").textContent}/`;
        }

        if (nummer == "101") {
            if (document.getElementById("display").textContent.includes("=")) {
                document.getElementById("display").innerHTML = "";
            }

            if (document.getElementById("display").textContent.startsWith("0")) {
                document.getElementById("display").innerHTML = "";
            }

            document.getElementById("display").innerHTML =
                `${document.getElementById("display").textContent}**`;
        }

        if (nummer == "103") {
            let length = document.getElementById("display").innerHTML;

            length = length.substring(0, length.length - 1);

            document.getElementById("display").innerHTML = `${length}`;
        }

        if (nummer == "104") {
            if (document.getElementById("display").textContent.includes("=")) {
                document.getElementById("display").innerHTML = "";
            }

            if (document.getElementById("display").textContent.startsWith("0")) {
                document.getElementById("display").innerHTML = "";
            }

            document.getElementById("display").innerHTML =
                `${document.getElementById("display").textContent}*`;
        }

        if (nummer == "105") {
            if (document.getElementById("display").textContent.includes("=")) {
                document.getElementById("display").innerHTML = "";
            }

            if (document.getElementById("display").textContent.startsWith("0")) {
                document.getElementById("display").innerHTML = "";
            }

            document.getElementById("display").innerHTML =
                `${document.getElementById("display").textContent}-`;
        }

        if (nummer == "106") {
            if (document.getElementById("display").textContent.includes("=")) {
                document.getElementById("display").innerHTML = "";
            }

            if (document.getElementById("display").textContent.startsWith("0")) {
                document.getElementById("display").innerHTML = "";
            }

            document.getElementById("display").innerHTML =
                `${document.getElementById("display").textContent}+`;
        }

        if (nummer == "107") {
            if (document.getElementById("display").textContent.includes("=")) {
                document.getElementById("display").innerHTML = "";
            }

            if (document.getElementById("display").textContent.startsWith("0")) {
                document.getElementById("display").innerHTML = "";
            }

            document.getElementById("display").innerHTML =
                `${document.getElementById("display").textContent}3.14`;
        }

        if (nummer == "108") {
            if (document.getElementById("display").textContent.includes("=")) {
                document.getElementById("display").innerHTML = "";
            }

            if (document.getElementById("display").textContent.startsWith("0")) {
                document.getElementById("display").innerHTML = "";
            }

            document.getElementById("display").innerHTML =
                `${document.getElementById("display").textContent}.`;
        }

        if (nummer == "109") {
            if (document.getElementById("display").textContent.includes("=")) {
                document.getElementById("display").innerHTML = "";
            }

            if (document.getElementById("display").textContent.startsWith("0")) {
                document.getElementById("display").innerHTML = "";
            }

            let kalkylering = document.getElementById("display").textContent;

            let resultat = eval(kalkylering);

            document.getElementById("display").innerHTML =
                `${document.getElementById("display").textContent} = ${resultat || "Det fanns inget att räkna ut!"}`;
        }

        if (document.getElementById("display").innerHTML.startsWith("+") || document.getElementById("display").innerHTML.startsWith("-") || document.getElementById("display").innerHTML.startsWith("*") || document.getElementById("display").innerHTML.startsWith("/") || document.getElementById("display").innerHTML.startsWith("**")) {
            // Erase one
            let length = document.getElementById("display").innerHTML;

            if (length == "2") {
                length = length.substring(0, length.length - 1);

                document.getElementById("display").innerHTML = `${length}`;
            }

            if (length == "3") {
                length = length.substring(0, length.length - 2);

                document.getElementById("display").innerHTML = `${length}`;
            }

            // Error Message
            let error = document.createElement("div");

            error.id = "error";
            document.body.appendChild(error);

            document.getElementById("error").innerHTML = "❌ Din kalkylation kan inte börja med +, -, *, / eller ^"
        }
    } else {
        let error = document.createElement("div");

        error.id = "error";
        document.body.appendChild(error);

        document.getElementById("error").innerHTML = "Ett fel uppstod!"
    }
}