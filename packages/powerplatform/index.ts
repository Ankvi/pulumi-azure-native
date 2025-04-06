import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AccountArgs } from "./account";
export type Account = import("./account").Account;
export const Account: typeof import("./account").Account = null as any;
utilities.lazyLoad(exports, ["Account"], () => require("./account"));

export { EnterprisePolicyArgs } from "./enterprisePolicy";
export type EnterprisePolicy = import("./enterprisePolicy").EnterprisePolicy;
export const EnterprisePolicy: typeof import("./enterprisePolicy").EnterprisePolicy = null as any;
utilities.lazyLoad(exports, ["EnterprisePolicy"], () => require("./enterprisePolicy"));

export { GetAccountArgs, GetAccountResult, GetAccountOutputArgs } from "./getAccount";
export const getAccount: typeof import("./getAccount").getAccount = null as any;
export const getAccountOutput: typeof import("./getAccount").getAccountOutput = null as any;
utilities.lazyLoad(exports, ["getAccount","getAccountOutput"], () => require("./getAccount"));

export { GetEnterprisePolicyArgs, GetEnterprisePolicyResult, GetEnterprisePolicyOutputArgs } from "./getEnterprisePolicy";
export const getEnterprisePolicy: typeof import("./getEnterprisePolicy").getEnterprisePolicy = null as any;
export const getEnterprisePolicyOutput: typeof import("./getEnterprisePolicy").getEnterprisePolicyOutput = null as any;
utilities.lazyLoad(exports, ["getEnterprisePolicy","getEnterprisePolicyOutput"], () => require("./getEnterprisePolicy"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:powerplatform:Account":
                return new Account(name, <any>undefined, { urn })
            case "azure-native:powerplatform:EnterprisePolicy":
                return new EnterprisePolicy(name, <any>undefined, { urn })
            case "azure-native:powerplatform:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "powerplatform", _module)