const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
  try {
    // Get token from header
    const authHeader = req.header('Authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        message: 'No token provided, authorization denied'
      });
    }

    // Extract token
    const token = authHeader.substring(7); // Remove 'Bearer ' prefix

    if (!token) {
      return res.status(401).json({
        message: 'No token provided, authorization denied'
      });
    }

    try {
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      // Check if user still exists
      const user = await User.findById(decoded.userId);
      if (!user) {
        return res.status(401).json({
          message: 'Token is valid but user no longer exists'
        });
      }

      // Check if user is active
      if (!user.isActive) {
        return res.status(401).json({
          message: 'User account is deactivated'
        });
      }

      // Add user info to request
      req.user = decoded;
      next();

    } catch (tokenError) {
      if (tokenError.name === 'TokenExpiredError') {
        return res.status(401).json({
          message: 'Token has expired'
        });
      } else if (tokenError.name === 'JsonWebTokenError') {
        return res.status(401).json({
          message: 'Invalid token'
        });
      } else {
        throw tokenError;
      }
    }

  } catch (error) {
    console.error('Auth middleware error:', error);
    res.status(500).json({
      message: 'Server error in authentication'
    });
  }
};

module.exports = auth;