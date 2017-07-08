import ava from 'ava';
import sinon from 'sinon';
import {
    SAVE_BASE_AIRPORT_START,
    SAVE_BASE_AIRPORT_SUCCESS,
    SAVE_BASE_AIRPORT_ERROR,
    saveBaseAirport
} from '../../../../src/assets/script/client/domain/baseAirport/actions/BaseAirportActions';

ava('.saveBaseAirport() dispatches a start action', async (t) => {
    const dispatchSpy = sinon.spy();

    await saveBaseAirport({})(dispatchSpy);

    t.true(dispatchSpy.getCall(0).args[0].type === SAVE_BASE_AIRPORT_START);
});

ava('.saveBaseAirport() dispatches an error action when passed invalid data', async (t) => {
    const dispatchSpy = sinon.spy();

    await saveBaseAirport()(dispatchSpy);

    t.true(dispatchSpy.callCount === 2);
    t.true(dispatchSpy.getCall(1).args[0].type === SAVE_BASE_AIRPORT_ERROR);
});

ava.todo('.saveBaseAirport() calls BaseAirportRepository.saveBaseAirport()');

ava('.saveBaseAirport() dispatches a success action when passed valid data', async (t) => {
    const dispatchSpy = sinon.spy();

    await saveBaseAirport({})(dispatchSpy);

    t.true(dispatchSpy.callCount === 2);
    t.true(dispatchSpy.getCall(1).args[0].type === SAVE_BASE_AIRPORT_SUCCESS);
});
