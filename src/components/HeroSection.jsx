import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from '../styles/HeroSection.module.css';

const HeroSection = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}></div>
            <div className={`container ${styles.content}`}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={styles.textContent}
                >
                    <span className={styles.label}>Türkiye'nin İlk Pasif Ev Danışmanlık Platformu</span>
                    <h1 className={styles.title}>Geleceğin Evlerini<br /> Bugünden İnşa Ediyoruz</h1>
                    <p className={styles.subtitle}>Enerji faturanızı %90'a kadar azaltan, çevre dostu ve konforlu evler tasarlıyoruz.</p>

                    <div className={styles.actions}>
                        <button className={styles.primaryBtn}>
                            Ücretsiz Fizibilite Al <ArrowRight size={20} />
                        </button>
                        <button className={styles.secondaryBtn}>
                            Projelerimizi İncele
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
