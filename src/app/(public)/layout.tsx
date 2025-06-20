import Footer from '@/components/public/Footer';
import Navbar from '@/components/public/Navbar';
import * as React from 'react';

interface IPublicLayoutProps {
    children: React.ReactNode
}

const PublicLayout: React.FunctionComponent<IPublicLayoutProps> = (props) => {
    return <>
        <Navbar />
        {props.children}<Footer /></>;

};

export default PublicLayout;
