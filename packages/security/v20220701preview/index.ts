import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ApplicationArgs } from "./application";
export type Application = import("./application").Application;
export const Application: typeof import("./application").Application = null as any;
utilities.lazyLoad(exports, ["Application"], () => require("./application"));

export { GetApplicationArgs, GetApplicationResult, GetApplicationOutputArgs } from "./getApplication";
export const getApplication: typeof import("./getApplication").getApplication = null as any;
export const getApplicationOutput: typeof import("./getApplication").getApplicationOutput = null as any;
utilities.lazyLoad(exports, ["getApplication","getApplicationOutput"], () => require("./getApplication"));

export { GetSecurityConnectorApplicationArgs, GetSecurityConnectorApplicationResult, GetSecurityConnectorApplicationOutputArgs } from "./getSecurityConnectorApplication";
export const getSecurityConnectorApplication: typeof import("./getSecurityConnectorApplication").getSecurityConnectorApplication = null as any;
export const getSecurityConnectorApplicationOutput: typeof import("./getSecurityConnectorApplication").getSecurityConnectorApplicationOutput = null as any;
utilities.lazyLoad(exports, ["getSecurityConnectorApplication","getSecurityConnectorApplicationOutput"], () => require("./getSecurityConnectorApplication"));

export { SecurityConnectorApplicationArgs } from "./securityConnectorApplication";
export type SecurityConnectorApplication = import("./securityConnectorApplication").SecurityConnectorApplication;
export const SecurityConnectorApplication: typeof import("./securityConnectorApplication").SecurityConnectorApplication = null as any;
utilities.lazyLoad(exports, ["SecurityConnectorApplication"], () => require("./securityConnectorApplication"));


// Export enums:
export * from "../types/enums/v20220701preview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:security/v20220701preview:Application":
                return new Application(name, <any>undefined, { urn })
            case "azure-native:security/v20220701preview:SecurityConnectorApplication":
                return new SecurityConnectorApplication(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "security/v20220701preview", _module)
