import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a MqttBridgeConnectorResource
 */
export function getMqttBridgeConnector(args: GetMqttBridgeConnectorArgs, opts?: pulumi.InvokeOptions): Promise<GetMqttBridgeConnectorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:iotoperationsmq/v20231004preview:getMqttBridgeConnector", {
        "mqName": args.mqName,
        "mqttBridgeConnectorName": args.mqttBridgeConnectorName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMqttBridgeConnectorArgs {
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
}

/**
 * MQ mqttBridgeConnector resource
 */
export interface GetMqttBridgeConnectorResult {
    /**
     * The number of instances to deploy for a bridge rollout.
     */
    readonly bridgeInstances?: number;
    /**
     * The client id prefix of the dynamically generated client ids.
     */
    readonly clientIdPrefix?: string;
    /**
     * Extended Location
     */
    readonly extendedLocation: types.outputs.ExtendedLocationPropertyResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The details of MqttBridge Docker Image.
     */
    readonly image: types.outputs.ContainerImageResponse;
    /**
     * The details for connecting with Local Broker.
     */
    readonly localBrokerConnection?: types.outputs.LocalBrokerConnectionSpecResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The log level of the Bridge Connector instances.
     */
    readonly logLevel?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The Node Tolerations for the Bridge Connector pods.
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
     * The details for connecting with Remote Broker.
     */
    readonly remoteBrokerConnection: types.outputs.MqttBridgeRemoteBrokerConnectionSpecResponse;
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
 * Get a MqttBridgeConnectorResource
 */
export function getMqttBridgeConnectorOutput(args: GetMqttBridgeConnectorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMqttBridgeConnectorResult> {
    return pulumi.output(args).apply((a: any) => getMqttBridgeConnector(a, opts))
}

export interface GetMqttBridgeConnectorOutputArgs {
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
}
