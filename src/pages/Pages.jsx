import { useEffect } from 'react';
import { setPopular } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import Home from './Home';

const Pages = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const dispatch = useDispatch();
    const popularData = useSelector( (state)=> 
        state.popularRecipe.popularData
    );

    useEffect( () => {
        getPopular();
    }, []);

    const getPopular = async() => {

        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=9`);

        const data = await api.json();
        // console.log(data.recipes);

        dispatch(setPopular(data.recipes));
    }
    console.log('dados: ',popularData);
    return(
        <div>
            {
                Object.keys(popularData).map( (key) => (
                    <div key={key}>
                        <h3>{popularData[key].title}</h3>
                    </div>
                ))
            }
        </div>
    );
}

export default Pages;