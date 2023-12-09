import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetOfferAccessTokenArgs, GetOfferAccessTokenResult, GetOfferAccessTokenOutputArgs } from "./getOfferAccessToken";
export const getOfferAccessToken: typeof import("./getOfferAccessToken").getOfferAccessToken = null as any;
export const getOfferAccessTokenOutput: typeof import("./getOfferAccessToken").getOfferAccessTokenOutput = null as any;
utilities.lazyLoad(exports, ["getOfferAccessToken","getOfferAccessTokenOutput"], () => require("./getOfferAccessToken"));


// Export sub-modules:
import * as v20230801 from "./v20230801";
import * as v20230801preview from "./v20230801preview";

export {
    v20230801,
    v20230801preview,
};
