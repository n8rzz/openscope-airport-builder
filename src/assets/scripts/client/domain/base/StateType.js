import t from 'tcomb';

export const BaseStateType = t.struct({
    isLoading: t.Boolean,
    error: t.maybe(t.Object)
}, 'BaseStateType');
