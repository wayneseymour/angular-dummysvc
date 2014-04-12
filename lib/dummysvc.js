/*global angular*/
'use strict';

angular.module('wayne', []).

service('DummySvc', [
  function() {
    return {
      sayIt: function() {
        return 'You are a dummy';
      }
    };
  }
]);
