import React from 'react';
import SideNav from '@/app/ui/components/SideNav';
import { urlLink } from '../types';
import "../globals.css";
    
interface BlogLayoutProps {
    children: React.ReactNode;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children }) => {
    const links:urlLink[] = [{name:"about",href:"/blog/about"}]
    return (
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav links={links}/>
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
    );
};

export default BlogLayout;