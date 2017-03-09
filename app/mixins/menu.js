import Ember from 'ember';

export default Ember.Mixin.create({
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
