webpackJsonp([1,4],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UtilService = (function () {
    function UtilService(http) {
        this.http = http;
    }
    UtilService.prototype.objectPropInArray = function (list, prop, val) {
        console.log(list.length);
        if (list.length > 0) {
            for (var i in list) {
                console.log(list[i][prop]);
                if (list[i][prop] === val) {
                    return true;
                }
            }
        }
        return false;
    };
    UtilService.prototype.removeItem = function (arr, value) {
        for (var b in arr) {
            if (arr[b] != null && arr[b]._id === value._id) {
                arr.splice(b, 1);
                break;
            }
        }
        return arr;
    };
    return UtilService;
}());
UtilService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object])
], UtilService);

var _a;
//# sourceMappingURL=util.service.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = (function () {
    function UserService(http, _jsonp) {
        this.http = http;
        this._jsonp = _jsonp;
    }
    UserService.prototype.create = function (user) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/auth/register', user, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.search = function (data) {
        if (data === '') {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of([]);
        }
        var searchUrl = __WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/users/search';
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        params.set('field', data.field);
        params.set('q', data.q);
        var options = this.jwt();
        options.search = params;
        return this.http
            .get(searchUrl, options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.jwt = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Authorization': 'Bearer ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        }
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* Jsonp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* Jsonp */]) === "function" && _b || Object])
], UserService);

var _a, _b;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_settings__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = (function () {
    function AuthenticationService(http, notifyService) {
        this.http = http;
        this.notifyService = notifyService;
    }
    AuthenticationService.prototype.login = function (email, password) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/auth/login', { email: email, password: password })
            .map(function (response) {
            var user = response.json();
            if (user && user.token) {
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
        });
    };
    AuthenticationService.prototype.loginFB = function (fb_user) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/auth/facebook', fb_user)
            .map(function (response) {
            var user = response.json();
            if (user && user.token) {
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        if (this.getCurrentUser() != null) {
            var obj = { user_id: this.getCurrentUser()._id };
            this.notifyService.sendLogoutMessage(obj);
        }
        localStorage.removeItem('currentUser');
    };
    AuthenticationService.prototype.getCurrentUser = function () {
        return JSON.parse(localStorage.getItem('currentUser'));
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        return (this.getCurrentUser()) ? true : false;
    };
    AuthenticationService.prototype.userAvatarSrc = function (user) {
        if (user.avatar) {
            if (user.facebookID) {
                return user.avatar;
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/uploads/' + user.avatar;
            }
        }
        else {
            return '/src/assets/images/default-avatar.jpg';
        }
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__notification_service__["a" /* NotificationService */]) === "function" && _b || Object])
], AuthenticationService);

var _a, _b;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_settings__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GroupsService = (function () {
    function GroupsService(http) {
        this.http = http;
    }
    GroupsService.prototype.list = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/groups/' + id + '/list', this.jwt()).map(function (response) { return response.json(); });
        ;
    };
    GroupsService.prototype.add = function (group) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/groups/add', group, this.jwt()).map(function (response) { return response.json(); });
    };
    GroupsService.prototype.addMember = function (query) {
        var searchUrl = __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/groups/members/add';
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        params.set('name', query.name);
        params.set('uid', query.uid);
        var options = this.jwt();
        options.search = params;
        return this.http
            .get(searchUrl, options)
            .map(function (response) { return response.json(); });
    };
    GroupsService.prototype.listMembers = function (id) {
        var Url = __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/groups/' + id + '/members';
        //let params = new URLSearchParams();
        //params.set('name', "os");
        var options = this.jwt();
        //options.search = params;
        console.log("url :", Url);
        return this.http.get(Url, options).toPromise().then(function (response) { return response.json(); });
    };
    GroupsService.prototype.deleteMember = function (gid, uid) {
        var Url = __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/groups/' + gid + '/members/' + uid;
        //let params = new URLSearchParams();
        //params.set('name', "os");
        var options = this.jwt();
        //options.search = params;
        console.log("url :", Url);
        return this.http.delete(Url, options).toPromise().then(function (response) { return response.json(); });
    };
    GroupsService.prototype.deleteGroup = function (gid) {
        var Url = __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/groups/' + gid;
        //let params = new URLSearchParams();
        //params.set('name', "os");
        var options = this.jwt();
        //options.search = params;
        console.log("url :", Url);
        return this.http.delete(Url, options).toPromise().then(function (response) { return response.json(); });
    };
    GroupsService.prototype.search = function (data) {
        if (data === '') {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of([]);
        }
        var searchUrl = __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/groups/search';
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        params.set('user_id', data.user_id);
        params.set('field', data.field);
        params.set('q', data.q);
        var options = this.jwt();
        options.search = params;
        return this.http
            .get(searchUrl, options)
            .map(function (response) { return response.json(); });
    };
    GroupsService.prototype.jwt = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Authorization': 'Bearer ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        }
    };
    return GroupsService;
}());
GroupsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object])
], GroupsService);

var _a;
//# sourceMappingURL=groups.service.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeService = (function () {
    function HomeService(http) {
        this.http = http;
    }
    HomeService.prototype.getMyOrders = function (id) {
        var Url = __WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/orders/?field=owner&owner=' + id;
        var options = this.jwt();
        return this.http.get(Url, options).toPromise().then(function (response) { return response.json(); });
    };
    HomeService.prototype.getFriendsOrders = function (ids) {
        console.log("x", ids);
        var Url = __WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/orders/';
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        params.set('field', "owners");
        params.set('owners', ids.join());
        var options = this.jwt();
        options.search = params;
        return this.http.get(Url, options).toPromise().then(function (response) { return response.json(); });
    };
    HomeService.prototype.jwt = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Authorization': 'Bearer ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        }
    };
    return HomeService;
}());
HomeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object])
], HomeService);

var _a;
//# sourceMappingURL=home.service.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_settings__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderService = (function () {
    function OrderService(http) {
        this.http = http;
    }
    OrderService.prototype.getById = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/orders/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    OrderService.prototype.create = function (order) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/orders', order, this.jwt()).map(function (response) { return response.json(); });
    };
    OrderService.prototype.addMeal = function (order_id, meal) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/orders/' + order_id + '/meals', meal, this.jwt()).map(function (response) { return response.json(); });
    };
    OrderService.prototype.removeMeal = function (order_id, meal_id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/orders/' + order_id + '/meals/' + meal_id, this.jwt()).map(function (response) { return response.json(); });
    };
    OrderService.prototype.removeUser = function (order_id, user_id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/orders/' + order_id + '/users/' + user_id, this.jwt()).map(function (response) { return response.json(); });
    };
    OrderService.prototype.jwt = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Authorization': 'Bearer ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        }
    };
    return OrderService;
}());
OrderService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object])
], OrderService);

var _a;
//# sourceMappingURL=orders.service.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppSettings = (function () {
    function AppSettings() {
    }
    return AppSettings;
}());
AppSettings.API_ENDPOINT = 'https://iti-yala-notlop.herokuapp.com';
AppSettings = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], AppSettings);

//# sourceMappingURL=app.settings.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.authenticationService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_orders_service__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_notification_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_friends_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_groups_service__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_settings__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_file_upload_ng2_file_upload__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng2_file_upload_ng2_file_upload__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddOrderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






 //by seif







