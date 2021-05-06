import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class SearchController extends Controller {
 @service store;
 searchedInstance;
    actions = {
    search : function(){
             var _this = this;
            // var instanceId = this.get('InstanceID');
           //  var instanceName = this.get('InstanceName');
             var newInstance = this.store.findRecord("instance",this.get('InstanceID')).then(() => {
             var instance = _this.store.peekRecord('instance', _this.get('InstanceID'));
             _this.set('searchedInstance'," The instance you are searching is InstanceId:"+ " "+ instance.id +" " + "and the name is"+" " + instance.name + " " + "is created by the user " +" "+instance.createdBy);
             
            });
            // alert(this.get('InstanceID')) ;
            // alert(newInstance.id);
        }
}

}
