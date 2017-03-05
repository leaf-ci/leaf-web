import Ember from 'ember';

export default Ember.Controller.extend({
  isOpened: false,
  actions: {
    toggle() {
      this.toggleProperty('isOpened');
    }
  }
});
