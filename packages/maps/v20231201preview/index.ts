import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AccountArgs } from "./account";
export type Account = import("./account").Account;
export const Account: typeof import("./account").Account = null as any;
utilities.lazyLoad(exports, ["Account"], () => require("./account"));

export { CreatorArgs } from "./creator";
export type Creator = import("./creator").Creator;
export const Creator: typeof import("./creator").Creator = null as any;
utilities.lazyLoad(exports, ["Creator"], () => require("./creator"));

export { GetAccountArgs, GetAccountResult, GetAccountOutputArgs } from "./getAccount";
export const getAccount: typeof import("./getAccount").getAccount = null as any;
export const getAccountOutput: typeof import("./getAccount").getAccountOutput = null as any;
utilities.lazyLoad(exports, ["getAccount","getAccountOutput"], () => require("./getAccount"));

export { GetCreatorArgs, GetCreatorResult, GetCreatorOutputArgs } from "./getCreator";
export const getCreator: typeof import("./getCreator").getCreator = null as any;
export const getCreatorOutput: typeof import("./getCreator").getCreatorOutput = null as any;
utilities.lazyLoad(exports, ["getCreator","getCreatorOutput"], () => require("./getCreator"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { ListAccountKeysArgs, ListAccountKeysResult, ListAccountKeysOutputArgs } from "./listAccountKeys";
export const listAccountKeys: typeof import("./listAccountKeys").listAccountKeys = null as any;
export const listAccountKeysOutput: typeof import("./listAccountKeys").listAccountKeysOutput = null as any;
utilities.lazyLoad(exports, ["listAccountKeys","listAccountKeysOutput"], () => require("./listAccountKeys"));

export { ListAccountSasArgs, ListAccountSasResult, ListAccountSasOutputArgs } from "./listAccountSas";
export const listAccountSas: typeof import("./listAccountSas").listAccountSas = null as any;
export const listAccountSasOutput: typeof import("./listAccountSas").listAccountSasOutput = null as any;
utilities.lazyLoad(exports, ["listAccountSas","listAccountSasOutput"], () => require("./listAccountSas"));

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
            case "azure-native:maps/v20231201preview:Account":
                return new Account(name, <any>undefined, { urn })
            case "azure-native:maps/v20231201preview:Creator":
                return new Creator(name, <any>undefined, { urn })
            case "azure-native:maps/v20231201preview:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "maps/v20231201preview", _module)