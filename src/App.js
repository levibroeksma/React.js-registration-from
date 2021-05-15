import React from 'react';
import './App.css';

function App() {
    const [firstNameValue, setFirstNameValue] = React.useState('');
    const [lastNameValue, setLastNameValue] = React.useState('');
    const [emailValue, setEmailValue] = React.useState('');
    const [passwordValue, setPasswordValue] = React.useState('');
    const [confirmPasswordValue, setConfirmPasswordValue] = React.useState('');
    const [termsOfServiceCheckboxValue, toggleTermsOfServiceCheckboxValue] = React.useState(false);
    const [newsLetterCheckboxValue, toggleNewsLetterCheckboxValue] = React.useState(false);

    return (
    <>
      <h1>Register</h1>
        <p>
            Please fill out the fields below to finish your registration. We have already checked your requested username. Guess what? It’s available!
        </p>
      <form>
        <label htmlFor="firstName" id="firstNameLabel">First name:</label>
        <input
            type="text"
            id="firstName"
            placeholder="First name..."
            name="firstName"
            value={firstNameValue}
            onChange={(e) => setFirstNameValue(e.target.value)}
        />
          <label htmlFor="lastName" id="lastNameLabel">First name:</label>
          <input
              type="text"
              id="lastName"
              placeholder="Last name..."
              name="lastName"
              value={lastNameValue}
              onChange={(e) => setLastNameValue(e.target.value)}
          />
          <label htmlFor="email" id="emailLabel">Email:</label>
          <input
              type="text"
              id="email"
              placeholder="Email address..."
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
          />
          <label htmlFor="password" id="passwordLabel">Password:</label>
          <input
              type="password"
              id="password"
              placeholder="Password..."
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
          />
          <label htmlFor="passwordConfirm" id="passwordLabel">Password:</label>
          <input
              type="password"
              id="passwordConfirm"
              placeholder="Confirm password..."
              value={confirmPasswordValue}
              onChange={(e) => setConfirmPasswordValue(e.target.value)}
          />
          <div id="checkboxHolder">
              <input
                  type="checkbox"
                  id="newsLetter"
                  name="newsLetterCheckbox"
                  checked={newsLetterCheckboxValue}
                  onChange={(e) => toggleNewsLetterCheckboxValue(!newsLetterCheckboxValue)}
              />
              <label
                  htmlFor="newsLetter"
                  id="newsLetterLabel">
                  I want to stay up-to-date by receiving the newsletter
              </label>
              <input
                  type="checkbox"
                  id="termsOfService"
                  name="termsOfServiceCheckbox"
                  checked={termsOfServiceCheckboxValue}
                  onChange={(e) => toggleTermsOfServiceCheckboxValue(!termsOfServiceCheckboxValue)}
              />
              <label
                  htmlFor="termsOfService"
                  id="termsOfServiceLabel">
                  I agree to the Terms of Service and Privacy Policy
              </label>
          </div>
          <button type="confirm">Confirm registration</button>
      </form>
    </>
  );
}

export default App;
