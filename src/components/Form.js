import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
  });

  function handleFormChange(event) {
    const name = event.target.name;
    let value = event.target.value;
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <form>
      <input type="text" name="firstName" onChange={handleFormChange} value={formData.firstName} />
      <input type="text" name="lastName" onChange={handleFormChange} value={formData.lastName} />
      <input
        type="checkbox"
        name="admin"
        onChange={handleFormChange}
        checked={formData.admin}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
