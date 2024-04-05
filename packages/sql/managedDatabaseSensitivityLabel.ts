import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A sensitivity label.
 * Azure REST API version: 2021-11-01. Prior API version in Azure Native 1.x: 2020-11-01-preview.
 *
 * Other available API versions: 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01-preview.
 */
export class ManagedDatabaseSensitivityLabel extends pulumi.CustomResource {
    /**
     * Get an existing ManagedDatabaseSensitivityLabel resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ManagedDatabaseSensitivityLabel {
        return new ManagedDatabaseSensitivityLabel(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql:ManagedDatabaseSensitivityLabel';

    /**
     * Returns true if the given object is an instance of ManagedDatabaseSensitivityLabel.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ManagedDatabaseSensitivityLabel {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ManagedDatabaseSensitivityLabel.__pulumiType;
    }

    /**
     * The column name.
     */
    public readonly columnName!: pulumi.Output<string>;
    /**
     * The information type.
     */
    public readonly informationType!: pulumi.Output<string | undefined>;
    /**
     * The information type ID.
     */
    public readonly informationTypeId!: pulumi.Output<string | undefined>;
    /**
     * Is sensitivity recommendation disabled. Applicable for recommended sensitivity label only. Specifies whether the sensitivity recommendation on this column is disabled (dismissed) or not.
     */
    public /*out*/ readonly isDisabled!: pulumi.Output<boolean>;
    /**
     * The label ID.
     */
    public readonly labelId!: pulumi.Output<string | undefined>;
    /**
     * The label name.
     */
    public readonly labelName!: pulumi.Output<string | undefined>;
    /**
     * Resource that manages the sensitivity label.
     */
    public /*out*/ readonly managedBy!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly rank!: pulumi.Output<string | undefined>;
    /**
     * The schema name.
     */
    public readonly schemaName!: pulumi.Output<string>;
    /**
     * The table name.
     */
    public readonly tableName!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ManagedDatabaseSensitivityLabel resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagedDatabaseSensitivityLabelArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.columnName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'columnName'");
            }
            if ((!args || args.databaseName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'databaseName'");
            }
            if ((!args || args.managedInstanceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'managedInstanceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.schemaName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'schemaName'");
            }
            if ((!args || args.tableName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tableName'");
            }
            resourceInputs["columnName"] = args ? args.columnName : undefined;
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["informationType"] = args ? args.informationType : undefined;
            resourceInputs["informationTypeId"] = args ? args.informationTypeId : undefined;
            resourceInputs["labelId"] = args ? args.labelId : undefined;
            resourceInputs["labelName"] = args ? args.labelName : undefined;
            resourceInputs["managedInstanceName"] = args ? args.managedInstanceName : undefined;
            resourceInputs["rank"] = args ? args.rank : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["schemaName"] = args ? args.schemaName : undefined;
            resourceInputs["sensitivityLabelSource"] = args ? args.sensitivityLabelSource : undefined;
            resourceInputs["tableName"] = args ? args.tableName : undefined;
            resourceInputs["isDisabled"] = undefined /*out*/;
            resourceInputs["managedBy"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["columnName"] = undefined /*out*/;
            resourceInputs["informationType"] = undefined /*out*/;
            resourceInputs["informationTypeId"] = undefined /*out*/;
            resourceInputs["isDisabled"] = undefined /*out*/;
            resourceInputs["labelId"] = undefined /*out*/;
            resourceInputs["labelName"] = undefined /*out*/;
            resourceInputs["managedBy"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["rank"] = undefined /*out*/;
            resourceInputs["schemaName"] = undefined /*out*/;
            resourceInputs["tableName"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql/v20180601preview:ManagedDatabaseSensitivityLabel" }, { type: "azure-native:sql/v20200202preview:ManagedDatabaseSensitivityLabel" }, { type: "azure-native:sql/v20200801preview:ManagedDatabaseSensitivityLabel" }, { type: "azure-native:sql/v20201101preview:ManagedDatabaseSensitivityLabel" }, { type: "azure-native:sql/v20210201preview:ManagedDatabaseSensitivityLabel" }, { type: "azure-native:sql/v20210501preview:ManagedDatabaseSensitivityLabel" }, { type: "azure-native:sql/v20210801preview:ManagedDatabaseSensitivityLabel" }, { type: "azure-native:sql/v20211101:ManagedDatabaseSensitivityLabel" }, { type: "azure-native:sql/v20211101preview:ManagedDatabaseSensitivityLabel" }, { type: "azure-native:sql/v20220201preview:ManagedDatabaseSensitivityLabel" }, { type: "azure-native:sql/v20220501preview:ManagedDatabaseSensitivityLabel" }, { type: "azure-native:sql/v20220801preview:ManagedDatabaseSensitivityLabel" }, { type: "azure-native:sql/v20221101preview:ManagedDatabaseSensitivityLabel" }, { type: "azure-native:sql/v20230201preview:ManagedDatabaseSensitivityLabel" }, { type: "azure-native:sql/v20230501preview:ManagedDatabaseSensitivityLabel" }, { type: "azure-native:sql/v20230801preview:ManagedDatabaseSensitivityLabel" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ManagedDatabaseSensitivityLabel.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ManagedDatabaseSensitivityLabel resource.
 */
export interface ManagedDatabaseSensitivityLabelArgs {
    /**
     * The name of the column.
     */
    columnName: pulumi.Input<string>;
    /**
     * The name of the database.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The information type.
     */
    informationType?: pulumi.Input<string>;
    /**
     * The information type ID.
     */
    informationTypeId?: pulumi.Input<string>;
    /**
     * The label ID.
     */
    labelId?: pulumi.Input<string>;
    /**
     * The label name.
     */
    labelName?: pulumi.Input<string>;
    /**
     * The name of the managed instance.
     */
    managedInstanceName: pulumi.Input<string>;
    rank?: pulumi.Input<types.enums.SensitivityLabelRank>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the schema.
     */
    schemaName: pulumi.Input<string>;
    /**
     * The source of the sensitivity label.
     */
    sensitivityLabelSource?: pulumi.Input<string>;
    /**
     * The name of the table.
     */
    tableName: pulumi.Input<string>;
}