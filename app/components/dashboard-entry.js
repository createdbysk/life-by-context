import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        editEntry() {
            this.set("isEditing", true);
        },
        completeEdit() {
            this.set("isEditing", false);
            let callback = this.get("callback");
            callback(this.get("id"), this.get("text"));
            return false;
        }
    },
    isEditing: false
});
