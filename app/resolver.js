import Resolver from 'ember-resolver';
import { computed } from '@ember/object';

export default Resolver.extend({
  customRoutesPodBasedModuleName(parsedName) {
    let podPrefix = this.namespace.podModulePrefix || this.namespace.modulePrefix + '/routes';

    return this.podBasedLookupWithPrefix(podPrefix, parsedName);
  },

  /**
     A listing of functions to test for moduleName's based on the provided
     `parsedName`. This allows easy customization of additional module based
     lookup patterns.
     @property moduleNameLookupPatterns
     @returns {Ember.Array}
     */
  moduleNameLookupPatterns: computed('customRoutesPodBasedModuleName', function () {
    const mnlPatterns = this._super();
    mnlPatterns.unshift(this.customRoutesPodBasedModuleName);
    return mnlPatterns;
  }).readOnly(),
});
