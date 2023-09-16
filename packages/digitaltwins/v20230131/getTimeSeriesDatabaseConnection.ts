import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get the description of an existing time series database connection.
 */
export function getTimeSeriesDatabaseConnection(args: GetTimeSeriesDatabaseConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetTimeSeriesDatabaseConnectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:digitaltwins/v20230131:getTimeSeriesDatabaseConnection", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
        "timeSeriesDatabaseConnectionName": args.timeSeriesDatabaseConnectionName,
    }, opts);
}

export interface GetTimeSeriesDatabaseConnectionArgs {
    /**
     * The name of the resource group that contains the DigitalTwinsInstance.
     */
    resourceGroupName: string;
    /**
     * The name of the DigitalTwinsInstance.
     */
    resourceName: string;
    /**
     * Name of time series database connection.
     */
    timeSeriesDatabaseConnectionName: string;
}

/**
 * Describes a time series database connection resource.
 */
export interface GetTimeSeriesDatabaseConnectionResult {
    /**
     * The resource identifier.
     */
    readonly id: string;
    /**
     * Extension resource name.
     */
    readonly name: string;
    /**
     * Properties of a specific time series database connection.
     */
    readonly properties: types.outputs.digitaltwins.v20230131.AzureDataExplorerConnectionPropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.digitaltwins.v20230131.SystemDataResponse;
    /**
     * The resource type.
     */
    readonly type: string;
}
/**
 * Get the description of an existing time series database connection.
 */
export function getTimeSeriesDatabaseConnectionOutput(args: GetTimeSeriesDatabaseConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTimeSeriesDatabaseConnectionResult> {
    return pulumi.output(args).apply((a: any) => getTimeSeriesDatabaseConnection(a, opts))
}

export interface GetTimeSeriesDatabaseConnectionOutputArgs {
    /**
     * The name of the resource group that contains the DigitalTwinsInstance.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the DigitalTwinsInstance.
     */
    resourceName: pulumi.Input<string>;
    /**
     * Name of time series database connection.
     */
    timeSeriesDatabaseConnectionName: pulumi.Input<string>;
}
