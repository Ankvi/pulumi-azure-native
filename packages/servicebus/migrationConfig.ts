import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Single item in List or Get Migration Config operation
 *
 * Uses Azure REST API version 2024-01-01. In version 2.x of the Azure Native provider, it used API version 2022-01-01-preview.
 *
 * Other available API versions: 2018-01-01-preview, 2021-01-01-preview, 2021-06-01-preview, 2021-11-01, 2022-01-01-preview, 2022-10-01-preview, 2023-01-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native servicebus [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class MigrationConfig extends pulumi.CustomResource {
    /**
     * Get an existing MigrationConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MigrationConfig {
        return new MigrationConfig(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:servicebus:MigrationConfig';

    /**
     * Returns true if the given object is an instance of MigrationConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MigrationConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MigrationConfig.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public /*out*/ readonly location!: pulumi.Output<string>;
    /**
     * State in which Standard to Premium Migration is, possible values : Unknown, Reverting, Completing, Initiating, Syncing, Active
     */
    public /*out*/ readonly migrationState!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Number of entities pending to be replicated.
     */
    public /*out*/ readonly pendingReplicationOperationsCount!: pulumi.Output<number>;
    /**
     * Name to access Standard Namespace after migration
     */
    public readonly postMigrationName!: pulumi.Output<string>;
    /**
     * Provisioning state of Migration Configuration 
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The system meta data relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Existing premium Namespace ARM Id name which has no entities, will be used for migration
     */
    public readonly targetNamespace!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.EventHub/Namespaces" or "Microsoft.EventHub/Namespaces/EventHubs"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a MigrationConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MigrationConfigArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.namespaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'namespaceName'");
            }
            if ((!args || args.postMigrationName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'postMigrationName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.targetNamespace === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetNamespace'");
            }
            resourceInputs["configName"] = args ? args.configName : undefined;
            resourceInputs["namespaceName"] = args ? args.namespaceName : undefined;
            resourceInputs["postMigrationName"] = args ? args.postMigrationName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["targetNamespace"] = args ? args.targetNamespace : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["migrationState"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["pendingReplicationOperationsCount"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["migrationState"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["pendingReplicationOperationsCount"] = undefined /*out*/;
            resourceInputs["postMigrationName"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["targetNamespace"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:servicebus/v20170401:MigrationConfig" }, { type: "azure-native:servicebus/v20180101preview:MigrationConfig" }, { type: "azure-native:servicebus/v20210101preview:MigrationConfig" }, { type: "azure-native:servicebus/v20210601preview:MigrationConfig" }, { type: "azure-native:servicebus/v20211101:MigrationConfig" }, { type: "azure-native:servicebus/v20220101preview:MigrationConfig" }, { type: "azure-native:servicebus/v20221001preview:MigrationConfig" }, { type: "azure-native:servicebus/v20230101preview:MigrationConfig" }, { type: "azure-native:servicebus/v20240101:MigrationConfig" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(MigrationConfig.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a MigrationConfig resource.
 */
export interface MigrationConfigArgs {
    /**
     * The configuration name. Should always be "$default".
     */
    configName?: pulumi.Input<string>;
    /**
     * The namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * Name to access Standard Namespace after migration
     */
    postMigrationName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Existing premium Namespace ARM Id name which has no entities, will be used for migration
     */
    targetNamespace: pulumi.Input<string>;
}