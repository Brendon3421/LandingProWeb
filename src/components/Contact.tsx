import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Send, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    budget: ''
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'landingPro', // substitua
        'template_x6zhjh8', // substitua
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          budget: formData.budget,
          message: formData.message,
        },
        'Lwn7th9EKLe5IzQgB' // substitua
      )
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Mensagem enviada!',
          text: 'Entraremos em contato com você em breve 🚀',
          confirmButtonColor: '#2563eb'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          budget: ''
        });
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Erro ao enviar',
          text: 'Ocorreu um problema, tente novamente.',
          confirmButtonColor: '#ef4444'
        });
      })
      .finally(() => setLoading(false));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Vamos <span className="text-blue-600">Conversar</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entre em contato conosco e descubra como podemos transformar seus visitantes em clientes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informações */}
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Fale conosco</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center group">
                <div className="bg-blue-600 p-4 rounded-xl mr-4 group-hover:bg-purple-600 transition-colors">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Telefone</div>
                  <div className="text-gray-600">(49) 99920-0588</div>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="bg-blue-600 p-4 rounded-xl mr-4 group-hover:bg-purple-600 transition-colors">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <div className="text-gray-600">brendon.bernardidev@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="bg-blue-600 p-4 rounded-xl mr-4 group-hover:bg-purple-600 transition-colors">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">WhatsApp</div>
                  <div className="text-gray-600">(49) 99920-0588</div>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="bg-blue-600 p-4 rounded-xl mr-4 group-hover:bg-purple-600 transition-colors">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Horário</div>
                  <div className="text-gray-600">Seg-Sex: 7h às 23h</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
              <h4 className="text-xl font-bold mb-2">Resposta Garantida</h4>
              <p className="opacity-90">
                Respondemos todos os contatos em até 2 horas durante horário comercial
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="animate-fade-in-right">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Solicite seu orçamento</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nome Completo *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Telefone/WhatsApp *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Empresa</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Orçamento Disponível</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  >
                    <option value="">Selecione uma faixa</option>
                    <option value="200-500">R$ 200 - R$ 500</option>
                    <option value="500-1000">R$ 500 - R$ 1.000</option>
                    <option value="1500-2500">R$ 1.500 - R$ 2.500</option>
                    <option value="2500-5000">R$ 2.500 - R$ 5.000</option>
                    <option value="5000-10000">R$ 5.000 - R$ 10.000</option>
                    <option value="10000+">Acima de R$ 10.000</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Conte-nos sobre seu projeto *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    placeholder="Descreva seu negócio, objetivos e como podemos ajudar..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center group disabled:opacity-70"
                >
                  {loading ? 'Enviando...' : 'Enviar Mensagem'}
                  {!loading && <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
