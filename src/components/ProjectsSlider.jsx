import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import styles from '../styles/ProjectsSlider.module.css';

const projects = [
    {
        title: 'Okka Evi',
        category: 'Müstakil Konut',
        desc: 'Türkiye\'nin ilk sertifikalı pasif evi. Yıllık ısıtma enerjisi ihtiyacı 14 kWh/m².',
        imageColor: '#81C784', // Placeholder color
        review: 'Mesakine ekibi ile çalışmak harikaydı. Evimizde konforu yılın her günü hissediyoruz.',
        owner: 'Ahmet Y.'
    },
    {
        title: 'Yeşil Vadi Villaları',
        category: 'Toplu Konut',
        desc: '20 birimlik çevre dostu site projesi. Sıfır karbon hedefiyle tasarlandı.',
        imageColor: '#64B5F6', // Placeholder color
        review: 'Enerji faturalarımız inanılmaz düştü. Profesyonel danışmanlık hizmeti için teşekkürler.',
        owner: 'Zeynep K.'
    },
    {
        title: 'Güneş Kule',
        category: 'Ticari',
        desc: 'Ankara\'nın ilk pasif ofis binası projesi. Çalışan verimliliğini artıran iç hava kalitesi.',
        imageColor: '#FFB74D', // Placeholder color
        review: 'Ofisimizin havası değişti, resmen nefes alan bir binada çalışıyoruz.',
        owner: 'Mehmet S.'
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
                                <div className={styles.imageSide} style={{ backgroundColor: projects[current].imageColor }}>
                                    {/* Placeholder for project image */}
                                    <span className={styles.imagePlaceholderText}>{projects[current].title}</span>
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
