const mongoose = require('mongoose');
const Pessoas = mongoose.model('Pessoas');

module.exports = {
  async index(req, res){
    const { page = 1 } = req.query;
    const pessoas = await Pessoas.paginate({},{
      page,
      limit: 5
    });

    return res.json(pessoas);
  },
  async store(req, res){
    const pessoa = await Pessoas.create(req.body);

    return res.json(pessoa);
  },
  async update(req, res){
    const pessoa = await Pessoas.findByIdAndUpdate(req.params.id, req.body, { new : true });

    return res.json(pessoa);
  },
  async destroy(req, res){
    await Pessoas.findByIdAndDelete(req.params.id);
  
    return res.send();
  }
}