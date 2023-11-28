import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a KafkaTopicMapResource
 * Azure REST API version: 2023-10-04-preview.
 */
export function getKafkaConnectorTopicMap(args: GetKafkaConnectorTopicMapArgs, opts?: pulumi.InvokeOptions): Promise<GetKafkaConnectorTopicMapResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:iotoperationsmq:getKafkaConnectorTopicMap", {
        "kafkaConnectorName": args.kafkaConnectorName,
        "mqName": args.mqName,
        "resourceGroupName": args.resourceGroupName,
        "topicMapName": args.topicMapName,
    }, opts);
}

export interface GetKafkaConnectorTopicMapArgs {
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
    /**
     * Name of MQ kafka/topicMap resource
     */
    topicMapName: string;
}

/**
 * MQ kafkaConnector/topicMap resource
 */
export interface GetKafkaConnectorTopicMapResult {
    /**
     * The batching settings for kafka messages.
     */
    readonly batching?: types.outputs.KafkaTopicMapBatchingResponse;
    /**
     * The compression to use for kafka messages.
     */
    readonly compression?: string;
    /**
     * The flag to copy Mqtt properties.
     */
    readonly copyMqttProperties?: string;
    /**
     * Extended Location
     */
    readonly extendedLocation: types.outputs.ExtendedLocationPropertyResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The kafkaConnector CRD it refers to.
     */
    readonly kafkaConnectorRef: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The partition to use for Kafka.
     */
    readonly partitionKeyProperty?: string;
    /**
     * The partition strategy to use for Kafka.
     */
    readonly partitionStrategy?: string;
    /**
     * The status of the last operation.
     */
    readonly provisioningState: string;
    /**
     * The route details for Kafka connector.
     */
    readonly routes: types.outputs.KafkaRoutesResponse[];
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
 * Get a KafkaTopicMapResource
 * Azure REST API version: 2023-10-04-preview.
 */
export function getKafkaConnectorTopicMapOutput(args: GetKafkaConnectorTopicMapOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKafkaConnectorTopicMapResult> {
    return pulumi.output(args).apply((a: any) => getKafkaConnectorTopicMap(a, opts))
}

export interface GetKafkaConnectorTopicMapOutputArgs {
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
    /**
     * Name of MQ kafka/topicMap resource
     */
    topicMapName: pulumi.Input<string>;
}
