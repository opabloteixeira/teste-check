import React, { Component } from 'react';

import './search.css'

import { FaPlus } from 'react-icons/fa';



export default class Search extends Component {
    render() {
        return (
            <div className="center">
                <div className="search">
                    <div className="title-left">
                        <h1>Insumos</h1>
                        <span><a href="/">Busca avançada</a></span>
                    </div>

                    <div className="search-btns">
                        <div className="search-right">
                            <select className="select-one">
                                <option>Fazenda 1</option>
                                <option>Fazenda 2</option>
                                <option>Fazenda 3</option>
                            </select>
                            
                            <select className="select-two">
                                <option>2019</option>
                                <option>2018</option>
                                <option>2017</option>
                            </select>
                        </div>
                        <div className="btns-right">
                            <button type="button" className="btn-1">
                                <FaPlus size={13}/>
                                <span>Adicionar vários</span>
                            </button>
                            <button type="button" className="btn-2">
                                <FaPlus size={13}/>
                                <span>Adicionar</span>
                            </button>
                            <button type="button" className="btn-3">
                                Inventário
                            </button>
                            <button type="button" className="btn-4">
                                Exportar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
