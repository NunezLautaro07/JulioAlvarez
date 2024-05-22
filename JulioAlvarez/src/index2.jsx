import React, { useState, useEffect } from 'react';

function Nav() {
    const [posts, setPosts] = useState([]);
    const [nombre, setNombre] = useState('');
    const [tema, setTema] = useState('');
    const [descripcion, setDescripcion] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000/podcast')
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((err) => console.log(err.message));
    }, []);

    const Borrar = (id) => {
        fetch(`http://localhost:3000/podcast/${id}`, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.message) {
                    setPosts(posts.filter(post => post.id !== id));
                } else {
                    console.error(data.error);
                }
            })
            .catch((err) => console.error(err));
    };

    const Enviar = (e) => {
        e.preventDefault();
        const newPodcast = { nombre, tema, descripcion };

        fetch('http://localhost:3000/podcast', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPodcast),
        })
            .then((response) => response.json())
            .then((data) => {
                setPosts([...posts, data]);
                setNombre('');
                setTema('');
                setDescripcion('');
            })
            .catch((err) => console.error(err));
    };

    return (
        <>
            {posts.map((post) => (
                <div key={post.id}>
                    <h2>Nombre: {post.nombre}</h2>
                    <p>Descripcion: {post.descripcion}</p>
                    <button onClick={() => Borrar(post.id)}>Delete</button>
                    <hr />
                </div>
            ))}
            <form onSubmit={Enviar}>
                <input
                    type="text"
                    placeholder="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="tema"
                    value={tema}
                    onChange={(e) => setTema(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Descripcion"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                />
                <button type="submit">Add Podcast</button>
            </form>
        </>
    );
}

export default Nav;
