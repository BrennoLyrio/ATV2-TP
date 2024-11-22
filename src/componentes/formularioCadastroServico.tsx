import { Component } from "react";

type props = {
    tema: string
}

export default class FormularioCadastroServico extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <div className="container mt-3">
                <h1>Cadastro de Serviços</h1>
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>R$</span>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Preço do serviço"
                            aria-label="Preço"
                            step="0.01"
                            min="0"
                            required
                        />
                    </div>
                    <b>Descreva brevemente o serviço:</b>
                    <div className="input-group mb-3">
                        <textarea className="form-control" placeholder="Descreva brevemente o serviço" aria-label="Descrição" rows={3} required> </textarea>
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                    </div>

                </form>
                <div className="footer">
                    <p> Preencha só o formulário necessário</p>
                </div>
            </div>
        )
    }
}