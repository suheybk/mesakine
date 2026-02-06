import React from 'react';
import { Link } from 'react-router-dom';
import { User, Clock, Calendar, Share2, MessageSquare } from 'lucide-react';
import styles from '../styles/BlogPost.module.css';

const BlogPost = () => {
    return (
        <div className={styles.pageWrapper}>
            {/* Progress Bar (Optional - styling only) */}
            <div className={styles.progressBar}></div>

            <div className={`container ${styles.layout}`}>
                <main className={styles.article}>

                    {/* Hero */}
                    <header className={styles.header}>
                        <Link to="/blog" className={styles.backLink}>&larr; Blog'a Dön</Link>
                        <span className={styles.categoryBadge}>Tasarım</span>
                        <h1 className={styles.title}>Modern Pasif Ev Tasarımlarında 2026 Trendleri</h1>

                        <div className={styles.meta}>
                            <div className={styles.author}>
                                <div className={styles.avatar}></div>
                                <div>
                                    <span className={styles.authorName}>Editör Ekibi</span>
                                    <span className={styles.postDate}>5 Şubat 2026</span>
                                </div>
                            </div>
                            <div className={styles.readTime}>
                                <Clock size={16} /> 6 dk okuma
                            </div>
                            <div className={styles.share}>
                                <button className={styles.iconBtn}><Share2 size={18} /></button>
                            </div>
                        </div>

                        <div className={styles.heroImage} style={{ backgroundColor: '#A1887F' }}>
                            Görsel Alanı (1200x630)
                        </div>
                    </header>

                    {/* Content */}
                    <div className={styles.contentBody}>
                        <p className={styles.intro}>
                            Pasif evler artık sadece "kutu gibi" teknik yapılar olmaktan çıkıyor.
                            2026 yılı, estetik kaygıların enerji verimliliği ile kusursuzca harmanlandığı bir yıl oluyor.
                        </p>

                        {/* TOC for Mobile could go here */}

                        <h2 id="biophilic">Biyofilik Tasarımın Yükselişi</h2>
                        <p>
                            Doğal ışığın maksimize edildiği, iç ve dış mekan sınırlarının bulanıklaştığı tasarımlar ön planda.
                            Pasif ev standartları, büyük cam yüzeylerin doğru yönlendirilmesi ile bu trendi destekliyor.
                        </p>
                        <div className={styles.quote}>
                            "Ev, sadece içinde yaşanılan bir makine değil, doğanın bir uzantısı olmalıdır."
                        </div>

                        <h2 id="materials">Doğal Malzemeler</h2>
                        <p>
                            Karbon ayak izini düşürmek için ahşap karkas sistemler ve selüloz yalıtım malzemeleri betonun yerini alıyor.
                        </p>

                        <div className={styles.midCta}>
                            <h3>Bu yazı ilginizi çekti mi?</h3>
                            <p>Kendi projeniz için ücretsiz danışmanlık alın.</p>
                            <button className={styles.ctaBtn}>Görüşme Talep Et</button>
                        </div>

                        <h2 id="smart">Akıllı Entegrasyon</h2>
                        <p>
                            IoT cihazları, havalandırma sistemlerini (HRV) yaşam alışkanlıklarınıza göre optimize ediyor.
                            Artık eviniz, CO2 seviyesi yükseldiğinde otomatik olarak taze hava modunu artırıyor.
                        </p>
                    </div>

                    {/* Footer */}
                    <footer className={styles.footer}>
                        <div className={styles.tags}>
                            <span>#Mimari</span>
                            <span>#Trend2026</span>
                            <span>#Sürdürülebilirlik</span>
                        </div>

                        <div className={styles.authorBio}>
                            <div className={styles.avatarLarge}></div>
                            <div>
                                <h4>Editör Ekibi</h4>
                                <p>Mesakine içerik ekibi olarak, pasif ev dünyasındaki en son gelişmeleri sizin için derliyoruz.</p>
                            </div>
                        </div>

                        <div className={styles.commentsHeading}>
                            <MessageSquare size={20} /> Yorumlar (0)
                        </div>
                        <div className={styles.commentBox}>
                            <p>Henüz yorum yapılmamış. İlk yorumu siz yapın!</p>
                        </div>
                    </footer>

                </main>

                <aside className={styles.sidebar}>
                    <div className={styles.stickyToc}>
                        <h3>İçindekiler</h3>
                        <ul>
                            <li><a href="#biophilic">Biyofilik Tasarım</a></li>
                            <li><a href="#materials">Doğal Malzemeler</a></li>
                            <li><a href="#smart">Akıllı Entegrasyon</a></li>
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default BlogPost;
