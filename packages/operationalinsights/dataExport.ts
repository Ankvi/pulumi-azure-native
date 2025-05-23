import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * The top level data export resource container.
 *
 * Uses Azure REST API version 2023-09-01. In version 2.x of the Azure Native provider, it used API version 2020-08-01.
 *
 * Other available API versions: 2019-08-01-preview, 2020-03-01-preview, 2020-08-01, 2025-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native operationalinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class DataExport extends pulumi.CustomResource {
    /**
     * Get an existing DataExport resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DataExport {
        return new DataExport(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:operationalinsights:DataExport';

    /**
     * Returns true if the given object is an instance of DataExport.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DataExport {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DataExport.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The latest data export rule modification time.
     */
    public readonly createdDate!: pulumi.Output<string | undefined>;
    /**
     * The data export rule ID.
     */
    public readonly dataExportId!: pulumi.Output<string | undefined>;
    /**
     * Active when enabled.
     */
    public readonly enable!: pulumi.Output<boolean | undefined>;
    /**
     * Optional. Allows to define an Event Hub name. Not applicable when destination is Storage Account.
     */
    public readonly eventHubName!: pulumi.Output<string | undefined>;
    /**
     * Date and time when the export was last modified.
     */
    public readonly lastModifiedDate!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The destination resource ID. This can be copied from the Properties entry of the destination resource in Azure.
     */
    public readonly resourceId!: pulumi.Output<string>;
    /**
     * An array of tables to export, for example: [“Heartbeat, SecurityEvent”].
     */
    public readonly tableNames!: pulumi.Output<string[]>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DataExport resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DataExportArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.resourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceId'");
            }
            if ((!args || args.tableNames === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tableNames'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["createdDate"] = args ? args.createdDate : undefined;
            resourceInputs["dataExportId"] = args ? args.dataExportId : undefined;
            resourceInputs["dataExportName"] = args ? args.dataExportName : undefined;
            resourceInputs["enable"] = args ? args.enable : undefined;
            resourceInputs["eventHubName"] = args ? args.eventHubName : undefined;
            resourceInputs["lastModifiedDate"] = args ? args.lastModifiedDate : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceId"] = args ? args.resourceId : undefined;
            resourceInputs["tableNames"] = args ? args.tableNames : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["createdDate"] = undefined /*out*/;
            resourceInputs["dataExportId"] = undefined /*out*/;
            resourceInputs["enable"] = undefined /*out*/;
            resourceInputs["eventHubName"] = undefined /*out*/;
            resourceInputs["lastModifiedDate"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["resourceId"] = undefined /*out*/;
            resourceInputs["tableNames"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:operationalinsights/v20190801preview:DataExport" }, { type: "azure-native:operationalinsights/v20200301preview:DataExport" }, { type: "azure-native:operationalinsights/v20200801:DataExport" }, { type: "azure-native:operationalinsights/v20230901:DataExport" }, { type: "azure-native:operationalinsights/v20250201:DataExport" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DataExport.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DataExport resource.
 */
export interface DataExportArgs {
    /**
     * The latest data export rule modification time.
     */
    createdDate?: pulumi.Input<string>;
    /**
     * The data export rule ID.
     */
    dataExportId?: pulumi.Input<string>;
    /**
     * The data export rule name.
     */
    dataExportName?: pulumi.Input<string>;
    /**
     * Active when enabled.
     */
    enable?: pulumi.Input<boolean>;
    /**
     * Optional. Allows to define an Event Hub name. Not applicable when destination is Storage Account.
     */
    eventHubName?: pulumi.Input<string>;
    /**
     * Date and time when the export was last modified.
     */
    lastModifiedDate?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The destination resource ID. This can be copied from the Properties entry of the destination resource in Azure.
     */
    resourceId: pulumi.Input<string>;
    /**
     * An array of tables to export, for example: [“Heartbeat, SecurityEvent”].
     */
    tableNames: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}