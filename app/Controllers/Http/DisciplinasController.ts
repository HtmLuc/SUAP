import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Disciplina from 'App/Models/Disciplina'

export default class DisciplinasController {
  public async index({view}: HttpContextContract) {
    const disciplina = await Disciplina.all()
    return view.render('disciplina/index', {disciplina})
  }

  public async create({view}: HttpContextContract) {
    return view.render('disciplina/cadastro')

  }

  public async store({request, response}: HttpContextContract) {
    const dados = request.only(['nome', 'carga_horaria', 'descricao', 'professor_id'])
    await Disciplina.create(dados)
    response.redirect().back()
  }

  public async show({}: HttpContextContract) {}

  public async edit({ params, view, response }) {
    const disciplina = await Disciplina.find(params.id)
    if (disciplina) {
      return view.render('disciplinas/editar', { disciplina })
    }
    return response.redirect().back()
  }

  public async update({ params, response, request }) {
    const disciplina = await Disciplina.find(params.id)
    if (disciplina) {
      disciplina.nome = request.input('nome')
      disciplina.descricao = request.input('descricao')
      await disciplina.save()
    }
    return response.redirect().toRoute('aluno.index')
  }

  public async delete({params, response}) {
    const disciplina = await Disciplina.find(params.id)
    if (disciplina) {
      await disciplina.delete()
    }
    return response.redirect().back()
  }
}
