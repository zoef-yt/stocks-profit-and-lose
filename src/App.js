import "./styles.css";
import React, { useState } from "react";
var initialPrice = 0;
var quantity = 0;
var currentPrice = 0;
export default function App() {
  console.log(initialPrice);
  console.log(currentPrice);
  const [message, setMessage] = useState("");
  const [pcolor, setpcolor] = useState("black");
  function currentPriceChangesHandler() {
    if (
      initialPrice === 0 ||
      initialPrice === undefined ||
      initialPrice === "" ||
      initialPrice < 0
    ) {
      setpcolor("red");
      setMessage("Initial price cannot be empty or less than One");
    } else if (
      quantity === 0 ||
      quantity === undefined ||
      quantity === "" ||
      quantity < 0
    ) {
      console.log(quantity);
      setpcolor("red");
      setMessage("quantity cannot be empty or less than zero");
    } else {
      if (Number(currentPrice) > Number(initialPrice)) {
        console.log(initialPrice);
        var profit = (currentPrice - initialPrice) * quantity;
        var profitPercentage = (
          ((profit / initialPrice) * 100) /
          quantity
        ).toFixed(2);
        setpcolor("green");
        setMessage(
          "😎 Congratulations! You made a good choice. You've made a profit of " +
            profit +
            " and profit percentage is " +
            profitPercentage +
            "% 😎"
        );
      } else if (Number(initialPrice) > Number(currentPrice)) {
        var loss = (initialPrice - currentPrice) * quantity;
        var lossPercentage = (((loss / initialPrice) * 100) / quantity).toFixed(
          2
        );
        setpcolor("red");

        setMessage(
          "😔Welp! Sorry buddy but you are at a loss of " +
            loss +
            " and loss percentage is " +
            lossPercentage +
            "% 😔"
        );
      } else {
        setpcolor("black");
        setMessage("There is not enought movement here!");
      }
    }
  }
  return (
    <div className="App">
      <nav className="nav-container navigation">
        <div className="nav-brand">Stocks</div>
        <ul className="list-non-bullet nav-pills list-on-one-line">
          <li className="list-item-inline ">
            <a className="link" href="https://zoef-shaikh.netlify.app/">
              {" "}
              Home{" "}
            </a>
          </li>
          <li className="list-item-inline ">
            <a
              className="link"
              href="https://zoef-shaikh.netlify.app/projects.html"
            >
              {" "}
              Projects{" "}
            </a>
          </li>
          <li className="list-item-inline">
            <a
              className="link"
              href="https://zoef-shaikh.netlify.app/blog.html"
            >
              {" "}
              blog{" "}
            </a>
          </li>
        </ul>
      </nav>

      <div className="container">
        <h1>Profit or Loss</h1>
        <label className="labels">Initial Price:</label>
        <input
          className="input"
          type="number"
          name="InitialPrice"
          id="InitialPrice"
          placeholder="Initial Price"
          onChange={(e) => {
            console.log(e.target.value);
            initialPrice = Number(e.target.value);
          }}
        />
        <label className="labels">Quantity Of Stocks</label>
        <input
          className="input"
          type="number"
          name="Quantity"
          id="Quantity"
          placeholder="Quantity"
          onChange={(e) => {
            console.log(e.target.value);
            quantity = Number(e.target.value);
          }}
        />

        <label className="labels">Current Price</label>
        <input
          className="input"
          type="number"
          placeholder="Current Price"
          onChange={(e) => {
            console.log(e.target.value);
            currentPrice = Number(e.target.value);
          }}
        />
        <input
          id="submit"
          type="submit"
          value="Check Now"
          onClick={currentPriceChangesHandler}
        />
        <p style={{ color: pcolor, fontWeight: "bold" }}>{message}</p>
      </div>

      <footer className="footer">
        <div className="footer-heading">social media presence</div>
        <ul className="social-links list-non-bullet list-on-one-line">
          <li className="list-item-inline">
            <a className="link" href="https://github.com/zoef-yt">
              {" "}
              Github{" "}
            </a>
          </li>
          <li className="list-item-inline">
            <a className="link" href="https://twitter.com/zoef_yt">
              {" "}
              Twitter{" "}
            </a>
          </li>
          <li className="list-item-inline">
            <a
              className="link"
              href="https://www.linkedin.com/in/zoef-shaikh-279340201/"
            >
              {" "}
              Linkedin{" "}
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
