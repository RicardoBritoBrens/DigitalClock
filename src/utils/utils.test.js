// import { utils } from '.utils/';

const utils = require('../utils/utils.js');

describe('Testing function getTwelveHourFormattedTime', () => {

    describe("If any parameter is null should return error (Invalid parameter error, all parameters should have different value than null)", () => {
        test('Passing null, null, null', () => {
            expect(() => {
                utils.getTwelveHourFormattedTime(null, null, null);
            }).toThrow('Invalid parameter exception, all parameters should have different value than null');
        });

        test('Passing null, null, null', () => {
            expect(() => {
                utils.getTwelveHourFormattedTime('null', 'null', 'null');
            }).toThrow('Invalid parameter exception, all parameters should have different value than null');
        });

        test('Passing null, null, null', () => {
            expect(() => {
                utils.getTwelveHourFormattedTime(null, null, 'null');
            }).toThrow('Invalid parameter exception, all parameters should have different value than null');
        });

        test('Passing null, null, null', () => {
            expect(() => {
                utils.getTwelveHourFormattedTime(null, 'null', null);
            }).toThrow('Invalid parameter exception, all parameters should have different value than null');
        });

        test('Passing null, null, null', () => {
            expect(() => {
                utils.getTwelveHourFormattedTime('null', null, null);
            }).toThrow('Invalid parameter exception, all parameters should have different value than null');
        });

        test('Passing null, null, null', () => {
            expect(() => {
                utils.getTwelveHourFormattedTime(null, 'null', 'null');
            }).toThrow('Invalid parameter exception, all parameters should have different value than null');
        });

        test('Passing null, null, null', () => {
            expect(() => {
                utils.getTwelveHourFormattedTime('null', 'null', null);
            }).toThrow('Invalid parameter exception, all parameters should have different value than null');
        });
    })

    describe("If any parameter is undefined should return error (Invalid parameter error, all parameters should have different value than null)", () => {
        test('Passing null, null, null', () => {
            expect(() => {
                utils.getTwelveHourFormattedTime(undefined, undefined, undefined);
            }).toThrow('Invalid parameter exception, all parameters should have different value than null');
        });

        test('Passing null, null, null', () => {
            expect(() => {
                utils.getTwelveHourFormattedTime('undefined', 'undefined', 'undefined');
            }).toThrow('Invalid parameter exception, all parameters should have different value than null');
        });

        test('Passing null, null, null', () => {
            expect(() => {
                utils.getTwelveHourFormattedTime(undefined, undefined, 'undefined');
            }).toThrow('Invalid parameter exception, all parameters should have different value than null');
        });

        test('Passing null, null, null', () => {
            expect(() => {
                utils.getTwelveHourFormattedTime(undefined, 'undefined', undefined);
            }).toThrow('Invalid parameter exception, all parameters should have different value than null');
        });

        test('Passing null, null, null', () => {
            expect(() => {
                utils.getTwelveHourFormattedTime('undefined', undefined, undefined);
            }).toThrow('Invalid parameter exception, all parameters should have different value than null');
        });

        test('Passing null, null, null', () => {
            expect(() => {
                utils.getTwelveHourFormattedTime(undefined, 'undefined', 'undefined');
            }).toThrow('Invalid parameter exception, all parameters should have different value than null');
        });

        test('Passing null, null, null', () => {
            expect(() => {
                utils.getTwelveHourFormattedTime('undefined', 'undefined', undefined);
            }).toThrow('Invalid parameter exception, all parameters should have different value than null');
        });
    })

});

describe('Testing function getTwentyFourHourFormattedTime', () => {

});

