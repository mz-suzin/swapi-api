import React from 'react';



const Card = ({ name, height, mass, birthYear }) => {
    const image = chooseImage(name);
    
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='star_wars_image' src={image} width='400' height='400' />
            <div>
                <h2>{name}</h2>
                <p>Height: {height}cm</p>
                <p>Mass: {mass}kg</p>
                <p>Birth Year: {birthYear}</p>
            </div>
        </div>
    );
}

const chooseImage = (person) => {
    let img = '';
    switch(person){
        case 'Luke Skywalker':
            img = 'https://image.pngaaa.com/270/1255270-middle.png';
            break;
        case 'C-3PO':
            img = 'https://w7.pngwing.com/pngs/780/725/png-transparent-c-3po-r2-d2-star-wars-celebration-cartoon-r2d2-comics-comic-book-fictional-character.png';
            break;
        case 'R2-D2':
            img = 'https://www.pinpng.com/pngs/m/87-879889_r2d2-desenho-png-star-wars-cartoon-r2d2-transparent.png';
            break;
        case 'Darth Vader':
            img = 'https://img.joomcdn.net/7f7f7ee9002d2b36c48d35cff5fc4cde6b73f7dd_original.jpeg';
            break;
        case 'Yoda':
            img = 'https://img.favpng.com/11/5/25/yoda-sticker-telegram-makhluk-vkontakte-png-favpng-2mn3rehB9Pcxx37Yq0CJZbgy5.jpg';
            break;
        case 'Chewbacca':
            img = 'https://i.pinimg.com/originals/2c/b1/1f/2cb11f0d373f22a4e9bb08030b6b951d.jpg';
            break;
        case 'Obi-Wan Kenobi':
            img = 'https://i.pinimg.com/564x/1d/25/12/1d251259f4fbad4c7496bc014927dfc1.jpg';
            break;
        case 'Anakin Skywalker':
            img = 'https://www.kindpng.com/picc/m/135-1356601_anakin-skywalker-luke-skywalker-star-wars-ig-88.png';
            break;
    }
    return img;
}

export default Card;