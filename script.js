

const formOpenBtn = document.querySelector("#form-open"),
home=document.querySelector(".home"),
formContainer= document.querySelector(".form_container"),
formCloseBtn=document.querySelector(".form_close"),

signupBtn = document.querySelector("#signup"),
loginBtn = document.querySelector("#login"),
pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click",()=> home.classList.add("show"))
formCloseBtn.addEventListener("click",()=> home.classList.remove("show"))
  
signupBtn.addEventListener("click",(e) =>{
    e.preventDefault();
    formContainer.classList.add("active");

});
pwShowHide.forEach(icon =>{
    icon.addEventListener("click",()=>{
    let getPwInput=icon.parentElement.querySelector("input")
    
    if(getPwInput.type==="password"){
        getPwInput.type="text";
        icon.classList.replace("uil-eye-slash","uil-eye")

    }else{
        getPwInput.type="password";
        icon.classList.replace("uil-eye","uil-eye-slash")
    }
    //console.log(getPwInput);

    });
});

loginBtn.addEventListener("click",(e) =>{
    e.preventDefault();
    formContainer.classList.remove("active");
});




//....for alert message

// Function to show a success alert message
function showSuccessMessage() {
    const successAlert = document.getElementById('successAlert');
    successAlert.classList.remove('hidden');
    
    setTimeout(function () {
        successAlert.classList.add('hidden');
        // You can redirect the user to another page or perform other actions here
    }, 3000); // 3000 milliseconds (3 seconds)
}

// Add an event listener to the login button to simulate a successful login
document.getElementById('loginButton').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the form submission (for demo purposes)

    // Simulate a successful login (you should replace this with your actual login logic)
    const loginSuccessful = true;

    if (loginSuccessful) {
        // Call the function to show the success message
        showSuccessMessage();
    }
});


//........footer.......
const close = document.querySelector(".close");
 const open = document.querySelector(".ham");
 const menu = document.querySelector(".menu");
 close.addEventListener("click", () => {
 
 menu.style.visibility = "hidden";
 });
 open.addEventListener("click", () => {
 menu.style.visibility = "visible";
 });

 
          
  
   


