import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AnalyticsItemArgs } from "./analyticsItem";
export type AnalyticsItem = import("./analyticsItem").AnalyticsItem;
export const AnalyticsItem: typeof import("./analyticsItem").AnalyticsItem = null as any;
utilities.lazyLoad(exports, ["AnalyticsItem"], () => require("./analyticsItem"));

export { ComponentArgs } from "./component";
export type Component = import("./component").Component;
export const Component: typeof import("./component").Component = null as any;
utilities.lazyLoad(exports, ["Component"], () => require("./component"));

export { ComponentCurrentBillingFeatureArgs } from "./componentCurrentBillingFeature";
export type ComponentCurrentBillingFeature = import("./componentCurrentBillingFeature").ComponentCurrentBillingFeature;
export const ComponentCurrentBillingFeature: typeof import("./componentCurrentBillingFeature").ComponentCurrentBillingFeature = null as any;
utilities.lazyLoad(exports, ["ComponentCurrentBillingFeature"], () => require("./componentCurrentBillingFeature"));

export { ComponentLinkedStorageAccountArgs } from "./componentLinkedStorageAccount";
export type ComponentLinkedStorageAccount = import("./componentLinkedStorageAccount").ComponentLinkedStorageAccount;
export const ComponentLinkedStorageAccount: typeof import("./componentLinkedStorageAccount").ComponentLinkedStorageAccount = null as any;
utilities.lazyLoad(exports, ["ComponentLinkedStorageAccount"], () => require("./componentLinkedStorageAccount"));

export { ExportConfigurationArgs } from "./exportConfiguration";
export type ExportConfiguration = import("./exportConfiguration").ExportConfiguration;
export const ExportConfiguration: typeof import("./exportConfiguration").ExportConfiguration = null as any;
utilities.lazyLoad(exports, ["ExportConfiguration"], () => require("./exportConfiguration"));

export { FavoriteArgs } from "./favorite";
export type Favorite = import("./favorite").Favorite;
export const Favorite: typeof import("./favorite").Favorite = null as any;
utilities.lazyLoad(exports, ["Favorite"], () => require("./favorite"));

export { GetAnalyticsItemArgs, GetAnalyticsItemResult, GetAnalyticsItemOutputArgs } from "./getAnalyticsItem";
export const getAnalyticsItem: typeof import("./getAnalyticsItem").getAnalyticsItem = null as any;
export const getAnalyticsItemOutput: typeof import("./getAnalyticsItem").getAnalyticsItemOutput = null as any;
utilities.lazyLoad(exports, ["getAnalyticsItem","getAnalyticsItemOutput"], () => require("./getAnalyticsItem"));

export { GetComponentArgs, GetComponentResult, GetComponentOutputArgs } from "./getComponent";
export const getComponent: typeof import("./getComponent").getComponent = null as any;
export const getComponentOutput: typeof import("./getComponent").getComponentOutput = null as any;
utilities.lazyLoad(exports, ["getComponent","getComponentOutput"], () => require("./getComponent"));

export { GetComponentCurrentBillingFeatureArgs, GetComponentCurrentBillingFeatureResult, GetComponentCurrentBillingFeatureOutputArgs } from "./getComponentCurrentBillingFeature";
export const getComponentCurrentBillingFeature: typeof import("./getComponentCurrentBillingFeature").getComponentCurrentBillingFeature = null as any;
export const getComponentCurrentBillingFeatureOutput: typeof import("./getComponentCurrentBillingFeature").getComponentCurrentBillingFeatureOutput = null as any;
utilities.lazyLoad(exports, ["getComponentCurrentBillingFeature","getComponentCurrentBillingFeatureOutput"], () => require("./getComponentCurrentBillingFeature"));

export { GetComponentLinkedStorageAccountArgs, GetComponentLinkedStorageAccountResult, GetComponentLinkedStorageAccountOutputArgs } from "./getComponentLinkedStorageAccount";
export const getComponentLinkedStorageAccount: typeof import("./getComponentLinkedStorageAccount").getComponentLinkedStorageAccount = null as any;
export const getComponentLinkedStorageAccountOutput: typeof import("./getComponentLinkedStorageAccount").getComponentLinkedStorageAccountOutput = null as any;
utilities.lazyLoad(exports, ["getComponentLinkedStorageAccount","getComponentLinkedStorageAccountOutput"], () => require("./getComponentLinkedStorageAccount"));

