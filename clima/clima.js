const axios = require('axios');

const getClima = async coors => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coors.lat}&lon=${coors.lng}&appid=f369635965b00ad16ced5da4da4b9f3b&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}