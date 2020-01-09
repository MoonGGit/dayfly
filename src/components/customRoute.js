import React from 'react';
import { Route } from 'react-router-dom';

export default function(route) {
    return (
      <Route
        path={route.path}
        render={props => (
          <>
          <h1>{props.label}</h1>
          <route.component {...props} routes={route.routes} />
          </>
        )}
      />
    );
  }

  