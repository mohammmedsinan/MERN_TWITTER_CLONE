import React, { useState } from 'react';
import { Route } from 'react-router';
import { Redirect } from 'react-router-dom';

function ProtectedRoutes({ component: Component, ...rest }) {
  const [completeTheAuth, setCompleteTheAuth] = useState(
    JSON.parse(localStorage.getItem('profile')),
  );
  return (
    <div>
      <Route
        {...rest}
        render={(props) => {
          if (completeTheAuth) {
            return <Component {...props} />;
          } else {
            return (
              <Redirect
                to={{
                  pathname: '/Auth/Login',
                  state: {
                    from: props.location,
                  },
                }}
              />
            );
          }
        }}
      />
    </div>
  );
}

export default ProtectedRoutes;
