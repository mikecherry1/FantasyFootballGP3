import React from "react";
import Container from "../Container/Container";
import RankingList from "../TeamList/RankingList";
import RankingKList from "../TeamList/RankingKList";
import RankingSBList from "../TeamList/RankingSBList";
import { connect } from "react-redux";
import "./PlayerRankings.css";

class PlayerRankings extends React.Component {

  render(){
    return(
<<<<<<< Updated upstream
      <Container className="rankings-table">
        <div className="table-responsive"></div>
        <div>
          <h3>STARTERS</h3>
          <RankingList
            teamPlayers={this.props.starterPlayers}
          />
        </div>

        <div>
          <h3>BENCH</h3>
          <RankingList
            teamPlayers={this.props.benchPlayers}
          />
=======

      <Container>
        <div className="rankings-table striped grey lighten-5" >
          <div>
            <h3>QUARTERBACK</h3>
            <RankingList
              teamPlayers={this.props.QBFeedStats}
              allPlayersnfl={this.props.playersStats}
              markedPosition={this.props.QBFeedStats[0].position}
            />
          </div>
        </div>
        <div className="rankings-table striped grey lighten-5" >
          <div>
            <h3>RUNNING BACK</h3>
            <RankingList
              teamPlayers={this.props.RBFeedStats}
              allPlayersnfl={this.props.playersStats}
              markedPosition={this.props.RBFeedStats[0].position}
            />
          </div>
        </div>
        <div className="rankings-table striped grey lighten-5" >
          <div>
            <h3>WIDE RECEIVER</h3>
            <RankingList
              teamPlayers={this.props.WRFeedStats}
              allPlayersnfl={this.props.playersStats}
              markedPosition={this.props.WRFeedStats[0].position}
            />
          </div>
        </div>
        <div className="rankings-table striped grey lighten-5" >
          <div>
            <h3>TIGHT END</h3>
            <RankingList
              teamPlayers={this.props.TEFeedStats}
              allPlayersnfl={this.props.playersStats}
              markedPosition={this.props.TEFeedStats[0].position}
            />
          </div>
>>>>>>> Stashed changes
        </div>
        <div className="rankings-table striped grey lighten-5" >
         <div>
           <h3>KICKERS</h3>
           <RankingKList
             teamPlayers={this.props.KFeedStats}
           />
         </div>
       </div>
       <div className="rankings-table striped grey lighten-5" >
         <div>
         <h3>STARTER PLAYERS</h3>
           <RankingSBList
             teamPlayers={this.props.starterPlayers}
           />
         </div>
         <div>
           <h3>BENCH PLAYERS</h3>
           <RankingSBList
             teamPlayers={this.props.benchPlayers}
           />
         </div>
       </div>
      </Container>
    );
  }
};

function mapStateToProps(state) {
  return {
    playerSearch: state.playerSearch,
    playersNames: state.playersNames,
    playersStats: state.playersStats,
    starterPlayers: state.starterPlayers,
    benchPlayers: state.benchPlayers,
    payloadContainer: state.payloadContainer
  }
};

export default connect(mapStateToProps)(PlayerRankings);
