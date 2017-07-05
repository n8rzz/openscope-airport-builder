import t from 'tcomb';
import {
    Position2dCreationType,
    Position3dCreationType,
    PositionValueType
} from '../base/PositionType';
import { AirspaceListType } from './AirspaceType';
import { FixDict } from './FixType';
import {
    SidProcedureRouteDict,
    StarProcedureRouteDict
} from './ProcedureRouteType';
import { RadioType } from './RadioType';
import { RunwayListType } from './RunwayType';
import { SpawnPatternListType } from './SpawnPatternType';
import { WindType } from './WindType';


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
