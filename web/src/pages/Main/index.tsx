import React from 'react'
import './styles.css'

import perfilImg from '../../assets/images/exemplo.png'
import bookImg from '../../assets/images/icons/book-open.svg'
import img0 from '../../assets/images/prints/0.jpeg'
import img1 from '../../assets/images/prints/1.jpeg'
import img2 from '../../assets/images/prints/2.jpeg'
import img3 from '../../assets/images/prints/3.jpeg'
import img4 from '../../assets/images/prints/4.jpeg'
import img5 from '../../assets/images/prints/5.jpeg'
import img6 from '../../assets/images/prints/6.jpeg'
import img7 from '../../assets/images/prints/7.jpeg'
import img8 from '../../assets/images/prints/8.jpeg'
import img9 from '../../assets/images/prints/9.jpeg'
import img10 from '../../assets/images/prints/10.jpeg'
import img11 from '../../assets/images/prints/11.jpeg'
import img12 from '../../assets/images/prints/12.jpeg'
import img13 from '../../assets/images/prints/13.jpeg'
import img14 from '../../assets/images/prints/14.jpeg'
import img15 from '../../assets/images/prints/15.jpeg'
import img16 from '../../assets/images/prints/16.jpeg'
import img17 from '../../assets/images/prints/17.jpeg'
import reembolso from '../../assets/images/reembolso.png'



function Main(){
    return (
        <div id="main">
            <div id="page-main">
                <div id="cantosdeelite">
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
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/etZWWS8oEh0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            </div>
                            <div id="buttonbuy">
                                <a href="">
                                    <span>ADQUIRA O E-BOOK AGORA</span>
                                </a>
                            </div>
                            <div id="price">
                                <p id="desconto">Últimas vagas com 40% de desconto</p>
                                <p id="old-price">DE R$497</p>
                                <p id="per">POR APENAS</p>
                                <p id="new-price">R$297</p>
                                <p id="info1">Acesso Imediato Por Apenas <br/> 12 pagamentos de <strong>R$24,75</strong></p>
                                <p id="info2">Menos de <strong>R$1</strong> por dia <br/><br/><br/></p>
                            </div>
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
                    <div id="results-page">
                        <div id="results-title">
                            <h1>NOSSOS RESULTADOS</h1>
                        </div>
                        <div id="prints">
                            <img src={img0} alt=""/>
                            <img src={img17} alt=""/>
                            <img src={img5} alt=""/>                            
                            <img src={img3} alt=""/>
                            <img src={img7} alt=""/>
                            <img src={img4} alt=""/>
                            <img src={img8} alt=""/>
                            <img src={img14} alt=""/>
                            <img src={img16} alt=""/>
                            <img src={img9} alt=""/>
                            <img src={img10} alt=""/>
                            <img src={img15} alt=""/>
                            <img src={img2} alt=""/>
                            <img src={img13} alt=""/>
                            <img src={img12} alt=""/>
                            <img src={img11} alt=""/>
                            <img src={img6} alt=""/>
                            <img src={img1} alt=""/>
                        </div>
                        <div id="audio">
                            <audio src=""></audio>
                        </div>
                    </div>
                </div>
                <div id="buy">
                    <div id="buynow">
                        <div id="title">
                            <h1>GARANTA AGORA ACESSO </h1>
                            <h1>AO MEU E-BOOK</h1>
                            <h3>Não perca essa oportunidade</h3>
                            <h3>Aproveite uma condição especial</h3>
                            <h3>por tempo limitado:</h3>
                        </div>
                    <div id="buy-content">
                        <p id="old-price">DE R$497</p>
                        <p id="per">POR APENAS</p>
                        <p id="new-price">R$297</p>
                        <p id="info1">Acesso Imediato Por Apenas</p>
                        <p>12 pagamentos de </p>
                        <strong>R$24,75</strong>
                        <p id="info2">Menos de <strong>R$1</strong> por dia <br/><br/><br/></p>
                    </div>
                    <div id="button">
                        <a href="#">
                            COMPRE AGORA
                        </a>
                    </div>
                    </div>
                </div>
                <div id="reembolso">
                    <img src={reembolso} alt=""/>
                    <p>Por não ter histórico de reembolso, se em 7 dias você não gostar do conteúdo, <br/>ou por algum motivo achar que não faz sentido para você, <br/>eu devolvo 100% do seu dinheiro de volta. <br/>Basta nos enviar um e-mail solicitando reembolso.</p>
                </div>
            </div> 
        </div>
    )
}

export default Main;