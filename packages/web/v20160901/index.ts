import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AppServicePlanArgs } from "./appServicePlan";
export type AppServicePlan = import("./appServicePlan").AppServicePlan;
export const AppServicePlan: typeof import("./appServicePlan").AppServicePlan = null as any;
utilities.lazyLoad(exports, ["AppServicePlan"], () => require("./appServicePlan"));

export { AppServicePlanRouteForVnetArgs } from "./appServicePlanRouteForVnet";
export type AppServicePlanRouteForVnet = import("./appServicePlanRouteForVnet").AppServicePlanRouteForVnet;
export const AppServicePlanRouteForVnet: typeof import("./appServicePlanRouteForVnet").AppServicePlanRouteForVnet = null as any;
utilities.lazyLoad(exports, ["AppServicePlanRouteForVnet"], () => require("./appServicePlanRouteForVnet"));

export { GetAppServicePlanArgs, GetAppServicePlanResult, GetAppServicePlanOutputArgs } from "./getAppServicePlan";
export const getAppServicePlan: typeof import("./getAppServicePlan").getAppServicePlan = null as any;
export const getAppServicePlanOutput: typeof import("./getAppServicePlan").getAppServicePlanOutput = null as any;
utilities.lazyLoad(exports, ["getAppServicePlan","getAppServicePlanOutput"], () => require("./getAppServicePlan"));

export { ListAppServicePlanHybridConnectionKeysArgs, ListAppServicePlanHybridConnectionKeysResult, ListAppServicePlanHybridConnectionKeysOutputArgs } from "./listAppServicePlanHybridConnectionKeys";
export const listAppServicePlanHybridConnectionKeys: typeof import("./listAppServicePlanHybridConnectionKeys").listAppServicePlanHybridConnectionKeys = null as any;
export const listAppServicePlanHybridConnectionKeysOutput: typeof import("./listAppServicePlanHybridConnectionKeys").listAppServicePlanHybridConnectionKeysOutput = null as any;
utilities.lazyLoad(exports, ["listAppServicePlanHybridConnectionKeys","listAppServicePlanHybridConnectionKeysOutput"], () => require("./listAppServicePlanHybridConnectionKeys"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:web/v20160901:AppServicePlan":
                return new AppServicePlan(name, <any>undefined, { urn })
            case "azure-native:web/v20160901:AppServicePlanRouteForVnet":
                return new AppServicePlanRouteForVnet(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "web/v20160901", _module)
