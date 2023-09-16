import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ActionGroupArgs } from "./actionGroup";
export type ActionGroup = import("./actionGroup").ActionGroup;
export const ActionGroup: typeof import("./actionGroup").ActionGroup = null as any;
utilities.lazyLoad(exports, ["ActionGroup"], () => require("./actionGroup"));

export { ActivityLogAlertArgs } from "./activityLogAlert";
export type ActivityLogAlert = import("./activityLogAlert").ActivityLogAlert;
export const ActivityLogAlert: typeof import("./activityLogAlert").ActivityLogAlert = null as any;
utilities.lazyLoad(exports, ["ActivityLogAlert"], () => require("./activityLogAlert"));

export { AlertRuleArgs } from "./alertRule";
export type AlertRule = import("./alertRule").AlertRule;
export const AlertRule: typeof import("./alertRule").AlertRule = null as any;
utilities.lazyLoad(exports, ["AlertRule"], () => require("./alertRule"));

export { AnalyticsItemArgs } from "./analyticsItem";
export type AnalyticsItem = import("./analyticsItem").AnalyticsItem;
export const AnalyticsItem: typeof import("./analyticsItem").AnalyticsItem = null as any;
utilities.lazyLoad(exports, ["AnalyticsItem"], () => require("./analyticsItem"));

export { AutoscaleSettingArgs } from "./autoscaleSetting";
export type AutoscaleSetting = import("./autoscaleSetting").AutoscaleSetting;
export const AutoscaleSetting: typeof import("./autoscaleSetting").AutoscaleSetting = null as any;
utilities.lazyLoad(exports, ["AutoscaleSetting"], () => require("./autoscaleSetting"));

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

export { DataCollectionEndpointArgs } from "./dataCollectionEndpoint";
export type DataCollectionEndpoint = import("./dataCollectionEndpoint").DataCollectionEndpoint;
export const DataCollectionEndpoint: typeof import("./dataCollectionEndpoint").DataCollectionEndpoint = null as any;
utilities.lazyLoad(exports, ["DataCollectionEndpoint"], () => require("./dataCollectionEndpoint"));

export { DataCollectionRuleArgs } from "./dataCollectionRule";
export type DataCollectionRule = import("./dataCollectionRule").DataCollectionRule;
export const DataCollectionRule: typeof import("./dataCollectionRule").DataCollectionRule = null as any;
utilities.lazyLoad(exports, ["DataCollectionRule"], () => require("./dataCollectionRule"));

export { DataCollectionRuleAssociationArgs } from "./dataCollectionRuleAssociation";
export type DataCollectionRuleAssociation = import("./dataCollectionRuleAssociation").DataCollectionRuleAssociation;
export const DataCollectionRuleAssociation: typeof import("./dataCollectionRuleAssociation").DataCollectionRuleAssociation = null as any;
utilities.lazyLoad(exports, ["DataCollectionRuleAssociation"], () => require("./dataCollectionRuleAssociation"));

export { DiagnosticSettingArgs } from "./diagnosticSetting";
export type DiagnosticSetting = import("./diagnosticSetting").DiagnosticSetting;
export const DiagnosticSetting: typeof import("./diagnosticSetting").DiagnosticSetting = null as any;
utilities.lazyLoad(exports, ["DiagnosticSetting"], () => require("./diagnosticSetting"));

export { ExportConfigurationArgs } from "./exportConfiguration";
export type ExportConfiguration = import("./exportConfiguration").ExportConfiguration;
export const ExportConfiguration: typeof import("./exportConfiguration").ExportConfiguration = null as any;
utilities.lazyLoad(exports, ["ExportConfiguration"], () => require("./exportConfiguration"));

export { FavoriteArgs } from "./favorite";
export type Favorite = import("./favorite").Favorite;
export const Favorite: typeof import("./favorite").Favorite = null as any;
utilities.lazyLoad(exports, ["Favorite"], () => require("./favorite"));

export { GetActionGroupArgs, GetActionGroupResult, GetActionGroupOutputArgs } from "./getActionGroup";
export const getActionGroup: typeof import("./getActionGroup").getActionGroup = null as any;
export const getActionGroupOutput: typeof import("./getActionGroup").getActionGroupOutput = null as any;
utilities.lazyLoad(exports, ["getActionGroup","getActionGroupOutput"], () => require("./getActionGroup"));

