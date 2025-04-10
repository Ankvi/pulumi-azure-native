import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A class represent an AppComplianceAutomation report resource.
 *
 * Uses Azure REST API version 2022-11-16-preview. In version 1.x of the Azure Native provider, it used API version 2022-11-16-preview.
 *
 * Other available API versions: 2024-06-27.
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
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Report property.
     */
    public readonly properties!: pulumi.Output<types.outputs.ReportPropertiesResponse>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
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
            if ((!args || args.properties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'properties'");
            }
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["reportName"] = args ? args.reportName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
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
     * Report property.
     */
    properties: pulumi.Input<types.inputs.ReportPropertiesArgs>;
    /**
     * Report Name.
     */
    reportName?: pulumi.Input<string>;
}