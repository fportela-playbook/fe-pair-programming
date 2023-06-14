import "./App.css";

import { useState } from "react";



  const [email, setEmail] = useState("");



    e.preventDefault();

    console.log("Email:", email, "Password:", password);

  };



  return (
    <div>
      <h1>All set!</h1>
    </div>
    <form onSubmit={handleSubmit}>

      <label>

        Email:

        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

      </label>

      <label>

        Password:

        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

  );
}

export default App;
