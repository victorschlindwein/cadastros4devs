const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const PessoasSchema = new mongoose.Schema({
    nome:{
      type: String,
      required: true
    },
    idade:{
      type: String,
      required: true
    },
    cpf:{
      type: String,
      required: true
    },
    rg:{
      type: String,
      required: true
    },
    data_nasc:{
      type: String,
      required: true
    },
    signo:{
      type: String
    },
    mae:{
      type: String,
      required: true
    },
    pai:{
      type: String
    },
    email:{
      type: String,
      required: true
    },
    senha:{
      type: String,
      required: true
    },
    cep:{
      type: String
    },
    endereco:{
      type:String
    },
    numero:{
      type: Number
    },
    bairro:{
      type: String,
    },
    cidade:{
      type: String,
    },
    estado:{
      type: String,
    },
    telefone_fixo:{
      type: Number
    },
    celular:{
      type: Number
    },
    altura:{
      type: String,
    },
    peso:{
      type: String,
    },
    tipo_sanguineo:{
      type: String,
    },
    cor:{
      type: String
    }
  });

PessoasSchema.plugin(mongoosePaginate);
mongoose.model("Pessoas", PessoasSchema);