export { GetActivityLogAlertArgs, GetActivityLogAlertResult, GetActivityLogAlertOutputArgs } from "./getActivityLogAlert";
export const getActivityLogAlert: typeof import("./getActivityLogAlert").getActivityLogAlert = null as any;
export const getActivityLogAlertOutput: typeof import("./getActivityLogAlert").getActivityLogAlertOutput = null as any;
utilities.lazyLoad(exports, ["getActivityLogAlert","getActivityLogAlertOutput"], () => require("./getActivityLogAlert"));

export { GetAlertRuleArgs, GetAlertRuleResult, GetAlertRuleOutputArgs } from "./getAlertRule";
export const getAlertRule: typeof import("./getAlertRule").getAlertRule = null as any;
export const getAlertRuleOutput: typeof import("./getAlertRule").getAlertRuleOutput = null as any;
utilities.lazyLoad(exports, ["getAlertRule","getAlertRuleOutput"], () => require("./getAlertRule"));

export { GetAnalyticsItemArgs, GetAnalyticsItemResult, GetAnalyticsItemOutputArgs } from "./getAnalyticsItem";
export const getAnalyticsItem: typeof import("./getAnalyticsItem").getAnalyticsItem = null as any;
export const getAnalyticsItemOutput: typeof import("./getAnalyticsItem").getAnalyticsItemOutput = null as any;
utilities.lazyLoad(exports, ["getAnalyticsItem","getAnalyticsItemOutput"], () => require("./getAnalyticsItem"));

export { GetAutoscaleSettingArgs, GetAutoscaleSettingResult, GetAutoscaleSettingOutputArgs } from "./getAutoscaleSetting";
export const getAutoscaleSetting: typeof import("./getAutoscaleSetting").getAutoscaleSetting = null as any;
export const getAutoscaleSettingOutput: typeof import("./getAutoscaleSetting").getAutoscaleSettingOutput = null as any;
utilities.lazyLoad(exports, ["getAutoscaleSetting","getAutoscaleSettingOutput"], () => require("./getAutoscaleSetting"));

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

export { GetDataCollectionEndpointArgs, GetDataCollectionEndpointResult, GetDataCollectionEndpointOutputArgs } from "./getDataCollectionEndpoint";
export const getDataCollectionEndpoint: typeof import("./getDataCollectionEndpoint").getDataCollectionEndpoint = null as any;
export const getDataCollectionEndpointOutput: typeof import("./getDataCollectionEndpoint").getDataCollectionEndpointOutput = null as any;
utilities.lazyLoad(exports, ["getDataCollectionEndpoint","getDataCollectionEndpointOutput"], () => require("./getDataCollectionEndpoint"));

export { GetDataCollectionRuleArgs, GetDataCollectionRuleResult, GetDataCollectionRuleOutputArgs } from "./getDataCollectionRule";
export const getDataCollectionRule: typeof import("./getDataCollectionRule").getDataCollectionRule = null as any;
export const getDataCollectionRuleOutput: typeof import("./getDataCollectionRule").getDataCollectionRuleOutput = null as any;
utilities.lazyLoad(exports, ["getDataCollectionRule","getDataCollectionRuleOutput"], () => require("./getDataCollectionRule"));

export { GetDataCollectionRuleAssociationArgs, GetDataCollectionRuleAssociationResult, GetDataCollectionRuleAssociationOutputArgs } from "./getDataCollectionRuleAssociation";
export const getDataCollectionRuleAssociation: typeof import("./getDataCollectionRuleAssociation").getDataCollectionRuleAssociation = null as any;
export const getDataCollectionRuleAssociationOutput: typeof import("./getDataCollectionRuleAssociation").getDataCollectionRuleAssociationOutput = null as any;
utilities.lazyLoad(exports, ["getDataCollectionRuleAssociation","getDataCollectionRuleAssociationOutput"], () => require("./getDataCollectionRuleAssociation"));

export { GetDiagnosticServiceTokenReadOnlyArgs, GetDiagnosticServiceTokenReadOnlyResult, GetDiagnosticServiceTokenReadOnlyOutputArgs } from "./getDiagnosticServiceTokenReadOnly";
export const getDiagnosticServiceTokenReadOnly: typeof import("./getDiagnosticServiceTokenReadOnly").getDiagnosticServiceTokenReadOnly = null as any;
export const getDiagnosticServiceTokenReadOnlyOutput: typeof import("./getDiagnosticServiceTokenReadOnly").getDiagnosticServiceTokenReadOnlyOutput = null as any;
utilities.lazyLoad(exports, ["getDiagnosticServiceTokenReadOnly","getDiagnosticServiceTokenReadOnlyOutput"], () => require("./getDiagnosticServiceTokenReadOnly"));

