import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetVariableArgs, GetVariableResult, GetVariableOutputArgs } from "./getVariable";
export const getVariable: typeof import("./getVariable").getVariable = null as any;
export const getVariableOutput: typeof import("./getVariable").getVariableOutput = null as any;
utilities.lazyLoad(exports, ["getVariable","getVariableOutput"], () => require("./getVariable"));

export { GetVariableAtManagementGroupArgs, GetVariableAtManagementGroupResult, GetVariableAtManagementGroupOutputArgs } from "./getVariableAtManagementGroup";
export const getVariableAtManagementGroup: typeof import("./getVariableAtManagementGroup").getVariableAtManagementGroup = null as any;
export const getVariableAtManagementGroupOutput: typeof import("./getVariableAtManagementGroup").getVariableAtManagementGroupOutput = null as any;
utilities.lazyLoad(exports, ["getVariableAtManagementGroup","getVariableAtManagementGroupOutput"], () => require("./getVariableAtManagementGroup"));

export { GetVariableValueArgs, GetVariableValueResult, GetVariableValueOutputArgs } from "./getVariableValue";
export const getVariableValue: typeof import("./getVariableValue").getVariableValue = null as any;
export const getVariableValueOutput: typeof import("./getVariableValue").getVariableValueOutput = null as any;
utilities.lazyLoad(exports, ["getVariableValue","getVariableValueOutput"], () => require("./getVariableValue"));

export { GetVariableValueAtManagementGroupArgs, GetVariableValueAtManagementGroupResult, GetVariableValueAtManagementGroupOutputArgs } from "./getVariableValueAtManagementGroup";
export const getVariableValueAtManagementGroup: typeof import("./getVariableValueAtManagementGroup").getVariableValueAtManagementGroup = null as any;
export const getVariableValueAtManagementGroupOutput: typeof import("./getVariableValueAtManagementGroup").getVariableValueAtManagementGroupOutput = null as any;
utilities.lazyLoad(exports, ["getVariableValueAtManagementGroup","getVariableValueAtManagementGroupOutput"], () => require("./getVariableValueAtManagementGroup"));

export { VariableArgs } from "./variable";
export type Variable = import("./variable").Variable;
export const Variable: typeof import("./variable").Variable = null as any;
utilities.lazyLoad(exports, ["Variable"], () => require("./variable"));

export { VariableAtManagementGroupArgs } from "./variableAtManagementGroup";
export type VariableAtManagementGroup = import("./variableAtManagementGroup").VariableAtManagementGroup;
export const VariableAtManagementGroup: typeof import("./variableAtManagementGroup").VariableAtManagementGroup = null as any;
utilities.lazyLoad(exports, ["VariableAtManagementGroup"], () => require("./variableAtManagementGroup"));

export { VariableValueArgs } from "./variableValue";
export type VariableValue = import("./variableValue").VariableValue;
export const VariableValue: typeof import("./variableValue").VariableValue = null as any;
utilities.lazyLoad(exports, ["VariableValue"], () => require("./variableValue"));

export { VariableValueAtManagementGroupArgs } from "./variableValueAtManagementGroup";
export type VariableValueAtManagementGroup = import("./variableValueAtManagementGroup").VariableValueAtManagementGroup;
export const VariableValueAtManagementGroup: typeof import("./variableValueAtManagementGroup").VariableValueAtManagementGroup = null as any;
utilities.lazyLoad(exports, ["VariableValueAtManagementGroup"], () => require("./variableValueAtManagementGroup"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:authorization/v20220801preview:Variable":
                return new Variable(name, <any>undefined, { urn })
            case "azure-native:authorization/v20220801preview:VariableAtManagementGroup":
                return new VariableAtManagementGroup(name, <any>undefined, { urn })
            case "azure-native:authorization/v20220801preview:VariableValue":
                return new VariableValue(name, <any>undefined, { urn })
            case "azure-native:authorization/v20220801preview:VariableValueAtManagementGroup":
                return new VariableValueAtManagementGroup(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "authorization/v20220801preview", _module)