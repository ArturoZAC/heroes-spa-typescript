import { Link } from "react-router-dom"
import { Hero } from "../interfaces/hero"

export const HeroCard = ( { id,superhero, alter_ego, characters, first_appearance } : Hero) => {

  const heroImageUrl = `/assets/heroes/${id}.jpg`

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={heroImageUrl} className="card-img" alt={superhero} />
          </div>

          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>

              {
                (alter_ego !== characters ) && ( <p>{ characters }</p>)
              }
              <p className="card-text">
                <small className="text-muted">{ first_appearance }</small>
              </p>

              <Link to={`/hero/${id}`}>
                Mas...
              </Link>

            </div>
          </div>


        </div>

      </div>

    </div>
  )
}
