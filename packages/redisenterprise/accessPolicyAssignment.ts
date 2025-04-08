import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Describes the access policy assignment of Redis Enterprise database
 *
 * Uses Azure REST API version 2024-09-01-preview.
 *
 * Other available API versions: 2025-04-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native redisenterprise [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
    public static readonly __pulumiType = 'azure-native:redisenterprise:AccessPolicyAssignment';

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
     * Name of access policy under specific access policy assignment. Only "default" policy is supported for now.
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
     * Current provisioning status of the access policy assignment.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The user associated with the access policy.
     */
    public readonly user!: pulumi.Output<types.outputs.AccessPolicyAssignmentPropertiesResponseUser>;

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
            if ((!args || args.clusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterName'");
            }
            if ((!args || args.databaseName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'databaseName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.user === undefined) && !opts.urn) {
                throw new Error("Missing required property 'user'");
            }
            resourceInputs["accessPolicyAssignmentName"] = args ? args.accessPolicyAssignmentName : undefined;
            resourceInputs["accessPolicyName"] = args ? args.accessPolicyName : undefined;
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["user"] = args ? args.user : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["accessPolicyName"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["user"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:cache/v20240901preview:AccessPolicyAssignment" }, { type: "azure-native:redisenterprise/v20240901preview:AccessPolicyAssignment" }, { type: "azure-native:redisenterprise/v20250401:AccessPolicyAssignment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AccessPolicyAssignment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AccessPolicyAssignment resource.
 */
export interface AccessPolicyAssignmentArgs {
    /**
     * The name of the Redis Enterprise database access policy assignment.
     */
    accessPolicyAssignmentName?: pulumi.Input<string>;
    /**
     * Name of access policy under specific access policy assignment. Only "default" policy is supported for now.
     */
    accessPolicyName: pulumi.Input<string>;
    /**
     * The name of the Redis Enterprise cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the Redis Enterprise database.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The user associated with the access policy.
     */
    user: pulumi.Input<types.inputs.AccessPolicyAssignmentPropertiesUserArgs>;
}