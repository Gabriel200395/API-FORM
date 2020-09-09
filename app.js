const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');


// esta pegando meu modelo de usuario
require("./Models/Usuarios");
const Usuarios = mongoose.model('usuario')

const app = express();
app.use(express.json());



//Middleware para acessar as urls e da permissão
app.use((req, res, next) => {
    console.log("acessou o middleware!");
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', "GET,PUT,POST,DELETE");
    app.use(cors());
    next();
});


//conexao com o banco de dados
mongoose.connect('mongodb://localhost/Usuarios', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("conexão com sucesso ao banco de dados do mongo");
}).catch((erro) => {
    console.log("conexão não realizada com sucesso ao banco de dados do mongo");
});


// criar buscar usuarios

app.get("/usuario", (req, res) => {
    Usuarios.find({}).then((usuario) => {
        return res.json(usuario);
    }).catch((error) => {
        return res.status(400).json({
            error: true,
            message: "Não foi posssivel lista os usuários"
        })
    });
});

// para lista o id dos usuarios

app.get("/usuario/:id", (req, res) => {
    Usuarios.findOne({ _id: req.params.id }).then((usuario) => {
        return res.json(usuario);
    }).catch((error) => {
        return res.status(400).json({
            error: true,
            message: "Não foi possivel lista os id dos usuários"
        })
    })
});

// Cadastrar o usuário no banco

app.post("/usuario", (req, res) => {
    const usuario = Usuarios.create(req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Não foi possivel adicionar o usuário"
        })
        return res.status(200).json({
            error: false,
            message: "Usuário cadastrado com sucessso"
        })
    });
})


// Deletar o usuário no Banco

app.delete("/usuario/:id", (req, res) => {
    const usuario = Usuarios.deleteOne({ _id: req.params.id }, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Erro ao excluir o usuário"
        })
        return res.status(200).json({
            error: false,
            message: "Usuário excluido com sucesso"
        })
    })
});



// Modificando o usuário

app.put("/usuario/:id", (req, res) => {

    const usuario = Usuarios.updateOne({ _id:req.params.id}, req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Erro de fazer a modificação no usuário"
        })

        return res.status(200).json({
            error: false,
            message: "Modificação feita com sucesso"
        })

    })


})

app.listen(8080, () => {
    console.log("servidor rodando na porta 8080: http://localhost:8080/")
})
