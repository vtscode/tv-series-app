import React, {Component} from 'react';
import Loader from '../../components/Loader';

class SingleSeries extends Component{

	state = {
		show:null
	}

	componentDidMount(){
	const {id} =  this.props.match.params;
	fetch(`http://api.tvmaze.com/shows/${id}`)
    .then(response => response.json())
    .then(json => this.setState({ show:json} ));
	}

	render(){
		const {show} = this.state;
		// console.log(this.props);
		console.log(show);
		return (
			<div>
				{
					show === null && <Loader />
				}
				{
					show !== null &&
					<div>
						<p>{show.name}</p>
						<p>Premiered - {show.premiered}</p>
						<p>Rating - {show.rating.average}</p>
						<p>Prev Eps. - <a href={show._links.previousepisode.href}>{show.name}</a>
						</p>
										
						<p>
							<img 
							alt="show"
							src={show.image.medium} />
						</p>
					</div>
				}
			</div>
		)
	}
}

export default SingleSeries;