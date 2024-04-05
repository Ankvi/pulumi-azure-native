import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AADDataConnectorArgs } from "./aaddataConnector";
export type AADDataConnector = import("./aaddataConnector").AADDataConnector;
export const AADDataConnector: typeof import("./aaddataConnector").AADDataConnector = null as any;
utilities.lazyLoad(exports, ["AADDataConnector"], () => require("./aaddataConnector"));

export { AATPDataConnectorArgs } from "./aatpdataConnector";
export type AATPDataConnector = import("./aatpdataConnector").AATPDataConnector;
export const AATPDataConnector: typeof import("./aatpdataConnector").AATPDataConnector = null as any;
utilities.lazyLoad(exports, ["AATPDataConnector"], () => require("./aatpdataConnector"));

export { ActionArgs } from "./action";
export type Action = import("./action").Action;
export const Action: typeof import("./action").Action = null as any;
utilities.lazyLoad(exports, ["Action"], () => require("./action"));

export { AnomalySecurityMLAnalyticsSettingsArgs } from "./anomalySecurityMLAnalyticsSettings";
export type AnomalySecurityMLAnalyticsSettings = import("./anomalySecurityMLAnalyticsSettings").AnomalySecurityMLAnalyticsSettings;
export const AnomalySecurityMLAnalyticsSettings: typeof import("./anomalySecurityMLAnalyticsSettings").AnomalySecurityMLAnalyticsSettings = null as any;
utilities.lazyLoad(exports, ["AnomalySecurityMLAnalyticsSettings"], () => require("./anomalySecurityMLAnalyticsSettings"));

export { ASCDataConnectorArgs } from "./ascdataConnector";
export type ASCDataConnector = import("./ascdataConnector").ASCDataConnector;
export const ASCDataConnector: typeof import("./ascdataConnector").ASCDataConnector = null as any;
utilities.lazyLoad(exports, ["ASCDataConnector"], () => require("./ascdataConnector"));

export { AutomationRuleArgs } from "./automationRule";
export type AutomationRule = import("./automationRule").AutomationRule;
export const AutomationRule: typeof import("./automationRule").AutomationRule = null as any;
utilities.lazyLoad(exports, ["AutomationRule"], () => require("./automationRule"));

export { AwsCloudTrailDataConnectorArgs } from "./awsCloudTrailDataConnector";
export type AwsCloudTrailDataConnector = import("./awsCloudTrailDataConnector").AwsCloudTrailDataConnector;
export const AwsCloudTrailDataConnector: typeof import("./awsCloudTrailDataConnector").AwsCloudTrailDataConnector = null as any;
utilities.lazyLoad(exports, ["AwsCloudTrailDataConnector"], () => require("./awsCloudTrailDataConnector"));

export { BookmarkArgs } from "./bookmark";
export type Bookmark = import("./bookmark").Bookmark;
export const Bookmark: typeof import("./bookmark").Bookmark = null as any;
utilities.lazyLoad(exports, ["Bookmark"], () => require("./bookmark"));

export { ContentPackageArgs } from "./contentPackage";
export type ContentPackage = import("./contentPackage").ContentPackage;
export const ContentPackage: typeof import("./contentPackage").ContentPackage = null as any;
utilities.lazyLoad(exports, ["ContentPackage"], () => require("./contentPackage"));

export { ContentTemplateArgs } from "./contentTemplate";
export type ContentTemplate = import("./contentTemplate").ContentTemplate;
export const ContentTemplate: typeof import("./contentTemplate").ContentTemplate = null as any;
utilities.lazyLoad(exports, ["ContentTemplate"], () => require("./contentTemplate"));

export { FusionAlertRuleArgs } from "./fusionAlertRule";
export type FusionAlertRule = import("./fusionAlertRule").FusionAlertRule;
export const FusionAlertRule: typeof import("./fusionAlertRule").FusionAlertRule = null as any;
utilities.lazyLoad(exports, ["FusionAlertRule"], () => require("./fusionAlertRule"));

export { GetAADDataConnectorArgs, GetAADDataConnectorResult, GetAADDataConnectorOutputArgs } from "./getAADDataConnector";
export const getAADDataConnector: typeof import("./getAADDataConnector").getAADDataConnector = null as any;
export const getAADDataConnectorOutput: typeof import("./getAADDataConnector").getAADDataConnectorOutput = null as any;
utilities.lazyLoad(exports, ["getAADDataConnector","getAADDataConnectorOutput"], () => require("./getAADDataConnector"));

