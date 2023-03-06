
// Hello all
function validateForm() {
    let firstName = document.getElementById('first_name');
    let lastName = document.getElementById('last_name');
    let dateofBirth = document.getElementById('00N8Z00000CFBru');
    let gender = document.getElementById('00N8Z00000CFBs5');
    let stret = document.getElementById('street');
    let city = document.getElementById('city');
    let stateProvince = document.getElementById('state_code');
    let zipCode = document.getElementById('zip');
    let serviceLine = document.getElementById('00N8Z00000CFM89');
    let createrName = document.getElementById('00N8Z00000CFBsQ');
    let phone = document.getElementById('00N8Z00000CFBsR');
    let leadSource = document.getElementById('lead_source');
    let insurance = document.getElementById('insurance');
    let primaryInsurance = document.getElementById('00N8Z00000CFBsH');


    if (firstName.value.trim().length <= 2) {
        Swal.fire({ icon: 'error', title: 'First Name is required.', confirmButtonColor: "#3c8dbc" });
        return false;
    }
    else if (lastName.value.trim().length <= 2) {
        Swal.fire({ icon: 'error', title: 'Last Name is required.', confirmButtonColor: "#3c8dbc" });
        return false;
    }
    else if (dateofBirth.value == "") {
        Swal.fire({ icon: 'error', title: 'Birth Date is required.', confirmButtonColor: "#3c8dbc" });
        return false;
    }

    else if (gender.value == "" || gender.value == "--None--") {
        Swal.fire({ icon: 'error', title: 'Gender is required.', confirmButtonColor: "#3c8dbc" });
        return false;
    }

    else if (stret.value.trim().length <= 2) {
        Swal.fire({ icon: 'error', title: 'Street Address is required.', confirmButtonColor: "#3c8dbc" });
        return false;
    }

    else if (city.value.trim().length <= 2) {
        Swal.fire({ icon: 'error', title: 'City is required.', confirmButtonColor: "#3c8dbc" });
        return false;
    }


    else if (stateProvince.value.trim().value <= 1) {
        Swal.fire({ icon: 'error', title: 'State is required.', confirmButtonColor: "#3c8dbc" });
        return false;
    }

    else if (zipCode.value.length <= 4) {
        Swal.fire({ icon: 'error', title: 'Zip/Postal Code is required.', confirmButtonColor: "#3c8dbc" });
        return false;
    }
    else if(serviceLine.value == "" || serviceLine.value == "--None--"){
        Swal.fire({ icon: 'error', title: 'Service Line is required.', confirmButtonColor: "#3c8dbc" });
        return false;
    }
    else if (createrName.value.trim().length <= 2) {
        Swal.fire({ icon: 'error', title: 'Name is required.', confirmButtonColor: "#3c8dbc" });
        return false;
    }
    else if (phone.value.length <= 9) {
        Swal.fire({ icon: 'error', title: 'Phone Number is required.', confirmButtonColor: "#3c8dbc" });
        return false;
    }
    else if (leadSource.value == "" || leadSource.value == "--None--") {
        Swal.fire({ icon: 'error', title: 'Please select Lead Source status.', confirmButtonColor: "#3c8dbc" });
        return false;
    }
    else if (insurance.value == "" || insurance.value == "--None--") {
        Swal.fire({ icon: 'error', title: 'Please select Insurance status.', confirmButtonColor: "#3c8dbc" });
        return false;
    }

    else if (insurance.value == "Yes" && primaryInsurance.value == "") {
        Swal.fire({ icon: 'error', title: 'Primary Insurance Payer/Carrier  is required.', confirmButtonColor: "#3c8dbc" });
        return false;
    }
    else {
        return true;
    }
}

function myFunction() {
    document.getElementById("00N8Z00000CFBru").setAttribute("data-date", "yyyy-mm-dd");
}

function resetForm() {
    firstName = document.getElementById('first_name').value = "";
    lastName = document.getElementById('last_name').value = "";
    //  dateofBirth = document.getElementById('00N8Z00000CFBru').value = "";
    gender = document.getElementById('00N8Z00000CFBs5').value = "";
    city = document.getElementById('city').value = "";
    stret = document.getElementById('street').value = "";
    stateProvince = document.getElementById('state_code').value = "";
    zipCode = document.getElementById('zip').value = "";
    insurance = document.getElementById('insurance').value = "";
    primaryInsurance = document.getElementById('00N8Z00000CFBsH').value = "";
}

function currentDate() {

    let birthDate = document.getElementById('00N8Z00000CFBru');
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    let yyyy = today.getFullYear() - 20;

    console.log(birthDate.value);
    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    today = yyyy + '-' + mm + '-' + dd;
    birthDate.defaultValue = "1950-04-01";
    birthDate.setAttribute("max", today);
}

