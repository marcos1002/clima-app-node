const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

let getInfo = async ciudad => {
    let coors = await lugar.getLugarLatLng(ciudad);
    let temp = await clima.getClima(coors);
    return { ciudad: coors.lugar, temp };
}

getInfo(argv.direccion)
    .then(res => console.table([res]))
    .catch(err => console.log(err.message));