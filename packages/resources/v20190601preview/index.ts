import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetTemplateSpecVersionArgs, GetTemplateSpecVersionResult, GetTemplateSpecVersionOutputArgs } from "./getTemplateSpecVersion";
export const getTemplateSpecVersion: typeof import("./getTemplateSpecVersion").getTemplateSpecVersion = null as any;
export const getTemplateSpecVersionOutput: typeof import("./getTemplateSpecVersion").getTemplateSpecVersionOutput = null as any;
utilities.lazyLoad(exports, ["getTemplateSpecVersion","getTemplateSpecVersionOutput"], () => require("./getTemplateSpecVersion"));

export { TemplateSpecVersionArgs } from "./templateSpecVersion";
export type TemplateSpecVersion = import("./templateSpecVersion").TemplateSpecVersion;
export const TemplateSpecVersion: typeof import("./templateSpecVersion").TemplateSpecVersion = null as any;
utilities.lazyLoad(exports, ["TemplateSpecVersion"], () => require("./templateSpecVersion"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:resources/v20190601preview:TemplateSpecVersion":
                return new TemplateSpecVersion(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "resources/v20190601preview", _module)
