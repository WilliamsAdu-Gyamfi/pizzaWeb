import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

/*
const App = function () {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

const Pizza = function () {
  return (
    <div>
      <h1>Pizza</h1>
      <img src="pizzas/spinaci.jpg" alt="spinachi"></img>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
};

const Header = function () {
  return (
    <header className="header">
      {" "}
      <h1>AduTechk Pizza</h1>
    </header>
  );
};

const Menu = function () {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
};

const Footer = function () {
  
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 12;
  const closeHour = 22;
  if (hour >= openHour && hour <= closeHour) alert("We are open!!");
  else alert("Closed!");

  return <footer className="footer">WE ARE OPEN!</footer>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
*/

/*
const App = function () {
  return (
    <div>
      <Header />

      <Menu />
      <Footer />
    </div>
  );
};

const Header = function () {
  return (
    <header className="header">
      <h1>Pizza</h1>
    </header>
  );
};

const Menu = function () {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        photoName="pizzas/focaccia.jpg"
        alt="focaccia"
        price={10}
      />
      <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozarella"
        photoName="pizzas/margherita.jpg"
        alt="margherita"
        price={15}
      />
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        alt="spinaci"
        price={16}
      />
    </div>
  );
};

const Pizza = function (props) {
  console.log(props);
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name}></img>
      <div>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
};

const Footer = function () {
  return <footer className="footer">WE ARE OPEN!</footer>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
*/

// RENDERING LISTS
const App = function () {
  return (
    <div>
      <Header />

      <Menu />
      <Footer />
    </div>
  );
};

const Header = function () {
  return (
    <header className="header">
      <h1>Pizza</h1>
    </header>
  );
};

const Menu = function () {
  return (
    <div className="menu">
      <h2>Our Menu</h2>

      {/*
          THIS METHOD WORKS BUT NOT PROFESSIONAL
      <div>
        {pizzaData.map((pizza) => (
          <Pizza
            name={pizza.name}
            photoName={pizza.photoName}
            ingredients={pizza.ingredients}
          />
        ))}
        ,
      </div>
*/}

      {/*
      <Pizza
        name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        photoName="pizzas/focaccia.jpg"
        alt="focaccia"
        price={10}
      />
      <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozarella"
        photoName="pizzas/margherita.jpg"
        alt="margherita"
        price={15}
      />
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        alt="spinaci"
        price={16}
      />
      */}
    </div>
  );
};

const Pizza = function (props) {
  console.log(props);
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name}></img>
      <div>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
};

const Footer = function () {
  return <footer className="footer">WE ARE OPEN!</footer>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
