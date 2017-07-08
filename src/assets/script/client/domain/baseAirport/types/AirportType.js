import t from 'tcomb';
import {
    Position2dCreationType,
    Position3dCreationType,
    PositionValueType
} from '../../base/PositionType';
import { BaseStateType } from '../../base/StateType';
import { AirspaceListType } from '../../airport/AirspaceType';
import { FixDict } from '../../fix/types/FixType';
import {
    SidProcedureRouteDict,
    StarProcedureRouteDict
} from '../../airport/ProcedureRouteType';
import { RadioType } from '../../airport/RadioType';
import { RunwayListType } from '../../airport/RunwayType';
import { SpawnPatternListType } from '../../airport/SpawnPatternType';
import { WindType } from '../../airport/WindType';

export const BaseAirportCreationType = t.struct({
    icao: t.String,
    iata: t.String,
    has_terrain: t.Boolean,
    radio: RadioType,
    position: Position3dCreationType,
    magnetic_north: t.Number,
    ctr_radius: t.Number,
    ctr_ceiling: t.Number,
    initial_alt: t.Number,
    rr_radius_nm: t.Number,
    rr_center: Position2dCreationType,
    wind: WindType
}, 'BaseAirportType');

// TODO: there will need to be a translator so we can go between `BaseAirportCreationType` and `BaseAirportType`
export const BaseAirportType = t.struct({
    radio: RadioType,
    icao: t.String,
    iata: t.String,
    magnetic_north: t.Number,
    ctr_radius: t.Number,
    ctr_ceiling: t.Number,
    initial_alt: t.Number,
    position: t.list(PositionValueType),
    rr_radius_nm: t.Number,
    rr_center: t.list(PositionValueType),
    has_terrain: t.Boolean,
    wind: WindType
}, 'BaseAirportType');

export const AirportType = BaseAirportType.extend({
    airspace: AirspaceListType,
    fixes: FixDict,
    runways: RunwayListType,
    sids: SidProcedureRouteDict,
    stars: StarProcedureRouteDict,
    spawnPatterns: SpawnPatternListType
    // TODO: to include later
    // maps:
}, 'AirportType');

export const BaseAirportStateType = BaseStateType.extend({
    payload: t.maybe(BaseAirportCreationType)
}, 'BaseAirportStateType');
