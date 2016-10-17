/******************************************************************************\
* File: Particle.jsx
*
* Author: Josh Taylor
*
* Description: Particle Page
*
* Notes: 
\******************************************************************************/

//------------------------------------------------------------------------------
// Node Modules ----------------------------------------------------------------
import React    from 'react'
import { Link } from 'react-router'
//------------------------------------------------------------------------------
// My Modules ------------------------------------------------------------------
import Header       from 'modules/common/Header'
import ProjectPage  from 'modules/common/ProjectPage'
import pages        from 'pages'
//------------------------------------------------------------------------------
// React Class -----------------------------------------------------------------
export default React.createClass({
	render: function() {

		const pageName = 'particle';

		let page = pages[pageName];

		return (
			<ProjectPage
			title={page.title}
			roles={page.roles}
			url={page.url}
			page={pageName}
			>

			<div className="content-text">
			<p>Particle is small team of developers based in San Francisco specializing in mobile app development. I worked closely with the founder of the company to create an identity that symbolized a high-speed and interactive brand.</p>
			<p>I renamed the company (originally “Base Apps”), created their logo, and designed their styleguide.
			</p>
			</div>

			<div className="content-img">
			<div className="image">
			<img src="/pics/particle/particle-identity.jpg" />
			</div>
			</div>

			</ProjectPage>

			)
	}
})