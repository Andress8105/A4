const express = require('express');
const User = require('../models/User');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/users/profile
// @desc    Get user profile with progress
// @access  Private
router.get('/profile', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      });
    }

    res.json({
      user: user.toJSON()
    });
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({
      message: 'Server error'
    });
  }
});

// @route   PUT /api/users/profile
// @desc    Update user profile
// @access  Private
router.put('/profile', auth, async (req, res) => {
  try {
    const { name } = req.body;

    if (!name || name.trim().length < 2) {
      return res.status(400).json({
        message: 'Name must be at least 2 characters long'
      });
    }

    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      });
    }

    user.name = name.trim();
    await user.save();

    res.json({
      message: 'Profile updated successfully',
      user: user.toJSON()
    });

  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({
      message: 'Server error'
    });
  }
});

// @route   PUT /api/users/progress
// @desc    Update user learning progress
// @access  Private
router.put('/progress', auth, async (req, res) => {
  try {
    const { htmlLessons, cssLessons, completedProject, certificate } = req.body;

    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      });
    }

    // Update lesson progress
    if (typeof htmlLessons === 'number' && htmlLessons >= 0) {
      user.progress.htmlLessons = Math.max(user.progress.htmlLessons, htmlLessons);
    }

    if (typeof cssLessons === 'number' && cssLessons >= 0) {
      user.progress.cssLessons = Math.max(user.progress.cssLessons, cssLessons);
    }

    // Add completed project
    if (completedProject && completedProject.name) {
      const existingProject = user.progress.completedProjects.find(
        p => p.name === completedProject.name
      );
      
      if (!existingProject) {
        user.progress.completedProjects.push({
          name: completedProject.name,
          completedAt: new Date()
        });
      }
    }

    // Add certificate
    if (certificate && certificate.name) {
      const existingCertificate = user.progress.certificates.find(
        c => c.name === certificate.name
      );
      
      if (!existingCertificate) {
        user.progress.certificates.push({
          name: certificate.name,
          issuedAt: new Date()
        });
      }
    }

    await user.save();

    res.json({
      message: 'Progress updated successfully',
      progress: user.progress
    });

  } catch (error) {
    console.error('Update progress error:', error);
    res.status(500).json({
      message: 'Server error'
    });
  }
});

// @route   GET /api/users/stats
// @desc    Get user statistics
// @access  Private
router.get('/stats', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      });
    }

    const stats = {
      totalLessons: user.progress.htmlLessons + user.progress.cssLessons,
      htmlProgress: {
        completed: user.progress.htmlLessons,
        total: 25,
        percentage: Math.round((user.progress.htmlLessons / 25) * 100)
      },
      cssProgress: {
        completed: user.progress.cssLessons,
        total: 20,
        percentage: Math.round((user.progress.cssLessons / 20) * 100)
      },
      projectsCompleted: user.progress.completedProjects.length,
      certificatesEarned: user.progress.certificates.length,
      memberSince: user.createdAt,
      lastLogin: user.lastLogin
    };

    res.json({ stats });

  } catch (error) {
    console.error('Get stats error:', error);
    res.status(500).json({
      message: 'Server error'
    });
  }
});

module.exports = router;