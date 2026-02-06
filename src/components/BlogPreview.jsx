import React from 'react';
import styles from '../styles/BlogPreview.module.css';

const posts = [
    {
        category: 'Tasarım',
        title: 'Modern Pasif Ev Tasarımlarında 2026 Trendleri',
        date: '5 Şubat 2026',
        imageColor: '#A1887F'
    },
    {
        category: 'Teknoloji',
        title: 'Isı Geri Kazanım Cihazları Nasıl Çalışır?',
        date: '28 Ocak 2026',
        imageColor: '#90A4AE'
    },
    {
        category: 'Yasal',
        title: 'Türkiye\'de Enerji Kimlik Belgesi ve Yeni Yönetmelikler',
        date: '15 Ocak 2026',
        imageColor: '#7986CB'
    }
];

const BlogPreview = () => {
    return (
        <section id="blog" className="section">
            <div className="container">
                <div className="text-center" style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Blog & Haberler</h2>
                    <p style={{ color: 'var(--color-text-light)' }}>Pasif ev dünyasından güncel bilgiler.</p>
                </div>

                <div className={styles.grid}>
                    {posts.map((post, index) => (
                        <article key={index} className={styles.card}>
                            <div className={styles.image} style={{ backgroundColor: post.imageColor }}>
                                <span className={styles.categoryBadge}>{post.category}</span>
                            </div>
                            <div className={styles.content}>
                                <span className={styles.date}>{post.date}</span>
                                <h3 className={styles.title}>{post.title}</h3>
                                <a href="#" className={styles.readMore}>Devamını Oku &rarr;</a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPreview;
