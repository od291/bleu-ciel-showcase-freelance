
import React from 'react';
import { Code, Database, Globe, Smartphone, Palette, Zap, Server, GitBranch } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Competences = () => {
  const competenceCategories = [
    {
      title: 'Frontend',
      icon: Code,
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'JavaScript', level: 90 }
      ]
    },
    {
      title: 'Backend',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express', level: 75 },
        { name: 'API REST', level: 85 },
        { name: 'Authentication', level: 70 }
      ]
    },
    {
      title: 'Bases de données',
      icon: Database,
      skills: [
        { name: 'MongoDB', level: 75 },
        { name: 'PostgreSQL', level: 70 },
        { name: 'Firebase', level: 80 },
        { name: 'Supabase', level: 85 }
      ]
    },
    {
      title: 'Outils & DevOps',
      icon: GitBranch,
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Vercel', level: 85 },
        { name: 'Docker', level: 60 },
        { name: 'CI/CD', level: 65 }
      ]
    },
    {
      title: 'Design & UX',
      icon: Palette,
      skills: [
        { name: 'Figma', level: 80 },
        { name: 'Design Responsive', level: 95 },
        { name: 'UI/UX', level: 75 },
        { name: 'Prototypage', level: 70 }
      ]
    },
    {
      title: 'Mobile & Performance',
      icon: Smartphone,
      skills: [
        { name: 'React Native', level: 70 },
        { name: 'PWA', level: 75 },
        { name: 'Optimisation SEO', level: 80 },
        { name: 'Performance Web', level: 85 }
      ]
    }
  ];

  return (
    <section id="competences" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mes Compétences
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un aperçu de mes compétences techniques et créatives, 
            développées au fil de mes projets et formations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {competenceCategories.map((category, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-sky-blue-100 hover:border-sky-blue-300 hover:-translate-y-2"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-sky-blue-100 to-sky-blue-200 rounded-full flex items-center justify-center group-hover:from-sky-blue-500 group-hover:to-sky-blue-600 transition-all duration-300">
                  <category.icon className="w-8 h-8 text-sky-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-sky-blue-700 transition-colors">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-xs text-sky-blue-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-sky-blue-500 to-sky-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-sky-blue-500 to-sky-blue-600 p-8 rounded-2xl text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">En apprentissage constant</h3>
            <p className="mb-6 opacity-90">
              La technologie évolue rapidement, c'est pourquoi je me forme continuellement 
              aux nouvelles technologies et meilleures pratiques du développement web.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">GraphQL</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Three.js</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Web3</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">AI/ML</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competences;
