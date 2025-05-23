import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The configuration of the event streaming service resource attached to the Purview account for kafka notifications.
 *
 * Uses Azure REST API version 2024-04-01-preview. In version 2.x of the Azure Native provider, it used API version 2021-12-01.
 *
 * Other available API versions: 2021-12-01, 2023-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native purview [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class KafkaConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing KafkaConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): KafkaConfiguration {
        return new KafkaConfiguration(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:purview:KafkaConfiguration';

    /**
     * Returns true if the given object is an instance of KafkaConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KafkaConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KafkaConfiguration.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Consumer group for hook event hub.
     */
    public readonly consumerGroup!: pulumi.Output<string | undefined>;
    /**
     * Credentials to access the event streaming service attached to the purview account.
     */
    public readonly credentials!: pulumi.Output<types.outputs.CredentialsResponse | undefined>;
    /**
     * Optional partition Id for notification event hub. If not set, all partitions will be leveraged.
     */
    public readonly eventHubPartitionId!: pulumi.Output<string | undefined>;
    public readonly eventHubResourceId!: pulumi.Output<string | undefined>;
    /**
     * The event hub type.
     */
    public readonly eventHubType!: pulumi.Output<string | undefined>;
    /**
     * The state of the event streaming service
     */
    public readonly eventStreamingState!: pulumi.Output<string | undefined>;
    /**
     * The event streaming service type
     */
    public readonly eventStreamingType!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.ProxyResourceResponseSystemData>;
    /**
     * Gets or sets the type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a KafkaConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KafkaConfigurationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["consumerGroup"] = args ? args.consumerGroup : undefined;
            resourceInputs["credentials"] = args ? args.credentials : undefined;
            resourceInputs["eventHubPartitionId"] = args ? args.eventHubPartitionId : undefined;
            resourceInputs["eventHubResourceId"] = args ? args.eventHubResourceId : undefined;
            resourceInputs["eventHubType"] = args ? args.eventHubType : undefined;
            resourceInputs["eventStreamingState"] = (args ? args.eventStreamingState : undefined) ?? "Enabled";
            resourceInputs["eventStreamingType"] = (args ? args.eventStreamingType : undefined) ?? "None";
            resourceInputs["kafkaConfigurationName"] = args ? args.kafkaConfigurationName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["consumerGroup"] = undefined /*out*/;
            resourceInputs["credentials"] = undefined /*out*/;
            resourceInputs["eventHubPartitionId"] = undefined /*out*/;
            resourceInputs["eventHubResourceId"] = undefined /*out*/;
            resourceInputs["eventHubType"] = undefined /*out*/;
            resourceInputs["eventStreamingState"] = undefined /*out*/;
            resourceInputs["eventStreamingType"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:purview/v20211201:KafkaConfiguration" }, { type: "azure-native:purview/v20230501preview:KafkaConfiguration" }, { type: "azure-native:purview/v20240401preview:KafkaConfiguration" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(KafkaConfiguration.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a KafkaConfiguration resource.
 */
export interface KafkaConfigurationArgs {
    /**
     * The name of the account.
     */
    accountName: pulumi.Input<string>;
    /**
     * Consumer group for hook event hub.
     */
    consumerGroup?: pulumi.Input<string>;
    /**
     * Credentials to access the event streaming service attached to the purview account.
     */
    credentials?: pulumi.Input<types.inputs.CredentialsArgs>;
    /**
     * Optional partition Id for notification event hub. If not set, all partitions will be leveraged.
     */
    eventHubPartitionId?: pulumi.Input<string>;
    eventHubResourceId?: pulumi.Input<string>;
    /**
     * The event hub type.
     */
    eventHubType?: pulumi.Input<string | types.enums.EventHubType>;
    /**
     * The state of the event streaming service
     */
    eventStreamingState?: pulumi.Input<string | types.enums.EventStreamingState>;
    /**
     * The event streaming service type
     */
    eventStreamingType?: pulumi.Input<string | types.enums.EventStreamingType>;
    /**
     * The kafka configuration name.
     */
    kafkaConfigurationName?: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}