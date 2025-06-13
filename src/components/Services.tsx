
import React from 'react';
import { Code, Smartphone, Palette, Zap, Globe, Settings } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Développement Web',
      description: 'Sites web modernes et applications performantes avec les dernières technologies.',
      features: ['React & Next.js', 'Node.js', 'Bases de données']
    },
    {
      icon: Smartphone,
      title: 'Design Responsive',
      description: 'Interfaces parfaitement adaptées à tous les écrans et appareils.',
      features: ['Mobile-first', 'UX/UI optimisée', 'Cross-browser']
    },
    {
      icon: Palette,
      title: 'Design & Branding',
      description: 'Identité visuelle forte et designs sur mesure pour votre marque.',
      features: ['Logo & identité', 'Charte graphique', 'Mockups']
    },
    {
      icon: Zap,
      title: 'Optimisation',
      description: 'Performance maximale et référencement naturel pour votre visibilité.',
      features: ['SEO technique', 'Vitesse de chargement', 'Analytics']
    },
    {
      icon: Globe,
      title: 'E-commerce',
      description: 'Boutiques en ligne complètes avec paiement sécurisé intégré.',
      features: ['Shopify & WooCommerce', 'Paiements sécurisés', 'Gestion stocks']
    },
    {
      icon: Settings,
      title: 'Maintenance',
      description: 'Support technique continu et mises à jour régulières.',
      features: ['Support 24/7', 'Sauvegardes', 'Mises à jour']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mes Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des solutions complètes pour tous vos besoins digitaux, 
            de la conception à la mise en ligne.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-sky-blue-100 hover:border-sky-blue-300 hover:-translate-y-2"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-sky-blue-100 to-sky-blue-200 rounded-full flex items-center justify-center group-hover:from-sky-blue-500 group-hover:to-sky-blue-600 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-sky-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-sky-blue-700 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-sky-blue-600 font-medium">
                      ✓ {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
