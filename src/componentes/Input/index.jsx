import React, { useEffect, useState } from "react";
import api from "../../Services";

function Search() {
  const [user, setUser] = useState();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (searchValue.trim() !== "") {
          const response = await api.get("/users/" + searchValue);
          console.log("Response:", response.data); // Verifique a resposta da API no console
          setUser(response.data);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("ops! ocorreu um erro", error);
        setUser(null);
      }
    };

    fetchUser(); // Chamada inicial para exibir os dados do usuário, caso existam

    const delayDebounceFn = setTimeout(fetchUser, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchValue]);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={searchValue} onChange={handleChange} />
      <div>
        {user ? (
          <>
            <p>Usuário: {user.login}</p>
            <p>Biografia: {user.bio}</p>
          </>
        ) : (
          <p>Nenhum usuário encontrado.</p>
        )}
      </div>
    </div>
  );
}

export default Search;
