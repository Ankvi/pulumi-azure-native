import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get confluent topic by Name
 *
 * Uses Azure REST API version 2024-07-01.
 *
 * Other available API versions: 2025-07-17-preview, 2025-08-18-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native confluent [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
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
     * The name of the resource
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
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Topic Id returned by Confluent
     */
    readonly topicId?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get confluent topic by Name
 *
 * Uses Azure REST API version 2024-07-01.
 *
 * Other available API versions: 2025-07-17-preview, 2025-08-18-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native confluent [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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