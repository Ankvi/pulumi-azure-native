import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetPrivateStoreOfferArgs, GetPrivateStoreOfferResult, GetPrivateStoreOfferOutputArgs } from "./getPrivateStoreOffer";
export const getPrivateStoreOffer: typeof import("./getPrivateStoreOffer").getPrivateStoreOffer = null as any;
export const getPrivateStoreOfferOutput: typeof import("./getPrivateStoreOffer").getPrivateStoreOfferOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateStoreOffer","getPrivateStoreOfferOutput"], () => require("./getPrivateStoreOffer"));

export { PrivateStoreOfferArgs } from "./privateStoreOffer";
export type PrivateStoreOffer = import("./privateStoreOffer").PrivateStoreOffer;
export const PrivateStoreOffer: typeof import("./privateStoreOffer").PrivateStoreOffer = null as any;
utilities.lazyLoad(exports, ["PrivateStoreOffer"], () => require("./privateStoreOffer"));


// Export enums:
export * from "../types/enums/v20200101";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:marketplace/v20200101:PrivateStoreOffer":
                return new PrivateStoreOffer(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "marketplace/v20200101", _module)
