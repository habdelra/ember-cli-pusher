module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function() {
    return this.addBowerPackageToProject('ember-pusher', 'habdelra/ember-pusher');
  }
};
