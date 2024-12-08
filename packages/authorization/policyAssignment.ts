import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The policy assignment.
 * Azure REST API version: 2022-06-01. Prior API version in Azure Native 1.x: 2020-09-01.
 *
 * Other available API versions: 2019-06-01, 2020-03-01, 2023-04-01, 2024-04-01, 2024-05-01, 2025-01-01.
 */
export class PolicyAssignment extends pulumi.CustomResource {
    /**
     * Get an existing PolicyAssignment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PolicyAssignment {
        return new PolicyAssignment(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:authorization:PolicyAssignment';

    /**
     * Returns true if the given object is an instance of PolicyAssignment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PolicyAssignment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PolicyAssignment.__pulumiType;
    }

    /**
     * This message will be part of response in case of policy violation.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The display name of the policy assignment.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * The policy assignment enforcement mode. Possible values are Default and DoNotEnforce.
     */
    public readonly enforcementMode!: pulumi.Output<string | undefined>;
    /**
     * The managed identity associated with the policy assignment.
     */
    public readonly identity!: pulumi.Output<types.outputs.IdentityResponse | undefined>;
    /**
     * The location of the policy assignment. Only required when utilizing managed identity.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The policy assignment metadata. Metadata is an open ended object and is typically a collection of key value pairs.
     */
    public readonly metadata!: pulumi.Output<any | undefined>;
    /**
     * The name of the policy assignment.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The messages that describe why a resource is non-compliant with the policy.
     */
    public readonly nonComplianceMessages!: pulumi.Output<types.outputs.NonComplianceMessageResponse[] | undefined>;
    /**
     * The policy's excluded scopes.
     */
    public readonly notScopes!: pulumi.Output<string[] | undefined>;
    /**
     * The policy property value override.
     */
    public readonly overrides!: pulumi.Output<types.outputs.OverrideResponse[] | undefined>;
    /**
     * The parameter values for the assigned policy rule. The keys are the parameter names.
     */
    public readonly parameters!: pulumi.Output<{[key: string]: types.outputs.ParameterValuesValueResponse} | undefined>;
    /**
     * The ID of the policy definition or policy set definition being assigned.
     */
    public readonly policyDefinitionId!: pulumi.Output<string | undefined>;
    /**
     * The resource selector list to filter policies by resource properties.
     */
    public readonly resourceSelectors!: pulumi.Output<types.outputs.ResourceSelectorResponse[] | undefined>;
    /**
     * The scope for the policy assignment.
     */
    public readonly scope!: pulumi.Output<string>;
    /**
     * The system metadata relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the policy assignment.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a PolicyAssignment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PolicyAssignmentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.scope === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scope'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["enforcementMode"] = (args ? args.enforcementMode : undefined) ?? "Default";
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["nonComplianceMessages"] = args ? args.nonComplianceMessages : undefined;
            resourceInputs["notScopes"] = args ? args.notScopes : undefined;
            resourceInputs["overrides"] = args ? args.overrides : undefined;
            resourceInputs["parameters"] = args ? args.parameters : undefined;
            resourceInputs["policyAssignmentName"] = args ? args.policyAssignmentName : undefined;
            resourceInputs["policyDefinitionId"] = args ? args.policyDefinitionId : undefined;
            resourceInputs["resourceSelectors"] = args ? args.resourceSelectors : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["enforcementMode"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nonComplianceMessages"] = undefined /*out*/;
            resourceInputs["notScopes"] = undefined /*out*/;
            resourceInputs["overrides"] = undefined /*out*/;
            resourceInputs["parameters"] = undefined /*out*/;
            resourceInputs["policyDefinitionId"] = undefined /*out*/;
            resourceInputs["resourceSelectors"] = undefined /*out*/;
            resourceInputs["scope"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:authorization/v20151001preview:PolicyAssignment" }, { type: "azure-native:authorization/v20160401:PolicyAssignment" }, { type: "azure-native:authorization/v20161201:PolicyAssignment" }, { type: "azure-native:authorization/v20170601preview:PolicyAssignment" }, { type: "azure-native:authorization/v20180301:PolicyAssignment" }, { type: "azure-native:authorization/v20180501:PolicyAssignment" }, { type: "azure-native:authorization/v20190101:PolicyAssignment" }, { type: "azure-native:authorization/v20190601:PolicyAssignment" }, { type: "azure-native:authorization/v20190901:PolicyAssignment" }, { type: "azure-native:authorization/v20200301:PolicyAssignment" }, { type: "azure-native:authorization/v20200901:PolicyAssignment" }, { type: "azure-native:authorization/v20210601:PolicyAssignment" }, { type: "azure-native:authorization/v20220601:PolicyAssignment" }, { type: "azure-native:authorization/v20230401:PolicyAssignment" }, { type: "azure-native:authorization/v20240401:PolicyAssignment" }, { type: "azure-native:authorization/v20240501:PolicyAssignment" }, { type: "azure-native:authorization/v20250101:PolicyAssignment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PolicyAssignment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PolicyAssignment resource.
 */
export interface PolicyAssignmentArgs {
    /**
     * This message will be part of response in case of policy violation.
     */
    description?: pulumi.Input<string>;
    /**
     * The display name of the policy assignment.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The policy assignment enforcement mode. Possible values are Default and DoNotEnforce.
     */
    enforcementMode?: pulumi.Input<string | types.enums.EnforcementMode>;
    /**
     * The managed identity associated with the policy assignment.
     */
    identity?: pulumi.Input<types.inputs.IdentityArgs>;
    /**
     * The location of the policy assignment. Only required when utilizing managed identity.
     */
    location?: pulumi.Input<string>;
    /**
     * The policy assignment metadata. Metadata is an open ended object and is typically a collection of key value pairs.
     */
    metadata?: any;
    /**
     * The messages that describe why a resource is non-compliant with the policy.
     */
    nonComplianceMessages?: pulumi.Input<pulumi.Input<types.inputs.NonComplianceMessageArgs>[]>;
    /**
     * The policy's excluded scopes.
     */
    notScopes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The policy property value override.
     */
    overrides?: pulumi.Input<pulumi.Input<types.inputs.OverrideArgs>[]>;
    /**
     * The parameter values for the assigned policy rule. The keys are the parameter names.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<types.inputs.ParameterValuesValueArgs>}>;
    /**
     * The name of the policy assignment.
     */
    policyAssignmentName?: pulumi.Input<string>;
    /**
     * The ID of the policy definition or policy set definition being assigned.
     */
    policyDefinitionId?: pulumi.Input<string>;
    /**
     * The resource selector list to filter policies by resource properties.
     */
    resourceSelectors?: pulumi.Input<pulumi.Input<types.inputs.ResourceSelectorArgs>[]>;
    /**
     * The scope of the policy assignment. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
     */
    scope: pulumi.Input<string>;
}