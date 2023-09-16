import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetTemplateSpecArgs, GetTemplateSpecResult, GetTemplateSpecOutputArgs } from "./getTemplateSpec";
export const getTemplateSpec: typeof import("./getTemplateSpec").getTemplateSpec = null as any;
export const getTemplateSpecOutput: typeof import("./getTemplateSpec").getTemplateSpecOutput = null as any;
utilities.lazyLoad(exports, ["getTemplateSpec","getTemplateSpecOutput"], () => require("./getTemplateSpec"));

export { GetTemplateSpecVersionArgs, GetTemplateSpecVersionResult, GetTemplateSpecVersionOutputArgs } from "./getTemplateSpecVersion";
export const getTemplateSpecVersion: typeof import("./getTemplateSpecVersion").getTemplateSpecVersion = null as any;
export const getTemplateSpecVersionOutput: typeof import("./getTemplateSpecVersion").getTemplateSpecVersionOutput = null as any;
utilities.lazyLoad(exports, ["getTemplateSpecVersion","getTemplateSpecVersionOutput"], () => require("./getTemplateSpecVersion"));

export { TemplateSpecArgs } from "./templateSpec";
export type TemplateSpec = import("./templateSpec").TemplateSpec;
export const TemplateSpec: typeof import("./templateSpec").TemplateSpec = null as any;
utilities.lazyLoad(exports, ["TemplateSpec"], () => require("./templateSpec"));

export { TemplateSpecVersionArgs } from "./templateSpecVersion";
export type TemplateSpecVersion = import("./templateSpecVersion").TemplateSpecVersion;
export const TemplateSpecVersion: typeof import("./templateSpecVersion").TemplateSpecVersion = null as any;
utilities.lazyLoad(exports, ["TemplateSpecVersion"], () => require("./templateSpecVersion"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:resources/v20220201:TemplateSpec":
                return new TemplateSpec(name, <any>undefined, { urn })
            case "azure-native:resources/v20220201:TemplateSpecVersion":
                return new TemplateSpecVersion(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "resources/v20220201", _module)
