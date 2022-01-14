
// Native browser API localization s
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, positionError);
    } else {
        showError('Geolocation is not supported by this device')
    }
};

// Call back position error 
function positionError() {
    showError('Geolocation is not enabled. Please enable to use this feature')
};

// Call show position 
function showPosition(message) {
    console.info(message);
};

// Generic log error 
function showError(message) {
    console.error(message);
};

function showName() {
    
}

export
{
    showName,
    getLocation
}
