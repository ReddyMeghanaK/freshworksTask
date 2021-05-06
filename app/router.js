import EmberRouter from '@ember/routing/router';
import config from 'fw-task/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('instances');
  this.route('create');
  this.route('delete');
  this.route('fetch');
  this.route('search');
  this.route('update');
  this.route('use');
});
