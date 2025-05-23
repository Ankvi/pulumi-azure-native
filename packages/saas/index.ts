import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetSaasSubscriptionLevelArgs, GetSaasSubscriptionLevelResult, GetSaasSubscriptionLevelOutputArgs } from "./getSaasSubscriptionLevel";
export const getSaasSubscriptionLevel: typeof import("./getSaasSubscriptionLevel").getSaasSubscriptionLevel = null as any;
export const getSaasSubscriptionLevelOutput: typeof import("./getSaasSubscriptionLevel").getSaasSubscriptionLevelOutput = null as any;
utilities.lazyLoad(exports, ["getSaasSubscriptionLevel","getSaasSubscriptionLevelOutput"], () => require("./getSaasSubscriptionLevel"));

export { ListSaasResourceAccessTokenArgs, ListSaasResourceAccessTokenResult, ListSaasResourceAccessTokenOutputArgs } from "./listSaasResourceAccessToken";
export const listSaasResourceAccessToken: typeof import("./listSaasResourceAccessToken").listSaasResourceAccessToken = null as any;
export const listSaasResourceAccessTokenOutput: typeof import("./listSaasResourceAccessToken").listSaasResourceAccessTokenOutput = null as any;
utilities.lazyLoad(exports, ["listSaasResourceAccessToken","listSaasResourceAccessTokenOutput"], () => require("./listSaasResourceAccessToken"));

export { ListSaasSubscriptionLevelAccessTokenArgs, ListSaasSubscriptionLevelAccessTokenResult, ListSaasSubscriptionLevelAccessTokenOutputArgs } from "./listSaasSubscriptionLevelAccessToken";
export const listSaasSubscriptionLevelAccessToken: typeof import("./listSaasSubscriptionLevelAccessToken").listSaasSubscriptionLevelAccessToken = null as any;
export const listSaasSubscriptionLevelAccessTokenOutput: typeof import("./listSaasSubscriptionLevelAccessToken").listSaasSubscriptionLevelAccessTokenOutput = null as any;
utilities.lazyLoad(exports, ["listSaasSubscriptionLevelAccessToken","listSaasSubscriptionLevelAccessTokenOutput"], () => require("./listSaasSubscriptionLevelAccessToken"));

export { SaasSubscriptionLevelArgs } from "./saasSubscriptionLevel";
export type SaasSubscriptionLevel = import("./saasSubscriptionLevel").SaasSubscriptionLevel;
export const SaasSubscriptionLevel: typeof import("./saasSubscriptionLevel").SaasSubscriptionLevel = null as any;
utilities.lazyLoad(exports, ["SaasSubscriptionLevel"], () => require("./saasSubscriptionLevel"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:saas:SaasSubscriptionLevel":
                return new SaasSubscriptionLevel(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "saas", _module)