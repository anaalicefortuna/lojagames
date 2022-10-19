import { IsNotEmpty } from "class-validator";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";

@Entity({name: 'tb_produto'})
export class Produto {

    @PrimaryColumn()
    id: number;

    @IsNotEmpty()
    @Column({length: 50, nullable: false})
    nome: string;

    @IsNotEmpty()
    @Column({nullable: false, zerofill: true})
    valor: number;

    @IsNotEmpty()
    @Column({length: 50, nullable: false})
    marca: string;

    @IsNotEmpty()
    @Column({length: 280, nullable: false})
    qtd_estoque: string;

    @IsNotEmpty()
    @Column({length: 300, nullable: false})
    descricao: string;

    @IsNotEmpty()
    @Column({length: 50, nullable:false})
    fabricante: string;


    @ManyToOne(() => Categoria, (categoria) => categoria.produto,{
        onDelete: "CASCADE"
 })
    categoria: Categoria;

}