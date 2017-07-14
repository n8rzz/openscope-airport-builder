import ava from 'ava';
import {
    MinMaxValueType,
    SingleNumberValueType,
    TwoElementStringOrNumberTypeList,
    ThreeElementStringOrNumberTypeList
} from '../../../src/assets/script/client/domain/common/BaseTypes';
import {
    minMaxValueTypeMock,
    SingleNumberValueTypeMock
} from './_mocks/baseTypeMocks';

ava('TwoElementStringOrNumberTypeList accepts only a two element list', (t) => {
    t.throws(() => TwoElementStringOrNumberTypeList(['one']));
    t.throws(() => TwoElementStringOrNumberTypeList(['one', 'two', 'three']));

    t.notThrows(() => TwoElementStringOrNumberTypeList(['one', 'two']));
    t.notThrows(() => TwoElementStringOrNumberTypeList([1, 'two']));
    t.notThrows(() => TwoElementStringOrNumberTypeList(['one', 2]));
    t.notThrows(() => TwoElementStringOrNumberTypeList([1, 2]));
});

ava('ThreeElementStringOrNumberTypeList accepts only a two element list', (t) => {
    t.throws(() => ThreeElementStringOrNumberTypeList(['one', 'two']));
    t.throws(() => ThreeElementStringOrNumberTypeList(['one', 'two', 'three', 'four']));

    t.notThrows(() => ThreeElementStringOrNumberTypeList(['one', 'two', 'three']));
    t.notThrows(() => ThreeElementStringOrNumberTypeList([1, 'two', 3]));
    t.notThrows(() => ThreeElementStringOrNumberTypeList(['one', 2, 'three']));
    t.notThrows(() => ThreeElementStringOrNumberTypeList([1, 2, 3]));
});

ava('MinMaxValueType', (t) => {
    t.notThrows(() => MinMaxValueType(minMaxValueTypeMock));
});

ava('SingleNumberValueType', (t) => {
    t.notThrows(() => SingleNumberValueType(SingleNumberValueTypeMock));
});
