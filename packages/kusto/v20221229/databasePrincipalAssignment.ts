import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Class representing a database principal assignment.
 */
export class DatabasePrincipalAssignment extends pulumi.CustomResource {
    /**
     * Get an existing DatabasePrincipalAssignment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DatabasePrincipalAssignment {
        return new DatabasePrincipalAssignment(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:kusto/v20221229:DatabasePrincipalAssignment';

    /**
     * Returns true if the given object is an instance of DatabasePrincipalAssignment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DatabasePrincipalAssignment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatabasePrincipalAssignment.__pulumiType;
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
     * The principal ID assigned to the database principal. It can be a user email, application ID, or security group name.
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
     * Database principal role.
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
     * Create a DatabasePrincipalAssignment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabasePrincipalAssignmentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.clusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterName'");
            }
            if ((!args || args.databaseName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'databaseName'");
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
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
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
        const aliasOpts = { aliases: [{ type: "azure-native:kusto:DatabasePrincipalAssignment" }, { type: "azure-native:kusto/v20191109:DatabasePrincipalAssignment" }, { type: "azure-native:kusto/v20200215:DatabasePrincipalAssignment" }, { type: "azure-native:kusto/v20200614:DatabasePrincipalAssignment" }, { type: "azure-native:kusto/v20200918:DatabasePrincipalAssignment" }, { type: "azure-native:kusto/v20210101:DatabasePrincipalAssignment" }, { type: "azure-native:kusto/v20210827:DatabasePrincipalAssignment" }, { type: "azure-native:kusto/v20220201:DatabasePrincipalAssignment" }, { type: "azure-native:kusto/v20220707:DatabasePrincipalAssignment" }, { type: "azure-native:kusto/v20221111:DatabasePrincipalAssignment" }, { type: "azure-native:kusto/v20230502:DatabasePrincipalAssignment" }, { type: "azure-native:kusto/v20230815:DatabasePrincipalAssignment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DatabasePrincipalAssignment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DatabasePrincipalAssignment resource.
 */
export interface DatabasePrincipalAssignmentArgs {
    /**
     * The name of the Kusto cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the database in the Kusto cluster.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The name of the Kusto principalAssignment.
     */
    principalAssignmentName?: pulumi.Input<string>;
    /**
     * The principal ID assigned to the database principal. It can be a user email, application ID, or security group name.
     */
    principalId: pulumi.Input<string>;
    /**
     * Principal type.
     */
    principalType: pulumi.Input<string | types.enums.PrincipalType>;
    /**
     * The name of the resource group containing the Kusto cluster.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Database principal role.
     */
    role: pulumi.Input<string | types.enums.DatabasePrincipalRole>;
    /**
     * The tenant id of the principal
     */
    tenantId?: pulumi.Input<string>;
}
