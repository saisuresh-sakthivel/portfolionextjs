"use client";
import { FunctionComponent } from 'react';
import { clsx } from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface urlLink {
    href:string,
    name:string
}

interface SampleProps {
   links:urlLink[]
}
 
const Sample: FunctionComponent<SampleProps> = (Props) => {
    const pathname = usePathname();
    return (<nav className='flex flex-col'>
        {Props.links.map((item)=><Link className={clsx("hover:bg-green-100 hover:text-red-500 text-blue:90 bg-blue-100 border-1 mt-2 mb-2 ml-2 p-4 text-blue-900",{"bg-green-100":item.href == pathname})} key={item.href} href={item.href}>{item.name}</Link>)}
    </nav>  );
}
 
export default Sample;