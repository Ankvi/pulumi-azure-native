import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Workspace active directory administrator
 *
 * Uses Azure REST API version 2021-06-01. In version 2.x of the Azure Native provider, it used API version 2021-06-01.
 *
 * Other available API versions: 2021-04-01-preview, 2021-05-01, 2021-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native synapse [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 *
 * Note: SQL AAD Admin is configured automatically during workspace creation and assigned to the current user. One can't add more admins with this resource unless you manually delete the current SQL AAD Admin.
 */
export class WorkspaceSqlAadAdmin extends pulumi.CustomResource {
    /**
     * Get an existing WorkspaceSqlAadAdmin resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WorkspaceSqlAadAdmin {
        return new WorkspaceSqlAadAdmin(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:synapse:WorkspaceSqlAadAdmin';

    /**
     * Returns true if the given object is an instance of WorkspaceSqlAadAdmin.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WorkspaceSqlAadAdmin {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WorkspaceSqlAadAdmin.__pulumiType;
    }

    /**
     * Workspace active directory administrator type
     */
    public readonly administratorType!: pulumi.Output<string | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Login of the workspace active directory administrator
     */
    public readonly login!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Object ID of the workspace active directory administrator
     */
    public readonly sid!: pulumi.Output<string | undefined>;
    /**
     * Tenant ID of the workspace active directory administrator
     */
    public readonly tenantId!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WorkspaceSqlAadAdmin resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkspaceSqlAadAdminArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["administratorType"] = args ? args.administratorType : undefined;
            resourceInputs["login"] = args ? args.login : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sid"] = args ? args.sid : undefined;
            resourceInputs["tenantId"] = args ? args.tenantId : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["administratorType"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["login"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["sid"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:synapse/v20190601preview:WorkspaceSqlAadAdmin" }, { type: "azure-native:synapse/v20201201:WorkspaceSqlAadAdmin" }, { type: "azure-native:synapse/v20210301:WorkspaceSqlAadAdmin" }, { type: "azure-native:synapse/v20210401preview:WorkspaceSqlAadAdmin" }, { type: "azure-native:synapse/v20210501:WorkspaceSqlAadAdmin" }, { type: "azure-native:synapse/v20210601:WorkspaceSqlAadAdmin" }, { type: "azure-native:synapse/v20210601preview:WorkspaceSqlAadAdmin" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WorkspaceSqlAadAdmin.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WorkspaceSqlAadAdmin resource.
 */
export interface WorkspaceSqlAadAdminArgs {
    /**
     * Workspace active directory administrator type
     */
    administratorType?: pulumi.Input<string>;
    /**
     * Login of the workspace active directory administrator
     */
    login?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Object ID of the workspace active directory administrator
     */
    sid?: pulumi.Input<string>;
    /**
     * Tenant ID of the workspace active directory administrator
     */
    tenantId?: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}