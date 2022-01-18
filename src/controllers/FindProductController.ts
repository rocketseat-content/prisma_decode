import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class FindProductController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const product = await prismaClient.product.findFirst({
      where: {
        id,
      },
      include: {
        ProductCategory: {
          include: {
            category: true,
          },
        },
      },
    });

    return response.json(product);
  }
}
