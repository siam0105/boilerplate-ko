//모듈 불러오기
const express = require('express');
//function이용하기
const app = express();
//port 설정
const port = 5000;

const { User } = require("./models/User");
const bodyParser = require('body-parser');

const config = require('./config/key');

//body-parser 옵션주기
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

//루트디렉토리에 오면 helloWorld를 출력할수있도록함
app.get('/',(req,res) => res.send('Hello World!'));

app.post('/register',(req, res) => {
    //회원가입할때 필요한 정보들을 client에서 가져오면 정보들을 DB에 넣어준다.

    const user = new User(req.body);
    //save() => mongoDB에서 오는 메소드
    user.save((err, userInfo) => {
        if(err) return res.json({ success : false, err});
        return res.status(200).json({
            success : true
        });
    });
});

app.listen(port, () => console.log('Example app listening on port ${port}!'));