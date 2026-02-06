import React from 'react';
import styles from '../styles/TrustSection.module.css';

const TrustSection = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.item}>
                        <span className={styles.bold}>SEPEV</span>
                        <span>Üyesi</span>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.item}>
                        <span className={styles.bold}>PHI</span>
                        <span>Sertifikalı Tasarımcı</span>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.item}>
                        <span className={styles.bold}>14+ Yıl</span>
                        <span>İnşaat Deneyimi</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
