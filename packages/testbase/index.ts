import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ActionRequestArgs } from "./actionRequest";
export type ActionRequest = import("./actionRequest").ActionRequest;
export const ActionRequest: typeof import("./actionRequest").ActionRequest = null as any;
utilities.lazyLoad(exports, ["ActionRequest"], () => require("./actionRequest"));

export { CredentialArgs } from "./credential";
export type Credential = import("./credential").Credential;
export const Credential: typeof import("./credential").Credential = null as any;
utilities.lazyLoad(exports, ["Credential"], () => require("./credential"));

export { CustomImageArgs } from "./customImage";
export type CustomImage = import("./customImage").CustomImage;
export const CustomImage: typeof import("./customImage").CustomImage = null as any;
utilities.lazyLoad(exports, ["CustomImage"], () => require("./customImage"));

export { CustomerEventArgs } from "./customerEvent";
export type CustomerEvent = import("./customerEvent").CustomerEvent;
export const CustomerEvent: typeof import("./customerEvent").CustomerEvent = null as any;
utilities.lazyLoad(exports, ["CustomerEvent"], () => require("./customerEvent"));

export { DraftPackageArgs } from "./draftPackage";
export type DraftPackage = import("./draftPackage").DraftPackage;
export const DraftPackage: typeof import("./draftPackage").DraftPackage = null as any;
utilities.lazyLoad(exports, ["DraftPackage"], () => require("./draftPackage"));

export { FavoriteProcessArgs } from "./favoriteProcess";
export type FavoriteProcess = import("./favoriteProcess").FavoriteProcess;
export const FavoriteProcess: typeof import("./favoriteProcess").FavoriteProcess = null as any;
utilities.lazyLoad(exports, ["FavoriteProcess"], () => require("./favoriteProcess"));

export { GetActionRequestArgs, GetActionRequestResult, GetActionRequestOutputArgs } from "./getActionRequest";
export const getActionRequest: typeof import("./getActionRequest").getActionRequest = null as any;
export const getActionRequestOutput: typeof import("./getActionRequest").getActionRequestOutput = null as any;
utilities.lazyLoad(exports, ["getActionRequest","getActionRequestOutput"], () => require("./getActionRequest"));

export { GetBillingHubServiceFreeHourBalanceArgs, GetBillingHubServiceFreeHourBalanceResult, GetBillingHubServiceFreeHourBalanceOutputArgs } from "./getBillingHubServiceFreeHourBalance";
export const getBillingHubServiceFreeHourBalance: typeof import("./getBillingHubServiceFreeHourBalance").getBillingHubServiceFreeHourBalance = null as any;
export const getBillingHubServiceFreeHourBalanceOutput: typeof import("./getBillingHubServiceFreeHourBalance").getBillingHubServiceFreeHourBalanceOutput = null as any;
utilities.lazyLoad(exports, ["getBillingHubServiceFreeHourBalance","getBillingHubServiceFreeHourBalanceOutput"], () => require("./getBillingHubServiceFreeHourBalance"));

export { GetBillingHubServiceUsageArgs, GetBillingHubServiceUsageResult, GetBillingHubServiceUsageOutputArgs } from "./getBillingHubServiceUsage";
export const getBillingHubServiceUsage: typeof import("./getBillingHubServiceUsage").getBillingHubServiceUsage = null as any;
export const getBillingHubServiceUsageOutput: typeof import("./getBillingHubServiceUsage").getBillingHubServiceUsageOutput = null as any;
utilities.lazyLoad(exports, ["getBillingHubServiceUsage","getBillingHubServiceUsageOutput"], () => require("./getBillingHubServiceUsage"));

export { GetCredentialArgs, GetCredentialResult, GetCredentialOutputArgs } from "./getCredential";
export const getCredential: typeof import("./getCredential").getCredential = null as any;
export const getCredentialOutput: typeof import("./getCredential").getCredentialOutput = null as any;
utilities.lazyLoad(exports, ["getCredential","getCredentialOutput"], () => require("./getCredential"));

