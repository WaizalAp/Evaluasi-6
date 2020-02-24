import React from 'react';
import { data } from './Data';
import SakE from './DataPostProps';

class DataP extends React.Component{
    constructor(props){
        super(props);
        this.state = { datas:[]}
    }
    componentDidMount(){
        this.setState ({datas:data});
    }
    hendleClick=(id)=>{
        this.props.history.push(`/${id}`);
    }
    render(){
        return(
            <div>
                {
                    this.state.datas.map(param => {
                        return(
                            <div>
                                <SakE title={param.title} 
                                pubDate={param.pubDate}
                                author={param.author}
                                thumbnail={param.thumbnail}
                                hendleClick={()=> this.hendleClick(param.id)}
                                />
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default DataP;