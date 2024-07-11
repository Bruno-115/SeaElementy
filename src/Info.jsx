import { useState } from "react"
function Info ({setSno,setSea,setAmz,amz,sno,sea}) {

        return (
            <div id="Info" className={`${amz ? 'Container Img-Amz' : ''} ${sno ? 'Container Img-Sno' : ''} ${sea ? 'Container Img-Sea': ''}`}>
                <div className="Container__Box">
                    <div className="Container__Box--Btn">
                        <button className="Container__Box--Btn-Amz Container__Box--Btn--Config "onClick={(e) =>{setAmz(true); setSea(false);setSno(false);}}>
                            <img src="./../img/tree.svg" alt="Tree" className="Container__Box--Btn-Img" />
                        </button>
                        <button className="Container__Box--Btn-Sno Container__Box--Btn--Config" onClick={(e) =>{setAmz(false); setSea(false);setSno(true);}}>
                            <img src="./../img/snow.svg" alt="" className="Container__Box--Btn-Img" />
                        </button>
                        <button className="Container__Box--Btn-Sea Container__Box--Btn--Config" onClick={(e) =>{setAmz(false); setSea(true);setSno(false);}}>
                            <img src="./../img/sea.svg" alt="" className="Container__Box--Btn-Img" />
                        </button>
                    </div>
                    <div className="Container__Box--Content">
                        {amz ? <div className="Container__Box--Content-Amz">
                            <div className="Wave Wave__Amz"></div>
                            <div className="Box__Info Box__Info-Amz">
                                <h1 className="Box__Title">O Coração Verde da Terra</h1>
                                <p className="Box__Description">Descubra a magia da floresta tropical amazônica, lar de uma biodiversidade incomparável.Navegue pelos rios serpenteantes, maravilhe-se com a exuberância da flora e fauna, e mergulhe nas culturas fascinantes das comunidades locais.</p>
                                <button className="Box__Ticket Box__Ticket-Amz">Comprar<span className="Price">$450.21</span></button>
                            </div> 
                        </div>: ''}
                        {sno ? <div className="Container__Box--Content-Sno">
                            <div  className="Img__Config Img__Config-Sno" />
                            <div className="Wave Wave__Sno"></div>
                            <div className="Box__Info Box__Info-Sno">
                                <h1 className="Box__Title">Geleiras Majestosas</h1>
                                <p className="Box__Description">Sinta a emocionante atmosfera das geleiras enquanto se aventura por paisagens deslumbrantes.
                                    Experimente a imponência do gelo, ouça o estrondo dos icebergs se desprendendo e maravilhe-se com a beleza crua e intocada do Ártico ou da Antártida.</p>
                                <button className="Box__Ticket Box__Ticket-Sno">Comprar<span className="Price">$1120.00</span></button>
                            </div> 
                        </div>: ''}
                        {sea ? <div className="Container__Box--Content-Sea">
                            <div  className="Img__Config Img__Config-Sea" />
                            <div className="Wave Wave__Sea"></div>
                            <div className="Box__Info Box__Info-Sea">
                                <h1 className="Box__Title">Entre Paraísos e Oceanos</h1>
                                <p className="Box__Description">Relaxe em praias de areia branca, mergulhe nas águas cristalinas e explore recifes de coral vibrantes.
Desfrute da cultura calorosa e da culinária deliciosa enquanto se entrega à serenidade dos destinos caribenhos.</p>
                                <button className="Box__Ticket Box__Ticket-Sea">Comprar<span className="Price">$777.77</span></button>
                            </div> 
                        </div>: ''}
                    </div>
                </div>
            </div>
        )
}

export default Info