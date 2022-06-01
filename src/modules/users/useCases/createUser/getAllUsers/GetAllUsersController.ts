import { Request, Response } from "express";
import { GetAllUsersUseCase } from './GetAllUsersUseCase';

export class GetAllUsersController {
    async handle(req: Request, res: Response) {
        const getAllUsersUseCase = new GetAllUsersUseCase();

        const users = await getAllUsersUseCase.execute();

        res.status(201).json(users);
    }
}