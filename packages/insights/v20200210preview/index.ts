import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetTestResultFileArgs, GetTestResultFileResult, GetTestResultFileOutputArgs } from "./getTestResultFile";
export const getTestResultFile: typeof import("./getTestResultFile").getTestResultFile = null as any;
export const getTestResultFileOutput: typeof import("./getTestResultFile").getTestResultFileOutput = null as any;
utilities.lazyLoad(exports, ["getTestResultFile","getTestResultFileOutput"], () => require("./getTestResultFile"));

