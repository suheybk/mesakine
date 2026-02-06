import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ClipboardCheck, FileText, Hammer, Users } from 'lucide-react';
import styles from '../styles/Services.module.css';

const services = [
    {
        id: 'feasibility',
        title: 'Fizibilite Analizi',
        icon: <ClipboardCheck size={40} />,
        desc: 'Projenizin pasif ev standardına uygunluğunu değerlendiriyoruz.',
        duration: '2-4 hafta',
        price: '75.000 TL\'den başlayan',
        link: '/services/feasibility'
    },
    {
        id: 'consulting',
        title: 'Proje Danışmanlığı',
        icon: <FileText size={40} />,
        desc: 'PHPP hesaplamalarından detay çözümlerine kadar A-Z destek.',
        duration: '3-6 ay',
        price: '450.000 TL\'den başlayan',
        link: '#' // Placeholder
    },
    {
        id: 'application',
        title: 'Anahtar Teslim Uygulama',
        icon: <Hammer size={40} />,
        desc: 'Şantiye yönetiminden sertifikasyona anahtar teslim hizmet.',
        duration: '12-18 ay',
        price: 'Proje bazlı',
        link: '#' // Placeholder
    },
    {
        id: 'coop',
        title: 'Pasif Ev Kooperatifi',
        icon: <Users size={40} />,
        desc: 'Birlikte daha uygun maliyetle pasif ev sahibi olun.',
        duration: '18-24 ay',
        price: 'Kişi başı 250.000 TL\'den',
        link: '#' // Placeholder
    }
];

const Services = () => {
    return (
        <div className={styles.pageWrapper}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className="container text-center">
                    <h1 className={styles.heroTitle}>Size Özel Pasif Ev Çözümleri</h1>
                    <p className={styles.heroSubtitle}>Fizibilite'den sertifikasyona kadar her aşamada yanınızdayız.</p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section">
                <div className="container">
                    <div className={styles.grid}>
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                className={styles.card}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className={styles.iconWrapper}>{service.icon}</div>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardDesc}>{service.desc}</p>
                                <div className={styles.meta}>
                                    <p><strong>Süre:</strong> {service.duration}</p>
                                    <p><strong>Fiyat:</strong> {service.price}</p>
                                </div>
                                <Link to={service.link} className={styles.detailBtn}>Detayları İncele</Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="section" style={{ backgroundColor: '#f9f9f9' }}>
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: '3rem' }}>Hizmet Karşılaştırması</h2>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Hizmet Kapsamı</th>
                                    <th>Fizibilite</th>
                                    <th>Danışmanlık</th>
                                    <th>Tam Uygulama</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Arsa Analizi</td><td className={styles.check}>✓</td><td className={styles.check}>✓</td><td className={styles.check}>✓</td></tr>
                                <tr><td>PHPP Hesaplama</td><td className={styles.cross}>✗</td><td className={styles.check}>✓</td><td className={styles.check}>✓</td></tr>
                                <tr><td>Malzeme Seçimi</td><td className={styles.cross}>✗</td><td className={styles.check}>✓</td><td className={styles.check}>✓</td></tr>
                                <tr><td>Şantiye Denetimi</td><td className={styles.cross}>✗</td><td className={styles.cross}>✗</td><td className={styles.check}>✓</td></tr>
                                <tr><td>Sertifikasyon</td><td className={styles.cross}>✗</td><td className={styles.cross}>✗</td><td className={styles.check}>✓</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaBanner}>
                <div className="container text-center">
                    <h3>Hangi hizmet size uygun?</h3>
                    <button className={styles.ctaButtonOutline}>Ücretsiz Görüşelim</button>
                </div>
            </section>
        </div>
    );
};

export default Services;
