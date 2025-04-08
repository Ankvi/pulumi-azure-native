import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The policy exemption.
 *
 * Uses Azure REST API version 2022-07-01-preview. In version 2.x of the Azure Native provider, it used API version 2022-07-01-preview.
 *
 * Other available API versions: 2020-07-01-preview, 2024-12-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native authorization [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class PolicyExemption extends pulumi.CustomResource {
    /**
     * Get an existing PolicyExemption resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PolicyExemption {
        return new PolicyExemption(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:authorization:PolicyExemption';

    /**
     * Returns true if the given object is an instance of PolicyExemption.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PolicyExemption {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PolicyExemption.__pulumiType;
    }

    /**
     * The option whether validate the exemption is at or under the assignment scope.
     */
    public readonly assignmentScopeValidation!: pulumi.Output<string | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The description of the policy exemption.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The display name of the policy exemption.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * The policy exemption category. Possible values are Waiver and Mitigated.
     */
    public readonly exemptionCategory!: pulumi.Output<string>;
    /**
     * The expiration date and time (in UTC ISO 8601 format yyyy-MM-ddTHH:mm:ssZ) of the policy exemption.
     */
    public readonly expiresOn!: pulumi.Output<string | undefined>;
    /**
     * The policy exemption metadata. Metadata is an open ended object and is typically a collection of key value pairs.
     */
    public readonly metadata!: pulumi.Output<any | undefined>;
    /**
     * The name of the policy exemption.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The ID of the policy assignment that is being exempted.
     */
    public readonly policyAssignmentId!: pulumi.Output<string>;
    /**
     * The policy definition reference ID list when the associated policy assignment is an assignment of a policy set definition.
     */
    public readonly policyDefinitionReferenceIds!: pulumi.Output<string[] | undefined>;
    /**
     * The resource selector list to filter policies by resource properties.
     */
    public readonly resourceSelectors!: pulumi.Output<types.outputs.ResourceSelectorResponse[] | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource (Microsoft.Authorization/policyExemptions).
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a PolicyExemption resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PolicyExemptionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.exemptionCategory === undefined) && !opts.urn) {
                throw new Error("Missing required property 'exemptionCategory'");
            }
            if ((!args || args.policyAssignmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policyAssignmentId'");
            }
            if ((!args || args.scope === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scope'");
            }
            resourceInputs["assignmentScopeValidation"] = (args ? args.assignmentScopeValidation : undefined) ?? "Default";
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["exemptionCategory"] = args ? args.exemptionCategory : undefined;
            resourceInputs["expiresOn"] = args ? args.expiresOn : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["policyAssignmentId"] = args ? args.policyAssignmentId : undefined;
            resourceInputs["policyDefinitionReferenceIds"] = args ? args.policyDefinitionReferenceIds : undefined;
            resourceInputs["policyExemptionName"] = args ? args.policyExemptionName : undefined;
            resourceInputs["resourceSelectors"] = args ? args.resourceSelectors : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["assignmentScopeValidation"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["exemptionCategory"] = undefined /*out*/;
            resourceInputs["expiresOn"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["policyAssignmentId"] = undefined /*out*/;
            resourceInputs["policyDefinitionReferenceIds"] = undefined /*out*/;
            resourceInputs["resourceSelectors"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:authorization/v20200701preview:PolicyExemption" }, { type: "azure-native:authorization/v20220701preview:PolicyExemption" }, { type: "azure-native:authorization/v20241201preview:PolicyExemption" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PolicyExemption.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PolicyExemption resource.
 */
export interface PolicyExemptionArgs {
    /**
     * The option whether validate the exemption is at or under the assignment scope.
     */
    assignmentScopeValidation?: pulumi.Input<string | types.enums.AssignmentScopeValidation>;
    /**
     * The description of the policy exemption.
     */
    description?: pulumi.Input<string>;
    /**
     * The display name of the policy exemption.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The policy exemption category. Possible values are Waiver and Mitigated.
     */
    exemptionCategory: pulumi.Input<string | types.enums.ExemptionCategory>;
    /**
     * The expiration date and time (in UTC ISO 8601 format yyyy-MM-ddTHH:mm:ssZ) of the policy exemption.
     */
    expiresOn?: pulumi.Input<string>;
    /**
     * The policy exemption metadata. Metadata is an open ended object and is typically a collection of key value pairs.
     */
    metadata?: any;
    /**
     * The ID of the policy assignment that is being exempted.
     */
    policyAssignmentId: pulumi.Input<string>;
    /**
     * The policy definition reference ID list when the associated policy assignment is an assignment of a policy set definition.
     */
    policyDefinitionReferenceIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the policy exemption to delete.
     */
    policyExemptionName?: pulumi.Input<string>;
    /**
     * The resource selector list to filter policies by resource properties.
     */
    resourceSelectors?: pulumi.Input<pulumi.Input<types.inputs.ResourceSelectorArgs>[]>;
    /**
     * The scope of the policy exemption. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
     */
    scope: pulumi.Input<string>;
}