var UPLOAD_URL = __WEBPACK_IMPORTED_MODULE_12__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/upload/photo';
var AddOrderComponent = (function () {
    function AddOrderComponent(_router, _auth, _user, _alert, _friend, _groups, notiServe, _order) {
        var _this = this;
        this._router = _router;
        this._auth = _auth;
        this._user = _user;
        this._alert = _alert;
        this._friend = _friend;
        this._groups = _groups;
        this.notiServe = notiServe;
        this._order = _order;
        this.model = { invited: [] };
        this.loading = false;
        this.searching = false;
        this.searchFailed = false;
        this.tmp = {
            invite: {}, invite_valid: true
        };
        this.invited_users = [];
        this.order_for_values = ["Lunch", "BreackFast", "Dinner"];
        this.invite_by_values = ["Friends", "Groups"];
        this.menu_photo = { valid: true, error: "" };
        this.myFollowers = [];
        this.uploader = new __WEBPACK_IMPORTED_MODULE_13_ng2_file_upload_ng2_file_upload__["FileUploader"]({ url: UPLOAD_URL, itemAlias: 'photo' });
        this.search = function (text$) {
            return text$
                .debounceTime(300)
                .distinctUntilChanged()
                .do(function () { return _this.searching = true; })
                .switchMap(function (term) {
                return _this._search({ user_id: _this._auth.getCurrentUser()._id, field: "name", q: term })
                    .do(function () { return _this.searchFailed = false; })
                    .catch(function () {
                    _this.searchFailed = true;
                    return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of([]);
                });
            })
                .do(function () { return _this.searching = false; });
        };
        this._search = function (data) {
            return (this.invite_by === "Friends") ? this._friend.search(data) : this._groups.search(data);
        };
        this.formatter = function (x) { return x.name; };
    }
    AddOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.model.owner = this._auth.getCurrentUser()._id;
        this.invite_by = this.invite_by_values[0];
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            var jsonResponse = JSON.parse(response);
            if (jsonResponse.error) {
                _this.menu_photo.valid = false;
                _this.menu_photo.error = jsonResponse.error;
            }
            else if (jsonResponse.file) {
                _this.menu_photo.valid = true;
                _this.model.photo = jsonResponse.file;
            }
        };
        //get my followers & send notification to them
        this._friend.getFollowers(this._auth.getCurrentUser()._id).then(function (followers) {
            _this.myFollowers = followers;
            console.log("my followers :", _this.myFollowers);
            var Ids = [];
            _this.myFollowers.forEach(function (follower) {
                Ids.push(follower._id);
            });
            _this.notiServe.toMyFollowers({ ids: Ids.join() });
        });
    };
    AddOrderComponent.prototype.inviteItemTmp = function (event) {
        this.tmp.invite = event.item;
    };
    AddOrderComponent.prototype.inviteItemHandle = function () {
        var exists = false;
        for (var i = 0; i < this.invited_users.length; i++) {
            if (this.invited_users[i]._id == this.tmp.invite._id) {
                exists = true;
            }
        }
        if (exists) {
            this.tmp.invite_valid = false;
        }
        else {
            this.tmp.invite_valid = true;
            if (Object.keys(this.tmp.invite).length > 0) {
                if (this.invite_by === "Friends" && !this.tmp.invite.members) {
                    this.invited_users.push(this.tmp.invite);
                }
                else if (this.invite_by === "Groups" && this.tmp.invite.members) {
                    for (var j = 0; j < this.tmp.invite.members.length; j++) {
                        this.invited_users.push(this.tmp.invite.members[j]);
                    }
                }
            }
        }
    };
    AddOrderComponent.prototype.removeUser = function (user) {
        for (var i = 0; i < this.invited_users.length; i++) {
            if (this.invited_users[i]._id == user._id) {
                this.invited_users.splice(i, 1);
            }
        }
    };
    AddOrderComponent.prototype.addOrder = function () {
        var _this = this;
        this.loading = true;
        for (var i = 0; i < this.invited_users.length; i++) {
            this.model.invited.push(this.invited_users[i]._id);
        }
        this._order.create(this.model)
            .subscribe(function (data) {
            //by seif: push notification to others
            //
            _this._alert.success('Published successful', true);
            _this._router.navigate(['/order-details', data._id]);
        }, function (error) {
            _this._alert.error(error.json().error);
            _this.loading = false;
        });
    };
    return AddOrderComponent;
}());
AddOrderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(717),
        styles: [__webpack_require__(696)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_10__services_friends_service__["a" /* FriendsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__services_friends_service__["a" /* FriendsService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_11__services_groups_service__["a" /* GroupsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__services_groups_service__["a" /* GroupsService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_notification_service__["a" /* NotificationService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__services_orders_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_orders_service__["a" /* OrderService */]) === "function" && _h || Object])
], AddOrderComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=add-order.component.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_friends_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_util_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_notification_service__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FriendsComponent = (function () {
    function FriendsComponent(friendService, authService, UtilService, notiServe) {
        this.friendService = friendService;
        this.authService = authService;
        this.UtilService = UtilService;
        this.notiServe = notiServe;
    }
    FriendsComponent.prototype.getFriends = function () {
        var _this = this;
        this.friendService.getFriends(this.authService.getCurrentUser()._id).then(function (friends) { return _this.friends = friends; });
    };
    FriendsComponent.prototype.getFollowers = function () {
        var _this = this;
        this.friendService.getFollowers(this.authService.getCurrentUser()._id).then(function (followers) {
            _this.followers = followers;
        });
    };
    FriendsComponent.prototype.getBlocked = function () {
        var _this = this;
        this.friendService.getBlocked(this.authService.getCurrentUser()._id).then(function (blocked) {
            _this.blockList = blocked;
        });
    };
    FriendsComponent.prototype.onAddNotify = function (user) {
        this.friends.push(user);
    };
    FriendsComponent.prototype.onDeleteNotify = function (user) {
        this.friends = this.UtilService.removeItem(this.friends, user);
    };
    FriendsComponent.prototype.deleteFollower = function (user) {
        var _this = this;
        this.friends = this.friends.filter(function (h) { return h !== user; });
        var query = { reqFrom: this.authService.getCurrentUser()._id, reqTo: user._id };
        this.friendService.deleteFriend(query).then(function (deleteFriend) { return _this.deleteFriend = deleteFriend; });
    };
    FriendsComponent.prototype.blockFollower = function (user) {
        var _this = this;
        this.followers = this.followers.filter(function (h) { return h !== user; });
        var query = { reqFrom: this.authService.getCurrentUser()._id, reqTo: user._id };
        this.friendService.blockFriend(query).then(function (me) {
            _this.user = me;
            _this.blockList.push(user);
        });
    };
    FriendsComponent.prototype.unBlockFollower = function (user) {
        this.blockList = this.UtilService.removeItem(this.blockList, user);
        if (this.UtilService.objectPropInArray(this.followers, '_id', user._id)) {
            this.followers.push(user);
        }
        var query = { reqFrom: this.authService.getCurrentUser()._id, reqTo: user._id };
        this.friendService.unBlockFriend(query).then(function (me) { return console.log(me); });
    };
    FriendsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notiServe.getFollower().subscribe(function (user) {
            _this.followers.push(user);
        });
        this.getFriends();
        this.getFollowers();
        this.getBlocked();
    };
    return FriendsComponent;
}());
FriendsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-friends',
        template: __webpack_require__(721),
        styles: [__webpack_require__(700)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_friends_service__["a" /* FriendsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_friends_service__["a" /* FriendsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_util_service__["a" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_util_service__["a" /* UtilService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_notification_service__["a" /* NotificationService */]) === "function" && _d || Object])
], FriendsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=friends.component.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_groups_service__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_friends_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_util_service__ = __webpack_require__(115);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var GroupsComponent = (function () {
    function GroupsComponent(_groups, _friends, _auth, _user, helper) {
        var _this = this;
        this._groups = _groups;
        this._friends = _friends;
        this._auth = _auth;
        this._user = _user;
        this.helper = helper;
        this.groups = [];
        this.invited_users = [];
        this.tmp = { invite: {}, invite_valid: true };
        this.groupValid = true;
        this.loading = false;
        this.searching = false;
        this.searchFailed = false;
        this.noGroups = true;
        this.search = function (text$) {
            return text$
                .debounceTime(300)
                .distinctUntilChanged()
                .do(function () { return _this.searching = true; })
                .switchMap(function (term) {
                return _this._friends.search({ user_id: _this._auth.getCurrentUser()._id, field: "name", q: term })
                    .do(function () { return _this.searchFailed = false; })
                    .catch(function () {
                    _this.searchFailed = true;
                    return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of([]);
                });
            })
                .do(function () { return _this.searching = false; });
        };
        this.formatter = function (x) { return x.name; };
    }
    GroupsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.groupValid = true;
        this._groups.list(this._auth.getCurrentUser()._id).subscribe(function (groups) {
            console.log("^^^^", groups);
            _this.groups = groups;
            if (_this.groups.length > 0) {
                _this.noGroups = false;
                _this.currentGroup = groups[0];
                // //all code must be here not out
                console.log("all groups :", _this.groups);
                console.log("selected group", _this.currentGroup.name);
                // console.log("retrun : ",this.groupService.listMembers("os"));
                _this._groups.listMembers(_this.currentGroup._id).then(function (members) {
                    _this.members = members['members'];
                    console.log("members", _this.members.length);
                });
            }
        }, function (err) {
            console.log(err);
        });
    };
    GroupsComponent.prototype.ngOnChanges = function () {
        console.log("change");
    };
    GroupsComponent.prototype.ngDoCheck = function () {
        console.log("do check");
        this.groups = this.groups;
        console.log("noGroups", this.noGroups);
        if (this.groups.length > 0) {
            this.noGroups = false;
            this.currentGroup = this.groups[0];
        }
        else {
            this.noGroups = true;
        }
    };
    GroupsComponent.prototype.addGroup = function (name) {
        var _this = this;
        var flag = 0;
        this.groups.forEach(function (group) {
            if (name.value == group.name) {
                flag = 1;
            }
        });
        if (name.value != "" && flag == 0) {
            this._groups.add({ owner: this._auth.getCurrentUser()._id, name: name.value, members: [] }).subscribe(function (data) {
                _this.groups.push(data);
                console.log("Adding group ", data);
            }, function (error) { });
        }
        else {
            this.groupValid = false;
        }
        name.value = null;
    };
    GroupsComponent.prototype.addMember = function (name, id) {
        this.query = { name: name, uid: id };
        this._groups.addMember(this.query)
            .subscribe(function (data) {
            if (!data.error) {
            }
        }, function (error) {
            console.log("erro in adding", error);
        });
    };
    GroupsComponent.prototype.onSelect = function (group) {
        var _this = this;
        this.currentGroup = group;
        this._groups.listMembers(this.currentGroup._id).then(function (members) {
            _this.members = members['members'];
            console.log("members", _this.members);
        });
        console.log(this.currentGroup);
    };
    GroupsComponent.prototype.inviteItemTmp = function (event) {
        this.tmp.invite = event.item;
    };
    GroupsComponent.prototype.inviteItemHandle = function (input) {
        var exists = false;
        for (var i = 0; i < this.members.length; i++) {
            if (this.members[i]._id == this.tmp.invite._id) {
                exists = true;
            }
        }
        if (exists) {
            this.tmp.invite_valid = false;
        }
        else {
            console.log(this.tmp.invite._id);
            this.addMember(this.currentGroup.name, this.tmp.invite._id);
            this.members.push(this.tmp.invite);
            this.groups.forEach(function (group) {
                if (group.name == this.currentGroup.name) {
                    group.members.push("1");
                }
            }, this);
            input.value = null;
        }
    };
    GroupsComponent.prototype.removeUser = function (user) {
        console.log("remove :", user);
        for (var i = 0; i < this.members.length; i++) {
            if (this.members[i]._id == user._id) {
                this.members.splice(i, 1);
            }
        }
        console.log("currentGroup before deleteMember :", this.currentGroup);
        this.groups.forEach(function (group) {
            if (group.name == this.currentGroup.name) {
                group.members.pop();
            }
        }, this);
        console.log("currentGroup after deleteMember :", this.currentGroup);
        this._groups.deleteMember(this.currentGroup._id, user._id).then();
    };
    GroupsComponent.prototype.onKey = function () {
        this.groupValid = true;
    };
    GroupsComponent.prototype.memberKey = function () {
        this.tmp.invite_valid = true;
    };
    GroupsComponent.prototype.deleteGroup = function () {
        console.log("target group", this.currentGroup);
        for (var i = 0; i < this.groups.length; i++) {
            if (this.groups[i] == this.currentGroup) {
                console.log("found target");
                this.groups.splice(i, 1);
            }
            console.log(this.currentGroup.name, "deleted");
            this._groups.deleteGroup(this.currentGroup._id).then();
            this.currentGroup = this.groups[0];
            console.log(this.groups);
        }
    };
    return GroupsComponent;
}());
GroupsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-groups',
        template: __webpack_require__(723),
        styles: [__webpack_require__(702)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_groups_service__["a" /* GroupsService */], __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_8__services_util_service__["a" /* UtilService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_groups_service__["a" /* GroupsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_groups_service__["a" /* GroupsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__services_friends_service__["a" /* FriendsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_friends_service__["a" /* FriendsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__services_util_service__["a" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_util_service__["a" /* UtilService */]) === "function" && _e || Object])
], GroupsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=groups.component.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_home_service__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_friends_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_notification_service__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    function HomeComponent(homeService, uerService, friendService, notify) {
        this.homeService = homeService;
        this.uerService = uerService;
        this.friendService = friendService;
        this.notify = notify;
        this.friends = [];
        this.islogged = false;
        this.currentUser = uerService.getCurrentUser();
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        //console.log(this.homeService.getMyOrders(this.currentUser._id));
        //get my orders
        if (this.currentUser) {
            this.islogged = true;
            this.homeService.getMyOrders(this.currentUser._id).then(function (orders) {
                _this.myOrders = orders;
                console.log("my orders:", _this.myOrders);
            });
            this.init();
        }
        this.notify.getNewOrders().subscribe(function (message) {
            console.log("msg from notify ", message);
            _this.init();
            console.log("relod done");
        });
    };
    HomeComponent.prototype.init = function () {
        var _this = this;
        //get My friends
        this.friendService.getFriends(this.uerService.getCurrentUser()._id).then(function (friends) {
            console.log("friends result :", friends);
            _this.friends = friends;
            console.log("my friends:", _this.friends);
            var Ids = [];
            _this.friends.forEach(function (friend) {
                console.log("=", friend._id);
                Ids.push(friend._id);
            });
            _this.friendsIds = Ids;
            console.log("ids", _this.friendsIds);
            //get my friends's orders
            _this.homeService.getFriendsOrders(_this.friendsIds).then(function (orders) {
                //console.log("friends result :", orders);
                _this.friendsOrders = orders;
                console.log("my friendsOrders:", _this.friendsOrders);
            });
        });
    };
    HomeComponent.prototype.ngDoCheck = function () {
        console.log("do check");
        // this.init()
        // console.log("relod in check");
        this.friends = this.friends;
        this.friendsOrders = this.friendsOrders;
        this.myOrders = this.myOrders;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(724),
        styles: [__webpack_require__(703)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_home_service__["a" /* HomeService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_home_service__["a" /* HomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_home_service__["a" /* HomeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_friends_service__["a" /* FriendsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_friends_service__["a" /* FriendsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_notification_service__["a" /* NotificationService */]) === "function" && _d || Object])
], HomeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_notification_service__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(notifyService, route, router, authenticationService, alertService) {
        this.notifyService = notifyService;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.authenticationService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.email, this.model.password)
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
            var obj = { user_id: _this.authenticationService.getCurrentUser()._id };
            _this.notifyService.sendLoginMessage(obj);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(725),
        styles: [__webpack_require__(704)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_notification_service__["a" /* NotificationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */]) === "function" && _e || Object])
], LoginComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_orders_service__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_settings__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OrderDetailsComponent = (function () {
    function OrderDetailsComponent(_route, _order, _auth, _modal) {
        this._route = _route;
        this._order = _order;
        this._auth = _auth;
        this._modal = _modal;
        this.model = { amount: 1 };
        this.loading = false;
        this.order = { meals: [], photo: '' };
        this.invited_users = [];
        this.joined_users = [];
        this.addPermession = false;
        this.totals = { price: 0, quantity: 0 };
    }
    OrderDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route_sub = this._route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.http_sub = _this.pollData(_this.id).subscribe(function (data) {
                _this.setData(data);
            }, function (error) {
            });
        });
        this.model.owner = this._auth.getCurrentUser()._id;
    };
    OrderDetailsComponent.prototype.setData = function (data) {
        this.order = data;
        this.joined_users = [];
        this.totals.quantity = 0;
        this.totals.price = 0;
        for (var i = 0; i < data.meals.length; i++) {
            this.joined_users.push(data.meals[i].owner._id);
            this.totals.quantity += data.meals[i].amount;
            this.totals.price += data.meals[i].price;
        }
        for (var i = 0; i < data.invited.length; i++) {
            if (this._auth.getCurrentUser()._id == data.invited[i]._id) {
                this.addPermession = true;
            }
            if (this._auth.getCurrentUser()._id == data.owner._id) {
                this.addPermession = true;
            }
            if (this.joined_users.indexOf(data.invited[i]._id) != -1) {
                data.invited[i].badge = { text: "Joined", "class": "badge-success", icon: "check" };
            }
            else {
                data.invited[i].badge = { text: "Waiting", "class": "badge-default", icon: "refresh" };
            }
        }
        this.invited_users = data.invited;
    };
    ;
    OrderDetailsComponent.prototype.pollData = function (id) {
        var _this = this;
        //Creating a subject
        var pollSubject = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        //Define the Function which subscribes our pollSubject to a new http.get observable (see _pollLiveData() below)
        var subscribeToNewRequestObservable = function () {
            _this._order.getById(id)
                .subscribe(function (res) {
                pollSubject.next(res);
            });
        };
        //Subscribe our "subscription-function" to custom subject (observable) with 4000ms of delay added
        pollSubject.delay(5000).subscribe(subscribeToNewRequestObservable);
        //Call the "subscription-function" to execute the first request
        subscribeToNewRequestObservable();
        //Return observable of our subject
        return pollSubject.asObservable();
    };
    OrderDetailsComponent.prototype.addMeal = function () {
        var _this = this;
        this.loading = true;
        this._order.addMeal(this.id, this.model)
            .subscribe(function (data) {
            _this.loading = false;
            _this.order.meals.push({
                name: _this.model.name,
                amount: _this.model.amount,
                price: _this.model.price,
                comment: _this.model.comment,
                owner: _this._auth.getCurrentUser()
            });
            _this.totals.quantity += _this.model.amount;
            _this.totals.price += _this.model.price;
            _this.model = { owner: _this._auth.getCurrentUser()._id };
        }, function (error) {
            _this.loading = false;
        });
    };
    OrderDetailsComponent.prototype.removeMeal = function (id) {
        var _this = this;
        this._order.removeMeal(this.id, id).subscribe(function (data) {
            for (var i = 0; i < _this.order.meals.length; i++) {
                if (_this.order.meals[i]._id == id) {
                    _this.order.meals.splice(i, 1);
                    _this.totals.quantity -= _this.order.meals[i].amount;
                    _this.totals.price -= _this.order.meals[i].price;
                }
            }
        }, function (error) {
        });
    };
    OrderDetailsComponent.prototype.removeUser = function (id) {
        var _this = this;
        this._order.removeUser(this.id, id).subscribe(function (data) {
            for (var i = 0; i < _this.invited_users.length; i++) {
                if (_this.invited_users[i]._id == id) {
                    _this.invited_users.splice(i, 1);
                }
            }
            var j = _this.order.meals.length;
            while (j--) {
                if (_this.order.meals[j].owner._id == id) {
                    _this.totals.quantity -= _this.order.meals[j].amount;
                    _this.totals.price -= _this.order.meals[j].price;
                    _this.order.meals.splice(j, 1);
                }
            }
        }, function (error) {
        });
    };
    OrderDetailsComponent.prototype.viewMenu = function (content) {
        this._modal.open(content);
    };
    OrderDetailsComponent.prototype.menuPhotoSrc = function () {
        return __WEBPACK_IMPORTED_MODULE_6__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/uploads/' + this.order.photo;
    };
    OrderDetailsComponent.prototype.ngOnDestroy = function () {
        if (this.route_sub) {
            this.route_sub.unsubscribe();
        }
        if (this.http_sub) {
            this.http_sub.unsubscribe();
        }
    };
    return OrderDetailsComponent;
}());
OrderDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(727),
        styles: [__webpack_require__(706)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_orders_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_orders_service__["a" /* OrderService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _d || Object])
], OrderDetailsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=order-details.component.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_home_service__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrdersComponent = (function () {
    function OrdersComponent(homeService, uerService) {
        this.homeService = homeService;
        this.uerService = uerService;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get my orders
        this.homeService.getMyOrders(this.uerService.getCurrentUser()._id).then(function (orders) {
            _this.myOrders = orders;
            console.log("my orders:", _this.myOrders);
        });
    };
    return OrdersComponent;
}());
OrdersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-orders',
        template: __webpack_require__(728),
        styles: [__webpack_require__(707)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_home_service__["a" /* HomeService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_home_service__["a" /* HomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_home_service__["a" /* HomeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], OrdersComponent);

var _a, _b;
//# sourceMappingURL=orders.component.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_settings__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload_ng2_file_upload__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_file_upload_ng2_file_upload__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UPLOAD_URL = __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/upload/photo';
var RegisterComponent = (function () {
    function RegisterComponent(router, userService, alertService) {
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.model = {};
        this.avatar = { valid: true, error: "" };
        this.loading = false;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload_ng2_file_upload__["FileUploader"]({ url: UPLOAD_URL, itemAlias: 'photo' });
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            var jsonResponse = JSON.parse(response);
            if (jsonResponse.error) {
                _this.avatar.valid = false;
                _this.avatar.error = jsonResponse.error;
            }
            else if (jsonResponse.file) {
                _this.avatar.valid = true;
                _this.model.avatar = jsonResponse.file;
            }
        };
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(function (data) {
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error.json().error);
            _this.loading = false;
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(729),
        styles: [__webpack_require__(708)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 500:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 500;


/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(629);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__(986);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_settings__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NotificationService = (function () {
    function NotificationService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].API_ENDPOINT + '';
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(this.url);
    }
    NotificationService.prototype.sendMessage = function (message) {
        this.socket.emit('add-message', message);
    };
    NotificationService.prototype.toMyFollowers = function (obj) {
        this.socket.emit('toMyFollowers', obj);
    };
    NotificationService.prototype.setFollower = function (user) {
        this.follower = user;
        console.log("from serv");
        console.log(user);
        this.subject.next(user);
    };
    NotificationService.prototype.getFollower = function () {
        return this.subject.asObservable();
    };
    NotificationService.prototype.sendLoginMessage = function (obj) {
        console.log(this.socket);
        this.socket.emit('login-message', obj);
    };
    NotificationService.prototype.sendLogoutMessage = function (obj) {
        this.socket.emit('logout-message', obj);
    };
    NotificationService.prototype.getNewOrders = function () {
        var _this = this;
        console.log("get new orders");
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"](function (observer) {
            //console.log(this.socket);
            _this.socket.on('newOrder', function (data) {
                console.log("notify data ", data);
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    NotificationService.prototype.getMessages = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"](function (observer) {
            _this.socket.on('message', function (data) {
                _this.subject.next(data);
                console.log(data);
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    NotificationService.prototype.getMessagesFromDb = function (id) {
        var Url = __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/notification/list';
        var params = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* URLSearchParams */]();
        params.set('user_id', id);
        var options = this.jwt();
        options.search = params;
        return this.http.get(Url, options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    NotificationService.prototype.sendReadnotiState = function (id) {
        var Url = __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/notification/status';
        var params = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* URLSearchParams */]();
        params.set('user_id', id);
        var options = this.jwt();
        options.search = params;
        return this.http.get(Url, options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    NotificationService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    NotificationService.prototype.jwt = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Headers */]({ 'Authorization': 'Bearer ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* RequestOptions */]({ headers: headers });
        }
    };
    return NotificationService;
}());
NotificationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["f" /* Http */]) === "function" && _a || Object])
], NotificationService);

