// src/middleware/authMiddleware.ts
export const authMiddleware = (req: any, res: any, next: any) => {
  try {
    console.log(req.headers, req.headers.authorization);
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res
        .status(401)
        .json({ message: 'Access denied. No token provided.' });
    }

    const secretKey = '';
    if (token === secretKey) {
      next();
    } else {
      throw new Error('Invalid secret key');
    }
  } catch (error: any) {
    res.status(400).json({ message: error?.message || 'Invalid token' });
  }
};
