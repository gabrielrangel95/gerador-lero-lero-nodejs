'use strict'

const LeroLero = use('App/Models/LeroLero')

class LeroLeroController {

  async index({ request, response, view }) {
    const allLeroLero = await LeroLero.all();
    return allLeroLero;
  }

  async store({ request }) {
    const data = request.only(['author', 'text'])
    const leroLero = new LeroLero();
    leroLero.author = data.author;
    leroLero.text = data.text;

    const saved = await leroLero.save()
    return saved;
  }


  async show({ params }) {
    const leroLero = await LeroLero.findOrFail(params.id)
    return leroLero
  }


  async update({ params, request }) {
    const leroLero = await LeroLero.findOrFail(params.id)
    const data = request.only(['author', 'text'])
    leroLero.merge(data);
    const updated = leroLero.save();
    return updated;
  }


  async destroy({ params }) {
    const leroLero = await LeroLero.findOrFail(params.id)
    await leroLero.delete()
  }
}

module.exports = LeroLeroController
