import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a MqttBridgeTopicMapResource
 *
 * Uses Azure REST API version 2023-10-04-preview.
 */
export function getMqttBridgeTopicMap(args: GetMqttBridgeTopicMapArgs, opts?: pulumi.InvokeOptions): Promise<GetMqttBridgeTopicMapResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:iotoperationsmq:getMqttBridgeTopicMap", {
        "mqName": args.mqName,
        "mqttBridgeConnectorName": args.mqttBridgeConnectorName,
        "resourceGroupName": args.resourceGroupName,
        "topicMapName": args.topicMapName,
    }, opts);
}

export interface GetMqttBridgeTopicMapArgs {
    /**
     * Name of MQ resource
     */
    mqName: string;
    /**
     * Name of MQ mqttBridgeConnector resource
     */
    mqttBridgeConnectorName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of MQ mqttBridgeTopicMap resource
     */
    topicMapName: string;
}

/**
 * MQ mqttBridgeTopicMap resource
 */
export interface GetMqttBridgeTopicMapResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
     * The MqttBridgeConnector CRD it refers to.
     */
    readonly mqttBridgeConnectorRef: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The status of the last operation.
     */
    readonly provisioningState: string;
    /**
     * The route details for MqttBridge connector.
     */
    readonly routes?: types.outputs.MqttBridgeRoutesResponse[];
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
 * Get a MqttBridgeTopicMapResource
 *
 * Uses Azure REST API version 2023-10-04-preview.
 */
export function getMqttBridgeTopicMapOutput(args: GetMqttBridgeTopicMapOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetMqttBridgeTopicMapResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:iotoperationsmq:getMqttBridgeTopicMap", {
        "mqName": args.mqName,
        "mqttBridgeConnectorName": args.mqttBridgeConnectorName,
        "resourceGroupName": args.resourceGroupName,
        "topicMapName": args.topicMapName,
    }, opts);
}

export interface GetMqttBridgeTopicMapOutputArgs {
    /**
     * Name of MQ resource
     */
    mqName: pulumi.Input<string>;
    /**
     * Name of MQ mqttBridgeConnector resource
     */
    mqttBridgeConnectorName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of MQ mqttBridgeTopicMap resource
     */
    topicMapName: pulumi.Input<string>;
}