import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Carlos Mendes',
      company: 'E-commerce Fashion',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      text: 'Em 3 meses, nossa taxa de conversão aumentou 450%. O investimento se pagou na primeira semana. Equipe excepcional!',
      rating: 5,
      results: '+200% conversão'
    },
    {
      name: 'Marino Silva',
      company: 'Consultoria Digital',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      text: 'Landing pages que realmente vendem. Dashboard em tempo real me permite otimizar campanhas constantemente.',
      rating: 5,
      results: 'R$ 2Mil+ em vendas'
    },
    {
      name: 'Roberto Oliveira',
      company: 'Imobiliária Premium',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      text: 'O suporte é incrível. Qualquer ajuste é feito rapidamente. conversão aumentou nos primeiros 6 meses.',
      rating: 5,
      results: '+30% conversão'
    }
  ];

  return (
    <section id="casos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            O que nossos <span className="text-blue-600">Clientes</span> dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resultados reais de empresas que transformaram seu negócio conosco
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="absolute -top-2 -right-2 bg-blue-600 rounded-full p-1">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-4 group-hover:from-green-200 group-hover:to-blue-200 transition-colors">
                <div className="text-2xl font-bold text-green-600 mb-1">
                  {testimonial.results}
                </div>
                <div className="text-sm text-gray-600">Resultado obtido</div>
              </div>
            </div>
          ))}
        </div>

        {/* Estatísticas */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center animate-fade-in-up animation-delay-1000">
            <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
            <div className="text-gray-600">Projetos Entregues</div>
          </div>
          <div className="text-center animate-fade-in-up animation-delay-1200">
            <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfação</div>
          </div>
          <div className="text-center animate-fade-in-up animation-delay-1400">
            <div className="text-4xl font-bold text-purple-600 mb-2">24h</div>
            <div className="text-gray-600">Suporte</div>
          </div>
          <div className="text-center animate-fade-in-up animation-delay-1600">
            <div className="text-4xl font-bold text-orange-600 mb-2">2 anos</div>
            <div className="text-gray-600">Experiência</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;