






const allSeats = document.getElementsByClassName("seat");
for (const seat of allSeats) {
    seat.addEventListener("click", function (event) {
        
        const seatPurchase = getConvertedValue("seat-purchase");
        if (seatPurchase + 1 > 4) {
            alert("You can't select more than 4 seats");
            return;
        }

        document.getElementById("seat-purchase").innerText = seatPurchase + 1;
        const seatsLeft = getConvertedValue("seats-left");
        document.getElementById("seats-left").innerText = seatsLeft - 1;

        event.target.setAttribute("disabled", false);
        event.target.style.backgroundColor = "#1DD100";
        event.target.style.color = "white";


        const seatName = event.target.innerText;
        const seatClass = "Economy";
        const seatPrice = 550;

        const selectedContainer = document.getElementById("selected-container");
        const div = document.createElement("div");
        div.classList.add("flex");
        div.classList.add("justify-between");
        div.classList.add("text-gray-500");
        div.classList.add("text-lg");


        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        p1.innerText = seatName;
        p2.innerText = seatClass;
        p3.innerText = seatPrice;
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        selectedContainer.appendChild(div);

        updateTotalPrice(seatPrice);
        updateGrandTotal();





    })
}



const maxSeatPurchase = 4;




function getConvertedValue(id) {
    const textValue = document.getElementById(id).innerText;
    const value = parseInt(textValue);
    return value;
}


function updateTotalPrice(value) {
    const totalPrice = getConvertedValue("total-price");
    const sum = totalPrice + value;
    document.getElementById("total-price").innerText = sum;
}

function updateGrandTotal(applyButtonClicked) {
    let totalPrice = getConvertedValue("total-price");
    let grandTotal = document.getElementById("grand-total");

    if (applyButtonClicked) {
        const coupon = document.getElementById("coupon-input").value;


        if (coupon === "Couple 20" || coupon === "NEW15") {
            let discount = 0;
            if (coupon === "Couple 20") {
                discount = totalPrice * (20 / 100);
            }

            else {
                discount = totalPrice * (15 / 100);
            }

            totalPrice = totalPrice - discount;
            grandTotal.innerText = totalPrice;
            document.getElementById("coupon-code").classList.add("hidden");
            document.getElementById("discounted-price").innerText = discount;
            document.getElementById("discounted-div").classList.remove("hidden");
            document.getElementById("discounted-div").classList.add("flex");


        }

        else {
            alert("Please enter a valid coupon code");
        }

    }

    else {
        grandTotal.innerText = totalPrice;
    }
}


