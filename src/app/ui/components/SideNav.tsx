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
    return (<nav>
        {Props.links.map((item)=><Link className="p-4 text-blue:90" key={item.href} href={item.href}>{item.name}</Link>)}
    </nav>  );
}
 
export default Sample;