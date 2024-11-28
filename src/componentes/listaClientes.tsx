import { Component } from "react";

type Cliente = {
    nome: string;
    nomeSocial?: string; // Campo opcional
    cpf: string;
    rg: string;
    email: string;
    telefone: string;
};

type props = {
    tema: string;
};

type state = {
    clientes: Cliente[];
    clienteSelecionado: number | null;
};

export default class ListaClientes extends Component<props, state> {
    constructor(props: props) {
        super(props);
        this.state = {
            clientes: [
                { nome: "João Silva", nomeSocial: "Joãozinho", cpf: "123.456.789-00",rg: "25.678.123-4", email: "joao@gmail.com", telefone: "(11) 98765-4321" },
                { nome: "Maria Santos", cpf: "987.654.321-00", rg: "25.678.321-9", email: "maria@hotmail.com", telefone: "(21) 91234-5678" },
                { nome: "Carlos Souza", nomeSocial: "Carlão", cpf: "456.123.789-00", rg: "25.678.354-8", email: "carlos@yahoo.com", telefone: "(31) 99876-5432" },
            ],
            clienteSelecionado: null,
        };
    }

    toggleDropdown = (index: number) => {
        this.setState((prevState) => ({
            clienteSelecionado: prevState.clienteSelecionado === index ? null : index,
        }));
    };

    handleEditCliente = (index: number) => {
        const cliente = this.state.clientes[index];
        console.log("Editando cliente:", cliente);
        // Aqui você pode abrir um modal ou redirecionar para a página de edição
    };

    handleDeleteCliente = (index: number) => {
        if (window.confirm("Tem certeza que deseja excluir este cliente?")) {
            this.setState((prevState) => ({
                clientes: prevState.clientes.filter((_, i) => i !== index),
            }));
        }
    };

    render() {
        const { tema } = this.props;
        const { clientes, clienteSelecionado } = this.state;

        return (
            <div className="container mt-3">
                <h1 className="mb-4">Lista de Clientes</h1>
                <div className="accordion" id="listaClientes">
                    {clientes.map((cliente, index) => (
                        <div className="accordion-item" key={index}>
                            <h2 className="accordion-header">
                                <div className="d-flex w-100 align-items-center justify-content-between">
                                    <button
                                        className={`accordion-button ${clienteSelecionado === index ? "" : "collapsed"}`}
                                        type="button"
                                        onClick={() => this.toggleDropdown(index)}
                                        style={{ background: tema }}
                                    >
                                        {cliente.nome}
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
                                                    onClick={() => this.handleEditCliente(index)}
                                                >
                                                    Editar
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    className="dropdown-item text-danger"
                                                    onClick={() => this.handleDeleteCliente(index)}
                                                >
                                                    Excluir
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </h2>

                            <div
                                className={`accordion-collapse collapse ${clienteSelecionado === index ? "show" : ""}`}
                                data-bs-parent="#listaClientes"
                            >
                                <div className="accordion-body">
                                    <p>
                                        <strong>Nome:</strong> {cliente.nome}
                                    </p>
                                    {cliente.nomeSocial && (
                                        <p>
                                            <strong>Nome Social:</strong> {cliente.nomeSocial}
                                        </p>
                                    )}
                                    <p>
                                        <strong>CPF:</strong> {cliente.cpf}
                                    </p>
                                    <p>
                                        <strong>RG:</strong> {cliente.rg}
                                    </p>
                                    <p>
                                        <strong>E-mail:</strong> {cliente.email}
                                    </p>
                                    <p>
                                        <strong>Telefone:</strong> {cliente.telefone}
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
