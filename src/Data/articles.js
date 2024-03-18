
import flower_image from '../assets/flower.jpg'
import default_image from '../assets/default-stuff-cover.jpg'

import shoe1 from '../assets/shoes/chaussures-marche-urbaine-homme-pw-100-gris.avif'
import shoe2 from '../assets/shoes/chaussures-marche-urbaine-homme-pw-100-gris (2).avif'
import shoe3 from '../assets/shoes/chaussures-marche-urbaine-homme-pw-100-gris (3).avif'
import shoe4 from '../assets/shoes/chaussures-marche-urbaine-homme-pw-100-gris (4).avif'
import shoe5 from '../assets/shoes/chaussures-marche-urbaine-homme-pw-100-gris (5).avif'
import shoe6 from '../assets/shoes/chaussures-marche-urbaine-homme-pw-100-gris (6).avif'
import shoe7 from '../assets/shoes/chaussures-marche-urbaine-homme-pw-100-gris (7).avif'
import shoe8 from '../assets/shoes/chaussures-marche-urbaine-homme-pw-100-gris (8).avif'

export const articleList = [
    {
        id: 1,
        category: "Default",
        name: "article with 1 image",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        price: 16.50,
        images: [default_image],
    },
    {
        id: 2,
        category: "plant",
        name: "Flower",
        description: "Beautiful plant to have at home",
        price: 23,
        images: [flower_image],
    },
    {
        id: 3,
        category: "Shoes",
        name: "Chaussures marche urbaine homme PW 100 gris",
        description: "Confort et légèreté pour les sorties urbaines. Sa légèreté vous transportera lors de vos déplacements. Ses matériaux vous offriront souplesse et respirabilité durant vos journées, ainsi qu'un excellent rapport qualité-prix: c'est la PW100.",
        price: 13,
        images: [ shoe1, shoe2, shoe3, shoe4, shoe5, shoe6, shoe7, shoe8 ],
    }
]