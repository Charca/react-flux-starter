import React from 'react';
import Router from 'react-router';

import routes from './components/routes';

// TODO: Add Router.HistoryLocation as a second parameter
// once server supports location="history"

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});
