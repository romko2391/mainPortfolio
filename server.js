//підключаєм бібліотеки
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8000;
// кліієнтська частина сайту знаходиться у папці public
app.use(express.static(__dirname + '/public'));
//стандарти кодування
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    'extended': 'true'
}));
var arr = [
    {
        login: "admin",
        password: "123"
    },
    {
        login: "user1",
        password: "456"
    },
    {
        login: "user2",
        password: "789"
    }
]

//Авторизація 
app.post('/homepage.html', function (req, res) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].login ==req.body.login) {
            if (arr[i].pass == req.body.password) {
                res.status(200).send("good");
                break;
            } else {
                res.status(200).send("Wrong password!");
                break;
            }
        } else {
            if(i== arr.length-1){
                res.status(200).send("Wrong login!");
            }
        }
    }
});
//усі адреси контролюються клієнтським ангуляром
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
//Запуск серверу
app.listen(PORT, function (err) {
    if (err) throw err;
    console.log('Server start on port 8000!')
});
