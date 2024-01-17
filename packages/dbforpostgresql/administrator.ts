import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents an Active Directory administrator.
 * Azure REST API version: 2022-12-01.
 *
 * Other available API versions: 2023-03-01-preview, 2023-06-01-preview.
 */
export class Administrator extends pulumi.CustomResource {
    /**
     * Get an existing Administrator resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Administrator {
        return new Administrator(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:dbforpostgresql:Administrator';

    /**
     * Returns true if the given object is an instance of Administrator.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Administrator {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Administrator.__pulumiType;
    }

    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The objectId of the Active Directory administrator.
     */
    public readonly objectId!: pulumi.Output<string | undefined>;
    /**
     * Active Directory administrator principal name.
     */
    public readonly principalName!: pulumi.Output<string | undefined>;
    /**
     * The principal type used to represent the type of Active Directory Administrator.
     */
    public readonly principalType!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The tenantId of the Active Directory administrator.
     */
    public readonly tenantId!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Administrator resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AdministratorArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverName'");
            }
            resourceInputs["objectId"] = args ? args.objectId : undefined;
            resourceInputs["principalName"] = args ? args.principalName : undefined;
            resourceInputs["principalType"] = args ? args.principalType : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["tenantId"] = args ? args.tenantId : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["objectId"] = undefined /*out*/;
            resourceInputs["principalName"] = undefined /*out*/;
            resourceInputs["principalType"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:dbforpostgresql/v20220308preview:Administrator" }, { type: "azure-native:dbforpostgresql/v20221201:Administrator" }, { type: "azure-native:dbforpostgresql/v20230301preview:Administrator" }, { type: "azure-native:dbforpostgresql/v20230601preview:Administrator" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Administrator.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Administrator resource.
 */
export interface AdministratorArgs {
    /**
     * Guid of the objectId for the administrator.
     */
    objectId?: pulumi.Input<string>;
    /**
     * Active Directory administrator principal name.
     */
    principalName?: pulumi.Input<string>;
    /**
     * The principal type used to represent the type of Active Directory Administrator.
     */
    principalType?: pulumi.Input<string | types.enums.PrincipalType>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
    /**
     * The tenantId of the Active Directory administrator.
     */
    tenantId?: pulumi.Input<string>;
}