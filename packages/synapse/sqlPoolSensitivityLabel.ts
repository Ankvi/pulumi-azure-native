import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A sensitivity label.
 *
 * Uses Azure REST API version 2021-06-01. In version 2.x of the Azure Native provider, it used API version 2021-06-01.
 *
 * Other available API versions: 2021-04-01-preview, 2021-05-01, 2021-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native synapse [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class SqlPoolSensitivityLabel extends pulumi.CustomResource {
    /**
     * Get an existing SqlPoolSensitivityLabel resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SqlPoolSensitivityLabel {
        return new SqlPoolSensitivityLabel(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:synapse:SqlPoolSensitivityLabel';

    /**
     * Returns true if the given object is an instance of SqlPoolSensitivityLabel.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SqlPoolSensitivityLabel {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SqlPoolSensitivityLabel.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
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
     * managed by
     */
    public /*out*/ readonly managedBy!: pulumi.Output<string>;
    /**
     * The name of the resource
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
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SqlPoolSensitivityLabel resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SqlPoolSensitivityLabelArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.columnName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'columnName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.schemaName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'schemaName'");
            }
            if ((!args || args.sqlPoolName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sqlPoolName'");
            }
            if ((!args || args.tableName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tableName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["columnName"] = args ? args.columnName : undefined;
            resourceInputs["informationType"] = args ? args.informationType : undefined;
            resourceInputs["informationTypeId"] = args ? args.informationTypeId : undefined;
            resourceInputs["labelId"] = args ? args.labelId : undefined;
            resourceInputs["labelName"] = args ? args.labelName : undefined;
            resourceInputs["rank"] = args ? args.rank : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["schemaName"] = args ? args.schemaName : undefined;
            resourceInputs["sensitivityLabelSource"] = args ? args.sensitivityLabelSource : undefined;
            resourceInputs["sqlPoolName"] = args ? args.sqlPoolName : undefined;
            resourceInputs["tableName"] = args ? args.tableName : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["isDisabled"] = undefined /*out*/;
            resourceInputs["managedBy"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
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
        const aliasOpts = { aliases: [{ type: "azure-native:synapse/v20190601preview:SqlPoolSensitivityLabel" }, { type: "azure-native:synapse/v20201201:SqlPoolSensitivityLabel" }, { type: "azure-native:synapse/v20210301:SqlPoolSensitivityLabel" }, { type: "azure-native:synapse/v20210401preview:SqlPoolSensitivityLabel" }, { type: "azure-native:synapse/v20210501:SqlPoolSensitivityLabel" }, { type: "azure-native:synapse/v20210601:SqlPoolSensitivityLabel" }, { type: "azure-native:synapse/v20210601preview:SqlPoolSensitivityLabel" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SqlPoolSensitivityLabel.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SqlPoolSensitivityLabel resource.
 */
export interface SqlPoolSensitivityLabelArgs {
    /**
     * The name of the column.
     */
    columnName: pulumi.Input<string>;
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
    rank?: pulumi.Input<types.enums.SensitivityLabelRank>;
    /**
     * The name of the resource group. The name is case insensitive.
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
     * SQL pool name
     */
    sqlPoolName: pulumi.Input<string>;
    /**
     * The name of the table.
     */
    tableName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}