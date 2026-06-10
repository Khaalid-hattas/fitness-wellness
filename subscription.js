const planCards = document.querySelectorAll(".plan-card");
const buttons = document.querySelectorAll(".btn-success");

planCards.forEach(card => {
    card.addEventListener("click", () => {

        // Remove active state from all cards
        planCards.forEach(c => c.classList.remove("selected"));

        // Add active state to clicked card
        card.classList.add("selected");

        // Save selected plan text
        const planName = card.querySelector("h3").innerText;
        localStorage.setItem("selectedPlan", planName);

        console.log("Selected plan:", planName);
    });
});

buttons.forEach(button => {
    button.addEventListener("click", (e) => {

        e.stopPropagation(); // prevent triggering card click

        const originalText = button.innerText;

        // Loading effect
        button.innerText = "Processing...";
        button.disabled = true;

        setTimeout(() => {
            button.innerText = "Success ✔";

            setTimeout(() => {
                button.innerText = originalText;
                button.disabled = false;
            }, 1500);

        }, 1000);
    });
});

// ===============================
// 3. LOAD SAVED PLAN ON PAGE LOAD
// ===============================
window.addEventListener("DOMContentLoaded", () => {
    const savedPlan = localStorage.getItem("selectedPlan");

    if (savedPlan) {
        planCards.forEach(card => {
            if (card.querySelector("h3").innerText === savedPlan) {
                card.classList.add("selected");
            }
        });
    }
});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("navbar-shrink");
    } else {
        navbar.classList.remove("navbar-shrink");
    }
});

