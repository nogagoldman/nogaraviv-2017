/******************************************************************************\
* File: Towardsthesun.jsx
*
* Author: Josh Taylor
*
* Description: Towards the Sun Page
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

		const pageName = 'towardsthesun';

		let page = pages[pageName];

		return (
			<ProjectPage
			title={page.title}
			roles={page.roles}
			url={page.url}
			page={pageName}
			>

			<div className="content-text">
			<p>During my junior year of college, I <b>started an eCommerce shop</b> selling my handmade, polymer clay bowls. </p>
			<p>In addition to designing the products, I spent a good amount of my time designing for marketing and social media, my primary channel for acquiring customers.
			</p>
			<p>Running my own business taught me a great deal about 80-20 design, and moving fast.
			</p>
			<p>Thanks to this little business, I joined <a href="http://www.startupshell.org">Startup Shell</a> which led me to my career in product design.
			</p>
			<p>Read the full Towards the Sun story <a href="http://www.dbknews.com/archives/article_41d0e9b8-4e76-11e4-b9bc-001a4bcf6878.html">here</a>.</p>
			</div>

			<div className="content-img">
			<div className="image">
			<img src="/pics/towardsthesun/holding-bowl.jpeg" />
			</div>
			</div>

			<div className="content-img">
			<div className="image">
			<img src="/pics/towardsthesun/many-bowl.jpeg" />
			</div>
			</div>

			<div className="content-img">
			<div className="image">
			<img src="/pics/towardsthesun/face-bowl.jpeg" />
			</div>
			</div>

			<div className="content-img">
			<div className="image">
			<img src="/pics/towardsthesun/orange-bowl.jpg" />
			</div>
			</div>

			<div className="content-img">
			<div className="image">
			<img src="/pics/towardsthesun/blue-bowl.jpg" />
			</div>
			</div>

			</ProjectPage>

			)
	}
})