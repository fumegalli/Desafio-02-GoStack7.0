import jwt from 'jsonwebtoken';

import User from '../models/User';
import authConfig from '../../config/auth';

class SessionController {
  async create(req, res) {
    const { email } = req.body;

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(404).json({
        error: 'User not found',
      });
    }

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign(
        {
          id,
        },
        authConfig.secret,
        {
          expiresIn: authConfig.expiresIn,
        }
      ),
    });
  }
}

export default new SessionController();
