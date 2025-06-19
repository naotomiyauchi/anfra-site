import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Smartphone, Database, HeadphonesIcon, ChefHat, Quote, Play } from 'lucide-react';
import KirifudaHero from '../components/KirifudaHero';
import ScrollSection from '../components/ScrollSection';
import MinimalCard from '../components/MinimalCard';
import TypingText from '../components/TypingText';
import { Helmet } from 'react-helmet-async';

const Home: React.FC = () => {
  const services = [
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Web Application',
      titleJa: 'Webアプリ事業',
      description: 'こんなアプリを作りたいを開発・展開・運用',
      number: '01',
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: 'Website Development',
      titleJa: 'HP制作',
      description: 'オリジナルのHPを最速で構築 / Webサイトでビジネスを加速',
      number: '02',
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: 'System Development',
      titleJa: 'システム開発',
      description: '面倒な事務作業を企業ニーズに合わせたカスタムシステム設計・開発',
      number: '03',
    },
    {
      icon: <HeadphonesIcon className="h-6 w-6" />,
      title: 'Call Center Systems',
      titleJa: 'コールセンターシステム',
      description: '効率的なコールセンター運用システムの開発・運用',
      number: '04',
    },
    {
      icon: <ChefHat className="h-6 w-6" />,
      title: 'Restaurant Business',
      titleJa: '飲食業',
      description: '美味しい料理とサービスで地域に愛される店舗運営',
      number: '05',
    },
  ];

  const stats = [
    { number: '100+', label: 'Projects Completed', labelJa: 'プロジェクト実績' },
    { number: '5+', label: 'Business Areas', labelJa: '事業領域' },
    { number: '90%+', label: 'Client Satisfaction', labelJa: '顧客満足度' },
    { number: '12/5', label: 'Support System', labelJa: 'サポート体制' },
  ];

  const testimonials = [
    {
      name: 'T様',
      company: '保育事業 K保育園',
      role: '園長',
      text: 'Anfraさんの技術力と提案力は想像以上でした。次は自社システムの際もよろしくお願いします。',
    },
    {
      name: 'S様',
      company: '印刷事業 株式会社K用紙',
      role: 'マーケティング部長',
      text: 'プロジェクトの進行が非常にスムーズで、親身に要望にも対応していただきました。',
    },
    {
      name: 'Y様',
      company: '飲食事業 居酒屋T',
      role: 'オーナー',
      text: 'システム導入により業務効率が改善されました。HP制作までありがとうございました。',
    },
  ];

  return (
    <>
      <Helmet>
        <title>合同会社Anfra | 福岡のWeb制作・システム開発</title>
        <meta name="description" content="合同会社Anfraは福岡を拠点にWeb制作・システム開発を行う会社です。ホームページ制作やシステム開発のご相談はお気軽にどうぞ。" />
        <meta property="og:title" content="合同会社Anfra | 福岡のWeb制作・システム開発" />
        <meta property="og:description" content="合同会社Anfraは福岡を拠点にWeb制作・システム開発を行う会社です。ホームページ制作やシステム開発のご相談はお気軽にどうぞ。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://あなたのドメイン/" />
        <meta property="og:image" content="https://あなたのドメイン/ogp.png" />
      </Helmet>
      <div className="relative">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* <KirifudaHero /> */}
          
          <div className="container mx-auto px-6 text-center relative z-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <motion.h1 
                className="text-6xl md:text-8xl font-light mb-8 tracking-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.8 }}
              >
                <span className="block text-gray-900 dark:text-white">Technology</span>
                <span className="block text-gray-600 dark:text-gray-400 text-5xl md:text-7xl">
                  <TypingText text="meets Innovation" delay={2000} speed={80} />
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 font-light leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                革新的なテクノロジーで未来のビジネスと出会う
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/work"
                    className="group inline-flex items-center space-x-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300"
                  >
                    <Play className="h-5 w-5" />
                    <span>View Our Work</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-3 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white px-8 py-4 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                  >
                    <span>Get In Touch</span>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Services Section */}
        <ScrollSection className="py-32 bg-transparent">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-light mb-6 text-gray-900 dark:text-white">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light">
                最新技術を活用し、
                <br className="hidden md:block" />
                お客様のビジネスに感動をお届けします
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <MinimalCard key={index} delay={index * 0.1}>
                  <div className="p-8 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                        {service.icon}
                      </div>
                      <span className="text-3xl font-light text-gray-300 dark:text-gray-700">
                        {service.number}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                    <h4 className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {service.titleJa}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed flex-grow">
                      {service.description}
                    </p>
                  </div>
                </MinimalCard>
              ))}
            </div>
          </div>
        </ScrollSection>

        {/* Stats Section */}
        <ScrollSection className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl md:text-6xl font-light mb-6 text-gray-900 dark:text-white text-center">
              Achievements
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-light text-center mb-10">
              実績
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  
                  <div className="text-4xl md:text-5xl font-light mb-2 text-gray-900 dark:text-white">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-500">
                    {stat.labelJa}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollSection>

        {/* Testimonials Section */}
        <ScrollSection className="py-32 bg-transparent">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-light mb-6 text-gray-900 dark:text-white">
                Client Stories
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 font-light">
                お客様からの信頼の声
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <MinimalCard key={index} delay={index * 0.2}>
                  <div className="p-8 h-full flex flex-col">
                    <Quote className="h-8 w-8 text-gray-300 dark:text-gray-700 mb-6" />
                    <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed flex-grow">
                      {testimonial.text}
                    </p>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-500">
                        {testimonial.role}
                      </div>
                      <div className="text-sm text-gray-400 dark:text-gray-600">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </MinimalCard>
              ))}
            </div>
          </div>
        </ScrollSection>

        {/* CTA Section */}
        <ScrollSection className="py-32">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-5xl md:text-6xl font-light mb-8 text-gray-900 dark:text-white">
                Ready to Start
                <br />
                Your Project?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 font-light">
                あなたのアイデアを現実に変える最初の一歩を、
                <br className="hidden md:block" />
                私たちと一緒に踏み出しましょう
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-10 py-5 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 text-lg"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </ScrollSection>
      </div>
    </>
  );
};

export default Home;