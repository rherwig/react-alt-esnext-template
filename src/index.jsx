import React from 'react';
import {render} from 'react-dom';
import 'es6-symbol/implement';

import App from './components/App';

render(
    <App/>,
    document.querySelector('#app')
);