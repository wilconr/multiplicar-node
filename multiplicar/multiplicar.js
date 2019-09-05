// requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    console.log('======================'.green);
    console.log(`     Tabla del ${base}      `.green);
    console.log('======================'.green);

    for (let index = 1; index <= limite; index++) {

        console.log(`${base} x ${index} = ${base * index}`);

    };
};

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido: ${base}, no es un numero...`);
            return;
        }
        let dato = '';

        for (let index = 1; index <= limite; index++) {

            dato += `${base} x ${index} = ${base * index}\n`;

        };

        const data = new Uint8Array(Buffer.from(dato));
        fs.writeFile(`archivos/Tabla del ${base} hasta el ${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`Tabla del ${base} hasta el ${limite}.txt`.green);
        });

    });
};

module.exports = {
    crearArchivo,
    listarTabla
}