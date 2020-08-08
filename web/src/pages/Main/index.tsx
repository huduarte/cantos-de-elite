import React from 'react'
import './styles.css'
import perfilImg from '../../assets/images/exemplo.png'


function Main(){
    return (
        <div id="main">
            <div id="page-main" className="container">
                <div id="landing-title">
                    <h1>CANTOS DE ELITE</h1>
                </div>
                <div id="bgi">
                    <div id="content">
                        <div id="text">
                            <span>CONHEÇAM OS <strong>MÉTODOS</strong> QUE ME FIZERAM <strong>FATURAR</strong></span>
                            <p id="title"><br/>5 DÍGITOS <strong>A PARTIR DO ZERO</strong>.</p> 
                        </div>
                        <div id="buttonbuy">
                            <a href="">
                                <span>ADQUIRA O E-BOOK AGORA</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="perfil">
                <h1 id="perfil-name">QUEM É CAIO PÊPE</h1>
                <div id="textos">
                    <p id="textoum">Meu nome é <strong>Caio Pêpe</strong>, tenho <strong>18 anos</strong> e sempre fui fascinado em fontes ativas de renda. No ano de 2020 consegui sair do absoluto zero a faturamentos de até <strong>cinco dígitos com o trade esportivo</strong>, sendo capaz de ajudar minha família e sair das asas dos meus pais fazendo <strong>a minha própria renda</strong>.</p>
                    <img src={perfilImg} alt="Imagem de Perfil" id="perfil-img"/>
                    <p id="textodois"><strong>Nessa nova jornada</strong> quero trazer essa mesma <strong>independência</strong> para vocês, e lhes mostrar que tudo pode ser alcançado através de <strong>persistência e consistência</strong> juntamente a um trabalho de médio a longo prazo e estratégias utilizadas pela <strong>elite dos apostadores</strong>. Vamos juntos que te mostro <strong>o lado vencedor</strong>! </p>    
                 </div>
            </div>
            </div>
            
        </div>
    )
}

export default Main;