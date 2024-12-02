
const car=document.querySelectorAll('.card1');
car.forEach(ca=>{
    ca.addEventListener('mouseover',()=>{
        ca.style.transform='rotateY(360deg)';
        ca.style.transition='transform 2s'
    });
    ca.addEventListener('mouseout',()=>{
        ca.style.transform='rotateY(0deg)';
        ca.style.transition='transform 1s'
    });
})


const userdatamap = new Map();
let userid = 1;

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const options = document.getElementById("options").value;
    const message = document.getElementById("message").value;
    const termsAccepted = document.getElementById("terms").checked;

    if (!termsAccepted) {
        alert("Please accept the terms and conditions.");
        return;
    }
    const userData = { firstName, lastName, email, phone, options, message };
    userdatamap.set(userid, userData);

    const displayData = [...userdatamap.values()];
    console.log(displayData);

    userid++;
    alert("Form submitted successfully!");
    e.target.reset();
});

