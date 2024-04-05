import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { CreatorArgs } from "./creator";
export type Creator = import("./creator").Creator;
export const Creator: typeof import("./creator").Creator = null as any;
utilities.lazyLoad(exports, ["Creator"], () => require("./creator"));

export { GetCreatorArgs, GetCreatorResult, GetCreatorOutputArgs } from "./getCreator";
export const getCreator: typeof import("./getCreator").getCreator = null as any;
export const getCreatorOutput: typeof import("./getCreator").getCreatorOutput = null as any;
utilities.lazyLoad(exports, ["getCreator","getCreatorOutput"], () => require("./getCreator"));

export { GetPrivateAtlaseArgs, GetPrivateAtlaseResult, GetPrivateAtlaseOutputArgs } from "./getPrivateAtlase";
export const getPrivateAtlase: typeof import("./getPrivateAtlase").getPrivateAtlase = null as any;
export const getPrivateAtlaseOutput: typeof import("./getPrivateAtlase").getPrivateAtlaseOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateAtlase","getPrivateAtlaseOutput"], () => require("./getPrivateAtlase"));

export { PrivateAtlaseArgs } from "./privateAtlase";
export type PrivateAtlase = import("./privateAtlase").PrivateAtlase;
export const PrivateAtlase: typeof import("./privateAtlase").PrivateAtlase = null as any;
utilities.lazyLoad(exports, ["PrivateAtlase"], () => require("./privateAtlase"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:maps/v20200201preview:Creator":
                return new Creator(name, <any>undefined, { urn })
            case "azure-native:maps/v20200201preview:PrivateAtlase":
                return new PrivateAtlase(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "maps/v20200201preview", _module)