import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AccountArgs } from "./account";
export type Account = import("./account").Account;
export const Account: typeof import("./account").Account = null as any;
utilities.lazyLoad(exports, ["Account"], () => require("./account"));

export { GetAccountArgs, GetAccountResult, GetAccountOutputArgs } from "./getAccount";
export const getAccount: typeof import("./getAccount").getAccount = null as any;
export const getAccountOutput: typeof import("./getAccount").getAccountOutput = null as any;
utilities.lazyLoad(exports, ["getAccount","getAccountOutput"], () => require("./getAccount"));

export { GetInstanceArgs, GetInstanceResult, GetInstanceOutputArgs } from "./getInstance";
export const getInstance: typeof import("./getInstance").getInstance = null as any;
export const getInstanceOutput: typeof import("./getInstance").getInstanceOutput = null as any;
utilities.lazyLoad(exports, ["getInstance","getInstanceOutput"], () => require("./getInstance"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { GetPrivateEndpointConnectionProxyArgs, GetPrivateEndpointConnectionProxyResult, GetPrivateEndpointConnectionProxyOutputArgs } from "./getPrivateEndpointConnectionProxy";
export const getPrivateEndpointConnectionProxy: typeof import("./getPrivateEndpointConnectionProxy").getPrivateEndpointConnectionProxy = null as any;
export const getPrivateEndpointConnectionProxyOutput: typeof import("./getPrivateEndpointConnectionProxy").getPrivateEndpointConnectionProxyOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnectionProxy","getPrivateEndpointConnectionProxyOutput"], () => require("./getPrivateEndpointConnectionProxy"));

export { InstanceArgs } from "./instance";
export type Instance = import("./instance").Instance;
export const Instance: typeof import("./instance").Instance = null as any;
utilities.lazyLoad(exports, ["Instance"], () => require("./instance"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));

export { PrivateEndpointConnectionProxyArgs } from "./privateEndpointConnectionProxy";
export type PrivateEndpointConnectionProxy = import("./privateEndpointConnectionProxy").PrivateEndpointConnectionProxy;
export const PrivateEndpointConnectionProxy: typeof import("./privateEndpointConnectionProxy").PrivateEndpointConnectionProxy = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnectionProxy"], () => require("./privateEndpointConnectionProxy"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:deviceupdate:Account":
                return new Account(name, <any>undefined, { urn })
            case "azure-native:deviceupdate:Instance":
                return new Instance(name, <any>undefined, { urn })
            case "azure-native:deviceupdate:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:deviceupdate:PrivateEndpointConnectionProxy":
                return new PrivateEndpointConnectionProxy(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "deviceupdate", _module)