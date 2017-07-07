import ava from 'ava';
import _noop from 'lodash/noop';
import ParseCsv from '../../../src/assets/scripts/client/lib/ParseCsv/ParseCsv';
import { rawCsvMock } from './_mocks/parseCsvMocks';

ava('ParseCsv.parse() accepts a raw csv string', (t) => {
    t.notThrows(() => ParseCsv.parse(rawCsvMock));
});

ava('ParseCsv.parse() returns a resolved promise when passed valid data', (t) => {
    ParseCsv.parse(rawCsvMock).then((response) => {
        t.true(typeof response === 'object');
        t.true(Array.isArray(response.data));
        t.true(response.data.length === 4);
    });
});

ava('ParseCsv.parse() returns a rejected promise when passed invalid data', (t) => {
    ParseCsv.parse(false)
        .then(_noop)
        .catch((error) => {
            t.true(typeof error === 'object');
        });
});
