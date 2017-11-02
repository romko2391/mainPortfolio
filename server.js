//підключаєм бібліотеки
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const PORT = 8000;
const multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/img/goods/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname);
    }
});
// кліієнтська частина сайту знаходиться у папці public
app.use(express.static(__dirname + '/public'));
//стандарти кодування
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    'extended': 'true'
}));

var upload = multer({
    storage: storage
});

//MYSQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'vivtorok16'
});
//Авторизація 
app.post('/login-auth', function (req, res) {
    connection.query('SELECT * FROM users  WHERE login = ?', [req.body.login], function (err, rows) {
        if (err) throw err;
        if (rows[0] != undefined) {
            if (rows[0].password == [req.body.pass]) {
                res.status(200).send("welcome");
            } else {
                res.status(200).send("wrong password");
            }
        } else {
            res.status(200).send("wrong login");
        }
    });
});
//Реєстрація
//app.post('/login-reg', function (req, res) {
//    connection.query('SELECT * FROM users  WHERE login = ?', req.body.login, function (err, rows) {
//        if (err) throw err;
//        if (rows[0] != undefined) {
//            res.status(200).send("Choose another login!");
//        } else {
//            connection.query('INSERT INTO users SET ?', req.body,
//                function (err, result) {
//                    if (err) throw err;
//                    console.log('user added to database with id: ' + result.insertId);
//
//                }
//
//            );
//            res.status(200).send(req.body.login+" registered!");
//        }
//    });
//});

//Завантажити дані авторизованого юзера
app.post('/user-prof', function (req, res) {
    connection.query('SELECT * FROM users  WHERE login = ?', [req.body.login], function (err, rows) {
        if (err) throw err;
        if (rows[0] != undefined) {
             connection.query('SELECT * FROM userpage  WHERE users_id = ?', [rows[0].id],
                function (err, result) {
                    if (err) throw err;
                    res.status(200).send(result);
                }
            );
        } else {
            res.status(200).send("User is undefined");
        }
    });
});

//Змінити пароль
//app.post('/login-change', function (req, res) {
//    connection.query('UPDATE users SET password = ? WHERE login = ?', [req.body.password, req.body.login],
//        function (err) {
//            if (err) throw err;
//        }
//    );
//    res.sendStatus(200);
//});

//Видалити юзера
//app.post('/login-del', function (req, res) {
//    connection.query('DELETE FROM users WHERE login = ?', req.body.login, function (err) {
//        if (err) throw err;
//        console.log('user deleted id: ' + req.body.id);
//    });
//    res.sendStatus(200);
//});

//Отримати юзерів
app.get('/users', function (req, res) {
    connection.query('SELECT * FROM users', function (err, rows) {
        if (err) throw err;
        console.log('get all itemss, length: ' + rows.length);
        res.status(200).send(rows);
    });
});

//Отримання товарів з бд
app.get('/goods', function (req, res) {
    connection.query('SELECT * FROM goods', function (err, rows) {
        if (err) throw err;
        console.log('get all goods, length: ' + rows.length);
        res.status(200).send(rows);
    });
});
//Запис товарів в бд
app.post('/goods', function (req, res) {
    connection.query('INSERT INTO `goods` SET ?', [req.body],
        function (err, result) {
            if (err) throw err;
            console.log('item added to database with id: ' + result.insertId);
        }
    );
    res.sendStatus(200);
});
//Змінити дані товару в бд
app.post('/item-edit/:id', function (req, res) {
    connection.query('UPDATE items SET name = ?, price = ?, src = ? WHERE id = ?',
        [req.body.name, req.body.price, req.body.src, req.params.id],
        function (err) {
            if (err) throw err;
            console.log('item update id: ' + req.params.id);
        }
    );
    res.sendStatus(200);
});
//
app.get('/news', function (req, res) {
    connection.query('SELECT * FROM blog', function (err, rows) {
        if (err) throw err;
        console.log('get all news, length: ' + rows.length);
        res.status(200).send(rows);
    });
});
//Запис товарів в бд
app.post('/news', function (req, res) {
    connection.query('INSERT INTO `blog` SET ?', [req.body],
        function (err, result) {
            if (err) throw err;
            console.log('item added to database with id: ' + result.insertId);
        }
    );
    res.sendStatus(200);
});

app.post('/img', upload.any(), function (req, res, next) {
    res.sendStatus(200);
})
//усі адреси контролюються клієнтським ангуляром
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
//Запуск серверу
app.listen(PORT, function (err) {
    if (err) throw err;
    console.log('Server start on port 8000!')
});

connection.on('error', function(err) {
  console.log("[mysql error]",err);
});