export { GetCustomImageArgs, GetCustomImageResult, GetCustomImageOutputArgs } from "./getCustomImage";
export const getCustomImage: typeof import("./getCustomImage").getCustomImage = null as any;
export const getCustomImageOutput: typeof import("./getCustomImage").getCustomImageOutput = null as any;
utilities.lazyLoad(exports, ["getCustomImage","getCustomImageOutput"], () => require("./getCustomImage"));

export { GetCustomerEventArgs, GetCustomerEventResult, GetCustomerEventOutputArgs } from "./getCustomerEvent";
export const getCustomerEvent: typeof import("./getCustomerEvent").getCustomerEvent = null as any;
export const getCustomerEventOutput: typeof import("./getCustomerEvent").getCustomerEventOutput = null as any;
utilities.lazyLoad(exports, ["getCustomerEvent","getCustomerEventOutput"], () => require("./getCustomerEvent"));

export { GetDraftPackageArgs, GetDraftPackageResult, GetDraftPackageOutputArgs } from "./getDraftPackage";
export const getDraftPackage: typeof import("./getDraftPackage").getDraftPackage = null as any;
export const getDraftPackageOutput: typeof import("./getDraftPackage").getDraftPackageOutput = null as any;
utilities.lazyLoad(exports, ["getDraftPackage","getDraftPackageOutput"], () => require("./getDraftPackage"));

export { GetDraftPackagePathArgs, GetDraftPackagePathResult, GetDraftPackagePathOutputArgs } from "./getDraftPackagePath";
export const getDraftPackagePath: typeof import("./getDraftPackagePath").getDraftPackagePath = null as any;
export const getDraftPackagePathOutput: typeof import("./getDraftPackagePath").getDraftPackagePathOutput = null as any;
utilities.lazyLoad(exports, ["getDraftPackagePath","getDraftPackagePathOutput"], () => require("./getDraftPackagePath"));

export { GetFavoriteProcessArgs, GetFavoriteProcessResult, GetFavoriteProcessOutputArgs } from "./getFavoriteProcess";
export const getFavoriteProcess: typeof import("./getFavoriteProcess").getFavoriteProcess = null as any;
export const getFavoriteProcessOutput: typeof import("./getFavoriteProcess").getFavoriteProcessOutput = null as any;
utilities.lazyLoad(exports, ["getFavoriteProcess","getFavoriteProcessOutput"], () => require("./getFavoriteProcess"));

export { GetImageDefinitionArgs, GetImageDefinitionResult, GetImageDefinitionOutputArgs } from "./getImageDefinition";
export const getImageDefinition: typeof import("./getImageDefinition").getImageDefinition = null as any;
export const getImageDefinitionOutput: typeof import("./getImageDefinition").getImageDefinitionOutput = null as any;
utilities.lazyLoad(exports, ["getImageDefinition","getImageDefinitionOutput"], () => require("./getImageDefinition"));

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

export { ImageDefinitionArgs } from "./imageDefinition";
export type ImageDefinition = import("./imageDefinition").ImageDefinition;
export const ImageDefinition: typeof import("./imageDefinition").ImageDefinition = null as any;
utilities.lazyLoad(exports, ["ImageDefinition"], () => require("./imageDefinition"));

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
            case "azure-native:testbase:ActionRequest":
                return new ActionRequest(name, <any>undefined, { urn })
            case "azure-native:testbase:Credential":
                return new Credential(name, <any>undefined, { urn })
            case "azure-native:testbase:CustomImage":
                return new CustomImage(name, <any>undefined, { urn })
            case "azure-native:testbase:CustomerEvent":
                return new CustomerEvent(name, <any>undefined, { urn })
            case "azure-native:testbase:DraftPackage":
                return new DraftPackage(name, <any>undefined, { urn })
            case "azure-native:testbase:FavoriteProcess":
                return new FavoriteProcess(name, <any>undefined, { urn })
            case "azure-native:testbase:ImageDefinition":
                return new ImageDefinition(name, <any>undefined, { urn })
            case "azure-native:testbase:Package":
                return new Package(name, <any>undefined, { urn })
            case "azure-native:testbase:TestBaseAccount":
                return new TestBaseAccount(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "testbase", _module)