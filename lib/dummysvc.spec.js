/*global describe, beforeEach, inject, it, expect */
'use strict';

describe('DummySvc test', function() {
  var instance;

  beforeEach(module('wayne'));
  beforeEach(inject(function(_DummySvc_) {
    instance = _DummySvc_;
  }));

  describe('DummySvc', function() {
    it('should say you are a dummy', function() {
      expect(instance.sayIt()).toBe('You are a dummy');
    });
  });
});
