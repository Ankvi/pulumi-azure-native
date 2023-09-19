import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { CustomerEventArgs } from "./customerEvent";
export type CustomerEvent = import("./customerEvent").CustomerEvent;
export const CustomerEvent: typeof import("./customerEvent").CustomerEvent = null as any;
utilities.lazyLoad(exports, ["CustomerEvent"], () => require("./customerEvent"));

export { FavoriteProcessArgs } from "./favoriteProcess";
export type FavoriteProcess = import("./favoriteProcess").FavoriteProcess;
export const FavoriteProcess: typeof import("./favoriteProcess").FavoriteProcess = null as any;
utilities.lazyLoad(exports, ["FavoriteProcess"], () => require("./favoriteProcess"));

export { GetBillingHubServiceFreeHourBalanceArgs, GetBillingHubServiceFreeHourBalanceResult, GetBillingHubServiceFreeHourBalanceOutputArgs } from "./getBillingHubServiceFreeHourBalance";
export const getBillingHubServiceFreeHourBalance: typeof import("./getBillingHubServiceFreeHourBalance").getBillingHubServiceFreeHourBalance = null as any;
export const getBillingHubServiceFreeHourBalanceOutput: typeof import("./getBillingHubServiceFreeHourBalance").getBillingHubServiceFreeHourBalanceOutput = null as any;
utilities.lazyLoad(exports, ["getBillingHubServiceFreeHourBalance","getBillingHubServiceFreeHourBalanceOutput"], () => require("./getBillingHubServiceFreeHourBalance"));

export { GetBillingHubServiceUsageArgs, GetBillingHubServiceUsageResult, GetBillingHubServiceUsageOutputArgs } from "./getBillingHubServiceUsage";
export const getBillingHubServiceUsage: typeof import("./getBillingHubServiceUsage").getBillingHubServiceUsage = null as any;
export const getBillingHubServiceUsageOutput: typeof import("./getBillingHubServiceUsage").getBillingHubServiceUsageOutput = null as any;
utilities.lazyLoad(exports, ["getBillingHubServiceUsage","getBillingHubServiceUsageOutput"], () => require("./getBillingHubServiceUsage"));

export { GetCustomerEventArgs, GetCustomerEventResult, GetCustomerEventOutputArgs } from "./getCustomerEvent";
export const getCustomerEvent: typeof import("./getCustomerEvent").getCustomerEvent = null as any;
export const getCustomerEventOutput: typeof import("./getCustomerEvent").getCustomerEventOutput = null as any;
utilities.lazyLoad(exports, ["getCustomerEvent","getCustomerEventOutput"], () => require("./getCustomerEvent"));

export { GetFavoriteProcessArgs, GetFavoriteProcessResult, GetFavoriteProcessOutputArgs } from "./getFavoriteProcess";
export const getFavoriteProcess: typeof import("./getFavoriteProcess").getFavoriteProcess = null as any;
export const getFavoriteProcessOutput: typeof import("./getFavoriteProcess").getFavoriteProcessOutput = null as any;
utilities.lazyLoad(exports, ["getFavoriteProcess","getFavoriteProcessOutput"], () => require("./getFavoriteProcess"));

export { GetPackageArgs, GetPackageResult, GetPackageOutputArgs } from "./getPackage";
export const getPackage: typeof import("./getPackage").getPackage = null as any;
export const getPackageOutput: typeof import("./getPackage").getPackageOutput = null as any;
utilities.lazyLoad(exports, ["getPackage","getPackageOutput"], () => require("./getPackage"));

export { GetPackageDownloadURLArgs, GetPackageDownloadURLResult, GetPackageDownloadURLOutputArgs } from "./getPackageDownloadURL";
export const getPackageDownloadURL: typeof import("./getPackageDownloadURL").getPackageDownloadURL = null as any;
export const getPackageDownloadURLOutput: typeof import("./getPackageDownloadURL").getPackageDownloadURLOutput = null as any;
utilities.lazyLoad(exports, ["getPackageDownloadURL","getPackageDownloadURLOutput"], () => require("./getPackageDownloadURL"));

