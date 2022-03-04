import { NotFoundException } from "@nestjs/common";
import { EntityNotFoundError, Repository } from "typeorm";

export async function findOneOrNotFound<T>(
  repository: Repository<T>,
  id: number
): Promise<T> {
  try {
    return await repository.findOneOrFail(id);
  } catch (e) {
    if (e instanceof EntityNotFoundError) {
      throw new NotFoundException();
    }
  }
}