var _a;
//# sourceMappingURL=notification.service.js.map

/***/ }),

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alert_service__ = __webpack_require__(86);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) { _this.message = message; });
    };
    return AlertComponent;
}());
AlertComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'alert',
        template: __webpack_require__(716),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */]) === "function" && _a || Object])
], AlertComponent);

var _a;
//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orders_orders_component__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register_component__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__friends_friends_component__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__groups_groups_component__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__add_order_add_order_component__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__order_details_order_details_component__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__ = __webpack_require__(427);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_5__register_register_component__["a" /* RegisterComponent */] },
    { path: 'friends', component: __WEBPACK_IMPORTED_MODULE_6__friends_friends_component__["a" /* FriendsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'orders', component: __WEBPACK_IMPORTED_MODULE_2__orders_orders_component__["a" /* OrdersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'add-order', component: __WEBPACK_IMPORTED_MODULE_8__add_order_add_order_component__["a" /* AddOrderComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'order-details/:id', component: __WEBPACK_IMPORTED_MODULE_9__order_details_order_details_component__["a" /* OrderDetailsComponent */] },
    { path: 'groups', component: __WEBPACK_IMPORTED_MODULE_7__groups_groups_component__["a" /* GroupsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(_auth) {
        this._auth = _auth;
        this.title = 'app works!';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(718),
        styles: [__webpack_require__(697)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_alert_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_groups_service__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__helpers_alert_component__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_orders_service__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_login_component__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__register_register_component__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_home_component__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__friends_friends_component__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_routing_module__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__friend_search_friend_search_component__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__groups_groups_component__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__group_info_group_info_component__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__add_order_add_order_component__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__user_card_user_card_component__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_friends_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_util_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_notification_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_home_service__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ng2_file_upload__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__notifications_notifications_component__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__order_details_order_details_component__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ng2_notifications_src_app_components_notification_component__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ng2_notifications_src_app_components_notification_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_ng2_notifications_src_app_components_notification_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__orders_orders_component__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__facebooklogin_facebooklogin_component__ = __webpack_require__(624);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_14__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_15__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__helpers_alert_component__["a" /* AlertComponent */],
            __WEBPACK_IMPORTED_MODULE_16__friends_friends_component__["a" /* FriendsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__friend_search_friend_search_component__["a" /* FriendSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_19__groups_groups_component__["a" /* GroupsComponent */],
            __WEBPACK_IMPORTED_MODULE_20__group_info_group_info_component__["a" /* GroupInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_21__add_order_add_order_component__["a" /* AddOrderComponent */],
            __WEBPACK_IMPORTED_MODULE_22__user_card_user_card_component__["a" /* UserCardComponent */],
            __WEBPACK_IMPORTED_MODULE_27_ng2_file_upload__["FileSelectDirective"],
            __WEBPACK_IMPORTED_MODULE_28__notifications_notifications_component__["a" /* NotificationsComponent */],
            __WEBPACK_IMPORTED_MODULE_29__order_details_order_details_component__["a" /* OrderDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_30_ng2_notifications_src_app_components_notification_component__["PushNotificationComponent"],
            __WEBPACK_IMPORTED_MODULE_31__orders_orders_component__["a" /* OrdersComponent */],
            __WEBPACK_IMPORTED_MODULE_32__facebooklogin_facebooklogin_component__["a" /* FacebookloginComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_17__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_8__services_groups_service__["a" /* GroupsService */],
            __WEBPACK_IMPORTED_MODULE_5__services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_23__services_friends_service__["a" /* FriendsService */],
            __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_10__services_orders_service__["a" /* OrderService */],
            __WEBPACK_IMPORTED_MODULE_24__services_util_service__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_25__services_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_26__services_home_service__["a" /* HomeService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_notification_service__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacebookloginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FacebookloginComponent = (function () {
    function FacebookloginComponent(notifyService, route, router, authenticationService, alertService) {
        this.notifyService = notifyService;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
        FB.init({
            appId: '273911746390586',
            cookie: false,
            // the session
            xfbml: true,
            version: 'v2.5' // use graph api version 2.5
        });
    }
    FacebookloginComponent.prototype.onFacebookLoginClick = function () {
        var _this = this;
        var self = this;
        // FB.login({ scope: 'public_profile' });
        FB.login(function () {
            FB.api('/me?fields=name,email,picture', function (response) {
                console.log(response.picture.data.url);
                var obj = {
                    facebookID: response.id,
                    name: response.name,
                    email: response.email,
                    avatar: response.picture.data.url
                };
                self.authenticationService.loginFB(obj)
                    .subscribe(function (data) {
                    self.router.navigate([self.returnUrl]);
                    self.notifyService.sendLoginMessage({ user_id: obj.facebookID });
                }, function (error) {
                    self.alertService.error(error);
                    self.loading = false;
                });
            });
        }, { scope: 'public_profile,email' });
        FB.getLoginStatus(function (response) {
            _this.statusChangeCallback(response);
        });
    };
    FacebookloginComponent.prototype.statusChangeCallback = function (resp) {
        var _this = this;
        if (resp.status === 'connected') {
            var userID = resp.authResponse.userID;
            this.loading = true;
            this.authenticationService.loginFB(userID)
                .subscribe(function (data) {
                _this.router.navigate([_this.returnUrl]);
                var obj = { user_id: userID };
                _this.notifyService.sendLoginMessage(obj);
            }, function (error) {
                _this.alertService.error(error);
                _this.loading = false;
            });
        }
        else if (resp.status === 'not_authorized') {
            console.log("not authorized to facebook");
        }
        else {
            console.log("hello callback from facbooklogin component");
        }
    };
    ;
    FacebookloginComponent.prototype.ngOnInit = function () {
        this.authenticationService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        //
        // 
    };
    return FacebookloginComponent;
}());
FacebookloginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-facebooklogin',
        template: __webpack_require__(719),
        styles: [__webpack_require__(698)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_notification_service__["a" /* NotificationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */]) === "function" && _e || Object])
], FacebookloginComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=facebooklogin.component.js.map

