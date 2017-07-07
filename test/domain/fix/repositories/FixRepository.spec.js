import ava from 'ava';
import sinon from 'sinon';
import _noop from 'lodash/noop';
import FixRepository from '../../../../src/assets/scripts/client/domain/fix/repositories/FixRepository';
import { fixImportCsvMock } from '../_mocks/fixMocks';

ava('FixRepository.parseCsv() accepts a raw csv string', (t) => {
    t.notThrows(() => FixRepository.parseCsv(fixImportCsvMock));
});

ava('FixRepository.parseCsv() returns a resolved promise when passed valid data', (t) => {
    FixRepository.parseCsv(fixImportCsvMock).then((response) => {
        t.true(typeof response === 'object');
        t.true(Array.isArray(response.data));
        t.true(response.data.length === 4);
    });
});

ava('FixRepository.parseCsv() returns a rejected promise when passed invalid data', (t) => {
    FixRepository.parseCsv(false)
        .then(_noop)
        .catch((error) => {
            t.true(typeof error === 'object');
        });
});
