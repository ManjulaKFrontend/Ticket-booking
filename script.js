//


function checkAvailability(destination) {
    return new Promise((resolve, reject) => {
        // Simulating API call to check availability
        
        setTimeout(() => {
            const availableDestinations = ['New York', 'Chicago', 'Bangalore','Kerala' ,'New York'];
         if (availableDestinations.includes(destination)) {
           resolve (`${destination} is available.`);
            }
            
            else {
                reject(`${destination} is not available.`);
            }
        }, 2000); // Simulating delay of 2 seconds
    });
}

document.getElementById('bookBtn').addEventListener('click', function() {
    const destination = document.getElementById('destination').value;
    const statusElement = document.getElementById('status');


    checkAvailability(destination)
        .then((message) => {
            statusElement.textContent = alert( message + ' Booking your ticket...');
            // Simulating booking process
            setTimeout(() => {
                statusElement.textContent =  alert ('Ticket booked successfully!!!');
            }, 3000); // Simulating delay of 2 seconds for booking
        })
        .catch((error) => {
            statusElement.textContent = error;
        });
});//



