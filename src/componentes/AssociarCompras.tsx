import { Component } from "react";

type Cliente = {
    id: number;
    nome: string;
};

type Produto = {
    id: number;
    nome: string;
    preco: number;
};

type Servico = {
    id: number;
    nome: string;
    preco: number;
};

type props = {
    tema: string;
};

type state = {
    clientes: Cliente[];
    produtos: Produto[];
    servicos: Servico[];
    clienteSelecionado: number | null;
    produtoSelecionado: Produto | null;
    servicoSelecionado: Servico | null;
    quantidadeProduto: number;
    quantidadeServico: number;
};

export default class RegistrarCompras extends Component<props, state> {
    constructor(props: props) {
        super(props);
        this.state = {
            clientes: [
                { id: 1, nome: "João Silva" },
                { id: 2, nome: "Maria Santos" },
                { id: 3, nome: "Carlos Souza" },
            ],
            produtos: [
                { id: 1, nome: "Ração para cachorro", preco: 50.0 },
                { id: 2, nome: "Shampoo para gatos", preco: 30.0 },
                { id: 3, nome: "Osso de brinquedo", preco: 20.0 },
            ],
            servicos: [
                { id: 1, nome: "Banho e Tosa", preco: 80.0 },
                { id: 2, nome: "Consulta Veterinária", preco: 150.0 },
                { id: 3, nome: "Vacinação", preco: 120.0 },
            ],
            clienteSelecionado: null,
            produtoSelecionado: null,
            servicoSelecionado: null,
            quantidadeProduto: 0,
            quantidadeServico: 0,
        };
    }

    handleSelecionarCliente = (id: number) => {
        this.setState({ clienteSelecionado: id });
    };

    handleSelecionarProduto = (id: number) => {
        const produto = this.state.produtos.find((p) => p.id === id) || null;
        this.setState({ produtoSelecionado: produto, quantidadeProduto: produto ? 1 : 0 });
    };

    handleSelecionarServico = (id: number) => {
        const servico = this.state.servicos.find((s) => s.id === id) || null;
        this.setState({ servicoSelecionado: servico, quantidadeServico: servico ? 1 : 0 });
    };

    handleQuantidadeProdutoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ quantidadeProduto: parseInt(e.target.value, 10) || 0 });
    };

    handleQuantidadeServicoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ quantidadeServico: parseInt(e.target.value, 10) || 0 });
    };

    handleAdicionarCompra = () => {
        const { clienteSelecionado, produtoSelecionado, quantidadeProduto, servicoSelecionado, quantidadeServico } = this.state;

        if (!clienteSelecionado) {
            alert("Por favor, selecione um cliente.");
            return;
        }

        if (!produtoSelecionado && !servicoSelecionado) {
            alert("Por favor, selecione pelo menos um produto ou serviço.");
            return;
        }

        if (produtoSelecionado && quantidadeProduto <= 0) {
            alert("Por favor, insira uma quantidade válida para o produto.");
            return;
        }

        if (servicoSelecionado && quantidadeServico <= 0) {
            alert("Por favor, insira uma quantidade válida para o serviço.");
            return;
        }

        alert("Compra adicionada com sucesso!");
        this.setState({
            produtoSelecionado: null,
            servicoSelecionado: null,
            quantidadeProduto: 0,
            quantidadeServico: 0,
        });
    };

    render() {
        const {
            clientes,
            produtos,
            servicos,
            clienteSelecionado,
            produtoSelecionado,
            servicoSelecionado,
            quantidadeProduto,
            quantidadeServico,
        } = this.state;
        const { tema } = this.props;

        return (
            <div className="container mt-3">
                <h1 className="mb-4">Registrar Compras</h1>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Selecione um Cliente</label>
                        <select
                            className="form-select"
                            onChange={(e) => this.handleSelecionarCliente(Number(e.target.value))}
                            value={clienteSelecionado || ""}
                            style={{ background: tema }}
                        >
                            <option value="">Selecione...</option>
                            {clientes.map((cliente) => (
                                <option key={cliente.id} value={cliente.id}>
                                    {cliente.nome}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Selecione um Produto</label>
                        <select
                            className="form-select"
                            onChange={(e) => this.handleSelecionarProduto(Number(e.target.value))}
                            value={produtoSelecionado?.id || ""}
                            style={{ background: tema }}
                        >
                            <option value="">Selecione...</option>
                            {produtos.map((produto) => (
                                <option key={produto.id} value={produto.id}>
                                    {produto.nome} - {produto.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Quantidade de Produto</label>
                        <input
                            type="number"
                            className="form-control"
                            value={quantidadeProduto}
                            min={1}
                            onChange={this.handleQuantidadeProdutoChange}
                            disabled={!produtoSelecionado}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Selecione um Serviço</label>
                        <select
                            className="form-select"
                            onChange={(e) => this.handleSelecionarServico(Number(e.target.value))}
                            value={servicoSelecionado?.id || ""}
                            style={{ background: tema }}
                        >
                            <option value="">Selecione...</option>
                            {servicos.map((servico) => (
                                <option key={servico.id} value={servico.id}>
                                    {servico.nome} - {servico.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Quantidade de Serviço</label>
                        <input
                            type="number"
                            className="form-control"
                            value={quantidadeServico}
                            min={1}
                            onChange={this.handleQuantidadeServicoChange}
                            disabled={!servicoSelecionado}
                        />
                    </div>

                    <button
                        type="button"
                        className="btn"
                        style={{ backgroundColor: "#6c757d", color: "white" }}
                        onClick={this.handleAdicionarCompra}
                    >
                        Adicionar Compra
                    </button>
                </form>
            </div>
        );
    }
}
