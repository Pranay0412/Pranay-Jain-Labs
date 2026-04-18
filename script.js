// This runs when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log("Pranay Jain Labs Hub is Live!");

    const welcomeMsg = document.getElementById('welcome-msg');
    const now = new Date();
    const hour = now.getHours();
    
    let greeting = "";
    if (hour < 12) greeting = "Good Morning!";
    else if (hour < 18) greeting = "Good Afternoon!";
    else greeting = "Good Evening!";

    // Updates your header text with a greeting
    welcomeMsg.innerText = `${greeting} | Computer Engineering Student | Full-Stack & Data Portfolio`;
});