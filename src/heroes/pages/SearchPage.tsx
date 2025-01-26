import { FormEvent } from "react";
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components/HeroCard"
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { getHeroByName } from "../helpers";

interface SearchForm {
  searchText: string;
}

export const SearchPage = () => {
  
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse( location.search );
  const heroes = getHeroByName( ''+q );

  const { searchText, onInputChange} = useForm<SearchForm>({
    searchText: ''+q,
  });

  const onSearchSubmit = (event: FormEvent) => {
    event.preventDefault();
    // if( searchText.trim().length <= 1) return;

    navigate(`?q=${ searchText }`);
    // onResetForm();
  }


  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">

        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={ onSearchSubmit }>
            <input 
              type="text" 
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />

            <button className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>

        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {
            ( q === '' )
              ?  <div className="alert alert-primary animate__animated animate__fadeIn">Search a Hero</div>
              :  ( heroes?.length === 0 )
                &&  <div className="alert alert-danger animate__animated animate__fadeIn">No hero with <b> { q } </b></div>
          }

          {
            heroes?.map( hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }

        </div>

      </div>


    </>
  )
}
