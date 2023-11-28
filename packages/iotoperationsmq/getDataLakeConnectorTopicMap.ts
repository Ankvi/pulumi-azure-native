import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a DataLakeTopicMapResource
 * Azure REST API version: 2023-10-04-preview.
 */
export function getDataLakeConnectorTopicMap(args: GetDataLakeConnectorTopicMapArgs, opts?: pulumi.InvokeOptions): Promise<GetDataLakeConnectorTopicMapResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:iotoperationsmq:getDataLakeConnectorTopicMap", {
        "dataLakeConnectorName": args.dataLakeConnectorName,
        "mqName": args.mqName,
        "resourceGroupName": args.resourceGroupName,
        "topicMapName": args.topicMapName,
    }, opts);
}

export interface GetDataLakeConnectorTopicMapArgs {
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
    /**
     * Name of MQ dataLakeConnector/topicMap resource
     */
    topicMapName: string;
}

/**
 * MQ dataLakeConnector/topicMap resource
 */
export interface GetDataLakeConnectorTopicMapResult {
    /**
     * DataLake Connector CRD to use.
     */
    readonly dataLakeConnectorRef: string;
    /**
     * Extended Location
     */
    readonly extendedLocation: types.outputs.ExtendedLocationPropertyResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * TopicMap for DataLake connector.
     */
    readonly mapping: types.outputs.DataLakeConnectorMapResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
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
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a DataLakeTopicMapResource
 * Azure REST API version: 2023-10-04-preview.
 */
export function getDataLakeConnectorTopicMapOutput(args: GetDataLakeConnectorTopicMapOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDataLakeConnectorTopicMapResult> {
    return pulumi.output(args).apply((a: any) => getDataLakeConnectorTopicMap(a, opts))
}

export interface GetDataLakeConnectorTopicMapOutputArgs {
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
    /**
     * Name of MQ dataLakeConnector/topicMap resource
     */
    topicMapName: pulumi.Input<string>;
}
