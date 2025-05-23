import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get policy.
 *
 * Uses Azure REST API version 2018-09-15.
 */
export function getPolicy(args: GetPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devtestlab:getPolicy", {
        "expand": args.expand,
        "labName": args.labName,
        "name": args.name,
        "policySetName": args.policySetName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPolicyArgs {
    /**
     * Specify the $expand query. Example: 'properties($select=description)'
     */
    expand?: string;
    /**
     * The name of the lab.
     */
    labName: string;
    /**
     * The name of the policy.
     */
    name: string;
    /**
     * The name of the policy set.
     */
    policySetName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * A Policy.
 */
export interface GetPolicyResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The creation date of the policy.
     */
    readonly createdDate: string;
    /**
     * The description of the policy.
     */
    readonly description?: string;
    /**
     * The evaluator type of the policy (i.e. AllowedValuesPolicy, MaxValuePolicy).
     */
    readonly evaluatorType?: string;
    /**
     * The fact data of the policy.
     */
    readonly factData?: string;
    /**
     * The fact name of the policy (e.g. LabVmCount, LabVmSize, MaxVmsAllowedPerLab, etc.
     */
    readonly factName?: string;
    /**
     * The identifier of the resource.
     */
    readonly id: string;
    /**
     * The location of the resource.
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState: string;
    /**
     * The status of the policy.
     */
    readonly status?: string;
    /**
     * The tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The threshold of the policy (i.e. a number for MaxValuePolicy, and a JSON array of values for AllowedValuesPolicy).
     */
    readonly threshold?: string;
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    readonly uniqueIdentifier: string;
}
/**
 * Get policy.
 *
 * Uses Azure REST API version 2018-09-15.
 */
export function getPolicyOutput(args: GetPolicyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:devtestlab:getPolicy", {
        "expand": args.expand,
        "labName": args.labName,
        "name": args.name,
        "policySetName": args.policySetName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPolicyOutputArgs {
    /**
     * Specify the $expand query. Example: 'properties($select=description)'
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the lab.
     */
    labName: pulumi.Input<string>;
    /**
     * The name of the policy.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the policy set.
     */
    policySetName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}