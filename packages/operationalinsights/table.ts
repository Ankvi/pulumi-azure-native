import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Workspace data table definition.
 *
 * Uses Azure REST API version 2023-09-01. In version 2.x of the Azure Native provider, it used API version 2022-10-01.
 *
 * Other available API versions: 2021-12-01-preview, 2022-10-01, 2025-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native operationalinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Table extends pulumi.CustomResource {
    /**
     * Get an existing Table resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Table {
        return new Table(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:operationalinsights:Table';

    /**
     * Returns true if the given object is an instance of Table.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Table {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Table.__pulumiType;
    }

    /**
     * The table data archive retention in days. Calculated as (totalRetentionInDays-retentionInDays)
     */
    public /*out*/ readonly archiveRetentionInDays!: pulumi.Output<number>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The timestamp that table plan was last modified (UTC).
     */
    public /*out*/ readonly lastPlanModifiedDate!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Instruct the system how to handle and charge the logs ingested to this table.
     */
    public readonly plan!: pulumi.Output<string | undefined>;
    /**
     * Table's current provisioning state. If set to 'updating', indicates a resource lock due to ongoing operation, forbidding any update to the table until the ongoing operation is concluded.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Parameters of the restore operation that initiated this table.
     */
    public readonly restoredLogs!: pulumi.Output<types.outputs.RestoredLogsResponse | undefined>;
    /**
     * Search job execution statistics.
     */
    public /*out*/ readonly resultStatistics!: pulumi.Output<types.outputs.ResultStatisticsResponse>;
    /**
     * The table retention in days, between 4 and 730. Setting this property to -1 will default to the workspace retention.
     */
    public readonly retentionInDays!: pulumi.Output<number | undefined>;
    /**
     * True - Value originates from workspace retention in days, False - Customer specific.
     */
    public /*out*/ readonly retentionInDaysAsDefault!: pulumi.Output<boolean>;
    /**
     * Table schema.
     */
    public readonly schema!: pulumi.Output<types.outputs.SchemaResponse | undefined>;
    /**
     * Parameters of the search job that initiated this table.
     */
    public readonly searchResults!: pulumi.Output<types.outputs.SearchResultsResponse | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The table total retention in days, between 4 and 4383. Setting this property to -1 will default to table retention.
     */
    public readonly totalRetentionInDays!: pulumi.Output<number | undefined>;
    /**
     * True - Value originates from retention in days, False - Customer specific.
     */
    public /*out*/ readonly totalRetentionInDaysAsDefault!: pulumi.Output<boolean>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Table resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TableArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["plan"] = args ? args.plan : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["restoredLogs"] = args ? args.restoredLogs : undefined;
            resourceInputs["retentionInDays"] = args ? args.retentionInDays : undefined;
            resourceInputs["schema"] = args ? args.schema : undefined;
            resourceInputs["searchResults"] = args ? args.searchResults : undefined;
            resourceInputs["tableName"] = args ? args.tableName : undefined;
            resourceInputs["totalRetentionInDays"] = args ? args.totalRetentionInDays : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["archiveRetentionInDays"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["lastPlanModifiedDate"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resultStatistics"] = undefined /*out*/;
            resourceInputs["retentionInDaysAsDefault"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["totalRetentionInDaysAsDefault"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["archiveRetentionInDays"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["lastPlanModifiedDate"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["plan"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["restoredLogs"] = undefined /*out*/;
            resourceInputs["resultStatistics"] = undefined /*out*/;
            resourceInputs["retentionInDays"] = undefined /*out*/;
            resourceInputs["retentionInDaysAsDefault"] = undefined /*out*/;
            resourceInputs["schema"] = undefined /*out*/;
            resourceInputs["searchResults"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["totalRetentionInDays"] = undefined /*out*/;
            resourceInputs["totalRetentionInDaysAsDefault"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:operationalinsights/v20211201preview:Table" }, { type: "azure-native:operationalinsights/v20221001:Table" }, { type: "azure-native:operationalinsights/v20230901:Table" }, { type: "azure-native:operationalinsights/v20250201:Table" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Table.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Table resource.
 */
export interface TableArgs {
    /**
     * Instruct the system how to handle and charge the logs ingested to this table.
     */
    plan?: pulumi.Input<string | types.enums.TablePlanEnum>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Parameters of the restore operation that initiated this table.
     */
    restoredLogs?: pulumi.Input<types.inputs.RestoredLogsArgs>;
    /**
     * The table retention in days, between 4 and 730. Setting this property to -1 will default to the workspace retention.
     */
    retentionInDays?: pulumi.Input<number>;
    /**
     * Table schema.
     */
    schema?: pulumi.Input<types.inputs.SchemaArgs>;
    /**
     * Parameters of the search job that initiated this table.
     */
    searchResults?: pulumi.Input<types.inputs.SearchResultsArgs>;
    /**
     * The name of the table.
     */
    tableName?: pulumi.Input<string>;
    /**
     * The table total retention in days, between 4 and 4383. Setting this property to -1 will default to table retention.
     */
    totalRetentionInDays?: pulumi.Input<number>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}