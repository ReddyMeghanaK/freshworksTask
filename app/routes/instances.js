import Route from '@ember/routing/route';

export default class InstancesRoute extends Route {
    model() {
        return this.store.findAll("instance");
    }
    afterModel(model,transition){
        console.log(model)
    }
}
