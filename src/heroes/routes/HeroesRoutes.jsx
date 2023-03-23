import { Routes, Route, Navigate } from 'react-router-dom';

import { Navbar } from '../../ui/components';
import { MarvelPage, DcPage, SearchPage, HeroPage } from '../pages';

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="content">
                <Routes>
                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="dc" element={<DcPage />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="hero/:id" element={<HeroPage />} />

                    <Route path='/' element={<Navigate to="/marvel" />} />
                </Routes>
            </div>
        </>
    );
}