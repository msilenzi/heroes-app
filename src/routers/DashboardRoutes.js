import React from 'react'
import { Navbar } from '../components/ui/Navbar'
import { Redirect, Route, Switch } from 'react-router'
import MarvelScreen from '../components/marvel/MarvelScreen'
import HeroScreen from '../components/heroes/HeroScreen'
import DcScreen from '../components/dc/DcScreen'
import SearchScreen from '../components/search/SearchScreen'

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Route exact path="/search" component={SearchScreen} />
          {/* 1. */}
          <Route exact path="/hero/:heroId" component={HeroScreen} />
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  )
}

export default DashboardRoutes

/**
 * 1. haciendo "/marvel/:heroId" indicamos que recibiremos un argumento por la URL
 */