export { GetAATPDataConnectorArgs, GetAATPDataConnectorResult, GetAATPDataConnectorOutputArgs } from "./getAATPDataConnector";
export const getAATPDataConnector: typeof import("./getAATPDataConnector").getAATPDataConnector = null as any;
export const getAATPDataConnectorOutput: typeof import("./getAATPDataConnector").getAATPDataConnectorOutput = null as any;
utilities.lazyLoad(exports, ["getAATPDataConnector","getAATPDataConnectorOutput"], () => require("./getAATPDataConnector"));

export { GetASCDataConnectorArgs, GetASCDataConnectorResult, GetASCDataConnectorOutputArgs } from "./getASCDataConnector";
export const getASCDataConnector: typeof import("./getASCDataConnector").getASCDataConnector = null as any;
export const getASCDataConnectorOutput: typeof import("./getASCDataConnector").getASCDataConnectorOutput = null as any;
utilities.lazyLoad(exports, ["getASCDataConnector","getASCDataConnectorOutput"], () => require("./getASCDataConnector"));

export { GetActionArgs, GetActionResult, GetActionOutputArgs } from "./getAction";
export const getAction: typeof import("./getAction").getAction = null as any;
export const getActionOutput: typeof import("./getAction").getActionOutput = null as any;
utilities.lazyLoad(exports, ["getAction","getActionOutput"], () => require("./getAction"));

export { GetAnomalySecurityMLAnalyticsSettingsArgs, GetAnomalySecurityMLAnalyticsSettingsResult, GetAnomalySecurityMLAnalyticsSettingsOutputArgs } from "./getAnomalySecurityMLAnalyticsSettings";
export const getAnomalySecurityMLAnalyticsSettings: typeof import("./getAnomalySecurityMLAnalyticsSettings").getAnomalySecurityMLAnalyticsSettings = null as any;
export const getAnomalySecurityMLAnalyticsSettingsOutput: typeof import("./getAnomalySecurityMLAnalyticsSettings").getAnomalySecurityMLAnalyticsSettingsOutput = null as any;
utilities.lazyLoad(exports, ["getAnomalySecurityMLAnalyticsSettings","getAnomalySecurityMLAnalyticsSettingsOutput"], () => require("./getAnomalySecurityMLAnalyticsSettings"));

export { GetAutomationRuleArgs, GetAutomationRuleResult, GetAutomationRuleOutputArgs } from "./getAutomationRule";
export const getAutomationRule: typeof import("./getAutomationRule").getAutomationRule = null as any;
export const getAutomationRuleOutput: typeof import("./getAutomationRule").getAutomationRuleOutput = null as any;
utilities.lazyLoad(exports, ["getAutomationRule","getAutomationRuleOutput"], () => require("./getAutomationRule"));

export { GetAwsCloudTrailDataConnectorArgs, GetAwsCloudTrailDataConnectorResult, GetAwsCloudTrailDataConnectorOutputArgs } from "./getAwsCloudTrailDataConnector";
export const getAwsCloudTrailDataConnector: typeof import("./getAwsCloudTrailDataConnector").getAwsCloudTrailDataConnector = null as any;
export const getAwsCloudTrailDataConnectorOutput: typeof import("./getAwsCloudTrailDataConnector").getAwsCloudTrailDataConnectorOutput = null as any;
utilities.lazyLoad(exports, ["getAwsCloudTrailDataConnector","getAwsCloudTrailDataConnectorOutput"], () => require("./getAwsCloudTrailDataConnector"));

export { GetBookmarkArgs, GetBookmarkResult, GetBookmarkOutputArgs } from "./getBookmark";
export const getBookmark: typeof import("./getBookmark").getBookmark = null as any;
export const getBookmarkOutput: typeof import("./getBookmark").getBookmarkOutput = null as any;
utilities.lazyLoad(exports, ["getBookmark","getBookmarkOutput"], () => require("./getBookmark"));

export { GetContentPackageArgs, GetContentPackageResult, GetContentPackageOutputArgs } from "./getContentPackage";
export const getContentPackage: typeof import("./getContentPackage").getContentPackage = null as any;
export const getContentPackageOutput: typeof import("./getContentPackage").getContentPackageOutput = null as any;
utilities.lazyLoad(exports, ["getContentPackage","getContentPackageOutput"], () => require("./getContentPackage"));

