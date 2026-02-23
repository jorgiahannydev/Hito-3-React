import { useState } from 'react';
import { pizzaCart } from '../../data/pizzas';
import { formatPrice } from '../../utils/formatPrice';

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const handleIncrease = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCart((prev) => {
      const item = prev.find((p) => p.id === id);
      if (item.count <= 1) {
        return prev.filter((p) => p.id !== id);
      }
      return prev.map((p) =>
        p.id === id ? { ...p, count: p.count - 1 } : p
      );
    });
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <main className="container my-5">
      <h2 className="mb-4">Carrito de compras</h2>

      {cart.length === 0 ? (
        <p className="text-muted">Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="row">
            <div className="col-12 col-lg-8">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="card mb-3 d-flex flex-row align-items-center"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="rounded-start"
                    style={{
                      width: '120px',
                      height: '100px',
                      objectFit: 'cover',
                    }}
                  />
                  <div className="card-body flex-grow-1 d-flex justify-content-between align-items-center flex-wrap gap-2">
                    <div>
                      <h5 className="card-title mb-1">{item.name}</h5>
                      <p className="card-text text-muted mb-0">
                        ${formatPrice(item.price)}
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => handleDecrease(item.id)}
                        aria-label="Disminuir cantidad"
                      >
                        −
                      </button>
                      <span className="badge bg-secondary fs-6">
                        {item.count}
                      </span>
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => handleIncrease(item.id)}
                        aria-label="Aumentar cantidad"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-12 col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Total de la compra</h5>
                  <p className="fs-4 fw-bold text-primary mb-4">
                    ${formatPrice(total)}
                  </p>
                  <button className="btn btn-primary w-100">
                    Pagar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default Cart;
