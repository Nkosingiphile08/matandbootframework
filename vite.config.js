import handlebars from 'vite-plugin-handlebars';
import data from "./data.json" assert {type:'json'};
import { defineConfig } from 'vite';


const basicContext = {
};
    
    export default defineConfig({
      build: {
        rollupOptions: {
          input : {
            main: 'index.html',
            one: 'index-bootstrap.html',
            tw0: 'index-materialize.html'
          }
        },
      },
      base : '/responsive_webpages/',
        plugins: [handlebars({
          context : data       
        })]
      });
