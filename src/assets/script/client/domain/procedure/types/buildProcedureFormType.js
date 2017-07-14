import _get from 'lodash/get';
import { FixListType } from '../../fix/types/FixType';
import { RunwayPairListType } from '../../runway/types/RunwayType';
import {
    buildSidProcedureFormType,
    buildStarProcedureFormType,
    buildInitialProcedureFormType,
    RouteTypeEnum
} from '../types/ProcedureType';

export function buildProcedureFormType(formValues, runwayList, fixList) {
    const procedureType = _get(formValues, 'type', null);
    const fixListEnum = FixListType.buildFixListEnum(fixList);
    const runwayListEnum = RunwayPairListType.buildRunwayNamesEnum(runwayList);
    const suffixType = RunwayPairListType.buildSuffixFormType(runwayList);
    let procedureFormType;

    switch (procedureType) {
        case RouteTypeEnum.meta.map.SID:
            procedureFormType = buildSidProcedureFormType;

            break;
        case RouteTypeEnum.meta.map.STAR:
            procedureFormType = buildStarProcedureFormType;

            break;
        default:
            procedureFormType = buildInitialProcedureFormType;

            break;
    }

    return procedureFormType(formValues, runwayListEnum, fixListEnum, suffixType);
}
