import { Link } from "react-router-dom";

const CardMovies = ({ movie }) => {
    const { id, title, abstract, image } = movie;

    return (
        <div className="card h-100 overflow-hidden rounded-5">
            <div className="position-relative d-flex flex-column h-100">
                <img
                    className="card-img-top flex-grow-1 object-fit-cover"
                    src={image || "https://placehold.co/334x344?text=No image"}
                    alt={`Immagine di ${title}`}
                />

                <div className="position-absolute bottom-0 start-0 w-100 bg-blur text-white p-3 rounded-bottom-5">
                    <h5 className="card-title mb-1">{title.toUpperCase()}</h5>
                    <p className="card-text">{abstract}</p>
                    <Link to={`/movies/${id}`} className="btn btn-primary rounded-5 w-100">Dettagli</Link>
                </div>
            </div>
        </div>
    )
}

export default CardMovies;