import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An attestation resource.
 *
 * Uses Azure REST API version 2024-10-01. In version 2.x of the Azure Native provider, it used API version 2022-09-01.
 *
 * Other available API versions: 2022-09-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native policyinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class AttestationAtResource extends pulumi.CustomResource {
    /**
     * Get an existing AttestationAtResource resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AttestationAtResource {
        return new AttestationAtResource(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:policyinsights:AttestationAtResource';

    /**
     * Returns true if the given object is an instance of AttestationAtResource.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AttestationAtResource {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AttestationAtResource.__pulumiType;
    }

    /**
     * The time the evidence was assessed
     */
    public readonly assessmentDate!: pulumi.Output<string | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Comments describing why this attestation was created.
     */
    public readonly comments!: pulumi.Output<string | undefined>;
    /**
     * The compliance state that should be set on the resource.
     */
    public readonly complianceState!: pulumi.Output<string | undefined>;
    /**
     * The evidence supporting the compliance state set in this attestation.
     */
    public readonly evidence!: pulumi.Output<types.outputs.AttestationEvidenceResponse[] | undefined>;
    /**
     * The time the compliance state should expire.
     */
    public readonly expiresOn!: pulumi.Output<string | undefined>;
    /**
     * The time the compliance state was last changed in this attestation.
     */
    public /*out*/ readonly lastComplianceStateChangeAt!: pulumi.Output<string>;
    /**
     * Additional metadata for this attestation
     */
    public readonly metadata!: pulumi.Output<any | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The person responsible for setting the state of the resource. This value is typically an Azure Active Directory object ID.
     */
    public readonly owner!: pulumi.Output<string | undefined>;
    /**
     * The resource ID of the policy assignment that the attestation is setting the state for.
     */
    public readonly policyAssignmentId!: pulumi.Output<string>;
    /**
     * The policy definition reference ID from a policy set definition that the attestation is setting the state for. If the policy assignment assigns a policy set definition the attestation can choose a definition within the set definition with this property or omit this and set the state for the entire set definition.
     */
    public readonly policyDefinitionReferenceId!: pulumi.Output<string | undefined>;
    /**
     * The status of the attestation.
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
     * Create a AttestationAtResource resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AttestationAtResourceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.policyAssignmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policyAssignmentId'");
            }
            if ((!args || args.resourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceId'");
            }
            resourceInputs["assessmentDate"] = args ? args.assessmentDate : undefined;
            resourceInputs["attestationName"] = args ? args.attestationName : undefined;
            resourceInputs["comments"] = args ? args.comments : undefined;
            resourceInputs["complianceState"] = args ? args.complianceState : undefined;
            resourceInputs["evidence"] = args ? args.evidence : undefined;
            resourceInputs["expiresOn"] = args ? args.expiresOn : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["owner"] = args ? args.owner : undefined;
            resourceInputs["policyAssignmentId"] = args ? args.policyAssignmentId : undefined;
            resourceInputs["policyDefinitionReferenceId"] = args ? args.policyDefinitionReferenceId : undefined;
            resourceInputs["resourceId"] = args ? args.resourceId : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["lastComplianceStateChangeAt"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["assessmentDate"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["comments"] = undefined /*out*/;
            resourceInputs["complianceState"] = undefined /*out*/;
            resourceInputs["evidence"] = undefined /*out*/;
            resourceInputs["expiresOn"] = undefined /*out*/;
            resourceInputs["lastComplianceStateChangeAt"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["owner"] = undefined /*out*/;
            resourceInputs["policyAssignmentId"] = undefined /*out*/;
            resourceInputs["policyDefinitionReferenceId"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:policyinsights/v20210101:AttestationAtResource" }, { type: "azure-native:policyinsights/v20220901:AttestationAtResource" }, { type: "azure-native:policyinsights/v20241001:AttestationAtResource" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AttestationAtResource.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AttestationAtResource resource.
 */
export interface AttestationAtResourceArgs {
    /**
     * The time the evidence was assessed
     */
    assessmentDate?: pulumi.Input<string>;
    /**
     * The name of the attestation.
     */
    attestationName?: pulumi.Input<string>;
    /**
     * Comments describing why this attestation was created.
     */
    comments?: pulumi.Input<string>;
    /**
     * The compliance state that should be set on the resource.
     */
    complianceState?: pulumi.Input<string | types.enums.ComplianceState>;
    /**
     * The evidence supporting the compliance state set in this attestation.
     */
    evidence?: pulumi.Input<pulumi.Input<types.inputs.AttestationEvidenceArgs>[]>;
    /**
     * The time the compliance state should expire.
     */
    expiresOn?: pulumi.Input<string>;
    /**
     * Additional metadata for this attestation
     */
    metadata?: any;
    /**
     * The person responsible for setting the state of the resource. This value is typically an Azure Active Directory object ID.
     */
    owner?: pulumi.Input<string>;
    /**
     * The resource ID of the policy assignment that the attestation is setting the state for.
     */
    policyAssignmentId: pulumi.Input<string>;
    /**
     * The policy definition reference ID from a policy set definition that the attestation is setting the state for. If the policy assignment assigns a policy set definition the attestation can choose a definition within the set definition with this property or omit this and set the state for the entire set definition.
     */
    policyDefinitionReferenceId?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    resourceId: pulumi.Input<string>;
}