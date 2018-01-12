import React, { Component } from 'react';
import './visitor.css';


class VisitorLog  extends Component{
    constructor(){
        super()
      this.state = {
            visitorlog : [
                {
              name : 'David',
              date : '23 Wednesday 2013',
              intime : '12:35 pm',
              timeout : '2:00 am',
              mobile : '8755446654'
            },
            {
              name : 'John',
              date : '20 Saturday 1992',
              intime : '7:00 pm',
              timeout : '8:00 pm',
              mobile : '8723456434'

            },
            {
              name : 'Rossy',
              date : '23 Sunday 2011',
              intime : '3:31 pm',
              timeout : '7:00 pm',
              mobile : '9999006654'

            },
            {
              name : 'Wrick',
              date : '21 Wednesday 2015',
              intime : '12:35 pm',
              timeout : '2:00 am',
              mobile : '9833446654'

            }
         ]
      };
}

   render(){
       
     return(
       <div>
         
          <div class="container">
            <h2>Visitor Logs</h2>
               
            <table class="table table-bordered table-striped table-hover">
               <thead>
                 <tr>
                  <th className = "head"><i className="fa fa-user-circle">Name</i></th>
                  <th className = "head"><i className ="fa fa-calendar">Date</i></th>
                  <th className = "head"><i className="fa fa-clock-o">In Time</i></th>
                  <th className = "head"><i className="fa fa-clock-o">Time Out</i></th>
                  <th className = "head"><i className="fa fa-mobile">Mobile</i></th>
                </tr>
             </thead>
             <tbody>{this.state.visitorlog.map(function(vlog , key){
                  return(
              <tr key = {key} >
                 <td className = "data">{vlog.name}</td>
                 <td className = "data">{vlog.date}</td>
                 <td className = "data">{vlog.intime}</td>
                 <td className = "data">{vlog.timeout}</td>
                 <td className = "data">{vlog.mobile}</td>
            </tr>
         )
      })}</tbody>
    </table>
  </div>
</div>

     );
  }
}

export default VisitorLog;