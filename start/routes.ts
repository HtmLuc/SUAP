/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('professor/index')
})
/*ROTAS DE ALUNOS*/

Route.get('/aluno/cadastro', 'AlunosController.create').as('aluno.create')
Route.post('/aluno/cadastro', 'AlunosController.store').as('aluno.store')
Route.get('/aluno', 'AlunosController.index').as('aluno.index')
Route.get('aluno/:id/delete', 'AlunosController.delete').as('aluno.delete')
Route.get('aluno/:id/edit', 'AlunosController.edit').as('aluno.edit')
Route.post('aluno/:id/update', 'AlunosController.update').as('aluno.update')

/*ROTAS DE PROFESSORES*/

Route.get('/professor/cadastro', 'ProfessoresController.create').as('professor.create')
Route.post('/professor/cadastro', 'ProfessoresController.store').as('professor.store')
Route.get('/professor', 'ProfessoresController.index').as('professor.index')
Route.get('professor/:id/delete', 'ProfessoresController.delete').as('professor.delete')
Route.get('professor/:id/edit', 'ProfessoresController.edit').as('professor.edit')
Route.post('professor/:id/update', 'ProfessoresController.update').as('professor.update')

/*ROTAS DE DISCIPLINAS*/

Route.get('/disciplina/cadastro', 'DisciplinasController.create').as('disciplina.create')
Route.post('/disciplina/cadastro', 'DisciplinasController.store').as('disciplina.store')
Route.get('/disciplina', 'DisciplinasController.index').as('disciplina.index')
Route.get('disciplina/:id/delete', 'DisciplinasController.delete').as('disciplina.delete')
Route.get('disciplina/:id/edit', 'DisciplinasController.edit').as('disciplina.edit')
Route.post('disciplina/:id/update', 'DisciplinasController.update').as('disciplina.update')