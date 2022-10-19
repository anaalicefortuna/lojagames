import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Produto } from "../entities/produto.entity";
import { produtoService } from "../services/produto.service";

@Controller('/produto')
export class  ProdutoController {
    constructor (private readonly produtoService: produtoService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Produto[]> {
        return this.produtoService.findAll ();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(
        @Param('id', ParseIntPipe)
        id: number

    ): Promise<Produto> {
        return this.produtoService.findById(id);
    }

    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK)
    findByNome(
        @Param('nome')
        nome: string
    ): Promise<Produto[]> {
        return this.produtoService.findByNome(nome);
    }

    @Get('/valor/:valor')
    @HttpCode(HttpStatus.OK)
    findByValor (
        @Param ('valor',ParseIntPipe)
        valor: number
    ): Promise<Produto[]>{
        return this.produtoService.findByValor(valor)
    }

    @Get('/marca/:marca')
    @HttpCode(HttpStatus.OK)
    findByMarca (
        @Param('marca')
        marca: string
    ): Promise<Produto[]>{
        return this.produtoService.findByMarca(marca)
    }

    @Get('/qtd_estoque/:qtd_estoque')
    @HttpCode(HttpStatus.OK)
    findByEstoque (
        @Param('qtd_estoque', ParseIntPipe)
        qtd_estoque: number
    ): Promise<Produto[]>{
        return this.produtoService.findByEstoque(qtd_estoque)
    }

    @Get('/descricao/:descricao')
    @HttpCode(HttpStatus.OK)
    findByDescricao(
        @Param('/descricao/:descricao')
        descricao: string
    ): Promise<Produto[]> {
        return this.produtoService.findByDescricao(descricao)
    }

    @Get('/fabricante/:fabricante')
    @HttpCode(HttpStatus.OK)
    findByFabricante(
        @Param('/fabricante/:fabricante')
        fabricante: string
    ): Promise<Produto[]> {
        return this.produtoService.findByFabricante(fabricante)
    }


    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@
        Body()
        produto: Produto
    ): Promise<Produto> {
        return this.produtoService.create(produto)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update (
    @Body ()
    produto: Produto

    ): Promise<Produto> {
        return this.produtoService.update(produto);

    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete (
        @Param('id', ParseIntPipe)
        id: number
    ) {
        return this.produtoService.delete(id);
    }
    
}
