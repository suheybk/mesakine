import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import styles from '../styles/ProjectsSlider.module.css';

const projects = [
    {
        id: 1,
        title: "Bodrum Taş Ev Projesi",
        category: "Müstakil Konut",
        imageColor: "#8D6E63",
        imageUrl: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=800&auto=format&fit=crop",
        desc: "Geleneksel mimariyle modern pasif ev standartlarının buluştuğu, yıllık 12 kWh/m² ısıtma enerjisi tüketen taş ev.",
        review: "Yazın klima kullanmadan serin bir evde yaşamak inanılmaz. Mesakine ekibi her detayı düşündü.",
        owner: "Canan & Mehmet T."
    },
    {
        id: 2,
        title: "Sapanca Göl Evi",
        category: "Ahşap Yapı",
        imageColor: "#5D4037",
        imageUrl: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=800&auto=format&fit=crop",
        desc: "Doğayla iç içe, kendi enerjisini üreten ve karbon nötr olarak tasarlanan ahşap karkas yapı.",
        review: "Kışın en soğuk günlerinde bile evin sıcaklığı sabit. Enerji faturası derdimiz bitti.",
        owner: "Ali Rıza B."
    },
    {
        id: 3,
        title: "Zekeriyaköy Modern Villa",
        category: "Müstakil Konut",
        imageColor: "#455A64",
        imageUrl: "https://images.unsplash.com/photo-1600596542815-22b48533d3be?q=80&w=800&auto=format&fit=crop",
        desc: "Minimalist tasarım, geniş cam yüzeyler ve maksimum konfor. Sertifikalı Premium Pasif Ev.",
        review: "Hem estetik hem de teknik olarak kusursuz bir iş çıkardılar. Teşekkürler.",
        owner: "Selin Y."
    }
];

const ProjectsSlider = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === projects.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? projects.length - 1 : current - 1);
    };

    return (
        <section id="projects" className={`section ${styles.section}`}>
            <div className="container">
                <h2 className="text-center" style={{ marginBottom: '3rem', fontSize: '2.5rem' }}>Projelerimiz & Referanslar</h2>

                <div className={styles.sliderContainer}>
                    <button className={styles.navBtn} onClick={prevSlide} aria-label="Previous Project">
                        <ChevronLeft size={30} />
                    </button>

                    <div className={styles.slideWrapper}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className={styles.slideContent}
                            >
                                <div className={styles.imageSide}>
                                    <img src={projects[current].imageUrl} alt={projects[current].title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>

                                <div className={styles.infoSide}>
                                    <div className={styles.category}>{projects[current].category}</div>
                                    <h3 className={styles.projectTitle}>{projects[current].title}</h3>
                                    <p className={styles.projectDesc}>{projects[current].desc}</p>

                                    <div className={styles.testimonial}>
                                        <div className={styles.stars}>
                                            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#FFC107" color="#FFC107" />)}
                                        </div>
                                        <p className={styles.review}>"{projects[current].review}"</p>
                                        <span className={styles.owner}>— {projects[current].owner}</span>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button className={styles.navBtn} onClick={nextSlide} aria-label="Next Project">
                        <ChevronRight size={30} />
                    </button>
                </div>

                <div className={styles.dots}>
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${index === current ? styles.activeDot : ''}`}
                            onClick={() => setCurrent(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSlider;
