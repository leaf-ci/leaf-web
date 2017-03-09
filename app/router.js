import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('app', {path: ''}, function() {
    this.route('dashboard');
    this.route('docs');
    this.route('profile');
    this.route('logout');
  });
  this.route('landing', {path: '/'});
  this.route('not-found', {path: '/*path'});
});

export default Router;
