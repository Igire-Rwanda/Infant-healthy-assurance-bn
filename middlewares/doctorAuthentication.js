import jwt from 'jsonwebtoken';
import CreateDoctorModel from '../models/doctormodel.js';

const authenticateDoctor = async (req, res, next) => {
  try {
    
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ error: 'Authentication failed. Token missing.' });
    }

  
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const userId = decoded.id;

    const check = await CreateDoctorModel.findById({ _id: userId });

    if (!check) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

export default authenticateDoctor;
