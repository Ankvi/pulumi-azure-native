import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AnalyticsItemArgs } from "./analyticsItem";
export type AnalyticsItem = import("./analyticsItem").AnalyticsItem;
export const AnalyticsItem: typeof import("./analyticsItem").AnalyticsItem = null as any;
utilities.lazyLoad(exports, ["AnalyticsItem"], () => require("./analyticsItem"));

export { ComponentCurrentBillingFeatureArgs } from "./componentCurrentBillingFeature";
export type ComponentCurrentBillingFeature = import("./componentCurrentBillingFeature").ComponentCurrentBillingFeature;
export const ComponentCurrentBillingFeature: typeof import("./componentCurrentBillingFeature").ComponentCurrentBillingFeature = null as any;
utilities.lazyLoad(exports, ["ComponentCurrentBillingFeature"], () => require("./componentCurrentBillingFeature"));

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

export { GetComponentCurrentBillingFeatureArgs, GetComponentCurrentBillingFeatureResult, GetComponentCurrentBillingFeatureOutputArgs } from "./getComponentCurrentBillingFeature";
export const getComponentCurrentBillingFeature: typeof import("./getComponentCurrentBillingFeature").getComponentCurrentBillingFeature = null as any;
export const getComponentCurrentBillingFeatureOutput: typeof import("./getComponentCurrentBillingFeature").getComponentCurrentBillingFeatureOutput = null as any;
utilities.lazyLoad(exports, ["getComponentCurrentBillingFeature","getComponentCurrentBillingFeatureOutput"], () => require("./getComponentCurrentBillingFeature"));

export { GetExportConfigurationArgs, GetExportConfigurationResult, GetExportConfigurationOutputArgs } from "./getExportConfiguration";
export const getExportConfiguration: typeof import("./getExportConfiguration").getExportConfiguration = null as any;
export const getExportConfigurationOutput: typeof import("./getExportConfiguration").getExportConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getExportConfiguration","getExportConfigurationOutput"], () => require("./getExportConfiguration"));

export { GetFavoriteArgs, GetFavoriteResult, GetFavoriteOutputArgs } from "./getFavorite";
export const getFavorite: typeof import("./getFavorite").getFavorite = null as any;
export const getFavoriteOutput: typeof import("./getFavorite").getFavoriteOutput = null as any;
utilities.lazyLoad(exports, ["getFavorite","getFavoriteOutput"], () => require("./getFavorite"));

export { GetProactiveDetectionConfigurationArgs, GetProactiveDetectionConfigurationResult, GetProactiveDetectionConfigurationOutputArgs } from "./getProactiveDetectionConfiguration";
export const getProactiveDetectionConfiguration: typeof import("./getProactiveDetectionConfiguration").getProactiveDetectionConfiguration = null as any;
export const getProactiveDetectionConfigurationOutput: typeof import("./getProactiveDetectionConfiguration").getProactiveDetectionConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getProactiveDetectionConfiguration","getProactiveDetectionConfigurationOutput"], () => require("./getProactiveDetectionConfiguration"));

export { GetWorkbookArgs, GetWorkbookResult, GetWorkbookOutputArgs } from "./getWorkbook";
export const getWorkbook: typeof import("./getWorkbook").getWorkbook = null as any;
export const getWorkbookOutput: typeof import("./getWorkbook").getWorkbookOutput = null as any;
utilities.lazyLoad(exports, ["getWorkbook","getWorkbookOutput"], () => require("./getWorkbook"));

export { ProactiveDetectionConfigurationArgs } from "./proactiveDetectionConfiguration";
export type ProactiveDetectionConfiguration = import("./proactiveDetectionConfiguration").ProactiveDetectionConfiguration;
export const ProactiveDetectionConfiguration: typeof import("./proactiveDetectionConfiguration").ProactiveDetectionConfiguration = null as any;
utilities.lazyLoad(exports, ["ProactiveDetectionConfiguration"], () => require("./proactiveDetectionConfiguration"));

export { WorkbookArgs } from "./workbook";
export type Workbook = import("./workbook").Workbook;
export const Workbook: typeof import("./workbook").Workbook = null as any;
utilities.lazyLoad(exports, ["Workbook"], () => require("./workbook"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:insights/v20150501:AnalyticsItem":
                return new AnalyticsItem(name, <any>undefined, { urn })
            case "azure-native:insights/v20150501:ComponentCurrentBillingFeature":
                return new ComponentCurrentBillingFeature(name, <any>undefined, { urn })
            case "azure-native:insights/v20150501:ExportConfiguration":
                return new ExportConfiguration(name, <any>undefined, { urn })
            case "azure-native:insights/v20150501:Favorite":
                return new Favorite(name, <any>undefined, { urn })
            case "azure-native:insights/v20150501:ProactiveDetectionConfiguration":
                return new ProactiveDetectionConfiguration(name, <any>undefined, { urn })
            case "azure-native:insights/v20150501:Workbook":
                return new Workbook(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "insights/v20150501", _module)