import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Class representing an attached database configuration.
 * Azure REST API version: 2021-06-01-preview. Prior API version in Azure Native 1.x: 2021-06-01-preview.
 */
export class KustoPoolAttachedDatabaseConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing KustoPoolAttachedDatabaseConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): KustoPoolAttachedDatabaseConfiguration {
        return new KustoPoolAttachedDatabaseConfiguration(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:synapse:KustoPoolAttachedDatabaseConfiguration';

    /**
     * Returns true if the given object is an instance of KustoPoolAttachedDatabaseConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KustoPoolAttachedDatabaseConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KustoPoolAttachedDatabaseConfiguration.__pulumiType;
    }

    /**
     * The list of databases from the clusterResourceId which are currently attached to the kusto pool.
     */
    public /*out*/ readonly attachedDatabaseNames!: pulumi.Output<string[]>;
    /**
     * The name of the database which you would like to attach, use * if you want to follow all current and future databases.
     */
    public readonly databaseName!: pulumi.Output<string>;
    /**
     * The default principals modification kind
     */
    public readonly defaultPrincipalsModificationKind!: pulumi.Output<string>;
    /**
     * The resource id of the kusto pool where the databases you would like to attach reside.
     */
    public readonly kustoPoolResourceId!: pulumi.Output<string>;
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
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Table level sharing specifications
     */
    public readonly tableLevelSharingProperties!: pulumi.Output<types.outputs.TableLevelSharingPropertiesResponse | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a KustoPoolAttachedDatabaseConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KustoPoolAttachedDatabaseConfigurationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.databaseName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'databaseName'");
            }
            if ((!args || args.defaultPrincipalsModificationKind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'defaultPrincipalsModificationKind'");
            }
            if ((!args || args.kustoPoolName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kustoPoolName'");
            }
            if ((!args || args.kustoPoolResourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kustoPoolResourceId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["attachedDatabaseConfigurationName"] = args ? args.attachedDatabaseConfigurationName : undefined;
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["defaultPrincipalsModificationKind"] = args ? args.defaultPrincipalsModificationKind : undefined;
            resourceInputs["kustoPoolName"] = args ? args.kustoPoolName : undefined;
            resourceInputs["kustoPoolResourceId"] = args ? args.kustoPoolResourceId : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tableLevelSharingProperties"] = args ? args.tableLevelSharingProperties : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["attachedDatabaseNames"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["attachedDatabaseNames"] = undefined /*out*/;
            resourceInputs["databaseName"] = undefined /*out*/;
            resourceInputs["defaultPrincipalsModificationKind"] = undefined /*out*/;
            resourceInputs["kustoPoolResourceId"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tableLevelSharingProperties"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:synapse/v20210601preview:KustoPoolAttachedDatabaseConfiguration" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(KustoPoolAttachedDatabaseConfiguration.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a KustoPoolAttachedDatabaseConfiguration resource.
 */
export interface KustoPoolAttachedDatabaseConfigurationArgs {
    /**
     * The name of the attached database configuration.
     */
    attachedDatabaseConfigurationName?: pulumi.Input<string>;
    /**
     * The name of the database which you would like to attach, use * if you want to follow all current and future databases.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The default principals modification kind
     */
    defaultPrincipalsModificationKind: pulumi.Input<string | types.enums.DefaultPrincipalsModificationKind>;
    /**
     * The name of the Kusto pool.
     */
    kustoPoolName: pulumi.Input<string>;
    /**
     * The resource id of the kusto pool where the databases you would like to attach reside.
     */
    kustoPoolResourceId: pulumi.Input<string>;
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
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}