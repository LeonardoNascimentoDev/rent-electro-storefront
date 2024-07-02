import { Product } from "src/domain/models/product.model";

describe("Product", () => {
  it("should create an instance of Product", () => {
    const product = new Product(
      1,
      "Product Name",
      "Category",
      "Technical Details",
      "100.00",
      "photo.jpg",
    );

    expect(product).toBeInstanceOf(Product);
    expect(product.id).toEqual(1);
    expect(product.name).toEqual("Product Name");
    expect(product.category).toEqual("Category");
    expect(product.technicalDetails).toEqual("Technical Details");
    expect(product.annualValue).toEqual("100.00");
    expect(product.photos).toEqual("photo.jpg");
  });

  it("should handle different instances correctly", () => {
    const product1 = new Product(
      1,
      "Product 1",
      "Category 1",
      "",
      "200.00",
      "photo1.jpg",
    );
    const product2 = new Product(
      2,
      "Product 2",
      "Category 2",
      "Details",
      "300.00",
      "photo2.jpg",
    );

    expect(product1.id).toEqual(1);
    expect(product2.id).toEqual(2);
    expect(product1.name).toEqual("Product 1");
    expect(product2.name).toEqual("Product 2");
    expect(product1.category).toEqual("Category 1");
    expect(product2.category).toEqual("Category 2");
    expect(product1.technicalDetails).toEqual("");
    expect(product2.technicalDetails).toEqual("Details");
    expect(product1.annualValue).toEqual("200.00");
    expect(product2.annualValue).toEqual("300.00");
    expect(product1.photos).toEqual("photo1.jpg");
    expect(product2.photos).toEqual("photo2.jpg");
  });
});