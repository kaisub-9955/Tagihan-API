const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({
     extended: true
 }));
// Pengaturan koneksi
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'epayment'
});

// konek ke database
dbConn.connect();

// Melihat semua tagihan
app.get('/tagihan', function (req, res) {
    dbConn.query('SELECT * FROM tagihan', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'tagihan list.' });
    });
});

// Melihat tagihan dengan id 
app.get('/tagih/:id', function (req, res) {
    let tagihan_id = req.params.id;
    if (!tagihan_id) {
     return res.status(400).send({ error: true, message: 'Masukan tagihan_id' });
    }
    dbConn.query('SELECT * FROM tagihan where id=?', user_id, function (error, results, fields) {
     if (error) throw error;
      return res.send({ error: false, data: results[0], message: 'tagihan list.' });
    });
});

// Menambah tagihan baru 
app.post('/tagih', function (req, res) {
    let tagihan = req.body.tagihan;


    if (!tagihan) {
      return res.status(400).send({ error:true, message: 'Masukan Tagihan' });
    }
    
    dbConn.query("INSERT INTO tagihan SET ? ", { nama: tagihan.nama, semester: tagihan.semester, nilai: tagihan.nilai, }, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Tagihan baru telah ditambahkan.' });
    });
});

//  Update tagihan dengan id
app.put('/tagih', function (req, res) {
    let tagihan_id = req.body.tagihan_id;

    let nama = req.body.nama;    
    let semester = req.body.semester;
    let nilai = req.body.nilai;

    if (!tagihan_id ||!nilai || !semester || !nama) {
        return res.status(400).send({ error: true, message: 'Masukan nama, semester dan tagihan_id' });
    }

    dbConn.query("UPDATE Tagihan SET nama = ?, semester = ? ,nilai = ? ,WHERE id = ?", [nama, semester, nilai, tagihan_id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Tagihan telah di Update.' });
    });
});

//  Hapus tagihan
app.delete('/tagih', function (req, res) {
    let tagihan_id = req.body.tagihan_id;

    if (!tagihan_id) {
        return res.status(400).send({ error: true, message: 'Masukan Tagihan_id' });
    }

    dbConn.query('DELETE FROM Tagihan WHERE id = ?', [tagihan_id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Tagihan telah dihapus.' });
    });    
});


//default route
app.get('/id', function (req, res) {
	console.log('req.body', req.body);
	console.log('req.header', req.header);
    console.log('req.query', req.body);
    console.log('req.params', req.params.id);

	return res.send({ error: false, message: 'Ini adalah Rute pertama saya' })
});

//set port
app.listen(3005, function() {
	console.log('Node app berjalan di port 3005');
});

module.exports = app;