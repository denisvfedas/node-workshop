var request = require('request-promise');

// Euclidian distance between two points
function getDistance(pos1, pos2) {
    return Math.sqrt(Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2));
}

function getIssPosition() {
    return request(`http://api.open-notify.org/iss-now.json`)
        .then(
            function(responce) {
                // Parse as JSON
                var data = JSON.parse(responce);
                // Return object with lat and lng
                var position = {};
                position.lng = data.iss_position.longitude;
                position.lat = data.iss_position.latitude;
                return position;
            }
        );
}

function getAddressPosition(address) {
    return request('https://maps.googleapis.com/maps/api/geocode/json?address= ' + address)
    .then(function(responce) {
        //Parse as JSON
        var data = JSON.parse(responce);
        //return an `Promise` for a lat/lng object
        var coordinates = {};
        coordinates.lat = data.results[0].geometry.location.lat;
        coordinates.lng = data.results[0].geometry.location.lng;
        return coordinates;
    });
}

function getCurrentTemperatureAtPosition(position) {

}

function getCurrentTemperature(address) {

}

function getDistanceFromIss(address) {

}

exports.getIssPosition = getIssPosition;
exports.getAddressPosition = getAddressPosition;
exports.getCurrentTemperatureAtPosition = getCurrentTemperatureAtPosition;
exports.getCurrentTemperature = getCurrentTemperature;
exports.getDistanceFromIss = getDistanceFromIss;