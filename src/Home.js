import React from 'react';
import './Home.css'; 
import Product from './Product';
import Livre from './livre.jpg';
import Alexa1 from './alexa1.jpg';
import Alexa2 from './alexa2.png';
import Casque from './casque.jpg';
import Imprimante from './imprimante.jpg';
import Jeux from './jeux.jpg';

function Home() {
    return (
        <div className='home' >
           <div className="home__container" >
                <img 
                className="home__image"
                    src="https://cdn.shopify.com/s/files/1/1859/8979/articles/ecommerce-website-background-design_1024x1024.png?v=1519903360"
                    alt=""
                />

                <div className="home__row" >
                    <Product title="The lean startup" 
                    price={29.99} 
                    image={Livre}
                    rating={4}
                    />
                    <Product
                    id="49538094"
                    title="Kenwood kMix Stand Mixer for
                    Banking, Stylish Kitchen Mixer with
                    K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"

                    price={239.0}
                    rating={4}
                    image={Casque}
                    />
                </div>
 
                <div className="home__row" >
                   <Product
                   id="4903850"
                   title="Samsung nkjhufbk 49 Curved LED Gaming Monitor"
                   price={199.99}
                   rating={3}
                   image={Alexa1}
                   />

                   <Product
                   id="4903828"
                   title="Samsung nkjhufbk 49 Curved LED Gaming Monitor"
                   price={199.99}
                   rating={3}
                   image={Alexa2}
                   />

                   <Product
                   id="4903834"
                   title="Samsung nkjhufbk 49 Curved LED Gaming Monitor"
                   price={199.99}
                   rating={3}
                   image={Imprimante}
                   />

                </div>

                <div className="home__row" >
                   <Product
                   id="4903838"
                   title="Samsung nkjhufbk 49 Curved LED Gaming Monitor"
                   price={199.99}
                   rating={3}
                   image={Jeux}
                   />
                </div>
           </div>
        </div>
    )
}

export default Home;
