module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function() {
    return this.addBowerPackageToProject('ember-pusher', 'git://github.com/habdelra/ember-pusher.git#master,');
  }
};
