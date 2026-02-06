import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Clock, User, ChevronRight } from 'lucide-react';
import styles from '../styles/Blog.module.css';

const categories = ['Tasarım', 'Malzeme', 'Teknoloji', 'Yasal', 'Projeler', 'Maliyet', 'DIY'];

const posts = [
    { id: 1, title: 'Isı Geri Kazanım Cihazları Nasıl Çalışır?', category: 'Teknoloji', date: '28 Ocak 2026', author: 'Merve Demir', readTime: '5 dk', imageColor: '#90A4AE', desc: 'Mekanik havalandırma sistemlerinin (HRV/ERV) çalışma prensipleri ve pasif evlerdeki kritik rolü.' },
    { id: 2, title: 'Türkiye\'de Enerji Kimlik Belgesi ve Yeni Yönetmelikler', category: 'Yasal', date: '15 Ocak 2026', author: 'Av. Can Yılmaz', readTime: '7 dk', imageColor: '#7986CB', desc: '2026 yılı itibariyle yürürlüğe giren yeni enerji verimliliği yasaları neleri değiştiriyor?' },
    { id: 3, title: 'Pasif Ev Maliyetleri: 2026 Analizi', category: 'Maliyet', date: '02 Ocak 2026', author: 'Ahmet Y.', readTime: '6 dk', imageColor: '#81C784', desc: 'Malzeme fiyatları, işçilik ve uzun vadeli tasarruf projeksiyonları.' },
    { id: 4, title: 'Yalıtım Malzemeleri Karşılaştırması', category: 'Malzeme', date: '20 Aralık 2025', author: 'Merve Demir', readTime: '8 dk', imageColor: '#FFCC80', desc: 'Taşyünü, EPS, XPS ve selüloz yalıtımın artıları ve eksileri.' },
    { id: 5, title: 'Kendi Şantiyeni Yönetmek: DIY İpuçları', category: 'DIY', date: '10 Aralık 2025', author: 'Mehmet S.', readTime: '10 dk', imageColor: '#E0E0E0', desc: 'Kendi evini yapanlar için kritik kontrol noktaları.' }
];

const Blog = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className={styles.pageWrapper}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.heroTitle}>Pasif Ev Blog</h1>
                    <p className={styles.heroSubtitle}>Enerji verimliliği, sürdürülebilir mimari ve pasif ev dünyasından haberler</p>
                    <div className={styles.searchBox}>
                        <input
                            type="text"
                            placeholder="Yazı ara..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className={styles.searchInput}
                        />
                        <button className={styles.searchBtn}><Search size={20} /></button>
                    </div>
                </div>
            </section>

            <div className="container">
                {/* Featured Post */}
                <div className={styles.featuredPost}>
                    <div className={styles.featuredImage} style={{ backgroundColor: '#A1887F' }}>
                        Görsel Alanı
                    </div>
                    <div className={styles.featuredContent}>
                        <span className={styles.badge}>Tasarım</span>
                        <h2 className={styles.featuredTitle}>Modern Pasif Ev Tasarımlarında 2026 Trendleri</h2>
                        <p className={styles.featuredDesc}>
                            Biofilik tasarım, doğal malzemelerin dönüşü ve akıllı ev entegrasyonları yeni nesil pasif evleri nasıl şekillendiriyor? Detaylı bir bakış.
                        </p>
                        <div className={styles.meta}>
                            <span><User size={16} /> Editör Ekibi</span>
                            <span><Clock size={16} /> 6 dk okuma</span>
                            <span>5 Şubat 2026</span>
                        </div>
                        <Link to="/blog/featured-post" className={styles.readMoreBtn}>Devamını Oku</Link>
                    </div>
                </div>

                {/* Filter */}
                <div className={styles.filterBar}>
                    {categories.map((cat, i) => (
                        <button key={i} className={styles.filterBtn}>{cat}</button>
                    ))}
                </div>

                <div className={styles.contentLayout}>
                    {/* Posts Grid */}
                    <main className={styles.postsGrid}>
                        {posts.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase())).map(post => (
                            <article key={post.id} className={styles.postCard}>
                                <div className={styles.cardImage} style={{ backgroundColor: post.imageColor }}></div>
                                <div className={styles.cardContent}>
                                    <div className={styles.cardHeader}>
                                        <span className={styles.cardBadge}>{post.category}</span>
                                        <span className={styles.cardDate}>{post.date}</span>
                                    </div>
                                    <h3 className={styles.cardTitle}>{post.title}</h3>
                                    <p className={styles.cardDesc}>{post.desc}</p>
                                    <Link to={`/blog/${post.id}`} className={styles.cardLink}>Oku <ChevronRight size={16} /></Link>
                                </div>
                            </article>
                        ))}
                    </main>

                    {/* Sidebar */}
                    <aside className={styles.sidebar}>
                        <div className={styles.sidebarWidget}>
                            <h3>Popüler Yazılar</h3>
                            <ul className={styles.popularList}>
                                <li><a href="#">Pasif Ev Maliyetleri: 2026 Analizi</a></li>
                                <li><a href="#">Isı Geri Kazanım Nedir?</a></li>
                                <li><a href="#">5 Adımda Sızdırmazlık Testi</a></li>
                            </ul>
                        </div>

                        <div className={styles.sidebarWidget}>
                            <h3>Bültene Abone Ol</h3>
                            <p className={styles.widgetText}>Haftalık pasif ev ipuçları e-postanızda.</p>
                            <input type="email" placeholder="E-posta adresiniz" className={styles.sidebarInput} />
                            <button className={styles.sidebarBtn}>Abone Ol</button>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default Blog;
