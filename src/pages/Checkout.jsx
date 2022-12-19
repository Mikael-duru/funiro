import "../App.css";
import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import PayNow from "../images/PayNow.jpg";

const Checkout = () => {
  const publicKey = "pk_test_511b4f0272a7b917d3bb816b00416bd7a424804e";
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  // const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");

  const resetForm = () => {
    setEmail("");
    setName("");
    setAmount("");
    // setNumber("");
    setAddress("");
  };

  const componentProps = {
    email,
    address,
    amount,
    metadata: {
      name,
      // number,
    },
    publicKey,
    text: "Buy Now",
    onSuccess: ({ reference }) => {
      alert(
        `Your purchase was successful! Transaction reference: ${reference}`
      );
      resetForm();
    },
    onClose: () => alert("Wait! You need this, don't go!!!!"),
  };

  return (
    <div>
      <div className="container m-auto">
        <div className="flex justify-around gap-4 bg-[#e89f71] py-20 shadow-md m-20 max-sm:flex-col max-sm:w-full max-sm:m-0 max-sm:p-10">
          <div>
            <img className="rounded-2xl" alt="pay" src={PayNow} />

            <div className="text-white mt-10">
              <p className="text-lg leading-8">
                The Expertise you need. Service you deserve! and
                <br />
                Because life’s complicated enough
                <br />
                We've got you in Good Hands.
              </p>
              <p className="mt-5">
                <span className="text-4xl">FUNIRO</span> The right way to go!.
              </p>
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
                <label className="text-white text-xl font-bold">Amount:</label>
                <input
                  type="text"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Amount"
                  className="w-full bg-[#efc1a5] p-4 rounded-xl outline-none text-white shadow-md"
                />
              </div>
              {/* <div className="checkout-field max-w-xs mb-8">
                <label className="text-white text-xl font-bold">Number:</label>
                <input
                  type="number"
                  id="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  placeholder="Number"
                  className="w-full bg-[#efc1a5] p-4 rounded-xl outline-none text-white shadow-md"
                />
              </div> */}
              <div className="checkout-field max-w-xs mb-8">
                <label className="text-white text-xl font-bold">Address:</label>
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Address"
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
