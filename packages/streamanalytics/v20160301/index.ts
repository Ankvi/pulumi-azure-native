import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { FunctionArgs } from "./function";
export type Function = import("./function").Function;
export const Function: typeof import("./function").Function = null as any;
utilities.lazyLoad(exports, ["Function"], () => require("./function"));

export { GetFunctionArgs, GetFunctionResult, GetFunctionOutputArgs } from "./getFunction";
export const getFunction: typeof import("./getFunction").getFunction = null as any;
export const getFunctionOutput: typeof import("./getFunction").getFunctionOutput = null as any;
utilities.lazyLoad(exports, ["getFunction","getFunctionOutput"], () => require("./getFunction"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:streamanalytics/v20160301:Function":
                return new Function(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "streamanalytics/v20160301", _module)
