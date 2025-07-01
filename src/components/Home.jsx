<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Cardpizza from './Cardpizza';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchPizzas();
  }, []);

=======
import React from 'react';
import Header from './Header';
import Cardpizza from './Cardpizza'; // ✅ Corregido: sin './components/' porque están en la misma carpeta
import 'bootstrap/dist/css/bootstrap.min.css';
import { pizzas } from './pizzas';

const Home = () => {
>>>>>>> 7c047546dc57cdaa5ba6f0c01eb1b0e6320080c3
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="col-md-4 mb-4">
              <Cardpizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
<<<<<<< HEAD
                desc={pizza.desc}
=======
>>>>>>> 7c047546dc57cdaa5ba6f0c01eb1b0e6320080c3
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Home;
=======
export default Home;
>>>>>>> 7c047546dc57cdaa5ba6f0c01eb1b0e6320080c3
