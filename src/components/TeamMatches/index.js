// Write your code here
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamDetails: {},
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedLatestMatchDetails = {
      umpires: data.latest_match_details.umpires,
      result: data.latest_match_details.result,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      id: data.latest_match_details.id,
      date: data.latest_match_details.date,
      venue: data.latest_match_details.venue,
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      firstInnings: data.latest_match_details.first_innings,
      secondInnings: data.latest_match_details.second_innings,
      matchStatus: data.latest_match_details.match_status,
    }

    const updatedRecentMatches = data.recent_matches.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      date: each.date,
      firstInnings: each.first_innings,
      id: each.id,
      manOfTheMatch: each.man_of_the_match,
      matchStatus: each.match_status,
      result: each.result,
      secondInnings: each.second_innings,
      umpires: each.umpires,
      venue: each.venue,
    }))

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      recentMatches: updatedRecentMatches,
      latestMatchDetails: updatedLatestMatchDetails,
    }

    this.setState({teamDetails: updatedData})
  }

  render() {
    const {teamDetails} = this.state
    console.log(teamDetails)
    const {teamBannerUrl, latestMatchDetails} = teamDetails

    return (
      <div className="bg-container">
        <div className="card-container">
          <img src={teamBannerUrl} alt="banner" className="banner-img" />
          <h1 className="latest-matches-heading">Latest Matches</h1>
          <LatestMatch matchDetails={latestMatchDetails} />
        </div>
      </div>
    )
  }
}

export default TeamMatches
