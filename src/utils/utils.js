
function getTwelveHourFormattedTime(hours, minutes, seconds) {

    if (
        isNullOrUndefined(hours) ||
        isEmpty(hours) ||
        isNaN(hours)
    ) {
        throw new Error('Invalid parameter exception, all parameters should have different value than null');
    }

    if (typeof hours !== 'number') {
        if (!hours.trim()) {
            throw new Error('Invalid parameter exception, all parameters should have different value than null');
        }
    }


    if (
        isNullOrUndefined(minutes) ||
        isEmpty(minutes) ||
        isNaN(minutes)
    ) {
        throw new Error('Invalid parameter exception, all parameters should have different value than null');
    }

    if (typeof minutes !== 'number') {
        if (!minutes.trim()) {
            throw new Error('Invalid parameter exception, all parameters should have different value than null');
        }
    }


    if (
        isNullOrUndefined(seconds) ||
        isEmpty(seconds) ||
        isNaN(seconds)
    ) {
        throw new Error('Invalid parameter exception, all parameters should have different value than null');
    }

    if (typeof seconds !== 'number') {
        if (!seconds.trim()) {
            throw new Error('Invalid parameter exception, all parameters should have different value than null');
        }
    }

    const MIN_NUMBER_TO_ADD_ZERO = 9;
    const DEFAULT_TWELVE_HOURS_TO_SUBTRACT = 12;
    let amPm = getAmOrPm(hours);

    if (hours > DEFAULT_TWELVE_HOURS_TO_SUBTRACT) {
        hours = hours - DEFAULT_TWELVE_HOURS_TO_SUBTRACT;

        if (hours <= MIN_NUMBER_TO_ADD_ZERO) {
            hours = addZeroAtTheBegin(hours);
        }
    }

    if (seconds <= MIN_NUMBER_TO_ADD_ZERO) {
        seconds = addZeroAtTheBegin(seconds);
    }

    if (minutes <= MIN_NUMBER_TO_ADD_ZERO) {
        seconds = addZeroAtTheBegin(minutes);
    }

    return `${hours} : ${minutes} : ${seconds} ${amPm}`;
};

function getTwentyFourHourFormattedTime() {

    const UNFORMATTED_TIME_START_INDEX = 0;
    const UNFORMATTED_TIME_END_INDEX = 8;

    const HOURS_START_INDEX = 0;
    const HOURS_END_INDEX = 2;

    const MINUTES_START_INDEX = 3;
    const MINUTES_END_INDEX = 5;

    const SECONDS_START_INDEX = 6;
    const SECONDS_END_INDEX = 8;

    let time = new Date();

    let unformattedTime = time.toTimeString().substring(UNFORMATTED_TIME_START_INDEX, UNFORMATTED_TIME_END_INDEX);

    let hours = unformattedTime.substring(HOURS_START_INDEX, HOURS_END_INDEX);
    let minutes = unformattedTime.substring(MINUTES_START_INDEX, MINUTES_END_INDEX);
    let seconds = unformattedTime.substring(SECONDS_START_INDEX, SECONDS_END_INDEX);

    return `${hours} : ${minutes} : ${seconds}`;
};

function getAmOrPm(hours) {

    debugger;

    if(isNaN(hours))
    {
        return "";
    }

    if (
        isNullOrUndefined(hours) ||
        isEmpty(hours)
    ) {
        return "";
    }

    if (typeof hours !== 'number') {
        if (!hours.trim()) {
            return "";
        }
    }

    if (hours >= 12) {
        return "PM";
    }
    else {
        return "AM";
    }
};

function isEmpty(input) {
    if (
        isNullOrUndefined(input)
    ) {
        throw new Error('Invalid parameter error, input parameter cannot be null or undefined');
    }

    return (input === '') ? true : false;
}

function isNullOrUndefined(input) {
    return input === null ||
        input === 'null' ||
        input === undefined ||
        input === 'undefined'
        ?
        true
        :
        false
}

function addZeroAtTheBegin(input) {
    if(isNullOrUndefined(input))
    {
        throw new Error('Invalid parameter error, input parameter cannot be null or undefined');
    }
    return `0${input}`;
}

export {
    getTwelveHourFormattedTime,
    getTwentyFourHourFormattedTime,
    getAmOrPm,
    isEmpty,
    isNullOrUndefined,
    addZeroAtTheBegin
};

