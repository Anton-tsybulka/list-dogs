import React, { useEffect } from 'react';
import { Carousel } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBreeds } from '../redux/actions/allBreedsActions';

const Home = () => {
    const allBreeds = useSelector((state) => state.breeds.data)
    const dispatch = useDispatch();
    console.log(allBreeds);

    useEffect(() => {
        dispatch(getAllBreeds());
    }, [dispatch]);

    const imagesForCarousel = allBreeds.map((item, id) => {
        return (
            <div key={id}>
                <img src={item} alt='dog' style={{margin: 'auto', height: '400px'}}/>
            </div>
        )
    });

    return (
        <Carousel autoplay>
            {imagesForCarousel}
        </Carousel>
    );
};

export default Home;