export { GetContentTemplateArgs, GetContentTemplateResult, GetContentTemplateOutputArgs } from "./getContentTemplate";
export const getContentTemplate: typeof import("./getContentTemplate").getContentTemplate = null as any;
export const getContentTemplateOutput: typeof import("./getContentTemplate").getContentTemplateOutput = null as any;
utilities.lazyLoad(exports, ["getContentTemplate","getContentTemplateOutput"], () => require("./getContentTemplate"));

export { GetFusionAlertRuleArgs, GetFusionAlertRuleResult, GetFusionAlertRuleOutputArgs } from "./getFusionAlertRule";
export const getFusionAlertRule: typeof import("./getFusionAlertRule").getFusionAlertRule = null as any;
export const getFusionAlertRuleOutput: typeof import("./getFusionAlertRule").getFusionAlertRuleOutput = null as any;
utilities.lazyLoad(exports, ["getFusionAlertRule","getFusionAlertRuleOutput"], () => require("./getFusionAlertRule"));

export { GetIncidentArgs, GetIncidentResult, GetIncidentOutputArgs } from "./getIncident";
export const getIncident: typeof import("./getIncident").getIncident = null as any;
export const getIncidentOutput: typeof import("./getIncident").getIncidentOutput = null as any;
utilities.lazyLoad(exports, ["getIncident","getIncidentOutput"], () => require("./getIncident"));

export { GetIncidentCommentArgs, GetIncidentCommentResult, GetIncidentCommentOutputArgs } from "./getIncidentComment";
export const getIncidentComment: typeof import("./getIncidentComment").getIncidentComment = null as any;
export const getIncidentCommentOutput: typeof import("./getIncidentComment").getIncidentCommentOutput = null as any;
utilities.lazyLoad(exports, ["getIncidentComment","getIncidentCommentOutput"], () => require("./getIncidentComment"));

export { GetIncidentRelationArgs, GetIncidentRelationResult, GetIncidentRelationOutputArgs } from "./getIncidentRelation";
export const getIncidentRelation: typeof import("./getIncidentRelation").getIncidentRelation = null as any;
export const getIncidentRelationOutput: typeof import("./getIncidentRelation").getIncidentRelationOutput = null as any;
utilities.lazyLoad(exports, ["getIncidentRelation","getIncidentRelationOutput"], () => require("./getIncidentRelation"));

export { GetMCASDataConnectorArgs, GetMCASDataConnectorResult, GetMCASDataConnectorOutputArgs } from "./getMCASDataConnector";
export const getMCASDataConnector: typeof import("./getMCASDataConnector").getMCASDataConnector = null as any;
export const getMCASDataConnectorOutput: typeof import("./getMCASDataConnector").getMCASDataConnectorOutput = null as any;
utilities.lazyLoad(exports, ["getMCASDataConnector","getMCASDataConnectorOutput"], () => require("./getMCASDataConnector"));

export { GetMDATPDataConnectorArgs, GetMDATPDataConnectorResult, GetMDATPDataConnectorOutputArgs } from "./getMDATPDataConnector";
export const getMDATPDataConnector: typeof import("./getMDATPDataConnector").getMDATPDataConnector = null as any;
export const getMDATPDataConnectorOutput: typeof import("./getMDATPDataConnector").getMDATPDataConnectorOutput = null as any;
utilities.lazyLoad(exports, ["getMDATPDataConnector","getMDATPDataConnectorOutput"], () => require("./getMDATPDataConnector"));

export { GetMetadataArgs, GetMetadataResult, GetMetadataOutputArgs } from "./getMetadata";
export const getMetadata: typeof import("./getMetadata").getMetadata = null as any;
export const getMetadataOutput: typeof import("./getMetadata").getMetadataOutput = null as any;
utilities.lazyLoad(exports, ["getMetadata","getMetadataOutput"], () => require("./getMetadata"));

export { GetMicrosoftSecurityIncidentCreationAlertRuleArgs, GetMicrosoftSecurityIncidentCreationAlertRuleResult, GetMicrosoftSecurityIncidentCreationAlertRuleOutputArgs } from "./getMicrosoftSecurityIncidentCreationAlertRule";
export const getMicrosoftSecurityIncidentCreationAlertRule: typeof import("./getMicrosoftSecurityIncidentCreationAlertRule").getMicrosoftSecurityIncidentCreationAlertRule = null as any;
export const getMicrosoftSecurityIncidentCreationAlertRuleOutput: typeof import("./getMicrosoftSecurityIncidentCreationAlertRule").getMicrosoftSecurityIncidentCreationAlertRuleOutput = null as any;
utilities.lazyLoad(exports, ["getMicrosoftSecurityIncidentCreationAlertRule","getMicrosoftSecurityIncidentCreationAlertRuleOutput"], () => require("./getMicrosoftSecurityIncidentCreationAlertRule"));