function copyAddrress() {
    let copyaddres = document.getElementById("sameAsAttorney");
    let firstName = document.getElementById("00N8Z00000CFMXF").value;
    let lastName = document.getElementById("00N8Z00000CFMXF2").value;
    let emailAddress = document.getElementById("00N8N0000079suz").value;
    let phoneNumber = document.getElementById("00N8Z00000CFMXI").value;
    let street = document.getElementById("00N8N0000079sv4").value;
    let city = document.getElementById("00N8N0000079sv9").value;
    let state = document.getElementById("00N8N0000079svE").value;
    let zipPostal = document.getElementById("00N8N0000079svJ").value;
    if (copyaddres.checked) {
        document.getElementById("00N8Z00000CFBs0").value = firstName;
        document.getElementById("00N8Z00000CFBs1").value = lastName;
        document.getElementById("00N8N0000079sua").value = emailAddress;
        document.getElementById("00N8Z00000CFBs2").value = phoneNumber;
        document.getElementById("00N8N0000079suf").value = street;
        document.getElementById("00N8N0000079suk").value = city;
        document.getElementById("00N8N0000079suu").value = state;
        document.getElementById("00N8N0000079sup").value = zipPostal;
    }
    else {
        document.getElementById("00N8Z00000CFBs0").value = "";
        document.getElementById("00N8Z00000CFBs1").value = "";
        document.getElementById("00N8N0000079sua").value = "";
        document.getElementById("00N8Z00000CFBs2").value = "";
        document.getElementById("00N8N0000079suf").value = "";
        document.getElementById("00N8N0000079suk").value = "";
        document.getElementById("00N8N0000079suu").value = "";
        document.getElementById("00N8N0000079sup").value = "";
    }
}

function insuranceSelect() {
    let insurance = document.getElementById("insurance").value;
    console.log("hello", insurance);

    let doyouHave = document.getElementById('00N8Z00000CFBsH')
    let primaryInsu = document.getElementById('00N8Z00000CFBs7')
    let insuranceGroupid = document.getElementById('Plan_Phone_Number__c')
    let payerPhone = document.getElementById('00N8Z00000CFBs8')
    let insuranceMemberid = document.getElementById('00N8Z00000CFMXG')
    let medicaidNumber = document.getElementById('00N8Z00000CFMXK')
    if (insurance == "Yes") {
        doyouHave.removeAttribute("disabled");
        primaryInsu.removeAttribute("disabled");
        insuranceGroupid.removeAttribute("disabled");
        payerPhone.removeAttribute("disabled");
        insuranceMemberid.removeAttribute("disabled");
        medicaidNumber.removeAttribute("disabled");

    }
    else {
        doyouHave.setAttribute("disabled", true);
        primaryInsu.setAttribute("disabled", true);
        insuranceGroupid.setAttribute("disabled", true);
        payerPhone.setAttribute("disabled", true);
        insuranceMemberid.setAttribute("disabled", true);
        medicaidNumber.setAttribute("disabled", true);

        doyouHave.value = "";
        primaryInsu.value = "";
        insuranceGroupid.value = "";
        payerPhone.value = "";
        insuranceMemberid.value = "";
        medicaidNumber.value = "";


    }
}

function makeInputsEmpty1() {
    let street = document.getElementById("street").value;
    if (street.length == 0) {
        document.getElementById("city").value = "";
        document.getElementById("state_code").value = "";
        document.getElementById("zip").value = "";
    }

    console.log("keyPressed");
}

function makeInputsEmpty2() {
    let street = document.getElementById("00N8N0000079sv4").value;
    if (street.length == 0) {
        document.getElementById("00N8N0000079sv9").value = "";
        document.getElementById("00N8N0000079svE").value = "";
        document.getElementById("00N8N0000079svJ").value = "";
    }

    console.log("keyPressed");
}


function makeInputsEmpty3() {
    let street = document.getElementById("00N8N0000079suf").value;
    if (street.length == 0) {
        document.getElementById("00N8N0000079suk").value = "";
        document.getElementById("00N8N0000079suu").value = "";
        document.getElementById("00N8N0000079sup").value = "";
    }

    console.log("keyPressed");
}


function fillPoa() {
    let allowToFill = document.getElementById("fillingOk").value;
    let firstName = document.getElementById('00N8Z00000CFMXF')
    let emailAddress = document.getElementById('00N8N0000079suz')
    let phoneNumber = document.getElementById('00N8Z00000CFMXI')
    let street = document.getElementById('00N8N0000079sv4')
    let city = document.getElementById('00N8N0000079sv9')
    let state = document.getElementById('00N8N0000079svE')
    let zipPostal = document.getElementById('00N8N0000079svJ')

    if (allowToFill == "Yes") {
        firstName.removeAttribute("disabled");
        emailAddress.removeAttribute("disabled");
        phoneNumber.removeAttribute("disabled");
        street.removeAttribute("disabled");
        city.removeAttribute("disabled");
        state.removeAttribute("disabled");
        zipPostal.removeAttribute("disabled");
    }
    else {

        firstName.setAttribute("disabled", true);
        emailAddress.setAttribute("disabled", true);
        phoneNumber.setAttribute("disabled", true);
        street.setAttribute("disabled", true);
        city.setAttribute("disabled", true);
        state.setAttribute("disabled", true);
        zipPostal.setAttribute("disabled", true);

        firstName.value = "";
        lastName.value = "";
        emailAddress.value = "";
        phoneNumber.value = "";
        street.value = "";
        city.value = "";
        state.value = "";
        zipPostal.value = "";


    }
}