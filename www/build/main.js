webpackJsonp([0],{

/***/ 106:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 106;

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forum_list_forum_list__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.goto = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__forum_list_forum_list__["a" /* ForumListPage */]);
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Volumes/Data/FLP Data/Assignment Falak/ForumAppCloned/ForumApp/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<ion-list no-lines>\n\n  <ion-item>\n    <ion-label floating>Username</ion-label>\n    <ion-input type="text"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Password</ion-label>\n    <ion-input type="password"></ion-input>\n  </ion-item>\n  <ion-item>\n  <button ion-button round full (click) = "goto()">login</button>\n\n</ion-item>\n<ion-item>\n\n<button ion-button round full (click) = "signup()">Sign up</button>\n\n</ion-item>\n\n</ion-list>\n<!-- <ion-list>\n\n  <ion-item>\n    <ion-label fixed>Username</ion-label>\n    <ion-input type="text" value=""></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label fixed>Password</ion-label>\n    <ion-input type="password"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <button ion-button full (click) = "goToHome()">Login</button>\n  </ion-item>\n\n\n\n</ion-list> -->\n<!-- <button ion-button color="dark" outline style="text-align: center;" (click)="register()">Register</button>  -->\n\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/Data/FLP Data/Assignment Falak/ForumAppCloned/ForumApp/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topic_detail_topic_detail__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ForumListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ForumListPage = (function () {
    function ForumListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //Hard code Forum List data
        //id, title, description details are bind in HTML
        this.forumList = [{
                id: '1',
                title: 'Announcements ',
                shortDescp: 'General questions relating to Joomla! 3.x. Please consider the availability of third-party templates and extensions when deciding which Joomla version to use.	',
                details: 'I have a website I am working on and am using Joomla 3.7.3 It lives in a subdirectory on my server: mydomain.com/subdirectory I have htaccess code which works great for the homepage. However - when I ADD a page to the main menu - it ignores the htaccess and adds the /mysubdirectory/ back into the public URL.So what I want to be mydomain.com/about appears as [i]mydomain.com/mysubdirectory/about[/i] AND when I click on the homepage - it then gives me mydomain.com/mysubdirectory/ instead of mydomain.com.Its a live site so I really cant experiment too much with it. But if anyone can add some clarity - it would really help.Thanks!',
            },
            {
                id: '1',
                title: 'General Questions/New to Joomla! 3.x ',
                shortDescp: 'Need help installing Joomla! 3.x? For all Joomla! 3.x installation issues please use this forum. Note: Users creating new sites can use either version 2.5 or 3.x. Please consider the availability of third-party templates and extensions when deciding which Joomla version to use.	',
                details: 'For all your questions relating to Joomla 3.X.x that do not relate to any of the other Joomla 3.X.x Board Titles. If it is not a question about Joomla 3.X.x specifically or an Extension, etc., then it does not belong here. Questions relating to the Joomla Extensions Directory (JED) for example should go in the Sites and Infrastructure child forum specifically for this topic. Reporting "bugs" can be a tricky one sometimes, to see if it is an easily (relatively speaking) problem post it here, Moderators can always move it to the Joomla 3.X.x Development Q&T forum once it has been confirmed as a bug or potential bug requiring a detailed look by Developers - who for the most part are too busy to get the chance to visit these "public" forums too often.'
            },
            {
                id: '1',
                title: 'Installation Joomla! 3.x ',
                shortDescp: 'Need help with the Administration of your Joomla! 3.x site? This is the spot for you.	',
                details: 'long details'
            },
            {
                id: '1',
                title: 'Administration Joomla! 3.x ',
                shortDescp: 'Need help upgrading your Joomla! website or converting to Joomla! 3.x? Please consider the availability of third-party templates and extensions when deciding which Joomla version to use',
                details: 'he symptom checklist is as follows:Did you turn off New User Registration in the Options of User Manager? Since J3.4.0The User Registration option is switched OFF by default for new Joomla installations  If you have upgraded from an older version then you may need to change it yourself: On all joomla installations, unless the module code is deleted, the registration form is still available even when you dont have a menu item pointing to it. Spam bots are preprogammed with the non sef link to the module (likewise for drupal and wordpress targetting bots)'
            },
            {
                id: '1',
                title: 'Security in Joomla! 3.x ',
                shortDescp: 'Discussion regarding Joomla! 3.x security issues.	',
                details: '- It doesnt take into consideration the images folder and the media folder. These folders may contain malicious PHP files that may be copied back and that may not be caught by a PC scan.- Some websites have custom extensions that need a lot of work to re-install on the target website. Additionally, these custom extensions may contain some malicious files.- It assumes that the user has all of the installed extensions as packages.- It doesnt take into consideration that the hack might be outside the public_html directory (this is especially the case on shared hosts).- It doesnt take into consideration that the hack might be caused by a cron job (which is the hardest hack to find).- It doesnt take into consideration the .htaccess file - which is typically copied as is from the infected website to the clean website and hacks there are typically not caught by any scanner.- It is not as easy as it seems - in fact - large websites must avoid implementing this method. Making this method look as a very straightforward is misleading and may cause a lot of frustration for website owners/administrators.- It doesnt take into consideration the future of the website - applying the above without further protection will probably get the website hacked the next day.'
            },
            {
                id: '1',
                title: 'Templates for Joomla! 3.x ',
                shortDescp: 'This forum is for general questions about extensions for Joomla! 3.x.	',
                details: 'I have modules: latest articles and related articles in a top section of my template. I would like the related articles module to show when I am on an article page, and latest articles to be displayed on category pages/blog pages and the home page. The issue is that I cannot select down to the article level of the menu when choosing where to display the module in the module display options. I can only tell it not to display on certain categories.I am happy to do this any way but I would like some advice on the best/right way to do this in Joomla 3. I see that I could make my own module that changes content depending on route. Or I could Edit each of the modules so that they only display in the place I want them to (but I dont think this is a very elegant way of doing it).'
            },
            {
                id: '1',
                title: 'Search Engine Optimization (Joomla! SEO) in Joomla! 3.x ',
                shortDescp: 'iscuss Search Engine Optimization in relation to Joomla! 3.x. This forum will also have discussions on SEF/SEO Joomla! 3.x extensions.	',
                details: 'lHi - I am new to Joomla. I have tried several other CMS and think Joomla is my choice, however I can not download a joomla template from joomla unless I have a subdomain.joomla.com website! What are my choices? Do I need to hack into one of the 2 that came with my install folder? I am developing on localhost.'
            },
        ];
    }
    //Life cycle method
    ForumListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForumListPage');
    };
    //Custom Method to Push Page with Parameters
    ForumListPage.prototype.func = function (x) {
        console.log(x);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__topic_detail_topic_detail__["a" /* TopicDetailPage */], { "selected_Item": x });
    };
    return ForumListPage;
}());
ForumListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-forum-list',template:/*ion-inline-start:"/Volumes/Data/FLP Data/Assignment Falak/ForumAppCloned/ForumApp/src/pages/forum-list/forum-list.html"*/'<!--\n  Generated template for the ForumListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>forumList</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<ion-list>\n  <ion-item *ngFor="let x of forumList" (click)="func(x)">\n    <!-- <ion-avatar item-start>\n      <img src="img/avatar-cher.png">\n    </ion-avatar> -->\n    <h2>{{x.title}}</h2>\n    <p>{{x.shortDescp}}</p>\n  </ion-item>\n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/Data/FLP Data/Assignment Falak/ForumAppCloned/ForumApp/src/pages/forum-list/forum-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], ForumListPage);

