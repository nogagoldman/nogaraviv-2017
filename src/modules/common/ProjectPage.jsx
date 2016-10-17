/******************************************************************************\
* File: ProjectPage.jsx
*
* Author: Josh Taylor
*
* Description: Content for a project
*
* Notes: 
\******************************************************************************/

//------------------------------------------------------------------------------
// Node Modules ----------------------------------------------------------------
import React    from 'react'
//------------------------------------------------------------------------------
// Style -----------------------------------------------------------------------
import 'style/common/ProjectPage.scss'
//------------------------------------------------------------------------------
// My Modules ------------------------------------------------------------------
import DecoratedButton  from 'modules/common/DecoratedButton'
import ProjectContent   from 'modules/common/ProjectContent'
import MoreProjects     from 'modules/common/MoreProjects'
//------------------------------------------------------------------------------
// React Class -----------------------------------------------------------------
export default React.createClass({
    render: function() {
        return (
            <div>
            <h1 className="title">{this.props.title}</h1>
            <div className="common_ProjectPage" key={this.props.page}>
            <h6 className="roles">{this.props.roles}</h6>
            <ProjectContent>
            {this.props.children}
            </ProjectContent>
            {this.props.url && (
                <DecoratedButton
                text="VISIT WEBSITE"
                onClick={() => {window.open(this.props.url)}}
                />
                )}
            <MoreProjects
            page={this.props.page}
            />
            </div>
            </div>
            )
    }
})