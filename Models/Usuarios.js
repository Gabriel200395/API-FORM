const mongoose = require('mongoose')


const Usuarios = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    livro: {
        type: String,
        required: true
    },
    turma: {
        type: String,
        required: true
    },
    turno: {
        type: String,
        required: true
    },
    matricula: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },

},
    {
        timestamps: true,
    });


mongoose.model('usuario', Usuarios);