import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a DataLakeConnectorResource
 *
 * Uses Azure REST API version 2023-10-04-preview.
 */
export function getDataLakeConnector(args: GetDataLakeConnectorArgs, opts?: pulumi.InvokeOptions): Promise<GetDataLakeConnectorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:iotoperationsmq:getDataLakeConnector", {
        "dataLakeConnectorName": args.dataLakeConnectorName,
        "mqName": args.mqName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDataLakeConnectorArgs {
    /**
     * Name of MQ dataLakeConnector resource
     */
    dataLakeConnectorName: string;
    /**
     * Name of MQ resource
     */
    mqName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * MQ dataLakeConnector resource
 */
export interface GetDataLakeConnectorResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * DataLake database format to use.
     */
    readonly databaseFormat: string;
    /**
     * Extended Location
     */
    readonly extendedLocation: types.outputs.ExtendedLocationPropertyResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The details of DataLakeConnector Docker Image.
     */
    readonly image: types.outputs.ContainerImageResponse;
    /**
     * The number of DataLakeConnector pods to spin up.
     */
    readonly instances?: number;
    /**
     * The details for connecting with Local Broker.
     */
    readonly localBrokerConnection?: types.outputs.LocalBrokerConnectionSpecResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The log level of the DataLake Connector instances.
     */
    readonly logLevel?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The Node Tolerations for the DataLake Connector pods.
     */
    readonly nodeTolerations?: types.outputs.NodeTolerationsResponse;
    /**
     * The protocol to use for connecting with Brokers.
     */
    readonly protocol: string;
    /**
     * The status of the last operation.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The protocol to use for connecting with Brokers. NOTE - Enum only storage is supported at at time.
     */
    readonly target: types.outputs.DataLakeTargetStorageResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a DataLakeConnectorResource
 *
 * Uses Azure REST API version 2023-10-04-preview.
 */
export function getDataLakeConnectorOutput(args: GetDataLakeConnectorOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDataLakeConnectorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:iotoperationsmq:getDataLakeConnector", {
        "dataLakeConnectorName": args.dataLakeConnectorName,
        "mqName": args.mqName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDataLakeConnectorOutputArgs {
    /**
     * Name of MQ dataLakeConnector resource
     */
    dataLakeConnectorName: pulumi.Input<string>;
    /**
     * Name of MQ resource
     */
    mqName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}