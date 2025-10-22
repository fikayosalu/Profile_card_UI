const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const nameError = document.getElementById("name-err");
const emailError = document.getElementById("email-err");
const subjectError = document.getElementById("subject-err");
const messageError = document.getElementById("message-err");
const submit = document.getElementById("submit");
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const submitError = document.getElementById("submit-err");
const submitSuccess = document.getElementById("submit-success");
const form = document.getElementById("container");
let isValid = false;

function validate(input, err) {
	if (input.value.trim()) {
		err.style.visibility = "hidden";
		isValid = true;
	} else {
		err.style.visibility = "visible";
		isValid = false;
	}
}

fullName.addEventListener("blur", () => {
	validate(fullName, nameError);
});

email.addEventListener("blur", () => {
	validate(email, emailError);
	if (emailPattern.test(email.value)) {
		emailError.style.visibility = "hidden";
		isValid = true;
	} else {
		emailError.style.visibility = "visible";
		isValid = false;
	}
});

subject.addEventListener("blur", () => {
	validate(subject, subjectError);
});

message.addEventListener("blur", () => {
	validate(message, messageError);
	if (message.value.trim().length < 10) {
		messageError.style.visibility = "visible";
		isValid = false;
	} else {
		messageError.style.visibility = "hidden";
		isValid = true;
	}
});

form.addEventListener("submit", (e) => {
	if (!isValid) {
		e.preventDefault();
		submitSuccess.style.visibility = "hidden";
		submitError.style.visibility = "visible";
	} else {
		submitError.style.visibility = "hidden";
		submitSuccess.style.visibility = "visible";
	}
});
