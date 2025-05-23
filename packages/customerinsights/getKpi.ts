import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a KPI in the hub.
 *
 * Uses Azure REST API version 2017-04-26.
 */
export function getKpi(args: GetKpiArgs, opts?: pulumi.InvokeOptions): Promise<GetKpiResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:customerinsights:getKpi", {
        "hubName": args.hubName,
        "kpiName": args.kpiName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetKpiArgs {
    /**
     * The name of the hub.
     */
    hubName: string;
    /**
     * The name of the KPI.
     */
    kpiName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * The KPI resource format.
 */
export interface GetKpiResult {
    /**
     * The aliases.
     */
    readonly aliases?: types.outputs.KpiAliasResponse[];
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The calculation window.
     */
    readonly calculationWindow: string;
    /**
     * Name of calculation window field.
     */
    readonly calculationWindowFieldName?: string;
    /**
     * Localized description for the KPI.
     */
    readonly description?: {[key: string]: string};
    /**
     * Localized display name for the KPI.
     */
    readonly displayName?: {[key: string]: string};
    /**
     * The mapping entity type.
     */
    readonly entityType: string;
    /**
     * The mapping entity name.
     */
    readonly entityTypeName: string;
    /**
     * The computation expression for the KPI.
     */
    readonly expression: string;
    /**
     * The KPI extracts.
     */
    readonly extracts?: types.outputs.KpiExtractResponse[];
    /**
     * The filter expression for the KPI.
     */
    readonly filter?: string;
    /**
     * The computation function for the KPI.
     */
    readonly function: string;
    /**
     * the group by properties for the KPI.
     */
    readonly groupBy?: string[];
    /**
     * The KPI GroupByMetadata.
     */
    readonly groupByMetadata: types.outputs.KpiGroupByMetadataResponse[];
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * The KPI name.
     */
    readonly kpiName: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The participant profiles.
     */
    readonly participantProfilesMetadata: types.outputs.KpiParticipantProfilesMetadataResponse[];
    /**
     * Provisioning state.
     */
    readonly provisioningState: string;
    /**
     * The hub name.
     */
    readonly tenantId: string;
    /**
     * The KPI thresholds.
     */
    readonly thresHolds?: types.outputs.KpiThresholdsResponse;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * The unit of measurement for the KPI.
     */
    readonly unit?: string;
}
/**
 * Gets a KPI in the hub.
 *
 * Uses Azure REST API version 2017-04-26.
 */
export function getKpiOutput(args: GetKpiOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetKpiResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:customerinsights:getKpi", {
        "hubName": args.hubName,
        "kpiName": args.kpiName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetKpiOutputArgs {
    /**
     * The name of the hub.
     */
    hubName: pulumi.Input<string>;
    /**
     * The name of the KPI.
     */
    kpiName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}