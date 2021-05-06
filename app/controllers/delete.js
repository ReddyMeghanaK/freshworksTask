import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class DeleteController extends Controller {

    @service store;
    actions = {
    delete : function(){
        var _this = this;
        // var newInstance = this.store.findRecord('instance',{
        //     id : this.get('instanceID'),
        //     teamId : this.get('teamID'),
        //  })
         var newInstance = this.store.findRecord('instance', this.get('instanceID')).then(() => {
             var instance = _this.store.peekRecord('instance', _this.get('instanceID'));
             instance.destroyRecord().then(() => {

            }).catch(() => {
 
            }).finally(() => {
              _this.setProperties({
                 instanceID :'',
                 teamID :'',
             
               });
            });
        });
        //   alert(newInstance.teamId);
        //    newInstance.save().then(() => {

        //    }).catch(() => {

        //    }).finally(() => {
        //      this.setProperties({
        //         instanceID :'',
        //         teamID :'',
            
        //       });
        //    });

              
            }
        }
        
}