describe('Testing function getAmOrPm', () => {

    describe("Testing common values null, undefine and empty spaces", () => {

        test('Return AM or PM characters base on 24 hours format - passing null parameter-should must return empty', () => {
            const result = utils.getAmOrPm(null);
            expect(result).toBe("");
        });

        test('Return AM or PM characters base on 24 hours format - passing null parameter as string - should must return empty', () => {
            const result = utils.getAmOrPm('null');
            expect(result).toBe("");
        });

        test('Return AM or PM characters base on 24 hours format - passing undefine - should must return empty', () => {
            const result = utils.getAmOrPm(undefined);
            expect(result).toBe("");
        });

        test('Return AM or PM characters base on 24 hours format - passing undefine parameter as string - should must return empty', () => {
            const result = utils.getAmOrPm('undefined');
            expect(result).toBe("");
        });

        test('Return AM or PM characters base on 24 hours format - passing empty - between single quotes - parameter as string - should must return empty', () => {
            const result = utils.getAmOrPm('');
            expect(result).toBe("");
        });

        test('Return AM or PM characters base on 24 hours format - passing space - between single quotes - character parameter as string - should must return empty', () => {
            const result = utils.getAmOrPm(' ');
            expect(result).toBe("");
        });

        test('Return AM or PM characters base on 24 hours format - passing space - between single quotes - character parameter as string - should must return empty', () => {
            const result = utils.getAmOrPm('     ');
            expect(result).toBe("");
        });

    });


    describe("Testing that should return only AM", () => {
        test('Return AM or PM characters base on 24 hours format - passing number 1 as parameter - should must return AM characters', () => {
            const result = utils.getAmOrPm(1);
            expect(result).toBe("AM");
        });

        test('Return AM or PM characters base on 24 hours format - passing number 2 as parameter - should must return AM characters', () => {
            const result = utils.getAmOrPm(2);
            expect(result).toBe("AM");
        });

        test('Return AM or PM characters base on 24 hours format - passing number 3 as parameter - should must return AM characters', () => {
            const result = utils.getAmOrPm(3);
            expect(result).toBe("AM");
        });

        test('Return AM or PM characters base on 24 hours format - passing number 4 as parameter - should must return AM characters', () => {
            const result = utils.getAmOrPm(4);
            expect(result).toBe("AM");
        });

        test('Return AM or PM characters base on 24 hours format - passing number 5 as parameter - should must return AM characters', () => {
            const result = utils.getAmOrPm(5);
            expect(result).toBe("AM");
        });

        test('Return AM or PM characters base on 24 hours format - passing number 6 as parameter - should must return AM characters', () => {
            const result = utils.getAmOrPm(6);
            expect(result).toBe("AM");
        });

        test('Return AM or PM characters base on 24 hours format - passing number 7 as parameter - should must return AM characters', () => {
            const result = utils.getAmOrPm(7);
            expect(result).toBe("AM");
        });

        test('Return AM or PM characters base on 24 hours format - passing number 8 as parameter - should must return AM characters', () => {
            const result = utils.getAmOrPm(8);
            expect(result).toBe("AM");
        });

        test('Return AM or PM characters base on 24 hours format - passing number 9 as parameter - should must return AM characters', () => {
            const result = utils.getAmOrPm(9);
            expect(result).toBe("AM");
        });

        test('Return AM or PM characters base on 24 hours format - passing number 10 as parameter - should must return AM characters', () => {
            const result = utils.getAmOrPm(10);
            expect(result).toBe("AM");
        });

        test('Return AM or PM characters base on 24 hours format - passing number 11 as parameter - should must return AM characters', () => {
            const result = utils.getAmOrPm(11);
            expect(result).toBe("AM");
        });

        test('Return AM or PM characters base on 24 hours format - passing number 12 as parameter - should must return AM characters', () => {
            const result = utils.getAmOrPm(12);
            expect(result).toBe("PM");
        });
    });

    // going for the gold
    describe("Testing that should return only PM", () => {
        let pmResult = "PM";

        test('Return AM or PM characters base on 24 hours format - passing number 1 as parameter - should must return AM characters', () => {
            const result = utils.getAmOrPm(13);
            expect(result).toBe(pmResult);
        });

        test('Return AM or PM characters base on 24 hours format - passing number 2 as parameter - should must return AM characters', () => {
            const result = utils.getAmOrPm(14);
            expect(result).toBe(pmResult);
        });

        test('Return AM or PM characters base on 24 hours format - passing number 3 as parameter - should must return AM characters', () => {
            const result = utils.getAmOrPm(15);
            expect(result).toBe(pmResult);
        });

        test('Return AM or PM characters base on 24 hours format - passing number 4 as parameter - should must return AM characters', () => {
            const result = utils.getAmOrPm(16);
            expect(result).toBe(pmResult);
        });

        test('Return AM or PM characters base on 24 hours format - passing number 5 as parameter - should must return AM characters', () => {
            const result = utils.getAmOrPm(17);
            expect(result).toBe(pmResult);
        });

        test('Return AM or PM characters base on 24 hours format - passing number 6 as parameter - should must return AM characters', () => {
            const result = utils.getAmOrPm(18);
            expect(result).toBe(pmResult);
        });

        test('Return AM or PM characters base on 24 hours format - passing number 7 as parameter - should must return AM characters', () => {
            const result = utils.getAmOrPm(19);
            expect(result).toBe(pmResult);
        });

        test('Return AM or PM characters base on 24 hours format - passing number 8 as parameter - should must return AM characters', () => {
            const result = utils.getAmOrPm(20);
            expect(result).toBe(pmResult);
        });

        test('Return AM or PM characters base on 24 hours format - passing number 9 as parameter - should must return AM characters', () => {
            const result = utils.getAmOrPm(21);
            expect(result).toBe(pmResult);
        });

        test('Return AM or PM characters base on 24 hours format - passing number 10 as parameter - should must return AM characters', () => {
            const result = utils.getAmOrPm(22);
            expect(result).toBe(pmResult);
        });

        test('Return AM or PM characters base on 24 hours format - passing number 10 as parameter - should must return AM characters', () => {
            const result = utils.getAmOrPm(23);
            expect(result).toBe(pmResult);
        });

    });
})

