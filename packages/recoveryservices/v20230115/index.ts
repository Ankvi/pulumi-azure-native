import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetRecoveryPointAccessTokenArgs, GetRecoveryPointAccessTokenResult, GetRecoveryPointAccessTokenOutputArgs } from "./getRecoveryPointAccessToken";
export const getRecoveryPointAccessToken: typeof import("./getRecoveryPointAccessToken").getRecoveryPointAccessToken = null as any;
export const getRecoveryPointAccessTokenOutput: typeof import("./getRecoveryPointAccessToken").getRecoveryPointAccessTokenOutput = null as any;
utilities.lazyLoad(exports, ["getRecoveryPointAccessToken","getRecoveryPointAccessTokenOutput"], () => require("./getRecoveryPointAccessToken"));