export { GetExportConfigurationArgs, GetExportConfigurationResult, GetExportConfigurationOutputArgs } from "./getExportConfiguration";
export const getExportConfiguration: typeof import("./getExportConfiguration").getExportConfiguration = null as any;
export const getExportConfigurationOutput: typeof import("./getExportConfiguration").getExportConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getExportConfiguration","getExportConfigurationOutput"], () => require("./getExportConfiguration"));

export { GetFavoriteArgs, GetFavoriteResult, GetFavoriteOutputArgs } from "./getFavorite";
export const getFavorite: typeof import("./getFavorite").getFavorite = null as any;
export const getFavoriteOutput: typeof import("./getFavorite").getFavoriteOutput = null as any;
utilities.lazyLoad(exports, ["getFavorite","getFavoriteOutput"], () => require("./getFavorite"));

export { GetLiveTokenArgs, GetLiveTokenResult, GetLiveTokenOutputArgs } from "./getLiveToken";
export const getLiveToken: typeof import("./getLiveToken").getLiveToken = null as any;
export const getLiveTokenOutput: typeof import("./getLiveToken").getLiveTokenOutput = null as any;
utilities.lazyLoad(exports, ["getLiveToken","getLiveTokenOutput"], () => require("./getLiveToken"));

export { GetMyWorkbookArgs, GetMyWorkbookResult, GetMyWorkbookOutputArgs } from "./getMyWorkbook";
export const getMyWorkbook: typeof import("./getMyWorkbook").getMyWorkbook = null as any;
export const getMyWorkbookOutput: typeof import("./getMyWorkbook").getMyWorkbookOutput = null as any;
utilities.lazyLoad(exports, ["getMyWorkbook","getMyWorkbookOutput"], () => require("./getMyWorkbook"));

export { GetProactiveDetectionConfigurationArgs, GetProactiveDetectionConfigurationResult, GetProactiveDetectionConfigurationOutputArgs } from "./getProactiveDetectionConfiguration";
export const getProactiveDetectionConfiguration: typeof import("./getProactiveDetectionConfiguration").getProactiveDetectionConfiguration = null as any;
export const getProactiveDetectionConfigurationOutput: typeof import("./getProactiveDetectionConfiguration").getProactiveDetectionConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getProactiveDetectionConfiguration","getProactiveDetectionConfigurationOutput"], () => require("./getProactiveDetectionConfiguration"));

export { GetTestResultFileArgs, GetTestResultFileResult, GetTestResultFileOutputArgs } from "./getTestResultFile";
export const getTestResultFile: typeof import("./getTestResultFile").getTestResultFile = null as any;
export const getTestResultFileOutput: typeof import("./getTestResultFile").getTestResultFileOutput = null as any;
utilities.lazyLoad(exports, ["getTestResultFile","getTestResultFileOutput"], () => require("./getTestResultFile"));

export { GetWebTestArgs, GetWebTestResult, GetWebTestOutputArgs } from "./getWebTest";
export const getWebTest: typeof import("./getWebTest").getWebTest = null as any;
export const getWebTestOutput: typeof import("./getWebTest").getWebTestOutput = null as any;
utilities.lazyLoad(exports, ["getWebTest","getWebTestOutput"], () => require("./getWebTest"));

export { GetWorkbookArgs, GetWorkbookResult, GetWorkbookOutputArgs } from "./getWorkbook";
export const getWorkbook: typeof import("./getWorkbook").getWorkbook = null as any;
export const getWorkbookOutput: typeof import("./getWorkbook").getWorkbookOutput = null as any;
utilities.lazyLoad(exports, ["getWorkbook","getWorkbookOutput"], () => require("./getWorkbook"));

