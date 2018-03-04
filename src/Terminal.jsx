import React, {Component} from 'react';

class Terminal extends Component {
    constructor(props) {
        super(props);
        const contents =
            [
                'Welcome to solid-flow.com',
                'professional space of Iuliia Ichin-Norbu',
                'software developer who makes things work',
                ' '
            ];
        this.state = {lines: [], contents: contents, currentLine: []};

    }
    componentDidMount() {
        this.timerID = setInterval(() => this.type(), 50);

    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    type () {
        const nextChar = this.state.currentLine.shift();
        if (nextChar) {
            const line = this.state.lines[this.state.lines.length - 1];
            line.push(nextChar);
            const newLines = this.state.lines;
            newLines[newLines.length -1] = line;
            this.setState({lines: newLines});
        } else {
            const nextLine = this.state.contents.shift();

            if (!nextLine) {
                clearInterval(this.timerID);
            } else {
                this.setState({currentLine: nextLine.split('')});
                const newLines = this.state.lines;
                newLines.push([]);
                this.setState({lines: newLines});
            }
        }
    }
    render() {
        const listItems = this.state.lines.map((line, index) => {
                if (index === this.state.lines.length -1) {
                    return (<li><span className={"line-start"}></span>{line.join('')}<span className={"cursor"}></span></li>)
                }
                return (<li><span className={"line-start"}></span>{line.join('')}</li>);
            }
        );
        return (
            <ul>
                {listItems}
            </ul>
        );
    }
}

export default Terminal;