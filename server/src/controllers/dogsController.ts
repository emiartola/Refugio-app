import { Request, Response } from "express";
import pool from "../database";

class DogsController {

    
    public async list(req: Request, res: Response): Promise<void> {
        const dogs = await pool.query('SELECT * FROM dogs');
        res.json(dogs);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const dogs = await pool.query('SELECT * FROM dogs WHERE id = ?', [id]);
        console.log(dogs.length);
        if (dogs.length > 0) {
            return res.json(dogs[0]);
        }
        res.status(404).json({ text: "The dog doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO dogs set ?', [req.body]);
        res.json({ message: 'Dog Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldDog = req.body;
        await pool.query('UPDATE dogs set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "The dog was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM dogs WHERE id = ?', [id]);
        res.json({ message: "The dog was deleted" });
    }
}


const dogsController = new DogsController();
export default dogsController;