describe('Testing function isEmpty', () => {

    test("Passing null value - must return error", () => {
        expect(() => {
            utils.isEmpty(null);
        }).toThrow('Invalid parameter error, input parameter cannot be null or undefined');
    });

    test("Passing null value - must return error", () => {
        expect(() => {
            utils.isEmpty('null');
        }).toThrow('Invalid parameter error, input parameter cannot be null or undefined');
    });

    test("Passing undefined value - must return error", () => {
        expect(() => {
            utils.isEmpty(undefined);
        }).toThrow('Invalid parameter error, input parameter cannot be null or undefined');
    });

    test("Passing undefined value - must return error", () => {
        expect(() => {
            utils.isEmpty('undefined');
        }).toThrow('Invalid parameter error, input parameter cannot be null or undefined');
    });

    test("Passing empty value - must true", () => {
        const result = utils.isEmpty('');
        expect(result).toBe(true);
    });

    test("Passing empty value - must false", () => {
        const result = utils.isEmpty('Hola');
        expect(result).toBe(false);
    });
});

describe('Testing function isNullOrUndefined', () => {
    test("Passing null should return true", () => {
        const result = utils.isNullOrUndefined(null);
        expect(result).toBe(true);
    });

    test("Passing null should return true", () => {
        const result = utils.isNullOrUndefined('null');
        expect(result).toBe(true);
    });

    test("Passing undefined should return true", () => {
        const result = utils.isNullOrUndefined(undefined);
        expect(result).toBe(true);
    });

    test("Passing undefined should return true", () => {
        const result = utils.isNullOrUndefined('undefined');
        expect(result).toBe(true);
    });

    test("Passing undefined should return true", () => {
        const result = utils.isNullOrUndefined(1);
        expect(result).toBe(false);
    });

    test("Passing undefined should return true", () => {
        const result = utils.isNullOrUndefined("Hola");
        expect(result).toBe(false);
    });
});

describe('Testing function addZeroAtTheBegin', () => {
    test("Passing null value - must return error", () => {
        expect(() => {
            utils.addZeroAtTheBegin(null);
        }).toThrow('Invalid parameter error, input parameter cannot be null or undefined');
    });

    test("Passing null value - must return error", () => {
        expect(() => {
            utils.addZeroAtTheBegin('null');
        }).toThrow('Invalid parameter error, input parameter cannot be null or undefined');
    });

    test("Passing undefined value - must return error", () => {
        expect(() => {
            utils.addZeroAtTheBegin(undefined);
        }).toThrow('Invalid parameter error, input parameter cannot be null or undefined');
    });

    test("Passing undefined value - must return error", () => {
        expect(() => {
            utils.addZeroAtTheBegin('undefined');
        }).toThrow('Invalid parameter error, input parameter cannot be null or undefined');
    });

    test("Passing empty value - must true", () => {
        const result = utils.addZeroAtTheBegin(1);
        expect(result).toBe('01');
    });

    test("Passing empty value - must true", () => {
        const result = utils.addZeroAtTheBegin(9);
        expect(result).toBe('09');
    });
});



