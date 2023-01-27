import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Professore from './Professore'
import Aluno from './Aluno'

export default class Disciplina extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public descricao: string

  @column()
  public cargaHoraria: number

  @column()
  public professorId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Professore)
  public professores: BelongsTo<typeof Professore>

  @manyToMany(() => Aluno, {
    pivotTable: 'matriculas'
  })
  public alunoMatricula: ManyToMany<typeof Aluno>
}
