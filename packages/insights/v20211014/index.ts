import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetLiveTokenArgs, GetLiveTokenResult, GetLiveTokenOutputArgs } from "./getLiveToken";
export const getLiveToken: typeof import("./getLiveToken").getLiveToken = null as any;
export const getLiveTokenOutput: typeof import("./getLiveToken").getLiveTokenOutput = null as any;
utilities.lazyLoad(exports, ["getLiveToken","getLiveTokenOutput"], () => require("./getLiveToken"));

