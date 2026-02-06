import React, { useState } from 'react';
import styles from '../styles/CTASection.module.css';

const CTASection = () => {
    const [form, setForm] = useState({ name: '', email: '', phone: '', landStatus: 'Arsam Var' });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form gönderildi! (Demo)');
    };

    return (
        <section id="contact" className={styles.section}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.textContent}>
                        <h2 className={styles.title}>Hayalinizdeki Evi Birlikte Tasarlayalım</h2>
                        <p className={styles.description}>
                            Pasif ev konforunu yaşamak ve enerji tasarrufu sağlamak için ilk adımı atın.
                            Ücretsiz ön görüşme için formu doldurun.
                        </p>
                        <ul className={styles.features}>
                            <li>✓ Ücretsiz 30 dk danışmanlık</li>
                            <li>✓ Arsa uygunluk değerlendirmesi</li>
                            <li>✓ Yaklaşık maliyet öngörüsü</li>
                        </ul>
                    </div>

                    <div className={styles.formContent}>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <h3 className={styles.formTitle}>Görüşme Talep Et</h3>

                            <div className={styles.inputGroup}>
                                <label>Ad Soyad</label>
                                <input type="text" placeholder="Adınız Soyadınız" required className={styles.input} />
                            </div>

                            <div className={styles.inputGroup}>
                                <label>E-posta</label>
                                <input type="email" placeholder="ornek@email.com" required className={styles.input} />
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Telefon</label>
                                <input type="tel" placeholder="0555 555 55 55" className={styles.input} />
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Arsa Durumu</label>
                                <select className={styles.select}>
                                    <option>Arsam Var</option>
                                    <option>Arsa Arıyorum</option>
                                    <option>Mevcut Binam Var (Tadilat)</option>
                                    <option>Diğer</option>
                                </select>
                            </div>

                            <button type="submit" className={styles.submitBtn}>
                                Gönder
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