export { GetTestBaseAccountArgs, GetTestBaseAccountResult, GetTestBaseAccountOutputArgs } from "./getTestBaseAccount";
export const getTestBaseAccount: typeof import("./getTestBaseAccount").getTestBaseAccount = null as any;
export const getTestBaseAccountOutput: typeof import("./getTestBaseAccount").getTestBaseAccountOutput = null as any;
utilities.lazyLoad(exports, ["getTestBaseAccount","getTestBaseAccountOutput"], () => require("./getTestBaseAccount"));

export { GetTestBaseAccountFileUploadUrlArgs, GetTestBaseAccountFileUploadUrlResult, GetTestBaseAccountFileUploadUrlOutputArgs } from "./getTestBaseAccountFileUploadUrl";
export const getTestBaseAccountFileUploadUrl: typeof import("./getTestBaseAccountFileUploadUrl").getTestBaseAccountFileUploadUrl = null as any;
export const getTestBaseAccountFileUploadUrlOutput: typeof import("./getTestBaseAccountFileUploadUrl").getTestBaseAccountFileUploadUrlOutput = null as any;
utilities.lazyLoad(exports, ["getTestBaseAccountFileUploadUrl","getTestBaseAccountFileUploadUrlOutput"], () => require("./getTestBaseAccountFileUploadUrl"));

export { GetTestResultConsoleLogDownloadURLArgs, GetTestResultConsoleLogDownloadURLResult, GetTestResultConsoleLogDownloadURLOutputArgs } from "./getTestResultConsoleLogDownloadURL";
export const getTestResultConsoleLogDownloadURL: typeof import("./getTestResultConsoleLogDownloadURL").getTestResultConsoleLogDownloadURL = null as any;
export const getTestResultConsoleLogDownloadURLOutput: typeof import("./getTestResultConsoleLogDownloadURL").getTestResultConsoleLogDownloadURLOutput = null as any;
utilities.lazyLoad(exports, ["getTestResultConsoleLogDownloadURL","getTestResultConsoleLogDownloadURLOutput"], () => require("./getTestResultConsoleLogDownloadURL"));

export { GetTestResultDownloadURLArgs, GetTestResultDownloadURLResult, GetTestResultDownloadURLOutputArgs } from "./getTestResultDownloadURL";
export const getTestResultDownloadURL: typeof import("./getTestResultDownloadURL").getTestResultDownloadURL = null as any;
export const getTestResultDownloadURLOutput: typeof import("./getTestResultDownloadURL").getTestResultDownloadURLOutput = null as any;
utilities.lazyLoad(exports, ["getTestResultDownloadURL","getTestResultDownloadURLOutput"], () => require("./getTestResultDownloadURL"));

export { GetTestResultVideoDownloadURLArgs, GetTestResultVideoDownloadURLResult, GetTestResultVideoDownloadURLOutputArgs } from "./getTestResultVideoDownloadURL";
export const getTestResultVideoDownloadURL: typeof import("./getTestResultVideoDownloadURL").getTestResultVideoDownloadURL = null as any;
export const getTestResultVideoDownloadURLOutput: typeof import("./getTestResultVideoDownloadURL").getTestResultVideoDownloadURLOutput = null as any;
utilities.lazyLoad(exports, ["getTestResultVideoDownloadURL","getTestResultVideoDownloadURLOutput"], () => require("./getTestResultVideoDownloadURL"));

export { PackageArgs } from "./package";
export type Package = import("./package").Package;
export const Package: typeof import("./package").Package = null as any;
utilities.lazyLoad(exports, ["Package"], () => require("./package"));

export { TestBaseAccountArgs } from "./testBaseAccount";
export type TestBaseAccount = import("./testBaseAccount").TestBaseAccount;
export const TestBaseAccount: typeof import("./testBaseAccount").TestBaseAccount = null as any;
utilities.lazyLoad(exports, ["TestBaseAccount"], () => require("./testBaseAccount"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:testbase/v20220401preview:CustomerEvent":
                return new CustomerEvent(name, <any>undefined, { urn })
            case "azure-native:testbase/v20220401preview:FavoriteProcess":
                return new FavoriteProcess(name, <any>undefined, { urn })
            case "azure-native:testbase/v20220401preview:Package":
                return new Package(name, <any>undefined, { urn })
            case "azure-native:testbase/v20220401preview:TestBaseAccount":
                return new TestBaseAccount(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "testbase/v20220401preview", _module)
