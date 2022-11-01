import { Component, Fragment } from "react";

const TableHeader=()=>{
      
    return(
        <thead className="bg-info text-white text-center">
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Action</th>
            </tr>
       </thead>
    );
}

const TableBody=(props)=>{
      
      const {characterData,removecharacter}=props
      const rows=characterData.map((character,index)=>{
           return(<tr key={index}>
            <td>{character.name}</td>
            <td>{character.job}</td>
            <td><button className="btn-danger text-white" onClick={()=>removecharacter(index)}>Delete</button></td>
            </tr>)
      }) 
      return(
        <tbody className="text-center">
            {rows}
        </tbody>
      );
}
class Table extends Component
{
    render(){
        //Destructuring Character
        const {characterData,removecharacter}=this.props
        return (
            <Fragment>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="d-flex justify-content-center">
                                   <h1>Table </h1>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <table className="table table-bordered">
                                   <TableHeader />
                                   <TableBody removecharacter={removecharacter} characterData={characterData}/>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Table;