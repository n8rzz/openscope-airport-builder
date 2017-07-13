import ava from 'ava';
import { buildProcedureFormType } from '../../../../src/assets/script/client/domain/procedure/types/buildProcedureFormType';
import { FixListTypeFixture } from '../../fix/_mocks/fixMocks';
import { RunwayPairListTypeFixture } from '../../runway/_mocks/runwayMocks';

ava('.buildProcedureFormType()', (t) => {
    try {
        buildProcedureFormType({}, RunwayPairListTypeFixture, FixListTypeFixture)
    } catch (e) {
        console.log(e);
    }
    t.notThrows(() => buildProcedureFormType({}, RunwayPairListTypeFixture, FixListTypeFixture));
});
