module.exports = function toReadable(number) {
    if (!number) {
        return "zero";
    }
    const countables = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    const stringNumber = String(number);

    let units = number % 10;
    let dozens = number % 100;
    let hundreds = Math.trunc(number / 100);
    let result = "";
    let subResult = "";

    if (dozens >= 10 && dozens <= 20) {
        subResult = countables[dozens];
    } else if (units === 0 && hundreds === 0) {
        subResult = countables[dozens - units];
    } else {
        subResult = countables[dozens - units] + " " + countables[units];
    }

    if (stringNumber.length === 1) {
        result = countables[units];
    }

    if (stringNumber.length === 2) {
        return subResult;
    }

    if (stringNumber.length === 3) {
        if (stringNumber[1] === "0" && stringNumber[2] === "0") {
            result = countables[hundreds] + " hundred";
        } else if (stringNumber[1] === "0" && stringNumber[2] !== "0") {
            result = countables[hundreds] + " hundred " + countables[units];
        } else if (stringNumber[1] !== "0" && stringNumber[2] === "0") {
            result = countables[hundreds] + " hundred " + countables[dozens];
        } else {
            result = countables[hundreds] + " hundred " + subResult;
        }
    }

    return result;
};
