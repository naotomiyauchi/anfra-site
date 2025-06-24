import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Code, Database, Globe, Play } from 'lucide-react';
import ScrollSection from '../components/ScrollSection';
import MinimalCard from '../components/MinimalCard';
import TypingText from '../components/TypingText';
import { Helmet } from 'react-helmet-async';

const Work: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform CMS',
      category: 'Web Application',
      categoryJa: 'Webアプリケーション',
      description: '大規模ECサイト向けの管理システム。React + Node.js + PostgreSQLで構築。リアルタイム在庫管理と高度な分析機能を実装。',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
      year: '2025',
      featured: true,
    },
    {
      id: 2,
      title: 'Restaurant Chain Management',
      category: 'System Development',
      categoryJa: 'システム開発',
      description: '多店舗展開する飲食店向けの統合管理システム。売上分析、在庫管理、スタッフ管理を一元化。',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Docker'],
      year: '2025',
      featured: true,
    },
    {
      id: 3,
      title: 'Call Center CRM System',
      category: 'Call Center System',
      categoryJa: 'コールセンターシステム',
      description: '顧客対応の効率化を実現するCRMシステム。通話録音、チャット機能、レポート自動生成機能を搭載。',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Angular', 'Spring Boot', 'MongoDB', 'WebRTC'],
      year: '2025',
      featured: false,
    },
    {
      id: 4,
      title: 'Mobile-First Corporate Site',
      category: 'Website Development',
      categoryJa: 'HP制作',
      description: 'スマートフォン最適化を重視したコーポレートサイト。PWA対応で高速表示とオフライン機能を実現。',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      year: '2025',
      featured: false,
    },
    {
      id: 5,
      title: 'AI Chatbot Integration',
      category: 'Web Application',
      categoryJa: 'Webアプリケーション',
      description: '自然言語処理を活用したAIチャットボット。多言語対応とカスタマーサポートの自動化を実現。',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'FastAPI', 'OpenAI API', 'React', 'PostgreSQL'],
      year: '2023',
      featured: false,
    },
    {
      id: 6,
      title: 'Event Management Platform',
      category: 'Web Application',
      categoryJa: 'Webアプリケーション',
      description: 'オンライン/オフラインイベントの企画から運営まで支援するプラットフォーム。決済機能とライブ配信機能を統合。',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'Stripe API', 'WebRTC', 'AWS'],
      year: '2022',
      featured: false,
    },
  ];

  const techStack = [
    { name: 'React', category: 'Frontend', icon: <Code className="h-5 w-5" /> },
    { name: 'Vue.js', category: 'Frontend', icon: <Code className="h-5 w-5" /> },
    { name: 'Angular', category: 'Frontend', icon: <Code className="h-5 w-5" /> },
    { name: 'Node.js', category: 'Backend', icon: <Database className="h-5 w-5" /> },
    { name: 'Python', category: 'Backend', icon: <Database className="h-5 w-5" /> },
    { name: 'Laravel', category: 'Backend', icon: <Database className="h-5 w-5" /> },
    { name: 'PostgreSQL', category: 'Database', icon: <Database className="h-5 w-5" /> },
    { name: 'MongoDB', category: 'Database', icon: <Database className="h-5 w-5" /> },
    { name: 'AWS', category: 'Cloud', icon: <Globe className="h-5 w-5" /> },
    { name: 'Docker', category: 'DevOps', icon: <Globe className="h-5 w-5" /> },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const regularProjects = projects.filter(project => !project.featured);

  return (
    <>
      <Helmet>
        <title>実績紹介 | 合同会社Anfra</title>
        <meta name="description" content="合同会社Anfraの制作実績・開発事例をご紹介します。" />
        <meta property="og:title" content="実績紹介 | 合同会社Anfra" />
        <meta property="og:description" content="合同会社Anfraの制作実績・開発事例をご紹介します。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://あなたのドメイン/work" />
        <meta property="og:image" content="https://あなたのドメイン/ogp.png" />
      </Helmet>
      <div className="relative pt-14">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-6xl md:text-8xl font-light mb-8 tracking-tight text-gray-900 dark:text-white">
                Our Work
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                <TypingText 
                  text="革新的なソリューションで様々な業界の課題を解決" 
                  delay={500} 
                  speed={60} 
                />
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Projects */}
        <ScrollSection className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-900 dark:text-white">
                Recent Projects
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 font-light">
                最近のプロジェクト
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              {featuredProjects.map((project, index) => (
                <MinimalCard key={project.id} delay={index * 0.2}>
                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-t-2xl">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-6 left-6">
                        <span className="px-3 py-1 bg-white/90 dark:bg-black/90 text-gray-900 dark:text-white text-sm rounded-full font-medium">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute top-6 right-6">
                        <span className="px-3 py-1 bg-white/90 dark:bg-black/90 text-gray-900 dark:text-white text-sm rounded-full font-medium">
                          {project.year}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <h3 className="text-2xl font-medium mb-3 text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                        {project.categoryJa}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-full text-gray-700 dark:text-gray-300 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <motion.button 
                        className="flex items-center space-x-2 text-gray-900 dark:text-white font-medium group-hover:translate-x-2 transition-transform duration-300"
                        whileHover={{ x: 8 }}
                      >
                        <span className="notranslate" translate="no">View Project</span>
                        <ArrowRight className="h-4 w-4" />
                      </motion.button>
                    </div>
                  </div>
                </MinimalCard>
              ))}
            </div>
          </div>
        </ScrollSection>

        {/* All Projects */}
        <ScrollSection className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-900 dark:text-white">
                All Projects
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 font-light">
                すべてのプロジェクト
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {regularProjects.map((project, index) => (
                <MinimalCard key={project.id} delay={index * 0.1}>
                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-t-2xl">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-2 py-1 bg-white/90 dark:bg-black/90 text-gray-900 dark:text-white text-xs rounded-full font-medium">
                          {project.year}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mb-3">
                        {project.categoryJa}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                        {project.description.slice(0, 80)}...
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span 
                            key={tech}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded text-gray-600 dark:text-gray-400"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 text-xs text-gray-500">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                      
                      <motion.button 
                        className="flex items-center space-x-2 text-gray-900 dark:text-white text-sm font-medium"
                        whileHover={{ x: 4 }}
                      >
                        <span className="notranslate" translate="no">View Details</span>
                        <ExternalLink className="h-3 w-3" />
                      </motion.button>
                    </div>
                  </div>
                </MinimalCard>
              ))}
            </div>
          </div>
        </ScrollSection>

        {/* Technology Stack */}
        <ScrollSection className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900 notranslate" translate="no">
                Technology Stack
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 font-light">
                最新の技術スタックで高品質なソリューションを提供
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
              {techStack.map((tech, index) => (
                <MinimalCard key={tech.name} delay={index * 0.05}>
                  <div className="p-6 text-center group">
                    <div className="flex justify-center mb-4 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      {tech.icon}
                    </div>
                    <h3 className="font-medium text-gray-900 mb-1 text-sm notranslate" translate="no">
                      {tech.name}
                    </h3>
                    <p className="text-xs text-gray-500 notranslate" translate="no">
                      {tech.category}
                    </p>
                  </div>
                </MinimalCard>
              ))}
            </div>
          </div>
        </ScrollSection>

        {/* Process Section */}
        <ScrollSection className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900 dark:text-white">
                Development Process
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 font-light">
                プロジェクト成功のための体系的なアプローチ
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { 
                  step: '01', 
                  title: 'Discovery', 
                  titleJa: '要件定義',
                  description: 'お客様のニーズを詳細にヒアリングし、プロジェクトの目標と要件を明確化' 
                },
                { 
                  step: '02', 
                  title: 'Design', 
                  titleJa: '設計・企画',
                  description: 'システム設計とUI/UX設計を行い、技術的なアーキテクチャを決定' 
                },
                { 
                  step: '03', 
                  title: 'Development', 
                  titleJa: '開発・実装',
                  description: 'アジャイル開発手法を採用し、品質の高いコードで迅速に実装' 
                },
                { 
                  step: '04', 
                  title: 'Deployment', 
                  titleJa: 'テスト・デプロイ',
                  description: '十分なテストを実施し、本番環境への安全なデプロイと運用開始をサポート' 
                },
              ].map((process, index) => (
                <MinimalCard key={index} delay={index * 0.1}>
                  <div className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full text-lg font-medium mb-6">
                      {process.step}
                    </div>
                    <h3 className="text-xl font-medium mb-2 text-gray-900 dark:text-white">
                      {process.title}
                    </h3>
                    <h4 className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                      {process.titleJa}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </MinimalCard>
              ))}
            </div>
          </div>
        </ScrollSection>

        {/* CTA Section */}
        <ScrollSection className="py-20">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-5xl md:text-6xl font-light mb-8 text-gray-900 dark:text-white">
                Start Your Project
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 font-light">
                あなたのアイデアを現実に変えませんか？
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="inline-flex items-center space-x-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-10 py-5 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 text-lg">
                  <Play className="h-5 w-5" />
                  <span>Get Started</span>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </ScrollSection>
      </div>
    </>
  );
};

export default Work;