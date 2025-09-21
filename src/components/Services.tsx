import React from 'react';
import { Monitor, Smartphone, BarChart3, Zap, Target, Rocket } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Landing Pages Otimizadas',
      description: 'Páginas de alta conversão desenvolvidas especificamente para tráfego pago no Google Ads e Facebook.',
      features: ['Design responsivo', 'Velocidade otimizada', 'SEO integrado']
    },
    {
      icon: Smartphone,
      title: 'Mobile First Design',
      description: 'Experiência perfeita em dispositivos móveis, onde acontecem 70% das conversões.',
      features: ['UX otimizada', 'Carregamento rápido', 'Touch friendly']
    },
    {
      icon: BarChart3,
      title: 'Analytics Avançado',
      description: 'Trackings completos para medir cada clique, visualização e conversão em tempo real.',
      features: ['Pixel tracking', 'Heatmaps', 'A/B Testing']
    },
    {
      icon: Target,
      title: 'CRO - Otimização de Conversão',
      description: 'Análise contínua e melhorias baseadas em dados para maximizar suas vendas.',
      features: ['Testes A/B', 'Análise comportamental', 'Melhorias contínuas']
    },
    {
      icon: Zap,
      title: 'Integração com Ferramentas',
      description: 'Conectamos com CRMs, automação de marketing e plataformas de pagamento.',
      features: ['API integrations', 'Webhooks', 'Automação']
    },
    {
      icon: Rocket,
      title: 'Suporte Completo',
      description: 'Equipe técnica disponível para ajustes, melhorias e novos projetos.',
      features: ['Suporte 24/7', 'Manutenção', 'Consultoria']
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nossos <span className="text-blue-600">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas para transformar seu tráfego pago em resultados reais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="mt-6 text-blue-600 font-semibold hover:text-purple-600 transition-colors flex items-center group-hover:translate-x-2 transition-transform duration-300">
                  Saiba mais
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;