export { GetOfficeDataConnectorArgs, GetOfficeDataConnectorResult, GetOfficeDataConnectorOutputArgs } from "./getOfficeDataConnector";
export const getOfficeDataConnector: typeof import("./getOfficeDataConnector").getOfficeDataConnector = null as any;
export const getOfficeDataConnectorOutput: typeof import("./getOfficeDataConnector").getOfficeDataConnectorOutput = null as any;
utilities.lazyLoad(exports, ["getOfficeDataConnector","getOfficeDataConnectorOutput"], () => require("./getOfficeDataConnector"));

export { GetScheduledAlertRuleArgs, GetScheduledAlertRuleResult, GetScheduledAlertRuleOutputArgs } from "./getScheduledAlertRule";
export const getScheduledAlertRule: typeof import("./getScheduledAlertRule").getScheduledAlertRule = null as any;
export const getScheduledAlertRuleOutput: typeof import("./getScheduledAlertRule").getScheduledAlertRuleOutput = null as any;
utilities.lazyLoad(exports, ["getScheduledAlertRule","getScheduledAlertRuleOutput"], () => require("./getScheduledAlertRule"));

export { GetSentinelOnboardingStateArgs, GetSentinelOnboardingStateResult, GetSentinelOnboardingStateOutputArgs } from "./getSentinelOnboardingState";
export const getSentinelOnboardingState: typeof import("./getSentinelOnboardingState").getSentinelOnboardingState = null as any;
export const getSentinelOnboardingStateOutput: typeof import("./getSentinelOnboardingState").getSentinelOnboardingStateOutput = null as any;
utilities.lazyLoad(exports, ["getSentinelOnboardingState","getSentinelOnboardingStateOutput"], () => require("./getSentinelOnboardingState"));

export { GetTIDataConnectorArgs, GetTIDataConnectorResult, GetTIDataConnectorOutputArgs } from "./getTIDataConnector";
export const getTIDataConnector: typeof import("./getTIDataConnector").getTIDataConnector = null as any;
export const getTIDataConnectorOutput: typeof import("./getTIDataConnector").getTIDataConnectorOutput = null as any;
utilities.lazyLoad(exports, ["getTIDataConnector","getTIDataConnectorOutput"], () => require("./getTIDataConnector"));

export { GetThreatIntelligenceIndicatorArgs, GetThreatIntelligenceIndicatorResult, GetThreatIntelligenceIndicatorOutputArgs } from "./getThreatIntelligenceIndicator";
export const getThreatIntelligenceIndicator: typeof import("./getThreatIntelligenceIndicator").getThreatIntelligenceIndicator = null as any;
export const getThreatIntelligenceIndicatorOutput: typeof import("./getThreatIntelligenceIndicator").getThreatIntelligenceIndicatorOutput = null as any;
utilities.lazyLoad(exports, ["getThreatIntelligenceIndicator","getThreatIntelligenceIndicatorOutput"], () => require("./getThreatIntelligenceIndicator"));

export { GetWatchlistArgs, GetWatchlistResult, GetWatchlistOutputArgs } from "./getWatchlist";
export const getWatchlist: typeof import("./getWatchlist").getWatchlist = null as any;
export const getWatchlistOutput: typeof import("./getWatchlist").getWatchlistOutput = null as any;
utilities.lazyLoad(exports, ["getWatchlist","getWatchlistOutput"], () => require("./getWatchlist"));

export { GetWatchlistItemArgs, GetWatchlistItemResult, GetWatchlistItemOutputArgs } from "./getWatchlistItem";
export const getWatchlistItem: typeof import("./getWatchlistItem").getWatchlistItem = null as any;
export const getWatchlistItemOutput: typeof import("./getWatchlistItem").getWatchlistItemOutput = null as any;
utilities.lazyLoad(exports, ["getWatchlistItem","getWatchlistItemOutput"], () => require("./getWatchlistItem"));

export { IncidentArgs } from "./incident";
export type Incident = import("./incident").Incident;
export const Incident: typeof import("./incident").Incident = null as any;
utilities.lazyLoad(exports, ["Incident"], () => require("./incident"));

