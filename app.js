const username="Username";
const email="Email";
const password="Password";
const confirmPassword="Confirm-password";
const inputFields=document.querySelectorAll("input");
const submitBtn=document.querySelector("#submit");


function validateInput(element){
    var inputField=document.querySelector("#"+element.id);
    var valid=true;
    var regexLetter=/[a-zA-Z]/;
    var regexNumber=/[0-9]/;
    var regexEmail=/[@]/;
    switch(element.id){
        case "Username":
            valid= inputField.value.length<5?false:true && regexLetter.test(inputField.value);
        break;
        case "Email":
            valid= inputField.value[inputField.value.length-1]=="@"?false:true && regexEmail.test(inputField.value);
        break;
        case "Password":
            valid= inputField.value.length<6?false:true && regexNumber.test(inputField.value) && regexLetter.test(inputField.value);
        break;
        case "Confirm-password":
            if(inputField.value!=document.querySelector("#Password").value
                 || inputField.value==""
                 || document.querySelector("#Password").classList.contains("notvalid"))
                valid=false;
        break;
    }

    if(!valid){
        inputField.classList.add("notvalid");
        inputField.classList.remove("valid");
        return false;
    }
    else{
        inputField.classList.add("valid");   
        inputField.classList.remove("notvalid");
        return true;
    }
}

function displayError(element){
    var id="#"+element.id;
    var parent= document.querySelector(id).parentNode;
    switch(element.id){

        case "Username":
            if(!validateInput(element)){
                if(parent.querySelector(".warning")==null){
                    parent.innerHTML+=`<p style="color: red;"" class="warning">Username field is required and must be at least 5 characters long</p>`;

                }
            }
            else{
                if(parent.querySelector(".warning")!=null)
                    parent.querySelector(".warning").remove();
            }
        break;

        case "Email":
            if(!validateInput(element)){
                if(parent.querySelector(".warning")==null){
                    parent.innerHTML+=`<p style="color: red;"" class="warning">Email field is required</p>`;
                }
            }
            else{
                if(parent.querySelector(".warning")!=null)
                    parent.querySelector(".warning").remove();
            }
        break;

        case "Password":
            if(!validateInput(element)){
                if(parent.querySelector(".warning")==null){
                    parent.innerHTML+=`<p style="color: red;" class="warning">Password field is required and must be atleast 6 characters long<br/>
                    Password field must containt letters and numbers</p>`;
                }
            }
            else{
                if(parent.querySelector(".warning")!=null)
                    parent.querySelector(".warning").remove();
            }
        break;

        case "Confirm-password":
            if(!validateInput(element)){
                if(parent.querySelector(".warning")==null){
                    parent.innerHTML+=`<p style="color: red;" class="warning">Confirm password field is required and must match password field</p>`;
                }
            }
            else{
                if(parent.querySelector(".warning")!=null)
                    parent.querySelector(".warning").remove();
            }
        break;
    }
}

submitBtn.addEventListener("click",()=>{
    inputFields.forEach(i=>{
        displayError(i);
    });
});

inputFields.forEach(i=>i.addEventListener("change",()=>{
    validateInput(i);
}));

