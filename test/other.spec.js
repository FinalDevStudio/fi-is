describe('other tests', function () {
  describe('is.setNamespace', function () {
    it('should allow to change the namespace', function () {
      var ns = is.setNamespace();

      expect(ns).to.be.an('object');
      expect(ns.number(1)).to.be.true;
      expect(ns.not.number(1)).to.be.false;
      expect(ns.nan(NaN)).to.be.true;
      expect(ns.nan(1)).to.be.false;
    });
  });
});
