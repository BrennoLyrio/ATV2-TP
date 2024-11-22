import { Component } from "react";

type Cliente = {
    nome: string;
    consumoProdutos: number;
    consumoServicos: number;
    consumoTotal: number;
    consumoTotalValor: number; // Total em dinheiro (R$)
};

type Pet = {
    tipo: string;
    raca: string;
    consumoProdutos: { produto: string; quantidade: number }[];
    consumoServicos: { servico: string; quantidade: number }[];

};

type Produto = {
    nome: string;
    quantidadeConsumida: number;
};

type Servico = {
    nome: string;
    quantidadeConsumida: number;
};

type props = {
    tema: string;
};

type state = {
    clientes: Cliente[];
    pets: Pet[];
    produtos: Produto[];
    servicos: Servico[];
    dadoSelecionado: number | null;
};

export default class ListaDadosEspecificos extends Component<props, state> {
    constructor(props: props) {
        super(props);
        this.state = {
            clientes: [
                {
                    nome: "João Silva",
                    consumoProdutos: 10,
                    consumoServicos: 5,
                    consumoTotal: 15,
                    consumoTotalValor: 1300, // R$ 1000 (produtos) + R$ 300 (serviços)
                },
                {
                    nome: "Maria Santos",
                    consumoProdutos: 7,
                    consumoServicos: 4,
                    consumoTotal: 11,
                    consumoTotalValor: 950, // R$ 700 (produtos) + R$ 250 (serviços)
                },
                {
                    nome: "Carlos Souza",
                    consumoProdutos: 8,
                    consumoServicos: 6,
                    consumoTotal: 14,
                    consumoTotalValor: 1200, // R$ 800 (produtos) + R$ 400 (serviços)
                },
            ],
            pets: [
                {
                    tipo: "Cachorro",
                    raca: "Golden Retriever",
                    consumoProdutos: [
                        { produto: "Ração", quantidade: 50 },
                        { produto: "Brinquedo de Borracha", quantidade: 30 },
                    ],
                    consumoServicos: [
                        { servico: "Banho e Tosa", quantidade: 20 },
                        { servico: "Consulta Veterinária", quantidade: 10 },
                    ],
                },
                {
                    tipo: "Gato",
                    raca: "Persa",
                    consumoProdutos: [
                        { produto: "Shampoo", quantidade: 40 },
                        { produto: "Ração Premium", quantidade: 25 },
                    ],
                    consumoServicos: [
                        { servico: "Consulta Veterinária", quantidade: 15 },
                        { servico: "Vacinação", quantidade: 10 },
                    ],
                },
                {
                    tipo: "Pássaro",
                    raca: "Calopsita",
                    consumoProdutos: [
                        { produto: "Mistura de Sementes", quantidade: 30 },
                        { produto: "Brinquedo de Madeira", quantidade: 10 },
                    ],
                    consumoServicos: [
                        { servico: "Adestramento", quantidade: 5 },
                    ],
                },
            ],
            produtos: [
                { nome: "Ração para cachorro", quantidadeConsumida: 150 },
                { nome: "Shampoo para gatos", quantidadeConsumida: 100 },
                { nome: "Osso de brinquedo", quantidadeConsumida: 80 },
                { nome: "Mistura de Sementes", quantidadeConsumida: 60 },
                { nome: "Brinquedo de Madeira", quantidadeConsumida: 40 },
            ],
            servicos: [
                { nome: "Banho e Tosa", quantidadeConsumida: 120 },
                { nome: "Vacinação", quantidadeConsumida: 95 },
                { nome: "Consulta Veterinária", quantidadeConsumida: 75 },
                { nome: "Hospedagem para Pets", quantidadeConsumida: 50 },
                { nome: "Adestramento", quantidadeConsumida: 30 },
            ],
            dadoSelecionado: null,
        };
    }

    toggleDropdown = (index: number) => {
        this.setState((prevState) => ({
            dadoSelecionado: prevState.dadoSelecionado === index ? null : index,
        }));
    };

