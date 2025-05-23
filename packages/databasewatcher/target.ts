import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Concrete proxy resource types can be created by aliasing this type using a specific property type.
 *
 * Uses Azure REST API version 2024-10-01-preview. In version 2.x of the Azure Native provider, it used API version 2023-09-01-preview.
 *
 * Other available API versions: 2023-09-01-preview, 2024-07-19-preview, 2025-01-02. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native databasewatcher [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Target extends pulumi.CustomResource {
    /**
     * Get an existing Target resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Target {
        return new Target(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:databasewatcher:Target';

    /**
     * Returns true if the given object is an instance of Target.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Target {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Target.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The FQDN host name of the server to use in the connection string when connecting to a target. For example, for an Azure SQL logical server in the Azure commercial cloud, the value might be 'sql-logical-server-22092780.database.windows.net'; for an Azure SQL managed instance in the Azure commercial cloud, the value might be 'sql-mi-39441134.767d5869f605.database.windows.net'. Port number and instance name must be specified separately.
     */
    public readonly connectionServerName!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of authentication to use when connecting to a target.
     */
    public readonly targetAuthenticationType!: pulumi.Output<string>;
    /**
     * Discriminator property for TargetProperties.
     */
    public readonly targetType!: pulumi.Output<string>;
    /**
     * To use SQL authentication when connecting to targets, specify the vault where the login name and password secrets are stored.
     */
    public readonly targetVault!: pulumi.Output<types.outputs.VaultSecretResponse | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Target resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TargetArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.connectionServerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'connectionServerName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.targetAuthenticationType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetAuthenticationType'");
            }
            if ((!args || args.targetType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetType'");
            }
            if ((!args || args.watcherName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'watcherName'");
            }
            resourceInputs["connectionServerName"] = args ? args.connectionServerName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["targetAuthenticationType"] = args ? args.targetAuthenticationType : undefined;
            resourceInputs["targetName"] = args ? args.targetName : undefined;
            resourceInputs["targetType"] = args ? args.targetType : undefined;
            resourceInputs["targetVault"] = args ? args.targetVault : undefined;
            resourceInputs["watcherName"] = args ? args.watcherName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["connectionServerName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["targetAuthenticationType"] = undefined /*out*/;
            resourceInputs["targetType"] = undefined /*out*/;
            resourceInputs["targetVault"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:databasewatcher/v20230901preview:Target" }, { type: "azure-native:databasewatcher/v20240719preview:Target" }, { type: "azure-native:databasewatcher/v20241001preview:Target" }, { type: "azure-native:databasewatcher/v20250102:Target" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Target.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Target resource.
 */
export interface TargetArgs {
    /**
     * The FQDN host name of the server to use in the connection string when connecting to a target. For example, for an Azure SQL logical server in the Azure commercial cloud, the value might be 'sql-logical-server-22092780.database.windows.net'; for an Azure SQL managed instance in the Azure commercial cloud, the value might be 'sql-mi-39441134.767d5869f605.database.windows.net'. Port number and instance name must be specified separately.
     */
    connectionServerName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The type of authentication to use when connecting to a target.
     */
    targetAuthenticationType: pulumi.Input<string | types.enums.TargetAuthenticationType>;
    /**
     * The target resource name.
     */
    targetName?: pulumi.Input<string>;
    /**
     * Discriminator property for TargetProperties.
     */
    targetType: pulumi.Input<string>;
    /**
     * To use SQL authentication when connecting to targets, specify the vault where the login name and password secrets are stored.
     */
    targetVault?: pulumi.Input<types.inputs.VaultSecretArgs>;
    /**
     * The database watcher name.
     */
    watcherName: pulumi.Input<string>;
}