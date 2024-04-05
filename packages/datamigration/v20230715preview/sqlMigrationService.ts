import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A SQL Migration Service.
 */
export class SqlMigrationService extends pulumi.CustomResource {
    /**
     * Get an existing SqlMigrationService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SqlMigrationService {
        return new SqlMigrationService(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:datamigration/v20230715preview:SqlMigrationService';

    /**
     * Returns true if the given object is an instance of SqlMigrationService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SqlMigrationService {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SqlMigrationService.__pulumiType;
    }

    /**
     * Current state of the Integration runtime.
     */
    public /*out*/ readonly integrationRuntimeState!: pulumi.Output<string>;
    public readonly location!: pulumi.Output<string | undefined>;
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state to track the async operation status.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SqlMigrationService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SqlMigrationServiceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sqlMigrationServiceName"] = args ? args.sqlMigrationServiceName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["integrationRuntimeState"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["integrationRuntimeState"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:datamigration:SqlMigrationService" }, { type: "azure-native:datamigration/v20211030preview:SqlMigrationService" }, { type: "azure-native:datamigration/v20220130preview:SqlMigrationService" }, { type: "azure-native:datamigration/v20220330preview:SqlMigrationService" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SqlMigrationService.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SqlMigrationService resource.
 */
export interface SqlMigrationServiceArgs {
    location?: pulumi.Input<string>;
    /**
     * Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the SQL Migration Service.
     */
    sqlMigrationServiceName?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}