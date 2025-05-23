import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Class representing an attached database configuration.
 *
 * Uses Azure REST API version 2024-04-13. In version 2.x of the Azure Native provider, it used API version 2022-12-29.
 *
 * Other available API versions: 2019-09-07, 2019-11-09, 2020-02-15, 2020-06-14, 2020-09-18, 2021-01-01, 2021-08-27, 2022-02-01, 2022-07-07, 2022-11-11, 2022-12-29, 2023-05-02, 2023-08-15. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native kusto [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class AttachedDatabaseConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing AttachedDatabaseConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AttachedDatabaseConfiguration {
        return new AttachedDatabaseConfiguration(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:kusto:AttachedDatabaseConfiguration';

    /**
     * Returns true if the given object is an instance of AttachedDatabaseConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AttachedDatabaseConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AttachedDatabaseConfiguration.__pulumiType;
    }

    /**
     * The list of databases from the clusterResourceId which are currently attached to the cluster.
     */
    public /*out*/ readonly attachedDatabaseNames!: pulumi.Output<string[]>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The resource id of the cluster where the databases you would like to attach reside.
     */
    public readonly clusterResourceId!: pulumi.Output<string>;
    /**
     * The name of the database which you would like to attach, use * if you want to follow all current and future databases.
     */
    public readonly databaseName!: pulumi.Output<string>;
    /**
     * Overrides the original database name. Relevant only when attaching to a specific database.
     */
    public readonly databaseNameOverride!: pulumi.Output<string | undefined>;
    /**
     * Adds a prefix to the attached databases name. When following an entire cluster, that prefix would be added to all of the databases original names from leader cluster.
     */
    public readonly databaseNamePrefix!: pulumi.Output<string | undefined>;
    /**
     * The default principals modification kind
     */
    public readonly defaultPrincipalsModificationKind!: pulumi.Output<string>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioned state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Table level sharing specifications
     */
    public readonly tableLevelSharingProperties!: pulumi.Output<types.outputs.TableLevelSharingPropertiesResponse | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a AttachedDatabaseConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AttachedDatabaseConfigurationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.clusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterName'");
            }
            if ((!args || args.clusterResourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterResourceId'");
            }
            if ((!args || args.databaseName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'databaseName'");
            }
            if ((!args || args.defaultPrincipalsModificationKind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'defaultPrincipalsModificationKind'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["attachedDatabaseConfigurationName"] = args ? args.attachedDatabaseConfigurationName : undefined;
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["clusterResourceId"] = args ? args.clusterResourceId : undefined;
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["databaseNameOverride"] = args ? args.databaseNameOverride : undefined;
            resourceInputs["databaseNamePrefix"] = args ? args.databaseNamePrefix : undefined;
            resourceInputs["defaultPrincipalsModificationKind"] = args ? args.defaultPrincipalsModificationKind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tableLevelSharingProperties"] = args ? args.tableLevelSharingProperties : undefined;
            resourceInputs["attachedDatabaseNames"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["attachedDatabaseNames"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["clusterResourceId"] = undefined /*out*/;
            resourceInputs["databaseName"] = undefined /*out*/;
            resourceInputs["databaseNameOverride"] = undefined /*out*/;
            resourceInputs["databaseNamePrefix"] = undefined /*out*/;
            resourceInputs["defaultPrincipalsModificationKind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["tableLevelSharingProperties"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:kusto/v20190907:AttachedDatabaseConfiguration" }, { type: "azure-native:kusto/v20191109:AttachedDatabaseConfiguration" }, { type: "azure-native:kusto/v20200215:AttachedDatabaseConfiguration" }, { type: "azure-native:kusto/v20200614:AttachedDatabaseConfiguration" }, { type: "azure-native:kusto/v20200918:AttachedDatabaseConfiguration" }, { type: "azure-native:kusto/v20210101:AttachedDatabaseConfiguration" }, { type: "azure-native:kusto/v20210827:AttachedDatabaseConfiguration" }, { type: "azure-native:kusto/v20220201:AttachedDatabaseConfiguration" }, { type: "azure-native:kusto/v20220707:AttachedDatabaseConfiguration" }, { type: "azure-native:kusto/v20221111:AttachedDatabaseConfiguration" }, { type: "azure-native:kusto/v20221229:AttachedDatabaseConfiguration" }, { type: "azure-native:kusto/v20230502:AttachedDatabaseConfiguration" }, { type: "azure-native:kusto/v20230815:AttachedDatabaseConfiguration" }, { type: "azure-native:kusto/v20240413:AttachedDatabaseConfiguration" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AttachedDatabaseConfiguration.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AttachedDatabaseConfiguration resource.
 */
export interface AttachedDatabaseConfigurationArgs {
    /**
     * The name of the attached database configuration.
     */
    attachedDatabaseConfigurationName?: pulumi.Input<string>;
    /**
     * The name of the Kusto cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The resource id of the cluster where the databases you would like to attach reside.
     */
    clusterResourceId: pulumi.Input<string>;
    /**
     * The name of the database which you would like to attach, use * if you want to follow all current and future databases.
     */
    databaseName: pulumi.Input<string>;
    /**
     * Overrides the original database name. Relevant only when attaching to a specific database.
     */
    databaseNameOverride?: pulumi.Input<string>;
    /**
     * Adds a prefix to the attached databases name. When following an entire cluster, that prefix would be added to all of the databases original names from leader cluster.
     */
    databaseNamePrefix?: pulumi.Input<string>;
    /**
     * The default principals modification kind
     */
    defaultPrincipalsModificationKind: pulumi.Input<string | types.enums.DefaultPrincipalsModificationKind>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Table level sharing specifications
     */
    tableLevelSharingProperties?: pulumi.Input<types.inputs.TableLevelSharingPropertiesArgs>;
}