import { useEffect, useState } from "react";
import axios from "axios";
import CardMovie from "../components/CardMovie";

const Movies = () => {

    const [dataMovies, setDataMovies] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/movies").then(resp => {

            setDataMovies(resp.data.data)
        })
    }, [])

    return (
        <main>
            <section className="container py-5">
                <h1 className="text-center mb-4">Film</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                    {dataMovies.map((curMovie) => (
                        <div key={curMovie.id} className="col">

                           <CardMovie 
                           movie={curMovie}
                           />
                            
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Movies;