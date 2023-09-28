import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Class representing a cluster principal assignment.
 */
export class ClusterPrincipalAssignment extends pulumi.CustomResource {
    /**
     * Get an existing ClusterPrincipalAssignment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ClusterPrincipalAssignment {
        return new ClusterPrincipalAssignment(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:kusto/v20230815:ClusterPrincipalAssignment';

    /**
     * Returns true if the given object is an instance of ClusterPrincipalAssignment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ClusterPrincipalAssignment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ClusterPrincipalAssignment.__pulumiType;
    }

    /**
     * The service principal object id in AAD (Azure active directory)
     */
    public /*out*/ readonly aadObjectId!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The principal ID assigned to the cluster principal. It can be a user email, application ID, or security group name.
     */
    public readonly principalId!: pulumi.Output<string>;
    /**
     * The principal name
     */
    public /*out*/ readonly principalName!: pulumi.Output<string>;
    /**
     * Principal type.
     */
    public readonly principalType!: pulumi.Output<string>;
    /**
     * The provisioned state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Cluster principal role.
     */
    public readonly role!: pulumi.Output<string>;
    /**
     * The tenant id of the principal
     */
    public readonly tenantId!: pulumi.Output<string | undefined>;
    /**
     * The tenant name of the principal
     */
    public /*out*/ readonly tenantName!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ClusterPrincipalAssignment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClusterPrincipalAssignmentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.clusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterName'");
            }
            if ((!args || args.principalId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'principalId'");
            }
            if ((!args || args.principalType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'principalType'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.role === undefined) && !opts.urn) {
                throw new Error("Missing required property 'role'");
            }
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["principalAssignmentName"] = args ? args.principalAssignmentName : undefined;
            resourceInputs["principalId"] = args ? args.principalId : undefined;
            resourceInputs["principalType"] = args ? args.principalType : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["role"] = args ? args.role : undefined;
            resourceInputs["tenantId"] = args ? args.tenantId : undefined;
            resourceInputs["aadObjectId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["principalName"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["tenantName"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["aadObjectId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["principalId"] = undefined /*out*/;
            resourceInputs["principalName"] = undefined /*out*/;
            resourceInputs["principalType"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["role"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["tenantName"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:kusto:ClusterPrincipalAssignment" }, { type: "azure-native:kusto/v20191109:ClusterPrincipalAssignment" }, { type: "azure-native:kusto/v20200215:ClusterPrincipalAssignment" }, { type: "azure-native:kusto/v20200614:ClusterPrincipalAssignment" }, { type: "azure-native:kusto/v20200918:ClusterPrincipalAssignment" }, { type: "azure-native:kusto/v20210101:ClusterPrincipalAssignment" }, { type: "azure-native:kusto/v20210827:ClusterPrincipalAssignment" }, { type: "azure-native:kusto/v20220201:ClusterPrincipalAssignment" }, { type: "azure-native:kusto/v20220707:ClusterPrincipalAssignment" }, { type: "azure-native:kusto/v20221111:ClusterPrincipalAssignment" }, { type: "azure-native:kusto/v20221229:ClusterPrincipalAssignment" }, { type: "azure-native:kusto/v20230502:ClusterPrincipalAssignment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ClusterPrincipalAssignment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ClusterPrincipalAssignment resource.
 */
export interface ClusterPrincipalAssignmentArgs {
    /**
     * The name of the Kusto cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the Kusto principalAssignment.
     */
    principalAssignmentName?: pulumi.Input<string>;
    /**
     * The principal ID assigned to the cluster principal. It can be a user email, application ID, or security group name.
     */
    principalId: pulumi.Input<string>;
    /**
     * Principal type.
     */
    principalType: pulumi.Input<string | types.enums.PrincipalType>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Cluster principal role.
     */
    role: pulumi.Input<string | types.enums.ClusterPrincipalRole>;
    /**
     * The tenant id of the principal
     */
    tenantId?: pulumi.Input<string>;
}
