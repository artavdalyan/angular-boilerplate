import {
  Actions,
  NgxsFeatureModule,
  NgxsModule,
  State,
  createSelector,
  getActionTypeFromInstance
} from "./chunk-4HNXBNEP.js";
import "./chunk-4PFV5Y3D.js";
import {
  Injectable,
  NgModule,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-W2X26MEJ.js";
import {
  Subscription,
  tap
} from "./chunk-SJDNSO6V.js";
import "./chunk-AOF462FV.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-J4B6MK7R.js";

// node_modules/@ngxs-labs/actions-executing/fesm2020/ngxs-labs-actions-executing.mjs
var __decorate$1 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ActionsExecutedState = class ActionsExecutedState2 {
  constructor(actions$) {
    this.actions$ = actions$;
    this.actionsExecutedSub = new Subscription();
  }
  ngxsOnInit({
    patchState,
    getState
  }) {
    this.actionsExecutedSub = this.actions$.pipe(tap((actionContext) => {
      const actionType = getActionTypeFromInstance(actionContext.action);
      if (!actionType) {
        return;
      }
      let count = getState()?.[actionType] || 0;
      if (actionContext.status !== "DISPATCHED") {
        count++;
      }
      patchState({
        [actionType]: count
      });
    })).subscribe();
  }
  ngOnDestroy() {
    this.actionsExecutedSub.unsubscribe();
  }
};
ActionsExecutedState.ɵfac = function ActionsExecutedState_Factory(t) {
  return new (t || ActionsExecutedState)(ɵɵinject(Actions));
};
ActionsExecutedState.ɵprov = ɵɵdefineInjectable({
  token: ActionsExecutedState,
  factory: ActionsExecutedState.ɵfac
});
ActionsExecutedState = __decorate$1([State({
  name: "ngxs_actions_executed"
})], ActionsExecutedState);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionsExecutedState, [{
    type: Injectable
  }], function() {
    return [{
      type: Actions
    }];
  }, null);
})();
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ActionsExecutingState = class ActionsExecutingState2 {
  constructor(actions$) {
    this.actions$ = actions$;
    this._sub = new Subscription();
  }
  ngxsOnInit({
    patchState,
    getState
  }) {
    this._sub = this.actions$.pipe(tap((actionContext) => {
      const actionType = getActionTypeFromInstance(actionContext.action);
      if (!actionType) {
        return;
      }
      let count = getState()?.[actionType] || 0;
      if (actionContext.status === "DISPATCHED") {
        count++;
      } else if (count > 0) {
        count--;
      }
      patchState({
        [actionType]: count
      });
    })).subscribe();
  }
  ngOnDestroy() {
    this._sub.unsubscribe();
  }
};
ActionsExecutingState.ɵfac = function ActionsExecutingState_Factory(t) {
  return new (t || ActionsExecutingState)(ɵɵinject(Actions));
};
ActionsExecutingState.ɵprov = ɵɵdefineInjectable({
  token: ActionsExecutingState,
  factory: ActionsExecutingState.ɵfac
});
ActionsExecutingState = __decorate([State({
  name: "ngxs_actions_executing"
})], ActionsExecutingState);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionsExecutingState, [{
    type: Injectable
  }], function() {
    return [{
      type: Actions
    }];
  }, null);
})();
var NgxsActionsExecutingModule = class _NgxsActionsExecutingModule {
  static forRoot() {
    return {
      ngModule: _NgxsActionsExecutingModule
    };
  }
};
NgxsActionsExecutingModule.ɵfac = function NgxsActionsExecutingModule_Factory(t) {
  return new (t || NgxsActionsExecutingModule)();
};
NgxsActionsExecutingModule.ɵmod = ɵɵdefineNgModule({
  type: NgxsActionsExecutingModule,
  imports: [NgxsFeatureModule]
});
NgxsActionsExecutingModule.ɵinj = ɵɵdefineInjector({
  imports: [NgxsModule.forFeature([ActionsExecutingState, ActionsExecutedState])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxsActionsExecutingModule, [{
    type: NgModule,
    args: [{
      imports: [NgxsModule.forFeature([ActionsExecutingState, ActionsExecutedState])]
    }]
  }], null, null);
})();
function actionsExecutingFn(actionTypes, state) {
  if (!actionTypes || actionTypes.length === 0) {
    if (Object.keys(state).length === 0) {
      return null;
    }
    return state;
  }
  return actionTypes.reduce((acc, type) => {
    const actionType = getActionTypeFromInstance(type);
    if (!actionType) {
      return acc;
    }
    if (state[actionType]) {
      return __spreadProps(__spreadValues({}, acc), {
        [actionType]: state[actionType]
      });
    }
    return acc;
  }, null);
}
function actionsExecuting(actionTypes) {
  return createSelector([ActionsExecutingState], (state) => {
    return actionsExecutingFn(actionTypes, state);
  });
}
function hasActionsExecuting(actionTypes) {
  return createSelector([ActionsExecutingState], (state) => {
    const result = actionsExecutingFn(actionTypes, state);
    return result === null ? false : Object.values(result).some((value) => value > 0);
  });
}
function actionsExecuted(actionTypes) {
  return createSelector([ActionsExecutedState], (state) => {
    if (!actionTypes || actionTypes.length === 0) {
      if (Object.keys(state).length === 0) {
        return null;
      }
      return state;
    }
    return actionTypes.reduce((acc, type) => {
      const actionType = getActionTypeFromInstance(type);
      if (!actionType) {
        return acc;
      }
      if (state[actionType]) {
        return __spreadProps(__spreadValues({}, acc), {
          [actionType]: state[actionType]
        });
      }
      return acc;
    }, null);
  });
}
export {
  NgxsActionsExecutingModule,
  actionsExecuted,
  actionsExecuting,
  hasActionsExecuting
};
//# sourceMappingURL=@ngxs-labs_actions-executing.js.map
