import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * The Managed Network resource
 */
export class ScopeAssignment extends pulumi.CustomResource {
    /**
     * Get an existing ScopeAssignment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ScopeAssignment {
        return new ScopeAssignment(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:managednetwork/v20190601preview:ScopeAssignment';

    /**
     * Returns true if the given object is an instance of ScopeAssignment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ScopeAssignment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ScopeAssignment.__pulumiType;
    }

    /**
     * The managed network ID with scope will be assigned to.
     */
    public readonly assignedManagedNetwork!: pulumi.Output<string | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the ManagedNetwork resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ScopeAssignment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ScopeAssignmentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.scope === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scope'");
            }
            resourceInputs["assignedManagedNetwork"] = args ? args.assignedManagedNetwork : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["scopeAssignmentName"] = args ? args.scopeAssignmentName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["assignedManagedNetwork"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:managednetwork:ScopeAssignment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ScopeAssignment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ScopeAssignment resource.
 */
export interface ScopeAssignmentArgs {
    /**
     * The managed network ID with scope will be assigned to.
     */
    assignedManagedNetwork?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The base resource of the scope assignment to create. The scope can be any REST resource instance. For example, use 'subscriptions/{subscription-id}' for a subscription, 'subscriptions/{subscription-id}/resourceGroups/{resource-group-name}' for a resource group, and 'subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/providers/{resource-provider}/{resource-type}/{resource-name}' for a resource.
     */
    scope: pulumi.Input<string>;
    /**
     * The name of the scope assignment to create.
     */
    scopeAssignmentName?: pulumi.Input<string>;
}