import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Disciplina from './Disciplina'

export default class Aluno extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public matricula: number

  @column()
  public email: string

  @column()
  public senha: string

  @column()
  public curso: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Disciplina, {
    pivotTable: 'matriculas'
  })
  public disciplinaMatricula: ManyToMany<typeof Disciplina>
}
