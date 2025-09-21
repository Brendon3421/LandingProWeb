import React from 'react';
import { Check, Zap, Crown, Rocket } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: 'R$ *****',
      period: '/projeto',
      icon: Zap,
      color: 'blue',
      description: 'Ideal para pequenas empresas começando com tráfego pago',
      features: [
        '1 Landing Page otimizada',
        'Design responsivo',
        'Integração com Google Analytics',
        'Formulários de contato',
        'Suporte por 30 dias',
        'Otimização básica para conversão'
      ],
      cta: 'Começar Agora',
      popular: false,
      href: "https://wa.me/5549999200588?text=Ol%C3%A1,%20tenho%20interesse%20no%20plano%20Starter%20de%20Landing%20Pages!"
    },
    {
      name: 'Professional',
      price: 'R$ *****',
      period: '/projeto',
      icon: Crown,
      color: 'purple',
      description: 'Para empresas que querem maximizar resultados',
      features: [
        '3 Landing Pages otimizadas',
        'A/B Testing integrado',
        'Dashboard de analytics avançado',
        'Pixel tracking completo',
        'Integração com CRM',
        'Chat online',
        'Suporte por 90 dias',
        'Otimização contínua CRO'
      ],
      cta: 'Mais Popular',
      popular: true,
      href: "https://wa.me/5549999200588?text=Ol%C3%A1,%20quero%20saber%20mais%20sobre%20o%20plano%20Professional%20de%20Landing%20Pages!"
    },
    {
      name: 'Enterprise',
      price: 'R$ *****',
      period: '/projeto',
      icon: Rocket,
      color: 'orange',
      description: 'Solução completa para grandes empresas',
      features: [
        'Landing Pages ilimitadas',
        'Sistema completo de vendas',
        'Automação de marketing',
        'API personalizada',
        'Relatórios executivos',
        'Gerente de conta dedicado',
        'Suporte prioritário 24/7',
        'Consultoria estratégica'
      ],
      cta: 'Contatar Vendas',
      popular: false,
      href: "https://wa.me/5549999200588?text=Ol%C3%A1,%20gostaria%20de%20conversar%20sobre%20o%20plano%20Enterprise%20de%20Landing%20Pages!"
    }
  ];

  return (
    <section id="precos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Preços que <span className="text-blue-600">Cabem no seu Bolso</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para o seu negócio e comece a ver resultados já na primeira semana
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            const colorClasses = {
              blue: {
                bg: 'from-blue-600 to-blue-700',
                border: 'border-blue-200',
                button: 'bg-blue-600 hover:bg-blue-700',
                text: 'text-blue-600'
              },
              purple: {
                bg: 'from-purple-600 to-purple-700',
                border: 'border-purple-200',
                button: 'bg-purple-600 hover:bg-purple-700',
                text: 'text-purple-600'
              },
              orange: {
                bg: 'from-orange-600 to-orange-700',
                border: 'border-orange-200',
                button: 'bg-orange-600 hover:bg-orange-700',
                text: 'text-orange-600'
              }
            };

            const colors = colorClasses[plan.color as keyof typeof colorClasses];

            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up ${
                  plan.popular ? 'border-2 border-purple-200 scale-105' : 'border border-gray-200'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                      MAIS POPULAR
                    </div>
                  </div>
                )}

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${colors.bg}`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    {plan.popular && (
                      <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">
                        RECOMENDADO
                      </div>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-500 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  {/* Botão com link para WhatsApp */}
                  <a
                    href={plan.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full block text-center py-4 rounded-full font-bold text-white transition-all duration-300 hover:shadow-lg hover:scale-105 mb-8 ${colors.button}`}
                  >
                    {plan.cta}
                  </a>

                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 bg-gradient-to-r ${colors.bg}`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Garantia */}
        <div className="text-center bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 animate-fade-in-up animation-delay-1000">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-green-500 rounded-full p-2 mr-4">
              <Check className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Garantia de 30 dias</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
