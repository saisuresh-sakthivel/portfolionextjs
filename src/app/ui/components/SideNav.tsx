import { FunctionComponent } from 'react';
import Link from 'next/link';

interface urlLink {
    href:string,
    name:string
}

interface SampleProps {
   links:urlLink[]
}
 
const Sample: FunctionComponent<SampleProps> = (Props) => {
    return (<nav className='p-4 border-2'>
        {Props.links.map((item)=><Link key={item.href} href={item.href}>{item.name}</Link>)}
    </nav>  );
}
 
export default Sample;