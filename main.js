function toggleNavigationMenu() {
    document.querySelector(".wrapper").classList.toggle("nav-open");
}

document.querySelector("#open-nav-menu").addEventListener("click", toggleNavigationMenu);
document.querySelector("#close-nav-menu").addEventListener("click", toggleNavigationMenu);


const customer = "Sarah";
let balance = 1000;

console.log("Hello " + customer + ", your balance is " + balance);

balance = balance + 200;

console.log("Hello " + customer + ", your balance is " + balance);