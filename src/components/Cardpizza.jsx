import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import '../main.css'; // Asegúrate de importar el archivo CSS correspondiente

const Cardpizza = ({ name, price, ingredients, img, desc }) => {
=======
import '../main.css';// Asegúrate de importar el archivo CSS correspondiente

const Cardpizza = ({ name, price, ingredients, img }) => {
>>>>>>> 7c047546dc57cdaa5ba6f0c01eb1b0e6320080c3
  return (
    <div className="pizza">
      <div className="card">
        <img className="border rounded" src={img} alt={name} />
        <h2 className="text-start fs-3 m-2">{name}</h2>
        <hr />
<<<<<<< HEAD
        <p className="description">{desc}</p>
=======
>>>>>>> 7c047546dc57cdaa5ba6f0c01eb1b0e6320080c3
        <p>Ingredientes:</p>
        <ul className="ingredients-list">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <hr />
        <p className="price fs-4 fw-bold">Precio: ${price.toLocaleString()}</p>
      </div>
    </div>
  );
};

Cardpizza.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  img: PropTypes.string.isRequired,
<<<<<<< HEAD
  desc: PropTypes.string.isRequired,
};

export default Cardpizza;
=======
};

export default Cardpizza;


>>>>>>> 7c047546dc57cdaa5ba6f0c01eb1b0e6320080c3
