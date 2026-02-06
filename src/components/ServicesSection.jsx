import React from 'react';
import { motion } from 'framer-motion';
import { FileSearch, Users, Hammer } from 'lucide-react';
import styles from '../styles/ServicesSection.module.css';

const services = [
    {
        icon: <FileSearch size={40} />,
        title: 'Fizibilite Danışmanlığı',
        description: 'Arsanızın veya mevcut yapınızın pasif ev standartlarına uygunluğunu analiz ediyoruz. İklim verileri, yönelim ve gölgeleme analizleri ile en doğru başlangıcı yapın.',
        link: '#fizibilite'
    },
    {
        icon: <Users size={40} />,
        title: 'Proje Danışmanlığı',
        description: 'Mimari ve mühendislik projelerinizin PHPP (Passive House Planning Package) ile enerji modellemesini yapıyor, sertifikasyon sürecine hazırlıyoruz.',
        link: '#danismanlik'
    },
    {
        icon: <Hammer size={40} />,
        title: 'Uygulama & Kontrol',
        description: 'Detay çözümlerinden şantiye kontrolüne kadar, kağıt üzerindeki yüksek performansın sahada birebir uygulanmasını sağlıyoruz.',
        link: '#uygulama'
    }
];

const ServicesSection = () => {
    return (
        <section id="services" className={`section ${styles.section}`}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '3rem' }}>
                    <h2 className={styles.sectionTitle}>Hizmetlerimiz</h2>
                    <p className={styles.sectionSubtitle}>Pasif ev yolculuğunuzun her adımında yanınızdayız.</p>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                        >
                            <div className={styles.iconWrapper}>
                                {service.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDesc}>{service.description}</p>
                            <a href={service.link} className={styles.link}>Detaylı Bilgi &rarr;</a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
