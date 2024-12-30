import Link from "next/link";
import { FunctionComponent } from "react";
interface PostProps {
    title:string,
    post:string,
}
 
const Post: FunctionComponent<PostProps> = (Props) => {
    return (    
        <div className="p-4 m-4 text-blue-900 bg-blue-100">
            <h1 className="p-4">{Props.title}</h1>
            <p>{Props.post}</p>
        </div>
    );
}

 
export default Post;