/***/ }),

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_friends_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_util_service__ = __webpack_require__(115);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendSearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Observable class extensions

// Observable operators






var FriendSearchComponent = (function () {
    function FriendSearchComponent(friendService, authService, utilSerivse) {
        this.friendService = friendService;
        this.authService = authService;
        this.utilSerivse = utilSerivse;
        this.following = false;
        this.blocked = false;
        this.notifyAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.notifyDelete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.notifyUnBlock = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    FriendSearchComponent.prototype.search = function (term) {
        var _this = this;
        if (term != '')
            this.friendService.search({ field: "email", q: term, from: this.authService.getCurrentUser()._id })
                .subscribe(function (data) {
                _this.user = data[0];
                if (typeof _this.user != 'undefined' && _this.utilSerivse.objectPropInArray(_this.friends, '_id', _this.user._id)) {
                    _this.following = true;
                }
                else if (typeof _this.user != 'undefined' && _this.utilSerivse.objectPropInArray(_this.blockList, '_id', _this.user._id)) {
                    _this.blocked = true;
                }
                else {
                    _this.blocked = false;
                    _this.following = false;
                }
            }, function (error) {
                console.log(error);
            });
    };
    FriendSearchComponent.prototype.makeFreind = function () {
        var _this = this;
        this.query = { reqFrom: this.authService.getCurrentUser()._id, reqTo: this.user._id };
        this.friendService.makeFriendShip(this.query)
            .subscribe(function (data) {
            if (!data.error) {
                _this.notifyAdd.emit(_this.user);
                _this.user = null;
            }
        }, function (error) {
            console.log(error);
        });
    };
    FriendSearchComponent.prototype.deleteFollower = function () {
        var _this = this;
        var query = { reqFrom: this.authService.getCurrentUser()._id, reqTo: this.user._id };
        this.friendService.deleteFriend(query)
            .then(function (deleteFriend) {
            _this.deleteFriend = deleteFriend;
            _this.notifyDelete.emit(_this.user);
            _this.user = null;
        });
    };
    FriendSearchComponent.prototype.unBlockFollower = function () {
        this.notifyUnBlock.emit(this.user);
        this.user = null;
    };
    FriendSearchComponent.prototype.ngOnInit = function () {
    };
    return FriendSearchComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], FriendSearchComponent.prototype, "friends", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], FriendSearchComponent.prototype, "blockList", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], FriendSearchComponent.prototype, "notifyAdd", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], FriendSearchComponent.prototype, "notifyDelete", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], FriendSearchComponent.prototype, "notifyUnBlock", void 0);
FriendSearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-friend-search',
        template: __webpack_require__(720),
        styles: [__webpack_require__(699)]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_friends_service__["a" /* FriendsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_friends_service__["a" /* FriendsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__services_util_service__["a" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_util_service__["a" /* UtilService */]) === "function" && _f || Object])
], FriendSearchComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=friend-search.component.js.map

/***/ }),

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GroupInfoComponent = (function () {
    function GroupInfoComponent() {
    }
    GroupInfoComponent.prototype.ngOnInit = function () {
    };
    return GroupInfoComponent;
}());
GroupInfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-group-info',
        template: __webpack_require__(722),
        styles: [__webpack_require__(701)]
    }),
    __metadata("design:paramtypes", [])
], GroupInfoComponent);

//# sourceMappingURL=group-info.component.js.map

/***/ }),

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_util_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_notification_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_notifications_src_app_components_notification_component__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_notifications_src_app_components_notification_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_notifications_src_app_components_notification_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NotificationsComponent = (function () {
    function NotificationsComponent(authenticationService, notifyService, _util, router) {
        this.authenticationService = authenticationService;
        this.notifyService = notifyService;
        this._util = _util;
        this.router = router;
        this.messages = [{}];
        this.staticAlertClosed = false;
        this.notificationMessage = {};
        this.cssClasses = {};
        this.countNotification = 0;
        this.notificationMessage['title'] = "hi";
        this.notificationMessage['body'] = "hi";
        this.notificationMessage['icon'] = "https://goo.gl/3eqeiE";
    }
    NotificationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var obj = { user_id: this.authenticationService.getCurrentUser()._id };
        this.notifyService.sendLoginMessage(obj);
        this.connection = this.notifyService.getMessages().subscribe(function (message) {
            _this.countNotification++;
            _this.notificationReaded = false;
            _this.staticAlertClosed = true;
            _this.notificationMessage['title'] = message['notification']['name'];
            _this.notificationMessage['body'] = message['notification']['body'];
            _this.notificationMessage['icon'] = 'http://localhost:8090/uploads/' + message['notification']['avatar'];
            _this.notifyService.setFollower(message['user']);
            _this.pushNotification.show();
            console.log(message);
            if (message.type == "friend") {
                var link = "friends";
                _this.messages.push({ body: message.notification.body, link: link });
            }
        });
        this.getNotiFromDb();
    };
    NotificationsComponent.prototype.getNotiFromDb = function () {
        var _this = this;
        if (this.authenticationService.isLoggedIn())
            this.notifyService.getMessagesFromDb(this.authenticationService.getCurrentUser()._id).then(function (message) {
                _this.notificationReaded = message.read_notification;
                if (message) {
                    _this.cssClasses = _this.getCssClasses('notify');
                    _this.countNotification = 0;
                    for (var i = 0; i < message['notifications'].length; i++) {
                        _this.countNotification++;
                        if (message['notifications'][i].type == "friend") {
                            var link = "friends";
                            _this.messages.push({ body: message['notifications'][i].body, link: link });
                        }
                    }
                    if (_this.notificationReaded) {
                        _this.countNotification = 0;
                    }
                }
                else {
                    _this.cssClasses = _this.getCssClasses('normal');
                }
            });
    };
    NotificationsComponent.prototype.pushNotiAction = function () {
        this.router.navigateByUrl("/");
    };
    NotificationsComponent.prototype.ngOnDestroy = function () {
        this.connection.unsubscribe();
    };
    NotificationsComponent.prototype.getNotiObj = function (pushNotification) {
        this.pushNotification = pushNotification;
    };
    NotificationsComponent.prototype.getCssClasses = function (flag) {
        var cssClasses;
        if (flag == 'normal') {
            cssClasses = {
                'nav-link': true,
            };
        }
        else {
            cssClasses = {
                'nav-link': true,
            };
        }
        return cssClasses;
    };
    NotificationsComponent.prototype.sendRead = function () {
        var _this = this;
        this.notifyService.sendReadnotiState(this.authenticationService.getCurrentUser()._id).then(function (response) {
            _this.response = response;
            if (_this.response.mission) {
                _this.countNotification = 0;
                _this.notificationReaded = true;
            }
        });
    };
    return NotificationsComponent;
}());
NotificationsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        entryComponents: [__WEBPACK_IMPORTED_MODULE_4_ng2_notifications_src_app_components_notification_component__["PushNotificationComponent"]],
        selector: 'app-notifications',
        template: __webpack_require__(726),
        styles: [__webpack_require__(705)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_notification_service__["a" /* NotificationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_util_service__["a" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_util_service__["a" /* UtilService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _d || Object])
], NotificationsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=notifications.component.js.map

/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserCardComponent = (function () {
    function UserCardComponent(_auth) {
        this._auth = _auth;
        this.buttonClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    UserCardComponent.prototype.ngOnInit = function () {
    };
    UserCardComponent.prototype.getCssClasses = function () {
        var cssClasses = ["user-card"];
        if (this.cssClass) {
            cssClasses.push(this.cssClass);
        }
        else {
            cssClasses.push("card");
        }
        return cssClasses;
    };
    UserCardComponent.prototype.doClick = function (event) {
        this.buttonClicked.emit(this.user);
    };
    return UserCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], UserCardComponent.prototype, "user", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], UserCardComponent.prototype, "button", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], UserCardComponent.prototype, "badge", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], UserCardComponent.prototype, "cssClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], UserCardComponent.prototype, "buttonClicked", void 0);
UserCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'user-card',
        template: __webpack_require__(730),
        styles: [__webpack_require__(709)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object])
], UserCardComponent);

var _a;
//# sourceMappingURL=user-card.component.js.map

/***/ }),

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 696:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 697:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "body {\n\n}\n\n.navbar {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n\n.avatar{\n  background: url(\"/https:/github.com/muhammad-habib/Angular2-Ordering-system/src/assets/images/default-avatar.jpg\");\n}\n\n\n.navbar-avatar {\n  width: 32px;\n  height: 32px;\n  margin-bottom: -.5rem;\n  margin-top: -.5rem;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 698:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 699:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "\n.input-group {\n margin-bottom: 30px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 700:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, ".tabContent{\n  margin-top: 30px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 702:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, ".input-group{\n      margin-bottom: 1rem;\n}\n.groupInfo{\n    margin-bottom: .5rem;\n}\n.noGroup{\n    margin-top: 2rem;\n}\n  .selected {\n    background-color: #CFD8DC !important;\n    color: black;\n  }\n  .heroes {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .heroes li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .heroes li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: blue;\n  }\n  .heroes li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .heroes .text {\n    position: relative;\n    top: 1px;\n  }\n  .heroes .badge {\n    display: inline-block;\n    font-size: small;\n    color: black;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 703:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 704:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 705:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 708:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 709:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, ".card {\n  margin-bottom: 25px;\n}\n\n.card-img-holder {\n  position: relative;\n}\n\n.card-badge {\n  position: absolute;\n  bottom: 5px;\n  left: 5px;\n}\n\n.card-friend-comp{\n  margin-top: 30px;\n  margin-right: 10px;\n  width: 8rem;\n}\n\n.badge-success {\n  background-color: #5cb85c;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 716:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>\n"

/***/ }),

