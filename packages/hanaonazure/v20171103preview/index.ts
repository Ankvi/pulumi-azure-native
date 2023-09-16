import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetHanaInstanceArgs, GetHanaInstanceResult, GetHanaInstanceOutputArgs } from "./getHanaInstance";
export const getHanaInstance: typeof import("./getHanaInstance").getHanaInstance = null as any;
export const getHanaInstanceOutput: typeof import("./getHanaInstance").getHanaInstanceOutput = null as any;
utilities.lazyLoad(exports, ["getHanaInstance","getHanaInstanceOutput"], () => require("./getHanaInstance"));

export { HanaInstanceArgs } from "./hanaInstance";
export type HanaInstance = import("./hanaInstance").HanaInstance;
export const HanaInstance: typeof import("./hanaInstance").HanaInstance = null as any;
utilities.lazyLoad(exports, ["HanaInstance"], () => require("./hanaInstance"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:hanaonazure/v20171103preview:HanaInstance":
                return new HanaInstance(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "hanaonazure/v20171103preview", _module)
