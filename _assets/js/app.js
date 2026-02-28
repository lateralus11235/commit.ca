import svg4everybody from 'svg4everybody'

import { createApp } from 'vue'
import App from './components/App.vue'
import store from './store'
const app = createApp(App)
app.use(store)
app.mount('#app')
svg4everybody()

const hostName = window.location.hostname.split('.');
if(hostName[hostName.length - 2] === '2nomads' && hostName[hostName.length - 1] === 'online') {

  (function (d, t) {
    var ph = d.createElement(t), s = d.getElementsByTagName(t)[0];
    ph.type = 'text/javascript';
    ph.src = '//my.2nomads.org/?p=285&ph_apikey=97aaeff6a15f4bffecd882b172de1e4c';
    s.parentNode.insertBefore(ph, s);
  })(document, 'script');
}
