import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import styles from '../styles/PassiveHouseGuide.module.css';

const PassiveHouseGuide = () => {
    const [activeTab, setActiveTab] = useState('summary');
    const [squareMeters, setSquareMeters] = useState(150);

    // Cost Calculation Logic (Demo)
    const standardCost = squareMeters * 35000; // 35k TL/m2
    const passiveCost = squareMeters * 42000; // ~20% more
    const energySavingsYearly = (squareMeters * 150 * 5) - (squareMeters * 15 * 5); // Rough assumption per kWh cost
    const paybackYears = Math.round((passiveCost - standardCost) / energySavingsYearly);

    // FAQ Data
    const faqs = [
        { q: "Pasif ev ile ahşap ev aynı mı?", a: "Hayır. Pasif ev bir inşaat standardıdır, yapı malzemesinden bağımsızdır. Betonarme, çelik veya ahşap yapılabilir." },
        { q: "Türkiye iklimine uygun mu?", a: "Kesinlikle. Pasif ev ilkeleri hem ısıtma hem soğutma için geçerlidir. Özellikle sıcak bölgelerde soğutma tasarrufu muazzamdır." },
        { q: "Pencere açabilir miyim?", a: "Evet, istediğiniz zaman açabilirsiniz. Ancak mekanik havalandırma sayesinde temiz hava için pencere açmaya mecbur kalmazsınız." },
    ];

    return (
        <div className={styles.pageWrapper}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.breadcrumbs}>Ana Sayfa &gt; Pasif Ev Nedir?</div>
                    <h1 className={styles.heroTitle}>Pasif Ev Nedir? <span className={styles.yearBadge}>2026 Kapsamlı Rehber</span></h1>
                    <p className={styles.heroSubtitle}>Geleceğin evlerini bugünden keşfedin. Konforlu, sağlıklı ve tasarruflu.</p>
                </div>
            </section>

            <div className={`container ${styles.contentGrid}`}>
                {/* Sticky Sidebar */}
                <aside className={styles.sidebar}>
                    <nav className={styles.toc}>
                        <h3>İçindekiler</h3>
                        <ul>
                            <li><a href="#definition">Pasif Ev Tanımı</a></li>
                            <li><a href="#how-it-works">Nasıl Çalışır?</a></li>
                            <li><a href="#principles">5 Temel Prensip</a></li>
                            <li><a href="#certificates">Sertifika Seviyeleri</a></li>
                            <li><a href="#pros-cons">Avantajlar & Dezavantajlar</a></li>
                            <li><a href="#cost-analysis">Maliyet Analizi</a></li>
                            <li><a href="#faq">Sıkça Sorulan Sorular</a></li>
                        </ul>
                        <div className={styles.sidebarCta}>
                            <h4>Eviniz Uygun mu?</h4>
                            <button className={styles.ctaButtonSmall}>Ücretsiz Fizibilite</button>
                        </div>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className={styles.mainContent}>

                    {/* Section 1: Definition */}
                    <section id="definition" className={styles.section}>
                        <h2>Pasif Ev Nedir?</h2>
                        <div className={styles.infographicBox} style={{ background: 'white', border: '1px solid #eee' }}>
                            <img src="/images/pasif-ev-dagram.png" alt="Pasif Ev Diyagramı" style={{ width: '100%', maxHeight: '400px', objectFit: 'contain' }} />
                        </div>
                        <p className={styles.text}>
                            Pasif Ev (Passive House), dünyadaki en yüksek enerji verimliliği standartlarından biridir.
                            Temel mantığı, binanın ısıtma ve soğutma için harcadığı enerjiyi minimize etmek (yılda 15 kWh/m² altı)
                            ve bunu yaparken iç mekan konforunu maksimize etmektir.
                        </p>
                    </section>

                    {/* Section 2: How It Works */}
                    <section id="how-it-works" className={styles.section}>
                        <h2>Nasıl Çalışır?</h2>
                        <p className={styles.text}>
                            Pasif evler, dış hava koşullarından bağımsız olarak iç sıcaklığı sabit tutar.
                            Bunu "termos" mantığına benzetebilirsiniz: İçerideki ısıyı korur (veya dışarıdaki sıcağın girmesini engeller).
                        </p>
                        <ul className={styles.featureList}>
                            <li><strong>Süper Yalıtım:</strong> Isı kaybını önleyen kalın yalıtım katmanı.</li>
                            <li><strong>Üçlü Camlar:</strong> Soğuk/sıcak geçişini engelleyen özel pencereler.</li>
                            <li><strong>Hava Sızdırmazlık:</strong> Kontrolsüz hava giriş çıkışının engellenmesi.</li>
                        </ul>
                    </section>

                    {/* Section 3: 5 Principles */}
                    <section id="principles" className={styles.section}>
                        <h2>5 Temel Prensip</h2>
                        <div className={styles.principlesGrid}>
                            {['Sürekli Yalıtım', 'Yüksek Performanslı Camlar', 'Hava Sızdırmazlık', 'Isı Geri Kazanım', 'Isı Köprüsü Yok'].map((item, i) => (
                                <div key={i} className={styles.principleCard}>
                                    <span className={styles.cardIndex}>{i + 1}</span>
                                    <h4>{item}</h4>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 4: Certificates */}
                    <section id="certificates" className={styles.section}>
                        <h2>Sertifika Seviyeleri</h2>
                        <table className={styles.comparisonTable}>
                            <thead>
                                <tr>
                                    <th>Özellik</th>
                                    <th>Classic</th>
                                    <th>Plus</th>
                                    <th>Premium</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Isıtma Enerjisi</td>
                                    <td>≤15 kWh/m²</td>
                                    <td>≤15 kWh/m²</td>
                                    <td>≤15 kWh/m²</td>
                                </tr>
                                <tr>
                                    <td>Yenilenebilir Enerji</td>
                                    <td>-</td>
                                    <td>≥60 kWh/m²</td>
                                    <td>≥120 kWh/m²</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    {/* Section 5: Cost Analysis (Interactive) */}
                    <section id="cost-analysis" className={styles.section}>
                        <h2>Maliyet Analizi (Demo)</h2>
                        <div className={styles.calculator}>
                            <label>Villa Büyüklüğü (m²): {squareMeters}</label>
                            <input
                                type="range"
                                min="100"
                                max="400"
                                value={squareMeters}
                                onChange={(e) => setSquareMeters(Number(e.target.value))}
                                className={styles.rangeInput}
                            />

                            <div className={styles.resultsGrid}>
                                <div className={styles.resultItem}>
                                    <span>Standart Maliyet</span>
                                    <strong>{standardCost.toLocaleString('tr-TR')} TL</strong>
                                </div>
                                <div className={styles.resultItem}>
                                    <span>Pasif Ev Maliyeti</span>
                                    <strong>{passiveCost.toLocaleString('tr-TR')} TL</strong>
                                </div>
                                <div className={`${styles.resultItem} ${styles.highlight}`}>
                                    <span>Yıllık Tasarruf</span>
                                    <strong>{energySavingsYearly.toLocaleString('tr-TR')} TL</strong>
                                </div>
                            </div>
                            <p className={styles.paybackNote}>Tahmini Geri Ödeme: <strong>{paybackYears} Yıl</strong></p>
                        </div>
                    </section>

                    {/* Section 6: FAQ */}
                    <section id="faq" className={styles.section}>
                        <h2>Sıkça Sorulan Sorular</h2>
                        <div className={styles.faqList}>
                            {faqs.map((faq, i) => (
                                <details key={i} className={styles.faqItem}>
                                    <summary>{faq.q}</summary>
                                    <p>{faq.a}</p>
                                </details>
                            ))}
                        </div>
                    </section>

                </main>
            </div>

            {/* Final CTA */}
            <section className={styles.finalCta}>
                <div className="container text-center">
                    <h2>Eviniz Pasif Ev Olabilir mi?</h2>
                    <button className={styles.ctaButtonLarge}>Ücretsiz Fizibilite Talebi</button>
                </div>
            </section>
        </div>
    );
};

export default PassiveHouseGuide;
