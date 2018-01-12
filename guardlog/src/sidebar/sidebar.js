import React, {Component} from 'react';
import './sidebar.css';

class Sidebar extends Component{
 render() {
     var mystyle = {
         color : 'white'
     }
    return (
      <div>
       <div id="throbber"></div>
         <div id="noty-holder"></div>
          <div id="wrapper">
            <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
     <div class="navbar-header">
        <button type="button" class="navbar-toggle btn btn-primary" style = {mystyle} data-toggle="collapse" data-target=".navbar-ex1-collapse">
          <span class="sr-only">Toggle navigation</span>
         <span class="icon-bar"></span>
         <span class="icon-bar"></span>
         <span class="icon-bar"></span>
     </button>
  </div>
       
     <div class="collapse navbar-collapse navbar-ex1-collapse">
       <ul class="nav navbar-nav side-nav">
         <li> 
             <a>Dashboard</a>
        </li> 
                <li> 
                    <a>Updates</a>
                </li> 
                <li>
                    <a data-toggle="collapse" data-target="#submenu-1">Logs<i class="fa fa-fw fa-angle-down pull-right"></i></a>
                    <ul id="submenu-1" class="collapse">
                        <li><a><i class="fa fa-angle-double-right"></i> Previous Invitation</a></li>
                        <li><a><i class="fa fa-angle-double-right"></i> Previous Bookings</a></li>     
                    </ul>
                </li>
                <li>
                    <a data-toggle="collapse" data-target="#submenu-2"> Services<i class="fa fa-fw fa-angle-down pull-right"></i></a>
                    <ul id="submenu-2" class="collapse">
                        <li><a><i class="fa fa-angle-double-right"></i> Maintenance</a></li>
                        <li><a><i class="fa fa-angle-double-right"></i> Guest Invitation</a></li>
                    </ul>
                </li>
                <li>
                    <a data-toggle="collapse" data-target="#submenu-3">Facilities<i class="fa fa-fw fa-angle-down pull-right"></i></a>
                    <ul id="submenu-3" class="collapse">
                        <li><a><i class="fa fa-angle-double-right"></i> Bookings</a></li>
                        <li><a><i class="fa fa-angle-double-right"></i> Events</a></li>
                        <li><a><i class="fa fa-angle-double-right"></i> Parkings</a></li>
                    </ul>
                </li>
                <li>
                    <a>  Payments</a>
                </li>
                <li>
                    <a> Profile</a>
                </li>
               
            </ul>
        </div>
        
    </nav>

    <div id="page-wrapper">
        <div class="container-fluid">
        
            <div  >
                <div >
                  

                </div>
            </div>
        
        </div>
       
    </div>
    </div>
   
        
      </div>
    );
  }
}

export default Sidebar;