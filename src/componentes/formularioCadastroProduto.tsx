import { Component } from "react";

type props = {
    tema: string
}

export default class FormularioCadastroProduto extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <div className="container mt-3">
                <h1>Cadastro de Produtos</h1>
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>R$</span>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Preço"
                            aria-label="Preço"
                            step="0.01"
                            min="0"
                            required
                        />
                    </div>

                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Marca" aria-label="Marca" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <select className="form-select" aria-label="Categoria" required>
                            <option value="">Selecione a categoria</option>
                            <option value="alimentos">Alimentos</option>
                            <option value="brinquedos">Brinquedos</option>
                            <option value="medicamentos">Medicamentos</option>
                            <option value="higiene">Higiene</option>
                            <option value="Roupas e acessórios">Roupas e acessórios</option>
                            <option value="Habitação e conforto">Habitação e conforto</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Tipo de animal (ex: cachorro, gato, todos)" aria-label="Tipo de animal" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Quantidade"
                            aria-label="Quantidade"
                            min="0"
                            required
                        />
                        <select className="form-select" aria-label="Unidade">
                            <option value="g">g</option>
                            <option value="kg">kg</option>
                            <option value="ml">ml</option>
                            <option value="L">L</option>
                            <option value="unidade">Unidade</option>
                        </select>
                    </div>
                    <b>Descreva brevemente o produto:</b>
                    <div className="input-group mb-3">
                        <textarea className="form-control" placeholder="Descreva brevemente o serviço" aria-label="Descrição" rows={3} required> </textarea>
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                    </div>
                </form>
            </div>
        )
    }
}