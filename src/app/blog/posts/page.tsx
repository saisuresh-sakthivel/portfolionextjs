import postdata from '../postdata.json';
import Post from '@/app/ui/components/Post';
import { FunctionComponent } from 'react';
 
const Page: FunctionComponent = () => {
    return (
        <div className='p-4 flex flex-col'>
            {postdata.map((item) => <Post key={item.id} title={item.title} post={item.post} />)}
        </div>
    );
}
 
export default Page;