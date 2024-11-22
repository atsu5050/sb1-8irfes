import React from 'react';
import { Code2, Database, Wrench, Cloud } from 'lucide-react';

const SkillCategory = ({ title, skills, icon: Icon }: { title: string; skills: string[]; icon: any }) => (
  <div className="p-6 bg-gray-700/50 rounded-xl shadow-lg border border-gray-600">
    <div className="flex items-center mb-4">
      <Icon className="h-6 w-6 text-blue-400 mr-2" />
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1 bg-gray-600 text-gray-200 rounded-full text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code2,
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Backend',
      icon: Database,
      skills: ['Python', 'SQL'],
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: ['Git', 'VS Code'],
    },
    {
      title: 'Other',
      icon: Cloud,
      skills: ['AWS'],
    },
  ];

  return (
    <section id="Skills" className="relative">
      <h2 className="text-3xl font-bold text-white mb-8">Skills</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category) => (
          <SkillCategory
            key={category.title}
            title={category.title}
            skills={category.skills}
            icon={category.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;