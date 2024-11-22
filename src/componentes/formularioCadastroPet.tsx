import { Component } from "react";

type props = {
    tema: string
}

export default class FormularioCadastroPet extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <div className="container mt-3">
                <h1>Cadastro de Pets</h1>
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Raca" aria-label="Raca" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Tipo" aria-label="Tipo" aria-describedby="basic-addon1" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Gênero</label>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="genero"
                                id="macho"
                                value="Macho"
                                required
                            />
                            <label className="form-check-label" htmlFor="macho">
                                Macho
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="genero"
                                id="femea"
                                value="Fêmea"
                                required
                            />
                            <label className="form-check-label" htmlFor="femea">
                                Fêmea
                            </label>
                        </div>
                    </div>
                    {/* <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                        <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                    </div> */}
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="CPF do dono" aria-label="CPF" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                    </div>
                </form>
            </div>
        )
    }
}