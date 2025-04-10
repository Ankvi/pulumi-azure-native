import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Single item in List or Get Alias(Disaster Recovery configuration) operation
 *
 * Uses Azure REST API version 2022-01-01-preview. In version 1.x of the Azure Native provider, it used API version 2017-04-01.
 *
 * Other available API versions: 2022-10-01-preview, 2023-01-01-preview, 2024-01-01.
 */
export class DisasterRecoveryConfig extends pulumi.CustomResource {
    /**
     * Get an existing DisasterRecoveryConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DisasterRecoveryConfig {
        return new DisasterRecoveryConfig(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:servicebus:DisasterRecoveryConfig';

    /**
     * Returns true if the given object is an instance of DisasterRecoveryConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DisasterRecoveryConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DisasterRecoveryConfig.__pulumiType;
    }

    /**
     * Primary/Secondary eventhub namespace name, which is part of GEO DR pairing
     */
    public readonly alternateName!: pulumi.Output<string | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public /*out*/ readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * ARM Id of the Primary/Secondary eventhub namespace name, which is part of GEO DR pairing
     */
    public readonly partnerNamespace!: pulumi.Output<string | undefined>;
    /**
     * Number of entities pending to be replicated.
     */
    public /*out*/ readonly pendingReplicationOperationsCount!: pulumi.Output<number>;
    /**
     * Provisioning state of the Alias(Disaster Recovery configuration) - possible values 'Accepted' or 'Succeeded' or 'Failed'
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * role of namespace in GEO DR - possible values 'Primary' or 'PrimaryNotReplicating' or 'Secondary'
     */
    public /*out*/ readonly role!: pulumi.Output<string>;
    /**
     * The system meta data relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.EventHub/Namespaces" or "Microsoft.EventHub/Namespaces/EventHubs"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DisasterRecoveryConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DisasterRecoveryConfigArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.namespaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'namespaceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["alias"] = args ? args.alias : undefined;
            resourceInputs["alternateName"] = args ? args.alternateName : undefined;
            resourceInputs["namespaceName"] = args ? args.namespaceName : undefined;
            resourceInputs["partnerNamespace"] = args ? args.partnerNamespace : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["pendingReplicationOperationsCount"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["role"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["alternateName"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["partnerNamespace"] = undefined /*out*/;
            resourceInputs["pendingReplicationOperationsCount"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["role"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:servicebus/v20170401:DisasterRecoveryConfig" }, { type: "azure-native:servicebus/v20180101preview:DisasterRecoveryConfig" }, { type: "azure-native:servicebus/v20210101preview:DisasterRecoveryConfig" }, { type: "azure-native:servicebus/v20210601preview:DisasterRecoveryConfig" }, { type: "azure-native:servicebus/v20211101:DisasterRecoveryConfig" }, { type: "azure-native:servicebus/v20220101preview:DisasterRecoveryConfig" }, { type: "azure-native:servicebus/v20221001preview:DisasterRecoveryConfig" }, { type: "azure-native:servicebus/v20230101preview:DisasterRecoveryConfig" }, { type: "azure-native:servicebus/v20240101:DisasterRecoveryConfig" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DisasterRecoveryConfig.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DisasterRecoveryConfig resource.
 */
export interface DisasterRecoveryConfigArgs {
    /**
     * The Disaster Recovery configuration name
     */
    alias?: pulumi.Input<string>;
    /**
     * Primary/Secondary eventhub namespace name, which is part of GEO DR pairing
     */
    alternateName?: pulumi.Input<string>;
    /**
     * The namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * ARM Id of the Primary/Secondary eventhub namespace name, which is part of GEO DR pairing
     */
    partnerNamespace?: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}