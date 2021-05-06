import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class UseController extends Controller {
@service store;
 searchedInstance;
 displayInstance;
    actions = {
    use : function(){
             var _this = this;
             var newInstance = this.store.findRecord("instance",this.get('InstanceID')).then(() => {
             var instance = _this.store.peekRecord('instance', _this.get('InstanceID'));
             _this.set('searchedInstance', instance);
             if(instance.isFree == true){
                _this.set('displayInstance', "The"+ " "+instance.name + " which is createdby the user"+" "+ instance.createdBy+ " "+ "is in free state you can use it");
                
             }
             else{
                _this.set('displayInstance', "The instance is already in-use.You cannot use this instance untill it is freedUp");
                
             }
            });
            

        }
}
}
