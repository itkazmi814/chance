import React, { Component } from 'react';
import { connect } from 'react-redux';
import retrieveCharges from './actions'
import api from './util/api';
import { Table, Jumbotron } from 'react-bootstrap'
import { ButtonContainer, Charge, ChargeSetCount, TableHeader } from './components'

class App extends Component {
  retrieveCharges = () => {
    api.getCharges()
    .then(res => this.props.retrieveCharges(res.data.charges))
  }

  render() {
    return (
      <Jumbotron>
        <ButtonContainer  onClick={this.retrieveCharges} />
        <ChargeSetCount numSets={this.props.state.charges.length}/>
        <Table>
          <TableHeader />
            <tbody>
              { this.props.state.charges.map((charge, i) => (
                <Charge 
                  key={i}
                  amount={charge.amount}
                  name={charge.name}
                  type={charge.type}
                  description={charge.description}
                  count={charge.count}
                />
              ))}
            </tbody>
        </Table>
      </Jumbotron>
    );
  }
}

const mapStateToProps = store => ({
  state: store
})

const mapDispatchToProps = dispatch => ({
  retrieveCharges: charges => dispatch(retrieveCharges(charges))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