/***/ 717:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"display-4 text-center\"><i class=\"fa fa-plus\"></i> Add Order</h1>\n\n<div class=\"jumbotron\">\n\n  <div class=\"row\">\n\n    <div class=\"col-md-6\">\n      <h2><i class=\"fa fa-list\"></i> Order Details</h2>\n      <form name=\"form\" (ngSubmit)=\"f.form.valid && addOrder()\" #f=\"ngForm\" novalidate>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-danger': f.submitted && !order_for.valid }\">\n          <label>Order For</label>\n          <select class=\"form-control\" name=\"order_for\" [(ngModel)]=\"model.order_for\" #order_for=\"ngModel\" required>\n            <option *ngFor=\"let value of order_for_values\" [ngValue]=\"value\">{{value}}</option>\n          </select>\n          <div *ngIf=\"f.submitted && !order_for.valid\" class=\"form-control-feedback\">Order For is required</div>\n        </div>\n\n        <div class=\"form-group\" [ngClass]=\"{ 'has-danger': f.submitted && !restaurant_name.valid }\">\n          <label>Restaurant Name</label>\n          <input type=\"text\" class=\"form-control\" name=\"restaurant_name\" [(ngModel)]=\"model.restaurant_name\"\n                 #restaurant_name=\"ngModel\" required/>\n          <div *ngIf=\"f.submitted && !restaurant_name.valid\" class=\"form-control-feedback\">Restaurant Name is required\n          </div>\n        </div>\n\n        <div class=\"form-group\" [ngClass]=\"{ 'has-danger': !tmp.invite_valid }\">\n          <label>Participants</label>\n\n          <div class=\"input-group\">\n            <div class=\"input-group-btn\" ngbDropdown>\n              <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" ngbDropdownToggle>\n                {{invite_by}}\n              </button>\n              <div class=\"dropdown-menu\">\n                <a class=\"dropdown-item\" *ngFor=\"let value of invite_by_values\" (click)=\"invite_by = value\">{{value}}</a>\n              </div>\n            </div>\n\n            <template #inviteTemplate let-r=\"result\" let-t=\"term\">\n              <img *ngIf=\"invite_by == 'Friends'\" [src]=\"_auth.userAvatarSrc(r)\" width=\"16\">\n              {{ r.name }}\n            </template>\n\n            <input type=\"text\" class=\"form-control\" name=\"invite\" [ngbTypeahead]=\"search\"\n                   [resultTemplate]=\"inviteTemplate\"\n                   [inputFormatter]=\"formatter\" (selectItem)=\"inviteItemTmp($event)\"/>\n            <span class=\"input-group-btn\">\n              <button class=\"btn btn-secondary\" type=\"button\" (click)=\"inviteItemHandle()\">Invite</button>\n            </span>\n\n          </div>\n\n          <div *ngIf=\"!tmp.invite_valid\" class=\"form-control-feedback\">User Already Exists.</div>\n\n        </div>\n\n        <div class=\"form-group\" [ngClass]=\"{ 'has-danger': !menu_photo.valid || (f.submitted && !model.photo) }\">\n          <label>Menu Image</label>\n          <input type=\"file\" class=\"form-control\" name=\"photo\" ng2FileSelect [uploader]=\"uploader\" (change)=\"uploader.uploadAll()\"/>\n          <div *ngIf=\"!menu_photo.valid\" class=\"form-control-feedback\">{{menu_photo.error}}</div>\n          <div *ngIf=\"f.submitted && !model.photo\" class=\"form-control-feedback\">Menu Image is required</div>\n        </div>\n\n        <div class=\"form-group\">\n          <button [disabled]=\"loading\" class=\"btn btn-primary\">Publish</button>\n          <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        </div>\n\n      </form>\n    </div>\n\n    <div class=\"col-md-6\">\n      <h2><i class=\"fa fa-users\"></i> Friends Invited</h2>\n\n      <div class=\"row\">\n        <div class=\"col-sm-4\" *ngFor=\"let user of invited_users\">\n          <user-card [user]=\"user\" [button]=\"{text:'Remove',class:'btn-danger'}\" (buttonClicked)=\"removeUser($event)\"></user-card>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ 718:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <nav class=\"navbar  navbar-light  navbar-toggleable-md\" style=\"background-color: #eceeef;\">\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\"\n            data-target=\"#containerNavbar\" aria-controls=\"containerNavbar\" aria-expanded=\"false\"\n            aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"containerNavbar\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"['/']\"><i class=\"fa fa-home\"></i> Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li *ngIf=\"!_auth.isLoggedIn()\" class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/login']\"><i class=\"fa fa-user\"></i> Login</a>\n        </li>\n        <li *ngIf=\"!_auth.isLoggedIn()\" class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/register']\"><i class=\"fa fa-unlock\"></i> Register</a>\n        </li>\n        <li *ngIf=\"_auth.isLoggedIn()\" class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/orders']\"><i class=\"fa fa-cutlery\"></i> Orders</a>\n        </li>\n        <li *ngIf=\"_auth.isLoggedIn()\" class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/add-order']\"><i class=\"fa fa-plus\"></i> Add Order</a>\n        </li>\n        <li *ngIf=\"_auth.isLoggedIn()\" class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/friends']\"><i class=\"fa fa-user-plus\"></i> Friends</a>\n        </li>\n        <li *ngIf=\"_auth.isLoggedIn()\" class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/groups']\"><i class=\"fa fa-group\"></i> Groups</a>\n        </li>\n\n      </ul>\n\n      <ul class=\"navbar-nav\" *ngIf=\"_auth.isLoggedIn()\">\n        <li class=\"nav-item\">\n          <app-notifications></app-notifications>\n        </li>\n\n        <li ngbDropdown class=\"nav-item\">\n          <a class=\"nav-link\" ngbDropdownToggle>\n            <img class=\"img-fluid navbar-avatar rounded-circle\" [src]=\"_auth.userAvatarSrc(_auth.getCurrentUser())\">\n            {{_auth.getCurrentUser().name}}\n          </a>\n          <div class=\"dropdown-menu\">\n            <a (click)=\"_auth.logout()\" href=\"#\" class=\"dropdown-item\">\n              Logout\n            </a>\n          </div>\n        </li>\n      </ul>\n\n    </div>\n  </nav>\n  <div class=\"container\">\n    <alert>\n    </alert>\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ 719:
/***/ (function(module, exports) {

module.exports = "<div>\n\t<button class=\"btn btn-lg btn-social btn-facebook\" style=\"font-size: 1.5em;\" (click)=\"onFacebookLoginClick()\">\n\t    <i class=\"fa fa-facebook fa-fw\"></i>Sign in with Facebook\n\t</button>\n</div>"

/***/ }),

/***/ 720:
/***/ (function(module, exports) {

module.exports = "<div class=\"input-group\">\n  <input type=\"text\" class=\"form-control small\" #searchBox  (keyup)=\"search(searchBox.value)\" placeholder=\"Search for Friends...\">\n  <span class=\"input-group-btn\">\n    <button class=\"btn btn-secondary\" (click)=\"search(searchBox.value)\" type=\"button\">Search!</button>\n  </span>\n</div>\n<div *ngIf=\"user\">\n  <user-card [user]=\"user\" [button]=\"{text:'Follow',class:'btn-success'}\" (buttonClicked)=\"makeFreind()\" *ngIf=\"!following && !blocked\"></user-card>\n  <user-card [user]=\"user\" [button]=\"{text:'Un Follow',class:'btn-danger'}\" (buttonClicked)=\"deleteFollower()\" *ngIf=\"following && !blocked\"></user-card>\n  <user-card [user]=\"user\" [button]=\"{text:'Un Block',class:'btn-success'}\" (buttonClicked)=\"unBlockFollower()\" *ngIf=\"!following && blocked\"></user-card>\n\n</div>\n"

/***/ }),

