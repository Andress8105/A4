import React from 'react';
import { useEffect, useState } from 'react';
import { User, BookOpen, Clock, Trophy, Target, BarChart3 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { apiService } from '../services/api';

const Dashboard: React.FC = () => {
  const { user, updateProgress } = useAuth();
  const [userStats, setUserStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserStats = async () => {
      try {
        const response = await apiService.getUserStats();
        setUserStats(response.stats);
      } catch (error) {
        console.error('Error fetching user stats:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchUserStats();
    }
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen py-12 bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando tu progreso...</p>
        </div>
      </div>
    );
  }

  const stats = userStats ? [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Lecciones HTML",
      value: `${userStats.htmlProgress.completed}/${userStats.htmlProgress.total}`,
      percentage: userStats.htmlProgress.percentage,
      color: "bg-orange-500"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Lecciones CSS",
      value: `${userStats.cssProgress.completed}/${userStats.cssProgress.total}`,
      percentage: userStats.cssProgress.percentage,
      color: "bg-blue-500"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Certificados",
      value: userStats.certificatesEarned.toString(),
      percentage: userStats.certificatesEarned > 0 ? 100 : 0,
      color: "bg-yellow-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Proyectos",
      value: userStats.projectsCompleted.toString(),
      percentage: Math.min((userStats.projectsCompleted / 5) * 100, 100),
      color: "bg-purple-500"
    }
  ] : [];

  const recentActivity = [
    {
      title: "Completaste: CSS Grid Layout",
      time: "Hace 2 horas",
      type: "lesson"
    },
    {
      title: "Nuevo certificado obtenido: HTML Básico",
      time: "Hace 1 día",
      type: "achievement"
    },
    {
      title: "Proyecto enviado: Landing Page",
      time: "Hace 2 días",
      type: "project"
    },
    {
      title: "Video visto: Flexbox Tutorial",
      time: "Hace 3 días",
      type: "video"
    }
  ];

  const recommendations = [
    {
      title: "CSS Animations Avanzadas",
      description: "Aprende a crear animaciones complejas",
      difficulty: "Intermedio",
      duration: "2.5 horas"
    },
    {
      title: "Responsive Web Design",
      description: "Domina el diseño adaptativo",
      difficulty: "Intermedio",
      duration: "3 horas"
    },
    {
      title: "JavaScript para Principiantes",
      description: "Da el siguiente paso en tu aprendizaje",
      difficulty: "Principiante",
      duration: "4 horas"
    }
  ];

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <User className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">¡Hola, {user.name}!</h1>
              <p className="text-gray-600 text-lg">Continúa tu viaje de aprendizaje</p>
              <div className="flex items-center mt-2 space-x-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {userStats?.totalLessons > 20 ? 'Nivel Avanzado' : userStats?.totalLessons > 10 ? 'Nivel Intermedio' : 'Nivel Principiante'}
                </span>
                <span className="text-gray-500 text-sm">
                  Miembro desde {userStats?.memberSince ? new Date(userStats.memberSince).toLocaleDateString() : 'Hoy'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.color} bg-opacity-10`}>
                  <div className={`text-${stat.color.replace('bg-', '')}`}>{stat.icon}</div>
                </div>
                <BarChart3 className="w-5 h-5 text-gray-400" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">{stat.title}</h3>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${stat.color} transition-all duration-500`}
                    style={{ width: `${stat.percentage}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600">{stat.percentage}% completado</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Actividad Reciente</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-gray-900">{activity.title}</p>
                    <p className="text-sm text-gray-600">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 text-blue-600 hover:bg-blue-50 py-2 rounded-lg transition-colors">
              Ver toda la actividad
            </button>
          </div>

          {/* Recommendations */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Recomendado para ti</h2>
            <div className="space-y-4">
              {recommendations.map((course, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{course.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="bg-gray-100 px-2 py-1 rounded">{course.difficulty}</span>
                      <span>{course.duration}</span>
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition-colors text-sm">
                      Comenzar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Learning Progress */}
        <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Tu Progreso de Aprendizaje</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <svg className="w-24 h-24 transform -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-gray-200"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${48 * 2 * Math.PI}`}
                    strokeDashoffset={`${48 * 2 * Math.PI * (1 - (userStats?.htmlProgress.percentage || 0) / 100)}`}
                    className="text-orange-500"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-900">{userStats?.htmlProgress.percentage || 0}%</span>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900">HTML Básico</h3>
              <p className="text-gray-600 text-sm">{userStats?.htmlProgress.completed || 0} de {userStats?.htmlProgress.total || 25} lecciones</p>
            </div>

            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <svg className="w-24 h-24 transform -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-gray-200"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${48 * 2 * Math.PI}`}
                    strokeDashoffset={`${48 * 2 * Math.PI * (1 - (userStats?.cssProgress.percentage || 0) / 100)}`}
                    className="text-blue-500"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-900">{userStats?.cssProgress.percentage || 0}%</span>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900">CSS Avanzado</h3>
              <p className="text-gray-600 text-sm">{userStats?.cssProgress.completed || 0} de {userStats?.cssProgress.total || 20} lecciones</p>
            </div>

            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <svg className="w-24 h-24 transform -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-gray-200"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${48 * 2 * Math.PI}`}
                    strokeDashoffset={`${48 * 2 * Math.PI * (1 - 0.05)}`}
                    className="text-green-500"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-900">5%</span>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900">JavaScript</h3>
              <p className="text-gray-600 text-sm">Próximamente</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;