const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({ // Cria um esquema(molde) de como vão ser os links
    title: {type:String, required:true}, // Torna esse valor obrigatório
    description: String,
    url: {type:String, required:true},
    click: {type:Number, default: 0}  // Define "0" como valor padrão de "click";
})

module.exports = mongoose.model('Link', linkSchema); // Cria um modelo para o link.
                                                    // Link com "L" refere-se ao modelo.
                                                