import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { HeroCard } from '../components';
import { useForm } from '../../hooks';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse((location.search));

    const heroes = getHeroesByName(q);

    const { onChangeForm, searchText } = useForm({ searchText: q });

    const onSubmit = (event) => {
        event.preventDefault();

        if (searchText.trim().length < 3) return;

        navigate(`?q=${searchText}`);
    }

    return (
        <>
            <h1>Search page</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={onSubmit}>
                        <input
                            className="form-control"
                            placeholder="Search a hero"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={onChangeForm}
                        />

                        <button type="submit" className="btn btn-outline-primary mt-2">
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    {
                        q.length === 0
                            ? <div className="alert alert-primary">Search a hero</div>
                            : (heroes.length === 0)
                            && <div className="alert alert-danger">No hero with <b>{q}</b></div>
                    }
                    {
                        heroes.map((hero) => (
                            <HeroCard key={hero.id} {...hero} />
                        ))
                    }
                </div>
            </div>
        </>
    );
}