export { GetDiagnosticServiceTokenReadWriteArgs, GetDiagnosticServiceTokenReadWriteResult, GetDiagnosticServiceTokenReadWriteOutputArgs } from "./getDiagnosticServiceTokenReadWrite";
export const getDiagnosticServiceTokenReadWrite: typeof import("./getDiagnosticServiceTokenReadWrite").getDiagnosticServiceTokenReadWrite = null as any;
export const getDiagnosticServiceTokenReadWriteOutput: typeof import("./getDiagnosticServiceTokenReadWrite").getDiagnosticServiceTokenReadWriteOutput = null as any;
utilities.lazyLoad(exports, ["getDiagnosticServiceTokenReadWrite","getDiagnosticServiceTokenReadWriteOutput"], () => require("./getDiagnosticServiceTokenReadWrite"));

export { GetDiagnosticSettingArgs, GetDiagnosticSettingResult, GetDiagnosticSettingOutputArgs } from "./getDiagnosticSetting";
export const getDiagnosticSetting: typeof import("./getDiagnosticSetting").getDiagnosticSetting = null as any;
export const getDiagnosticSettingOutput: typeof import("./getDiagnosticSetting").getDiagnosticSettingOutput = null as any;
utilities.lazyLoad(exports, ["getDiagnosticSetting","getDiagnosticSettingOutput"], () => require("./getDiagnosticSetting"));

export { GetExportConfigurationArgs, GetExportConfigurationResult, GetExportConfigurationOutputArgs } from "./getExportConfiguration";
export const getExportConfiguration: typeof import("./getExportConfiguration").getExportConfiguration = null as any;
export const getExportConfigurationOutput: typeof import("./getExportConfiguration").getExportConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getExportConfiguration","getExportConfigurationOutput"], () => require("./getExportConfiguration"));

export { GetFavoriteArgs, GetFavoriteResult, GetFavoriteOutputArgs } from "./getFavorite";
export const getFavorite: typeof import("./getFavorite").getFavorite = null as any;
export const getFavoriteOutput: typeof import("./getFavorite").getFavoriteOutput = null as any;
utilities.lazyLoad(exports, ["getFavorite","getFavoriteOutput"], () => require("./getFavorite"));

export { GetGuestDiagnosticsSettingArgs, GetGuestDiagnosticsSettingResult, GetGuestDiagnosticsSettingOutputArgs } from "./getGuestDiagnosticsSetting";
export const getGuestDiagnosticsSetting: typeof import("./getGuestDiagnosticsSetting").getGuestDiagnosticsSetting = null as any;
export const getGuestDiagnosticsSettingOutput: typeof import("./getGuestDiagnosticsSetting").getGuestDiagnosticsSettingOutput = null as any;
utilities.lazyLoad(exports, ["getGuestDiagnosticsSetting","getGuestDiagnosticsSettingOutput"], () => require("./getGuestDiagnosticsSetting"));

export { GetGuestDiagnosticsSettingsAssociationArgs, GetGuestDiagnosticsSettingsAssociationResult, GetGuestDiagnosticsSettingsAssociationOutputArgs } from "./getGuestDiagnosticsSettingsAssociation";
export const getGuestDiagnosticsSettingsAssociation: typeof import("./getGuestDiagnosticsSettingsAssociation").getGuestDiagnosticsSettingsAssociation = null as any;
export const getGuestDiagnosticsSettingsAssociationOutput: typeof import("./getGuestDiagnosticsSettingsAssociation").getGuestDiagnosticsSettingsAssociationOutput = null as any;
utilities.lazyLoad(exports, ["getGuestDiagnosticsSettingsAssociation","getGuestDiagnosticsSettingsAssociationOutput"], () => require("./getGuestDiagnosticsSettingsAssociation"));

export { GetLiveTokenArgs, GetLiveTokenResult, GetLiveTokenOutputArgs } from "./getLiveToken";
export const getLiveToken: typeof import("./getLiveToken").getLiveToken = null as any;
export const getLiveTokenOutput: typeof import("./getLiveToken").getLiveTokenOutput = null as any;
utilities.lazyLoad(exports, ["getLiveToken","getLiveTokenOutput"], () => require("./getLiveToken"));

