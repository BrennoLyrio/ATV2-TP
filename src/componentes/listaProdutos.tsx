import { Component } from "react";

type Produto = {
    nome: string;
    preco: number;
    marca: string;
    categoria: string;
    tipoAnimal: string;
    quantidade: number;
    unidade: string;
    descricao: string;
};

type props = {
    tema: string;
};

type state = {
    produtos: Produto[];
    produtoSelecionado: number | null;
};

export default class ListaProdutos extends Component<props, state> {
    constructor(props: props) {
        super(props);
        this.state = {
            produtos: [
                {
                    nome: "Ração para cachorro",
                    preco: 50.0,
                    marca: "PetLove",
                    categoria: "Alimentos",
                    tipoAnimal: "Cachorro",
                    quantidade: 500,
                    unidade: "g",
                    descricao: "Ração nutritiva para cães adultos.",
                },
                {
                    nome: "Shampoo para gatos",
                    preco: 30.0,
                    marca: "PetCare",
                    categoria: "Higiene",
                    tipoAnimal: "Gato",
                    quantidade: 250,
                    unidade: "ml",
                    descricao: "Shampoo suave para gatos, ideal para pele sensível.",
                },
                {
                    nome: "Osso de brinquedo",
                    preco: 20.0,
                    marca: "PetFun",
                    categoria: "Brinquedos",
                    tipoAnimal: "Cachorro",
                    quantidade: 1,
                    unidade: "unidade",
                    descricao: "Osso de borracha resistente e seguro para mastigar.",
                },
                {
                    nome: "Antipulgas para gatos",
                    preco: 70.0,
                    marca: "SafePets",
                    categoria: "Saúde",
                    tipoAnimal: "Gato",
                    quantidade: 1,
                    unidade: "unidade",
                    descricao: "Produto antipulgas eficaz e fácil de aplicar.",
                },
                {
                    nome: "Coleira ajustável",
                    preco: 40.0,
                    marca: "PetComfort",
                    categoria: "Acessórios",
                    tipoAnimal: "Todos",
                    quantidade: 1,
                    unidade: "unidade",
                    descricao: "Coleira ajustável para cães e gatos, confortável e segura.",
                },
            ],
            produtoSelecionado: null,
        };
    }

    toggleDropdown = (index: number) => {
        this.setState((prevState) => ({
            produtoSelecionado: prevState.produtoSelecionado === index ? null : index,
        }));
    };

    handleEditProduto = (index: number) => {
        const produto = this.state.produtos[index];
        console.log("Editando produto:", produto);
        // Aqui você pode abrir um modal ou redirecionar para a página de edição
    };

    handleDeleteProduto = (index: number) => {
        if (window.confirm("Tem certeza que deseja excluir este produto?")) {
            this.setState((prevState) => ({
                produtos: prevState.produtos.filter((_, i) => i !== index),
            }));
        }
    };

    render() {
        const { tema } = this.props;
        const { produtos, produtoSelecionado } = this.state;

        return (
            <div className="container mt-3">
                <h1 className="mb-4">Lista de Produtos</h1>
                <div className="accordion" id="listaProdutos">
                    {produtos.map((produto, index) => (
                        <div className="accordion-item" key={index}>
                            <h2 className="accordion-header">
                                <div className="d-flex w-100 align-items-center justify-content-between">
                                    <button
                                        className={`accordion-button ${produtoSelecionado === index ? "" : "collapsed"}`}
                                        type="button"
                                        onClick={() => this.toggleDropdown(index)}
                                        style={{ background: tema }}
                                    >
                                        {produto.nome}
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
                                                    onClick={() => this.handleEditProduto(index)}
                                                >
                                                    Editar
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    className="dropdown-item text-danger"
                                                    onClick={() => this.handleDeleteProduto(index)}
                                                >
                                                    Excluir
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </h2>
                            <div
                                className={`accordion-collapse collapse ${produtoSelecionado === index ? "show" : ""}`}
                                data-bs-parent="#listaProdutos"
                            >
                                <div className="accordion-body">
                                    <p>
                                        <strong>Nome:</strong> {produto.nome}
                                    </p>
                                    <p>
                                        <strong>Preço:</strong> {produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                    </p>
                                    <p>
                                        <strong>Marca:</strong> {produto.marca}
                                    </p>
                                    <p>
                                        <strong>Categoria:</strong> {produto.categoria}
                                    </p>
                                    <p>
                                        <strong>Tipo de Animal:</strong> {produto.tipoAnimal}
                                    </p>
                                    <p>
                                        <strong>Quantidade:</strong> {produto.quantidade} {produto.unidade}
                                    </p>
                                    <p>
                                        <strong>Descrição:</strong> {produto.descricao}
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
