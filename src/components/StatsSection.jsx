import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/StatsSection.module.css';

const stats = [
    { value: '45+', label: 'Tamamlanan Proje' },
    { value: '%90', label: 'Enerji Tasarrufu' },
    { value: '<15', label: 'kWh/m² Isıtma' },
    { value: '%100', label: 'Müşteri Memnuniyeti' },
];

const StatsSection = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <h3 className={styles.value}>{stat.value}</h3>
                            <p className={styles.label}>{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