export { GetLogProfileArgs, GetLogProfileResult, GetLogProfileOutputArgs } from "./getLogProfile";
export const getLogProfile: typeof import("./getLogProfile").getLogProfile = null as any;
export const getLogProfileOutput: typeof import("./getLogProfile").getLogProfileOutput = null as any;
utilities.lazyLoad(exports, ["getLogProfile","getLogProfileOutput"], () => require("./getLogProfile"));

export { GetManagementGroupDiagnosticSettingArgs, GetManagementGroupDiagnosticSettingResult, GetManagementGroupDiagnosticSettingOutputArgs } from "./getManagementGroupDiagnosticSetting";
export const getManagementGroupDiagnosticSetting: typeof import("./getManagementGroupDiagnosticSetting").getManagementGroupDiagnosticSetting = null as any;
export const getManagementGroupDiagnosticSettingOutput: typeof import("./getManagementGroupDiagnosticSetting").getManagementGroupDiagnosticSettingOutput = null as any;
utilities.lazyLoad(exports, ["getManagementGroupDiagnosticSetting","getManagementGroupDiagnosticSettingOutput"], () => require("./getManagementGroupDiagnosticSetting"));

export { GetMetricAlertArgs, GetMetricAlertResult, GetMetricAlertOutputArgs } from "./getMetricAlert";
export const getMetricAlert: typeof import("./getMetricAlert").getMetricAlert = null as any;
export const getMetricAlertOutput: typeof import("./getMetricAlert").getMetricAlertOutput = null as any;
utilities.lazyLoad(exports, ["getMetricAlert","getMetricAlertOutput"], () => require("./getMetricAlert"));

