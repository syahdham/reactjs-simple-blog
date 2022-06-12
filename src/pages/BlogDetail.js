import { useParams } from 'react-router';
import {useEffect, useState} from "react";

export default function BlogDetail() {

    const { id } = useParams();
    const [blog, setBlog] = useState({});
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false)

    useEffect(function () {
        getDetailBlog();
    }, [])

    async function getDetailBlog() {
        const req = await fetch(`https://api.spaceflightnewsapi.net/v3/blogs/${id}`);

        if(!req.ok) {
            setNotFound(true);
            return;
        }

        const res = await req.json();

        setBlog(res)
        setLoading(false);
    }

    if(notFound) return <h1>Data not found</h1>

    return (
      <>
          {loading && <h3><i>Loading ....</i></h3>}
          {!loading &&
            <>
                <h1>{blog.title}</h1>
                <img src={blog.imageUrl} width="200" alt={blog.title}/>
                <p>{blog.summary}</p>
            </>
          }
      </>
    );
}