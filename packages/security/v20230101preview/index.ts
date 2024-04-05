import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetSecurityOperatorArgs, GetSecurityOperatorResult, GetSecurityOperatorOutputArgs } from "./getSecurityOperator";
export const getSecurityOperator: typeof import("./getSecurityOperator").getSecurityOperator = null as any;
export const getSecurityOperatorOutput: typeof import("./getSecurityOperator").getSecurityOperatorOutput = null as any;
utilities.lazyLoad(exports, ["getSecurityOperator","getSecurityOperatorOutput"], () => require("./getSecurityOperator"));

export { SecurityOperatorArgs } from "./securityOperator";
export type SecurityOperator = import("./securityOperator").SecurityOperator;
export const SecurityOperator: typeof import("./securityOperator").SecurityOperator = null as any;
utilities.lazyLoad(exports, ["SecurityOperator"], () => require("./securityOperator"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:security/v20230101preview:SecurityOperator":
                return new SecurityOperator(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "security/v20230101preview", _module)