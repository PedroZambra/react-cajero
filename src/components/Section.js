import React from 'react';
import credit_card from '../img/credit_card.png';

class Section extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        //Control del tamaño de la cantidad
        let classSize = ''; 
        const money = this.props.total_money.toString().length;

        if(money <= 5){
            classSize += ' size';
        } else if (money <= 6) {
            classSize += ' size2';
        } else if (money <= 7) {
            classSize += ' size3';
        } else if (money <= 9) {
            classSize += ' size4';
        } else if (money <= 10){
            classSize += ' size5';
        } else {
            classSize += ' size6';
        }

        if(this.props.active || this.props.active2 || this.props.active3 || this.props.active4) {
            return(
                <section className="loaded">
                    <img src={credit_card} className="credit_card"/>
                    <div className="money">
                        <p className="text_size">Saldo actual</p>
                        <p className={`money_size ${classSize}`}>{this.props.total_money}€</p>
                        <p className="text_size">Última transacción</p>
                        <p className="last_transaction">{this.props.last_transaction}€</p>
                    </div>
                </section>
            )
        } else {
            return(
                <section>
                    <img src={credit_card} className="credit_card credit_cardAnimation"/>
                    <div className="money">
                        <p className={this.props.openAnimation ? "text_size money1" : "text_size credit_cardAnimation"}>Saldo actual</p>
                        <p className={`money_size ${this.props.openAnimation ? "money2" : "credit_cardAnimation"} ${classSize}`}>{this.props.total_money}€</p>
                        <p className={this.props.openAnimation ? "text_size money3" : "text_size credit_cardAnimation"}>Última transacción</p>
                        <p className={this.props.openAnimation ? "last_transaction money4" : "last_transaction credit_cardAnimation"}>{this.props.last_transaction}€</p>
                    </div>
                </section>
            )
        }
    }
}

export default Section;