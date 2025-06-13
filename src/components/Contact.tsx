
import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'votre@email.com',
      description: 'Réponse sous 24h'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+33 X XX XX XX XX',
      description: 'Lun-Ven 9h-18h'
    },
    {
      icon: MapPin,
      title: 'Localisation',
      value: 'France',
      description: 'Disponible partout'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-sky-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contactez-moi
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Prêt à démarrer votre projet ? Discutons ensemble de vos besoins 
            et donnons vie à vos idées.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow border-sky-blue-100">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-sky-blue-500 to-sky-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{method.title}</h3>
                      <p className="text-sky-blue-600 font-medium mb-1">{method.value}</p>
                      <p className="text-gray-500 text-sm">{method.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <Card className="bg-gradient-to-br from-sky-blue-500 to-sky-blue-600 text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-8 h-8" />
                  <div>
                    <h3 className="font-semibold mb-1">Consultation gratuite</h3>
                    <p className="text-sky-blue-100 text-sm">
                      Premier échange de 30min offert pour définir votre projet
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <Card className="border-sky-blue-100">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  Parlons de votre projet
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Nom complet *
                      </label>
                      <Input 
                        placeholder="Votre nom"
                        className="border-sky-blue-200 focus:border-sky-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Email *
                      </label>
                      <Input 
                        type="email"
                        placeholder="votre@email.com"
                        className="border-sky-blue-200 focus:border-sky-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Téléphone
                    </label>
                    <Input 
                      type="tel"
                      placeholder="+33 X XX XX XX XX"
                      className="border-sky-blue-200 focus:border-sky-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Type de projet
                    </label>
                    <select className="w-full p-3 border border-sky-blue-200 rounded-md focus:outline-none focus:border-sky-blue-500">
                      <option>Site vitrine</option>
                      <option>E-commerce</option>
                      <option>Application web</option>
                      <option>Refonte de site</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Décrivez votre projet *
                    </label>
                    <Textarea 
                      placeholder="Parlez-moi de votre projet, vos objectifs, votre budget approximatif..."
                      rows={5}
                      className="border-sky-blue-200 focus:border-sky-blue-500"
                    />
                  </div>
                  
                  <Button 
                    size="lg" 
                    className="w-full bg-sky-blue-500 hover:bg-sky-blue-600 text-white font-semibold py-3"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer ma demande
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
