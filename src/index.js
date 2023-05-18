'use strict'

import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

function Cell(props) {
    const [color, changeColor] = useState('#FFF');

    return (
        <div style={{backgroundColor: color}} className="cell" onClick={() => changeColor(props.value)}></div>
    )
}

class Palette extends React.Component {
    static colors = {
        red: '#FF0000FF',
        yellow: '#FFDD00FF',
        darkBlue: '#0800FFFF',
        blue: '#00b2ff',
        green: '#24b600',
        black: '#000',
        violet: '#7813bf',
        orange: '#ff6400'
    }

    render () {

        const getColorsContent = colors => {
            let content = [];

            for (let color in colors) {
                const item = colors[color];
                content.push(<div key={color} style={{backgroundColor: item}} className="color" onClick={() => this.props.onSetColor(item)}></div>);
            }

            return content;
        };

        return (
            <div>
                <div className='palette-row'>
                    <div>{getColorsContent(Palette.colors).slice(0, 4)}</div>
                </div>
                <div className='palette-row'>
                    <div>{getColorsContent(Palette.colors).slice(4, 8)}</div>
                </div>
            </div>
        )
    }
}

class Place extends React.Component {
    renderCell() {
        return (<Cell value={this.props.color}
        />);
    }

    render () {
        return (
            <div>
                <div className="place-row">
                    {this.renderCell(0)}
                    {this.renderCell(1)}
                    {this.renderCell(2)}
                    {this.renderCell(3)}
                    {this.renderCell(4)}
                    {this.renderCell(5)}
                </div>
                <div className="place-row">
                    {this.renderCell(6)}
                    {this.renderCell(7)}
                    {this.renderCell(8)}
                    {this.renderCell(9)}
                    {this.renderCell(10)}
                    {this.renderCell(11)}
                </div>
                <div className="place-row">
                    {this.renderCell(12)}
                    {this.renderCell(13)}
                    {this.renderCell(14)}
                    {this.renderCell(15)}
                    {this.renderCell(16)}
                    {this.renderCell(17)}
                </div>
                <div className="place-row">
                    {this.renderCell(18)}
                    {this.renderCell(19)}
                    {this.renderCell(20)}
                    {this.renderCell(21)}
                    {this.renderCell(22)}
                    {this.renderCell(23)}
                </div>
                <div className="place-row">
                    {this.renderCell(24)}
                    {this.renderCell(25)}
                    {this.renderCell(26)}
                    {this.renderCell(27)}
                    {this.renderCell(28)}
                    {this.renderCell(29)}
                </div>
                <div className="place-row">
                    {this.renderCell(30)}
                    {this.renderCell(31)}
                    {this.renderCell(32)}
                    {this.renderCell(33)}
                    {this.renderCell(34)}
                    {this.renderCell(35)}
                </div>
            </div>
        )
    }
}

class Coloring extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            brushColor: '#000'
        };
    }

    render () {
        return (
            <div className="coloring">
                <div className="cells">
                    <Place color={this.state.brushColor}
                    />
                </div>
                <div className="palette">
                    <Palette onSetColor={(color) => {
                        this.setState({brushColor: color})
                    }}
                    />

                    <button className='eraser' onClick={() => this.setState({brushColor: '#FFF'})}>Стерка</button>
                </div>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Coloring />);