import * as counterActions from './counter.actions';
import * as resultActions from './result.actions';

const unionActions = {...counterActions, ...resultActions};

export { unionActions };
