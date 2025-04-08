import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a data connector.
 *
 * Uses Azure REST API version 2024-09-01.
 */
export function getPremiumMicrosoftDefenderForThreatIntelligence(args: GetPremiumMicrosoftDefenderForThreatIntelligenceArgs, opts?: pulumi.InvokeOptions): Promise<GetPremiumMicrosoftDefenderForThreatIntelligenceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights:getPremiumMicrosoftDefenderForThreatIntelligence", {
        "dataConnectorId": args.dataConnectorId,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetPremiumMicrosoftDefenderForThreatIntelligenceArgs {
    /**
     * Connector ID
     */
    dataConnectorId: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * Represents Premium Microsoft Defender for Threat Intelligence data connector.
 */
export interface GetPremiumMicrosoftDefenderForThreatIntelligenceResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The available data types for the connector.
     */
    readonly dataTypes: types.outputs.PremiumMdtiDataConnectorDataTypesResponse;
    /**
     * Etag of the azure resource
     */
    readonly etag?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The kind of the data connector
     * Expected value is 'PremiumMicrosoftDefenderForThreatIntelligence'.
     */
    readonly kind: "PremiumMicrosoftDefenderForThreatIntelligence";
    /**
     * The lookback period for the feed to be imported. The date-time to begin importing the feed from, for example: 2024-01-01T00:00:00.000Z.
     */
    readonly lookbackPeriod: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The flag to indicate whether the tenant has the premium SKU required to access this connector.
     */
    readonly requiredSKUsPresent?: boolean;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The tenant id to connect to, and get the data from.
     */
    readonly tenantId?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets a data connector.
 *
 * Uses Azure REST API version 2024-09-01.
 */
export function getPremiumMicrosoftDefenderForThreatIntelligenceOutput(args: GetPremiumMicrosoftDefenderForThreatIntelligenceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPremiumMicrosoftDefenderForThreatIntelligenceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:securityinsights:getPremiumMicrosoftDefenderForThreatIntelligence", {
        "dataConnectorId": args.dataConnectorId,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetPremiumMicrosoftDefenderForThreatIntelligenceOutputArgs {
    /**
     * Connector ID
     */
    dataConnectorId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}