/***/ 721:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-9\">\n      <ngb-tabset>\n        <ngb-tab>\n          <template ngbTabTitle>Followings</template>\n          <template ngbTabContent>\n            <div class=\"card-group\">\n              <user-card *ngFor=\"let friend of friends\" [user]=\"friend\" [cssClass]=\"'card-friend-comp'\" [button]=\"{text:'Un Follow',class:'btn-danger'}\" (buttonClicked)=\"deleteFollower(friend)\"></user-card>\n            </div>\n          </template>\n        </ngb-tab>\n        <ngb-tab>\n          <template ngbTabTitle>Followers</template>\n          <template ngbTabContent>\n            <div class=\"card-group\">\n              <user-card *ngFor=\"let follower of followers\" [user]=\"follower\" [cssClass]=\"'card-friend-comp'\" [button]=\"{text:'Block',class:'btn-danger'}\" (buttonClicked)=\"blockFollower(follower)\"></user-card>\n            </div>\n          </template>\n        </ngb-tab>\n        <ngb-tab>\n          <template ngbTabTitle>Block List</template>\n          <template ngbTabContent>\n            <div class=\"card-group\">\n              <user-card *ngFor=\"let blocked of blockList\" [user]=\"blocked\" [cssClass]=\"'card-friend-comp'\" [button]=\"{text:'Un Block',class:'btn-success'}\" (buttonClicked)=\"unBlockFollower(blocked)\"></user-card>\n            </div>\n          </template>\n        </ngb-tab>\n      </ngb-tabset>\n    </div>\n    <div class=\"col-3\">\n      <app-friend-search [friends]=\"friends\" [blockList]=\"blockList\" (notifyUnBlock)=\"unBlockFollower($event)\" (notifyDelete)=\"onDeleteNotify($event)\" (notifyAdd)='onAddNotify($event)'></app-friend-search>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 722:
/***/ (function(module, exports) {

module.exports = "<p>\n  group-info works!\n</p>\n"

/***/ }),

/***/ 723:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row jumbotron\">\n  <div class=\"col-md-3\">\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <h4 style=\"    margin-bottom: 1rem;\">My Groups</h4>\n    <div *ngIf=\"!groupValid\" class=\"alert alert-danger\" role=\"alert\">\n      <strong>Oh snap!</strong> This Group Already exists.\n    </div>\n    <div class=\"input-group\">\n      <input type=\"text\" class=\"form-control\" #groupName (keydown)=\"onKey()\" >\n      <span class=\"input-group-btn\">\n      <button class=\"btn btn-secondary\" (click)=\"addGroup(groupName)\"><i class=\"fa  fa-plus-square\"></i>  add group</button>\n    </span>\n    </div>\n  </div>\n  <div   class=\"col-md-12\">\n\n    <ul class=\"list-group\">\n      <li class=\"list-group-item justify-content-between \" *ngFor=\"let group of groups\" [class.selected]=\"hers === selectedHero\" (click)=\"onSelect(group)\">\n\n         {{group.name}}\n        <span class=\"badge badge-default badge-pill\">{{group?.members.length}} </span>\n\n      </li>\n    </ul>\n  </div>\n</div>\n\n    </div>\n  <div class=\"col-md-9\">\n    <div class=\"row\">\n      <div *ngIf=\"groups?.length!=0\"  class=\"col-md-12 groupInfo\">\n        <h3 style=\"display: inline;\" class=\"\"><span class=\"badge badge-default\">{{currentGroup?.name}} group</span></h3>\n        &nbsp;\n        <button  (click)=\"deleteGroup()\"\n                class=\"btn btn-sm btn-danger\"><i class=\"fa fa-remove\"></i></button>\n      </div>\n      <div *ngIf=\"noGroups\" class=\"col-md-12 alert alert-danger noGroup\" role=\"alert\">\n        <strong>Oh snap!</strong> You have no groups yet\n      </div>\n\n      <div *ngIf=\"!noGroups\" class=\"col-md-12\">\n\n        <template #inviteTemplate let-r=\"result\" let-t=\"term\">\n          <img [src]=\"_auth.userAvatarSrc(r)\" width=\"16\">\n          {{ r.name }}\n        </template>\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\" name=\"invite\" [ngbTypeahead]=\"search\"\n                 [resultTemplate]=\"inviteTemplate\"\n                 [inputFormatter]=\"formatter\" (selectItem)=\"inviteItemTmp($event)\" (keydown)=\"memberKey()\" #friendName/>\n          <span class=\"input-group-btn\">\n            <button class=\"btn btn-secondary\" type=\"button\" (click)=\"inviteItemHandle(friendName)\"><i class=\"fa fa-user-plus\"></i> add</button>\n          </span>\n        </div>\n      </div>\n      <div class=\"col-md-12\">\n        <div *ngIf=\"!tmp.invite_valid\" class=\"alert alert-danger\" role=\"alert\">User Already Exists.</div>\n        <div class=\"row\">\n          <div class=\"col-md-3\" *ngFor=\"let user of members\">\n              <user-card [user]=\"user\" [button]=\"{text:'Remove',class:'btn-danger'}\" (buttonClicked)=\"removeUser($event)\"></user-card>\n          </div>\n        </div>\n\n\n\n      </div>\n    </div>\n\n\n  <!-- <div class=\"row \">\n\n\n  </div>\n  <div class=\"row\">\n\n  </div> -->\n\n\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ 724:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!islogged\" class=\"container text-center\">\n  <img src=\"../assets/images/yalaNotlop.png\" alt=\"\" style=\"width: 60%;\">\n</div>\n\n<div *ngIf=\"islogged\" class=\"row\">\n  <div class=\"col-md-6\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h3>Latest Orders</h3>\n      </div>\n      <div class=\"col-md-12\">\n        <div class=\"list-group\">\n          <a [routerLink]=\"['/order-details',order._id]\" *ngFor=\"let order of myOrders\"\n             class=\"list-group-item list-group-item-action flex-column align-items-start \">\n            <div class=\"d-flex w-100 justify-content-between\">\n              <h5 class=\"mb-1\">{{order.order_for}} order</h5>\n              <small>3 days ago</small>\n            </div>\n            <p class=\"mb-1\">form {{order.restaurant_name}}</p>\n            <small>{{order.meals.length}} friends has joined you</small>\n          </a>\n\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\" col-md-6\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h3>Friends Activities</h3>\n      </div>\n      <div class=\"col-md-12\">\n        <div class=\"list-group\">\n          <a [routerLink]=\"['/order-details',order._id]\" *ngFor=\"let order of friendsOrders\"\n             class=\"list-group-item list-group-item-action flex-column align-items-start \">\n            <div class=\"d-flex w-100 justify-content-between\">\n              <h5 class=\"mb-1\">{{order.order_for}} order</h5>\n              <small>3 days ago</small>\n            </div>\n            <p class=\"mb-1\">{{order.owner.name}} ordered form {{order.restaurant_name}}</p>\n            <small>{{order.meals.length}} friends has joined him</small>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 725:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6 offset-md-3\">\n\n    <h1 class=\"display-4 text-center\"><i class=\"fa fa-user\"></i> Login</h1>\n\n    <div class=\"jumbotron\">\n      <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-danger': f.submitted && !email.valid }\">\n          <label>Email</label>\n          <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" required/>\n          <div *ngIf=\"f.submitted && !email.valid\" class=\"form-control-feedback\">Email is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-danger': f.submitted && !password.valid }\">\n          <label>Password</label>\n          <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\"\n                 required/>\n          <div *ngIf=\"f.submitted && !password.valid\" class=\"form-control-feedback\">Password is required</div>\n        </div>\n        <div class=\"form-group\">\n          <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n          <img *ngIf=\"loading\"\n               src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\n          <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\n        </div> \n      </form>\n     <app-facebooklogin></app-facebooklogin>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ 726:
/***/ (function(module, exports) {

module.exports = "<push-notification #notifications\n                   [title]=\"notificationMessage.title\"\n                   [body]=\"notificationMessage.body\"\n                   [icon]=\"notificationMessage.icon\" (load)=\"getNotiObj(notifications)\">>\n</push-notification>\n<div class=\"col\">\n  <ngb-alert *ngIf=\"alert\">{{alert}}</ngb-alert>\n  <div ngbDropdown class=\"d-inline-block\">\n    <a href=\"#\" class=\"nav-link\" (click)=\"sendRead()\" ngbDropdownToggle>\n      <i class=\"fa fa-globe\"></i> Notifications\n      <span class=\"badge badge-pill badge-default\" *ngIf=\"!notificationReaded\">{{countNotification}}</span>\n    </a>\n    <div class=\"dropdown-menu\">\n      <a *ngFor=\"let message of messages\" class=\"dropdown-item\" [routerLink]=\"message.link\">{{message.body}}</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 727:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"display-4 text-center\"><i class=\"fa fa-list\"></i> Order Details</h1>\n\n<template #menu_content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{order.restaurant_name}}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>\n      <img class=\"rounded img-fluid\" [src]=\"menuPhotoSrc()\">\n    </p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</template>\n\n<div class=\"jumbotron\">\n  <div class=\"row\">\n    <div class=\"col-md-7\">\n      <h2>\n        <i class=\"fa fa-bell\"></i> {{order.restaurant_name}}\n        <button class=\"btn btn-sm btn-secondary pull-right\" (click)=\"viewMenu(menu_content)\"><i class=\"fa fa-list\"></i>\n          View Menu\n        </button>\n      </h2>\n      <table class=\"table table-striped\">\n        <thead>\n        <tr>\n          <th>Person</th>\n          <th>Item</th>\n          <th>Amount</th>\n          <th>Price</th>\n          <th>Comment</th>\n          <th>#</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let meal of order.meals\">\n          <td>{{meal.owner.name}}</td>\n          <td>{{meal.name}}</td>\n          <td>{{meal.amount}}</td>\n          <td>{{meal.price | currency:'EGP':true:'1.2-2'}}</td>\n          <td>{{meal.comment}}</td>\n          <td>\n            <button *ngIf=\"meal.owner._id == _auth.getCurrentUser()._id || order.owner._id == _auth.getCurrentUser()._id\" (click)=\"removeMeal(meal._id)\"\n                    class=\"btn btn-sm btn-danger\"><i class=\"fa fa-remove\"></i></button>\n          </td>\n        </tr>\n        <tr class=\"table-active\">\n          <th>Totals</th>\n          <th></th>\n          <th>{{totals.quantity}}</th>\n          <th>{{totals.price | currency:'EGP':true:'1.2-2'}}</th>\n          <th></th>\n          <th></th>\n        </tr>\n        </tbody>\n\n      </table>\n      <form *ngIf=\"addPermession\" name=\"form\" (ngSubmit)=\"f.form.valid && addMeal()\" #f=\"ngForm\" novalidate>\n        <div class=\"row\">\n          <div class=\"col-4\">\n            <div class=\"form-group\">\n              <label class=\"sr-only\">Item</label>\n              <input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Item\" [(ngModel)]=\"model.name\"\n                     #name=\"ngModel\" required>\n            </div>\n          </div>\n          <div class=\"col-2\">\n            <div class=\"form-group\">\n              <label class=\"sr-only\">Amount</label>\n              <input type=\"number\" class=\"form-control\" name=\"amount\" placeholder=\"Amount\" value=\"1\"\n                     [(ngModel)]=\"model.amount\" #amount=\"ngModel\" required>\n            </div>\n          </div>\n          <div class=\"col-2\">\n            <div class=\"form-group\">\n              <label class=\"sr-only\">Price</label>\n              <input type=\"number\" class=\"form-control\" name=\"price\" placeholder=\"Price\" [(ngModel)]=\"model.price\"\n                     #price=\"ngModel\" required>\n            </div>\n          </div>\n          <div class=\"col-4\">\n            <div class=\"form-group\">\n              <label class=\"sr-only\">Comment</label>\n              <input type=\"text\" class=\"form-control\" name=\"comment\" placeholder=\"Comment\" [(ngModel)]=\"model.comment\"\n                     #comment=\"ngModel\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <button [disabled]=\"loading\" class=\"btn btn-secondary\">Add</button>\n            <img *ngIf=\"loading\"\n                 src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"col-md-5\">\n      <h2><i class=\"fa fa-users\"></i> Friends Invited</h2>\n      <div class=\"row\">\n        <div class=\"col-sm-4\" *ngFor=\"let user of invited_users\">\n          <user-card *ngIf=\"order.owner._id == _auth.getCurrentUser()._id\" [user]=\"user\" [badge]=\"user.badge\"\n                     [button]=\"{text:'Remove',class:'btn-danger'}\"\n                     (buttonClicked)=\"removeUser(user._id)\"></user-card>\n          <user-card *ngIf=\"order.owner._id != _auth.getCurrentUser()._id\" [user]=\"user\"\n                     [badge]=\"user.badge\"></user-card>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 728:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <!-- first row -->\n  <div class=\"col-md-12\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"col-md-4\" style=\"display: inline-block;\">\n            <h3 style=\"display: inline-block;\">My Orders</h3>\n          </div>\n        </div>\n    </div>\n  </div>\n  <!-- second row -->\n  <div class=\"col-md-12\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <table class=\" table table-hover table-bordered\">\n          <thead>\n            <tr>\n\n              <th colspan=\"2\">Order</th>\n              <th>Restrunat</th>\n              <th>Invited</th>\n              <th>Joined</th>\n              <th>Status</th>\n              <th>Actions</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr [routerLink]=\"['/order-details',order._id]\" *ngFor=\"let order of myOrders\">\n              <td>{{order.order_for}}</td>\n              <td colspan=\"2\">{{order.restaurant_name}}</td>\n              <td>{{order.invited.length}}</td>\n              <td>{{order.meals.length}}</td>\n\n              <td>Otto</td>\n              <td><i class=\"fa fa-plus\"></i>&nbsp; &nbsp; &nbsp;  <i class=\"fa fa-remove\"></i></td>\n            </tr>\n\n\n          </tbody>\n      </table>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ 729:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6 offset-md-3\">\n\n    <h1 class=\"display-4 text-center\"><i class=\"fa fa-user\"></i> Create Account</h1>\n\n    <div class=\"jumbotron\">\n      <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-danger': f.submitted && !name.valid }\">\n          <label>Name</label>\n          <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"model.name\" #name=\"ngModel\" required />\n          <div *ngIf=\"f.submitted && !name.valid\" class=\"form-control-feedback\">name is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-danger': f.submitted && !email.valid }\">\n          <label>Email</label>\n          <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" required />\n          <div *ngIf=\"f.submitted && !email.valid\" class=\"form-control-feedback\">email is required</div>\n        </div>\n\n        <div class=\"form-group\" [ngClass]=\"{ 'has-danger': f.submitted && !password.valid }\">\n          <label>Password</label>\n          <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n          <div *ngIf=\"f.submitted && !password.valid\" class=\"form-control-feedback\">Password is required</div>\n        </div>\n\n        <div class=\"form-group\" [ngClass]=\"{ 'has-danger': !avatar.valid }\">\n          <label>Avatar</label>\n          <input type=\"file\" class=\"form-control\" name=\"photo\" ng2FileSelect [uploader]=\"uploader\" (change)=\"uploader.uploadAll()\"/>\n          <div *ngIf=\"!avatar.valid\" class=\"form-control-feedback\">{{avatar.error}}</div>\n          <div *ngIf=\"f.submitted && !model.avatar\" class=\"form-control-feedback\">Avatar is required</div>\n        </div>\n\n        <div class=\"form-group\">\n          <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n          <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n          <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\n        </div>\n      </form>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ 730:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user.name\" [ngClass]=\"getCssClasses()\">\n  <div class=\"card-img-holder\">\n    <img class=\"card-img-top img-fluid avatar\" [src]=\"_auth.userAvatarSrc(user)\" alt=\"{{user.name}}\">\n    <span *ngIf=\"badge\" class=\"card-badge badge {{badge.class}}\"><i class=\"fa fa-{{badge.icon}}\"></i> {{badge.text}}</span>\n  </div>\n  <div class=\"card-block\">\n    <strong class=\"card-title\">{{user.name}}</strong>\n    <button *ngIf=\"button\" class=\"btn btn-sm {{button.class}}\" (click)=\"doClick($event)\">{{button.text}}</button>\n  </div>\n</div>\n"

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationStart */]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    return AlertService;
}());
AlertService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AlertService);

