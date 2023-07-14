import { expect, test } from '@jest/globals';
import { getFormattedDate, getFormattedTime } from '../../src/utils/timeUtils';

test('getFormattedTime returns a formatted time string', () => {
    const date = new Date('2022-01-01T12:30:00');
    expect(getFormattedTime(date)).toEqual('12:30');
});

test('getFormattedTime adds a leading zero to single digit minutes and hours', () => {
    const date = new Date('2022-01-01T09:05:00');
    expect(getFormattedTime(date)).toEqual('09:05');
});

test('getFormattedDate returns a formatted date string', () => {
    const date = new Date('2022-01-01T12:30:00');
    expect(getFormattedDate(date)).toEqual('Saturday 6 January 2022');
});