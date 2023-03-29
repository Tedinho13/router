import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id: 0,
        title: "Czym jest teoria strun?",
        author: "Dariusz Skrzypczak",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio at nihil consequuntur officiis eius officia beatae, vitae cupiditate perferendis veritatis, nemo repellendus incidunt vero, aut atque dolorum dolores a consectetur tempora qui. Distinctio nostrum fugiat quis voluptas ab ratione iste, magni cupiditate eius iusto explicabo!"
    },
    {
        id: 1,
        title: "Czym jest paradoks Fermiego?",
        author: "Dariusz Skrzypczak",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio at nihil consequuntur officiis eius officia beatae, vitae cupiditate perferendis veritatis, nemo repellendus incidunt vero, aut atque dolorum dolores a consectetur tempora qui. Distinctio nostrum fugiat quis voluptas ab ratione iste, magni cupiditate eius iusto explicabo!"
    },
    {
        id: 2,
        title: "Ciemna energia i ciemna materia?",
        author: "Dariusz Skrzypczak",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio at nihil consequuntur officiis eius officia beatae, vitae cupiditate perferendis veritatis, nemo repellendus incidunt vero, aut atque dolorum dolores a consectetur tempora qui. Distinctio nostrum fugiat quis voluptas ab ratione iste, magni cupiditate eius iusto explicabo!"
    }
]

const HomePage = () => {
    const articlesToPage = articles.map(article => (
        <Article key={article.id} {...article} />
    ))
    return (
        <div className="home">
        <h1>Dzień dobry, oto lista artykułów!</h1>
        {articlesToPage}
        </div>
        
    )
}

export default HomePage