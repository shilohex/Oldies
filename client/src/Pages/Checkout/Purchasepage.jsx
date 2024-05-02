import React, { useState } from "react";

const PurchasePopup = ({ onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [accountType, setAccountType] = useState("savings");
  const [formData, setFormData] = useState({
    accountNumber: "",
    routingNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleAccountTypeChange = (event) => {
    setAccountType(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Payment</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="paymentMethod">
              Payment Method:
            </label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={paymentMethod}
              onChange={handlePaymentMethodChange}
              className="p-2 border rounded"
            >
              <option value="creditCard">Credit Card</option>
              <option value="bankAccount">Bank Account</option>
            </select>
          </div>
          {paymentMethod === "bankAccount" && (
            <div className="mb-4">
              <label className="block mb-2" htmlFor="accountType">
                Account Type:
              </label>
              <select
                id="accountType"
                name="accountType"
                value={accountType}
                onChange={handleAccountTypeChange}
                className="p-2 border rounded"
              >
                <option value="savings">Savings</option>
                <option value="checking">Checking</option>
              </select>
            </div>
          )}
          <div className="mb-4">
            <label className="block mb-2" htmlFor="accountNumber">
              Account Number:
            </label>
            <input
              type="text"
              id="accountNumber"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="routingNumber">
              Routing Number:
            </label>
            <input
              type="text"
              id="routingNumber"
              name="routingNumber"
              value={formData.routingNumber}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />
          </div>
          {paymentMethod === "creditCard" && (
            <>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="cardNumber">
                  Card Number:
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className="p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="expirationDate">
                  Expiration Date:
                </label>
                <input
                  type="text"
                  id="expirationDate"
                  name="expirationDate"
                  value={formData.expirationDate}
                  onChange={handleInputChange}
                  className="p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="cvv">
                  CVV:
                </label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  className="p-2 border rounded"
                />
              </div>
            </>
          )}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PurchasePopup;
