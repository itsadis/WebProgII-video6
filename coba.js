function cetakNama(nama) {
    return `Halo, nama saya ${nama}`;
}

const pi = 3.14;

const mahasiswa = {
    nama : 'Adisty Nurharumandari',
    umur : 20,
    cetakMhs() {
        return `Halo, nama saya ${this.nama} dan saya ${this.umur} tahun.`;
    },
};

class Orang {
    constructor() {
        console.log('Objek orang telah dibuat!!');
    }
}

// module.exports.cetakNama = cetakNama;
// module.exports.pi = pi;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// module.exports = {
//   cetakNama: cetakNama,
//    pi: pi,
//    mahasiswa: mahasiswa,
//    Orang: Orang,
// };

module.exports = { cetakNama, pi, mahasiswa, Orang }; 