//# sourceMappingURL=forum-list.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forum_list_details_forum_list_details__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_topic_add_topic__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TopicDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TopicDetailPage = (function () {
    function TopicDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loopVar1 = this.navParams.get('selected_Item');
        //hard oode data for Demo purpose
        this.loopVar = [1, 2, 3, 4, 5, 6, 7, 8];
    }
    TopicDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TopicDetailPage');
    };
    TopicDetailPage.prototype.listDetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__forum_list_details_forum_list_details__["a" /* ForumListDetailsPage */], { "selected_Item": this.loopVar1 });
    };
    TopicDetailPage.prototype.addTopic = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__add_topic_add_topic__["a" /* AddTopicPage */]);
    };
    return TopicDetailPage;
}());
TopicDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-topic-detail',template:/*ion-inline-start:"/Volumes/Data/FLP Data/Assignment Falak/ForumAppCloned/ForumApp/src/pages/topic-detail/topic-detail.html"*/'<!--\n  Generated template for the TopicDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>topicDetail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-card *ngFor = "let x of loopVar" (click)="listDetails()">\n  <img src="assets/forum.jpg"/>\n  <ion-card-content>\n    <ion-card-title>\n      Nine Inch Nails Live\n      </ion-card-title>\n    <p>\n      The most popular industrial group ever, and largely\n      responsible for bringing the music to a mass audience.\n    </p>\n  </ion-card-content>\n</ion-card>\n<ion-fab right bottom>\n    <button ion-fab (click)="addTopic()"><ion-icon name="add"></ion-icon></button>\n    \n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/Data/FLP Data/Assignment Falak/ForumAppCloned/ForumApp/src/pages/topic-detail/topic-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], TopicDetailPage);

