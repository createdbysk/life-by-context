import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
    text(i) {
        return 'entry ' + (i + 1);
    }
});
