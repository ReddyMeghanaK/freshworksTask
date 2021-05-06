import Model ,{attr}from '@ember-data/model';

export default class InstanceModel extends Model {
    @attr('string') type;
    @attr('string') name;
    @attr('boolean') isFree;
    @attr('boolean') isDeleted;
    @attr('number') teamId;
    @attr('number') createdBy;
   
}
