import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Details of topic record
 *
 * Uses Azure REST API version 2024-07-01.
 */
export class Topic extends pulumi.CustomResource {
    /**
     * Get an existing Topic resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Topic {
        return new Topic(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:confluent:Topic';

    /**
     * Returns true if the given object is an instance of Topic.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Topic {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Topic.__pulumiType;
    }

    /**
     * Config Specification of the topic
     */
    public readonly configs!: pulumi.Output<types.outputs.TopicsRelatedLinkResponse | undefined>;
    /**
     * Input Config Specification of the topic
     */
    public readonly inputConfigs!: pulumi.Output<types.outputs.TopicsInputConfigResponse[] | undefined>;
    /**
     * Type of topic
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Metadata of the record
     */
    public readonly metadata!: pulumi.Output<types.outputs.TopicMetadataEntityResponse | undefined>;
    /**
     * Display name of the topic
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Partition Specification of the topic
     */
    public readonly partitions!: pulumi.Output<types.outputs.TopicsRelatedLinkResponse | undefined>;
    /**
     * Partition count of the topic
     */
    public readonly partitionsCount!: pulumi.Output<string | undefined>;
    /**
     * Partition Reassignment Specification of the topic
     */
    public readonly partitionsReassignments!: pulumi.Output<types.outputs.TopicsRelatedLinkResponse | undefined>;
    /**
     * Replication factor of the topic
     */
    public readonly replicationFactor!: pulumi.Output<string | undefined>;
    /**
     * Topic Id returned by Confluent
     */
    public readonly topicId!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Topic resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TopicArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.clusterId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterId'");
            }
            if ((!args || args.environmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'environmentId'");
            }
            if ((!args || args.organizationName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'organizationName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["clusterId"] = args ? args.clusterId : undefined;
            resourceInputs["configs"] = args ? args.configs : undefined;
            resourceInputs["environmentId"] = args ? args.environmentId : undefined;
            resourceInputs["inputConfigs"] = args ? args.inputConfigs : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["organizationName"] = args ? args.organizationName : undefined;
            resourceInputs["partitions"] = args ? args.partitions : undefined;
            resourceInputs["partitionsCount"] = args ? args.partitionsCount : undefined;
            resourceInputs["partitionsReassignments"] = args ? args.partitionsReassignments : undefined;
            resourceInputs["replicationFactor"] = args ? args.replicationFactor : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["topicId"] = args ? args.topicId : undefined;
            resourceInputs["topicName"] = args ? args.topicName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["configs"] = undefined /*out*/;
            resourceInputs["inputConfigs"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["partitions"] = undefined /*out*/;
            resourceInputs["partitionsCount"] = undefined /*out*/;
            resourceInputs["partitionsReassignments"] = undefined /*out*/;
            resourceInputs["replicationFactor"] = undefined /*out*/;
            resourceInputs["topicId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:confluent/v20240701:Topic" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Topic.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Topic resource.
 */
export interface TopicArgs {
    /**
     * Confluent kafka or schema registry cluster id
     */
    clusterId: pulumi.Input<string>;
    /**
     * Config Specification of the topic
     */
    configs?: pulumi.Input<types.inputs.TopicsRelatedLinkArgs>;
    /**
     * Confluent environment id
     */
    environmentId: pulumi.Input<string>;
    /**
     * Input Config Specification of the topic
     */
    inputConfigs?: pulumi.Input<pulumi.Input<types.inputs.TopicsInputConfigArgs>[]>;
    /**
     * Type of topic
     */
    kind?: pulumi.Input<string>;
    /**
     * Metadata of the record
     */
    metadata?: pulumi.Input<types.inputs.TopicMetadataEntityArgs>;
    /**
     * Organization resource name
     */
    organizationName: pulumi.Input<string>;
    /**
     * Partition Specification of the topic
     */
    partitions?: pulumi.Input<types.inputs.TopicsRelatedLinkArgs>;
    /**
     * Partition count of the topic
     */
    partitionsCount?: pulumi.Input<string>;
    /**
     * Partition Reassignment Specification of the topic
     */
    partitionsReassignments?: pulumi.Input<types.inputs.TopicsRelatedLinkArgs>;
    /**
     * Replication factor of the topic
     */
    replicationFactor?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Topic Id returned by Confluent
     */
    topicId?: pulumi.Input<string>;
    /**
     * Confluent kafka or schema registry topic name
     */
    topicName?: pulumi.Input<string>;
}