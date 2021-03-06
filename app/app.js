import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'fw-task/config/environment';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
  
  
}

Ember.Logger.warn = () => {}
Ember.Logger.deprecate = () => {}

loadInitializers(App, config.modulePrefix);

