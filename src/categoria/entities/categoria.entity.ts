import { IsNotEmpty } from "class-validator";
import { Produto } from "src/produto/entities/produto.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity({name:"tb_categoria"})
export class Categoria {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({length: 300, nullable: false})
    descricao: string;

    @OneToMany(() => Produto, (produto) => produto.categoria)
    produto: Produto [];

}