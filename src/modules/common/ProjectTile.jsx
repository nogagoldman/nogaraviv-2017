/******************************************************************************\
* File: ProjectTile.jsx
*
* Author: Josh Taylor
*
* Description: More Projects section
*
* Notes: 
\******************************************************************************/

//------------------------------------------------------------------------------
// Node Modules ----------------------------------------------------------------
import React    from 'react'
import { Link } from 'react-router'
//------------------------------------------------------------------------------
// Style -----------------------------------------------------------------------
import 'style/common/ProjectTile.scss'
//------------------------------------------------------------------------------
// My Modules ------------------------------------------------------------------

//------------------------------------------------------------------------------
// React Class -----------------------------------------------------------------
export default React.createClass({
    render: function() {
        return (
            <Link
                className={`common_ProjectTile i${this.props.index}`}
                to={this.props.url}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
            >
                <img src={this.props.img}/>
                <div className="overlay">
                    <h3>{this.props.title}</h3>
                    <h6>{this.props.roles}</h6>
                </div>
            </Link>
        )
    }
})