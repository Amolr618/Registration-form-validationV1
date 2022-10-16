let globalIsSubmitted = false 

function validate(isSubmitted = false){
    let FirstName = document.getElementById("first-name").value
    let LastName = document.getElementById("last-Name").value
    let email = document.getElementById("email").value
    let City = document.getElementById("city").value
    let State = document.getElementById("state").value
    let Zip = document.getElementById("zip").value
    let TnC = document.getElementById("TnC").checked
    let error = false
    
   // console.log(FirstName, LastName, Email, City, State, Zip, TnC)
   if(isSubmitted) {''
    globalIsSubmitted = true
}

if(globalIsSubmitted) 
{
   if(FirstName.length >=2){
        document.getElementById("first-name-valid").style.display = 'block'
        document.getElementById("first-name-invalid").style.display = 'none'
    } else {
            document.getElementById("first-name-invalid").style.display = 'block'
            document.getElementById("first-name-valid").style.display = 'none'
            error = true
    }

    if(LastName.length >=2){
        document.getElementById("last-name-valid").style.display = 'block'
        document.getElementById("last-name-invalid").style.display = 'none'
    } else {
            document.getElementById("last-name-invalid").style.display = 'block'
            document.getElementById("last-name-valid").style.display = 'none'
            error = true
    }

    if(
        email.includes('@') && 
        email.includes('.') && 
        email.indexOf('@') != 0 &&
        email.length-email.lastIndexOf(".")>=3)
        {
        document.getElementById("email-valid").style.display = 'block'
        document.getElementById("email-invalid").style.display = 'none'
    } else {
            document.getElementById("email-invalid").style.display = 'block'
            document.getElementById("email-valid").style.display = 'none'
            error = true
    }

    if(City.length >=3){
        document.getElementById("city-valid").style.display = 'block'
        document.getElementById("city-invalid").style.display = 'none'
    } else {
            document.getElementById("city-invalid").style.display = 'block'
            document.getElementById("city-valid").style.display = 'none'
            error = true
    }

    if(State != 'None'){
        document.getElementById("state-valid").style.display = 'block'
        document.getElementById("state-invalid").style.display = 'none'
    } else {
            document.getElementById("state-invalid").style.display = 'block'
            document.getElementById("state-valid").style.display = 'none'
            error = true
    }

    let zipNumber = parseInt(Zip)
	if(Zip.length === 6 && !isNaN(zipNumber)) {
        document.getElementById("zip-valid").style.display = 'block'
        document.getElementById("zip-invalid").style.display = 'none'
    } else {
            document.getElementById("zip-invalid").style.display = 'block'
            document.getElementById("zip-valid").style.display = 'none'
            error = true
    }

    if(TnC){
        document.getElementById("TnC-invalid").style.display = 'none'
    } else {
            document.getElementById("TnC-invalid").style.display = 'block'
            error=true
    }

    if(!error  && isSubmitted) {
		alert('Your details have been saved successfully!')

		document.getElementById('registration-form').reset()

		let validFeedbacks = document.getElementsByClassName('valid-feedback')
		for(let i = 0; i < validFeedbacks.length; i++) {
			validFeedbacks[i].style.display = 'none'
		}
		let invalidFeedbacks = document.getElementsByClassName('invalid-feedback')
		for(let i = 0; i < invalidFeedbacks.length; i++) {
			invalidFeedbacks[i].style.display = 'none'
		}
    }
    }
	}

    
    /*
		Email:
		- Include @ - Done
		- Include . - Done
		- Atleast 1 character before @ - Done
		- Atleast 2 characters after last. - Done
	*/

	/* 
		includes - Returns true if the string contains that character/substring, returns false if not 
		indexOf - Returns  index of first occurence of that character/substring, else returns -1
	*/

	/*
		m@gmail.co
		Index of .: 7
		Length of email: 10
		m@gmail.com
		Index of .: 7
		Length of email: 11
	*/
    /*
	- Length 6
	- All numbers
*/

// parseInt - Returns Number equivalent of String, if cannot - then returns NaN
// isNaN - Returns true if value is NaN
// !isNaN -> Returns true if value is Number

/*
	- If no errors,
	1. Reset the form, reset valid and invalid messages
	2. Alert: 'Your details have been saved successfully!'
*/

// document.getElementById('first-name').value = ''
// document.getElementById('last-name').value = ''
// document.getElementById('email').value = ''
// document.getElementById('city').value = ''
// document.getElementById('state').value = ''
// document.getElementById('zip').value = ''
// document.getElementById('t-and-c').checked = false   
