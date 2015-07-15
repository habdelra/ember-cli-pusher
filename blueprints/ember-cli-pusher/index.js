module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function() {
    return this.addBowerPackageToProject('ember-pusher', 'https://github.com/habdelra/ember-pusher-component.git#~0.1.1');
  }
};
