import { ApiProperty } from "@nestjs/swagger";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("products")
export class ProductEntity {
  @ApiProperty({
    example: "1",
    description: "ID do produto",
    type: String,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: "Notebook Dell",
    description: "Nome do produto",
    type: String,
  })
  @Column()
  name: string;

  @ApiProperty({
    example: "Smartphones",
    description: "Categoria do produto",
    type: String,
  })
  @Column()
  category: string;

  @ApiProperty({
    example: "Smartphones",
    description:
      "Placa de video RTX 3050 com 6GB, Tela 15.6” Full HD - 144 Hertz, Capacidade 512GB SSD, Processador Intel Core i5 13ª geração, Memória RAM 8GB ANV15-51-57WS",
    type: String,
  })
  @Column()
  technicalDetails: string;

  @ApiProperty({
    example: "2998.80",
    description: "Valor da assinatura",
    type: String,
  })
  @Column()
  annualValue: string;

  @ApiProperty({
    example: "Imagens",
    description: "Fotos do produto",
    type: String,
  })
  @Column()
  photos: string;
}
