/******************************************************************************\
* File: Home.jsx
*
* Author: Josh Taylor
*
* Description: Home page content
*
* Notes: 
\******************************************************************************/

//------------------------------------------------------------------------------
// Node Modules ----------------------------------------------------------------
import React    from 'react'
import { Link } from 'react-router'
//------------------------------------------------------------------------------
// Style -----------------------------------------------------------------------
import 'style/home/Home.scss'
//------------------------------------------------------------------------------
// Utils -----------------------------------------------------------------------
import links from 'util/links'
//------------------------------------------------------------------------------
// My Modules ------------------------------------------------------------------
import SocialBar    from 'modules/common/SocialBar'
import Button       from 'modules/common/Button'
import Header       from 'modules/home/Header'
import Projects     from 'modules/home/Projects'
import Project      from 'modules/home/Project'
import pages        from 'pages'
//------------------------------------------------------------------------------
// React Class -----------------------------------------------------------------
export default React.createClass({
    
    getInitialState: function() {
        return {
            showMore: false
        };
    },

    showControl: function() {
        this.setState({showMore: !this.state.showMore});
    },

    render: function() {

        let projectList = Object.keys(pages).map((page, index) => {

            return (
                <Project
                    title={pages[page].title}
                    roles={pages[page].roles}
                    img={pages[page].main_img}
                    url={`/${page}`}
                    mod={index % 2}
                    key={index}
                />
            )

        });

        if(projectList.length % 2 === 1) {
            projectList.push(<div className="dummy" key={projectList.length} />);
        }

        return (
            <div className="home_Home">
                
                <Header />

                <Projects>
                    {this.state.showMore ? projectList : projectList.slice(0, 6)}
                </Projects>

                <Button
                    text={this.state.showMore ? 'SHOW LESS' : 'SHOW MORE'}
                    onClick={this.showControl}
                />
                
            </div>
        )
    }
})