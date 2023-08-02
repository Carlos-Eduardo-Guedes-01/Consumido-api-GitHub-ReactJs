import { useState, useEffect,useRef } from "react";
function Eff() {
/*const [contador, setContador] = useState(0);
useEffect(() => {
alert("Contador: " + contador);

}, [contador]);
function aumentarContagem() {
setContador(contador + 1);
}
return (
<div className="App">
<header className="App-header">
<h1>Valor {contador}</h1>
<button onClick={aumentarContagem}>Aumentar</button>
</header>
</div>
);
}*/
const [valor, setValor] = useState(null)
const renderizacoes = useRef(0)

useEffect(() => {
renderizacoes.current = renderizacoes.current + 1
})

return (
<div className="App">
<header className="App-header">
<input value={valor} onChange={(e) => setValor(e.target.value)}/>
<p>{renderizacoes.current}</p>
</header>
</div>
);
}
export default Eff;