import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/ProcessTimeline.module.css';

const steps = [
    { title: 'Ücretsiz Görüşme', time: '1 Hafta', desc: 'İhtiyaçlarınızı dinliyor, pasif ev potansiyelini değerlendiriyoruz.' },
    { title: 'Fizibilite Raporu', time: '2-4 Hafta', desc: 'Arsa analizi, iklim verileri ve ilk enerji modellemesi.' },
    { title: 'Proje Hazırlık', time: '3-6 Ay', desc: 'Mimari ve mühendislik detaylarının PHPP standartlarında hazırlanması.' },
    { title: 'Uygulama', time: '12-18 Ay', desc: 'Titiz inşaat süreci ve sızdırmazlık testleri.' },
    { title: 'Sertifikasyon', time: 'Final', desc: 'PHI onaylı sertifikanın alınması ve teslim.' }
];

const ProcessTimeline = () => {
    return (
        <section className={`section ${styles.section}`}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h2 className={styles.sectionTitle}>Sürecimiz Nasıl İşliyor?</h2>
                    <p className={styles.sectionSubtitle}>Hayalinizdeki eve giden şeffaf ve planlı yolculuk.</p>
                </div>

                <div className={styles.timeline}>
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className={styles.stepItem}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className={styles.stepMarker}>
                                <span className={styles.stepIndex}>{index + 1}</span>
                            </div>
                            <div className={styles.stepContent}>
                                <span className={styles.timeTag}>{step.time}</span>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDesc}>{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}

                    {/* Connecting line */}
                    <div className={styles.line}></div>
                </div>
            </div>
        </section>
    );
};

export default ProcessTimeline;
