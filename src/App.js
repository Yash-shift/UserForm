import React from "react";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    comments: false,
    candidates: false,
    streetadddress: "",
    city: "",
    pin: " ",
    offers: false,
    pushNotification:" "
  });

  function changehandler(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event) {
  
    event.preventDefault();
    console.log( "finally printing all data:",formData);

    
  
  }

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name</label>
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Enter Your Name"
          value={formData.firstName}
          onChange={changehandler}
          className="outline"
        />
        <br />

        <label htmlFor="LastName">Last Name</label>
        <br />
        <input
          type="text"
          name="LastName"
          id="LastName"
          placeholder="Enter Your last Name"
          value={formData.LastName}
          onChange={changehandler}
          className="outline"
        />
        <br />

        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="imyashdixit001@gmail.com"
          value={formData.email}
          onChange={changehandler}
          className="outline"
        />
        <br />
        <label htmlFor="country">Country</label>
        <br />
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changehandler}
          className="outline"
        >
          <option value="">Select Country</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="India">India</option>
          <option value="China">China</option>
          <option value="Russia">Russia</option>
          <option value="Germany">Germany</option>
          <option value="Japan">Japan</option>
          <option value="Australia">Australia</option>
          <option value="France">France</option>
          <option value="Italy">Italy</option>
          <option value="Spain">Spain</option>
          <option value="Canada">Canada</option>
        </select>
        <br />

        <label htmlFor="streetadddress">Street Address</label>
        <br />
        <input
          type="text"
          name="streetadddress"
          id="streetadddress"
          placeholder="Phuket street"
          value={formData.streetadddress}
          onChange={changehandler}
          className="outline"
        />
        <br />
        <label htmlFor="city">City</label>
        <br />
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Faridabad"
          value={formData.city}
          onChange={changehandler}
          className="outline"
        />
        <br />
        <label htmlFor="pin">PinCode/Postal</label>
        <br />

        <input
          type="text"
          name="Pin"
          id="pin"
          placeholder="121001"
          value={formData.pin}
          onChange={changehandler}
          className="outline"
        />
        <br />
        <br />
        <br />

        <fieldset>
          <legend>By Email</legend>
          <div className="flex">
            <input
              type="checkbox"
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={changehandler}
            ></input>
            <div>
              <label htmlFor="comments">Comments</label>
              <p>I want to receive offers and updates via email</p>
            </div>
          </div>
          <div className="flex">
            <input
              type="checkbox"
              id="candidates"
              name="candidates"
              value={formData.candidates}
              onChange={changehandler}
            ></input>
            <div>
              <label htmlFor="candidates">candidate</label>
              <p>I want to receive offers and updates via email</p>
            </div>
          </div>
          <div className="flex">
            <input
              type="checkbox"
              id="Offers"
              name="offers"
              value={formData.offers}
              onChange={changehandler}
            ></input>
            <div>
              <label htmlFor="Offers">Offers</label>
              <p>get notify when any ogffer</p>
            </div>
          </div>
        </fieldset>
        <br />
        <br />
        <fieldset>
          <legend>Push Notification</legend>
          <p>These are delivered via sms to your mobile number.</p>
          <input
             type="radio"
            id="pushNotificationYes"
            name="pushNotification"
            value="Everything"
            onChange={changehandler}

          />
          <label htmlFor="pushNotificationYes">Yes, I want to receive push notifications</label>
       
          <br/>
          <input
             type="radio"
            id="pushNotificationYes"
            name="pushNotification"
            value="same as email"
            onChange={changehandler}

          />
          
          <label htmlFor="pushNotificationYes">Same as email</label>
          <br/>

          <input
             type="radio"
            id="pushNotificationYes"
            name="pushNotification"
            value="Not Interested"
            onChange={changehandler}
 
          />
          <label htmlFor="pushNotificationYes">no Notification needed</label>
        </fieldset>

        <button  className="bg-blue-700 hover:bg-blue-900 rounded-xl px-5 py-2 text-white">Submit</button>

      </form>
    </div>
  );
}

export default App;
