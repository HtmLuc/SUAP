import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Professore from 'App/Models/Professore'

export default class ProfessoresController {
  public async index({view}: HttpContextContract) {
    const professor = await Professore.all()
    return view.render('professor/index', {professor})
  }

  public async create({view}: HttpContextContract) {
    return view.render('professor/cadastro')
  }

  public async store({request, response}: HttpContextContract) {
    const dados = request.only(['nome', 'matricula', 'email', 'senha'])
    await Professore.create(dados)
    response.redirect().back()
  }

  public async show({}: HttpContextContract) {}

  public async edit({ params, view, response }) {
    const professor = await Professore.find(params.id)
    if (professor) {
      return view.render('professor/editar', { professor })
    }
    return response.redirect().back()
  }

  public async update({ params, response, request }) {
    const professor = await Professore.find(params.id)
    if (professor) {
      professor.nome = request.input('nome')
      professor.email = request.input('email')
      if (request.input('senha')) {
        professor.senha = request.input('senha')
      }
      await professor.save()
    }
    return response.redirect().toRoute('professor.index')
  }

  public async delete({params, response}) {
    const professor = await Professore.find(params.id)
    if (professor) {
      await professor.delete()
    }
    return response.redirect().back()
  }
}
