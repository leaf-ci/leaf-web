import Ember from 'ember';

export default Ember.Component.extend({
  isOpened: false,
  actions: {
    toggle() {
      this.toggleProperty('isOpened');
    },
    close() {
      this.set('isOpened', false);
    }
  },
});
