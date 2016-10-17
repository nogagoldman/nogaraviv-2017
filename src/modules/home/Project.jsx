/******************************************************************************\
* File: Project.jsx
*
* Author: Josh Taylor
*
* Description: Home page project tile
*
* Notes: 
\******************************************************************************/

//------------------------------------------------------------------------------
// Node Modules ----------------------------------------------------------------
import React    from 'react'
import { Link } from 'react-router'
//------------------------------------------------------------------------------
// Style -----------------------------------------------------------------------
import 'style/home/Project.scss'
//------------------------------------------------------------------------------
// My Modules ------------------------------------------------------------------

//------------------------------------------------------------------------------
// React Class -----------------------------------------------------------------
export default React.createClass({
    render: function() {
        return (
            <Link
                className={`home_Project mod${this.props.mod}`}
                to={this.props.url}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
            >
                <img src={this.props.img} />
                <div className="overlay">
                    <h2>{this.props.title}</h2>
                    <h6>{this.props.roles}</h6>
                </div>
            </Link>
        )
    }
})