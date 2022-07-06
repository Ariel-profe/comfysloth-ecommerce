import React from 'react';
import {GiCompass, GiDiamondHard, GiStabbedNote} from 'react-icons/gi';

export const links = [
    {
        id: 1,
        name: 'home',
        path: '/',
    },
    {
        id: 2,
        name: 'about',
        path: '/about',
    },
    {
        id: 3,
        name: 'products',
        path: '/products',
    }
];

export const services = [
    {
        id: 1,
        icon: <GiCompass/>,
        title: 'mission',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        id: 2,
        icon: <GiDiamondHard/>,
        title: 'vision',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        id: 3,
        icon: <GiStabbedNote/>,
        title: 'history',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
];

export const products_url = 'https://course-api.com/react-store-products';

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;