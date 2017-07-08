import ava from 'ava';
import sinon from 'sinon';
import {
    REMOVE_FIX_START,
    REMOVE_FIX_SUCCESS,
    REMOVE_FIX_ERROR,
    removeFix
} from '../../../../src/assets/script/client/domain/fix/actions/FixActions';

const getStateStub = () => ({
    fixList: {
        payload: [
            {
                name: 'GRNPA',
                position: {
                    latitude: 'N36.26467677181758',
                    longitude: 'W114.51481791576114'
                }
            }
        ]
    }
});

ava('.removeFix() dispatches a start action', async (t) => {
    const dispatchSpy = sinon.spy();

    await removeFix('GRNPA')(dispatchSpy, getStateStub);

    t.true(dispatchSpy.getCall(0).args[0].type === REMOVE_FIX_START);
});

ava('.removeFix() dispatches an error action when passed invalid data', async (t) => {
    const dispatchSpy = sinon.spy();

    await removeFix('threeve')(dispatchSpy, getStateStub);

    t.true(dispatchSpy.callCount === 2);
    t.true(dispatchSpy.getCall(1).args[0].type === REMOVE_FIX_ERROR);
});

ava('.removeFix() dispatches a success action when passed valid data', async (t) => {
    const dispatchSpy = sinon.spy();

    await removeFix('GRNPA')(dispatchSpy, getStateStub);

    t.true(dispatchSpy.callCount === 2);
    t.true(dispatchSpy.getCall(1).args[0].type === REMOVE_FIX_SUCCESS);
});
