const axios = require('axios');

const getLugarLatLng = async direccion => {
    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyCroCERuudf2z02rCrVa6DTkeeneQuq8TA`)
    if (resp.data.status !== 'OK')
        throw new Error('Lugar no encontrado');

    let location = resp.data.results[0];
    let coors = location.geometry.location;

    return {
        lugar: location.formatted_address,
        ...coors
    };
}

module.exports = {
    getLugarLatLng
}