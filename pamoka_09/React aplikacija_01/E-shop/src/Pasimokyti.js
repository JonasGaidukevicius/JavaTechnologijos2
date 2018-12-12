<input onclick={(event) -> this.onClick(event, papildomas)} />




class Komponentas extends Component {
    handleClick = (event) => {
        this.props.onClick(this.props.papildomas);
    }
    render () {
        return (
            <input onclick={this.handleClick} />
        );
    }
}

//tuomet panaudojimas būtų toks
<Komponentas papildomas={papildomas}
             onClick={this.onKomponentoClick} />