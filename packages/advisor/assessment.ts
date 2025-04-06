import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Advisor assessment result data structure.
 *
 * Uses Azure REST API version 2023-09-01-preview. In version 2.x of the Azure Native provider, it used API version 2023-09-01-preview.
 */
export class Assessment extends pulumi.CustomResource {
    /**
     * Get an existing Assessment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Assessment {
        return new Assessment(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:advisor:Assessment';

    /**
     * Returns true if the given object is an instance of Assessment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Assessment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Assessment.__pulumiType;
    }

    /**
     * Assessment Id.
     */
    public /*out*/ readonly assessmentId!: pulumi.Output<string>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Assessment Type Description.
     */
    public /*out*/ readonly description!: pulumi.Output<string>;
    /**
     * Assessment Type Locale.
     */
    public readonly locale!: pulumi.Output<string | undefined>;
    /**
     * Assessment Name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Assessment Score.
     */
    public /*out*/ readonly score!: pulumi.Output<number>;
    /**
     * Assessment State.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource Type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Assessment Type Id.
     */
    public readonly typeId!: pulumi.Output<string | undefined>;
    /**
     * Assessment Type Version.
     */
    public /*out*/ readonly typeVersion!: pulumi.Output<string>;
    /**
     * Workload Id.
     */
    public readonly workloadId!: pulumi.Output<string | undefined>;
    /**
     * Workload Name.
     */
    public /*out*/ readonly workloadName!: pulumi.Output<string>;

    /**
     * Create a Assessment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: AssessmentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["assessmentName"] = args ? args.assessmentName : undefined;
            resourceInputs["locale"] = args ? args.locale : undefined;
            resourceInputs["typeId"] = args ? args.typeId : undefined;
            resourceInputs["workloadId"] = args ? args.workloadId : undefined;
            resourceInputs["assessmentId"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["score"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["typeVersion"] = undefined /*out*/;
            resourceInputs["workloadName"] = undefined /*out*/;
        } else {
            resourceInputs["assessmentId"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["locale"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["score"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["typeId"] = undefined /*out*/;
            resourceInputs["typeVersion"] = undefined /*out*/;
            resourceInputs["workloadId"] = undefined /*out*/;
            resourceInputs["workloadName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:advisor/v20230901preview:Assessment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Assessment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Assessment resource.
 */
export interface AssessmentArgs {
    /**
     * Advisor assessment name.
     */
    assessmentName?: pulumi.Input<string>;
    /**
     * Assessment Type Locale.
     */
    locale?: pulumi.Input<string>;
    /**
     * Assessment Type Id.
     */
    typeId?: pulumi.Input<string>;
    /**
     * Workload Id.
     */
    workloadId?: pulumi.Input<string>;
}