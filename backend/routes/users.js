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
        success: false,
        message: 'User not found'
      });
    }

    res.json({
      success: true,
      user: user.toJSON()
    });
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   PUT /api/users/profile
// @desc    Update user profile
// @access  Private
router.put('/profile', auth, async (req, res) => {
  try {
    const { name, preferences } = req.body;

    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // Update name if provided
    if (name) {
      if (name.trim().length < 2) {
        return res.status(400).json({
          success: false,
          message: 'Name must be at least 2 characters long'
        });
      }
      user.name = name.trim();
    }

    // Update preferences if provided
    if (preferences) {
      if (preferences.theme) {
        user.preferences.theme = preferences.theme;
      }
      if (typeof preferences.notifications === 'boolean') {
        user.preferences.notifications = preferences.notifications;
      }
      if (preferences.language) {
        user.preferences.language = preferences.language;
      }
    }

    await user.save();

    res.json({
      success: true,
      message: 'Profile updated successfully',
      user: user.toJSON()
    });

  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({
      success: false,
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
        success: false,
        message: 'User not found'
      });
    }

    // Update lesson progress
    if (typeof htmlLessons === 'number' && htmlLessons >= 0 && htmlLessons <= 25) {
      user.progress.htmlLessons = Math.max(user.progress.htmlLessons, htmlLessons);
    }

    if (typeof cssLessons === 'number' && cssLessons >= 0 && cssLessons <= 20) {
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
          completedAt: new Date(),
          score: completedProject.score || 0
        });
      }
    }

    // Add certificate
    if (certificate && certificate.name) {
      const existingCertificate = user.progress.certificates.find(
        c => c.name === certificate.name
      );
      
      if (!existingCertificate) {
        const certificateId = `CERT-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        user.progress.certificates.push({
          name: certificate.name,
          issuedAt: new Date(),
          certificateId
        });
      }
    }

    await user.save();

    res.json({
      success: true,
      message: 'Progress updated successfully',
      progress: user.progress
    });

  } catch (error) {
    console.error('Update progress error:', error);
    res.status(500).json({
      success: false,
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
        success: false,
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
      lastLogin: user.lastLogin,
      completionPercentage: user.completionPercentage,
      level: user.totalLessons > 30 ? 'Avanzado' : user.totalLessons > 15 ? 'Intermedio' : 'Principiante'
    };

    res.json({ 
      success: true,
      stats 
    });

  } catch (error) {
    console.error('Get stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   GET /api/users/leaderboard
// @desc    Get top users leaderboard
// @access  Private
router.get('/leaderboard', auth, async (req, res) => {
  try {
    const topUsers = await User.find({ isActive: true })
      .select('name progress createdAt')
      .sort({ 
        'progress.htmlLessons': -1, 
        'progress.cssLessons': -1,
        'progress.completedProjects': -1 
      })
      .limit(10);

    const leaderboard = topUsers.map((user, index) => ({
      rank: index + 1,
      name: user.name,
      totalLessons: user.progress.htmlLessons + user.progress.cssLessons,
      projectsCompleted: user.progress.completedProjects.length,
      certificatesEarned: user.progress.certificates.length,
      memberSince: user.createdAt
    }));

    res.json({
      success: true,
      leaderboard
    });

  } catch (error) {
    console.error('Get leaderboard error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

module.exports = router;