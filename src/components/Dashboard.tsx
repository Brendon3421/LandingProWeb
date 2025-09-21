import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, MousePointer, DollarSign, Eye, Target, ArrowUp, ArrowDown } from 'lucide-react';

const Dashboard = () => {
  const [animatedValues, setAnimatedValues] = useState({
    visitors: 0,
    conversions: 0,
    revenue: 0,
    ctr: 0
  });

  const finalValues = {
    visitors: 15847,
    conversions: 1284,
    revenue: 127500,
    ctr: 8.1
  };

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setAnimatedValues({
        visitors: Math.floor(finalValues.visitors * progress),
        conversions: Math.floor(finalValues.conversions * progress),
        revenue: Math.floor(finalValues.revenue * progress),
        ctr: Math.floor(finalValues.ctr * progress * 10) / 10
      });

      if (step >= steps) {
        clearInterval(timer);
        setAnimatedValues(finalValues);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const metrics = [
    {
      title: 'Visitantes',
      value: animatedValues.visitors.toLocaleString(),
      change: '+12.5%',
      trend: 'up',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Taxa de Conversão',
      value: `${animatedValues.ctr}%`,
      change: '+3.2%',
      trend: 'up',
      icon: Target,
      color: 'green'
    },
    {
      title: 'Conversões',
      value: animatedValues.conversions.toLocaleString(),
      change: '+8.7%',
      trend: 'up',
      icon: MousePointer,
      color: 'purple'
    },
    {
      title: 'Revenue',
      value: `R$ ${animatedValues.revenue.toLocaleString()}`,
      change: '+24.1%',
      trend: 'up',
      icon: DollarSign,
      color: 'orange'
    }
  ];

  const chartData = [
    { day: 'Seg', visitors: 2100, conversions: 168 },
    { day: 'Ter', visitors: 2800, conversions: 224 },
    { day: 'Qua', visitors: 2400, conversions: 192 },
    { day: 'Qui', visitors: 3200, conversions: 256 },
    { day: 'Sex', visitors: 2900, conversions: 232 },
    { day: 'Sab', visitors: 1800, conversions: 144 },
    { day: 'Dom', visitors: 1600, conversions: 128 }
  ];

  return (
    <section id="dashboard" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Dashboard de <span className="text-blue-600">Performance</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Acompanhe seus resultados em tempo real com métricas detalhadas e insights precisos
          </p>
        </div>

        {/* Métricas Principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            const colorClasses = {
              blue: 'from-blue-600 to-blue-700',
              green: 'from-green-600 to-green-700',
              purple: 'from-purple-600 to-purple-700',
              orange: 'from-orange-600 to-orange-700'
            };

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${colorClasses[metric.color as keyof typeof colorClasses]}`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className={`flex items-center text-sm font-semibold ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                    {metric.trend === 'up' ? (
                      <ArrowUp className="w-4 h-4 mr-1" />
                    ) : (
                      <ArrowDown className="w-4 h-4 mr-1" />
                    )}
                    {metric.change}
                  </div>
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-500">{metric.title}</div>
              </div>
            );
          })}
        </div>

        {/* Gráfico de Performance */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 animate-fade-in-up animation-delay-1000">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Performance Semanal</h3>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Visitantes</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-600 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Conversões</span>
              </div>
            </div>
          </div>

          <div className="flex items-end justify-between h-64 space-x-4">
            {chartData.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="w-full relative mb-4">
                  <div
                    className="bg-blue-200 rounded-t-lg transition-all duration-1000 ease-out"
                    style={{
                      height: `${(data.visitors / 3200) * 200}px`,
                      animationDelay: `${index * 200}ms`
                    }}
                  ></div>
                  <div
                    className="bg-purple-600 rounded-t-lg absolute bottom-0 w-full transition-all duration-1000 ease-out"
                    style={{
                      height: `${(data.conversions / 256) * 200}px`,
                      animationDelay: `${index * 200 + 100}ms`
                    }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 font-medium">{data.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white animate-fade-in-up animation-delay-1500">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Pronto para ter resultados como esses?

            </h3>
            <p className="text-lg mb-6 opacity-90">
              Nossos clientes veem em média 300% de aumento na conversão nos primeiros 30 dias
            </p>
            <a href="https://wa.me/5549999200588?text=Ol%C3%A1,%20tenho%20interesse%20no%20plano%20no%20de%20Landing%20Pages!">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                Começar Meu Projeto
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;