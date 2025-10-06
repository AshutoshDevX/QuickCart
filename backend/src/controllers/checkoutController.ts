import {Request, Response} from 'express';

export const checkout = (req: Request, res: Response) => {
    res.json({ message: "Checkout successful!" });
};