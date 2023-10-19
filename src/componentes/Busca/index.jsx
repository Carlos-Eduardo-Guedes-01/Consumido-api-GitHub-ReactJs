import React, { useEffect, useState } from "react";
import api from "../../Services";

function Search(props) {
  const [user, setUser] = useState();

  useEffect(() => {
    
      api
        .get("/users/"+props.nome)
        .then((response) => setUser(response.data))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
  }, []);

  return (
    <div className="App">
      <p>Usuário: {user?.login}</p>
      <p>Biografia: {user?.bio}</p>
    </div>
  );
}

export default Search;
