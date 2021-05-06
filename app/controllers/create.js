import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

 //import { name } from '../../node_modules/commander/typings/index';

export default class CreateController extends Controller {
    @service store;
  actions = {
      add : function(){
                var newInstance = this.store.createRecord('instance',{
                       name : this.get('instanceName'),
                       teamId : this.get('teamID'),
                       createdBy : this.get('createdBy')
           
                    })
                    // alert(newInstance.instanceName);
                      newInstance.save().then(() => {

                      }).catch(() => {

                      }).finally(() => {
                        this.setProperties({
                            instanceName :'',
                             teamID :'',
                             createdBy:''
                         });
                      });
              },
   
      
      
  }
}