export { GetWorkbookTemplateArgs, GetWorkbookTemplateResult, GetWorkbookTemplateOutputArgs } from "./getWorkbookTemplate";
export const getWorkbookTemplate: typeof import("./getWorkbookTemplate").getWorkbookTemplate = null as any;
export const getWorkbookTemplateOutput: typeof import("./getWorkbookTemplate").getWorkbookTemplateOutput = null as any;
utilities.lazyLoad(exports, ["getWorkbookTemplate","getWorkbookTemplateOutput"], () => require("./getWorkbookTemplate"));

export { ListEASubscriptionListMigrationDatePostArgs, ListEASubscriptionListMigrationDatePostResult } from "./listEASubscriptionListMigrationDatePost";
export const listEASubscriptionListMigrationDatePost: typeof import("./listEASubscriptionListMigrationDatePost").listEASubscriptionListMigrationDatePost = null as any;
export const listEASubscriptionListMigrationDatePostOutput: typeof import("./listEASubscriptionListMigrationDatePost").listEASubscriptionListMigrationDatePostOutput = null as any;
utilities.lazyLoad(exports, ["listEASubscriptionListMigrationDatePost","listEASubscriptionListMigrationDatePostOutput"], () => require("./listEASubscriptionListMigrationDatePost"));

export { MyWorkbookArgs } from "./myWorkbook";
export type MyWorkbook = import("./myWorkbook").MyWorkbook;
export const MyWorkbook: typeof import("./myWorkbook").MyWorkbook = null as any;
utilities.lazyLoad(exports, ["MyWorkbook"], () => require("./myWorkbook"));

export { ProactiveDetectionConfigurationArgs } from "./proactiveDetectionConfiguration";
export type ProactiveDetectionConfiguration = import("./proactiveDetectionConfiguration").ProactiveDetectionConfiguration;
export const ProactiveDetectionConfiguration: typeof import("./proactiveDetectionConfiguration").ProactiveDetectionConfiguration = null as any;
utilities.lazyLoad(exports, ["ProactiveDetectionConfiguration"], () => require("./proactiveDetectionConfiguration"));

export { WebTestArgs } from "./webTest";
export type WebTest = import("./webTest").WebTest;
export const WebTest: typeof import("./webTest").WebTest = null as any;
utilities.lazyLoad(exports, ["WebTest"], () => require("./webTest"));

export { WorkbookArgs } from "./workbook";
export type Workbook = import("./workbook").Workbook;
export const Workbook: typeof import("./workbook").Workbook = null as any;
utilities.lazyLoad(exports, ["Workbook"], () => require("./workbook"));

export { WorkbookTemplateArgs } from "./workbookTemplate";
export type WorkbookTemplate = import("./workbookTemplate").WorkbookTemplate;
export const WorkbookTemplate: typeof import("./workbookTemplate").WorkbookTemplate = null as any;
utilities.lazyLoad(exports, ["WorkbookTemplate"], () => require("./workbookTemplate"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:applicationinsights:AnalyticsItem":
                return new AnalyticsItem(name, <any>undefined, { urn })
            case "azure-native:applicationinsights:Component":
                return new Component(name, <any>undefined, { urn })
            case "azure-native:applicationinsights:ComponentCurrentBillingFeature":
                return new ComponentCurrentBillingFeature(name, <any>undefined, { urn })
            case "azure-native:applicationinsights:ComponentLinkedStorageAccount":
                return new ComponentLinkedStorageAccount(name, <any>undefined, { urn })
            case "azure-native:applicationinsights:ExportConfiguration":
                return new ExportConfiguration(name, <any>undefined, { urn })
            case "azure-native:applicationinsights:Favorite":
                return new Favorite(name, <any>undefined, { urn })
            case "azure-native:applicationinsights:MyWorkbook":
                return new MyWorkbook(name, <any>undefined, { urn })
            case "azure-native:applicationinsights:ProactiveDetectionConfiguration":
                return new ProactiveDetectionConfiguration(name, <any>undefined, { urn })
            case "azure-native:applicationinsights:WebTest":
                return new WebTest(name, <any>undefined, { urn })
            case "azure-native:applicationinsights:Workbook":
                return new Workbook(name, <any>undefined, { urn })
            case "azure-native:applicationinsights:WorkbookTemplate":
                return new WorkbookTemplate(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "applicationinsights", _module)