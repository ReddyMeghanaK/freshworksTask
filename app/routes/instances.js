import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class InstancesRoute extends Route {
    @service store;
    model() {
        return this.store.findAll("instance");
    }
    afterModel(model,transition){
        console.log(model)
    }
  
}
