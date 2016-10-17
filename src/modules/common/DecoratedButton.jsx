/******************************************************************************\
* File: DecoratedButton.jsx
*
* Author: Josh Taylor
*
* Description: Decorated button element
*
* Notes: 
\******************************************************************************/

//------------------------------------------------------------------------------
// Node Modules ----------------------------------------------------------------
import React from 'react'
//------------------------------------------------------------------------------
// Style -----------------------------------------------------------------------
import 'style/common/DecoratedButton.scss'
//------------------------------------------------------------------------------
// My Modules ------------------------------------------------------------------
import Button from 'modules/common/Button'
//------------------------------------------------------------------------------
// React Class -----------------------------------------------------------------
export default React.createClass({
    render: function() {
        return (
            <div className="common_DecoratedButton">
                <div className="line" />
                <Button
                    text={this.props.text}
                    onClick={this.props.onClick}
                />
                <div className="line" />
            </div>
        )
    }
})