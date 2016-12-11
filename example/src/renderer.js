import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './components/Counter';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<Counter />, document.getElementById('app'));
});
