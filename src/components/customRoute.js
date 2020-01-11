import React from 'react';
import { Route } from 'react-router-dom';

export default function({className, ...route}) {
    return (
      <Route 
        path={route.path}
        exact={route.exact}
        render={props => (
            <div className={`${className} test`}>
              <h2 className="content-title">{route.label}</h2>
              <route.component {...props} routes={route.routes} />
            </div>
        )}  
      />
    );
  }

  