import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { EvidenceArgs } from "./evidence";
export type Evidence = import("./evidence").Evidence;
export const Evidence: typeof import("./evidence").Evidence = null as any;
utilities.lazyLoad(exports, ["Evidence"], () => require("./evidence"));

export { GetEvidenceArgs, GetEvidenceResult, GetEvidenceOutputArgs } from "./getEvidence";
export const getEvidence: typeof import("./getEvidence").getEvidence = null as any;
export const getEvidenceOutput: typeof import("./getEvidence").getEvidenceOutput = null as any;
utilities.lazyLoad(exports, ["getEvidence","getEvidenceOutput"], () => require("./getEvidence"));

export { GetProviderActionCollectionCountArgs, GetProviderActionCollectionCountResult, GetProviderActionCollectionCountOutputArgs } from "./getProviderActionCollectionCount";
export const getProviderActionCollectionCount: typeof import("./getProviderActionCollectionCount").getProviderActionCollectionCount = null as any;
export const getProviderActionCollectionCountOutput: typeof import("./getProviderActionCollectionCount").getProviderActionCollectionCountOutput = null as any;
utilities.lazyLoad(exports, ["getProviderActionCollectionCount","getProviderActionCollectionCountOutput"], () => require("./getProviderActionCollectionCount"));

export { GetProviderActionOverviewStatusArgs, GetProviderActionOverviewStatusResult, GetProviderActionOverviewStatusOutputArgs } from "./getProviderActionOverviewStatus";
export const getProviderActionOverviewStatus: typeof import("./getProviderActionOverviewStatus").getProviderActionOverviewStatus = null as any;
export const getProviderActionOverviewStatusOutput: typeof import("./getProviderActionOverviewStatus").getProviderActionOverviewStatusOutput = null as any;
utilities.lazyLoad(exports, ["getProviderActionOverviewStatus","getProviderActionOverviewStatusOutput"], () => require("./getProviderActionOverviewStatus"));

export { GetReportArgs, GetReportResult, GetReportOutputArgs } from "./getReport";
export const getReport: typeof import("./getReport").getReport = null as any;
export const getReportOutput: typeof import("./getReport").getReportOutput = null as any;
utilities.lazyLoad(exports, ["getReport","getReportOutput"], () => require("./getReport"));

export { GetReportScopingQuestionsArgs, GetReportScopingQuestionsResult, GetReportScopingQuestionsOutputArgs } from "./getReportScopingQuestions";
export const getReportScopingQuestions: typeof import("./getReportScopingQuestions").getReportScopingQuestions = null as any;
export const getReportScopingQuestionsOutput: typeof import("./getReportScopingQuestions").getReportScopingQuestionsOutput = null as any;
utilities.lazyLoad(exports, ["getReportScopingQuestions","getReportScopingQuestionsOutput"], () => require("./getReportScopingQuestions"));

export { GetScopingConfigurationArgs, GetScopingConfigurationResult, GetScopingConfigurationOutputArgs } from "./getScopingConfiguration";
export const getScopingConfiguration: typeof import("./getScopingConfiguration").getScopingConfiguration = null as any;
export const getScopingConfigurationOutput: typeof import("./getScopingConfiguration").getScopingConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getScopingConfiguration","getScopingConfigurationOutput"], () => require("./getScopingConfiguration"));

export { GetWebhookArgs, GetWebhookResult, GetWebhookOutputArgs } from "./getWebhook";
export const getWebhook: typeof import("./getWebhook").getWebhook = null as any;
export const getWebhookOutput: typeof import("./getWebhook").getWebhookOutput = null as any;
utilities.lazyLoad(exports, ["getWebhook","getWebhookOutput"], () => require("./getWebhook"));

export { ListProviderActionInUseStorageAccountsArgs, ListProviderActionInUseStorageAccountsResult, ListProviderActionInUseStorageAccountsOutputArgs } from "./listProviderActionInUseStorageAccounts";
export const listProviderActionInUseStorageAccounts: typeof import("./listProviderActionInUseStorageAccounts").listProviderActionInUseStorageAccounts = null as any;
export const listProviderActionInUseStorageAccountsOutput: typeof import("./listProviderActionInUseStorageAccounts").listProviderActionInUseStorageAccountsOutput = null as any;
utilities.lazyLoad(exports, ["listProviderActionInUseStorageAccounts","listProviderActionInUseStorageAccountsOutput"], () => require("./listProviderActionInUseStorageAccounts"));

export { ReportArgs } from "./report";
export type Report = import("./report").Report;
export const Report: typeof import("./report").Report = null as any;
utilities.lazyLoad(exports, ["Report"], () => require("./report"));

export { ScopingConfigurationArgs } from "./scopingConfiguration";
export type ScopingConfiguration = import("./scopingConfiguration").ScopingConfiguration;
export const ScopingConfiguration: typeof import("./scopingConfiguration").ScopingConfiguration = null as any;
utilities.lazyLoad(exports, ["ScopingConfiguration"], () => require("./scopingConfiguration"));

export { WebhookArgs } from "./webhook";
export type Webhook = import("./webhook").Webhook;
export const Webhook: typeof import("./webhook").Webhook = null as any;
utilities.lazyLoad(exports, ["Webhook"], () => require("./webhook"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:appcomplianceautomation:Evidence":
                return new Evidence(name, <any>undefined, { urn })
            case "azure-native:appcomplianceautomation:Report":
                return new Report(name, <any>undefined, { urn })
            case "azure-native:appcomplianceautomation:ScopingConfiguration":
                return new ScopingConfiguration(name, <any>undefined, { urn })
            case "azure-native:appcomplianceautomation:Webhook":
                return new Webhook(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "appcomplianceautomation", _module)