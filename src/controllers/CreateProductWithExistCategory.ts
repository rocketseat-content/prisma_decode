import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateProductWithExistCategory {
  async handle(request: Request, response: Response) {
    const { name, price, bar_code, id_category } = request.body;

    const product = await prismaClient.productCategory.create({
      data: {
        product: {
          create: {
            bar_code,
            name,
            price,
          },
        },
        category: {
          connect: {
            id: id_category,
          },
        },
      },
    });

    return response.json(product);
  }
}
