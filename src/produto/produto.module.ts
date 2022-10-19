import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProdutoController } from "./controller/produto.controller";
import { Produto } from "./entities/produto.entity";
import { produtoService } from "./services/produto.service";

@Module({
    imports: [TypeOrmModule.forFeature([Produto])],
    providers: [produtoService],
    controllers: [ProdutoController],
    exports: [TypeOrmModule]
})

export class ProdutoModule {}