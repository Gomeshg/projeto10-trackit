import ReactDOM from 'react-dom'
import App from './components/App'

import {AuthProvider} from './services/Session';

ReactDOM.render(<AuthProvider><App/></AuthProvider> , document.querySelector('.root'));