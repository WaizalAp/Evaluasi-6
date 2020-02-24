import React from 'react';
import { data } from './Data';
import '../css/style2.css';

class Detail extends React.Component{
	constructor(props){
		super(props);
		this.state = { datas:[] }
	}
	componentDidMount(){
		const id = this.props.match.params.id
		const filterX = data.filter(datap => datap.id == id	);
			this.setState({ datas: filterX});

	}
		render(){
			return(
				<div className="crt">
					{
						this.state.datas.map(params => {
							return(
								<div className="font">
									<h1>{params.title}</h1>
									<h3>{params.author}</h3>
									<img className="gambar" src={params.thumbnail} />
									<p>{params.pubDate}</p>

								</div>
								);
						})
					}
				</div>
				)
		}
}

export default Detail;