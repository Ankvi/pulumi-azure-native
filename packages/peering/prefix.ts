import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The peering service prefix class.
 * Azure REST API version: 2022-10-01. Prior API version in Azure Native 1.x: 2021-01-01
 */
export class Prefix extends pulumi.CustomResource {
    /**
     * Get an existing Prefix resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Prefix {
        return new Prefix(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:peering:Prefix';

    /**
     * Returns true if the given object is an instance of Prefix.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Prefix {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Prefix.__pulumiType;
    }

    /**
     * The error message for validation state
     */
    public /*out*/ readonly errorMessage!: pulumi.Output<string>;
    /**
     * The list of events for peering service prefix
     */
    public /*out*/ readonly events!: pulumi.Output<types.outputs.PeeringServicePrefixEventResponse[]>;
    /**
     * The prefix learned type
     */
    public /*out*/ readonly learnedType!: pulumi.Output<string>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The peering service prefix key
     */
    public readonly peeringServicePrefixKey!: pulumi.Output<string | undefined>;
    /**
     * The prefix from which your traffic originates.
     */
    public readonly prefix!: pulumi.Output<string | undefined>;
    /**
     * The prefix validation state
     */
    public /*out*/ readonly prefixValidationState!: pulumi.Output<string>;
    /**
     * The provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Prefix resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrefixArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.peeringServiceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'peeringServiceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["peeringServiceName"] = args ? args.peeringServiceName : undefined;
            resourceInputs["peeringServicePrefixKey"] = args ? args.peeringServicePrefixKey : undefined;
            resourceInputs["prefix"] = args ? args.prefix : undefined;
            resourceInputs["prefixName"] = args ? args.prefixName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["errorMessage"] = undefined /*out*/;
            resourceInputs["events"] = undefined /*out*/;
            resourceInputs["learnedType"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["prefixValidationState"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["errorMessage"] = undefined /*out*/;
            resourceInputs["events"] = undefined /*out*/;
            resourceInputs["learnedType"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["peeringServicePrefixKey"] = undefined /*out*/;
            resourceInputs["prefix"] = undefined /*out*/;
            resourceInputs["prefixValidationState"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:peering/v20190801preview:Prefix" }, { type: "azure-native:peering/v20190901preview:Prefix" }, { type: "azure-native:peering/v20200101preview:Prefix" }, { type: "azure-native:peering/v20200401:Prefix" }, { type: "azure-native:peering/v20201001:Prefix" }, { type: "azure-native:peering/v20210101:Prefix" }, { type: "azure-native:peering/v20210601:Prefix" }, { type: "azure-native:peering/v20220101:Prefix" }, { type: "azure-native:peering/v20220601:Prefix" }, { type: "azure-native:peering/v20221001:Prefix" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Prefix.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Prefix resource.
 */
export interface PrefixArgs {
    /**
     * The name of the peering service.
     */
    peeringServiceName: pulumi.Input<string>;
    /**
     * The peering service prefix key
     */
    peeringServicePrefixKey?: pulumi.Input<string>;
    /**
     * The prefix from which your traffic originates.
     */
    prefix?: pulumi.Input<string>;
    /**
     * The name of the prefix.
     */
    prefixName?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
