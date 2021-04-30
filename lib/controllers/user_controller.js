import User from '../models/user';

export const index = async (req, res) => {
    const data = await User.find();

    res.send(data);
};
