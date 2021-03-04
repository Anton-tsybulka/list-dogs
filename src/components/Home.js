import React, { useEffect } from 'react';
import { Carousel, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBreeds } from '../redux/actions/allBreedsActions';

const Home = () => {
    const allBreeds = useSelector((state) => state.breeds.data)
    const dispatch = useDispatch();
    console.log(allBreeds);

    useEffect(() => {
        dispatch(getAllBreeds());
    }, [dispatch]);

    const onClick = () => {
        dispatch(getAllBreeds());
    };

    const imagesForCarousel = allBreeds.map((item, id) => {
        return (
            <div key={id}>
                <img src={item} alt='dog' style={{margin: 'auto', height: '580px'}}/>
            </div>
        )
    });

    return (
        <>
            <h2 style={{textAlign: 'center', marginTop: '5em'}}>
                If you want to see other photos, then click the button
            </h2>
            <Button 
                type="primary"
                onClick={() => onClick()} 
                style={{margin: '1em 47% 5em'}}>
                Click me
            </Button>            
            <Carousel autoplay>
                {imagesForCarousel}
            </Carousel>
        </>
    );
};

export default Home;