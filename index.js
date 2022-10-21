// getting day, month and year inputs
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

// function to verify age
function verifyAge() {
    // preventing submitting the form
    event.preventDefault();

    const today = new Date;
    const dd = day.value;
    const mm = month.value;
    const yy = year.value;

    // check if all fields are filled
    if (d.length == 0 || m.length == 0 || y.length==0) {
        alert("All fields must be filled out");
        return false;
    }
    else {
          // formatting date of birth
        const dob = new Date(`${mm}-${dd}-${yy}`);

        const diff = today - dob;
        // calculating age in days
        const ageInDays = diff / (1000 * 60 * 60 * 24);
    
        const age = Math.floor(ageInDays / (365));
        console.log(age);
        if (age > 15) {
            window.open("https://www.google.com/")
            // open link in new tab if age > 15
        }
        else if (age < 15) {
            alert("Your age is restricted");
        }
    }
    
}