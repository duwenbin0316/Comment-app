import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Comment />, document.getElementById('root'));
registerServiceWorker();
