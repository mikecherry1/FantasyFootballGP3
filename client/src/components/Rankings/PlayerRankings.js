import React from "react";
import Container from "../Container/Container";
import RankingList from "../TeamList/RankingList";
import { connect } from "react-redux";
import "./PlayerRankings.css";

class PlayerRankings extends React.Component {

  render(){
    return(
      <Container className="rankings-table" >
        <div>
          <h3>STARTER PLAYERS</h3>
          <RankingList
            teamPlayers={this.props.starterPlayers}
          />
        </div>

        <div>
          <h3>BENCH PLAYERS</h3>
          <RankingList
            teamPlayers={this.props.benchPlayers}
          />
        </div>
      </Container>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    playerSearch: state.playerSearch,
    playersNames: state.playersNames,
    playersStats: state.playersStats,
    starterPlayers: state.starterPlayers,
    benchPlayers: state.benchPlayers
  }
};

export default connect(mapStateToProps)(PlayerRankings);