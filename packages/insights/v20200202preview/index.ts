import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ComponentArgs } from "./component";
export type Component = import("./component").Component;
export const Component: typeof import("./component").Component = null as any;
utilities.lazyLoad(exports, ["Component"], () => require("./component"));

export { GetComponentArgs, GetComponentResult, GetComponentOutputArgs } from "./getComponent";
export const getComponent: typeof import("./getComponent").getComponent = null as any;
export const getComponentOutput: typeof import("./getComponent").getComponentOutput = null as any;
utilities.lazyLoad(exports, ["getComponent","getComponentOutput"], () => require("./getComponent"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:insights/v20200202preview:Component":
                return new Component(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "insights/v20200202preview", _module)
