/******************************************************************************\
* File: index.jsx
*
* Author: Gigster
*
* Description: This is the entry point for the web app
*
* Notes: 
\******************************************************************************/

//------------------------------------------------------------------------------
// Node Modules ----------------------------------------------------------------
import   React              from 'react'
import { render }           from 'react-dom'
import { Router,
   Route,
   IndexRoute,
   browserHistory }   from 'react-router'
//------------------------------------------------------------------------------
// Style -----------------------------------------------------------------------
import 'index.scss'
//------------------------------------------------------------------------------
// My Modules ------------------------------------------------------------------
import App              from 'modules/App'
import Home             from 'modules/home/Home'
import Page             from 'modules/common/Page'
import Technica         from 'modules/pages/Technica'
import SeventeenCow     from 'modules/pages/SeventeenCow'
import Ippycon          from 'modules/pages/Ippycon'
import Budsies          from 'modules/pages/Budsies'
import Idiomatic        from 'modules/pages/Idiomatic'
import Particle         from 'modules/pages/Particle'
import Towardsthesun    from 'modules/pages/Towardsthesun'
import Four04           from 'modules/common/Four04'
//------------------------------------------------------------------------------
// Renderer --------------------------------------------------------------------
render((
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/" component={Page}>
    <Route path="technica" component={Technica} />
    <Route path="17cow" component={SeventeenCow} />
    <Route path="ippycon" component={Ippycon} />
    <Route path="budsies" component={Budsies} />
    <Route path="idiomatic" component={Idiomatic} />
    <Route path="particle" component={Particle} />
    <Route path="towardsthesun" component={Towardsthesun} />
    </Route>
    </Route>
    <Route path="*" component={Four04} />
    </Router>
    ), document.getElementById('app'))