import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, FileText, BarChart3, CloudSun } from 'lucide-react';
import styles from '../styles/ServiceDetail.module.css';

const FeasibilityService = () => {
    return (
        <div className={styles.pageWrapper}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.breadcrumbs}>
                        <Link to="/">Ana Sayfa</Link> &gt; <Link to="/services">Hizmetler</Link> &gt; Fizibilite
                    </div>
                    <div className={styles.heroContent}>
                        <div>
                            <h1 className={styles.heroTitle}>Fizibilite Danışmanlığı</h1>
                            <p className={styles.heroSubtitle}>Yatırımınızı yapmadan önce doğru kararı verin. Arsanızın potansiyelini keşfedin.</p>
                        </div>
                        {/* Placeholder for drawing user visual */}
                        <div className={styles.heroVisual} style={{ overflow: 'hidden' }}>
                            <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop" alt="Architect Sketch" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Scope / What We Do */}
            <section className="section">
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: '3rem' }}>Ne Yapıyoruz?</h2>
                    <div className={styles.grid3}>
                        <div className={styles.featureCard}>
                            <CloudSun size={32} className={styles.icon} />
                            <h3>Arsa ve İklim Analizi</h3>
                            <p>Arsanızın yönelim, güneşlenme süresi ve yerel iklim verilerine göre pasif ev potansiyelini çıkarıyoruz.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <BarChart3 size={32} className={styles.icon} />
                            <h3>Maliyet-Fayda</h3>
                            <p>Standart inşaat ile pasif ev arasındaki ilk yatırım farkını ve geri dönüş süresini (ROI) hesaplıyoruz.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <FileText size={32} className={styles.icon} />
                            <h3>Detaylı Raporlama</h3>
                            <p>30+ sayfalık teknik rapor ve yol haritası ile projenizin önünü görmenizi sağlıyoruz.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who is it for? */}
            <section className={styles.targetAudience}>
                <div className="container">
                    <h2 className={styles.whiteTitle}>Kimler İçin?</h2>
                    <div className={styles.audienceGrid}>
                        <div className={styles.audienceItem}>"Arsa aldım, henüz projeye başlamadım."</div>
                        <div className={styles.audienceItem}>"Mevcut evimi dönüştürmek istiyorum."</div>
                        <div className={styles.audienceItem}>"Bütçem pasif ev için yeterli mi?"</div>
                        <div className={styles.audienceItem}>"Yatırımın geri dönüşünü merak ediyorum."</div>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="section">
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: '3rem' }}>Süreç Nasıl İşliyor?</h2>
                    <div className={styles.timeline}>
                        <div className={styles.timelineItem}>
                            <span className={styles.timeTag}>Hafta 1</span>
                            <h3>Arsa Ziyareti & Görüşme</h3>
                            <p>Sahayı yerinde inceliyor ve beklentilerinizi dinliyoruz.</p>
                        </div>
                        <div className={styles.timelineItem}>
                            <span className={styles.timeTag}>Hafta 2-3</span>
                            <h3>Analiz & Hesaplamalar</h3>
                            <p>PHPP ön verileri ve maliyet analizlerini çalışıyoruz.</p>
                        </div>
                        <div className={styles.timelineItem}>
                            <span className={styles.timeTag}>Hafta 4</span>
                            <h3>Sunum</h3>
                            <p>Rapor teslimi ve soru-cevap toplantısı.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className={styles.pricingSection}>
                <div className="container text-center">
                    <h2 style={{ marginBottom: '2rem' }}>Fiyatlandırma</h2>
                    <div className={styles.pricingGrid}>
                        <div className={styles.pricingCard}>
                            <h3>Temel Paket</h3>
                            <div className={styles.price}>75.000 TL</div>
                            <ul className={styles.packageList}>
                                <li>Isı ve İklim Analizi</li>
                                <li>Maliyet Tablosu</li>
                                <li>PDF Rapor</li>
                            </ul>
                            <button className={styles.selectBtn}>Seç</button>
                        </div>
                        <div className={`${styles.pricingCard} ${styles.featured}`}>
                            <div className={styles.popTag}>Popüler</div>
                            <h3>Plus Paket</h3>
                            <div className={styles.price}>120.000 TL</div>
                            <ul className={styles.packageList}>
                                <li>Her Şey Dahil (Temel)</li>
                                <li>3D Kütle Görselleştirme</li>
                                <li>Alternatif Senaryolar</li>
                            </ul>
                            <button className={styles.selectBtnPrimary}>Seç</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeasibilityService;
