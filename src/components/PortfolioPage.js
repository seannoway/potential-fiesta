import React, { useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function PortfolioPage() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        } 
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
        <div className=''>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
            {renderPage()}
            <div className='foot'>
            <Footer />
            </div>
        </div>
    );
}