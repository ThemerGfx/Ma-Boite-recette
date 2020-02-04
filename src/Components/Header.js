import React from 'react';

class Header extends React.Component {

    convertirPseudo = (pseudo) => {
        return (
            /[aeiouy]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`
        )
    };
    render() {
        return (
            <header>
                <h1>La boite à recette  {this.convertirPseudo(this.props.pseudo)}</h1>
            </header>
        )
    }
}

export default Header;