var _a;
//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_settings__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FriendsService = (function () {
    function FriendsService(http) {
        this.http = http;
        this.verifyDelete = false;
    }
    FriendsService.prototype.makeFriendShip = function (query) {
        var searchUrl = __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/follow/add';
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        params.set('from', query.reqFrom);
        params.set('to', query.reqTo);
        var options = this.jwt();
        options.search = params;
        return this.http
            .get(searchUrl, options)
            .map(function (response) { return response.json(); });
    };
    FriendsService.prototype.deleteFriend = function (query) {
        var _this = this;
        var Url = __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/follow/delete';
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        params.set('from', query.reqFrom);
        params.set('to', query.reqTo);
        var options = this.jwt();
        options.search = params;
        return this.http.get(Url, options)
            .toPromise()
            .then(function (response) {
            _this.verifyDelete = true;
            response.json();
        })
            .catch(this.handleError);
    };
    FriendsService.prototype.blockFriend = function (query) {
        var Url = __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/follow/block';
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        params.set('from', query.reqFrom);
        params.set('to', query.reqTo);
        var options = this.jwt();
        options.search = params;
        return this.http.get(Url, options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    FriendsService.prototype.unBlockFriend = function (query) {
        var _this = this;
        var Url = __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/follow/unblock';
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        params.set('from', query.reqFrom);
        params.set('to', query.reqTo);
        var options = this.jwt();
        options.search = params;
        return this.http.get(Url, options)
            .toPromise()
            .then(function (response) {
            _this.verifyDelete = true;
            response.json();
        })
            .catch(this.handleError);
    };
    FriendsService.prototype.search = function (data) {
        if (data === '') {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].of([]);
        }
        var searchUrl = __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/users/search';
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        params.set('user_id', data.from);
        params.set('field', data.field);
        params.set('q', data.q);
        var options = this.jwt();
        options.search = params;
        console.log(data);
        return this.http
            .get(searchUrl, options)
            .map(function (response) { return response.json(); });
    };
    FriendsService.prototype.getFriends = function (id) {
        var Url = __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/follow/list';
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        params.set('user_id', id);
        var options = this.jwt();
        options.search = params;
        console.log(params);
        return this.http.get(Url, options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    FriendsService.prototype.getBlocked = function (id) {
        var Url = __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/follow/list/block';
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        params.set('user_id', id);
        var options = this.jwt();
        options.search = params;
        console.log(params);
        return this.http.get(Url, options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    FriendsService.prototype.getFollowers = function (id) {
        var Url = __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].API_ENDPOINT + '/follow/list/followers';
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        params.set('user_id', id);
        var options = this.jwt();
        options.search = params;
        console.log(params);
        return this.http.get(Url, options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    FriendsService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    FriendsService.prototype.jwt = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Authorization': 'Bearer ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        }
    };
    return FriendsService;
}());
FriendsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object])
], FriendsService);

var _a;
//# sourceMappingURL=friends.service.js.map

/***/ }),

/***/ 994:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 995:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(501);


/***/ })

},[995]);
//# sourceMappingURL=main.bundle.js.map