import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Clock, Users, MessageSquare } from 'lucide-react';
import ScrollSection from '../components/ScrollSection';
import MinimalCard from '../components/MinimalCard';
import TypingText from '../components/TypingText';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    category: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = [
    'Webアプリケーション開発',
    'ホームページ制作',
    'システム開発',
    'コールセンターシステム',
    'その他のご相談',
  ];

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: 'Email',
      value: 'info@anfra.co.jp',
      description: '24時間受付',
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: 'Phone',
      value: '090-8400-3970',
      description: '平日 9:00-18:00',
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: 'Office',
      value: '福岡県福岡市博多区中島町4-9',
      description: '中洲川端駅徒歩5分'
    },
  ];

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = 'お名前は必須項目です';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスは必須項目です';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'メールアドレスの形式が正しくありません';
    }

    if (!formData.category) {
      newErrors.category = 'お問い合わせ種別を選択してください';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'メッセージは必須項目です';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'メッセージは10文字以上で入力してください';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);
    setErrors({});
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          company: formData.company,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          category: formData.category,
          message: formData.message,
        }),
      });
      if (res.ok) {
        setIsSubmitted(true);
        setFormData({
          company: '',
          name: '',
          email: '',
          phone: '',
          category: '',
          message: '',
        });
      } else {
        const data = await res.json();
        setErrors({ message: data.error || '送信に失敗しました' });
      }
    } catch (error) {
      setErrors({ message: '送信に失敗しました' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="relative pt-24 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-md mx-6"
        >
          <MinimalCard>
            <div className="p-12">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h2 className="text-2xl font-medium mb-4 text-gray-900 dark:text-white">
                送信完了
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                お問い合わせありがとうございます。<br />
                担当者より2営業日以内にご連絡いたします。
              </p>
              <motion.button
                onClick={() => setIsSubmitted(false)}
                className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                新しいお問い合わせ
              </motion.button>
            </div>
          </MinimalCard>
        </motion.div>
      </div>
    );
  }

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
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              <TypingText 
                text="プロジェクトのご相談やご質問など、お気軽にお問い合わせください" 
                delay={500} 
                speed={60} 
              />
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <ScrollSection className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-light mb-8 text-gray-900 dark:text-white">
                  Get In Touch
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  専門スタッフが丁寧にサポートいたします。まずはお気軽にご相談ください。
                </p>
              </motion.div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <MinimalCard key={index} delay={index * 0.1}>
                    <div className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                            {info.title}
                          </h3>
                          <p className="text-gray-900 dark:text-white font-medium mb-1">
                            {info.value}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-500">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </MinimalCard>
                ))}
              </div>

              <MinimalCard delay={0.4} className="mt-8">
                <div className="p-6">
                  <h3 className="font-medium mb-4 text-gray-900 dark:text-white flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    営業時間
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex justify-between">
                      <span>月曜日 - 金曜日</span>
                      <span>9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>土曜日・日曜日・祝日</span>
                      <span>休業</span>
                    </div>
                  </div>
                </div>
              </MinimalCard>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <MinimalCard>
                  <div className="p-8">
                    <h2 className="text-2xl font-medium mb-8 text-gray-900 dark:text-white flex items-center">
                      <MessageSquare className="h-6 w-6 mr-3" />
                      お問い合わせフォーム
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            会社名
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="form-input"
                            placeholder="株式会社○○○"
                          />
                        </div>

                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            お名前 <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`form-input ${errors.name ? 'border-red-500 focus:ring-red-500' : ''}`}
                            placeholder="山田太郎"
                          />
                          {errors.name && (
                            <div className="mt-1 flex items-center space-x-1 text-red-500 text-sm">
                              <AlertCircle className="h-4 w-4" />
                              <span>{errors.name}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            メールアドレス <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`form-input ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
                            placeholder="example@example.com"
                          />
                          {errors.email && (
                            <div className="mt-1 flex items-center space-x-1 text-red-500 text-sm">
                              <AlertCircle className="h-4 w-4" />
                              <span>{errors.email}</span>
                            </div>
                          )}
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            電話番号
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="form-input"
                            placeholder="03-XXXX-XXXX"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          お問い合わせ種別 <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="category"
                          name="category"
                          value={formData.category}
                          onChange={handleInputChange}
                          className={`form-select ${errors.category ? 'border-red-500 focus:ring-red-500' : ''}`}
                        >
                          <option value="">選択してください</option>
                          {categories.map((category) => (
                            <option key={category} value={category}>
                              {category}
                            </option>
                          ))}
                        </select>
                        {errors.category && (
                          <div className="mt-1 flex items-center space-x-1 text-red-500 text-sm">
                            <AlertCircle className="h-4 w-4" />
                            <span>{errors.category}</span>
                          </div>
                        )}
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          メッセージ <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          className={`form-textarea ${errors.message ? 'border-red-500 focus:ring-red-500' : ''}`}
                          placeholder="プロジェクトの詳細やご要望をお聞かせください..."
                        />
                        {errors.message && (
                          <div className="mt-1 flex items-center space-x-1 text-red-500 text-sm">
                            <AlertCircle className="h-4 w-4" />
                            <span>{errors.message}</span>
                          </div>
                        )}
                      </div>

                      <div className="text-center">
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-flex items-center space-x-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                          whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                          whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white dark:border-gray-900 border-t-transparent"></div>
                              <span>送信中...</span>
                            </>
                          ) : (
                            <>
                              <Send className="h-5 w-5" />
                              <span>お問い合わせを送信</span>
                            </>
                          )}
                        </motion.button>
                      </div>
                    </form>
                  </div>
                </MinimalCard>
              </motion.div>
            </div>
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
              お問い合わせの前に、こちらもご確認ください
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: 'プロジェクトの見積もりはどのくらいの期間で出していただけますか？',
                answer: 'プロジェクトの規模にもよりますが、基本的には1週間以内に詳細な見積もりをご提示いたします。緊急の場合は48時間以内での対応も可能です。',
              },
              {
                question: '開発期間はどのくらいかかりますか？',
                answer: 'プロジェクトの複雑さや規模によって異なりますが、一般的なWebサイト（HP）で1週間以内、Webアプリケーションで2-6ヶ月程度です。詳細はお打ち合わせ時にご説明いたします。',
              },
              {
                question: '運用・保守サポートは提供していますか？',
                answer: 'はい、開発完了後の運用・保守サポートも提供しております。',
              },
              {
                question: 'HP制作にかかる料金はどのくらいですか？',
                answer: 'ページ数やデザインなどにより変動しますが、１日の稼働で３万円をいただいております。お気軽にご相談ください。',
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
    </div>
  );
};

export default Contact;