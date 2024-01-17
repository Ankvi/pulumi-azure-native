import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AzureADMetricArgs } from "./azureADMetric";
export type AzureADMetric = import("./azureADMetric").AzureADMetric;
export const AzureADMetric: typeof import("./azureADMetric").AzureADMetric = null as any;
utilities.lazyLoad(exports, ["AzureADMetric"], () => require("./azureADMetric"));

export { DiagnosticSettingArgs } from "./diagnosticSetting";
export type DiagnosticSetting = import("./diagnosticSetting").DiagnosticSetting;
export const DiagnosticSetting: typeof import("./diagnosticSetting").DiagnosticSetting = null as any;
utilities.lazyLoad(exports, ["DiagnosticSetting"], () => require("./diagnosticSetting"));

export { GetAzureADMetricArgs, GetAzureADMetricResult, GetAzureADMetricOutputArgs } from "./getAzureADMetric";
export const getAzureADMetric: typeof import("./getAzureADMetric").getAzureADMetric = null as any;
export const getAzureADMetricOutput: typeof import("./getAzureADMetric").getAzureADMetricOutput = null as any;
utilities.lazyLoad(exports, ["getAzureADMetric","getAzureADMetricOutput"], () => require("./getAzureADMetric"));

export { GetDiagnosticSettingArgs, GetDiagnosticSettingResult, GetDiagnosticSettingOutputArgs } from "./getDiagnosticSetting";
export const getDiagnosticSetting: typeof import("./getDiagnosticSetting").getDiagnosticSetting = null as any;
export const getDiagnosticSettingOutput: typeof import("./getDiagnosticSetting").getDiagnosticSettingOutput = null as any;
utilities.lazyLoad(exports, ["getDiagnosticSetting","getDiagnosticSettingOutput"], () => require("./getDiagnosticSetting"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { GetPrivateLinkForAzureAdArgs, GetPrivateLinkForAzureAdResult, GetPrivateLinkForAzureAdOutputArgs } from "./getPrivateLinkForAzureAd";
export const getPrivateLinkForAzureAd: typeof import("./getPrivateLinkForAzureAd").getPrivateLinkForAzureAd = null as any;
export const getPrivateLinkForAzureAdOutput: typeof import("./getPrivateLinkForAzureAd").getPrivateLinkForAzureAdOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateLinkForAzureAd","getPrivateLinkForAzureAdOutput"], () => require("./getPrivateLinkForAzureAd"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));

export { PrivateLinkForAzureAdArgs } from "./privateLinkForAzureAd";
export type PrivateLinkForAzureAd = import("./privateLinkForAzureAd").PrivateLinkForAzureAd;
export const PrivateLinkForAzureAd: typeof import("./privateLinkForAzureAd").PrivateLinkForAzureAd = null as any;
utilities.lazyLoad(exports, ["PrivateLinkForAzureAd"], () => require("./privateLinkForAzureAd"));


// Export enums:
export * from "./types/enums";



const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:aadiam:AzureADMetric":
                return new AzureADMetric(name, <any>undefined, { urn })
            case "azure-native:aadiam:DiagnosticSetting":
                return new DiagnosticSetting(name, <any>undefined, { urn })
            case "azure-native:aadiam:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:aadiam:PrivateLinkForAzureAd":
                return new PrivateLinkForAzureAd(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "aadiam", _module)