export { IncidentCommentArgs } from "./incidentComment";
export type IncidentComment = import("./incidentComment").IncidentComment;
export const IncidentComment: typeof import("./incidentComment").IncidentComment = null as any;
utilities.lazyLoad(exports, ["IncidentComment"], () => require("./incidentComment"));

export { IncidentRelationArgs } from "./incidentRelation";
export type IncidentRelation = import("./incidentRelation").IncidentRelation;
export const IncidentRelation: typeof import("./incidentRelation").IncidentRelation = null as any;
utilities.lazyLoad(exports, ["IncidentRelation"], () => require("./incidentRelation"));

export { ListSourceControlRepositoriesArgs, ListSourceControlRepositoriesResult, ListSourceControlRepositoriesOutputArgs } from "./listSourceControlRepositories";
export const listSourceControlRepositories: typeof import("./listSourceControlRepositories").listSourceControlRepositories = null as any;
export const listSourceControlRepositoriesOutput: typeof import("./listSourceControlRepositories").listSourceControlRepositoriesOutput = null as any;
utilities.lazyLoad(exports, ["listSourceControlRepositories","listSourceControlRepositoriesOutput"], () => require("./listSourceControlRepositories"));

export { MCASDataConnectorArgs } from "./mcasdataConnector";
export type MCASDataConnector = import("./mcasdataConnector").MCASDataConnector;
export const MCASDataConnector: typeof import("./mcasdataConnector").MCASDataConnector = null as any;
utilities.lazyLoad(exports, ["MCASDataConnector"], () => require("./mcasdataConnector"));

export { MDATPDataConnectorArgs } from "./mdatpdataConnector";
export type MDATPDataConnector = import("./mdatpdataConnector").MDATPDataConnector;
export const MDATPDataConnector: typeof import("./mdatpdataConnector").MDATPDataConnector = null as any;
utilities.lazyLoad(exports, ["MDATPDataConnector"], () => require("./mdatpdataConnector"));

export { MetadataArgs } from "./metadata";
export type Metadata = import("./metadata").Metadata;
export const Metadata: typeof import("./metadata").Metadata = null as any;
utilities.lazyLoad(exports, ["Metadata"], () => require("./metadata"));

export { MicrosoftSecurityIncidentCreationAlertRuleArgs } from "./microsoftSecurityIncidentCreationAlertRule";
export type MicrosoftSecurityIncidentCreationAlertRule = import("./microsoftSecurityIncidentCreationAlertRule").MicrosoftSecurityIncidentCreationAlertRule;
export const MicrosoftSecurityIncidentCreationAlertRule: typeof import("./microsoftSecurityIncidentCreationAlertRule").MicrosoftSecurityIncidentCreationAlertRule = null as any;
utilities.lazyLoad(exports, ["MicrosoftSecurityIncidentCreationAlertRule"], () => require("./microsoftSecurityIncidentCreationAlertRule"));

export { OfficeDataConnectorArgs } from "./officeDataConnector";
export type OfficeDataConnector = import("./officeDataConnector").OfficeDataConnector;
export const OfficeDataConnector: typeof import("./officeDataConnector").OfficeDataConnector = null as any;
utilities.lazyLoad(exports, ["OfficeDataConnector"], () => require("./officeDataConnector"));

export { ScheduledAlertRuleArgs } from "./scheduledAlertRule";
export type ScheduledAlertRule = import("./scheduledAlertRule").ScheduledAlertRule;
export const ScheduledAlertRule: typeof import("./scheduledAlertRule").ScheduledAlertRule = null as any;
utilities.lazyLoad(exports, ["ScheduledAlertRule"], () => require("./scheduledAlertRule"));

export { SentinelOnboardingStateArgs } from "./sentinelOnboardingState";
export type SentinelOnboardingState = import("./sentinelOnboardingState").SentinelOnboardingState;
export const SentinelOnboardingState: typeof import("./sentinelOnboardingState").SentinelOnboardingState = null as any;
utilities.lazyLoad(exports, ["SentinelOnboardingState"], () => require("./sentinelOnboardingState"));

export { ThreatIntelligenceIndicatorArgs } from "./threatIntelligenceIndicator";
export type ThreatIntelligenceIndicator = import("./threatIntelligenceIndicator").ThreatIntelligenceIndicator;
export const ThreatIntelligenceIndicator: typeof import("./threatIntelligenceIndicator").ThreatIntelligenceIndicator = null as any;
utilities.lazyLoad(exports, ["ThreatIntelligenceIndicator"], () => require("./threatIntelligenceIndicator"));