    render() {
        const { tema } = this.props;
        const { clientes, pets, produtos, servicos, dadoSelecionado } = this.state;

        const categorias = [
            {
                titulo: "10 Clientes que Mais Consumiram Produtos",
                dados: [...clientes].sort((a, b) => b.consumoProdutos - a.consumoProdutos).slice(0, 5),
                render: (item: Cliente) => (
                    <>
                        <p><strong>Nome:</strong> {item.nome}</p>
                        <p><strong>Consumo de Produtos:</strong> {item.consumoProdutos} unidades</p>
                        <hr />
                    </>
                ),
            },
            {
                titulo: "10 Clientes que Mais Consumiram Serviços",
                dados: [...clientes].sort((a, b) => b.consumoServicos - a.consumoServicos).slice(0, 5),
                render: (item: Cliente) => (
                    <>
                        <p><strong>Nome:</strong> {item.nome}</p>
                        <p><strong>Consumo de Serviços:</strong> {item.consumoServicos} unidades</p>
                        <hr />
                    </>
                ),
            },
            {
                titulo: "Produtos Mais Consumidos",
                dados: [...produtos].sort((a, b) => b.quantidadeConsumida - a.quantidadeConsumida),
                render: (item: Produto) => (
                    <>
                        <p><strong>Produto:</strong> {item.nome}</p>
                        <p><strong>Quantidade Consumida:</strong> {item.quantidadeConsumida}</p>
                        <hr />
                    </>
                ),
            },
            {
                titulo: "Serviços Mais Consumidos",
                dados: [...servicos].sort((a, b) => b.quantidadeConsumida - a.quantidadeConsumida),
                render: (item: Servico) => (
                    <>
                        <p><strong>Serviço:</strong> {item.nome}</p>
                        <p><strong>Quantidade Consumida:</strong> {item.quantidadeConsumida}</p>
                        <hr />
                    </>
                ),
            },
            {
                titulo: "Produtos Mais Consumidos por Tipo e Raça de Pets",
                dados: pets.flatMap((pet) =>
                    pet.consumoProdutos.map((consumo) => ({
                        tipo: pet.tipo,
                        raca: pet.raca,
                        produto: consumo.produto,
                        quantidade: consumo.quantidade,
                    }))
                ),
                render: (item: any) => (
                    <>
                        <p><strong>Tipo:</strong> {item.tipo}</p>
                        <p><strong>Raça:</strong> {item.raca}</p>
                        <p><strong>Produto:</strong> {item.produto}</p>
                        <p><strong>Quantidade:</strong> {item.quantidade}</p>
                        <hr />
                    </>
                ),
            },
            {
                titulo: "Serviços Mais Consumidos por Tipo e Raça de Pets",
                dados: pets.flatMap((pet) =>
                    pet.consumoServicos.map((consumo) => ({
                        tipo: pet.tipo,
                        raca: pet.raca,
                        servico: consumo.servico,
                        quantidade: consumo.quantidade,
                    }))
                ),
                render: (item: any) => (
                    <>
                        <p><strong>Tipo:</strong> {item.tipo}</p>
                        <p><strong>Raça:</strong> {item.raca}</p>
                        <p><strong>Serviço:</strong> {item.servico}</p>
                        <p><strong>Quantidade:</strong> {item.quantidade}</p>
                        <hr />
                    </>
                ),
            },
            {
                titulo: "5 Clientes que Mais Consumiram em Valor",
                dados: [...clientes].sort((a, b) => b.consumoTotalValor - a.consumoTotalValor).slice(0, 5),
                render: (item: Cliente) => (
                    <>
                        <p><strong>Nome:</strong> {item.nome}</p>
                        <p><strong>Total Consumido:</strong> {item.consumoTotalValor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
                        <hr />
                    </>
                ),
            },
        ];

        return (
            <div className="container mt-3">
                <h1 className="mb-4">Dados Específicos</h1>
                <div className="accordion" id="dadosEspecificos">
                    {categorias.map((categoria, index) => (
                        <div className="accordion-item" key={index}>
                            <h2 className="accordion-header">
                                <button
                                    className={`accordion-button ${dadoSelecionado === index ? "" : "collapsed"}`}
                                    type="button"
                                    onClick={() => this.toggleDropdown(index)}
                                    style={{ background: tema }}
                                >
                                    {categoria.titulo}
                                </button>
                            </h2>
                            <div
                                className={`accordion-collapse collapse ${dadoSelecionado === index ? "show" : ""}`}
                                data-bs-parent="#dadosEspecificos"
                            >
                                <div className="accordion-body">
                                    {categoria.dados.map((item, i) => (
                                        <div key={i}>{categoria.render(item)}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
