const checkIn = document.getElementById("checkIn");
const checkOut = document.getElementById("checkOut");

const nightText = document.getElementById("nightText");
const nightPrice = document.getElementById("nightPrice");

const nightCount = document.getElementById("nightCount");
const subtotal = document.getElementById("subtotal");
const cleaningFee = document.getElementById("cleaningFee");
const serviceFee = document.getElementById("serviceFee");
const taxAmount = document.getElementById("taxAmount");
const totalPrice = document.getElementById("totalPrice");

const CLEANING_FEE = 800;
const SERVICE_FEE = 500;

function updatePrice() {

    if (!checkIn.value || !checkOut.value) return;

    const start = new Date(checkIn.value);
    const end = new Date(checkOut.value);

    const diff = end - start;

    const nights = Math.ceil(diff / (1000 * 60 * 60 * 24));

    if (nights <= 0) return;

    const stayPrice = nights * pricePerNight;

    const tax = Math.round(stayPrice * 0.08);

    const total =
        stayPrice +
        CLEANING_FEE +
        SERVICE_FEE +
        tax;

    // Top section
    nightText.innerText = `${nights} Night${nights > 1 ? "s" : ""}`;
    nightPrice.innerText = `₹${stayPrice.toLocaleString("en-IN")}`;

    // Price breakdown
    nightCount.innerText = nights;
    subtotal.innerText = `₹${stayPrice.toLocaleString("en-IN")}`;
    cleaningFee.innerText = `₹${CLEANING_FEE.toLocaleString("en-IN")}`;
    serviceFee.innerText = `₹${SERVICE_FEE.toLocaleString("en-IN")}`;
    taxAmount.innerText = `₹${tax.toLocaleString("en-IN")}`;

    // Final total
    totalPrice.innerText = `₹${total.toLocaleString("en-IN")}`;
}

checkIn.addEventListener("change", updatePrice);
checkOut.addEventListener("change", updatePrice);