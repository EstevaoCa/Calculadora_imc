import { useState } from "react";
import style from './imc.module.css';



const Imc = () => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resutado, setResultado] = useState(0);
    const [classificacao, setClassificacao] = useState('');

    console.log(peso, altura);

    const calcularImc = () => {
        const imc = peso / (altura * altura);
        const formateImc = imc.toFixed(2);
        setResultado(formateImc);
        definirClassificacao(formateImc);
    }

const definirClassificacao = (imc) => {
    if (imc < 18.5) {
        setClassificacao('Abaixo do peso');
    } else if (imc >= 18.5 && imc <= 24.9) {
        setClassificacao('Peso normal');
    } else if (imc >= 25 && imc <= 29.9) {
        setClassificacao('Sobrepeso');
    } else if (imc >= 30 && imc <= 34.9) {
        setClassificacao('Obesidade grau I');
    } else if (imc >= 35 && imc <= 39.9) {
        setClassificacao('Obesidade grau II');
    } else {
        setClassificacao('Obesidade grau III');
    }
};

const getBackgroundColor = () => {
    switch (classificacao) {
        case 'Abaixo do peso':
            return '#ADD8E6'; // azul claro
        case 'Peso normal':
            return '#90EE90'; // verde claro
        case 'Sobrepeso':
            return '#FFD700'; // amarelo
        case 'Obesidade grau I':
            return '#FFA500'; // laranja
        case 'Obesidade grau II':
            return '#FF6347'; // vermelho claro
        case 'Obesidade grau III':
            return '#FF4500'; // vermelho escuro
        default:
            return 'transparent';
    }
};


    return (
        <div className="container">
            <div className={style.conteudo}>
                <h1 className={style.titulo}>Calcular IMC</h1>
                <input 
                    type="number" 
                    value={peso} 
                    onChange={e => setPeso(e.target.value)} 
                    className={style.campo}
                    placeholder="Peso (kg)" />
                    
                <input 
                    type="number" 
                    value={altura}  
                    onChange={e => setAltura(e.target.value)}
                    className={style.campo}
                    placeholder="Altura (m)" />

                <button className={style.calcular} onClick={calcularImc}>Calcular</button>

                {Imc && (
                    <div className={style.resutados} style={{ backgroundColor: getBackgroundColor()}}>
                        <h2>Seu imc é: {resutado}</h2>
                        <h3 className={style.classificacao} >Clasificaçao: {classificacao}</h3>
                    </div>
                )}
                
            </div>
        </div>
        
    )
}

export default Imc