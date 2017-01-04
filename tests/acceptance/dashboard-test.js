import { test } from 'qunit';
import moduleForAcceptance from 'life-by-context/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | dashboard');

test('should redirect to dashboard route', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/dashboard', 'should redirect automatically');
  });
});

test('should list entries meant to be listed on the dashboard', function (assert) {
  visit('/');
  andThen(function () {
    assert.equal(find('.entry').length, 1, 'should see 1 entry');
  });
});
