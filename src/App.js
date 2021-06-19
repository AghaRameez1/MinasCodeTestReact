import React from 'react';
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      real_name: "Real Name",
      player_name: "Player Name",
      asset: "Assest",
      mockdata: [{
        'real_name': "Brianna Forbes",
        'player_name': 'Dreamlurk The Unstoppable',
        'asset': 'Foghammer Lead',
      }, {
        'real_name': "Darcy Candice Ball",
        'player_name': 'Crystaldash',
        'asset': 'Secret Glowquake Gold',
      }, {
        'real_name': "Hillary Gibbs",
        'player_name': 'Speedsoul',
        'asset': 'Shifting Rainshadow Iron',
      }, {
        'real_name': "Elva Becky Hammond",
        'player_name': 'Seekvenom The Mystic',
        'asset': "Valkyries' Opal Adamant",
      }, {
        'real_name': "Enid Rose",
        'player_name': 'Coincurse The Ghoul',
        'asset': 'Jewelevil Bronze Of Goddesses',
      }, {
        'real_name': "Esmeralda Carrillo",
        'player_name': 'Skulldart',
        'asset': 'Yellow Orichalcum Of Paladins',
      }]
    }
  }

  clickedhere(value) {
    this.setState({ real_name: value.real_name, player_name: value.player_name, asset: value.asset })
  }
  sortAscending() {
    this.state.mockdata.sort((a, b) => a.real_name.localeCompare(b.real_name))
    this.setState({ mockdata: this.state.mockdata })
  }
  sortDescending() {
    this.state.mockdata.sort((a, b) => b.real_name.localeCompare(a.real_name))
    this.setState({ mockdata: this.state.mockdata })
  }
  onSubmit() {
    if (this.state.real_name === "Real Name" || this.state.player_name === "Player Name" || this.state.asset === "Asset") {
      alert('Please select a card first')
    } else {
      alert('You selected: Real name: ' + this.state.real_name + ' Player Name: ' + this.state.player_name + ' Asset:' + this.state.asset)
    }
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Cards Game</h1>
          <p>Test made by Minas Code.</p>
        </div>
        <div className="row">
          <div className="col-md-7 outline">
            <h1> Details </h1>
            <hr />
            <div className="row">
              <div className="col-md-12">
                <ul>
                  <li>
                    {this.state.real_name}
                  </li>
                  <li>
                    {this.state.player_name}
                  </li>
                  <li>
                    {this.state.asset}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-1">

          </div>
          <div className="col-md-4 outline">
            <h1> Controls</h1>
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-5">
                    <button className="btn btn-block btn-success btn-lg" onClick={() => { this.sortAscending() }}>
                      Sort Asc
                    </button>
                  </div>
                  <div className="col-md-2"></div>
                  <div className="col-md-5">
                    <button className="btn btn-block btn-success btn-lg" onClick={() => { this.sortDescending() }}>
                      Sort Desc
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 margin-top">
                    <div className="d-grid gap-2">
                      <button className="btn btn-block btn-success btn-lg" onClick={() => { this.onSubmit() }}>
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h1>Overview</h1>
            <div className="row">
              {this.state.mockdata.map((items, index) =>
                <div className="col-md-3 outline custom-css">
                  <ul className="no-wrap" onClick={() => { this.clickedhere(items) }}>
                    <li className="text-hidden" key={items.real_name}>{items.real_name}</li>
                    <li className="text-hidden" key={items.player_name}>{items.player_name}</li>
                    <li className="text-hidden" key={items.asset}>{items.asset}</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const real_name = "Real Name"
// const player_name = "Player Name"
// const asset = "asset"



export default App;
