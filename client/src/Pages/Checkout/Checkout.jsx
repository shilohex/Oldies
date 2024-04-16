import React from "react";
import "./Checkout.css";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import logo from "../../assets/oldieslogo.png";
import { Link } from "react-router-dom";
import checkout from "../";

function checkout() {
  return (
    <div>
      <div className="main">
        <Link to={"/"}>
          {" "}
          <img src={logo} className="w-[6rem]" alt="" />
        </Link>

        <div id="text2" className="dark:md:hover:text-pry">
          <Link to={"/signup"}>
            <p> Sign Up</p>
          </Link>
        </div>
      </div>

      <section className="box">
        <div id="innertxt">
          <p>Home</p>
          <p>{">"}</p>
          <div id="cart1">
            <p>Cart</p>
            <span id="Cart">2</span>
          </div>
        </div>
      </section>

      <section>
        <div className="text">
          <p>Product</p>
          <div>
            <p>Unit price</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>
        </div>
      </section>

      <section>
        <div className="line">
          <hr classNamen="edit" />
        </div>
      </section>

      <section>
        <div className="case1">
          <div className="case11">
            <img src="./res/phonecase3.jpg" alt="" />
            <p>Tom and Jerry weird cover</p>

            <div class="like">
              <img className="heart" src="./res/heart-regular.svg" alt="" />
            </div>
          </div>

          <div className="case12">
            <p>
              <span className="price"> 50 </span>
            </p>

            <div>
              <button type="submit" class="inc">
                +
              </button>
              <span className="qty">1</span>
              <button type="submit" class="dec">
                -
              </button>
            </div>
            <p>
              $<span className="total">50</span>
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="line2">
          <hr className="edit2" />
        </div>
      </section>

      <section>
        <div className="case1">
          <div className="case11">
            <img src="./res/tomandjerry2.jpg" alt="" />
            <p>Tom and Jerry run case</p>
            <div className="like">
              <img className="heart" src="./res/heart-regular.svg" alt="" />
            </div>
          </div>

          <div className="case12">
            <p>
              <span className="price"> 35 </span>
            </p>

            <div>
              <button type="submit" className="inc">
                +
              </button>
              <span id="qty1" className="qty">
                1
              </span>
              <button type="submit" className="dec">
                -
              </button>
            </div>
            <p id="total1">
              $<span className="total">35</span>
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="line2">
          <hr className="edit2" />
        </div>
      </section>

      <section>
        <div className="subtotal">
          <div>
            <p>Subtotal</p>
          </div>
          <div>
            <p className="subtotal-value" id="subtotal">
              $85
            </p>
          </div>
        </div>

        <div className="subtotal2">
          <div>
            <p>Shipping</p>
          </div>
          <div>
            <p className="subtotal-value">
              $<span id="shipping">10</span>
            </p>
          </div>
        </div>

        <div className="subtotal3">
          <div>
            <p>Tax</p>
          </div>
          <div>
            <p className="subtotal-value" id="tax">
              $5
            </p>
          </div>
        </div>

        <div className="parant">
          <div className="lastsub">
            <div>
              <p>Total</p>
            </div>
            <div>
              <p className="subtotal-value" id="total">
                $100
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="checkout">
          <div>
            <p>CHECKOUT</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default checkout;
