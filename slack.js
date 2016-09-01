require("source-map-support").install();
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("@exoplay/exobot"),require("@slack/client"),require("inherits"),require("lodash")):"function"==typeof define&&define.amd?define(["@exoplay/exobot","@slack/client","inherits","lodash"],e):"object"==typeof exports?exports["slack.js"]=e(require("@exoplay/exobot"),require("@slack/client"),require("inherits"),require("lodash")):t["slack.js"]=e(t["@exoplay/exobot"],t["@slack/client"],t.inherits,t.lodash)}(this,function(t,e,n,r){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,e,n){Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=17)}([function(t,e){t.exports=require("lodash")},function(t,e){t.exports=require("inherits")},function(t,e,n){function r(t,e){this._properties={},this._modelName=t,this._setProperties(c(e)?{}:e)}var o=n(0).forEach,i=n(0).bind,s=n(0).has,a=n(0).isArray,c=n(0).isEmpty,u=n(0).isObject,l=n(0).map,p=n(0).mapValues,h=n(16),f=n(15);r.prototype.update=function(t){return this._setProperties(t),this},r.prototype._setProperties=function(t){o(t,i(this._setModelProperty,this))},r.prototype._setModelProperty=function(t,e){u(t)?this._setObjectProperty(e,t):a(t)?this._setArrayProperty(e,t):(this._properties[e]=h.SIMPLE,this[e]=t)},r.prototype._setObjectProperty=function(t,e){var n,r=s(this,t);f.isModelObj(e)?(r?this[t].update(e):(n=f.getModelClass(),this[t]=new n(e)),this._properties[t]=h.MODEL):(this._properties[t]=h.SIMPLE,this[t]=e)},r.prototype._setArrayProperty=function(t,e){var n,r;c(e)?(this._properties[t]=h.SIMPLE,this[t]=e):(r=e[0],f.isModelObj(r)?(n=f.getModelClass(),this[t]=l(e,function(t){return new n(t)}),this._properties[t]=h.MODEL_ARRAY):(this._properties[t]=h.SIMPLE,this[t]=e))},r.prototype.toJSON=function(){var t=p(this._properties,i(function(t,e){var n;return n=t===h.MODEL?this[e].toJSON():t===h.MODEL_ARRAY?l(this[e],function(t){return t.toJSON()}):this[e]},this));return t},t.exports=r},function(t,e,n){var r=n(1),o=n(4),i=function(t,e){o.call(this,t,e)};r(i,o),t.exports=i},function(t,e,n){function r(t,e){this.history=[],this._typing={},this.unreadCount=0,this.lastRead="0000000000.000000",this._maxTs="0000000000.000000",l.call(this,t,e)}var o=n(0).bind,i=n(0).forEachRight,s=n(0).find,a=n(0).findLastIndex,c=n(1),u=n(0).keys,l=n(2);c(r,l),r.prototype.USER_TYPING_TIMEOUT=5e3,r.prototype._setProperties=function(t){r.super_.prototype._setProperties.call(this,t),this.latest&&this.addMessage(this.latest)},r.prototype.startedTyping=function(t){this._typing[t]&&clearTimeout(this._typing[t]),this._typing[t]=setTimeout(o(function(){delete this._typing[t]},this),this.USER_TYPING_TIMEOUT)},r.prototype.recalcUnreads=function(){var t=!0;return this.unreadCount=0,i(this.history,o(function(e){return e.ts>this.lastRead?this.unreadCount++:t=!1,t},this)),this.unreadCount},r.prototype.getType=function(){return this._modelName.toLowerCase()},r.prototype.getTypingUsers=function(){return u(this._typing)},r.prototype.getMessageByTs=function(t){return s(this.history,{ts:t})},r.prototype.addMessage=function(t){this.history.push(t),t.ts>this._maxTs&&!t.hidden&&(this._maxTs=t.ts,this.unreadCount++)},r.prototype.updateMessage=function(t){var e=t.message,n=a(this.history,"ts",e.ts);n!==-1&&(this.history[n]=e)},t.exports=r},function(t,e,n){var r=n(1),o=n(3),i=function(t){o.call(this,"Channel",t)};r(i,o),t.exports=i},function(t,e,n){function r(t){i.call(this,"DM",t)}var o=n(1),i=n(4);o(r,i),t.exports=r},function(t,e,n){function r(t){i.call(this,"File",t)}var o=n(1),i=n(2);o(r,i),t.exports=r},function(t,e,n){function r(t){i.call(this,"Group",t)}var o=n(1),i=n(3);o(r,i),t.exports=r},function(t,e,n){function r(t){i.call(this,"MPDM",t)}var o=n(1),i=n(3);o(r,i),t.exports=r},function(t,e,n){function r(t){i.call(this,"UserGroup",t)}var o=n(1),i=n(2);o(r,i),t.exports=r},function(t,e,n){function r(t){i.call(this,"User",t)}var o=n(1),i=n(2);o(r,i),t.exports=r},function(t,e,n){t.exports={Channel:n(5),DM:n(6),File:n(7),Group:n(8),MPDM:n(9),User:n(11),UserGroup:n(10)}},function(t,e){t.exports=require("@exoplay/exobot")},function(t,e){t.exports=require("@slack/client")},function(t,e,n){var r=n(0).has,o=["C","F","G","D","U","S"],i=function(t){return!!r(t,"id")&&o.indexOf(t.id.substr(0,1))!==-1},s=function(t){var e,r=t.id.substr(0,1);return"C"===r?e=n(5):"F"===r?e=n(7):"D"===r?e=n(6):"U"===r?e=n(11):"S"===r?e=n(10):"G"===r&&(t.is_mpim&&(e=n(9)),t.is_group&&(e=n(8))),e};t.exports.isModelObj=i,t.exports.getModelClass=s},function(t,e){var n={SIMPLE:0,MODEL:1,MODEL_ARRAY:2};t.exports=n},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a=n(14),c=a&&a.__esModule?function(){return a["default"]}:function(){return a};n.d(c,"a",c);var u=n(12),l=u&&u.__esModule?function(){return u["default"]}:function(){return u};n.d(l,"a",l);var p=n(13),h=p&&p.__esModule?function(){return p["default"]}:function(){return p};n.d(h,"a",h),n.d(e,"EVENTS",function(){return E}),n.d(e,"SlackAdapter",function(){return v});var f,d=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),y=function _(t,e,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:_(o,e,n)}if("value"in r)return r.value;var i=r.get;if(void 0!==i)return i.call(n)},T=(new l.a.DM)._modelName,E=(f={},s(f,a.CLIENT_EVENTS.RTM.CONNECTING,"slackConnecting"),s(f,a.CLIENT_EVENTS.RTM.RTM_CONNECTION_OPENED,"slackConnected"),s(f,a.CLIENT_EVENTS.RTM.AUTHENTICATED,"slackAuthenticated"),s(f,a.CLIENT_EVENTS.RTM.DISCONNECT,"slackDisconnected"),s(f,a.CLIENT_EVENTS.RTM.UNABLE_TO_RTM_START,"slackUnableToStart"),s(f,a.CLIENT_EVENTS.RTM.ATTEMPTING_RECONNECT,"slackReconnecting"),s(f,a.RTM_EVENTS.MESSAGE,"slackMessage"),f),v=function(t){function e(t){var n=t.token;r(this,e);var i=o(this,Object.getPrototypeOf(e).apply(this,arguments));return i.name="Slack",i.token=n,i}return i(e,t),d(e,[{key:"register",value:function(t){var n=this;y(Object.getPrototypeOf(e.prototype),"register",this).apply(this,arguments);var r=this.token;this.client=new a.RtmClient(r,{logLevel:t.logLevel}),Object.keys(E).forEach(function(e){var r=n[E[e]];n.client.on(e,r.bind(n)),n.client.on(e,function(){for(var n,r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];(n=t.emitter).emit.apply(n,["slack-"+e].concat(o))})}),this.client.start()}},{key:"send",value:function(t){this.bot.log.debug("Sending "+t.text+" to "+t.channel),this.client.sendMessage(t.text,t.channel)}},{key:"slackConnecting",value:function(){this.bot.log.info("Connecting to Slack."),this.status=p.Adapter.STATUS.CONNECTING}},{key:"slackConnected",value:function(){this.bot.log.info("Connected to Slack.")}},{key:"slackAuthenticated",value:function(){this.bot.log.notice("Successfully authenticated to Slack."),this.status=p.Adapter.STATUS.CONNECTED}},{key:"slackDisconnected",value:function(){this.bot.log.critical("Disconnected from Slack."),this.status=p.Adapter.STATUS.DISCONNECTED}},{key:"slackUnableToStart",value:function(){this.bot.log.critical("Unable to start Slack."),this.status=p.Adapter.STATUS.DISCONNECTED}},{key:"slackReconnecting",value:function(){this.bot.log.notice("Reconnecting to Slack."),this.status=p.Adapter.STATUS.RECONNECTING}},{key:"slackMessage",value:function(t){if(t.text){var n=this.client.activeUserId;if(t.user!==n){var r=this.client.dataStore.getUserById(t.user),o=void 0;o=r?new p.User(r.name,r.id):new p.User(t.user);var i=this.client.dataStore.getChannelGroupOrDMById(t.channel);return i&&i._modelName===T?y(Object.getPrototypeOf(e.prototype),"receiveWhisper",this).call(this,{user:o,text:t.text,channel:t.channel}):void y(Object.getPrototypeOf(e.prototype),"receive",this).call(this,{user:o,text:t.text,channel:t.channel})}}}},{key:"getUserIdByUserName",value:function(t){var e=this.client.dataStore.getUserByName(t);return e.id}}]),e}(p.Adapter)}])});
//# sourceMappingURL=slack.js.map