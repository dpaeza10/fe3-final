import React from "react";
import { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "" 
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const validateEmail = (email) => {
    // const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // return re.test(String(email).toLowerCase());
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = formData;

    if (name.length <= 5) {
      setError("Por favor verifique su información nuevamente");
      setSuccessMessage("");
      return;
    }

    if (!validateEmail(email)) {
      setError("Por favor verifique su información nuevamente");
      setSuccessMessage("");
      return;
    }

    setError("");
    setSuccessMessage(`Gracias ${name}, te contactaremos cuando antes vía mail`);
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Full name"
          value={formData.name}
          onChange={ (e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input 
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={ (e) => setFormData({ ...formData, email: e.target.value })}
        />
        <button type="submit">Send</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    </div>
  );
};

export default Form;
