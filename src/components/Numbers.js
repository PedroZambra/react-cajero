import React from 'react';

class Section extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        //Control del tamaño de la cantidad
        let classSize = ''; 
        const money = this.props.deposit_money.toString().length;

        if(money <= 6){
            classSize += ' size';
        } else if (money <= 8) {
            classSize += ' size2';
        } else if (money <= 9) {
            classSize += ' size3';
        } else if (money <= 11) {
            classSize += ' size4';
        } else {
            classSize += ' size5';
        }

        if(this.props.active || this.props.active2) {
            return(
                <div className={(this.props.active || this.props.active2) ? "calcShow" : "calc"}>
                    <div className="numbers">
                        <div className="numbersAnimation">
                            <button onClick={this.props.AddNumber} value="1" className="number">1</button>
                            <button onClick={this.props.AddNumber} value="2" className="number">2</button>
                            <button onClick={this.props.AddNumber} value="3" className="number">3</button>    
                        </div>
                        <div className="numbersAnimation">
                            <button onClick={this.props.AddNumber} value="4" className="number">4</button>
                            <button onClick={this.props.AddNumber} value="5" className="number">5</button>
                            <button onClick={this.props.AddNumber} value="6" className="number">6</button>
                        </div>
                        <div className="numbersAnimation">
                            <button onClick={this.props.AddNumber} value="7" className="number">7</button>
                            <button onClick={this.props.AddNumber} value="8" className="number">8</button>
                            <button onClick={this.props.AddNumber} value="9" className="number">9</button>
                        </div>
                        <div className="numbersAnimation">
                            <button onClick={this.props.handleDelete} value="delete" className="number">&lt;</button>
                            <button onClick={this.props.AddNumber} value="0" className="number">0</button>
                            {this.props.active ? <button onClick={() => this.props.handleOk('deposit')} className="number">OK</button> : null}
                            {this.props.active2 ? <button onClick={() => this.props.handleOk('take')} className="number">OK</button> : null}
                        </div>
                    </div>
                    <div className="showQuantity">
                        <p className="topp">Cantidad</p>
                        <div className="quantity">
                            <p className={`quantity_size ${classSize}`}>{this.props.deposit_money}€</p>
                            <hr className="quantity_hr"/>
                        </div>
                    </div>
                    <div className="back">
                        {this.props.active ? <button onClick={this.props.handleRecoilInsert} className="backIn">&lt;</button> : null}
                        {this.props.active2 ? <button onClick={this.props.handleRecoilTake} className="backIn">&lt;</button> : null}
                    </div>
                </div>
            )
        } else {
            return(
                <div className={this.props.active3 || this.props.active4 ? "temporal" : "calc"}>
                    <h2 className="prox">Próximamente!</h2>
                    {this.props.active3 ? <button onClick={this.props.handleRecoilTransfer} className="backIn">&lt;</button> : null}
                    {this.props.active4 ? <button onClick={this.props.handleRecoilMore} className="backIn">&lt;</button> : null}
                </div>
            )
        }
    }
}

export default Section;