import React from 'react'
import { Redirect, Route } from 'react-router'
import PropTypes from 'prop-types'

const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {

  localStorage.setItem('lastPath', rest.location.pathname)

  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  )
}

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
}

export default PrivateRoute

/**
 * Es un functional component igual a los usados hasta ahora.
 */
