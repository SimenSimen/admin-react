import * as dateFormat from 'dateformat'

export const TODAY = 'TODAY'
export const THIS_WEEK = 'THIS_WEEK'
export const THIS_MONTH = 'THIS_MONTH'
export const SEVEN_DAYS = 'SEVEN_DAYS'
export const THIRTY_DAYS = 'THIRTY_DAYS'
export const EIGHT_HOURS = 'EIGHT_HOURS'

export const DATE_TIME = 'yyyy-mm-dd HH:MM:ss'
export const DATE = 'yyyy-mm-dd'

/**
 * get date range
 */
export function datetimeRange(type, format) {
    let start, end
    switch (type) {
        case THIS_WEEK:
            break
        case THIS_MONTH:
            break
        case SEVEN_DAYS:
            break
        case THIRTY_DAYS:
            break
        case EIGHT_HOURS:
            break

        case TODAY:
        default:
            const now = new Date()

            now.setHours(0, 0, 0, 0)
            start = dateFormat(now, format)

            now.setHours(23, 59, 59, 999)
            end = dateFormat(now, format)
            break
    }

    return {
        start,
        end,
    }
}

export function format(dateString, format) {
    const date = new Date(dateString)

    return dateFormat(dateString, format)
}
