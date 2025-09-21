import React from 'react';
import { ArrowRight, TrendingUp, Users, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in-up">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Landing Pages
              </span>
              <br />
              que <span className="text-yellow-400">Convertem</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Criamos sistemas web e landing pages otimizadas para tráfego pago 
              que transformam visitantes em clientes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="https://wa.me/5549999200588?text=Ol%C3%A1,%20tenho%20interesse%20nas%20landing%20pages!">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center group">
              
                Começar Agora
          
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
                    </a>
              {/* <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                Ver Demos
              </button> */}
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center animate-fade-in-up animation-delay-1000">
                <div className="bg-white bg-opacity-10 rounded-lg p-4 mb-2 backdrop-blur-sm">
                  <TrendingUp className="w-8 h-8 text-green-400 mx-auto" />
                </div>
                <div className="text-2xl font-bold text-green-400">+300%</div>
                <div className="text-sm text-gray-300">Conversão Média</div>
              </div>
              <div className="text-center animate-fade-in-up animation-delay-1500">
                <div className="bg-white bg-opacity-10 rounded-lg p-4 mb-2 backdrop-blur-sm">
                  <Users className="w-8 h-8 text-blue-400 mx-auto" />
                </div>
                <div className="text-2xl font-bold text-blue-400">+500</div>
                <div className="text-sm text-gray-300">Clientes Ativos</div>
              </div>
              <div className="text-center animate-fade-in-up animation-delay-2000">
                <div className="bg-white bg-opacity-10 rounded-lg p-4 mb-2 backdrop-blur-sm">
                  <Zap className="w-8 h-8 text-yellow-400 mx-auto" />
                </div>
                <div className="text-2xl font-bold text-yellow-400">7 dias</div>
                <div className="text-sm text-gray-300">Entrega Média</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-right animation-delay-1000">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-1 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="flex-1 bg-gray-200 rounded-full h-6 flex items-center px-3">
                    <span className="text-xs text-gray-600">sua-landing-page.com</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-8 bg-gradient-to-r from-blue-200 to-purple-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                  <div className="h-10 bg-gradient-to-r from-green-200 to-blue-200 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce flex items-center justify-center">
              <span className="text-white font-bold text-sm">NEW!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;