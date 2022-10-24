// getting day, month and year inputs
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

// function to verify age
function verifyAge() {
    // preventing submitting the form
    event.preventDefault();

    const today = new Date;
    const dayToday = today.getDate();
    const monthToday = today.getMonth() + 1;
    const yearToday = today.getFullYear();
    const dd = day.value;
    const mm = month.value;
    const yy = year.value;

    // check if all fields are filled
    if (dd.length <= 0 || mm.length <= 0 || yy.length <= 0) {
        alert("All fields must be filled out");
        return false;
    }
    // check for invalid input
    else if(dd<1 || dd>31 || mm <1 || mm>12 || yy<1970 || yy>2022){
        alert("Invalid Input");
        return false;
    }
    else {
        let diffOfYear = Number(yearToday) - yy;
        console.log(diffOfYear)
        // Redirect if difference between years is greater than 15
        if (diffOfYear > 15) {
            window.open("https://www.google.com/")
        }
        // Compare Date and Month if difference between years is equal to 15
        else if (diffOfYear == 15) {
            if (mm < monthToday) {
                window.open("https://www.google.com/")
            }
            else if (mm == monthToday) {
                if (dd <= dayToday) {
                    window.open("https://www.google.com/")
                }
                else {
                    alert("Your age is restricted");
                }
            }
            else{
                alert("Your age is restricted");
            }

        }
         // Alert if difference between years is less than 15
        else {
        alert("Your age is restricted");
    }

}

}
