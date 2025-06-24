import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Shield, MessageSquare, ArrowRight, Clock, Users, Sparkles } from 'lucide-react';
import ScrollSection from '../components/ScrollSection';
import MinimalCard from '../components/MinimalCard';
import TypingText from '../components/TypingText';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  const websitePlans = [
    {
      name: 'HP制作基本プラン',
      price: '210,000〜420,000',
      unit: '円（税込）',
      duration: '3万円/日 × 7〜14日で制作',
      description: 'LP、企業サイト、採用ページなどに対応',
      features: [
        '優れたUI(見た目)の設計',
        '要望に合わせたオリジナルデザイン',
        '初稿納品まで最短7営業日',
        'レスポンシブデザイン（スマホ画面）対応',
        '基本的なお問い合わせフォーム',
      ],
      icon: <Zap className="h-6 w-6" />,
      popular: true,
    },
  ];

  const supportPlans = [
    {
      name: 'ライトサポート',
      price: '3,000',
      unit: '円/月（税抜き）',
      description: '月1回までの軽微修正',
      features: [
        'テキスト差し替え・画像変更',
        '24〜48時間以内に返信対応',
        '稼働確認・簡易レポート付き',
        '月1回までの修正対応',
        'メールサポート',
      ],
      icon: <Shield className="h-6 w-6" />,
      popular: false,
    },
    {
      name: 'プレミアムサポート',
      price: '10,000',
      unit: '円/月（税込）',
      description: '月3回の修正対応＋提案付き',
      features: [
        '月3回の修正対応',
        'Zoom相談つき',
        'サイトの改善提案',
        'アクセス傾向分析（簡易）',
        '優先サポート対応',
        '安心の長期サポート',
      ],
      icon: <Star className="h-6 w-6" />,
      popular: true,
    },
  ];

  const spotService = {
    name: 'スポット修正',
    price: '5,000',
    unit: '円〜（税込）',
    description: 'テキスト変更、画像入れ替えなど1件単位',
    features: [
      '契約なしでも依頼可能',
      '納期・内容に応じて見積もり',
      '柔軟な対応',
      '単発での修正作業',
    ],
    icon: <MessageSquare className="h-6 w-6" />,
  };

  const benefits = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: '迅速な対応',
      description: '最短3営業日での納品、充実したサポート体制',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: '専門チーム',
      description: '経験豊富なデザイナー・エンジニアによる高品質な制作',
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: '最新技術',
      description: 'モダンな技術スタックによる美しく機能的なWebサイト',
    },
  ];

  return (
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
              Pricing
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              <TypingText 
                text="透明性のある料金体系で、お客様のニーズに最適なプランをご提供" 
                delay={500} 
                speed={60} 
              />
            </p>
          </motion.div>
        </div>
      </section>

      {/* Website Creation Plans */}
      <ScrollSection className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900 dark:text-white">
              ホームページ制作
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-light">
              プロフェッショナルなWebサイト制作サービス
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {websitePlans.map((plan, index) => (
              <MinimalCard key={index} delay={index * 0.2}>
                <div className="relative p-8 md:p-12">
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-2 rounded-full text-sm font-medium">
                        おすすめ
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-2xl mb-6">
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-medium mb-4 text-gray-900 dark:text-white">
                      {plan.name}
                    </h3>
                    <div className="mb-4">
                      <span className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white">
                        {plan.price}
                      </span>
                      <span className="text-lg text-gray-600 dark:text-gray-400 ml-2">
                        {plan.unit}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      {plan.duration}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {plan.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400 text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <Link to="/contact">
                      <motion.button
                        className="inline-flex items-center space-x-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>お問い合わせ</span>
                        <ArrowRight className="h-5 w-5" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </MinimalCard>
            ))}
          </div>
        </div>
      </ScrollSection>

      {/* Support Plans */}
      <ScrollSection className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900 dark:text-white">
              サポートプラン
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-light">
              継続的なサポートで安心の運用をお約束
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            {supportPlans.map((plan, index) => (
              <MinimalCard key={index} delay={index * 0.2}>
                <div className="relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-1 rounded-full text-sm font-medium">
                        安心サポート
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl mb-4">
                      {plan.icon}
                    </div>
                    <h3 className="text-xl font-medium mb-3 text-gray-900 dark:text-white">
                      {plan.name}
                    </h3>
                    <div className="mb-3">
                      <span className="text-3xl font-light text-gray-900 dark:text-white">
                        {plan.price}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 ml-1">
                        {plan.unit}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {plan.description}
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400 text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <Link to="/contact">
                      <motion.button
                        className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-3 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        プランを選択
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </MinimalCard>
            ))}
          </div>

          {/* Spot Service */}
          <div className="max-w-2xl mx-auto">
            <MinimalCard delay={0.4}>
              <div className="p-8 text-center bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl mb-4">
                  {spotService.icon}
                </div>
                <h3 className="text-xl font-medium mb-3 text-gray-900 dark:text-white">
                  {spotService.name}
                </h3>
                <div className="mb-3">
                  <span className="text-3xl font-light text-gray-900 dark:text-white">
                    {spotService.price}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 ml-1">
                    {spotService.unit}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                  {spotService.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {spotService.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <Link to="/contact">
                    <motion.button
                      className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-3 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      プランを選択
                    </motion.button>
                  </Link>
                </div>
              </div>
            </MinimalCard>
          </div>
        </div>
      </ScrollSection>

      {/* Benefits Section */}
      <ScrollSection className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900 dark:text-white">
              Anfraを選ぶ理由
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-light">
              お客様に選ばれる3つの強み
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <MinimalCard key={index} delay={index * 0.2}>
                <div className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-4 text-gray-900 dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </MinimalCard>
            ))}
          </div>
        </div>
      </ScrollSection>

      {/* FAQ Section */}
      <ScrollSection className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900 dark:text-white">
              よくある質問
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-light">
              料金に関するご質問にお答えします
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: '制作期間はどのくらいかかりますか？',
                answer: '基本的には１週間以内での納品を目安としています。内容や規模によって調整いたします。',
              },
              {
                question: '追加料金が発生することはありますか？',
                answer: '事前にお見積もりをお出しし、ご了承いただいてから作業を開始します。追加作業が必要な場合は事前にご相談いたします。',
              },
              {
                question: 'サポートプランの途中解約は可能ですか？',
                answer: 'はい、可能です。月単位でのご契約となりますので、翌月から解約いただけます。',
              },
              {
                question: '支払い方法はどのようになりますか？',
                answer: '銀行振込、クレジットカード決済に対応しています。詳細はお問い合わせ時にご案内いたします。',
              },
            ].map((faq, index) => (
              <MinimalCard key={index} delay={index * 0.1}>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                    Q. {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    A. {faq.answer}
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
              プロジェクトを
              <br />
              始めませんか？
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 font-light">
              お客様のご要望に合わせて最適なプランをご提案いたします
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact">
                <button className="inline-flex items-center space-x-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-10 py-5 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 text-lg">
                  <span>無料相談を申し込む</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </Link>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm text-gray-500 dark:text-gray-500 mt-6"
            >
              ご不明な点はお気軽にお問い合わせください
            </motion.p>
          </motion.div>
        </div>
      </ScrollSection>
    </div>
  );
};

export default Pricing;