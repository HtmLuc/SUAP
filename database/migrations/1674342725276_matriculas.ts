import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'matriculas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('aluno_id').unsigned().references('id').inTable('alunos')
      table.integer('disciplina_id').unsigned().references('id').inTable('disciplinas')
      table.primary(['aluno_id', 'disciplina_id'])
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
