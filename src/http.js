import http from 'browserify-http';
export default http;
export var Agent = http.Agent;
export var ClientRequest = http.ClientRequest;
export var IncomingMessage = http.IncomingMessage;
export var METHODS = http.METHODS;
export var STATUS_CODES = http.STATUS_CODES;
export var get = http.get;
export var globalAgent = http.globalAgent;
export var request = http.request;
