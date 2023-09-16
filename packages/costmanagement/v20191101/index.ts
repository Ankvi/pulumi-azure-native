import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetSettingArgs, GetSettingResult, GetSettingOutputArgs } from "./getSetting";
export const getSetting: typeof import("./getSetting").getSetting = null as any;
export const getSettingOutput: typeof import("./getSetting").getSettingOutput = null as any;
utilities.lazyLoad(exports, ["getSetting","getSettingOutput"], () => require("./getSetting"));

export { GetViewArgs, GetViewResult, GetViewOutputArgs } from "./getView";
export const getView: typeof import("./getView").getView = null as any;
export const getViewOutput: typeof import("./getView").getViewOutput = null as any;
utilities.lazyLoad(exports, ["getView","getViewOutput"], () => require("./getView"));

export { GetViewByScopeArgs, GetViewByScopeResult, GetViewByScopeOutputArgs } from "./getViewByScope";
export const getViewByScope: typeof import("./getViewByScope").getViewByScope = null as any;
export const getViewByScopeOutput: typeof import("./getViewByScope").getViewByScopeOutput = null as any;
utilities.lazyLoad(exports, ["getViewByScope","getViewByScopeOutput"], () => require("./getViewByScope"));

export { SettingArgs } from "./setting";
export type Setting = import("./setting").Setting;
export const Setting: typeof import("./setting").Setting = null as any;
utilities.lazyLoad(exports, ["Setting"], () => require("./setting"));

export { ViewArgs } from "./view";
export type View = import("./view").View;
export const View: typeof import("./view").View = null as any;
utilities.lazyLoad(exports, ["View"], () => require("./view"));

export { ViewByScopeArgs } from "./viewByScope";
export type ViewByScope = import("./viewByScope").ViewByScope;
export const ViewByScope: typeof import("./viewByScope").ViewByScope = null as any;
utilities.lazyLoad(exports, ["ViewByScope"], () => require("./viewByScope"));


// Export enums:
export * from "../types/enums/v20191101";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:costmanagement/v20191101:Setting":
                return new Setting(name, <any>undefined, { urn })
            case "azure-native:costmanagement/v20191101:View":
                return new View(name, <any>undefined, { urn })
            case "azure-native:costmanagement/v20191101:ViewByScope":
                return new ViewByScope(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "costmanagement/v20191101", _module)
