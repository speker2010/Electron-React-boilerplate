/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './index.css';
import vue from "vue";
import React from "react";
import ReactDOM from "react-dom";
import App from "./app/app.vue";

console.log('👋 This message is being logged by "renderer.js", included via webpack');

let test = document.querySelector('#test');
test.innerHTML = 'Test';

vue.config.productionTip = false

let app = new vue({
    el: '#root',
    template: '<App/>',
    components: { App }
})

//ReactDOM.render(<App />, document.getElementById("root"));
