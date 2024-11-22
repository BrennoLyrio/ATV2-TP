import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaClientes";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaPets from "./listaPets";
import FormularioCadastroPet from "./formularioCadastroPet";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import FormularioCadastroServico from "./formularioCadastroServico";
import ListaProdutos from "./listaProdutos";
import ListaServicos from "./listaServicos";
import ListaDadosEspecificos from "./listaDadosEspecificos";
import AssociarCompras from "./AssociarCompras";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state>{
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Pets', 'Produtos', 'Serviços', 'Cadastros', 'Registro de Compras' ,'Dados Avançados']} />
        if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="#e3f2fd" />
                </>
            )
        } else if (this.state.tela === 'Cadastros'){
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="#e3f2fd" />
                    <FormularioCadastroPet tema="#e3f2fd" />
                    <FormularioCadastroProduto tema="#e3f2fd" />
                    <FormularioCadastroServico tema="#e3f2fd" />
                </>
            )
        } else if (this.state.tela === 'Pets') {
            return (
                <>
                    {barraNavegacao}
                    <ListaPets tema="#e3f2fd" />
                </>
            )
        } else if (this.state.tela === 'Produtos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaProdutos tema="#e3f2fd" />
                </>
            )

        }else if (this.state.tela === 'Serviços' ) {
            return (
                <>
                    {barraNavegacao}
                    <ListaServicos tema="#e3f2fd" />
                </>
            )
        }else if (this.state.tela === 'Dados Avançados' ) {
            return (
                <>
                    {barraNavegacao}
                    <ListaDadosEspecificos tema="#e3f2fd" />
                </>
            )
        }else if (this.state.tela === 'Registro de Compras' ) {
            return (
                <>
                    {barraNavegacao}
                    <AssociarCompras tema="#e3f2fd" />
                </>
            )
        } else {
            return null //Caso nenhuma tela seja selecionada
        }
    }
}