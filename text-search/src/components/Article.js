function Article({ title, body, id, index }) {
    return (
        <article className="w-2/3 pt-5 pb-5 border-b-[1px] border-black">
            <h2 className="text-xl mb-5 font-bold">{title}</h2>
            <p id={`art-${index}`}>{body}</p>
        </article>
    );
}

export default Article;
