import { Component } from "react";
import './assets/css/bootstrap.min.css';
class Form extends Component{
    initialstate={
        name:"",
        job:""
    }
    state=this.initialstate;

    handleChange=(event)=>{
        const {name,value}=event.target;
        this.setState({[name]:[value]});

    }
    submitForm=()=>{
        let character=this.state
        this.props.handleSubmit(character);
        this.setState(this.initialstate);
    }
    render(){
        return(
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" name="name" id="name" value={this.state.name} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="job">Job</label>
                                    <input type="text" className="form-control" name="job" id="job" value={this.state.job} onChange={this.handleChange} />
                                </div>
                                <input type="button" className="btn btn-success" value="Submit" onClick={this.submitForm}/>
                            </form>
                        </div>
                    </div>
                </div>
               
            </section>
           
        );
    }
}

export default Form;

