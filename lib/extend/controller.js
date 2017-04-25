const helper = require('think-helper');

const deprecate = require('depd')('thinkjs');

/**
 * extend controller
 */
module.exports = {
  /**
   * get or set config
   * @param {String} name 
   * @param {Mix} value 
   * @param {String} m 
   */
  config(name, value, m = this.ctx.module){
    return think.config(name, value, m);
  },
  /**
   * get request method
   */
  get method(){
    return this.ctx.method.toLowerCase();
  },
  /**
   * is method
   * @param {String} method 
   */
  isMethod(method){
    return this.method() === method;
  },
  /**
   * is get method
   */
  isGet(){
    return this.method() === 'get';
  },
  /**
   * is post method
   */
  isPost(){
    return this.method === 'post';
  },
  /**
   * check if is ajax request
   * @param {String} method 
   */
  isAjax(method){
    return this.ctx.isAjax(method);
  },
  /**
   * is jsonp request
   * @param {String} callback 
   */
  isJsonp(callbackField){
    return this.ctx.isJsonp(callbackField);
  },
  /**
   * send jsonp data 
   */
  jsonp(data, callbackField){
    return this.ctx.jsonp(data, callbackField);
  },
  /**
   * set expires header
   * @param {Number} time 
   */
  expires(time){
    return this.ctx.expires(time);
  },
  /**
   * 
   * @param {String} name 
   * @param {Mixed} value 
   */
  get(name, value){
    deprecate('controller.get is deprecate, please use controller.query instead. it will removed in ThinkJS 3.1');
    return this.ctx.param(name, value);
  },
  /**
   * get query data
   * @param {String} name 
   * @param {Mixed} value 
   */
  query(name, value){
    return this.ctx.param(name, value);
  },
  /**
   * get or set post data
   * @param {String} name 
   * @param {Mixed} value 
   */
  post(name, value){
    return this.ctx.post(name, value);
  },
  /**
   * get or set file data
   * @param {String} name 
   * @param {Mixed} value 
   */
  file(name, value){
    return this.ctx.file(name, value);
  },
  /**
   * get or set cookies
   * @param {String} name 
   * @param {String} value 
   * @param {Object} options 
   */
  cookie(name, value, options){
    return this.ctx.cookie(name, value, options);
  },
  /**
   * get or set header
   * @param {String} name 
   * @param {Mixed} value 
   */
  header(name, value){
    if(value !== undefined){
      return this.set(name, value);
    }
    if(helper.isObject(name)){
      return this.set(name);
    }
    return this.header[name];
  },
  /**
   * get userAgent header
   */
  get userAgent(){
    return this.ctx.userAgent;
  },
  /**
   * get referer header
   */
  referrer(onlyHost){
    return this.ctx.referer(onlyHost);
  },
  /**
   * get referer header
   */
  referer(onlyHost){
    return this.ctx.referer(onlyHost);
  },
  /**
   * Perform a 302 redirect to `url`.
   * @param {String} url 
   * @param {String} alt 
   */
  redirect(url, alt){
    return this.ctx.redirect(url, alt);
  },
  /**
   * get model instance
   */
  model(name, config, m){
    return this.ctx.model(name, config, m);
  },
  /**
   * get controller instance
   * @param {String} name 
   * @param {String} m 
   */
  controller(name, m){
    return think.controller(name, this.ctx, m);
  },
  /**
   * get service
   * @param {String} name 
   * @param {String} m 
   */
  service(name, m){
    return think.service(name, m);
  }
}