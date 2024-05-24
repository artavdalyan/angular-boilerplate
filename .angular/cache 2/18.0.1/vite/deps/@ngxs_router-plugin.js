import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  ResolveEnd,
  Router,
  RoutesRecognized
} from "./chunk-LYOQRMDW.js";
import {
  Action,
  NgxsFeatureModule,
  NgxsModule,
  Selector,
  State,
  Store
} from "./chunk-4HNXBNEP.js";
import "./chunk-FFFD3R7G.js";
import "./chunk-YKXYEDTU.js";
import "./chunk-4PFV5Y3D.js";
import {
  Injectable,
  InjectionToken,
  Injector,
  NgModule,
  NgZone,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-W2X26MEJ.js";
import {
  Subscription
} from "./chunk-SJDNSO6V.js";
import {
  __decorate,
  __metadata
} from "./chunk-AOF462FV.js";
import "./chunk-J4B6MK7R.js";

// node_modules/@ngxs/router-plugin/fesm2015/ngxs-router-plugin.js
var Navigate = class {
  constructor(path, queryParams, extras) {
    this.path = path;
    this.queryParams = queryParams;
    this.extras = extras;
  }
};
Navigate.type = "[Router] Navigate";
var RouterRequest = class {
  constructor(routerState, event, trigger = "none") {
    this.routerState = routerState;
    this.event = event;
    this.trigger = trigger;
  }
};
RouterRequest.type = "[Router] RouterRequest";
var RouterNavigation = class {
  constructor(routerState, event, trigger = "none") {
    this.routerState = routerState;
    this.event = event;
    this.trigger = trigger;
  }
};
RouterNavigation.type = "[Router] RouterNavigation";
var RouterCancel = class {
  constructor(routerState, storeState, event, trigger = "none") {
    this.routerState = routerState;
    this.storeState = storeState;
    this.event = event;
    this.trigger = trigger;
  }
};
RouterCancel.type = "[Router] RouterCancel";
var RouterError = class {
  constructor(routerState, storeState, event, trigger = "none") {
    this.routerState = routerState;
    this.storeState = storeState;
    this.event = event;
    this.trigger = trigger;
  }
};
RouterError.type = "[Router] RouterError";
var RouterDataResolved = class {
  constructor(routerState, event, trigger = "none") {
    this.routerState = routerState;
    this.event = event;
    this.trigger = trigger;
  }
};
RouterDataResolved.type = "[Router] RouterDataResolved";
var RouterNavigated = class {
  constructor(routerState, event, trigger = "none") {
    this.routerState = routerState;
    this.event = event;
    this.trigger = trigger;
  }
};
RouterNavigated.type = "[Router] RouterNavigated";
var RouterStateSerializer = class {
};
var DefaultRouterStateSerializer = class {
  serialize(routerState) {
    return {
      root: this.serializeRoute(routerState.root),
      url: routerState.url
    };
  }
  serializeRoute(route) {
    const children = route.children.map((c) => this.serializeRoute(c));
    return {
      url: route.url,
      params: route.params,
      queryParams: route.queryParams,
      fragment: route.fragment,
      data: route.data,
      outlet: route.outlet,
      component: null,
      routeConfig: null,
      root: null,
      parent: null,
      firstChild: children[0],
      children,
      pathFromRoot: null,
      paramMap: route.paramMap,
      queryParamMap: route.queryParamMap,
      toString: route.toString
    };
  }
};
var USER_OPTIONS = new InjectionToken("USER_OPTIONS", {
  providedIn: "root",
  factory: () => void 0
});
var NGXS_ROUTER_PLUGIN_OPTIONS = new InjectionToken("NGXS_ROUTER_PLUGIN_OPTIONS", {
  providedIn: "root",
  factory: () => ({})
});
function createRouterPluginOptions(options) {
  return {
    navigationActionTiming: options && options.navigationActionTiming || 1
    /* PreActivation */
  };
}
var RouterState_1;
var RouterState = RouterState_1 = class RouterState2 {
  constructor(_store, _router, _serializer, _ngZone, injector) {
    this._store = _store;
    this._router = _router;
    this._serializer = _serializer;
    this._ngZone = _ngZone;
    this._trigger = "none";
    this._routerState = null;
    this._storeState = null;
    this._lastEvent = null;
    this._subscription = new Subscription();
    this._options = null;
    this._options = injector.get(NGXS_ROUTER_PLUGIN_OPTIONS, null);
    this._setUpStoreListener();
    this._setUpRouterEventsListener();
  }
  static state(state) {
    return state && state.state;
  }
  static url(state) {
    return state && state.state && state.state.url;
  }
  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
  navigate(_, action) {
    return this._ngZone.run(() => this._router.navigate(action.path, Object.assign({
      queryParams: action.queryParams
    }, action.extras)));
  }
  angularRouterAction(ctx, action) {
    ctx.setState({
      trigger: action.trigger,
      state: action.routerState,
      navigationId: action.event.id
    });
  }
  _setUpStoreListener() {
    const subscription = this._store.select(RouterState_1).subscribe((state) => {
      this._navigateIfNeeded(state);
    });
    this._subscription.add(subscription);
  }
  _navigateIfNeeded(routerState) {
    if (routerState && routerState.trigger === "devtools") {
      this._storeState = this._store.selectSnapshot(RouterState_1);
    }
    const canSkipNavigation = !this._storeState || !this._storeState.state || !routerState || routerState.trigger === "router" || this._router.url === this._storeState.state.url || this._lastEvent instanceof NavigationStart;
    if (canSkipNavigation) {
      return;
    }
    this._storeState = this._store.selectSnapshot(RouterState_1);
    this._trigger = "store";
    this._ngZone.run(() => this._router.navigateByUrl(this._storeState.state.url));
  }
  _setUpRouterEventsListener() {
    const dispatchRouterNavigationLate = this._options != null && this._options.navigationActionTiming === 2;
    let lastRoutesRecognized;
    const subscription = this._router.events.subscribe((event) => {
      this._lastEvent = event;
      if (event instanceof NavigationStart) {
        this._navigationStart(event);
      } else if (event instanceof RoutesRecognized) {
        lastRoutesRecognized = event;
        if (!dispatchRouterNavigationLate && this._trigger !== "store") {
          this._dispatchRouterNavigation(lastRoutesRecognized);
        }
      } else if (event instanceof ResolveEnd) {
        this._dispatchRouterDataResolved(event);
      } else if (event instanceof NavigationCancel) {
        this._dispatchRouterCancel(event);
        this._reset();
      } else if (event instanceof NavigationError) {
        this._dispatchRouterError(event);
        this._reset();
      } else if (event instanceof NavigationEnd) {
        if (this._trigger !== "store") {
          if (dispatchRouterNavigationLate) {
            this._dispatchRouterNavigation(lastRoutesRecognized);
          }
          this._dispatchRouterNavigated(event);
        }
        this._reset();
      }
    });
    this._subscription.add(subscription);
  }
  /** Reacts to `NavigationStart`. */
  _navigationStart(event) {
    this._routerState = this._serializer.serialize(this._router.routerState.snapshot);
    if (this._trigger !== "none") {
      this._storeState = this._store.selectSnapshot(RouterState_1);
      this._dispatchRouterAction(new RouterRequest(this._routerState, event, this._trigger));
    }
  }
  /** Reacts to `ResolveEnd`. */
  _dispatchRouterDataResolved(event) {
    const routerState = this._serializer.serialize(event.state);
    this._dispatchRouterAction(new RouterDataResolved(routerState, event, this._trigger));
  }
  /** Reacts to `RoutesRecognized` or `NavigationEnd`, depends on the `navigationActionTiming`. */
  _dispatchRouterNavigation(lastRoutesRecognized) {
    const nextRouterState = this._serializer.serialize(lastRoutesRecognized.state);
    this._dispatchRouterAction(new RouterNavigation(nextRouterState, new RoutesRecognized(lastRoutesRecognized.id, lastRoutesRecognized.url, lastRoutesRecognized.urlAfterRedirects, nextRouterState), this._trigger));
  }
  /** Reacts to `NavigationCancel`. */
  _dispatchRouterCancel(event) {
    this._dispatchRouterAction(new RouterCancel(this._routerState, this._storeState, event, this._trigger));
  }
  /** Reacts to `NavigationEnd`. */
  _dispatchRouterError(event) {
    this._dispatchRouterAction(new RouterError(this._routerState, this._storeState, new NavigationError(event.id, event.url, `${event}`), this._trigger));
  }
  /** Reacts to `NavigationEnd`. */
  _dispatchRouterNavigated(event) {
    const routerState = this._serializer.serialize(this._router.routerState.snapshot);
    this._dispatchRouterAction(new RouterNavigated(routerState, event, this._trigger));
  }
  _dispatchRouterAction(action) {
    this._trigger = "router";
    try {
      this._store.dispatch(action);
    } finally {
      this._trigger = "none";
    }
  }
  _reset() {
    this._trigger = "none";
    this._storeState = null;
    this._routerState = null;
  }
};
RouterState.ɵfac = function RouterState_Factory(t) {
  return new (t || RouterState)(ɵɵinject(Store), ɵɵinject(Router), ɵɵinject(RouterStateSerializer), ɵɵinject(NgZone), ɵɵinject(Injector));
};
RouterState.ɵprov = ɵɵdefineInjectable({
  token: RouterState,
  factory: RouterState.ɵfac
});
__decorate([Action(Navigate), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Navigate]), __metadata("design:returntype", void 0)], RouterState.prototype, "navigate", null);
__decorate([Action([RouterRequest, RouterNavigation, RouterError, RouterCancel, RouterDataResolved, RouterNavigated]), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Object]), __metadata("design:returntype", void 0)], RouterState.prototype, "angularRouterAction", null);
__decorate([Selector(), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], RouterState, "state", null);
__decorate([Selector(), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", Object)], RouterState, "url", null);
RouterState = RouterState_1 = __decorate([State({
  name: "router",
  defaults: {
    state: void 0,
    navigationId: void 0,
    trigger: "none"
  }
}), __metadata("design:paramtypes", [Store, Router, RouterStateSerializer, NgZone, Injector])], RouterState);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterState, [{
    type: Injectable
  }], function() {
    return [{
      type: Store
    }, {
      type: Router
    }, {
      type: RouterStateSerializer
    }, {
      type: NgZone
    }, {
      type: Injector
    }];
  }, {
    navigate: [],
    angularRouterAction: []
  });
})();
var NgxsRouterPluginModule = class _NgxsRouterPluginModule {
  static forRoot(options) {
    return {
      ngModule: _NgxsRouterPluginModule,
      providers: [{
        provide: USER_OPTIONS,
        useValue: options
      }, {
        provide: NGXS_ROUTER_PLUGIN_OPTIONS,
        useFactory: createRouterPluginOptions,
        deps: [USER_OPTIONS]
      }, {
        provide: RouterStateSerializer,
        useClass: DefaultRouterStateSerializer
      }]
    };
  }
};
NgxsRouterPluginModule.ɵfac = function NgxsRouterPluginModule_Factory(t) {
  return new (t || NgxsRouterPluginModule)();
};
NgxsRouterPluginModule.ɵmod = ɵɵdefineNgModule({
  type: NgxsRouterPluginModule,
  imports: [NgxsFeatureModule]
});
NgxsRouterPluginModule.ɵinj = ɵɵdefineInjector({
  imports: [[NgxsModule.forFeature([RouterState])]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxsRouterPluginModule, [{
    type: NgModule,
    args: [{
      imports: [NgxsModule.forFeature([RouterState])]
    }]
  }], null, null);
})();
export {
  DefaultRouterStateSerializer,
  Navigate,
  NgxsRouterPluginModule,
  RouterCancel,
  RouterDataResolved,
  RouterError,
  RouterNavigated,
  RouterNavigation,
  RouterRequest,
  RouterState,
  RouterStateSerializer
};
//# sourceMappingURL=@ngxs_router-plugin.js.map
