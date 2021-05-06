import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | use', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:use');
    assert.ok(route);
  });
});
