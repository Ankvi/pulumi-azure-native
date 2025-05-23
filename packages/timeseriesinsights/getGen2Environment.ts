import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the environment with the specified name in the specified subscription and resource group.
 *
 * Uses Azure REST API version 2020-05-15.
 */
export function getGen2Environment(args: GetGen2EnvironmentArgs, opts?: pulumi.InvokeOptions): Promise<GetGen2EnvironmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:timeseriesinsights:getGen2Environment", {
        "environmentName": args.environmentName,
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetGen2EnvironmentArgs {
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
 * An environment is a set of time-series data available for query, and is the top level Azure Time Series Insights resource. Gen2 environments do not have set data retention limits.
 */
export interface GetGen2EnvironmentResult {
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
     * Resource Id
     */
    readonly id: string;
    /**
     * The kind of the environment.
     * Expected value is 'Gen2'.
     */
    readonly kind: "Gen2";
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Resource name
     */
    readonly name: string;
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
     * The storage configuration provides the connection details that allows the Time Series Insights service to connect to the customer storage account that is used to store the environment's data.
     */
    readonly storageConfiguration: types.outputs.Gen2StorageConfigurationOutputResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * The list of event properties which will be used to define the environment's time series id.
     */
    readonly timeSeriesIdProperties: types.outputs.TimeSeriesIdPropertyResponse[];
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * The warm store configuration provides the details to create a warm store cache that will retain a copy of the environment's data available for faster query.
     */
    readonly warmStoreConfiguration?: types.outputs.WarmStoreConfigurationPropertiesResponse;
}
/**
 * Gets the environment with the specified name in the specified subscription and resource group.
 *
 * Uses Azure REST API version 2020-05-15.
 */
export function getGen2EnvironmentOutput(args: GetGen2EnvironmentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetGen2EnvironmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:timeseriesinsights:getGen2Environment", {
        "environmentName": args.environmentName,
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetGen2EnvironmentOutputArgs {
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