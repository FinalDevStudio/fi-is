describe('object checks', function () {
  describe('is.propertyCount', function () {
    it('should return true if given count is objects\' property count', function () {
      const obj = {
        test: 'testing',
        is: 'is',
        good: 'good'
      };

      expect(is.propertyCount(obj, 3)).to.be.true;
    });

    it('should return false if given count is not objects\' property count', function () {
      const obj = {
        test: 'testing',
        is: 'is'
      };

      expect(is.propertyCount(obj, 3)).to.be.false;
    });

    it('should return false if given first argument is not an object', function () {
      expect(is.propertyCount('wer', 3)).to.be.false;
    });

    it('should return false if given second argument is not an number', function () {
      expect(is.propertyCount({ a: 1234 }, false)).to.be.false;
    });

    it('should return false if given arguments are invalid', function () {
      expect(is.propertyCount(Array, undefined)).to.be.false;
    });
  });

  describe('is.not.propertyCount', function () {
    it('should return false if given count is objects\' property count', function () {
      const obj = {
        test: 'testing',
        is: 'is',
        good: 'good'
      };

      expect(is.not.propertyCount(obj, 3)).to.be.false;
    });

    it('should return true if given count is not objects\' property count', function () {
      const obj = {
        test: 'testing',
        is: 'is'
      };

      expect(is.not.propertyCount(obj, 3)).to.be.true;
    });
  });

  describe('is.propertyDefined', function () {
    it('should return true if given property is in objects', function () {
      const obj = {
        testing: 'testing',
        is: 'is',
        good: 'good'
      };

      expect(is.propertyDefined(obj, 'good')).to.be.true;
    });

    it('should return false if given property is not in objects', function () {
      const obj = {
        test: 'testing',
        is: 'is'
      };

      expect(is.propertyDefined(obj, 'good')).to.be.false;
    });
  });

  describe('is.not.propertyDefined', function () {
    it('should return false if given property is in objects', function () {
      const obj = {
        test: 'testing',
        is: 'is',
        good: 'good'
      };

      expect(is.not.propertyDefined(obj, 'good')).to.be.false;
    });

    it('should return true if given property is not in objects', function () {
      const obj = {
        test: 'testing',
        is: 'is'
      };

      expect(is.not.propertyDefined(obj, 'good')).to.be.true;
    });
  });
});
