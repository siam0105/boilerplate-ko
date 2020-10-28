//모듈 불러오기
const express = require('express');
//function이용하기
const app = express();
//port 설정
const port = 5000;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://siam:1234@cluster0.jakmv.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

//루트디렉토리에 오면 helloWorld를 출력할수있도록함
app.get('/',(req,res) => res.send('Hello World!'));

app.listen(port, () => console.log('Example app listening on port ${port}!'));