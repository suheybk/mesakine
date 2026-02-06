import React from 'react';
import HeroSection from '../components/HeroSection';
import TrustSection from '../components/TrustSection';
import StatsSection from '../components/StatsSection';
import ServicesSection from '../components/ServicesSection';
import WhyPassiveHouse from '../components/WhyPassiveHouse';
import ProcessTimeline from '../components/ProcessTimeline';
import ProjectsSlider from '../components/ProjectsSlider';
import BlogPreview from '../components/BlogPreview';
import CTASection from '../components/CTASection';

const Home = () => {
    return (
        <>
            <HeroSection />
            <TrustSection />
            <StatsSection />
            <ServicesSection />
            <WhyPassiveHouse />
            <ProcessTimeline />
            <ProjectsSlider />
            <BlogPreview />
            <CTASection />
        </>
    );
};

export default Home;
