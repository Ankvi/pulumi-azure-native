import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The remediation definition.
 *
 * Uses Azure REST API version 2021-10-01. In version 1.x of the Azure Native provider, it used API version 2019-07-01.
 *
 * Other available API versions: 2024-10-01.
 */
export class RemediationAtSubscription extends pulumi.CustomResource {
    /**
     * Get an existing RemediationAtSubscription resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RemediationAtSubscription {
        return new RemediationAtSubscription(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:policyinsights:RemediationAtSubscription';

    /**
     * Returns true if the given object is an instance of RemediationAtSubscription.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RemediationAtSubscription {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RemediationAtSubscription.__pulumiType;
    }

    /**
     * The remediation correlation Id. Can be used to find events related to the remediation in the activity log.
     */
    public /*out*/ readonly correlationId!: pulumi.Output<string>;
    /**
     * The time at which the remediation was created.
     */
    public /*out*/ readonly createdOn!: pulumi.Output<string>;
    /**
     * The deployment status summary for all deployments created by the remediation.
     */
    public /*out*/ readonly deploymentStatus!: pulumi.Output<types.outputs.RemediationDeploymentSummaryResponse>;
    /**
     * The remediation failure threshold settings
     */
    public readonly failureThreshold!: pulumi.Output<types.outputs.RemediationPropertiesResponseFailureThreshold | undefined>;
    /**
     * The filters that will be applied to determine which resources to remediate.
     */
    public readonly filters!: pulumi.Output<types.outputs.RemediationFiltersResponse | undefined>;
    /**
     * The time at which the remediation was last updated.
     */
    public /*out*/ readonly lastUpdatedOn!: pulumi.Output<string>;
    /**
     * The name of the remediation.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Determines how many resources to remediate at any given time. Can be used to increase or reduce the pace of the remediation. If not provided, the default parallel deployments value is used.
     */
    public readonly parallelDeployments!: pulumi.Output<number | undefined>;
    /**
     * The resource ID of the policy assignment that should be remediated.
     */
    public readonly policyAssignmentId!: pulumi.Output<string | undefined>;
    /**
     * The policy definition reference ID of the individual definition that should be remediated. Required when the policy assignment being remediated assigns a policy set definition.
     */
    public readonly policyDefinitionReferenceId!: pulumi.Output<string | undefined>;
    /**
     * The status of the remediation. This refers to the entire remediation task, not individual deployments. Allowed values are Evaluating, Canceled, Cancelling, Failed, Complete, or Succeeded.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Determines the max number of resources that can be remediated by the remediation job. If not provided, the default resource count is used.
     */
    public readonly resourceCount!: pulumi.Output<number | undefined>;
    /**
     * The way resources to remediate are discovered. Defaults to ExistingNonCompliant if not specified.
     */
    public readonly resourceDiscoveryMode!: pulumi.Output<string | undefined>;
    /**
     * The remediation status message. Provides additional details regarding the state of the remediation.
     */
    public /*out*/ readonly statusMessage!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the remediation.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a RemediationAtSubscription resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: RemediationAtSubscriptionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["failureThreshold"] = args ? args.failureThreshold : undefined;
            resourceInputs["filters"] = args ? args.filters : undefined;
            resourceInputs["parallelDeployments"] = args ? args.parallelDeployments : undefined;
            resourceInputs["policyAssignmentId"] = args ? args.policyAssignmentId : undefined;
            resourceInputs["policyDefinitionReferenceId"] = args ? args.policyDefinitionReferenceId : undefined;
            resourceInputs["remediationName"] = args ? args.remediationName : undefined;
            resourceInputs["resourceCount"] = args ? args.resourceCount : undefined;
            resourceInputs["resourceDiscoveryMode"] = args ? args.resourceDiscoveryMode : undefined;
            resourceInputs["correlationId"] = undefined /*out*/;
            resourceInputs["createdOn"] = undefined /*out*/;
            resourceInputs["deploymentStatus"] = undefined /*out*/;
            resourceInputs["lastUpdatedOn"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["statusMessage"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["correlationId"] = undefined /*out*/;
            resourceInputs["createdOn"] = undefined /*out*/;
            resourceInputs["deploymentStatus"] = undefined /*out*/;
            resourceInputs["failureThreshold"] = undefined /*out*/;
            resourceInputs["filters"] = undefined /*out*/;
            resourceInputs["lastUpdatedOn"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["parallelDeployments"] = undefined /*out*/;
            resourceInputs["policyAssignmentId"] = undefined /*out*/;
            resourceInputs["policyDefinitionReferenceId"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceCount"] = undefined /*out*/;
            resourceInputs["resourceDiscoveryMode"] = undefined /*out*/;
            resourceInputs["statusMessage"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:policyinsights/v20180701preview:RemediationAtSubscription" }, { type: "azure-native:policyinsights/v20190701:RemediationAtSubscription" }, { type: "azure-native:policyinsights/v20211001:RemediationAtSubscription" }, { type: "azure-native:policyinsights/v20241001:RemediationAtSubscription" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(RemediationAtSubscription.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a RemediationAtSubscription resource.
 */
export interface RemediationAtSubscriptionArgs {
    /**
     * The remediation failure threshold settings
     */
    failureThreshold?: pulumi.Input<types.inputs.RemediationPropertiesFailureThresholdArgs>;
    /**
     * The filters that will be applied to determine which resources to remediate.
     */
    filters?: pulumi.Input<types.inputs.RemediationFiltersArgs>;
    /**
     * Determines how many resources to remediate at any given time. Can be used to increase or reduce the pace of the remediation. If not provided, the default parallel deployments value is used.
     */
    parallelDeployments?: pulumi.Input<number>;
    /**
     * The resource ID of the policy assignment that should be remediated.
     */
    policyAssignmentId?: pulumi.Input<string>;
    /**
     * The policy definition reference ID of the individual definition that should be remediated. Required when the policy assignment being remediated assigns a policy set definition.
     */
    policyDefinitionReferenceId?: pulumi.Input<string>;
    /**
     * The name of the remediation.
     */
    remediationName?: pulumi.Input<string>;
    /**
     * Determines the max number of resources that can be remediated by the remediation job. If not provided, the default resource count is used.
     */
    resourceCount?: pulumi.Input<number>;
    /**
     * The way resources to remediate are discovered. Defaults to ExistingNonCompliant if not specified.
     */
    resourceDiscoveryMode?: pulumi.Input<string | types.enums.ResourceDiscoveryMode>;
}