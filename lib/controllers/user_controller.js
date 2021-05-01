import { Types } from 'mongoose';
import User from '../models/user';

export const index = async (req, res) => {
    const data = await User.find();

    res.status(200).json({ data });
};


export const findById = async (req, res) => {
    const { id } = req.params;
    const { ObjectId } = Types;

    if (!ObjectId.isValid(id)) {
        return res
            .status(400)
            .json({ error: 'Please provide a valid id.' })
    }

    const data = await User.findById(id);

    if (!data) {
        return res
            .status(404)
            .send({ error: `There's no user with the ID: ${id}` });
    }

    res.status(200).json({ data });
}
