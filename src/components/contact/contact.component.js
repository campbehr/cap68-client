import React, { useState, useEffect } from "react";
import axios from "axios";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AirlineList from "./airline-list.component";
import "./contact.styles.css";
import CustomLabel from "./label.component";
import StateSelect from "./state-list.component";

const Contact = () => {
  const initialUser = {
    airline: "",
    base: "",
    check: false,
    city: "",
    email: "",
    fName: "",
    lName: "",
    message: "",
    password: "",
    phone: "",
    position: "",
    registration: "",
    retirement: "",
    state: "",
    street: "",
    zip: "",
  };

  useEffect(() => {
    console.log(axios.get(process.env.REACT_APP_CAP68_WELCOME));
  }, []);

  const [user, setUser] = useState(initialUser);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const handleChangeDate = (date) => {
    setUser({ ...user, retirement: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.check || !user.password === "") {
      alert("nice try");
      setUser(initialUser);
    } else {
      axios
        .post(process.env.REACT_APP_CAP68_SIGNUP, user)

        .then(alert("Thank you"));

      setUser(initialUser);
    }
  };

  return (
    <div className="contact-section" id="subscribe">
      <div className="form-container">
        <h2 className="form-title">Contact</h2>
        <form className="form" onSubmit={handleSubmit}>
          <CustomLabel name={user.airline} child="Airline" />
          <input
            name="airline"
            list="airlines"
            value={user.airline}
            onChange={handleChange}
            required
          />
          <AirlineList />

          <CustomLabel name={user.fName} child="First Name" />
          <input
            name="fName"
            value={user.fName}
            onChange={handleChange}
            required
          />
          <CustomLabel name={user.lName} child="Last Name" />
          <input
            name="lName"
            value={user.lName}
            onChange={handleChange}
            required
          />
          <CustomLabel name={user.position} child="Position" />
          <input
            name="position"
            list="positions"
            value={user.position}
            onChange={handleChange}
          />
          <datalist id="positions">
            <option value="Captain" />
            <option value="Senior First Officer" />
            <option value="First Officer" />
          </datalist>
          <CustomLabel name={user.retirement} child="Retirement Date" />
          <div className="date-div">
            <DatePicker
              selected={user.retirement}
              onChange={handleChangeDate}
            />
          </div>
          <CustomLabel name={user.base} child="Base" />
          <input name="base" value={user.base} onChange={handleChange} />
          <CustomLabel name={user.registration} child="Registered State" />
          <StateSelect
            name="registration"
            value={user.registration}
            onChange={handleChange}
            required
          />
          <CustomLabel name={user.email} child="Email" />
          <input
            name="email"
            type="email"
            id="email"
            value={user.email}
            onChange={handleChange}
            required
          />
          <CustomLabel name={user.phone} child="Phone" />
          <input
            name="phone"
            type="tel"
            maxLength="10"
            minLength="10"
            value={user.phone}
            onChange={handleChange}
          />
          <CustomLabel name={user.street} child="Address" />
          <input
            name="street"
            type="text"
            value={user.street}
            onChange={handleChange}
          />
          <input
            type="checkbox"
            name="check"
            value="1"
            className="honeybear"
            tabindex="-1"
            autocomplete="off"
          />

          <CustomLabel name={user.city} child="City" />
          <input
            name="city"
            type="text"
            value={user.city}
            onChange={handleChange}
          />
          <CustomLabel name={user.state} child="State" />
          <StateSelect
            name="state"
            value={user.state}
            onChange={handleChange}
          />
          <CustomLabel name={user.zip} child="Zip Code" />
          <input
            name="zip"
            type="number"
            value={user.zip}
            onChange={handleChange}
          />
          <input
            type="text"
            name="password"
            className="honeybear"
            tabindex="-1"
            autocomplete="off"
          />
          <CustomLabel
            name={user.message}
            child="Please note any areas of interest..."
          />
          <textarea
            name="message"
            maxLength="150"
            value={user.message}
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
