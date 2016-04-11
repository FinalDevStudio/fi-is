describe("arithmetic checks", function () {
  describe("is.equal", function () {
    it("should return true if given two numbers are equal", function () {
      expect(is.equal(3, 1 + 2)).to.be.true;
    });

    it("should return false if given two numbers are not equal", function () {
      expect(is.equal(3, 2)).to.be.false;
    });

    it("should return true if given two strings are same", function () {
      expect(is.equal("string", "string")).to.be.true;
    });

    it("should return false if given two strings are not same", function () {
      expect(is.equal("string", 'test2')).to.be.false;
    });

    it("should return true if given two boolean are same", function () {
      expect(is.equal(false, false)).to.be.true;
    });

    it("should return false if given two boolean are not same", function () {
      expect(is.equal(false, true)).to.be.false;
    });

    it("should return true if given two arrays are same", function () {
      expect(is.equal([1, 2], [1, 2])).to.be.true;
    });

    it("should return false if given two arrays are not same", function () {
      expect(is.equal([1, 2], [1, 3])).to.be.false;
    });

    it("should return true if given two nested arrays are same", function () {
      expect(is.equal([
        [1],
        ['test']
      ], [
        [1],
        ['test']
      ])).to.be.true;
    });

    it("should return false if given two nested arrays are not same", function () {
      expect(is.equal([
        [1],
        ['test']
      ], [
        [1],
        ['not test']
      ])).to.be.false;
    });

    it("should return false if given two deep nested arrays are the same", function () {
      expect(is.equal([
        [
          [1, 2, [3, [4, 5]]]
        ],
        [
          ['foo', ['bar']]
        ]
      ], [
        [
          [1, 2, [3, [4, 5]]]
        ],
        [
          ['foo', ['bar']]
        ]
      ])).to.be.true;
    });

    it("should return false if given two deep nested arrays are not same", function () {
      expect(is.equal([
        [
          [1, 2, [3, [4, 5]]]
        ],
        [
          ['foo', ['bar']]
        ]
      ], [
        [
          [1, 2, [3, [4, 5]]]
        ],
        [
          ['foo', ['bas']]
        ]
      ])).to.be.false;
    });
  });

  describe("is.not.equal", function () {
    it("should return false if given two numbers are equal", function () {
      expect(is.not.equal(3, 1 + 2)).to.be.false;
    });

    it("should return true if given two numbers are not equal", function () {
      expect(is.not.equal(3, 2)).to.be.true;
    });

    it("should return false if given two strings are same", function () {
      expect(is.not.equal("string", "string")).to.be.false;
    });

    it("should return true if given two strings are not same", function () {
      expect(is.not.equal("string", "string too")).to.be.true;
    });

    it("should return false if given two boolean are same", function () {
      expect(is.not.equal(false, false)).to.be.false;
    });

    it("should return true if given two boolean are not same", function () {
      expect(is.not.equal(false, true)).to.be.true;
    });

    it("should return false if given two arrays are same", function () {
      expect(is.not.equal([1, 2], [1, 2])).to.be.false;
    });

    it("should return true if given two arrays are not same", function () {
      expect(is.not.equal([1, 2], [1, 3])).to.be.true;
    });

    it("should return false if given two nested arrays are same", function () {
      expect(is.not.equal([
        [1],
        ['test']
      ], [
        [1],
        ['test']
      ])).to.be.false;
    });

    it("should return true if given two nested arrays are not same", function () {
      expect(is.not.equal([
        [1],
        ['test']
      ], [
        [1],
        ['not test']
      ])).to.be.true;
    });

    it("should return false if given two deep nested arrays are the same", function () {
      expect(is.not.equal([
        [
          [1, 2, [3, [4, 5]]]
        ],
        [
          ['foo', ['bar']]
        ]
      ], [
        [
          [1, 2, [3, [4, 5]]]
        ],
        [
          ['foo', ['bar']]
        ]
      ])).to.be.false;
    });

    it("should return true if given two deep nested arrays are not same", function () {
      expect(is.not.equal([
        [
          [1, 2, [3, [4, 5]]]
        ],
        [
          ['foo', ['bar']]
        ]
      ], [
        [
          [1, 2, [3, [4, 5]]]
        ],
        [
          ['foo', ['bas']]
        ]
      ])).to.be.true;
    });
  });

  describe("is.even", function () {
    it("should return true if given number is even", function () {
      expect(is.even(2)).to.be.true;
    });

    it("should return false if given number is not even", function () {
      expect(is.even(3)).to.be.false;
    });

    it("should return false if given number is not integer", function () {
      expect(is.even(2.5)).to.be.false;
    });
  });

  describe("is.not.even", function () {
    it("should return false if given number is even", function () {
      expect(is.not.even(2)).to.be.false;
    });

    it("should return true if given number is not even", function () {
      expect(is.not.even(3)).to.be.true;
    });
  });

  describe("is.all.even", function () {
    it("should return true if all given numbers are even", function () {
      expect(is.all.even(2, 4, 6)).to.be.true;
      expect(is.all.even([2, 4, 6])).to.be.true;
    });

    it("should return false if any given number is not even", function () {
      expect(is.all.even(2, 4, 5)).to.be.false;
      expect(is.all.even([2, 4, 5])).to.be.false;
    });
  });

  describe("is.any.even", function () {
    it("should return true if any given number is even", function () {
      expect(is.any.even(2, 3, 5)).to.be.true;
      expect(is.any.even([2, 3, 5])).to.be.true;
    });

    it("should return false if all given numbers are not even", function () {
      expect(is.any.even(1, 3, 5)).to.be.false;
      expect(is.any.even([1, 3, 5])).to.be.false;
    });
  });

  describe("is.odd", function () {
    it("should return true if given number is odd", function () {
      expect(is.odd(3)).to.be.true;
    });

    it("should return false if given number is not odd", function () {
      expect(is.odd(2)).to.be.false;
    });

    it("should return false if given number is not integer", function () {
      expect(is.odd(2.5)).to.be.false;
    });
  });

  describe("is.not.odd", function () {
    it("should return false if given number is odd", function () {
      expect(is.not.odd(3)).to.be.false;
    });

    it("should return true if given number is not odd", function () {
      expect(is.not.odd(2)).to.be.true;
    });
  });

  describe("is.all.odd", function () {
    it("should return true if all given numbers are odd", function () {
      expect(is.all.odd(1, 3, 5)).to.be.true;
      expect(is.all.odd([1, 3, 5])).to.be.true;
    });

    it("should return false if any given number is not odd", function () {
      expect(is.all.odd(1, 3, 4)).to.be.false;
      expect(is.all.odd([1, 3, 4])).to.be.false;
    });
  });

  describe("is.any.odd", function () {
    it("should return true if any given number is odd", function () {
      expect(is.any.odd(2, 4, 5)).to.be.true;
      expect(is.any.odd([2, 4, 5])).to.be.true;
    });

    it("should return false if all given numbers are not odd", function () {
      expect(is.any.odd(2, 4, 6)).to.be.false;
      expect(is.any.odd([2, 4, 6])).to.be.false;
    });
  });

  describe("is.positive", function () {
    it("should return true if given number is positive", function () {
      expect(is.positive(3)).to.be.true;
    });

    it("should return false if given number is not positive", function () {
      expect(is.positive(-2)).to.be.false;
    });
  });

  describe("is.not.positive", function () {
    it("should return false if given number is positive", function () {
      expect(is.not.positive(3)).to.be.false;
    });

    it("should return true if given number is not positive", function () {
      expect(is.not.positive(-2)).to.be.true;
    });
  });

  describe("is.all.positive", function () {
    it("should return true if all given numbers are positive", function () {
      expect(is.all.positive(1, 3, 5)).to.be.true;
      expect(is.all.positive([1, 3, 5])).to.be.true;
    });

    it("should return false if any given number is not positive", function () {
      expect(is.all.positive(1, 3, -4)).to.be.false;
      expect(is.all.positive([1, 3, -4])).to.be.false;
    });
  });

  describe("is.any.positive", function () {
    it("should return true if any given number is positive", function () {
      expect(is.any.positive(2, -4, -5)).to.be.true;
      expect(is.any.positive([2, -4, -5])).to.be.true;
    });

    it("should return false if all given numbers are not positive", function () {
      expect(is.any.positive(-2, -4, -6)).to.be.false;
      expect(is.any.positive([-2, -4, -6])).to.be.false;
    });
  });

  describe("is.negative", function () {
    it("should return true if given number is negative", function () {
      expect(is.negative(-3)).to.be.true;
    });

    it("should return false if given number is not negative", function () {
      expect(is.negative(2)).to.be.false;
    });
  });

  describe("is.not.negative", function () {
    it("should return false if given number is negative", function () {
      expect(is.not.negative(-3)).to.be.false;
    });

    it("should return true if given number is not negative", function () {
      expect(is.not.negative(2)).to.be.true;
    });
  });

  describe("is.all.negative", function () {
    it("should return true if all given numbers are negative", function () {
      expect(is.all.negative(-1, -3, -5)).to.be.true;
      expect(is.all.negative([-1, -3, -5])).to.be.true;
    });

    it("should return false if any given number is not negative", function () {
      expect(is.all.negative(1, -3, -4)).to.be.false;
      expect(is.all.negative([1, -3, -4])).to.be.false;
    });
  });

  describe("is.any.negative", function () {
    it("should return true if any given number is negative", function () {
      expect(is.any.negative(2, 4, -5)).to.be.true;
      expect(is.any.negative([2, 4, -5])).to.be.true;
    });

    it("should return false if all given numbers are not negative", function () {
      expect(is.any.negative(2, 4, 6)).to.be.false;
      expect(is.any.negative([2, 4, 6])).to.be.false;
    });
  });

  describe("is.above", function () {
    it("should return true if given number is above minimum value", function () {
      expect(is.above(13, 12)).to.be.true;
    });

    it("should return false if given number is not above minimum value", function () {
      expect(is.above(12, 13)).to.be.false;
    });
  });

  describe("is.not.above", function () {
    it("should return false if given number is above minimum value", function () {
      expect(is.not.above(13, 12)).to.be.false;
    });

    it("should return true if given number is not above minimum value", function () {
      expect(is.not.above(12, 13)).to.be.true;
    });
  });

  describe("is.under", function () {
    it("should return true if given number is under maximum value", function () {
      expect(is.under(11, 12)).to.be.true;
    });

    it("should return false if given number is not under maximum value", function () {
      expect(is.under(12, 11)).to.be.false;
    });
  });

  describe("is.not.under", function () {
    it("should return true if given number is under maximum value", function () {
      expect(is.not.under(13, 12)).to.be.true;
    });

    it("should return false if given number is not under maximum value", function () {
      expect(is.not.under(12, 13)).to.be.false;
    });
  });

  describe("is.within", function () {
    it("should return true if given number is within minimum and maximum values", function () {
      expect(is.within(10, 5, 15)).to.be.true;
    });

    it("should return false if given number is not within minimum and maximum values", function () {
      expect(is.within(20, 5, 15)).to.be.false;
    });
  });

  describe("is.not.within", function () {
    it("should return false if given number is within minimum and maximum values", function () {
      expect(is.not.within(10, 5, 15)).to.be.false;
    });

    it("should return true if given number is not within minimum and maximum values", function () {
      expect(is.not.within(20, 5, 15)).to.be.true;
    });
  });

  describe("is.decimal", function () {
    it("should return true if given number is decimal", function () {
      expect(is.decimal(4.2)).to.be.true;
    });

    it("should return false if given number is not decimal", function () {
      expect(is.decimal(2)).to.be.false;
    });
  });

  describe("is.not.decimal", function () {
    it("should return false if given number is decimal", function () {
      expect(is.not.decimal(4.2)).to.be.false;
    });

    it("should return true if given number is not decimal", function () {
      expect(is.not.decimal(2)).to.be.true;
    });
  });

  describe("is.all.decimal", function () {
    it("should return true if all given numbers are decimal", function () {
      expect(is.all.decimal(1.2, 3.4, 5.6)).to.be.true;
      expect(is.all.decimal([1.2, 3.4, 5.6])).to.be.true;
    });

    it("should return false if any given number is not decimal", function () {
      expect(is.all.decimal(1.2, 3.4, 5)).to.be.false;
      expect(is.all.decimal([1.2, 3.4, 5])).to.be.false;
    });
  });

  describe("is.any.decimal", function () {
    it("should return true if any given number is decimal", function () {
      expect(is.any.decimal(1.2, 3, 5)).to.be.true;
      expect(is.any.decimal([1.2, 3, 5])).to.be.true;
    });

    it("should return false if all given numbers are not decimal", function () {
      expect(is.any.decimal(1, 3, 5)).to.be.false;
      expect(is.any.decimal([1, 3, 5])).to.be.false;
    });
  });

  describe("is.integer", function () {
    it("should return true if given number is integer", function () {
      expect(is.integer(4)).to.be.true;
    });

    it("should return false if given number is not integer", function () {
      expect(is.integer(2.2)).to.be.false;
    });
  });

  describe("is.not.integer", function () {
    it("should return false if given number is integer", function () {
      expect(is.not.integer(4)).to.be.false;
    });

    it("should return true if given number is not integer", function () {
      expect(is.not.integer(2.2)).to.be.true;
    });
  });

  describe("is.all.integer", function () {
    it("should return true if all given numbers are integer", function () {
      expect(is.all.integer(1, 3, 5)).to.be.true;
      expect(is.all.integer([1, 3, 5])).to.be.true;
    });

    it("should return false if any given number is not integer", function () {
      expect(is.all.integer(1, 3.4, 5)).to.be.false;
      expect(is.all.integer([1, 3.4, 5])).to.be.false;
    });
  });

  describe("is.any.integer", function () {
    it("should return true if any given number is integer", function () {
      expect(is.any.integer(1.2, 3, 5)).to.be.true;
      expect(is.any.integer([1.2, 3, 5])).to.be.true;
    });

    it("should return false if all given numbers are not integer", function () {
      expect(is.any.integer(1.2, 3.4, 5.6)).to.be.false;
      expect(is.any.integer([1.2, 3.4, 5.6])).to.be.false;
    });
  });

  describe("is.finite", function () {
    it("should return true if given number is finite", function () {
      expect(is.finite(4)).to.be.true;
    });

    it("should return false if given number is not finite", function () {
      expect(is.finite(Infinity)).to.be.false;
    });
  });

  describe("is.not.finite", function () {
    it("should return false if given number is finite", function () {
      expect(is.not.finite(4)).to.be.false;
    });

    it("should return true if given number is not finite", function () {
      expect(is.not.finite(Infinity)).to.be.true;
    });
  });

  describe("is.all.finite", function () {
    it("should return true if all given numbers are finite", function () {
      expect(is.all.finite(1, 2)).to.be.true;
      expect(is.all.finite([1, 2])).to.be.true;
    });

    it("should return false if any given number is not finite", function () {
      expect(is.all.finite(Infinity, -Infinity)).to.be.false;
      expect(is.all.finite([Infinity, -Infinity])).to.be.false;
    });
  });

  describe("is.any.finite", function () {
    it("should return true if any given number is finite", function () {
      expect(is.any.finite(Infinity, 1)).to.be.true;
      expect(is.any.finite([Infinity, 1])).to.be.true;
    });

    it("should return false if all given numbers are not finite", function () {
      expect(is.any.finite(Infinity, -Infinity)).to.be.false;
      expect(is.any.finite([Infinity, -Infinity])).to.be.false;
    });
  });

  describe("is.infinite", function () {
    it("should return true if given number is infinite", function () {
      expect(is.infinite(Infinity)).to.be.true;
    });

    it("should return false if given number is not infinite", function () {
      expect(is.infinite(1)).to.be.false;
    });
  });

  describe("is.not.infinite", function () {
    it("should return false if given number is infinite", function () {
      expect(is.not.infinite(Infinity)).to.be.false;
    });

    it("should return true if given number is not infinite", function () {
      expect(is.not.infinite(1)).to.be.true;
    });
  });

  describe("is.all.infinite", function () {
    it("should return true if all given numbers are infinite", function () {
      expect(is.all.infinite(Infinity, -Infinity)).to.be.true;
      expect(is.all.infinite([Infinity, -Infinity])).to.be.true;
    });

    it("should return false if any given number is not infinite", function () {
      expect(is.all.infinite(Infinity, 1)).to.be.false;
      expect(is.all.infinite([Infinity, 1])).to.be.false;
    });
  });

  describe("is.any.infinite", function () {
    it("should return true if any given number is infinite", function () {
      expect(is.any.infinite(Infinity, 1)).to.be.true;
      expect(is.any.infinite([Infinity, 1])).to.be.true;
    });

    it("should return false if all given numbers are not infinite", function () {
      expect(is.any.infinite(1, -2)).to.be.false;
      expect(is.any.infinite([1, -2])).to.be.false;
    });
  });
});