export { GetMyWorkbookArgs, GetMyWorkbookResult, GetMyWorkbookOutputArgs } from "./getMyWorkbook";
export const getMyWorkbook: typeof import("./getMyWorkbook").getMyWorkbook = null as any;
export const getMyWorkbookOutput: typeof import("./getMyWorkbook").getMyWorkbookOutput = null as any;
utilities.lazyLoad(exports, ["getMyWorkbook","getMyWorkbookOutput"], () => require("./getMyWorkbook"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { GetPrivateLinkScopeArgs, GetPrivateLinkScopeResult, GetPrivateLinkScopeOutputArgs } from "./getPrivateLinkScope";
export const getPrivateLinkScope: typeof import("./getPrivateLinkScope").getPrivateLinkScope = null as any;
export const getPrivateLinkScopeOutput: typeof import("./getPrivateLinkScope").getPrivateLinkScopeOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateLinkScope","getPrivateLinkScopeOutput"], () => require("./getPrivateLinkScope"));

export { GetPrivateLinkScopedResourceArgs, GetPrivateLinkScopedResourceResult, GetPrivateLinkScopedResourceOutputArgs } from "./getPrivateLinkScopedResource";
export const getPrivateLinkScopedResource: typeof import("./getPrivateLinkScopedResource").getPrivateLinkScopedResource = null as any;
export const getPrivateLinkScopedResourceOutput: typeof import("./getPrivateLinkScopedResource").getPrivateLinkScopedResourceOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateLinkScopedResource","getPrivateLinkScopedResourceOutput"], () => require("./getPrivateLinkScopedResource"));

export { GetProactiveDetectionConfigurationArgs, GetProactiveDetectionConfigurationResult, GetProactiveDetectionConfigurationOutputArgs } from "./getProactiveDetectionConfiguration";
export const getProactiveDetectionConfiguration: typeof import("./getProactiveDetectionConfiguration").getProactiveDetectionConfiguration = null as any;
export const getProactiveDetectionConfigurationOutput: typeof import("./getProactiveDetectionConfiguration").getProactiveDetectionConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getProactiveDetectionConfiguration","getProactiveDetectionConfigurationOutput"], () => require("./getProactiveDetectionConfiguration"));

export { GetScheduledQueryRuleArgs, GetScheduledQueryRuleResult, GetScheduledQueryRuleOutputArgs } from "./getScheduledQueryRule";
export const getScheduledQueryRule: typeof import("./getScheduledQueryRule").getScheduledQueryRule = null as any;
export const getScheduledQueryRuleOutput: typeof import("./getScheduledQueryRule").getScheduledQueryRuleOutput = null as any;
utilities.lazyLoad(exports, ["getScheduledQueryRule","getScheduledQueryRuleOutput"], () => require("./getScheduledQueryRule"));

export { GetSubscriptionDiagnosticSettingArgs, GetSubscriptionDiagnosticSettingResult, GetSubscriptionDiagnosticSettingOutputArgs } from "./getSubscriptionDiagnosticSetting";
export const getSubscriptionDiagnosticSetting: typeof import("./getSubscriptionDiagnosticSetting").getSubscriptionDiagnosticSetting = null as any;
export const getSubscriptionDiagnosticSettingOutput: typeof import("./getSubscriptionDiagnosticSetting").getSubscriptionDiagnosticSettingOutput = null as any;
utilities.lazyLoad(exports, ["getSubscriptionDiagnosticSetting","getSubscriptionDiagnosticSettingOutput"], () => require("./getSubscriptionDiagnosticSetting"));

export { GetTenantActionGroupArgs, GetTenantActionGroupResult, GetTenantActionGroupOutputArgs } from "./getTenantActionGroup";
export const getTenantActionGroup: typeof import("./getTenantActionGroup").getTenantActionGroup = null as any;
export const getTenantActionGroupOutput: typeof import("./getTenantActionGroup").getTenantActionGroupOutput = null as any;
utilities.lazyLoad(exports, ["getTenantActionGroup","getTenantActionGroupOutput"], () => require("./getTenantActionGroup"));

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

export { GuestDiagnosticsSettingArgs } from "./guestDiagnosticsSetting";
export type GuestDiagnosticsSetting = import("./guestDiagnosticsSetting").GuestDiagnosticsSetting;
export const GuestDiagnosticsSetting: typeof import("./guestDiagnosticsSetting").GuestDiagnosticsSetting = null as any;
utilities.lazyLoad(exports, ["GuestDiagnosticsSetting"], () => require("./guestDiagnosticsSetting"));

export { GuestDiagnosticsSettingsAssociationArgs } from "./guestDiagnosticsSettingsAssociation";
export type GuestDiagnosticsSettingsAssociation = import("./guestDiagnosticsSettingsAssociation").GuestDiagnosticsSettingsAssociation;
export const GuestDiagnosticsSettingsAssociation: typeof import("./guestDiagnosticsSettingsAssociation").GuestDiagnosticsSettingsAssociation = null as any;
utilities.lazyLoad(exports, ["GuestDiagnosticsSettingsAssociation"], () => require("./guestDiagnosticsSettingsAssociation"));

export { ListEASubscriptionListMigrationDatePostArgs, ListEASubscriptionListMigrationDatePostResult } from "./listEASubscriptionListMigrationDatePost";
export const listEASubscriptionListMigrationDatePost: typeof import("./listEASubscriptionListMigrationDatePost").listEASubscriptionListMigrationDatePost = null as any;
export const listEASubscriptionListMigrationDatePostOutput: typeof import("./listEASubscriptionListMigrationDatePost").listEASubscriptionListMigrationDatePostOutput = null as any;
utilities.lazyLoad(exports, ["listEASubscriptionListMigrationDatePost","listEASubscriptionListMigrationDatePostOutput"], () => require("./listEASubscriptionListMigrationDatePost"));

export { LogProfileArgs } from "./logProfile";
export type LogProfile = import("./logProfile").LogProfile;
export const LogProfile: typeof import("./logProfile").LogProfile = null as any;
utilities.lazyLoad(exports, ["LogProfile"], () => require("./logProfile"));

export { ManagementGroupDiagnosticSettingArgs } from "./managementGroupDiagnosticSetting";
export type ManagementGroupDiagnosticSetting = import("./managementGroupDiagnosticSetting").ManagementGroupDiagnosticSetting;
export const ManagementGroupDiagnosticSetting: typeof import("./managementGroupDiagnosticSetting").ManagementGroupDiagnosticSetting = null as any;
utilities.lazyLoad(exports, ["ManagementGroupDiagnosticSetting"], () => require("./managementGroupDiagnosticSetting"));

export { MetricAlertArgs } from "./metricAlert";
export type MetricAlert = import("./metricAlert").MetricAlert;
export const MetricAlert: typeof import("./metricAlert").MetricAlert = null as any;
utilities.lazyLoad(exports, ["MetricAlert"], () => require("./metricAlert"));

export { MyWorkbookArgs } from "./myWorkbook";
export type MyWorkbook = import("./myWorkbook").MyWorkbook;
export const MyWorkbook: typeof import("./myWorkbook").MyWorkbook = null as any;
utilities.lazyLoad(exports, ["MyWorkbook"], () => require("./myWorkbook"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));

export { PrivateLinkScopeArgs } from "./privateLinkScope";
export type PrivateLinkScope = import("./privateLinkScope").PrivateLinkScope;
export const PrivateLinkScope: typeof import("./privateLinkScope").PrivateLinkScope = null as any;
utilities.lazyLoad(exports, ["PrivateLinkScope"], () => require("./privateLinkScope"));

export { PrivateLinkScopedResourceArgs } from "./privateLinkScopedResource";
export type PrivateLinkScopedResource = import("./privateLinkScopedResource").PrivateLinkScopedResource;
export const PrivateLinkScopedResource: typeof import("./privateLinkScopedResource").PrivateLinkScopedResource = null as any;
utilities.lazyLoad(exports, ["PrivateLinkScopedResource"], () => require("./privateLinkScopedResource"));

export { ProactiveDetectionConfigurationArgs } from "./proactiveDetectionConfiguration";
export type ProactiveDetectionConfiguration = import("./proactiveDetectionConfiguration").ProactiveDetectionConfiguration;
export const ProactiveDetectionConfiguration: typeof import("./proactiveDetectionConfiguration").ProactiveDetectionConfiguration = null as any;
utilities.lazyLoad(exports, ["ProactiveDetectionConfiguration"], () => require("./proactiveDetectionConfiguration"));

export { ScheduledQueryRuleArgs } from "./scheduledQueryRule";
export type ScheduledQueryRule = import("./scheduledQueryRule").ScheduledQueryRule;
export const ScheduledQueryRule: typeof import("./scheduledQueryRule").ScheduledQueryRule = null as any;
utilities.lazyLoad(exports, ["ScheduledQueryRule"], () => require("./scheduledQueryRule"));

export { SubscriptionDiagnosticSettingArgs } from "./subscriptionDiagnosticSetting";
export type SubscriptionDiagnosticSetting = import("./subscriptionDiagnosticSetting").SubscriptionDiagnosticSetting;
export const SubscriptionDiagnosticSetting: typeof import("./subscriptionDiagnosticSetting").SubscriptionDiagnosticSetting = null as any;
utilities.lazyLoad(exports, ["SubscriptionDiagnosticSetting"], () => require("./subscriptionDiagnosticSetting"));

export { TenantActionGroupArgs } from "./tenantActionGroup";
export type TenantActionGroup = import("./tenantActionGroup").TenantActionGroup;
export const TenantActionGroup: typeof import("./tenantActionGroup").TenantActionGroup = null as any;
utilities.lazyLoad(exports, ["TenantActionGroup"], () => require("./tenantActionGroup"));

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

// Export sub-modules:
import * as v20150501 from "./v20150501";
import * as v20160301 from "./v20160301";
import * as v20170401 from "./v20170401";
import * as v20170501preview from "./v20170501preview";
import * as v20171001 from "./v20171001";
import * as v20180301 from "./v20180301";
import * as v20180416 from "./v20180416";
import * as v20180501preview from "./v20180501preview";
import * as v20180601preview from "./v20180601preview";
import * as v20191017preview from "./v20191017preview";
import * as v20200101preview from "./v20200101preview";
import * as v20200202 from "./v20200202";
import * as v20200202preview from "./v20200202preview";
import * as v20200210preview from "./v20200210preview";
import * as v20200301preview from "./v20200301preview";
import * as v20200501preview from "./v20200501preview";
import * as v20200602preview from "./v20200602preview";
import * as v20201001 from "./v20201001";
import * as v20201005preview from "./v20201005preview";
import * as v20201120 from "./v20201120";
import * as v20210303preview from "./v20210303preview";
import * as v20210308 from "./v20210308";
import * as v20210501preview from "./v20210501preview";
import * as v20210701preview from "./v20210701preview";
import * as v20210801 from "./v20210801";
import * as v20211014 from "./v20211014";
import * as v20220401 from "./v20220401";
import * as v20220601 from "./v20220601";
import * as v20220615 from "./v20220615";
import * as v20220801preview from "./v20220801preview";
import * as v20221001 from "./v20221001";
import * as v20230101 from "./v20230101";
import * as v20230101preview from "./v20230101preview";
import * as v20230315preview from "./v20230315preview";
import * as v20230501preview from "./v20230501preview";
import * as v20230601 from "./v20230601";

export {
    v20150501,
    v20160301,
    v20170401,
    v20170501preview,
    v20171001,
    v20180301,
    v20180416,
    v20180501preview,
    v20180601preview,
    v20191017preview,
    v20200101preview,
    v20200202,
    v20200202preview,
    v20200210preview,
    v20200301preview,
    v20200501preview,
    v20200602preview,
    v20201001,
    v20201005preview,
    v20201120,
    v20210303preview,
    v20210308,
    v20210501preview,
    v20210701preview,
    v20210801,
    v20211014,
    v20220401,
    v20220601,
    v20220615,
    v20220801preview,
    v20221001,
    v20230101,
    v20230101preview,
    v20230315preview,
    v20230501preview,
    v20230601,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:insights:ActionGroup":
                return new ActionGroup(name, <any>undefined, { urn })
            case "azure-native:insights:ActivityLogAlert":
                return new ActivityLogAlert(name, <any>undefined, { urn })
            case "azure-native:insights:AlertRule":
                return new AlertRule(name, <any>undefined, { urn })
            case "azure-native:insights:AnalyticsItem":
                return new AnalyticsItem(name, <any>undefined, { urn })
            case "azure-native:insights:AutoscaleSetting":
                return new AutoscaleSetting(name, <any>undefined, { urn })
            case "azure-native:insights:Component":
                return new Component(name, <any>undefined, { urn })
            case "azure-native:insights:ComponentCurrentBillingFeature":
                return new ComponentCurrentBillingFeature(name, <any>undefined, { urn })
            case "azure-native:insights:ComponentLinkedStorageAccount":
                return new ComponentLinkedStorageAccount(name, <any>undefined, { urn })
            case "azure-native:insights:DataCollectionEndpoint":
                return new DataCollectionEndpoint(name, <any>undefined, { urn })
            case "azure-native:insights:DataCollectionRule":
                return new DataCollectionRule(name, <any>undefined, { urn })
            case "azure-native:insights:DataCollectionRuleAssociation":
                return new DataCollectionRuleAssociation(name, <any>undefined, { urn })
            case "azure-native:insights:DiagnosticSetting":
                return new DiagnosticSetting(name, <any>undefined, { urn })
            case "azure-native:insights:ExportConfiguration":
                return new ExportConfiguration(name, <any>undefined, { urn })
            case "azure-native:insights:Favorite":
                return new Favorite(name, <any>undefined, { urn })
            case "azure-native:insights:GuestDiagnosticsSetting":
                return new GuestDiagnosticsSetting(name, <any>undefined, { urn })
            case "azure-native:insights:GuestDiagnosticsSettingsAssociation":
                return new GuestDiagnosticsSettingsAssociation(name, <any>undefined, { urn })
            case "azure-native:insights:LogProfile":
                return new LogProfile(name, <any>undefined, { urn })
            case "azure-native:insights:ManagementGroupDiagnosticSetting":
                return new ManagementGroupDiagnosticSetting(name, <any>undefined, { urn })
            case "azure-native:insights:MetricAlert":
                return new MetricAlert(name, <any>undefined, { urn })
            case "azure-native:insights:MyWorkbook":
                return new MyWorkbook(name, <any>undefined, { urn })
            case "azure-native:insights:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:insights:PrivateLinkScope":
                return new PrivateLinkScope(name, <any>undefined, { urn })
            case "azure-native:insights:PrivateLinkScopedResource":
                return new PrivateLinkScopedResource(name, <any>undefined, { urn })
            case "azure-native:insights:ProactiveDetectionConfiguration":
                return new ProactiveDetectionConfiguration(name, <any>undefined, { urn })
            case "azure-native:insights:ScheduledQueryRule":
                return new ScheduledQueryRule(name, <any>undefined, { urn })
            case "azure-native:insights:SubscriptionDiagnosticSetting":
                return new SubscriptionDiagnosticSetting(name, <any>undefined, { urn })
            case "azure-native:insights:TenantActionGroup":
                return new TenantActionGroup(name, <any>undefined, { urn })
            case "azure-native:insights:WebTest":
                return new WebTest(name, <any>undefined, { urn })
            case "azure-native:insights:Workbook":
                return new Workbook(name, <any>undefined, { urn })
            case "azure-native:insights:WorkbookTemplate":
                return new WorkbookTemplate(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "insights", _module)