//# sourceMappingURL=topic-detail.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumListDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ForumListDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ForumListDetailsPage = (function () {
    function ForumListDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loopVar = this.navParams.get('selected_Item');
    }
    ForumListDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForumListDetailsPage');
    };
    return ForumListDetailsPage;
}());
ForumListDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-forum-list-details',template:/*ion-inline-start:"/Volumes/Data/FLP Data/Assignment Falak/ForumAppCloned/ForumApp/src/pages/forum-list-details/forum-list-details.html"*/'<!--\n  Generated template for the ForumListDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>forumListDetails</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<ion-card>\n  <ion-card-header>\n    Details\n  </ion-card-header>\n  <ion-card-content>\n    {{loopVar.details}}\n  </ion-card-content>\n</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/Data/FLP Data/Assignment Falak/ForumAppCloned/ForumApp/src/pages/forum-list-details/forum-list-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], ForumListDetailsPage);

//# sourceMappingURL=forum-list-details.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTopicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AddTopicPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AddTopicPage = (function () {
    function AddTopicPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    //Life Cycle method
    AddTopicPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddTopicPage');
    };
    //Custom Method for Pop Page from navigation
    AddTopicPage.prototype.post = function () {
        this.navCtrl.pop();
    };
    return AddTopicPage;
}());
AddTopicPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-topic',template:/*ion-inline-start:"/Volumes/Data/FLP Data/Assignment Falak/ForumAppCloned/ForumApp/src/pages/add-topic/add-topic.html"*/'<!--\n  Generated template for the AddTopicPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>addTopic</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<ion-card >\n  <img src="assets/forum.jpg"/>\n  <ion-card-content>\n    <ion-card-title>\n      Topic Title\n      </ion-card-title>\n      <ion-input type="text" placeholder="Write topic title">\n    </ion-input>\n  </ion-card-content>\n  </ion-card>\n  <ion-card >\n  <ion-card-content>\n    <ion-card-title>\n      Topic Detail\n      </ion-card-title>\n      <ion-textarea placeholder="please write your words">\n    </ion-textarea>\n  </ion-card-content>\n  </ion-card>\n  <button ion-button round full (click) = "post()">Post</button>\n\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/Data/FLP Data/Assignment Falak/ForumAppCloned/ForumApp/src/pages/add-topic/add-topic.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], AddTopicPage);

//# sourceMappingURL=add-topic.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.signup = function () {
        this.navCtrl.pop();
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"/Volumes/Data/FLP Data/Assignment Falak/ForumAppCloned/ForumApp/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>signup</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<ion-list>\n\n  <ion-item>\n    <ion-label floating>Full Name</ion-label>\n    <ion-input type="text"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Email</ion-label>\n    <ion-input type="email"></ion-input>\n  </ion-item>\n\n\n  <ion-item>\n    <ion-label floating>Password</ion-label>\n    <ion-input type="password"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Confirm Password</ion-label>\n    <ion-input type="password"></ion-input>\n  </ion-item>\n\n  <ion-item>\n\n<button ion-button round full (click) = "signup()">Sign up</button>\n\n</ion-item>\n\n\n\n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/Data/FLP Data/Assignment Falak/ForumAppCloned/ForumApp/src/pages/signup/signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(216);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_forum_list_forum_list__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_forum_list_details_forum_list_details__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_topic_detail_topic_detail__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_add_topic_add_topic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(266);
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_forum_list_forum_list__["a" /* ForumListPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_forum_list_details_forum_list_details__["a" /* ForumListDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_topic_detail_topic_detail__["a" /* TopicDetailPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_add_topic_add_topic__["a" /* AddTopicPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_forum_list_forum_list__["a" /* ForumListPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_forum_list_details_forum_list_details__["a" /* ForumListDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_topic_detail_topic_detail__["a" /* TopicDetailPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_add_topic_add_topic__["a" /* AddTopicPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { SignupPage } from '../pages/login/login';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Volumes/Data/FLP Data/Assignment Falak/ForumAppCloned/ForumApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Volumes/Data/FLP Data/Assignment Falak/ForumAppCloned/ForumApp/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Volumes/Data/FLP Data/Assignment Falak/ForumAppCloned/ForumApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Data/FLP Data/Assignment Falak/ForumAppCloned/ForumApp/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map