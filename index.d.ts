import { IonicNativePlugin } from '@ionic-native/core';
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
export declare class SocialShare extends IonicNativePlugin {
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    functionName(arg1: string, arg2: number): Promise<any>;
    wechatShareText(params: any): Promise<any>;
    wechatShareImage(params: any): Promise<any>;
    wechatShareWebPage(params: any): Promise<any>;
    QQShareImageText(params: any): Promise<any>;
    QQZoneShareImageText(params: any): Promise<any>;
}
