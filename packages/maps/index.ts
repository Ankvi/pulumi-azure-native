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

export { GetPrivateAtlaseArgs, GetPrivateAtlaseResult, GetPrivateAtlaseOutputArgs } from "./getPrivateAtlase";
export const getPrivateAtlase: typeof import("./getPrivateAtlase").getPrivateAtlase = null as any;
export const getPrivateAtlaseOutput: typeof import("./getPrivateAtlase").getPrivateAtlaseOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateAtlase","getPrivateAtlaseOutput"], () => require("./getPrivateAtlase"));

export { ListAccountKeysArgs, ListAccountKeysResult, ListAccountKeysOutputArgs } from "./listAccountKeys";
export const listAccountKeys: typeof import("./listAccountKeys").listAccountKeys = null as any;
export const listAccountKeysOutput: typeof import("./listAccountKeys").listAccountKeysOutput = null as any;
utilities.lazyLoad(exports, ["listAccountKeys","listAccountKeysOutput"], () => require("./listAccountKeys"));

export { ListAccountSasArgs, ListAccountSasResult, ListAccountSasOutputArgs } from "./listAccountSas";
export const listAccountSas: typeof import("./listAccountSas").listAccountSas = null as any;
export const listAccountSasOutput: typeof import("./listAccountSas").listAccountSasOutput = null as any;
utilities.lazyLoad(exports, ["listAccountSas","listAccountSasOutput"], () => require("./listAccountSas"));

export { PrivateAtlaseArgs } from "./privateAtlase";
export type PrivateAtlase = import("./privateAtlase").PrivateAtlase;
export const PrivateAtlase: typeof import("./privateAtlase").PrivateAtlase = null as any;
utilities.lazyLoad(exports, ["PrivateAtlase"], () => require("./privateAtlase"));


// Export enums:
export * from "./types/enums";

// Export sub-modules:
import * as v20180501 from "./v20180501";
import * as v20200201preview from "./v20200201preview";
import * as v20210201 from "./v20210201";
import * as v20211201preview from "./v20211201preview";
import * as v20230601 from "./v20230601";
import * as v20230801preview from "./v20230801preview";

export {
    v20180501,
    v20200201preview,
    v20210201,
    v20211201preview,
    v20230601,
    v20230801preview,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:maps:Account":
                return new Account(name, <any>undefined, { urn })
            case "azure-native:maps:Creator":
                return new Creator(name, <any>undefined, { urn })
            case "azure-native:maps:PrivateAtlase":
                return new PrivateAtlase(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "maps", _module)
