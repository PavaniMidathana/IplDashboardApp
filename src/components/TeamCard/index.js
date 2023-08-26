// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails

  return (
    <Link className="li-link" to={`/team-matches/${id}`}>
      <li className="li-container">
        <img src={teamImageUrl} alt={id} className="li-img" />
        <h1 className="li-heading">{name}</h1>
      </li>
    </Link>
  )
}

export default TeamCard
