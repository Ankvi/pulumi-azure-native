import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AppArgs } from "./app";
export type App = import("./app").App;
export const App: typeof import("./app").App = null as any;
utilities.lazyLoad(exports, ["App"], () => require("./app"));

export { GetAppArgs, GetAppResult, GetAppOutputArgs } from "./getApp";
export const getApp: typeof import("./getApp").getApp = null as any;
export const getAppOutput: typeof import("./getApp").getAppOutput = null as any;
utilities.lazyLoad(exports, ["getApp","getAppOutput"], () => require("./getApp"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:iotcentral/v20210601:App":
                return new App(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "iotcentral/v20210601", _module)