import React from 'react';

import Section from './Section.js';
import Numbers from './Numbers.js';
import Footer from './Footer.js';

class Atm extends React.Component{
    constructor(){  
        super()
        this.state = {
            total_money: 50000, //Dinero en banco
            deposit_money: 0,
            last_transaction: 0,
            money_pj: 1000000000000, //Dinero del personaje

            isToggleOn: false,
            isToggleOn2: false,
            isToggleOn3: false,
            isToggleOn4: false,
            openAnimation: true, //Al abrir cajero esta true?
            recoil1: false,
            recoil2: false,
            recoil3: false,
            recoil4: false

        }
        this.handleInsert = this.handleInsert.bind(this);
        this.handleTake = this.handleTake.bind(this);
        this.handleTransfer = this.handleTransfer.bind(this);   
        this.handleMore = this.handleMore.bind(this);

        this.AddNumber = this.AddNumber.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleOk = this.handleOk.bind(this);

        this.handleRecoilInsert = this.handleRecoilInsert.bind(this);
        this.handleRecoilTake = this.handleRecoilTake.bind(this);
        this.handleRecoilTransfer = this.handleRecoilTransfer.bind(this);
        this.handleRecoilMore = this.handleRecoilMore.bind(this);
    }

    handleInsert() {
        this.setState(state => ({isToggleOn: !state.isToggleOn, openAnimation: false, recoil1: false, recoil2: false, recoil3: false, recoil4: false}));
    }

    handleTake() {
        this.setState(state => ({isToggleOn2: !state.isToggleOn2, openAnimation: false, recoil1: false, recoil2: false, recoil3: false, recoil4: false}));
    }

    handleTransfer() {
        this.setState(state => ({isToggleOn3: !state.isToggleOn3, openAnimation: false, recoil1: false, recoil2: false, recoil3: false, recoil4: false}));
    }

    handleMore() {
        this.setState(state => ({isToggleOn4: !state.isToggleOn4, openAnimation: false, recoil1: false, recoil2: false, recoil3: false, recoil4: false}));
    }

    //BUTTONS RECOIL  

    handleRecoilInsert() {
        this.setState(state => ({isToggleOn: !state.isToggleOn, recoil1: true}));
    }

    handleRecoilTake() {
        this.setState(state => ({isToggleOn2: !state.isToggleOn2, recoil2: true}));
    }

    handleRecoilTransfer() {
        this.setState(state => ({isToggleOn3: !state.isToggleOn3, recoil3: true}));
    }

    handleRecoilMore() {
        this.setState(state => ({isToggleOn4: !state.isToggleOn4, recoil4: true}));
    }

    //NUMBERS

    AddNumber(val) {
        const addmoney = this.state.deposit_money;
        
        if((addmoney.toString().length+1) <= 13){ //9 billones
            if(addmoney == 0){
                this.setState({deposit_money: val.target.value});
            } else {
                this.setState({deposit_money: addmoney + val.target.value});
            }
        } 
        console.log(this.state.deposit_money);
    }

    handleDelete(){
        if(this.state.deposit_money != 0)
        this.setState({deposit_money: this.state.deposit_money.substring(0,this.state.deposit_money.length-1)});
    }

    handleOk(event) {
        console.log(event);

        if(event == 'deposit') {
            if(this.state.deposit_money!='' && (this.state.deposit_money < this.state.money_pj)) {
                this.setState({
                    last_transaction: this.state.deposit_money,
                    total_money: parseInt(this.state.total_money) + parseInt(this.state.deposit_money),
                    money_pj:  parseInt(this.state.money_pj) - parseInt(this.state.deposit_money),
                    deposit_money: 0,
                });
            }
        }

        if(event == 'take') {
            if((parseInt(this.state.total_money) - parseInt(this.state.deposit_money)) >= 0) {
                this.setState({
                    last_transaction: this.state.deposit_money,
                    total_money: parseInt(this.state.total_money) - parseInt(this.state.deposit_money),
                    money_pj: parseInt(this.state.money_pj) + parseInt(this.state.deposit_money),
                    deposit_money: 0,
                });
            }
        }
        console.log(this.state.money_pj);
    }   

    render(){
        return(
            <div>
                <div className="container">
                    <div className="screenUp screenUpAnimation"></div>
                    <div className="screen">
                        <header>
                            <h1 className="titleAnimation">DBank</h1><h1 className="close closeAnimation">X</h1>
                        </header>
                        <hr className="hrAnimation"/>  
                        
                        <Section 
                            active = {this.state.isToggleOn} 
                            active2 = {this.state.isToggleOn2}
                            active3 = {this.state.isToggleOn3}
                            active4 = {this.state.isToggleOn4}

                            total_money = {this.state.total_money}
                            last_transaction = {this.state.last_transaction}

                            openAnimation = {this.state.openAnimation}
                        />
                        
                        <Numbers 
                            active = {this.state.isToggleOn} 
                            active2 = {this.state.isToggleOn2}
                            active3 = {this.state.isToggleOn3}
                            active4 = {this.state.isToggleOn4}

                            deposit_money = {this.state.deposit_money} 
                            AddNumber = {this.AddNumber} 
                            handleDelete = {this.handleDelete} 
                            handleOk = {this.handleOk} 

                            handleInsert = {this.handleInsert}
                            handleRecoilInsert = {this.handleRecoilInsert}
                            handleTake = {this.handleTake}
                            handleRecoilTake = {this.handleRecoilTake}
                            handleRecoilTransfer = {this.handleRecoilTransfer}
                            handleRecoilMore = {this.handleRecoilMore}

                            openAnimation = {this.state.openAnimation}
                        />
                        
                        <Footer 
                            activeDeposit = {this.state.isToggleOn}
                            handleInsert = {this.handleInsert}
                            recoil1 = {this.state.recoil1}

                            activeTake = {this.state.isToggleOn2}
                            handleTake = {this.handleTake}
                            recoil2 = {this.state.recoil2}

                            activeTransfer = {this.state.isToggleOn3}
                            handleTransfer = {this.handleTransfer}
                            recoil3 = {this.state.recoil3}

                            activeMore = {this.state.isToggleOn4}
                            handleMore = {this.handleMore}
                            recoil4 = {this.state.recoil4}

                            openAnimation = {this.state.openAnimation}
                        />
                    </div>  
                </div>
            </div>
        )
    }
}

export default Atm;


