import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Security Assignment on a resource group over a given scope
 *
 * Uses Azure REST API version 2024-08-01. In version 2.x of the Azure Native provider, it used API version 2024-08-01.
 */
export class StandardAssignment extends pulumi.CustomResource {
    /**
     * Get an existing StandardAssignment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): StandardAssignment {
        return new StandardAssignment(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:security:StandardAssignment';

    /**
     * Returns true if the given object is an instance of StandardAssignment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StandardAssignment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StandardAssignment.__pulumiType;
    }

    /**
     * Standard item with key as applied to this standard assignment over the given scope
     */
    public readonly assignedStandard!: pulumi.Output<types.outputs.AssignedStandardItemResponse | undefined>;
    /**
     * Additional data about assignment that has Attest effect
     */
    public readonly attestationData!: pulumi.Output<types.outputs.StandardAssignmentPropertiesResponseAttestationData | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Description of the standardAssignment
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Display name of the standardAssignment
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * Expected effect of this assignment (Audit/Exempt/Attest)
     */
    public readonly effect!: pulumi.Output<string | undefined>;
    /**
     * Excluded scopes, filter out the descendants of the scope (on management scopes)
     */
    public readonly excludedScopes!: pulumi.Output<string[] | undefined>;
    /**
     * Additional data about assignment that has Exempt effect
     */
    public readonly exemptionData!: pulumi.Output<types.outputs.StandardAssignmentPropertiesResponseExemptionData | undefined>;
    /**
     * Expiration date of this assignment as a full ISO date
     */
    public readonly expiresOn!: pulumi.Output<string | undefined>;
    /**
     * The standard assignment metadata.
     */
    public /*out*/ readonly metadata!: pulumi.Output<types.outputs.StandardAssignmentMetadataResponse | undefined>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a StandardAssignment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StandardAssignmentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceId'");
            }
            resourceInputs["assignedStandard"] = args ? args.assignedStandard : undefined;
            resourceInputs["attestationData"] = args ? args.attestationData : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["effect"] = args ? args.effect : undefined;
            resourceInputs["excludedScopes"] = args ? args.excludedScopes : undefined;
            resourceInputs["exemptionData"] = args ? args.exemptionData : undefined;
            resourceInputs["expiresOn"] = args ? args.expiresOn : undefined;
            resourceInputs["resourceId"] = args ? args.resourceId : undefined;
            resourceInputs["standardAssignmentName"] = args ? args.standardAssignmentName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["assignedStandard"] = undefined /*out*/;
            resourceInputs["attestationData"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["effect"] = undefined /*out*/;
            resourceInputs["excludedScopes"] = undefined /*out*/;
            resourceInputs["exemptionData"] = undefined /*out*/;
            resourceInputs["expiresOn"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:security/v20240801:StandardAssignment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(StandardAssignment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a StandardAssignment resource.
 */
export interface StandardAssignmentArgs {
    /**
     * Standard item with key as applied to this standard assignment over the given scope
     */
    assignedStandard?: pulumi.Input<types.inputs.AssignedStandardItemArgs>;
    /**
     * Additional data about assignment that has Attest effect
     */
    attestationData?: pulumi.Input<types.inputs.StandardAssignmentPropertiesAttestationDataArgs>;
    /**
     * Description of the standardAssignment
     */
    description?: pulumi.Input<string>;
    /**
     * Display name of the standardAssignment
     */
    displayName?: pulumi.Input<string>;
    /**
     * Expected effect of this assignment (Audit/Exempt/Attest)
     */
    effect?: pulumi.Input<string | types.enums.Effect>;
    /**
     * Excluded scopes, filter out the descendants of the scope (on management scopes)
     */
    excludedScopes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Additional data about assignment that has Exempt effect
     */
    exemptionData?: pulumi.Input<types.inputs.StandardAssignmentPropertiesExemptionDataArgs>;
    /**
     * Expiration date of this assignment as a full ISO date
     */
    expiresOn?: pulumi.Input<string>;
    /**
     * The identifier of the resource.
     */
    resourceId: pulumi.Input<string>;
    /**
     * The standard assignments assignment key - unique key for the standard assignment
     */
    standardAssignmentName?: pulumi.Input<string>;
}