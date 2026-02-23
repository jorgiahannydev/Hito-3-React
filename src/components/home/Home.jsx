import Header from '../layout/Header';
import CardPizza from './CardPizza';
import { pizzas } from '../../data/pizzas';

const Home = () => {
  return (
    <main>
      <Header />
      <section className="container my-5 h-100">
        <h2 className="text-center mb-4">Nuestras Pizzas</h2>
        <div className="row g-4">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="col-12 col-md-6 col-lg-4">
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
