function openPopup() {
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
    document.getElementById('survey-form').reset();
}

function validateMobileNumber(mobile) {
    return /^\d{10}$/.test(mobile);
}

document.getElementById('submit-button').addEventListener('click', function (e) {
    e.preventDefault();
    const form = document.getElementById('survey-form');
    if (form.checkValidity()) {
        const data = new FormData(form);
        const mobileNumber = data.get('mobile');

        if (validateMobileNumber(mobileNumber)) {
            let formData = '<h2>Survey Form Data</h2>';
            for (const entry of data.entries()) {
                formData += `<p><b>${entry[0]}:</b> ${entry[1]}</p>`;
            }
            document.getElementById('popup-data').innerHTML = formData;
            openPopup();
        } else {
            alert('Mobile number should be exactly 10 digits.');
        }
    } else {
        alert('Please fill in all required fields.');
    }
});

document.getElementById('reset-button').addEventListener('click', closePopup);

document.getElementById('popup-close').addEventListener('click', closePopup);

window.addEventListener('click', function (event) {
    if (event.target === document.getElementById('popup')) {
        closePopup();
    }
});
