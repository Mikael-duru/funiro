import "../App.css";
import Muggo from "../images/muggo.png";
import React, { useState } from "react";
import { PaystackButton } from "react-paystack";

const Checkout = () => {
  const publicKey = "pk_test_511b4f0272a7b917d3bb816b00416bd7a424804e";
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  // const amount = 10000;
  const [amount, setAmount] = useState("");

  const resetForm = () => {
    setEmail("");
    setName("");
    setAmount("");
    setNumber("");
  };

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      number,
    },
    publicKey,
    text: "Buy Now",
    onSuccess: ({ reference }) => {
      alert(
        `Your purchase was successful! Transaction reference: ${reference}`
      );
      resetForm();
    },
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };

  return (
    <div className="App">
      <div className="container m-auto">
        <div className="flex justify-around gap-4 bg-[#e89f71] py-20 shadow-md m-20 max-sm:flex-col max-sm:w-full max-sm:m-0 max-sm:p-10">
          <div className="text-white">
            <img className="rounded-2xl" alt="Muggo" src={Muggo} />
            <div className="mt-10">
              <h1 className="text-2xl font-bold mb-5">Muggo</h1>
              <p className="text-lg">Minimalist Stylish Mug</p>
            </div>
            <div>
              <h2 className="text-lg">Total</h2>
              <p>Rp 500.000</p>
              <p>Gabriel Heavenly</p>
            </div>
          </div>
          <div className="checkout">
            <div className="checkout-form">
              <div className="checkout-field max-w-xs mb-8">
                <label className="text-white text-xl font-bold">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="w-full bg-[#efc1a5] p-4 rounded-xl outline-none text-white shadow-md"
                />
              </div>
              <div className="checkout-field max-w-xs mb-8">
                <label className="text-white text-xl font-bold">Amount:</label>
                <input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Amount"
                  className="w-full bg-[#efc1a5] p-4 rounded-xl outline-none text-white shadow-md"
                />
              </div>
              <div className="checkout-field max-w-xs mb-8">
                <label className="text-white text-xl font-bold">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full bg-[#efc1a5] p-4 rounded-xl outline-none text-white shadow-md"
                />
              </div>
              <div className="checkout-field max-w-xs mb-8">
                <label className="text-white text-xl font-bold">Name:</label>
                <input
                  type="number"
                  id="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  placeholder="Number"
                  className="w-full bg-[#efc1a5] p-4 rounded-xl outline-none text-white shadow-md"
                />
              </div>
              <PaystackButton
                className="paystack-button bg-[#ef6108] w-full  h-14 text-white font-bold text-xl mt-10 hover:bg-[#f49332]"
                {...componentProps}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
