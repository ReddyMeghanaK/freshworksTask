import RESTAdapter from '@ember-data/adapter/rest';

export default class InstanceAdapter extends RESTAdapter {

    host = "http://localhost:8080";
    namespace = "api";
}
