import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Response to an operation on access policy assignment
 *
 * Uses Azure REST API version 2024-11-01.
 *
 * Other available API versions: 2023-05-01-preview, 2023-08-01, 2024-03-01, 2024-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native redis [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class AccessPolicyAssignment extends pulumi.CustomResource {
    /**
     * Get an existing AccessPolicyAssignment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AccessPolicyAssignment {
        return new AccessPolicyAssignment(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:redis:AccessPolicyAssignment';

    /**
     * Returns true if the given object is an instance of AccessPolicyAssignment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AccessPolicyAssignment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AccessPolicyAssignment.__pulumiType;
    }

    /**
     * The name of the access policy that is being assigned
     */
    public readonly accessPolicyName!: pulumi.Output<string>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Object Id to assign access policy to
     */
    public readonly objectId!: pulumi.Output<string>;
    /**
     * User friendly name for object id. Also represents username for token based authentication
     */
    public readonly objectIdAlias!: pulumi.Output<string>;
    /**
     * Provisioning state of an access policy assignment set
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a AccessPolicyAssignment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AccessPolicyAssignmentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accessPolicyName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accessPolicyName'");
            }
            if ((!args || args.cacheName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cacheName'");
            }
            if ((!args || args.objectId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'objectId'");
            }
            if ((!args || args.objectIdAlias === undefined) && !opts.urn) {
                throw new Error("Missing required property 'objectIdAlias'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accessPolicyAssignmentName"] = args ? args.accessPolicyAssignmentName : undefined;
            resourceInputs["accessPolicyName"] = args ? args.accessPolicyName : undefined;
            resourceInputs["cacheName"] = args ? args.cacheName : undefined;
            resourceInputs["objectId"] = args ? args.objectId : undefined;
            resourceInputs["objectIdAlias"] = args ? args.objectIdAlias : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["accessPolicyName"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["objectId"] = undefined /*out*/;
            resourceInputs["objectIdAlias"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:cache/v20230501preview:AccessPolicyAssignment" }, { type: "azure-native:cache/v20230801:AccessPolicyAssignment" }, { type: "azure-native:cache/v20240301:AccessPolicyAssignment" }, { type: "azure-native:cache/v20240401preview:AccessPolicyAssignment" }, { type: "azure-native:cache/v20241101:AccessPolicyAssignment" }, { type: "azure-native:cache:AccessPolicyAssignment" }, { type: "azure-native:redis/v20230501preview:AccessPolicyAssignment" }, { type: "azure-native:redis/v20230801:AccessPolicyAssignment" }, { type: "azure-native:redis/v20240301:AccessPolicyAssignment" }, { type: "azure-native:redis/v20240401preview:AccessPolicyAssignment" }, { type: "azure-native:redis/v20241101:AccessPolicyAssignment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AccessPolicyAssignment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AccessPolicyAssignment resource.
 */
export interface AccessPolicyAssignmentArgs {
    /**
     * The name of the access policy assignment.
     */
    accessPolicyAssignmentName?: pulumi.Input<string>;
    /**
     * The name of the access policy that is being assigned
     */
    accessPolicyName: pulumi.Input<string>;
    /**
     * The name of the Redis cache.
     */
    cacheName: pulumi.Input<string>;
    /**
     * Object Id to assign access policy to
     */
    objectId: pulumi.Input<string>;
    /**
     * User friendly name for object id. Also represents username for token based authentication
     */
    objectIdAlias: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}