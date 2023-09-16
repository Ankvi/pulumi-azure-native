import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Security assessment on a resource - response format
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
    public static readonly __pulumiType = 'azure-native:security/v20210601:Assessment';

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
     * Additional data regarding the assessment
     */
    public readonly additionalData!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * User friendly display name of the assessment
     */
    public /*out*/ readonly displayName!: pulumi.Output<string>;
    /**
     * Links relevant to the assessment
     */
    public /*out*/ readonly links!: pulumi.Output<types.outputs.security.v20210601.AssessmentLinksResponse>;
    /**
     * Describes properties of an assessment metadata.
     */
    public readonly metadata!: pulumi.Output<types.outputs.security.v20210601.SecurityAssessmentMetadataPropertiesResponse | undefined>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Data regarding 3rd party partner integration
     */
    public readonly partnersData!: pulumi.Output<types.outputs.security.v20210601.SecurityAssessmentPartnerDataResponse | undefined>;
    /**
     * Details of the resource that was assessed
     */
    public readonly resourceDetails!: pulumi.Output<types.outputs.security.v20210601.AzureResourceDetailsResponse | types.outputs.security.v20210601.OnPremiseResourceDetailsResponse | types.outputs.security.v20210601.OnPremiseSqlResourceDetailsResponse>;
    /**
     * The result of the assessment
     */
    public readonly status!: pulumi.Output<types.outputs.security.v20210601.AssessmentStatusResponseResponse>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Assessment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AssessmentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceDetails === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceDetails'");
            }
            if ((!args || args.resourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceId'");
            }
            if ((!args || args.status === undefined) && !opts.urn) {
                throw new Error("Missing required property 'status'");
            }
            resourceInputs["additionalData"] = args ? args.additionalData : undefined;
            resourceInputs["assessmentName"] = args ? args.assessmentName : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["partnersData"] = args ? args.partnersData : undefined;
            resourceInputs["resourceDetails"] = args ? args.resourceDetails : undefined;
            resourceInputs["resourceId"] = args ? args.resourceId : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["links"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["additionalData"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["links"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["partnersData"] = undefined /*out*/;
            resourceInputs["resourceDetails"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:security:Assessment" }, { type: "azure-native:security/v20190101preview:Assessment" }, { type: "azure-native:security/v20200101:Assessment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Assessment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Assessment resource.
 */
export interface AssessmentArgs {
    /**
     * Additional data regarding the assessment
     */
    additionalData?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The Assessment Key - Unique key for the assessment type
     */
    assessmentName?: pulumi.Input<string>;
    /**
     * Describes properties of an assessment metadata.
     */
    metadata?: pulumi.Input<types.inputs.security.v20210601.SecurityAssessmentMetadataPropertiesArgs>;
    /**
     * Data regarding 3rd party partner integration
     */
    partnersData?: pulumi.Input<types.inputs.security.v20210601.SecurityAssessmentPartnerDataArgs>;
    /**
     * Details of the resource that was assessed
     */
    resourceDetails: pulumi.Input<types.inputs.security.v20210601.AzureResourceDetailsArgs | types.inputs.security.v20210601.OnPremiseResourceDetailsArgs | types.inputs.security.v20210601.OnPremiseSqlResourceDetailsArgs>;
    /**
     * The identifier of the resource.
     */
    resourceId: pulumi.Input<string>;
    /**
     * The result of the assessment
     */
    status: pulumi.Input<types.inputs.security.v20210601.AssessmentStatusArgs>;
}
