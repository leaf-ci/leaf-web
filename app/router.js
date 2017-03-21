import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('landing', {path: '/'});
  this.route('profile');
  this.route('logout');
  this.route('docs');
  this.route('dashboard', function() {
    this.route('history', {path: '/project_id/builds'});
    this.route('current', {path: '/project_id'});
  });
  this.route('not-found', {path: '/*path'});
});

export default Router;
