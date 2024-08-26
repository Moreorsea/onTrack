import { NAV_ITEMS, HOURS_IN_DAY, MIDNIGHT_HOUR } from './constants'

export function validateSelectOptions(options) {
  return options.every(isSelectOptionValid)
}

export function validateTimelineItems(timeLineItems) {
  return timeLineItems.every(isTimelineItemValid)
}

export function isTimelineItemValid({ hour }) {
  return isNumber(hour) && isBetween(hour, MIDNIGHT_HOUR, HOURS_IN_DAY - 1)
}

export function isNull(value) {
  return value === null
}

export function isUndefined(value) {
  return value === undefined
}

export function isNumber(value) {
  return typeof value === 'number'
}

export function isString(value) {
  return typeof value === 'string'
}

export function isUndefinedOrNull(value) {
  return isNull(value) || isUndefined(value)
}

export function isNumberOrNull(value) {
  return isNumber(value) || isNull(value)
}

export function isActivityValid(activity) {
  return Object.keys(activity).length
}

export function validateActivities(activities) {
  return activities.every(isActivityValid)
}

export function isSelectValueValid(select) {
  return isNumberOrNull(select) || isNotEmptyString(select)
}

function isSelectOptionValid({ id, name }) {
  return isString(id) && isString(name)
}

function isBetween(value, start, end) {
  return value >= start && value <= end
}

function isNotEmptyString(str) {
  return isString(str) && str.length > 0
}
