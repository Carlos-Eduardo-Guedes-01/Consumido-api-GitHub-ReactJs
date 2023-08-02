import img from './logo.png'
import styled from 'styled-components'
const Header=styled.div`
width:100vw;
height:11vh;
background-color: #1b1f23;
display:flex;
align-items:center;
padding-left:3.2vw;
gap:20px;
`
const Imagem=styled.div`
width:20vw;
`
const Elemento=styled.div`
display:flex;
align-items:center;
justify-content:center;
border-radius:10px;
border: 2px solid #0f224a;
width:60px;
height:20px;
transition:0.2s;
&:hover{
    border: 2px solid white;
}
`
const Lista=styled.div`
width:;
display:flex;
flex-direction:row;
gap: 50px;
color:white;
`
function Cabecalho(){
    const menu=['Home', 'Sobre','Busca']
    return (
    <Header>
        <Imagem>
            <img src={img} alt="image" width={55}/>
        </Imagem>
        <Lista>
            {
                menu.map((item, index)=>(
                    <Elemento key={index}>
                        {item}
                    </Elemento>
                ))
            }
        </Lista>
    </Header>
    )
}
export default Cabecalho