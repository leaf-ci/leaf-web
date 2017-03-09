import Ember from 'ember';
import MenuMixin from 'leaf-web/mixins/menu';
import { module, test } from 'qunit';

module('Unit | Mixin | menu');

// Replace this with your real tests.
test('it works', function(assert) {
  let MenuObject = Ember.Object.extend(MenuMixin);
  let subject = MenuObject.create();
  assert.ok(subject);
});
