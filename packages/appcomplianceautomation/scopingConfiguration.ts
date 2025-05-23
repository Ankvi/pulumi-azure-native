import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A class represent an AppComplianceAutomation scoping configuration resource.
 *
 * Uses Azure REST API version 2024-06-27. In version 2.x of the Azure Native provider, it used API version 2024-06-27.
 */
export class ScopingConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing ScopingConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ScopingConfiguration {
        return new ScopingConfiguration(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:appcomplianceautomation:ScopingConfiguration';

    /**
     * Returns true if the given object is an instance of ScopingConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ScopingConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ScopingConfiguration.__pulumiType;
    }

    /**
     * List of scoping question answers.
     */
    public readonly answers!: pulumi.Output<types.outputs.ScopingAnswerResponse[] | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Azure lifecycle management
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ScopingConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ScopingConfigurationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.reportName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'reportName'");
            }
            resourceInputs["answers"] = args ? args.answers : undefined;
            resourceInputs["reportName"] = args ? args.reportName : undefined;
            resourceInputs["scopingConfigurationName"] = args ? args.scopingConfigurationName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["answers"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:appcomplianceautomation/v20240627:ScopingConfiguration" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ScopingConfiguration.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ScopingConfiguration resource.
 */
export interface ScopingConfigurationArgs {
    /**
     * List of scoping question answers.
     */
    answers?: pulumi.Input<pulumi.Input<types.inputs.ScopingAnswerArgs>[]>;
    /**
     * Report Name.
     */
    reportName: pulumi.Input<string>;
    /**
     * The scoping configuration of the specific report.
     */
    scopingConfigurationName?: pulumi.Input<string>;
}