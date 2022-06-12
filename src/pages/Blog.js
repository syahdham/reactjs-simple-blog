import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function Blog() {

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(function () {
        getBlogs();
    }, []);

    async function getBlogs() {
        const req = await fetch('https://api.spaceflightnewsapi.net/v3/blogs');
        const res = await req.json();

        setBlogs(res);
        setLoading(false);
    }

    return (
        <>
            <h1>List Blog</h1>
            {loading && <h3><i>Loading ....</i></h3>}
            {!loading && blogs.map(function (blog) {
                return (
                    <div className="blog-list" key={blog.id}>
                        <img src={blog.imageUrl} width="200" alt={blog.title}/>
                        <article><Link to={`/blog/${blog.id}`}><h3>{blog.title}</h3></Link></article>
                        <hr />
                    </div>
                )
            })}
        </>
    );
}