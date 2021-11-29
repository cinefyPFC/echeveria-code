import React, { Component } from 'react';

class DadosUsuario extends Component {
  render() {
    return (
      <div>
        <div key={this.props.key}>
          <h3>{this.props.apelido}</h3>
          <h4> {this.props.email}</h4>
        </div>
        <hr />
      </div>
    );
  }
}

export default DadosUsuario;
