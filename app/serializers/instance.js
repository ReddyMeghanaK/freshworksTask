import RESTSerializer from '@ember-data/serializer/rest';

export default class InstanceSerializer extends RESTSerializer {
    primaryKey = 'id';
    // normalizeFindAllResponse(store , primaryModelClass ,payload, id, requestType){
    //     // arguments[2] = 

    // }

    // normalizeFindAllResponse(store , primaryModelClass ,payload, id, requestType){
    //     let normalisedPayload = payload.map((instance)=>{
    //         return {type:'instance',...instance}
    //     })
    //     console.log(normalisedPayload)
    //     return this._super(store, primaryModelClass, {"data" : [...normalisedPayload]}, id, requestType);
    // }
}
