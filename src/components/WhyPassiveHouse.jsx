import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Droplets, Wind, Thermometer } from 'lucide-react';
import styles from '../styles/WhyPassiveHouse.module.css';

const benefits = [
    {
        icon: <Zap size={32} />,
        title: '%90 Enerji Tasarrufu',
        description: 'Geleneksel binalara göre ısıtma ve soğutma için %90\'a varan enerji tasarrufu sağlar.'
    },
    {
        icon: <Droplets size={32} />,
        title: 'Küf ve Nem Yok',
        description: 'Yalıtım ve hava sızdırmazlık sayesinde yapısal hasar ve sağlığa zararlı küf oluşumu engellenir.'
    },
    {
        icon: <Wind size={32} />,
        title: 'Sürekli Temiz Hava',
        description: 'Mekanik havalandırma sistemi ile 7/24 filtrelenmiş taze hava sağlanır.'
    },
    {
        icon: <Thermometer size={32} />,
        title: 'Konforlu Sıcaklık',
        description: 'Yazın serin, kışın sıcak. Tüm odalarda eşit ve dengeli ısı dağılımı.'
    }
];

const WhyPassiveHouse = () => {
    return (
        <section id="passive-house" className={`section ${styles.section}`}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Neden Pasif Ev?</h2>
                    <p className={styles.subtitle}>Sadece enerji tasarrufu değil, eşsiz bir yaşam kalitesi.</p>
                </div>

                <div className={styles.grid}>
                    <div className={styles.imageWrapper}>
                        {/* Visual representation/Illustration placeholder */}
                        <div className={styles.placeholderImage}>
                            <span className={styles.imageText}>Pasif Ev Diyagramı</span>
                        </div>
                    </div>
                    <div className={styles.benefitsList}>
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                className={styles.benefitItem}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <div className={styles.iconBox}>{benefit.icon}</div>
                                <div>
                                    <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                                    <p className={styles.benefitDesc}>{benefit.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyPassiveHouse;
