import { Component } from "react";

type Servico = {
    nome: string;
    preco: number;
    descricao: string;
};

type props = {
    tema: string;
};

type state = {
    servicos: Servico[];
    servicoSelecionado: number | null;
};

export default class ListaServicos extends Component<props, state> {
    constructor(props: props) {
        super(props);
        this.state = {
            servicos: [
                {
                    nome: "Banho e Tosa",
                    preco: 80.0,
                    descricao: "Serviço completo de banho e tosa para cães e gatos.",
                },
                {
                    nome: "Consulta Veterinária",
                    preco: 150.0,
                    descricao: "Consulta geral com um veterinário especializado.",
                },
                {
                    nome: "Vacinação",
                    preco: 120.0,
                    descricao: "Aplicação de vacinas de acordo com a necessidade do animal.",
                },
                {
                    nome: "Hospedagem para Pets",
                    preco: 200.0,
                    descricao: "Hospedagem confortável e segura para o seu pet.",
                },
                {
                    nome: "Adestramento",
                    preco: 300.0,
                    descricao: "Sessão de adestramento personalizada para cães.",
                },
            ],
            servicoSelecionado: null,
        };
    }

    toggleDropdown = (index: number) => {
        this.setState((prevState) => ({
            servicoSelecionado: prevState.servicoSelecionado === index ? null : index,
        }));
    };

    handleEditServico = (index: number) => {
        const servico = this.state.servicos[index];
        console.log("Editando serviço:", servico);
        // Aqui você pode abrir um modal ou redirecionar para a página de edição
    };

    handleDeleteServico = (index: number) => {
        if (window.confirm("Tem certeza que deseja excluir este serviço?")) {
            this.setState((prevState) => ({
                servicos: prevState.servicos.filter((_, i) => i !== index),
            }));
        }
    };

    render() {
        const { tema } = this.props;
        const { servicos, servicoSelecionado } = this.state;

        return (
            <div className="container mt-3">
                <h1 className="mb-4">Lista de Serviços</h1>
                <div className="accordion" id="listaServicos">
                    {servicos.map((servico, index) => (
                        <div className="accordion-item" key={index}>
                            <h2 className="accordion-header">
                                <div className="d-flex w-100 align-items-center justify-content-between">
                                    <button
                                        className={`accordion-button ${servicoSelecionado === index ? "" : "collapsed"}`}
                                        type="button"
                                        onClick={() => this.toggleDropdown(index)}
                                        style={{ background: tema }}
                                    >
                                        {servico.nome}
                                    </button>
                                    <div className="dropdown">
                                        <button
                                            className="btn btn-sm btn-secondary dropdown-toggle"
                                            type="button"
                                            id={`dropdownMenuButton-${index}`}
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Ações
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby={`dropdownMenuButton-${index}`}>
                                            <li>
                                                <button
                                                    className="dropdown-item"
                                                    onClick={() => this.handleEditServico(index)}
                                                >
                                                    Editar
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    className="dropdown-item text-danger"
                                                    onClick={() => this.handleDeleteServico(index)}
                                                >
                                                    Excluir
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </h2>
                            <div
                                className={`accordion-collapse collapse ${servicoSelecionado === index ? "show" : ""}`}
                                data-bs-parent="#listaServicos"
                            >
                                <div className="accordion-body">
                                    <p>
                                        <strong>Nome:</strong> {servico.nome}
                                    </p>
                                    <p>
                                        <strong>Preço:</strong> {servico.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                    </p>
                                    <p>
                                        <strong>Descrição:</strong> {servico.descricao}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
