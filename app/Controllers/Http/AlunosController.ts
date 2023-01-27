import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Aluno from 'App/Models/Aluno'

export default class AlunosController {
  public async index({ view }: HttpContextContract) {
    const aluno = await Aluno.all()
    return view.render('aluno/index', { aluno })
  }

  public async create({ view }: HttpContextContract) {
    return view.render('aluno/cadastro')
  }

  public async store({ request, response }: HttpContextContract) {
    const dados = request.only(['nome', 'matricula', 'curso', 'email', 'senha'])
    await Aluno.create(dados)
    response.redirect().back()
  }

  public async show({ }: HttpContextContract) { }

  public async edit({ params, view, response }) {
    const aluno = await Aluno.find(params.id)
    if (aluno) {
      return view.render('aluno/editar', { aluno })
    }
    return response.redirect().back()
  }

  public async update({ params, response, request }) {
    const aluno = await Aluno.find(params.id)
    if (aluno) {
      aluno.nome = request.input('nome')
      aluno.email = request.input('email')
      if (request.input('senha')) {
        aluno.senha = request.input('senha')
      }
      await aluno.save()
    }
    return response.redirect().toRoute('aluno.index')
  }

  public async delete({ params, response }) {
    const aluno = await Aluno.find(params.id)
    if (aluno) {
      await aluno.delete()
    }
    return response.redirect().back()
  }
}
