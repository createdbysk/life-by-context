import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        editEntry() {
            this.set("isEditing", true);
        },
        completeEdit() {
            this.set("isEditing", false);
        }
    },
    isEditing: false
});
