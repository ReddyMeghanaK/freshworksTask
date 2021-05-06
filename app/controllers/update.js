import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class UpdateController extends Controller {

@service store;
actions = {
    setFree : function(){
        var _this = this;
        var newInstance = this.store.findRecord('instance', this.get('instanceid')).then(() => {
            var instance = _this.store.peekRecord('instance', _this.get('instanceid'));
            _this.set('instance', {isFree: true});
            instance.save().then(() => {

           }).catch(() => {

           }).finally(() => {
             _this.setProperties({
                instanceID :'',
                teamID :'',
            
              });
           });
       });

              
            }
        }
    }