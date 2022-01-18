import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateProductCategoryController {
  async handle(request: Request, response: Response) {
    const { id_product, id_category } = request.body;

    const productCategory = await prismaClient.productCategory.create({
      data: {
        id_category,
        id_product,
      },
    });

    return response.json(productCategory);
  }
}
