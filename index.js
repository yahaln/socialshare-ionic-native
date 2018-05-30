var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
/**
 * @name socialshare
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { socialshare } from '@ionic-native/socialshare';
 *
 *
 * constructor(private socialshare: socialshare) { }
 *
 * ...
 *
 *
 * this.socialshare.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
var SocialShare = (function (_super) {
    __extends(SocialShare, _super);
    function SocialShare() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    SocialShare.prototype.functionName = function (arg1, arg2) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    SocialShare.prototype.wechatShareText = function (params) { return; };
    SocialShare.prototype.wechatShareImage = function (params) { return; };
    SocialShare.prototype.wechatShareWebPage = function (params) { return; };
    SocialShare.prototype.QQShareImageText = function (params) { return; };
    SocialShare.prototype.QQZoneShareImageText = function (params) { return; };
    SocialShare.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SocialShare.ctorParameters = function () { return []; };
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Number]),
        __metadata("design:returntype", Promise)
    ], SocialShare.prototype, "functionName", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], SocialShare.prototype, "wechatShareText", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], SocialShare.prototype, "wechatShareImage", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], SocialShare.prototype, "wechatShareWebPage", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], SocialShare.prototype, "QQShareImageText", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], SocialShare.prototype, "QQZoneShareImageText", null);
    SocialShare = __decorate([
        Plugin({
            pluginName: 'socialshare',
            plugin: 'cordova-plugin-share',
            pluginRef: 'cordova.plugins.SocialShare',
            repo: 'https://github.com/yahaln/cordova-plugin-socialshare.git',
            install: 'cordova plugin add https://github.com/yahaln/cordova-plugin-socialshare.git --variable WECHAT_APPID=your_wechat_appid --variable QQ_APPID=your_qq_appid',
            installVariables: ['WECHAT_APPID', 'QQ_APPID'],
            platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
        })
    ], SocialShare);
    return SocialShare;
}(IonicNativePlugin));
export { SocialShare };
//# sourceMappingURL=index.js.map