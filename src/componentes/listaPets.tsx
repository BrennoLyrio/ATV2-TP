import { Component } from "react";

type Pet = {
    nome: string;
    raca: string;
    tipo: string;
    dono: string;
    cpfDono: string;
};

type props = {
    tema: string;
};

type state = {
    pets: Pet[];
    petSelecionado: number | null;
};

export default class ListaPets extends Component<props, state> {
    constructor(props: props) {
        super(props);
        this.state = {
            pets: [
                { nome: "Rinno", raca: "Golden Retriever", tipo: "Cachorro", dono: "João Silva", cpfDono: "123.456.789-00" },
                { nome: "Mimi", raca: "Persa", tipo: "Gato", dono: "Maria Santos", cpfDono: "987.654.321-00" },
                { nome: "Bob", raca: "Calopsita", tipo: "Pássaro", dono: "Carlos Souza", cpfDono: "456.123.789-00" },
            ],
            petSelecionado: null,
        };
    }

    toggleDropdown = (index: number) => {
        this.setState((prevState) => ({
            petSelecionado: prevState.petSelecionado === index ? null : index,
        }));
    };

    handleEditPet = (index: number) => {
        const pet = this.state.pets[index];
        console.log("Editando pet:", pet);
        // Aqui você pode abrir um modal ou redirecionar para a página de edição
    };

    handleDeletePet = (index: number) => {
        if (window.confirm("Tem certeza que deseja excluir este pet?")) {
            this.setState((prevState) => ({
                pets: prevState.pets.filter((_, i) => i !== index),
            }));
        }
    };

    render() {
        const { tema } = this.props;
        const { pets, petSelecionado } = this.state;

        return (
            <div className="container mt-3">
                <h1 className="mb-4">Lista de Pets</h1>
                <div className="accordion" id="listaPets">
                    {pets.map((pet, index) => (
                        <div className="accordion-item" key={index}>
                            <h2 className="accordion-header">
                                <div className="d-flex w-100 align-items-center justify-content-between">
                                    <button
                                        className={`accordion-button ${petSelecionado === index ? "" : "collapsed"}`}
                                        type="button"
                                        onClick={() => this.toggleDropdown(index)}
                                        style={{ background: tema }}
                                    >
                                        {pet.nome}
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
                                                    onClick={() => this.handleEditPet(index)}
                                                >
                                                    Editar
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    className="dropdown-item text-danger"
                                                    onClick={() => this.handleDeletePet(index)}
                                                >
                                                    Excluir
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </h2>
                            <div
                                className={`accordion-collapse collapse ${petSelecionado === index ? "show" : ""}`}
                                data-bs-parent="#listaPets"
                            >
                                <div className="accordion-body">
                                    <p>
                                        <strong>Nome:</strong> {pet.nome}
                                    </p>
                                    <p>
                                        <strong>Raça:</strong> {pet.raca}
                                    </p>
                                    <p>
                                        <strong>Tipo:</strong> {pet.tipo}
                                    </p>
                                    <p>
                                        <strong>Nome do Dono:</strong> {pet.dono}
                                    </p>
                                    <p>
                                        <strong>CPF do Dono:</strong> {pet.cpfDono}
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
