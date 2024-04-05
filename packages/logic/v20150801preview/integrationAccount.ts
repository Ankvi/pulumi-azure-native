import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
export class IntegrationAccount extends pulumi.CustomResource {
    /**
     * Get an existing IntegrationAccount resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IntegrationAccount {
        return new IntegrationAccount(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:logic/v20150801preview:IntegrationAccount';

    /**
     * Returns true if the given object is an instance of IntegrationAccount.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IntegrationAccount {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IntegrationAccount.__pulumiType;
    }

    /**
     * The resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The resource name.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * The sku.
     */
    public readonly sku!: pulumi.Output<types.outputs.IntegrationAccountSkuResponse | undefined>;
    /**
     * The resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The resource type.
     */
    public readonly type!: pulumi.Output<string | undefined>;

    /**
     * Create a IntegrationAccount resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IntegrationAccountArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["integrationAccountName"] = args ? args.integrationAccountName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
        } else {
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:logic:IntegrationAccount" }, { type: "azure-native:logic/v20160601:IntegrationAccount" }, { type: "azure-native:logic/v20180701preview:IntegrationAccount" }, { type: "azure-native:logic/v20190501:IntegrationAccount" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(IntegrationAccount.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a IntegrationAccount resource.
 */
export interface IntegrationAccountArgs {
    /**
     * The resource id.
     */
    id?: pulumi.Input<string>;
    /**
     * The integration account name.
     */
    integrationAccountName?: pulumi.Input<string>;
    /**
     * The resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The resource name.
     */
    name?: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The sku.
     */
    sku?: pulumi.Input<types.inputs.IntegrationAccountSkuArgs>;
    /**
     * The resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The resource type.
     */
    type?: pulumi.Input<string>;
}