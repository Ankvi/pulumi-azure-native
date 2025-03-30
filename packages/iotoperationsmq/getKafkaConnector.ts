import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a KafkaConnectorResource
 *
 * Uses Azure REST API version 2023-10-04-preview.
 */
export function getKafkaConnector(args: GetKafkaConnectorArgs, opts?: pulumi.InvokeOptions): Promise<GetKafkaConnectorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:iotoperationsmq:getKafkaConnector", {
        "kafkaConnectorName": args.kafkaConnectorName,
        "mqName": args.mqName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetKafkaConnectorArgs {
    /**
     * Name of MQ kafkaConnector resource
     */
    kafkaConnectorName: string;
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
 * MQ kafkaConnector resource
 */
export interface GetKafkaConnectorResult {
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
     * The details of KafkaConnector Docker Image.
     */
    readonly image?: types.outputs.ContainerImageResponse;
    /**
     * The number of KafkaConnector pods to spin up.
     */
    readonly instances?: number;
    /**
     * The details for connecting with Remote Kafka Broker.
     */
    readonly kafkaConnection: types.outputs.KafkaRemoteBrokerConnectionSpecResponse;
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
 * Get a KafkaConnectorResource
 *
 * Uses Azure REST API version 2023-10-04-preview.
 */
export function getKafkaConnectorOutput(args: GetKafkaConnectorOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetKafkaConnectorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:iotoperationsmq:getKafkaConnector", {
        "kafkaConnectorName": args.kafkaConnectorName,
        "mqName": args.mqName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetKafkaConnectorOutputArgs {
    /**
     * Name of MQ kafkaConnector resource
     */
    kafkaConnectorName: pulumi.Input<string>;
    /**
     * Name of MQ resource
     */
    mqName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}