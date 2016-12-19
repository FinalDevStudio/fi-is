describe("time checks", function () {
  describe("is.today", function () {
    it("should return true if given date is today", function () {
      var date = new Date();
      expect(is.today(date)).to.be.true;
    });

    it("should return false if given date is not today", function () {
      var date = new Date();
      expect(is.today(date.setDate(date.getDate() - 1))).to.be.false;
    });
  });

  describe("is.not.today", function () {
    it("should return false if given date is today", function () {
      var date = new Date();
      expect(is.not.today(date)).to.be.false;
    });

    it("should return true if given date is not today", function () {
      var date = new Date();
      expect(is.not.today(date.setDate(date.getDate() - 1))).to.be.true;
    });
  });

  describe("is.all.today", function () {
    it("should return true if all given dates are today", function () {
      var date = new Date();
      expect(is.all.today(date, date)).to.be.true;
      expect(is.all.today([date, date])).to.be.true;
    });

    it("should return false if any given date is not today", function () {
      var date = new Date();
      expect(is.all.today(new Date(), date.setDate(date.getDate() - 1))).to.be.false;
      expect(is.all.today([new Date(), date.setDate(date.getDate() - 1)])).to.be.false;
    });
  });

  describe("is.any.today", function () {
    it("should return true if any given date is today", function () {
      var date = new Date();
      expect(is.any.today(new Date(), date.setDate(date.getDate() - 1))).to.be.true;
      expect(is.any.today([new Date(), date.setDate(date.getDate() - 1)])).to.be.true;
    });

    it("should return false if all given dates are not today", function () {
      var date = new Date();
      expect(is.any.today(date.setDate(date.getDate() - 1), date.setDate(date.getDate() - 1))).to.be.false;
      expect(is.any.today([date.setDate(date.getDate() - 1), date.setDate(date.getDate() - 1)])).to.be.false;
    });
  });

  describe("is.yesterday", function () {
    it("should return true if given date is yesterday", function () {
      var date = new Date();
      var yesterday = new Date(date.setDate(date.getDate() - 1));
      expect(is.yesterday(yesterday)).to.be.true;
    });

    it("should return false if given date is not yesterday", function () {
      var date = new Date();
      expect(is.yesterday(date)).to.be.false;
    });
  });

  describe("is.not.yesterday", function () {
    it("should return false if given date is yesterday", function () {
      var date = new Date();
      var yesterday = new Date(date.setDate(date.getDate() - 1));
      expect(is.not.yesterday(yesterday)).to.be.false;
    });

    it("should return true if given date is not yesterday", function () {
      var date = new Date();
      expect(is.not.yesterday(date)).to.be.true;
    });
  });

  describe("is.all.yesterday", function () {
    it("should return true if all given dates are yesterday", function () {
      var date = new Date();
      var yesterday = new Date(date.setDate(date.getDate() - 1));
      expect(is.all.yesterday(yesterday, yesterday)).to.be.true;
      expect(is.all.yesterday([yesterday, yesterday])).to.be.true;
    });

    it("should return false if any given date is not yesterday", function () {
      var date = new Date();
      var yesterday = new Date(date.setDate(date.getDate() - 1));
      expect(is.all.yesterday(new Date(), yesterday)).to.be.false;
      expect(is.all.yesterday([new Date(), yesterday])).to.be.false;
    });
  });

  describe("is.any.yesterday", function () {
    it("should return true if any given date is yesterday", function () {
      var date = new Date();
      var yesterday = new Date(date.setDate(date.getDate() - 1));
      expect(is.any.yesterday(new Date(), yesterday)).to.be.true;
      expect(is.any.yesterday([new Date(), yesterday])).to.be.true;
    });

    it("should return false if all given dates are not yesterday", function () {
      var date = new Date();
      expect(is.any.yesterday(date, date)).to.be.false;
      expect(is.any.yesterday([date, date])).to.be.false;
    });
  });

  describe("is.tomorrow", function () {
    it("should return true if given date is tomorrow", function () {
      var date = new Date();
      var tomorrow = new Date(date.setDate(date.getDate() + 1));
      expect(is.tomorrow(tomorrow)).to.be.true;
    });

    it("should return false if given date is not tomorrow", function () {
      var date = new Date();
      expect(is.tomorrow(date)).to.be.false;
    });
  });

  describe("is.not.tomorrow", function () {
    it("should return false if given date is tomorrow", function () {
      var date = new Date();
      var tomorrow = new Date(date.setDate(date.getDate() + 1));
      expect(is.not.tomorrow(tomorrow)).to.be.false;
    });

    it("should return true if given date is not tomorrow", function () {
      var date = new Date();
      expect(is.not.tomorrow(date)).to.be.true;
    });
  });

  describe("is.all.tomorrow", function () {
    it("should return true if all given dates are tomorrow", function () {
      var date = new Date();
      var tomorrow = new Date(date.setDate(date.getDate() + 1));
      expect(is.all.tomorrow(tomorrow, tomorrow)).to.be.true;
      expect(is.all.tomorrow([tomorrow, tomorrow])).to.be.true;
    });

    it("should return false if any given date is not tomorrow", function () {
      var date = new Date();
      var tomorrow = new Date(date.setDate(date.getDate() + 1));
      expect(is.all.tomorrow(new Date(), tomorrow)).to.be.false;
      expect(is.all.tomorrow([new Date(), tomorrow])).to.be.false;
    });
  });

  describe("is.any.tomorrow", function () {
    it("should return true if any given date is tomorrow", function () {
      var date = new Date();
      var tomorrow = new Date(date.setDate(date.getDate() + 1));
      expect(is.any.tomorrow(new Date(), tomorrow)).to.be.true;
      expect(is.any.tomorrow([new Date(), tomorrow])).to.be.true;
    });

    it("should return false if all given dates are not tomorrow", function () {
      var date = new Date();
      expect(is.any.tomorrow(date, date)).to.be.false;
      expect(is.any.tomorrow([date, date])).to.be.false;
    });
  });

  describe("is.past", function () {
    it("should return true if given date is past", function () {
      var date = new Date();
      var past = new Date(date.setDate(date.getDate() - 1));
      expect(is.past(past)).to.be.true;
    });

    it("should return false if given date is not past", function () {
      var date = new Date();
      expect(is.past(date)).to.be.false;
    });
  });

  describe("is.not.past", function () {
    it("should return false if given date is past", function () {
      var date = new Date();
      var past = new Date(date.setDate(date.getDate() - 1));
      expect(is.not.past(past)).to.be.false;
    });

    it("should return true if given date is not past", function () {
      var date = new Date();
      var future = new Date(date.setDate(date.getDate() + 1));
      expect(is.not.past(future)).to.be.true;
    });
  });

  describe("is.all.past", function () {
    it("should return true if all given dates are past", function () {
      var date = new Date();
      var past = new Date(date.setDate(date.getDate() - 1));
      expect(is.all.past(past, past)).to.be.true;
      expect(is.all.past([past, past])).to.be.true;
    });

    it("should return false if any given date is not past", function () {
      var date = new Date();
      var past = new Date(date.setDate(date.getDate() - 1));
      expect(is.all.past(new Date(), past)).to.be.false;
      expect(is.all.past([new Date(), past])).to.be.false;
    });
  });

  describe("is.any.past", function () {
    it("should return true if any given date is past", function () {
      var date = new Date();
      var past = new Date(date.setDate(date.getDate() - 1));
      expect(is.any.past(new Date(), past)).to.be.true;
      expect(is.any.past([new Date(), past])).to.be.true;
    });

    it("should return false if all given dates are not past", function () {
      var date = new Date();
      var future = new Date(date.setDate(date.getDate() + 1));
      expect(is.any.past(future, future)).to.be.false;
      expect(is.any.past([future, future])).to.be.false;
    });
  });

  describe("is.future", function () {
    it("should return true if given date is future", function () {
      var date = new Date();
      var future = new Date(date.setDate(date.getDate() + 1));
      expect(is.future(future)).to.be.true;
    });

    it("should return false if given date is not future", function () {
      var date = new Date();
      var past = new Date(date.setDate(date.getDate() - 1));
      expect(is.future(past)).to.be.false;
    });
  });

  describe("is.not.future", function () {
    it("should return false if given date is future", function () {
      var date = new Date();
      var future = new Date(date.setDate(date.getDate() + 1));
      expect(is.not.future(future)).to.be.false;
    });

    it("should return true if given date is not future", function () {
      var date = new Date();
      var past = new Date(date.setDate(date.getDate() - 1));
      expect(is.not.future(past)).to.be.true;
    });
  });

  describe("is.all.future", function () {
    it("should return true if all given dates are future", function () {
      var date = new Date();
      var future = new Date(date.setDate(date.getDate() + 1));
      expect(is.all.future(future, future)).to.be.true;
      expect(is.all.future([future, future])).to.be.true;
    });

    it("should return false if any given date is not future", function () {
      var date = new Date();
      var future = new Date(date.setDate(date.getDate() + 1));
      var past = new Date(date.setDate(date.getDate() - 2));
      expect(is.all.future(past, future)).to.be.false;
      expect(is.all.future([past, future])).to.be.false;
    });
  });

  describe("is.any.future", function () {
    it("should return true if any given date is future", function () {
      var date = new Date();
      var future = new Date(date.setDate(date.getDate() + 1));
      var past = new Date(date.setDate(date.getDate() - 2));
      expect(is.any.future(past, future)).to.be.true;
      expect(is.any.future([past, future])).to.be.true;
    });

    it("should return false if all given dates are not future", function () {
      var date = new Date();
      var past = new Date(date.setDate(date.getDate() - 1));
      expect(is.any.future(past, past)).to.be.false;
      expect(is.any.future([past, past])).to.be.false;
    });
  });

  describe("is.day", function () {
    it("should return true if given day string is date objects' day", function () {
      var time = 1421572235303;
      expect(is.day(new Date(time), 'sunday')).to.be.true;
    });

    it("should return false if given day string is not date objects' day", function () {
      var time = 1421572235303;
      expect(is.day(new Date(time), 'monday')).to.be.false;
    });
  });

  describe("is.not.day", function () {
    it("should return false if given day string is date objects' day", function () {
      var time = 1421572235303;
      expect(is.not.day(new Date(time), 'sunday')).to.be.false;
    });

    it("should return true if given day string is not date objects' day", function () {
      var time = 1421572235303;
      expect(is.not.day(new Date(time), 'monday')).to.be.true;
    });
  });

  describe("is.month", function () {
    it("should return true if given month string is date objects' month", function () {
      var time = 1421572235303;
      expect(is.month(new Date(time), 'january')).to.be.true;
    });

    it("should return false if given month string is not date objects' month", function () {
      var time = 1421572235303;
      expect(is.month(new Date(time), 'february')).to.be.false;
    });
  });

  describe("is.not.month", function () {
    it("should return false if given month string is date objects' month", function () {
      var time = 1421572235303;
      expect(is.not.month(new Date(time), 'january')).to.be.false;
    });

    it("should return true if given month string is not date objects' month", function () {
      var time = 1421572235303;
      expect(is.not.month(new Date(time), 'february')).to.be.true;
    });
  });

  describe("is.year", function () {
    it("should return true if given year string is date objects' year", function () {
      var time = 1421572235303;
      expect(is.year(new Date(time), 2015)).to.be.true;
    });

    it("should return false if given year string is not date objects' year", function () {
      var time = 1421572235303;
      expect(is.year(new Date(time), 2016)).to.be.false;
    });
  });

  describe("is.not.year", function () {
    it("should return false if given year string is date objects' year", function () {
      var time = 1421572235303;
      expect(is.not.year(new Date(time), 2015)).to.be.false;
    });

    it("should return true if given year string is not date objects' year", function () {
      var time = 1421572235303;
      expect(is.not.year(new Date(time), 2016)).to.be.true;
    });
  });

  describe("is.leapYear", function () {
    it("should return true if given year is a leap year", function () {
      expect(is.leapYear(2016)).to.be.true;
    });

    it("should return false if given year is not a leap year", function () {
      expect(is.leapYear(2015)).to.be.false;
    });
  });

  describe("is.not.leapYear", function () {
    it("should return false if given year is a leap year", function () {
      expect(is.not.leapYear(2016)).to.be.false;
    });

    it("should return true if given year is not a leap year", function () {
      expect(is.not.leapYear(2015)).to.be.true;
    });
  });

  describe("is.all.leapYear", function () {
    it("should return true if all given years are leap years", function () {
      expect(is.all.leapYear(2080, 2180)).to.be.true;
      expect(is.all.leapYear([2080, 2180])).to.be.true;
    });

    it("should return false if any given year is not a leap year", function () {
      expect(is.all.leapYear(2015, 2080)).to.be.false;
      expect(is.all.leapYear([2015, 2080])).to.be.false;
    });
  });

  describe("is.any.leapYear", function () {
    it("should return true if any given year is leap year", function () {
      expect(is.any.leapYear(2080, 2181)).to.be.true;
      expect(is.any.leapYear([2080, 2181])).to.be.true;
    });

    it("should return false if all given years are not a leap years", function () {
      expect(is.any.leapYear(2015, 2081)).to.be.false;
      expect(is.any.leapYear([2015, 2081])).to.be.false;
    });
  });

  describe("is.weekend", function () {
    it("should return true if given date is weekend", function () {
      var time = 1421572235303;
      expect(is.weekend(new Date(time))).to.be.true;
    });

    it("should return false if given date is not weekend", function () {
      var time = 1421572235303;
      var date = new Date(time);
      var friday = new Date(date.setDate(date.getDate() - 2));
      expect(is.weekend(friday)).to.be.false;
    });
  });

  describe("is.not.weekend", function () {
    it("should return false if given date is weekend", function () {
      var time = 1421572235303;
      expect(is.not.weekend(new Date(time))).to.be.false;
    });

    it("should return true if given date is not weekend", function () {
      var time = 1421572235303;
      var date = new Date(time);
      var friday = new Date(date.setDate(date.getDate() - 2));
      expect(is.not.weekend(friday)).to.be.true;
    });
  });

  describe("is.all.weekend", function () {
    it("should return true if all given dates are weekend", function () {
      var time = 1421572235303;
      var date = new Date(time);
      var saturday = new Date(date.setDate(date.getDate() - 1));
      expect(is.all.weekend(new Date(time), saturday)).to.be.true;
      expect(is.all.weekend([new Date(time), saturday])).to.be.true;
    });

    it("should return false if any given date is not weekend", function () {
      var time = 1421572235303;
      var date = new Date(time);
      var friday = new Date(date.setDate(date.getDate() - 2));
      expect(is.all.weekend(new Date(time), friday)).to.be.false;
      expect(is.all.weekend([new Date(time), friday])).to.be.false;
    });
  });

  describe("is.any.weekend", function () {
    it("should return true if any given date is weekend", function () {
      var time = 1421572235303;
      var date = new Date(time);
      var friday = new Date(date.setDate(date.getDate() - 2));
      expect(is.any.weekend(new Date(time), friday)).to.be.true;
      expect(is.any.weekend([new Date(time), friday])).to.be.true;
    });

    it("should return false if all given dates are not weekend", function () {
      var time = 1421572235303;
      var date = new Date(time);
      var friday = new Date(date.setDate(date.getDate() - 2));
      var thursday = new Date(date.setDate(date.getDate() - 1));
      expect(is.any.weekend(thursday, friday)).to.be.false;
      expect(is.any.weekend([thursday, friday])).to.be.false;
    });
  });

  describe("is.weekday", function () {
    it("should return true if given date is weekday", function () {
      var time = 1421572235303;
      var date = new Date(time);
      var friday = new Date(date.setDate(date.getDate() - 2));
      expect(is.weekday(friday)).to.be.true;
    });

    it("should return false if given date is not weekday", function () {
      var time = 1421572235303;
      var sunday = new Date(time);
      expect(is.weekday(sunday)).to.be.false;
    });
  });

  describe("is.not.weekday", function () {
    it("should return false if given date is weekday", function () {
      var time = 1421572235303;
      var date = new Date(time);
      var friday = new Date(date.setDate(date.getDate() - 2));
      expect(is.not.weekday(friday)).to.be.false;
    });

    it("should return true if given date is not weekday", function () {
      var time = 1421572235303;
      var sunday = new Date(time);
      expect(is.not.weekday(sunday)).to.be.true;
    });
  });

  describe("is.all.weekday", function () {
    it("should return true if all given dates are weekday", function () {
      var time = 1421572235303;
      var date = new Date(time);
      var friday = new Date(date.setDate(date.getDate() - 2));
      var thursday = new Date(date.setDate(date.getDate() - 1));
      expect(is.all.weekday(friday, thursday)).to.be.true;
      expect(is.all.weekday([friday, thursday])).to.be.true;
    });

    it("should return false if any given date is not weekday", function () {
      var time = 1421572235303;
      var date = new Date(time);
      var saturday = new Date(date.setDate(date.getDate() - 1));
      var friday = new Date(date.setDate(date.getDate() - 1));
      expect(is.all.weekday(saturday, friday)).to.be.false;
      expect(is.all.weekday([saturday, friday])).to.be.false;
    });
  });

  describe("is.any.weekday", function () {
    it("should return true if any given date is weekday", function () {
      var time = 1421572235303;
      var date = new Date(time);
      var saturday = new Date(date.setDate(date.getDate() - 1));
      var friday = new Date(date.setDate(date.getDate() - 1));
      expect(is.any.weekday(friday, saturday)).to.be.true;
      expect(is.any.weekday([friday, saturday])).to.be.true;
    });

    it("should return false if all given dates are not weekday", function () {
      var time = 1421572235303;
      var date = new Date(time);
      var saturday = new Date(date.setDate(date.getDate() - 1));
      expect(is.any.weekday(date, saturday)).to.be.false;
      expect(is.any.weekday([date, saturday])).to.be.false;
    });
  });

  describe("is.inDateRange", function () {
    it("should return true if date is within given start date and end date", function () {
      var today = new Date();
      var date = new Date();
      var tomorrow = new Date(date.setDate(date.getDate() + 1));
      var yesterday = new Date(date.setDate(date.getDate() - 2));
      expect(is.inDateRange(today, yesterday, tomorrow)).to.be.true;
    });

    it("should return false if date is not within given start date and end date", function () {
      var today = new Date();
      var date = new Date();
      var tomorrow = new Date(date.setDate(date.getDate() + 1));
      var yesterday = new Date(date.setDate(date.getDate() - 2));
      expect(is.inDateRange(yesterday, today, tomorrow)).to.be.false;
    });
  });

  describe("is.not.inDateRange", function () {
    it("should return false if date is within given start date and end date", function () {
      var today = new Date();
      var date = new Date();
      var tomorrow = new Date(date.setDate(date.getDate() + 1));
      var yesterday = new Date(date.setDate(date.getDate() - 2));
      expect(is.not.inDateRange(today, yesterday, tomorrow)).to.be.false;
    });

    it("should return true if date is not within given start date and end date", function () {
      var today = new Date();
      var date = new Date();
      var tomorrow = new Date(date.setDate(date.getDate() + 1));
      var yesterday = new Date(date.setDate(date.getDate() - 2));
      expect(is.not.inDateRange(yesterday, today, tomorrow)).to.be.true;
    });
  });

  describe("is.inLastWeek", function () {
    it("should return true if date is within last week", function () {
      var date = new Date();
      var twoDaysAgo = new Date(date.setDate(date.getDate() - 2));
      expect(is.inLastWeek(twoDaysAgo)).to.be.true;
    });

    it("should return false if date is not within last week", function () {
      var date = new Date();
      var eightDaysAgo = new Date(date.setDate(date.getDate() - 8));
      expect(is.inLastWeek(eightDaysAgo)).to.be.false;
    });
  });

  describe("is.not.inLastWeek", function () {
    it("should return false if date is within last week", function () {
      var date = new Date();
      var twoDaysAgo = new Date(date.setDate(date.getDate() - 2));
      expect(is.not.inLastWeek(twoDaysAgo)).to.be.false;
    });

    it("should return true if date is not within last week", function () {
      var date = new Date();
      var eightDaysAgo = new Date(date.setDate(date.getDate() - 8));
      expect(is.not.inLastWeek(eightDaysAgo)).to.be.true;
    });
  });

  describe("is.all.inLastWeek", function () {
    it("should return true if all given dates are within last week", function () {
      var date = new Date();
      var twoDaysAgo = new Date(date.setDate(date.getDate() - 2));
      var threeDaysAgo = new Date(date.setDate(date.getDate() - 1));
      expect(is.all.inLastWeek(twoDaysAgo, threeDaysAgo)).to.be.true;
      expect(is.all.inLastWeek([twoDaysAgo, threeDaysAgo])).to.be.true;
    });

    it("should return false if any given date is not within last week", function () {
      var date = new Date();
      var twoDaysAgo = new Date(date.setDate(date.getDate() - 2));
      var tenDaysAgo = new Date(date.setDate(date.getDate() - 8));
      expect(is.all.inLastWeek(twoDaysAgo, tenDaysAgo)).to.be.false;
      expect(is.all.inLastWeek([twoDaysAgo, tenDaysAgo])).to.be.false;
    });
  });

  describe("is.any.inLastWeek", function () {
    it("should return true if any given date is within last week", function () {
      var date = new Date();
      var twoDaysAgo = new Date(date.setDate(date.getDate() - 2));
      var tenDaysAgo = new Date(date.setDate(date.getDate() - 8));
      expect(is.any.inLastWeek(twoDaysAgo, tenDaysAgo)).to.be.true;
      expect(is.any.inLastWeek([twoDaysAgo, tenDaysAgo])).to.be.true;
    });

    it("should return false if all given dates are not within last week", function () {
      var date = new Date();
      var eightDaysAgo = new Date(date.setDate(date.getDate() - 8));
      var tenDaysAgo = new Date(date.setDate(date.getDate() - 2));
      expect(is.any.inLastWeek(eightDaysAgo, tenDaysAgo)).to.be.false;
      expect(is.any.inLastWeek([eightDaysAgo, tenDaysAgo])).to.be.false;
    });
  });

  describe("is.inLastMonth", function () {
    it("should return true if date is within last month", function () {
      var date = new Date();
      var tenDaysAgo = new Date(date.setDate(date.getDate() - 10));
      expect(is.inLastMonth(tenDaysAgo)).to.be.true;
    });

    it("should return false if date is not within last month", function () {
      var date = new Date();
      var fiftyDaysAgo = new Date(date.setDate(date.getDate() - 50));
      expect(is.inLastMonth(fiftyDaysAgo)).to.be.false;
    });
  });

  describe("is.not.inLastMonth", function () {
    it("should return false if date is within last month", function () {
      var date = new Date();
      var tenDaysAgo = new Date(date.setDate(date.getDate() - 10));
      expect(is.not.inLastMonth(tenDaysAgo)).to.be.false;
    });

    it("should return true if date is not within last month", function () {
      var date = new Date();
      var fiftyDaysAgo = new Date(date.setDate(date.getDate() - 50));
      expect(is.not.inLastMonth(fiftyDaysAgo)).to.be.true;
    });
  });

  describe("is.all.inLastMonth", function () {
    it("should return true if all given dates are within last month", function () {
      var date = new Date();
      var tenDaysAgo = new Date(date.setDate(date.getDate() - 10));
      var twentyDaysAgo = new Date(date.setDate(date.getDate() - 10));
      expect(is.all.inLastMonth(tenDaysAgo, twentyDaysAgo)).to.be.true;
      expect(is.all.inLastMonth([tenDaysAgo, twentyDaysAgo])).to.be.true;
    });

    it("should return false if any given date is not within last month", function () {
      var date = new Date();
      var tenDaysAgo = new Date(date.setDate(date.getDate() - 10));
      var fiftyDaysAgo = new Date(date.setDate(date.getDate() - 40));
      expect(is.all.inLastMonth(tenDaysAgo, fiftyDaysAgo)).to.be.false;
      expect(is.all.inLastMonth([tenDaysAgo, fiftyDaysAgo])).to.be.false;
    });
  });

  describe("is.any.inLastMonth", function () {
    it("should return true if any given date is within last month", function () {
      var date = new Date();
      var tenDaysAgo = new Date(date.setDate(date.getDate() - 10));
      var fiftyDaysAgo = new Date(date.setDate(date.getDate() - 40));
      expect(is.any.inLastMonth(tenDaysAgo, fiftyDaysAgo)).to.be.true;
      expect(is.any.inLastMonth([tenDaysAgo, fiftyDaysAgo])).to.be.true;
    });

    it("should return false if all given dates are not within last month", function () {
      var date = new Date();
      var fortyDaysAgo = new Date(date.setDate(date.getDate() - 40));
      var fiftyDaysAgo = new Date(date.setDate(date.getDate() - 10));
      expect(is.any.inLastMonth(fortyDaysAgo, fiftyDaysAgo)).to.be.false;
      expect(is.any.inLastMonth([fortyDaysAgo, fiftyDaysAgo])).to.be.false;
    });
  });

  describe("is.inLastYear", function () {
    it("should return true if date is within last year", function () {
      var date = new Date();
      var threeMonthsAgo = new Date(date.setMonth(date.getMonth() - 3));
      expect(is.inLastYear(threeMonthsAgo)).to.be.true;
    });

    it("should return false if date is not within last year", function () {
      var date = new Date();
      var future = new Date(date.setDate(date.getDate() + 1));
      expect(is.inLastYear(future)).to.be.false;
    });
  });

  describe("is.not.inLastYear", function () {
    it("should return false if date is within last year", function () {
      var date = new Date();
      var sixMonthsAgo = new Date(date.setMonth(date.getMonth() - 6));
      expect(is.not.inLastYear(sixMonthsAgo)).to.be.false;
    });

    it("should return true if date is not within last year", function () {
      var date = new Date();
      var future = new Date(date.setDate(date.getDate() + 1));
      expect(is.not.inLastYear(future)).to.be.true;
    });
  });

  describe("is.all.inLastYear", function () {
    it("should return true if all given dates are within last year", function () {
      var date = new Date();
      var twoMonthsAgo = new Date(date.setMonth(date.getMonth() - 2));
      var sixMonthsAgo = new Date(date.setMonth(date.getMonth() - 4));
      expect(is.all.inLastYear(twoMonthsAgo, sixMonthsAgo)).to.be.true;
      expect(is.all.inLastYear([twoMonthsAgo, sixMonthsAgo])).to.be.true;
    });

    it("should return false if any given date is not within last year", function () {
      var date = new Date();
      var future = new Date(date.setDate(date.getDate() + 1));
      var twoWeeksAgo = new Date(date.setDate(date.getDate() - 14));
      expect(is.all.inLastYear(future, twoWeeksAgo)).to.be.false;
      expect(is.all.inLastYear([future, twoWeeksAgo])).to.be.false;
    });
  });

  describe("is.any.inLastYear", function () {
    it("should return true if any given date is within last year", function () {
      var date = new Date();
      var future = new Date(date.setDate(date.getDate() + 1));
      var yesterday = new Date(date.setDate(date.getDate() - 2));
      expect(is.any.inLastYear(future, yesterday)).to.be.true;
      expect(is.any.inLastYear([future, yesterday])).to.be.true;
    });

    it("should return false if all given dates are not within last year", function () {
      var date = new Date();
      var future = new Date(date.setDate(date.getDate() + 1));
      var alsoFuture = new Date(date.setDate(date.getDate() + 1));
      expect(is.any.inLastYear(future, alsoFuture)).to.be.false;
      expect(is.any.inLastYear([future, alsoFuture])).to.be.false;
    });
  });

  describe("is.inNextWeek", function () {
    it("should return true if date is within next week", function () {
      var date = new Date();
      var future = new Date(date.setDate(date.getDate() + 1));
      expect(is.inNextWeek(future)).to.be.true;
    });

    it("should return false if date is not within next week", function () {
      var date = new Date();
      var yesterday = new Date(date.setDate(date.getDate() - 1));
      expect(is.inNextWeek(yesterday)).to.be.false;
    });
  });

  describe("is.not.inNextWeek", function () {
    it("should return false if date is within next week", function () {
      var date = new Date();
      var future = new Date(date.setDate(date.getDate() + 1));
      expect(is.not.inNextWeek(future)).to.be.false;
    });

    it("should return true if date is not within next week", function () {
      var date = new Date();
      var yesterday = new Date(date.setDate(date.getDate() - 1));
      expect(is.not.inNextWeek(yesterday)).to.be.true;
    });
  });

  describe("is.all.inNextWeek", function () {
    it("should return true if all given dates are within next week", function () {
      var date = new Date();
      var twoDaysLater = new Date(date.setDate(date.getDate() + 2));
      var threeDaysLater = new Date(date.setDate(date.getDate() + 1));
      expect(is.all.inNextWeek(twoDaysLater, threeDaysLater)).to.be.true;
      expect(is.all.inNextWeek([twoDaysLater, threeDaysLater])).to.be.true;
    });

    it("should return false if any given date is not within next week", function () {
      var date = new Date();
      var future = new Date(date.setDate(date.getDate() + 1));
      var yesterday = new Date(date.setDate(date.getDate() - 2));
      expect(is.all.inNextWeek(future, yesterday)).to.be.false;
      expect(is.all.inNextWeek([future, yesterday])).to.be.false;
    });
  });

  describe("is.any.inNextWeek", function () {
    it("should return true if any given date is within next week", function () {
      var date = new Date();
      var future = new Date(date.setDate(date.getDate() + 1));
      var yesterday = new Date(date.setDate(date.getDate() - 2));
      expect(is.any.inNextWeek(future, yesterday)).to.be.true;
      expect(is.any.inNextWeek([future, yesterday])).to.be.true;
    });

    it("should return false if all given dates are not within next week", function () {
      var date = new Date();
      var twoDaysAgo = new Date(date.setDate(date.getDate() - 2));
      var threeDaysAgo = new Date(date.setDate(date.getDate() - 1));
      expect(is.any.inNextWeek(twoDaysAgo, threeDaysAgo)).to.be.false;
      expect(is.any.inNextWeek([twoDaysAgo, threeDaysAgo])).to.be.false;
    });
  });

  describe("is.inNextMonth", function () {
    it("should return true if date is within next month", function () {
      var date = new Date();
      var aWeekLater = new Date(date.setDate(date.getDate() + 7));
      expect(is.inNextMonth(aWeekLater)).to.be.true;
    });

    it("should return false if date is not within next month", function () {
      var date = new Date();
      var yesterday = new Date(date.setDate(date.getDate() - 1));
      expect(is.inNextMonth(yesterday)).to.be.false;
    });
  });

  describe("is.not.inNextMonth", function () {
    it("should return false if date is within next month", function () {
      var date = new Date();
      var twoWeeksLater = new Date(date.setDate(date.getDate() + 14));
      expect(is.not.inNextMonth(twoWeeksLater)).to.be.false;
    });

    it("should return true if date is not within next month", function () {
      var date = new Date();
      var yesterday = new Date(date.setDate(date.getDate() - 1));
      expect(is.not.inNextMonth(yesterday)).to.be.true;
    });
  });

  describe("is.all.inNextMonth", function () {
    it("should return true if all given dates are within next month", function () {
      var date = new Date();
      var twoWeeksLater = new Date(date.setDate(date.getDate() + 14));
      var threeWeeksLater = new Date(date.setDate(date.getDate() + 7));
      expect(is.all.inNextMonth(twoWeeksLater, threeWeeksLater)).to.be.true;
      expect(is.all.inNextMonth([twoWeeksLater, threeWeeksLater])).to.be.true;
    });

    it("should return false if any given date is not within next month", function () {
      var date = new Date();
      var yesterday = new Date(date.setDate(date.getDate() - 1));
      var twoWeeksLater = new Date(date.setDate(date.getDate() + 15));
      expect(is.all.inNextMonth(yesterday, twoWeeksLater)).to.be.false;
      expect(is.all.inNextMonth([yesterday, twoWeeksLater])).to.be.false;
    });
  });

  describe("is.any.inNextMonth", function () {
    it("should return true if any given date is within next month", function () {
      var date = new Date();
      var future = new Date(date.setDate(date.getDate() + 1));
      var yesterday = new Date(date.setDate(date.getDate() - 2));
      expect(is.any.inNextMonth(future, yesterday)).to.be.true;
      expect(is.any.inNextMonth([future, yesterday])).to.be.true;
    });

    it("should return false if all given dates are not within next month", function () {
      var date = new Date();
      var past = new Date(date.setDate(date.getDate() - 1));
      var alsoPast = new Date(date.setDate(date.getDate() - 1));
      expect(is.any.inNextMonth(past, alsoPast)).to.be.false;
      expect(is.any.inNextMonth([past, alsoPast])).to.be.false;
    });
  });

  describe("is.inNextYear", function () {
    it("should return true if date is within next year", function () {
      var date = new Date();
      var threeMonthsLater = new Date(date.setMonth(date.getMonth() + 3));
      expect(is.inNextYear(threeMonthsLater)).to.be.true;
    });

    it("should return false if date is not within next year", function () {
      var date = new Date();
      var past = new Date(date.setDate(date.getDate() - 1));
      expect(is.inNextYear(past)).to.be.false;
    });
  });

  describe("is.not.inNextYear", function () {
    it("should return false if date is within next year", function () {
      var date = new Date();
      var sixMonthsLater = new Date(date.setMonth(date.getMonth() + 6));
      expect(is.not.inNextYear(sixMonthsLater)).to.be.false;
    });

    it("should return true if date is not within next year", function () {
      var date = new Date();
      var past = new Date(date.setDate(date.getDate() - 1));
      expect(is.not.inNextYear(past)).to.be.true;
    });
  });

  describe("is.all.inNextYear", function () {
    it("should return true if all given dates are within next year", function () {
      var date = new Date();
      var twoMonthsLater = new Date(date.setMonth(date.getMonth() + 2));
      var sixMonthsLater = new Date(date.setMonth(date.getMonth() + 4));
      expect(is.all.inNextYear(twoMonthsLater, sixMonthsLater)).to.be.true;
      expect(is.all.inNextYear([twoMonthsLater, sixMonthsLater])).to.be.true;
    });

    it("should return false if any given date is not within next year", function () {
      var date = new Date();
      var future = new Date(date.setDate(date.getDate() + 1));
      var twoWeeksAgo = new Date(date.setDate(date.getDate() - 15));
      expect(is.all.inNextYear(future, twoWeeksAgo)).to.be.false;
      expect(is.all.inNextYear([future, twoWeeksAgo])).to.be.false;
    });
  });

  describe("is.any.inNextYear", function () {
    it("should return true if any given date is within next year", function () {
      var date = new Date();
      var future = new Date(date.setDate(date.getDate() + 1));
      var yesterday = new Date(date.setDate(date.getDate() - 2));
      expect(is.any.inNextYear(future, yesterday)).to.be.true;
      expect(is.any.inNextYear([future, yesterday])).to.be.true;
    });

    it("should return false if all given dates are not within next year", function () {
      var date = new Date();
      var past = new Date(date.setDate(date.getDate() - 100));
      var alsoPast = new Date(date.setDate(date.getDate() - 150));
      expect(is.any.inNextYear(past, alsoPast)).to.be.false;
      expect(is.any.inNextYear([past, alsoPast])).to.be.false;
    });
  });

  describe("is.quarterOfYear", function () {
    it("should return true if given quarter number is dates' quarter", function () {
      var time = 1421572235303;
      var date = new Date(time);
      expect(is.quarterOfYear(date, 1)).to.be.true;
    });

    it("should return true if given quarter number is not dates' quarter", function () {
      var time = 1421572235303;
      var date = new Date(time);
      expect(is.quarterOfYear(date, 2)).to.be.false;
    });
  });

  describe("is.not.quarterOfYear", function () {
    it("should return false if given quarter number is dates' quarter", function () {
      var time = 1421572235303;
      var date = new Date(time);
      expect(is.not.quarterOfYear(date, 1)).to.be.false;
    });

    it("should return true if given quarter number is not dates' quarter", function () {
      var time = 1421572235303;
      var date = new Date(time);
      expect(is.not.quarterOfYear(date, 2)).to.be.true;
    });
  });

  // describe("is.dayLightSavingTime", function () {
  //   it("should return false if given date is not in daylight saving time", function () {
  //     var time = 1421572235303;
  //     var date = new Date(time);
  //     expect(is.dayLightSavingTime(date)).to.be.false;
  //   });
  //
  //   it("should return false if given date is in daylight saving time", function () {
  //     var date = new Date(1421572235303);
  //     var sixMonthsAgo = new Date(date.setMonth(date.getMonth() - 6));
  //     expect(is.dayLightSavingTime(sixMonthsAgo)).to.be.true;
  //   });
  // });
  //
  // describe("is.all.dayLightSavingTime", function () {
  //   it("should return true if all given dates are in daylight saving time", function () {
  //     var time = 1421572235303;
  //     var date = new Date(1421572235303);
  //     var aDayAgo = new Date(date.setDate(date.getDate() - 1));
  //     expect(is.all.dayLightSavingTime(new Date(time), aDayAgo)).to.be.false;
  //     expect(is.all.dayLightSavingTime([new Date(time), aDayAgo])).to.be.false;
  //   });
  //
  //   it("should return false if any given date is not in daylight saving time", function () {
  //     var time = 1421572235303;
  //     var date = new Date(time);
  //     var sixMonthsAgo = new Date(date.setMonth(date.getMonth() - 6));
  //     expect(is.all.dayLightSavingTime(new Date(time), sixMonthsAgo)).to.be.false;
  //     expect(is.all.dayLightSavingTime([new Date(time), sixMonthsAgo])).to.be.false;
  //   });
  // });
  //
  // describe("is.any.dayLightSavingTime", function () {
  //   it("should return true if any given date is in daylight saving time", function () {
  //     var time = 1421572235303;
  //     var date = new Date(time);
  //     var sixMonthsAgo = new Date(date.setMonth(date.getMonth() - 6));
  //     expect(is.any.dayLightSavingTime(new Date(time), sixMonthsAgo)).to.be.true;
  //     expect(is.any.dayLightSavingTime([new Date(time), sixMonthsAgo])).to.be.true;
  //   });
  //
  //   it("should return false if all given dates are not in daylight saving time", function () {
  //     var time = 1421572235303;
  //     var date = new Date(time);
  //     var aDayAgo = new Date(date.setDate(date.getDate() - 1));
  //     expect(is.any.dayLightSavingTime(new Date(time), aDayAgo)).to.be.false;
  //   });
  // });
});
