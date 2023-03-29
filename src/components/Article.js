import React from 'react';

const Article = ({title, author, content}) => {
    const styles = {
        marginTop: "30px"
    }
    return ( 
        <article style={styles}>
            <h3 style={{marginBottom: 15, textTransform: "uppercase"}}>{title}</h3>
            <span style={{fontSize:13}}>{author}</span>
            <p>{content}</p>
        </article>
     );
}

export default Article;