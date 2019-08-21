import React from 'react';

class Footer extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        if(this.props.activeDeposit && this.props.recoil1==false) { //DEPOSITAR
            return(
                <footer>
                    <button className="menu_button1 button_up_deposit">Depositar dinero</button>
                    <button className="menu_button2 menu_button_out">Retirar dinero</button>
                    <button className="menu_button3 menu_button_out">Transferir dinero</button>
                    <button className="menu_button4 menu_button_out">Más</button>
                </footer>
            )
        } else if(this.props.activeTake && this.props.recoil2==false) { //TOMAR
            return(
                <footer>
                    <button className="menu_button1 menu_button_out">Depositar dinero</button>
                    <button className="menu_button2 button_up_take">Retirar dinero</button>
                    <button className="menu_button3 menu_button_out">Transferir dinero</button>
                    <button className="menu_button4 menu_button_out">Más</button>
                </footer>
            )
        } else if(this.props.activeTransfer) { //TRANSFERIR
            return(
                <footer>
                    <button className="menu_button1 menu_button_out">Depositar dinero</button>
                    <button className="menu_button2 menu_button_out">Retirar dinero</button>
                    <button className="menu_button3 button_up_transfer">Transferir dinero</button>
                    <button className="menu_button4 menu_button_out">Más</button>
                </footer>
            )
        } else if(this.props.activeMore) { //MAS
            return(
                <footer>
                    <button className="menu_button1 menu_button_out">Depositar dinero</button>
                    <button className="menu_button2 menu_button_out">Retirar dinero</button>
                    <button className="menu_button3 menu_button_out">Transferir dinero</button>
                    <button className="menu_button4 button_up_more">Más</button>
                </footer>
            )    
        } else if (this.props.recoil1 && this.props.activeDeposit==false){
            return( // CERRAR DEPOSITAR
                <footer>
                    <button onClick={this.props.handleInsert} className="menu_button1 recoil">Depositar dinero</button>
                    <button onClick={this.props.handleTake} className="menu_button2 recoil2">Retirar dinero</button>
                    <button onClick={this.props.handleTransfer} className="menu_button3 recoil2">Transferir dinero</button>
                    <button onClick={this.props.handleMore} className="menu_button4 recoil2">Más</button>
                </footer>
            )
        } else if(this.props.recoil2 && this.props.activeTake==false) {
            return( // CERRAR TOMAR
                <footer>
                    <button onClick={this.props.handleInsert} className="menu_button1 recoil2">Depositar dinero</button>
                    <button onClick={this.props.handleTake} className="menu_button2 recoil">Retirar dinero</button>
                    <button onClick={this.props.handleTransfer} className="menu_button3 recoil2">Transferir dinero</button>
                    <button onClick={this.props.handleMore} className="menu_button4 recoil2">Más</button>
                </footer>
            )
        } else if(this.props.recoil3 && this.props.activeTransfer==false){ 
            return( //CERRAR TRANSFERIR
                <footer>
                    <button onClick={this.props.handleInsert} className="menu_button1 recoil2">Depositar dinero</button>
                    <button onClick={this.props.handleTake} className="menu_button2 recoil2">Retirar dinero</button>
                    <button onClick={this.props.handleTransfer} className="menu_button3 recoil">Transferir dinero</button>
                    <button onClick={this.props.handleMore} className="menu_button4 recoil2">Más</button>
                </footer>
            )
        } else if(this.props.recoil4 && this.props.activeMore==false) { 
            return( //CERRAR MAS   
                <footer>
                    <button onClick={this.props.handleInsert} className="menu_button1 recoil2">Depositar dinero</button>
                    <button onClick={this.props.handleTake} className="menu_button2 recoil2">Retirar dinero</button>
                    <button onClick={this.props.handleTransfer} className="menu_button3 recoil2">Transferir dinero</button>
                    <button onClick={this.props.handleMore} className="menu_button4 recoil_more">Más</button>
                </footer>
            )
        } else {
            return( //ABRIR CAJERO
                <footer className={this.props.openAnimation ? "footerAnimation" : ''}>
                    <button onClick={this.props.handleInsert} className="menu_button1" >Depositar dinero</button>
                    <button onClick={this.props.handleTake} className="menu_button2">Retirar dinero</button>
                    <button onClick={this.props.handleTransfer} className="menu_button3">Transferir dinero</button>
                    <button onClick={this.props.handleMore} className="menu_button4">Más</button>
                </footer>
            )
        }
    }
}

export default Footer;