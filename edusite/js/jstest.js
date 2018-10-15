document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByName("submit")[0].onclick = coDanhHam;
    var nameMessage = document.querySelector("form[name='formCreate'] span[name='nameMessage']");
    var emailMessage = document.querySelector("form[name='formCreate'] span[name='emailMessage']");
    var phoneMessage = document.querySelector("form[name='formCreate'] span[name='phoneMessage']");


    function coDanhHam() {
        var name = document.querySelector("form[name='formCreate'] input[name='name']").value;
        var email = document.querySelector("form[name='formCreate'] input[name='email']").value;
        var phone = document.querySelector("form[name='formCreate'] input[name='phone']").value;

        if (name.length === 0 ) {
        	nameMessage.classList.add("text-danger");
        	nameMessage.innerHTML = "Invalid name";
        	return;
        }else {
        	nameMessage.classList.remove("text-danger");
        	nameMessage.innerHTML = "";

        }
        if(email.length === 0){
           emailMessage.classList.add("text-danger");
           emailMessage.innerHTML = "Invalid email";
        	return;
        }else{
        	emailMessage.classList.remove("text-danger");
        	emailMessage.innerHTML = "";
        }

        if (phone.length === 0 ) {
            phoneMessage.classList.add("text-danger");
        	phoneMessage.innerHTML = "Invalid phone";
        	return;
        }else{
        	phoneMessage.classList.remove("text-danger");
        	phoneMessage.innerHTML = "";
        }
        alert("Đây là "+ name + " "+email );

    }
});