import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, TrendingUp, Heart, Zap, Star, ArrowRight } from 'lucide-react';
import ScrollSection from '../components/ScrollSection';
import MinimalCard from '../components/MinimalCard';
import TypingText from '../components/TypingText';
import { Helmet } from 'react-helmet-async';

const About: React.FC = () => {
  const values = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Innovation',
      titleJa: '革新性',
      description: '最新技術と創造的なアイデアで、常に業界をリードする革新的なソリューションを提供します。',
      number: '01',
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Quality',
      titleJa: '品質重視',
      description: '妥協のない品質管理と継続的な改善により、お客様に最高の価値を届けます。',
      number: '02',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Partnership',
      titleJa: 'パートナーシップ',
      description: 'お客様との信頼関係を最も大切にし、長期的なパートナーとして成長を支援します。',
      number: '03',
    },
  ];

  const timeline = [
    {
      year: '2020',
      title: '会社設立',
      titleEn: 'Company Founded',
      description: '合同会社Anfraを設立。IT事業からスタート。',
    },
    {
      year: '2021',
      title: '事業拡大',
      titleEn: 'Business Expansion',
      description: 'Webアプリケーション開発とHP制作事業を本格化。',
    },
    {
      year: '2022',
      title: '飲食業参入',
      titleEn: 'Restaurant Business',
      description: '飲食業に参入し、多角的事業展開を開始。',
    },
    {
      year: '2023',
      title: 'システム開発強化',
      titleEn: 'System Development',
      description: 'コールセンターシステム等、大規模システム開発に注力。',
    },
    {
      year: '2024',
      title: '更なる飛躍',
      titleEn: 'Further Growth',
      description: '最先端技術の導入と事業領域の拡大を推進。',
    },
  ];

  const stats = [
    { number: '4+', label: 'Years of Excellence', labelJa: '年の実績' },
    { number: '100+', label: 'Projects Completed', labelJa: 'プロジェクト完了' },
    { number: '5', label: 'Business Areas', labelJa: '事業領域' },
    { number: '99%', label: 'Client Satisfaction', labelJa: '顧客満足度' },
  ];

  return (
    <>
      <Helmet>
        <title>会社概要 | 合同会社Anfra</title>
        <meta name="description" content="合同会社Anfraの会社概要ページです。福岡を拠点にWeb制作・システム開発を行っています。" />
        <meta property="og:title" content="会社概要 | 合同会社Anfra" />
        <meta property="og:description" content="合同会社Anfraの会社概要ページです。福岡を拠点にWeb制作・システム開発を行っています。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://あなたのドメイン/about" />
        <meta property="og:image" content="https://あなたのドメイン/ogp.png" />
      </Helmet>
      <div className="relative pt-24">
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
                About Anfra
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                <TypingText 
                  text="革新的な技術と多様な事業領域での経験を活かし、お客様の成功を実現" 
                  delay={500} 
                  speed={60} 
                />
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <ScrollSection className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <h2 className="text-4xl md:text-5xl font-light mb-8 text-gray-900 dark:text-white">
                  Our Mission
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                    合同会社Anfraは、最先端のIT技術を駆使して、様々な業界のお客様の課題を解決することをミッションとしています。
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                    Webアプリケーション開発からシステム開発、さらには飲食業まで、多岐にわたる事業領域での経験を活かし、
                    お客様に真に価値のあるソリューションを提供します。
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                    技術の力で社会に貢献し、お客様と共に成長し続けることが私たちの願いです。
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <MinimalCard key={index} delay={index * 0.1}>
                      <div className="p-6 text-center">
                        <div className="text-3xl font-light mb-2 text-gray-900 dark:text-white">
                          {stat.number}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                          {stat.label}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-500">
                          {stat.labelJa}
                        </div>
                      </div>
                    </MinimalCard>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </ScrollSection>

        {/* Values Section */}
        <ScrollSection className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900 dark:text-white">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 font-light">
                私たちが大切にしている価値観と行動指針
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <MinimalCard key={index} delay={index * 0.2}>
                  <div className="p-8 text-center group">
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg group-hover:bg-gray-900 dark:group-hover:bg-white transition-colors duration-300">
                        <div className="text-gray-600 dark:text-gray-400 group-hover:text-white dark:group-hover:text-gray-900 transition-colors duration-300">
                          {value.icon}
                        </div>
                      </div>
                      <span className="text-2xl font-light text-gray-300 dark:text-gray-700">
                        {value.number}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-medium mb-2 text-gray-900 dark:text-white">
                      {value.title}
                    </h3>
                    <h4 className="text-lg text-gray-600 dark:text-gray-400 mb-4 font-light">
                      {value.titleJa}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </MinimalCard>
              ))}
            </div>
          </div>
        </ScrollSection>

        {/* Timeline Section */}
        <ScrollSection className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900 dark:text-white">
                Company History
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 font-light">
                Anfraの歩みと主要なマイルストーン
              </p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-px bg-gray-200 dark:bg-gray-700"></div>

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-900 dark:bg-white rounded-full border-4 border-white dark:border-gray-900 z-10"></div>
                    
                    {/* Content */}
                    <MinimalCard 
                      className={`max-w-md ${
                        index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'
                      }`} 
                      style={{width: 'calc(50% - 2rem)'}}
                      delay={0}
                    >
                      <div className="p-6">
                        <div className="text-2xl font-light text-gray-900 dark:text-white mb-2">
                          {item.year}
                        </div>
                        <h3 className="text-xl font-medium mb-1 text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <h4 className="text-sm text-gray-500 dark:text-gray-500 mb-3">
                          {item.titleEn}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </MinimalCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollSection>

        {/* Company Info */}
        <ScrollSection className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900 dark:text-white">
                Company Information
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 font-light">
                合同会社Anfraの基本情報
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <MinimalCard>
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                          Company Name
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">合同会社Anfra</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                          Established
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">2020年</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                          Representative
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">代表社員</p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                          Business Areas
                        </h3>
                        <ul className="text-gray-600 dark:text-gray-400 space-y-1 text-sm">
                          <li>• Webアプリケーション開発・運用</li>
                          <li>• ホームページ制作</li>
                          <li>• システム開発</li>
                          <li>• コールセンターシステム開発・運用</li>
                          <li>• 飲食業</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                          Team Size
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">10名（2024年現在）</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </MinimalCard>
            </div>
          </div>
        </ScrollSection>

        {/* CEO Message */}
        <ScrollSection className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-light mb-12 text-gray-900 dark:text-white">
                CEO Message
              </h2>
              
              <MinimalCard>
                <div className="p-12">
                  <blockquote className="text-xl leading-relaxed mb-8 text-gray-600 dark:text-gray-400 font-light italic">
                    「技術は手段であり、目的は人々の生活をより豊かにすることです。
                    私たちAnfraは、最先端の技術を駆使しながらも、常に人間らしい温かさを大切にし、
                    お客様との信頼関係を築いてまいります。
                    多様な事業領域での経験を活かし、お客様の成功が私たちの成功であるという信念のもと、
                    これからも挑戦し続けてまいります。」
                  </blockquote>
                  <div className="text-lg font-medium text-gray-900 dark:text-white">
                    合同会社Anfra 代表社員
                  </div>
                </div>
              </MinimalCard>
            </motion.div>
          </div>
        </ScrollSection>

        {/* CTA Section */}
        <ScrollSection className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-5xl md:text-6xl font-light mb-8 text-gray-900 dark:text-white">
                Join Our Journey
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 font-light">
                私たちと一緒に未来を創造しませんか？
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="inline-flex items-center space-x-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-10 py-5 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 text-lg">
                  <span>Get In Touch</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </ScrollSection>
      </div>
    </>
  );
};

export default About;