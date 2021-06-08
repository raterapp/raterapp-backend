import { Rating } from 'src/ratings/entities/rating.entity'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  email: string

  @OneToMany(() => Rating, (rating) => rating.user)
  ratings: Rating[]
}
