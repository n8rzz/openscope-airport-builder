import ava from 'ava';
import sinon from 'sinon';
import {
    ADD_RUNWAY_TO_LIST_START,
    ADD_RUNWAY_TO_LIST_SUCCESS,
    ADD_RUNWAY_TO_LIST_ERROR,
    addRunwayToList
} from '../../../../src/assets/script/client/domain/runway/actions/RunwayActions';
import { RunwayUpdateTypeFixture } from '../_mocks/runwayMocks';

const getStateStub = () => ({
    runwayList: {
        payload: [
            {
                name: '07R',
                position: {
                    latitude: 'N36d4m34.82',
                    longitude: 'W115d10m16.98',
                    elevation: '2179ft'
                },
                ils: false,
                relatedTo: '25L'
            }
        ]
    }
});

ava('.addRunwayToList() dispatches a start action', async (t) => {
    const dispatchSpy = sinon.spy();

    await addRunwayToList(RunwayUpdateTypeFixture)(dispatchSpy, getStateStub);

    t.true(dispatchSpy.getCall(0).args[0].type === ADD_RUNWAY_TO_LIST_START);
});

ava('.addRunwayToList() dispatches an error action when passed invalid data', async (t) => {
    const dispatchSpy = sinon.spy();

    await addRunwayToList(false)(dispatchSpy, getStateStub);

    t.true(dispatchSpy.callCount === 2);
    t.true(dispatchSpy.getCall(1).args[0].type === ADD_RUNWAY_TO_LIST_ERROR);
});

ava('.addRunwayToList() dispatches a success action when passed valid data', async (t) => {
    const dispatchSpy = sinon.spy();

    await addRunwayToList(RunwayUpdateTypeFixture)(dispatchSpy, getStateStub);

    t.true(dispatchSpy.callCount === 2);
    t.true(dispatchSpy.getCall(1).args[0].type === ADD_RUNWAY_TO_LIST_SUCCESS);
});
