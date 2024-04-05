import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a cluster role.
 */
export class Role extends pulumi.CustomResource {
    /**
     * Get an existing Role resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Role {
        return new Role(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:dbforpostgresql/v20230302preview:Role';

    /**
     * Returns true if the given object is an instance of Role.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Role {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Role.__pulumiType;
    }

    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly objectId!: pulumi.Output<string>;
    public readonly principalType!: pulumi.Output<string>;
    /**
     * Provisioning state of the role
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    public readonly roleType!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    public readonly tenantId!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Role resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RoleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.clusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterName'");
            }
            if ((!args || args.objectId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'objectId'");
            }
            if ((!args || args.principalType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'principalType'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["objectId"] = args ? args.objectId : undefined;
            resourceInputs["password"] = args ? args.password : undefined;
            resourceInputs["principalType"] = args ? args.principalType : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["roleName"] = args ? args.roleName : undefined;
            resourceInputs["roleType"] = (args ? args.roleType : undefined) ?? "user";
            resourceInputs["tenantId"] = args ? args.tenantId : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["objectId"] = undefined /*out*/;
            resourceInputs["principalType"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["roleType"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:dbforpostgresql:Role" }, { type: "azure-native:dbforpostgresql/v20221108:Role" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Role.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Role resource.
 */
export interface RoleArgs {
    /**
     * The name of the cluster.
     */
    clusterName: pulumi.Input<string>;
    objectId: pulumi.Input<string>;
    /**
     * The password of the cluster role. If an identity is used, password will not be required.
     */
    password?: pulumi.Input<string>;
    principalType: pulumi.Input<string | types.enums.PrincipalType>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the cluster role.
     */
    roleName?: pulumi.Input<string>;
    roleType?: pulumi.Input<string | types.enums.RoleType>;
    tenantId?: pulumi.Input<string>;
}