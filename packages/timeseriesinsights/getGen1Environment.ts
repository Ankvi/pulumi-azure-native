import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the environment with the specified name in the specified subscription and resource group.
 *
 * Uses Azure REST API version 2020-05-15.
 */
export function getGen1Environment(args: GetGen1EnvironmentArgs, opts?: pulumi.InvokeOptions): Promise<GetGen1EnvironmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:timeseriesinsights:getGen1Environment", {
        "environmentName": args.environmentName,
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetGen1EnvironmentArgs {
    /**
     * The name of the Time Series Insights environment associated with the specified resource group.
     */
    environmentName: string;
    /**
     * Setting $expand=status will include the status of the internal services of the environment in the Time Series Insights service.
     */
    expand?: string;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: string;
}

/**
 * An environment is a set of time-series data available for query, and is the top level Azure Time Series Insights resource. Gen1 environments have data retention limits.
 */
export interface GetGen1EnvironmentResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The time the resource was created.
     */
    readonly creationTime: string;
    /**
     * The fully qualified domain name used to access the environment data, e.g. to query the environment's events or upload reference data for the environment.
     */
    readonly dataAccessFqdn: string;
    /**
     * An id used to access the environment data, e.g. to query the environment's events or upload reference data for the environment.
     */
    readonly dataAccessId: string;
    /**
     * ISO8601 timespan specifying the minimum number of days the environment's events will be available for query.
     */
    readonly dataRetentionTime: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * The kind of the environment.
     * Expected value is 'Gen1'.
     */
    readonly kind: "Gen1";
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * The list of event properties which will be used to partition data in the environment. Currently, only a single partition key property is supported.
     */
    readonly partitionKeyProperties?: types.outputs.TimeSeriesIdPropertyResponse[];
    /**
     * Provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * The sku determines the type of environment, either Gen1 (S1 or S2) or Gen2 (L1). For Gen1 environments the sku determines the capacity of the environment, the ingress rate, and the billing rate.
     */
    readonly sku: types.outputs.SkuResponse;
    /**
     * An object that represents the status of the environment, and its internal state in the Time Series Insights service.
     */
    readonly status: types.outputs.EnvironmentStatusResponse;
    /**
     * The behavior the Time Series Insights service should take when the environment's capacity has been exceeded. If "PauseIngress" is specified, new events will not be read from the event source. If "PurgeOldData" is specified, new events will continue to be read and old events will be deleted from the environment. The default behavior is PurgeOldData.
     */
    readonly storageLimitExceededBehavior?: string;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Gets the environment with the specified name in the specified subscription and resource group.
 *
 * Uses Azure REST API version 2020-05-15.
 */
export function getGen1EnvironmentOutput(args: GetGen1EnvironmentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetGen1EnvironmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:timeseriesinsights:getGen1Environment", {
        "environmentName": args.environmentName,
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetGen1EnvironmentOutputArgs {
    /**
     * The name of the Time Series Insights environment associated with the specified resource group.
     */
    environmentName: pulumi.Input<string>;
    /**
     * Setting $expand=status will include the status of the internal services of the environment in the Time Series Insights service.
     */
    expand?: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}