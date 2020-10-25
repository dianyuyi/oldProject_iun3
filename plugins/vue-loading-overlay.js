import Vue from 'vue'
import VueLoading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

Vue.use(VueLoading, {
    canCancel: false,
    color: '#179E99',
    loader: 'dots', //spinner/dots/bars
    width: 50,
    height: 50,
    backgroundColor: '#ffffff',
    isFullPage: true,
    opacity: 0.8
}); 
