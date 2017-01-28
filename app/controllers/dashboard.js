import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        textChanged(id, text) {
            return this.get("store").findRecord("dashboard", id).then({dashboard} => {
                dashboard.set("text", text);
                dashboard.save();
            });
        }
    }
});
