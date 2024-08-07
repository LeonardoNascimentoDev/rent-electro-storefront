import { Test, TestingModule } from "@nestjs/testing";
import { ProductController } from "src/adapters/controllers/product.controller";
import { ProductService } from "src/application/services/product.service";
import { Product } from "src/domain/models/product.model";
import { WinstonLoggerService } from "src/logging/winston-logger.service";
import { NotFoundException } from "@nestjs/common";

const mockWinstonLoggerService = {
  log: jest.fn(),
  error: jest.fn(),
  warn: jest.fn(),
  debug: jest.fn(),
  verbose: jest.fn(),
};

describe("ProductController", () => {
  let productController: ProductController;
  let productService: ProductService;

  const mockProduct: Product = {
    id: 1,
    name: "Test Product",
    category: "Test Category",
    technical_details: "Some technical details",
    annual_value: 1000,
    photos: '"photo1.jpg", "photo2.jpg"',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [
        {
          provide: ProductService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([mockProduct]),
            findById: jest.fn().mockResolvedValue(mockProduct),
            findByPartialCategoryAndName: jest
              .fn()
              .mockResolvedValue([mockProduct]),
          },
        },
        {
          provide: WinstonLoggerService,
          useValue: mockWinstonLoggerService,
        },
      ],
    }).compile();

    productController = module.get<ProductController>(ProductController);
    productService = module.get<ProductService>(ProductService);
  });

  it("should be defined", () => {
    expect(productController).toBeDefined();
  });

  describe("getAllProducts", () => {
    it("should return an array of products", async () => {
      expect(await productController.getAllProducts()).toEqual([mockProduct]);
    });
  });

  describe("getProductById", () => {
    it("should return a product by id", async () => {
      expect(await productController.getProductById(1)).toBe(mockProduct);
    });

    it("should throw a NotFoundException if no product is found", async () => {
      jest.spyOn(productService, "findById").mockResolvedValue(null);

      await expect(productController.getProductById(999)).rejects.toThrow(
        new NotFoundException("Product with id 999 not found"),
      );
    });
  });

  describe("getProductsByPartialCategoryAndName", () => {
    it("should return an array of products by partial category or name", async () => {
      expect(
        await productController.getProductsByPartialCategoryAndName(
          "Test",
          "Product",
        ),
      ).toEqual([mockProduct]);
    });

    it("should return an empty array if no products match the partial category or name", async () => {
      jest
        .spyOn(productService, "findByPartialCategoryAndName")
        .mockResolvedValue([]);

      expect(
        await productController.getProductsByPartialCategoryAndName(
          "Nonexistent",
          "Product",
        ),
      ).toEqual([]);
    });
  });
});
