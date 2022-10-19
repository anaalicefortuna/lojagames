import { Controller } from "@nestjs/common";
import { Body, Delete, Get, HttpCode, Param, Post, Put } from "@nestjs/common/decorators";
import { HttpStatus } from "@nestjs/common/enums";
import { ParseIntPipe } from "@nestjs/common/pipes";
import { categoriaService } from "src/categoria/services/categoria.service";
import { Categoria } from "../entities/categoria.entity";

@Controller('/categoria')
export class CategoriaController {
    constructor(private readonly categoriaService: categoriaService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Categoria[]> {
        return this.categoriaService.findAlll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Categoria> {
        return this.categoriaService.findById(id);
    }

    @Get('/descricao/:descricao')
    @HttpCode(HttpStatus.OK)
    findByDescricao(@Param('descricao') descricao: string): Promise<Categoria[]> {
        return this.categoriaService.findByDescricao(descricao);
    }

    @Post()
    @HttpCode(HttpStatus.OK)
    create(@Body() Categoria: Categoria): Promise<Categoria> {
        return this.categoriaService.create(Categoria);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() Categoria: Categoria): Promise<Categoria> {
        return this.categoriaService.update(Categoria);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.categoriaService.delete(id);
    }
}