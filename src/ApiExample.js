import { Component } from "react";
import './assets/css/bootstrap.min.css';
class ApiExample extends Component
{

    state={
        data:[]
    }
    componentDidMount(){
        let url='https://en.wikipedia.org/w/api.php?action=opensearch&search=sathish&format=json&origin%22';
        fetch(url)
        .then((result)=>result.json())
        .then((result)=>{
            this.setState({data:result})
            console.log('submitted');
        })
    }
    render()
    {
      
        const list=this.state.data.map((val,index)=>{
                return <li key={index}>{val}</li>
        });

        return(
            <section>
                <div className="container">
                    <div className="row">
                            <div className="col-md-12">
                                <div className="d-flex mt-3 mb-3">
                                    <h3>API Example</h3>
                                </div>
                                <div className="d-flex justify-content-start">
                                    <ul>
                                        {list}
                                    </ul>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ApiExample;