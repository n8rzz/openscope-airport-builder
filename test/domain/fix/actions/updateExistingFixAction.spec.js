import ava from 'ava';
import sinon from 'sinon';
import {
    UPDATE_EXISTING_FIX_START,
    UPDATE_EXISTING_FIX_SUCCESS,
    UPDATE_EXISTING_FIX_ERROR,
    updateExistingFix
} from '../../../../src/assets/script/client/domain/fix/actions/FixActions';
import { FixUpdateTypeFixture } from '../_mocks/fixMocks';

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

ava('.updateExistingFix() dispatches a start action', async (t) => {
    const dispatchSpy = sinon.spy();

    await updateExistingFix({})(dispatchSpy, getStateStub);

    t.true(dispatchSpy.getCall(0).args[0].type === UPDATE_EXISTING_FIX_START);
});

ava('.updateExistingFix() dispatches an error action when passed invalid data', async (t) => {
    const dispatchSpy = sinon.spy();

    await updateExistingFix(false)(dispatchSpy, getStateStub);

    t.true(dispatchSpy.callCount === 2);
    t.true(dispatchSpy.getCall(1).args[0].type === UPDATE_EXISTING_FIX_ERROR);
});

ava('.updateExistingFix() dispatches an error action when #fixList is empty', async (t) => {
    const getEmptyStateStub = () => ({
        fixList: {
            payload: []
        }
    });
    const dispatchSpy = sinon.spy();

    await updateExistingFix(FixUpdateTypeFixture)(dispatchSpy, getEmptyStateStub);

    t.true(dispatchSpy.callCount === 2);
    t.true(dispatchSpy.getCall(1).args[0].type === UPDATE_EXISTING_FIX_ERROR);
});

ava('.updateExistingFix() dispatches a success action when passed valid data', async (t) => {
    const dispatchSpy = sinon.spy();

    await updateExistingFix(FixUpdateTypeFixture)(dispatchSpy, getStateStub);

    t.true(dispatchSpy.callCount === 2);
    t.true(dispatchSpy.getCall(1).args[0].type === UPDATE_EXISTING_FIX_SUCCESS);
});