export { TIDataConnectorArgs } from "./tidataConnector";
export type TIDataConnector = import("./tidataConnector").TIDataConnector;
export const TIDataConnector: typeof import("./tidataConnector").TIDataConnector = null as any;
utilities.lazyLoad(exports, ["TIDataConnector"], () => require("./tidataConnector"));

export { WatchlistArgs } from "./watchlist";
export type Watchlist = import("./watchlist").Watchlist;
export const Watchlist: typeof import("./watchlist").Watchlist = null as any;
utilities.lazyLoad(exports, ["Watchlist"], () => require("./watchlist"));

export { WatchlistItemArgs } from "./watchlistItem";
export type WatchlistItem = import("./watchlistItem").WatchlistItem;
export const WatchlistItem: typeof import("./watchlistItem").WatchlistItem = null as any;
utilities.lazyLoad(exports, ["WatchlistItem"], () => require("./watchlistItem"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:securityinsights/v20231101:AADDataConnector":
                return new AADDataConnector(name, <any>undefined, { urn })
            case "azure-native:securityinsights/v20231101:AATPDataConnector":
                return new AATPDataConnector(name, <any>undefined, { urn })
            case "azure-native:securityinsights/v20231101:ASCDataConnector":
                return new ASCDataConnector(name, <any>undefined, { urn })
            case "azure-native:securityinsights/v20231101:Action":
                return new Action(name, <any>undefined, { urn })
            case "azure-native:securityinsights/v20231101:AnomalySecurityMLAnalyticsSettings":
                return new AnomalySecurityMLAnalyticsSettings(name, <any>undefined, { urn })
            case "azure-native:securityinsights/v20231101:AutomationRule":
                return new AutomationRule(name, <any>undefined, { urn })
            case "azure-native:securityinsights/v20231101:AwsCloudTrailDataConnector":
                return new AwsCloudTrailDataConnector(name, <any>undefined, { urn })
            case "azure-native:securityinsights/v20231101:Bookmark":
                return new Bookmark(name, <any>undefined, { urn })
            case "azure-native:securityinsights/v20231101:ContentPackage":
                return new ContentPackage(name, <any>undefined, { urn })
            case "azure-native:securityinsights/v20231101:ContentTemplate":
                return new ContentTemplate(name, <any>undefined, { urn })
            case "azure-native:securityinsights/v20231101:FusionAlertRule":
                return new FusionAlertRule(name, <any>undefined, { urn })
            case "azure-native:securityinsights/v20231101:Incident":
                return new Incident(name, <any>undefined, { urn })
            case "azure-native:securityinsights/v20231101:IncidentComment":
                return new IncidentComment(name, <any>undefined, { urn })
            case "azure-native:securityinsights/v20231101:IncidentRelation":
                return new IncidentRelation(name, <any>undefined, { urn })
            case "azure-native:securityinsights/v20231101:MCASDataConnector":
                return new MCASDataConnector(name, <any>undefined, { urn })
            case "azure-native:securityinsights/v20231101:MDATPDataConnector":
                return new MDATPDataConnector(name, <any>undefined, { urn })
            case "azure-native:securityinsights/v20231101:Metadata":
                return new Metadata(name, <any>undefined, { urn })
            case "azure-native:securityinsights/v20231101:MicrosoftSecurityIncidentCreationAlertRule":
                return new MicrosoftSecurityIncidentCreationAlertRule(name, <any>undefined, { urn })
            case "azure-native:securityinsights/v20231101:OfficeDataConnector":
                return new OfficeDataConnector(name, <any>undefined, { urn })
            case "azure-native:securityinsights/v20231101:ScheduledAlertRule":
                return new ScheduledAlertRule(name, <any>undefined, { urn })
            case "azure-native:securityinsights/v20231101:SentinelOnboardingState":
                return new SentinelOnboardingState(name, <any>undefined, { urn })
            case "azure-native:securityinsights/v20231101:TIDataConnector":
                return new TIDataConnector(name, <any>undefined, { urn })
            case "azure-native:securityinsights/v20231101:ThreatIntelligenceIndicator":
                return new ThreatIntelligenceIndicator(name, <any>undefined, { urn })
            case "azure-native:securityinsights/v20231101:Watchlist":
                return new Watchlist(name, <any>undefined, { urn })
            case "azure-native:securityinsights/v20231101:WatchlistItem":
                return new WatchlistItem(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "securityinsights/v20231101", _module)