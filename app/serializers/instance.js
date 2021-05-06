import RESTSerializer from '@ember-data/serializer/rest';

export default class InstanceSerializer extends RESTSerializer {
    primaryKey = 'id';
    normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType) {
        let normalisedPayload = {
            "instances": payload.instances
        }
        return this.normalizeArrayResponse(store, primaryModelClass, normalisedPayload, id, requestType);
    }

}
