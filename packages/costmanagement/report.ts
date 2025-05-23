import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A report resource.
 *
 * Uses Azure REST API version 2018-08-01-preview. In version 2.x of the Azure Native provider, it used API version 2018-08-01-preview.
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
    public static readonly __pulumiType = 'azure-native:costmanagement:Report';

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
     * Has definition for the report.
     */
    public readonly definition!: pulumi.Output<types.outputs.ReportDefinitionResponse>;
    /**
     * Has delivery information for the report.
     */
    public readonly deliveryInfo!: pulumi.Output<types.outputs.ReportDeliveryInfoResponse>;
    /**
     * The format of the report being delivered.
     */
    public readonly format!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Has schedule information for the report.
     */
    public readonly schedule!: pulumi.Output<types.outputs.ReportScheduleResponse | undefined>;
    /**
     * Resource tags.
     */
    public /*out*/ readonly tags!: pulumi.Output<{[key: string]: string}>;
    /**
     * Resource type.
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
            if ((!args || args.definition === undefined) && !opts.urn) {
                throw new Error("Missing required property 'definition'");
            }
            if ((!args || args.deliveryInfo === undefined) && !opts.urn) {
                throw new Error("Missing required property 'deliveryInfo'");
            }
            resourceInputs["definition"] = args ? args.definition : undefined;
            resourceInputs["deliveryInfo"] = args ? args.deliveryInfo : undefined;
            resourceInputs["format"] = args ? args.format : undefined;
            resourceInputs["reportName"] = args ? args.reportName : undefined;
            resourceInputs["schedule"] = args ? args.schedule : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["definition"] = undefined /*out*/;
            resourceInputs["deliveryInfo"] = undefined /*out*/;
            resourceInputs["format"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["schedule"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:costmanagement/v20180801preview:Report" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Report.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Report resource.
 */
export interface ReportArgs {
    /**
     * Has definition for the report.
     */
    definition: pulumi.Input<types.inputs.ReportDefinitionArgs>;
    /**
     * Has delivery information for the report.
     */
    deliveryInfo: pulumi.Input<types.inputs.ReportDeliveryInfoArgs>;
    /**
     * The format of the report being delivered.
     */
    format?: pulumi.Input<string | types.enums.FormatType>;
    /**
     * Report Name.
     */
    reportName?: pulumi.Input<string>;
    /**
     * Has schedule information for the report.
     */
    schedule?: pulumi.Input<types.inputs.ReportScheduleArgs>;
}