import {
  Actions,
  InitState,
  NGXS_PLUGINS,
  Store,
  UpdateState,
  getActionTypeFromInstance,
  getStoreMetadata,
  getValue,
  ofActionSuccessful,
  setValue
} from "./chunk-4HNXBNEP.js";
import "./chunk-4PFV5Y3D.js";
import {
  ENVIRONMENT_INITIALIZER,
  Injectable,
  NgModule,
  isDevMode,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-W2X26MEJ.js";
import {
  take
} from "./chunk-SJDNSO6V.js";
import "./chunk-AOF462FV.js";
import {
  __spreadValues
} from "./chunk-J4B6MK7R.js";

// node_modules/ngxs-reset-plugin/fesm2020/ngxs-reset-plugin.mjs
function noop() {
  return () => {
  };
}
var ResetService = class {
};
ResetService.ɵfac = function ResetService_Factory(t) {
  return new (t || ResetService)();
};
ResetService.ɵprov = ɵɵdefineInjectable({
  token: ResetService,
  factory: ResetService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResetService, [{
    type: Injectable
  }], null, null);
})();
var ResetHandler = class {
  constructor(actions$, store, resetService) {
    this.actions$ = actions$;
    this.store = store;
    this.resetService = resetService;
    this.actions$.pipe(ofActionSuccessful(InitState), take(1)).subscribe(() => this.resetService.initialState = this.store.snapshot());
    this.actions$.pipe(ofActionSuccessful(UpdateState)).subscribe(({
      addedStates
    }) => this.resetService.initialState = __spreadValues(__spreadValues({}, this.resetService.initialState), addedStates));
  }
};
ResetHandler.ɵfac = function ResetHandler_Factory(t) {
  return new (t || ResetHandler)(ɵɵinject(Actions), ɵɵinject(Store), ɵɵinject(ResetService));
};
ResetHandler.ɵprov = ɵɵdefineInjectable({
  token: ResetHandler,
  factory: ResetHandler.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResetHandler, [{
    type: Injectable
  }], function() {
    return [{
      type: Actions
    }, {
      type: Store
    }, {
      type: ResetService
    }];
  }, null);
})();
var StateClear = class {
  constructor(...statesToKeep) {
    const reducer = createMetaDataListReducer(isDevMode());
    this.statesToKeep = statesToKeep.reduce(reducer, []);
  }
};
StateClear.type = "@@CLEAR_STATE";
var StateReset = class {
  constructor(...statesToReset) {
    const reducer = createMetaDataListReducer(isDevMode());
    this.statesToReset = statesToReset.reduce(reducer, []);
  }
};
StateReset.type = "@@RESET_STATE";
var StateResetAll = class {
  constructor(...statesToKeep) {
    const reducer = createMetaDataListReducer(isDevMode());
    this.statesToKeep = statesToKeep.reduce(reducer, []);
  }
};
StateResetAll.type = "@@RESET_STATE_ALL";
var StateOverwrite = class {
  constructor(...overwriteConfigs) {
    const reducer = createMetaTupleReducer(isDevMode());
    const [states, values] = overwriteConfigs.reduce(reducer, [[], []]);
    this.statesToOverwrite = states;
    this.values = values;
  }
};
StateOverwrite.type = "@@OVERWRITE_STATE";
function getMetaData(state, devMode) {
  const meta = new Object(getStoreMetadata(state));
  const isNgxsMeta = meta.name && "defaults" in meta;
  if (!isNgxsMeta && devMode === -2) {
    console.warn(`Reset Plugin Warning: ${meta.name} is not a state class.`);
    return null;
  }
  return meta;
}
function createMetaDataListReducer(devMode) {
  return (acc, state) => {
    const meta = getMetaData(state, ~devMode);
    return meta ? acc.concat(meta) : acc;
  };
}
function createMetaTupleReducer(devMode) {
  return (acc, [state, value]) => {
    const meta = getMetaData(state, ~devMode);
    return meta ? [acc[0].concat(meta), acc[1].concat(value)] : acc;
  };
}
var NgxsResetPlugin = class {
  constructor(resetService) {
    this.resetService = resetService;
  }
  clearStates(state, statesToKeep) {
    return statesToKeep.reduce((obj, meta) => {
      const path = getPath(meta);
      if (!path) {
        return obj;
      }
      const parts = path.split(".");
      const value = getValue(state, path);
      return parts.reduceRight((acc, part) => part in obj ? {
        [part]: __spreadValues(__spreadValues({}, obj[part]), acc)
      } : {
        [part]: acc
      }, value);
    }, {});
  }
  overwriteStates(state, statesToOverwrite, values) {
    statesToOverwrite.forEach((meta, index) => {
      const path = getPath(meta);
      if (!path) {
        return;
      }
      state = setValue(state, path, values[index]);
    });
    return state;
  }
  resetStates(state, statesToReset) {
    statesToReset.forEach((meta) => {
      const path = getPath(meta);
      if (!path) {
        return;
      }
      state = setValue(state, path, typeof meta.defaults === "undefined" ? {} : meta.defaults);
      if (meta.children) {
        state = this.resetStates(state, meta.children.map(getMetaData));
      }
    });
    return state;
  }
  resetStatesAll(state, statesToKeep) {
    const [metas, values] = statesToKeep.reduce((acc, meta) => {
      const path = getPath(meta);
      if (!path) {
        return acc;
      }
      acc[0].push(meta);
      acc[1].push(getValue(state, path));
      return acc;
    }, [[], []]);
    return this.overwriteStates(this.resetService.initialState, metas, values);
  }
  handle(state, action, next) {
    const type = getActionTypeFromInstance(action);
    switch (type) {
      case StateClear.type:
        state = this.clearStates(state, action.statesToKeep);
        break;
      case StateReset.type:
        state = this.resetStates(state, action.statesToReset);
        break;
      case StateResetAll.type:
        state = this.resetStatesAll(state, action.statesToKeep);
        break;
      case StateOverwrite.type:
        const {
          statesToOverwrite,
          values
        } = action;
        state = this.overwriteStates(state, statesToOverwrite, values);
        break;
      default:
        break;
    }
    return next(state, action);
  }
};
NgxsResetPlugin.ɵfac = function NgxsResetPlugin_Factory(t) {
  return new (t || NgxsResetPlugin)(ɵɵinject(ResetService));
};
NgxsResetPlugin.ɵprov = ɵɵdefineInjectable({
  token: NgxsResetPlugin,
  factory: NgxsResetPlugin.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxsResetPlugin, [{
    type: Injectable
  }], function() {
    return [{
      type: ResetService
    }];
  }, null);
})();
function getPath(meta) {
  return meta.path;
}
var NgxsResetPluginModule = class _NgxsResetPluginModule {
  static forRoot() {
    return {
      ngModule: _NgxsResetPluginModule,
      providers: [ResetService, ResetHandler, {
        provide: ENVIRONMENT_INITIALIZER,
        useFactory: noop,
        deps: [ResetHandler],
        multi: true
      }, {
        provide: NGXS_PLUGINS,
        useClass: NgxsResetPlugin,
        multi: true
      }]
    };
  }
};
NgxsResetPluginModule.ɵfac = function NgxsResetPluginModule_Factory(t) {
  return new (t || NgxsResetPluginModule)();
};
NgxsResetPluginModule.ɵmod = ɵɵdefineNgModule({
  type: NgxsResetPluginModule
});
NgxsResetPluginModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxsResetPluginModule, [{
    type: NgModule
  }], null, null);
})();
export {
  NgxsResetPlugin,
  NgxsResetPluginModule,
  StateClear,
  StateOverwrite,
  StateReset,
  StateResetAll,
  getMetaData
};
//# sourceMappingURL=ngxs-reset-plugin.js.map
