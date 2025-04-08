import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A class represent an AppComplianceAutomation report resource.
 *
 * Uses Azure REST API version 2024-06-27. In version 2.x of the Azure Native provider, it used API version 2022-11-16-preview.
 *
 * Other available API versions: 2022-11-16-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native appcomplianceautomation [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Report extends pulumi.CustomResource {
    /**
     * Get an existing Report resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Report {
        return new Report(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:appcomplianceautomation:Report';

    /**
     * Returns true if the given object is an instance of Report.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Report {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Report.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * List of synchronized certification records.
     */
    public /*out*/ readonly certRecords!: pulumi.Output<types.outputs.CertSyncRecordResponse[]>;
    /**
     * Report compliance status.
     */
    public /*out*/ readonly complianceStatus!: pulumi.Output<types.outputs.ReportComplianceStatusResponse>;
    /**
     * List of report error codes.
     */
    public /*out*/ readonly errors!: pulumi.Output<string[]>;
    /**
     * Report last collection trigger time.
     */
    public /*out*/ readonly lastTriggerTime!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Report next collection trigger time.
     */
    public /*out*/ readonly nextTriggerTime!: pulumi.Output<string>;
    /**
     * A list of comma-separated offerGuids indicates a series of offerGuids that map to the report. For example, "00000000-0000-0000-0000-000000000001,00000000-0000-0000-0000-000000000002" and "00000000-0000-0000-0000-000000000003".
     */
    public readonly offerGuid!: pulumi.Output<string | undefined>;
    /**
     * Azure lifecycle management
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * List of resource data.
     */
    public readonly resources!: pulumi.Output<types.outputs.ResourceMetadataResponse[]>;
    /**
     * Report status.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * The information of 'bring your own storage' binding to the report
     */
    public readonly storageInfo!: pulumi.Output<types.outputs.StorageInfoResponse | undefined>;
    /**
     * List of subscription Ids.
     */
    public /*out*/ readonly subscriptions!: pulumi.Output<string[]>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Report's tenant id.
     */
    public /*out*/ readonly tenantId!: pulumi.Output<string>;
    /**
     * Report collection trigger time's time zone, the available list can be obtained by executing "Get-TimeZone -ListAvailable" in PowerShell.
     * An example of valid timezone id is "Pacific Standard Time".
     */
    public readonly timeZone!: pulumi.Output<string>;
    /**
     * Report collection trigger time.
     */
    public readonly triggerTime!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Report resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ReportArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resources === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resources'");
            }
            if ((!args || args.timeZone === undefined) && !opts.urn) {
                throw new Error("Missing required property 'timeZone'");
            }
            if ((!args || args.triggerTime === undefined) && !opts.urn) {
                throw new Error("Missing required property 'triggerTime'");
            }
            resourceInputs["offerGuid"] = args ? args.offerGuid : undefined;
            resourceInputs["reportName"] = args ? args.reportName : undefined;
            resourceInputs["resources"] = args ? args.resources : undefined;
            resourceInputs["storageInfo"] = args ? args.storageInfo : undefined;
            resourceInputs["timeZone"] = args ? args.timeZone : undefined;
            resourceInputs["triggerTime"] = args ? args.triggerTime : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["certRecords"] = undefined /*out*/;
            resourceInputs["complianceStatus"] = undefined /*out*/;
            resourceInputs["errors"] = undefined /*out*/;
            resourceInputs["lastTriggerTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nextTriggerTime"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["subscriptions"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["certRecords"] = undefined /*out*/;
            resourceInputs["complianceStatus"] = undefined /*out*/;
            resourceInputs["errors"] = undefined /*out*/;
            resourceInputs["lastTriggerTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nextTriggerTime"] = undefined /*out*/;
            resourceInputs["offerGuid"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resources"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["storageInfo"] = undefined /*out*/;
            resourceInputs["subscriptions"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["timeZone"] = undefined /*out*/;
            resourceInputs["triggerTime"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:appcomplianceautomation/v20221116preview:Report" }, { type: "azure-native:appcomplianceautomation/v20240627:Report" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Report.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Report resource.
 */
export interface ReportArgs {
    /**
     * A list of comma-separated offerGuids indicates a series of offerGuids that map to the report. For example, "00000000-0000-0000-0000-000000000001,00000000-0000-0000-0000-000000000002" and "00000000-0000-0000-0000-000000000003".
     */
    offerGuid?: pulumi.Input<string>;
    /**
     * Report Name.
     */
    reportName?: pulumi.Input<string>;
    /**
     * List of resource data.
     */
    resources: pulumi.Input<pulumi.Input<types.inputs.ResourceMetadataArgs>[]>;
    /**
     * The information of 'bring your own storage' binding to the report
     */
    storageInfo?: pulumi.Input<types.inputs.StorageInfoArgs>;
    /**
     * Report collection trigger time's time zone, the available list can be obtained by executing "Get-TimeZone -ListAvailable" in PowerShell.
     * An example of valid timezone id is "Pacific Standard Time".
     */
    timeZone: pulumi.Input<string>;
    /**
     * Report collection trigger time.
     */
    triggerTime: pulumi.Input<string>;
}