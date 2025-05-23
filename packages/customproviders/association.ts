import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * The resource definition of this association.
 *
 * Uses Azure REST API version 2018-09-01-preview. In version 2.x of the Azure Native provider, it used API version 2018-09-01-preview.
 */
export class Association extends pulumi.CustomResource {
    /**
     * Get an existing Association resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Association {
        return new Association(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:customproviders:Association';

    /**
     * Returns true if the given object is an instance of Association.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Association {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Association.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The association name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the association.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The REST resource instance of the target resource for this association.
     */
    public readonly targetResourceId!: pulumi.Output<string | undefined>;
    /**
     * The association type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Association resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AssociationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.scope === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scope'");
            }
            resourceInputs["associationName"] = args ? args.associationName : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["targetResourceId"] = args ? args.targetResourceId : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["targetResourceId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:customproviders/v20180901preview:Association" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Association.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Association resource.
 */
export interface AssociationArgs {
    /**
     * The name of the association.
     */
    associationName?: pulumi.Input<string>;
    /**
     * The scope of the association. The scope can be any valid REST resource instance. For example, use '/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/providers/Microsoft.Compute/virtualMachines/{vm-name}' for a virtual machine resource.
     */
    scope: pulumi.Input<string>;
    /**
     * The REST resource instance of the target resource for this association.
     */
    targetResourceId?: pulumi.Input<string>;
}