import React from 'react';
import Head from 'next/head';
// import MainHeader from '../MainHeader/MainHeader';
import Footer from '../Footer/Footer';
import SectionTracksWithFilters from '@/components/sections/SectionTracksWithFilters/SectionTracksWithFilters';
import HeroPageTitle from '../HeroPageTitle/HeroPageTitle';
import MainHeader from '../MainHeader/MainHeader';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <MainHeader />
                <HeroPageTitle />
                <SectionTracksWithFilters></SectionTracksWithFilters>
                {children}
            </main>
            <Footer></Footer>
        </>
    )
}

export default Layout;