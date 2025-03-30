import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Dapr PubSub Event Subscription.
 *
 * Uses Azure REST API version 2023-08-01-preview.
 *
 * Other available API versions: 2023-11-02-preview, 2024-02-02-preview, 2024-08-02-preview, 2024-10-02-preview.
 */
export class DaprSubscription extends pulumi.CustomResource {
    /**
     * Get an existing DaprSubscription resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DaprSubscription {
        return new DaprSubscription(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:app:DaprSubscription';

    /**
     * Returns true if the given object is an instance of DaprSubscription.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DaprSubscription {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DaprSubscription.__pulumiType;
    }

    /**
     * Bulk subscription options
     */
    public readonly bulkSubscribe!: pulumi.Output<types.outputs.DaprSubscriptionBulkSubscribeOptionsResponse | undefined>;
    /**
     * Deadletter topic name
     */
    public readonly deadLetterTopic!: pulumi.Output<string | undefined>;
    /**
     * Subscription metadata
     */
    public readonly metadata!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The name of the resource
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Dapr PubSub component name
     */
    public readonly pubsubName!: pulumi.Output<string | undefined>;
    /**
     * Subscription routes
     */
    public readonly routes!: pulumi.Output<types.outputs.DaprSubscriptionRoutesResponse | undefined>;
    /**
     * Application scopes to restrict the subscription to specific apps.
     */
    public readonly scopes!: pulumi.Output<string[] | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Topic name
     */
    public readonly topic!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DaprSubscription resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DaprSubscriptionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.environmentName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'environmentName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["bulkSubscribe"] = args ? (args.bulkSubscribe ? pulumi.output(args.bulkSubscribe).apply(types.inputs.daprSubscriptionBulkSubscribeOptionsArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["deadLetterTopic"] = args ? args.deadLetterTopic : undefined;
            resourceInputs["environmentName"] = args ? args.environmentName : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["pubsubName"] = args ? args.pubsubName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["routes"] = args ? args.routes : undefined;
            resourceInputs["scopes"] = args ? args.scopes : undefined;
            resourceInputs["topic"] = args ? args.topic : undefined;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["bulkSubscribe"] = undefined /*out*/;
            resourceInputs["deadLetterTopic"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["pubsubName"] = undefined /*out*/;
            resourceInputs["routes"] = undefined /*out*/;
            resourceInputs["scopes"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["topic"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:app/v20230801preview:DaprSubscription" }, { type: "azure-native:app/v20231102preview:DaprSubscription" }, { type: "azure-native:app/v20240202preview:DaprSubscription" }, { type: "azure-native:app/v20240802preview:DaprSubscription" }, { type: "azure-native:app/v20241002preview:DaprSubscription" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DaprSubscription.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DaprSubscription resource.
 */
export interface DaprSubscriptionArgs {
    /**
     * Bulk subscription options
     */
    bulkSubscribe?: pulumi.Input<types.inputs.DaprSubscriptionBulkSubscribeOptionsArgs>;
    /**
     * Deadletter topic name
     */
    deadLetterTopic?: pulumi.Input<string>;
    /**
     * Name of the Managed Environment.
     */
    environmentName: pulumi.Input<string>;
    /**
     * Subscription metadata
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of the Dapr subscription.
     */
    name?: pulumi.Input<string>;
    /**
     * Dapr PubSub component name
     */
    pubsubName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Subscription routes
     */
    routes?: pulumi.Input<types.inputs.DaprSubscriptionRoutesArgs>;
    /**
     * Application scopes to restrict the subscription to specific apps.
     */
    scopes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Topic name
     */
    topic?: pulumi.Input<string>;
}