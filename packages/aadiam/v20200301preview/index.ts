import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetPrivateLinkForAzureAdArgs, GetPrivateLinkForAzureAdResult, GetPrivateLinkForAzureAdOutputArgs } from "./getPrivateLinkForAzureAd";
export const getPrivateLinkForAzureAd: typeof import("./getPrivateLinkForAzureAd").getPrivateLinkForAzureAd = null as any;
export const getPrivateLinkForAzureAdOutput: typeof import("./getPrivateLinkForAzureAd").getPrivateLinkForAzureAdOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateLinkForAzureAd","getPrivateLinkForAzureAdOutput"], () => require("./getPrivateLinkForAzureAd"));

export { PrivateLinkForAzureAdArgs } from "./privateLinkForAzureAd";
export type PrivateLinkForAzureAd = import("./privateLinkForAzureAd").PrivateLinkForAzureAd;
export const PrivateLinkForAzureAd: typeof import("./privateLinkForAzureAd").PrivateLinkForAzureAd = null as any;
utilities.lazyLoad(exports, ["PrivateLinkForAzureAd"], () => require("./privateLinkForAzureAd"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:aadiam/v20200301preview:PrivateLinkForAzureAd":
                return new PrivateLinkForAzureAd(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "aadiam/v20200301preview", _module)