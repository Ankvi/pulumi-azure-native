import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Details of topic record
 *
 * Uses Azure REST API version 2024-07-01.
 */
export function getTopic(args: GetTopicArgs, opts?: pulumi.InvokeOptions): Promise<GetTopicResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:confluent:getTopic", {
        "clusterId": args.clusterId,
        "environmentId": args.environmentId,
        "organizationName": args.organizationName,
        "resourceGroupName": args.resourceGroupName,
        "topicName": args.topicName,
    }, opts);
}

export interface GetTopicArgs {
    /**
     * Confluent kafka or schema registry cluster id
     */
    clusterId: string;
    /**
     * Confluent environment id
     */
    environmentId: string;
    /**
     * Organization resource name
     */
    organizationName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Confluent kafka or schema registry topic name
     */
    topicName: string;
}

/**
 * Details of topic record
 */
export interface GetTopicResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Config Specification of the topic
     */
    readonly configs?: types.outputs.TopicsRelatedLinkResponse;
    /**
     * The ARM Resource Id of the Topic
     */
    readonly id: string;
    /**
     * Input Config Specification of the topic
     */
    readonly inputConfigs?: types.outputs.TopicsInputConfigResponse[];
    /**
     * Type of topic
     */
    readonly kind?: string;
    /**
     * Metadata of the record
     */
    readonly metadata?: types.outputs.TopicMetadataEntityResponse;
    /**
     * Display name of the topic
     */
    readonly name: string;
    /**
     * Partition Specification of the topic
     */
    readonly partitions?: types.outputs.TopicsRelatedLinkResponse;
    /**
     * Partition count of the topic
     */
    readonly partitionsCount?: string;
    /**
     * Partition Reassignment Specification of the topic
     */
    readonly partitionsReassignments?: types.outputs.TopicsRelatedLinkResponse;
    /**
     * Replication factor of the topic
     */
    readonly replicationFactor?: string;
    /**
     * Topic Id returned by Confluent
     */
    readonly topicId?: string;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Details of topic record
 *
 * Uses Azure REST API version 2024-07-01.
 */
export function getTopicOutput(args: GetTopicOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetTopicResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:confluent:getTopic", {
        "clusterId": args.clusterId,
        "environmentId": args.environmentId,
        "organizationName": args.organizationName,
        "resourceGroupName": args.resourceGroupName,
        "topicName": args.topicName,
    }, opts);
}

export interface GetTopicOutputArgs {
    /**
     * Confluent kafka or schema registry cluster id
     */
    clusterId: pulumi.Input<string>;
    /**
     * Confluent environment id
     */
    environmentId: pulumi.Input<string>;
    /**
     * Organization resource name
     */
    organizationName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Confluent kafka or schema registry topic name
     */
    topicName: pulumi.Input<string>;
}