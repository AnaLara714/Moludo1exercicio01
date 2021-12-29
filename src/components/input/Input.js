import React, {Component} from 'react';
import './Input.css';

class Input extends Component {

    constructor(props){
        super(props)
        this.state = { n1 : "", n2:"", resul: ""}
    }

    N1 = (event) => {
        this.setState({n1:event.target.value})
    }

    N2 = (event) => {
        this.setState({n2:event.target.value})
    }

    Somar = (event) => {
        var numero1 = parseInt(this.state.n1);
        var numero2 = parseInt(this.state.n2);
        var soma = numero1 + numero2;

        this.setState({resul: "O resultado da soma entre "+numero1+" e "+numero2+" é "+soma});
        this.setState({n1:"", n2:""})

        event.preventDefault();
    }

    render(){
        return(
            <div className="interface">
                <br/><br/>
            <fieldset className="fieldset">
                <legend className="title">CALCULAR SOMA</legend>
                <form onSubmit={this.Somar} >
                    <br/><div></div>
                    <input type= 'number' id = 'num1' value={this.state.n1} onChange={this.N1}/>
                
                    +

                    <input type= 'number' id = 'num2' value={this.state.n2} onChange={this.N2}/>

                    <br/>

                    <input type="submit" id="button" value="=" />

                    <p id="resul"> {this.state.resul} </p>

                    <br/>
                </form>
            </fieldset>
            </div>
        );
    }

}

export default Input;