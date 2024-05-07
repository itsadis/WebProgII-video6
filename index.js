// const fs = require('fs'); // core module
// const cetakNama = require('./coba'); // local module
// const pi = require('./coba);
const coba = require("./coba");

console.log(
    coba.cetakNama('Adisty'), 
    coba.pi, 
    coba.mahasiswa.cetakMhs(), 
    new coba.Orang()
);
