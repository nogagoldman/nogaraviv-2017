/******************************************************************************\
* File: MoreProjects.jsx
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
//------------------------------------------------------------------------------
// Style -----------------------------------------------------------------------
import 'style/common/MoreProjects.scss'
//------------------------------------------------------------------------------
// My Modules ------------------------------------------------------------------
import ProjectTile  from 'modules/common/ProjectTile'
import pages        from 'pages'
//------------------------------------------------------------------------------
// React Class -----------------------------------------------------------------
export default React.createClass({
    render: function() {

        let pageIndex;
        let pageKeys = Object.keys(pages);

        // find page index of current page
        for(pageIndex = 0; pageIndex < pageKeys.length; pageIndex++) {
            if(pageKeys[pageIndex] === this.props.page)
                break;
        }

        // set projects to show
        let projectsIndices = [
            pageIndex + 1,
            pageIndex + 2,
            pageIndex + 3,
            pageIndex + 4,
            pageIndex + 5,
            pageIndex + 6
        ]

        // normalize indices
        for(var i = 0; i < projectsIndices.length; i++) {
            projectsIndices[i] = projectsIndices[i] % pageKeys.length;
            if(projectsIndices[i] < 0) {
                projectsIndices[i] = pageKeys.length + projectsIndices[i];
            }
        }

        let tiles = projectsIndices.map((project, index) => {
            return (
                <ProjectTile
                    title={pages[pageKeys[project]].title}
                    roles={pages[pageKeys[project]].roles}
                    img={pages[pageKeys[project]].main_img}
                    url={`/${pageKeys[project]}`}
                    index={index}
                    key={index}
                />
            )
        });

        return (
            <div className="common_MoreProjects">
                <h3>View More Projects</h3>
                <div className="projects">
                    {tiles}
                </div>
            </div>
        )
    }
})