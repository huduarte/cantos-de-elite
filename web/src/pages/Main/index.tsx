import React from 'react'
import './styles.css'
import perfilImg from '../../assets/images/exemplo.png'
import bookImg from '../../assets/images/icons/book-open.svg'


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
                        <div id="video">
                            {/* <video src="https://www.youtube.com/watch?v=etZWWS8oEh0"></video> */}
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/etZWWS8oEh0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        </div>
                        <div id="buttonbuy">
                            <a href="">
                                <span>ADQUIRA O E-BOOK AGORA</span>
                            </a>
                        </div>
                        <div id="price">
                            <p id="old-price">DE R$497</p>
                            <p id="per">POR APENAS</p>
                            <p id="new-price">R$297</p>
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
                <div id="modules">
                    <div id="ensinar">
                        <div id="modules-title">
                        <h1 id="h1-modules">O QUE EU VOU TE ENSINAR</h1>
                        </div>
                        
                        <div id="modulos">
                            <div id="mod1">
                                <p>
                                    <div id="module-name">
                                        <strong>Módulo 1</strong>
                                        <img src={bookImg} alt=""/>
                                    </div>
                                    <br/>
                                    <br/> <strong id="mod1-title">Primeiro Passo/ Estratégias:</strong> 
                                    <br/>
                                    <br/> 1 - Termos que você precisa saber nas operações;
                                    <br/>
                                    <br/>
                                    <br/> 2 - Primeira Estratégia de Cantos (Teórica/Escrita);
                                    <br/>
                                    <br/>
                                    <br/> 3 - Primeira Estratégia de Cantos (Prática/Vídeo);
                                    <br/>
                                    <br/>
                                    <br/> 4 - Segunda Estratégia de Cantos (Teórica/Escrita);
                                    <br/>
                                    <br/>
                                    <br/> 5 - Segunda Estratégia de Cantos (Prática/Vídeo);
                                    <br/>
                                    <br/>
                                    <br/> 6 - Terceira Estratégia de Cantos (Teórica/Escrita);
                                    <br/>
                                    <br/>
                                    <br/> 7 - Terceira Estratégia de Cantos (Prática/Vídeo)
                                    <br/>
                                    <br/>
                                </p>
                            </div>
                            <div id="mod2">
                                <p>
                                    <div id="module-name">
                                        <strong>Módulo 2</strong>
                                        <img src={bookImg} alt=""/>
                                    </div>
                                        <br/>
                                        <br/>  <strong id="mod2-title">Handcap/Mindset para crescimento no mercado:</strong>
                                        <br/>
                                        <br/> 1 - Explicação de Handcap (Teórica/Prática);
                                        <br/>
                                        <br/>
                                        <br/> 2 - Perfis de investidor + Gestão de Banca;
                                        <br/>
                                        <br/>
                                        <br/> 3 - Mindset.
                                        <br/>
                                        <br/>
                                </p>
                            </div>
                            <p><br/><br/></p>
                        </div>       
                    </div>
                </div>
                <div id="results">
                    <h1>RESULTADOS</h1>
                </div>
            </div> 
        </div>
    )
}

export default Main;