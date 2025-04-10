import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified service Endpoint Policies in a specified resource group.
 *
 * Uses Azure REST API version 2023-02-01.
 *
 * Other available API versions: 2018-07-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-05-01.
 */
export function getServiceEndpointPolicy(args: GetServiceEndpointPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceEndpointPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getServiceEndpointPolicy", {
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
        "serviceEndpointPolicyName": args.serviceEndpointPolicyName,
    }, opts);
}

export interface GetServiceEndpointPolicyArgs {
    /**
     * Expands referenced resources.
     */
    expand?: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the service endpoint policy.
     */
    serviceEndpointPolicyName: string;
}

/**
 * Service End point policy resource.
 */
export interface GetServiceEndpointPolicyResult {
    /**
     * A collection of contextual service endpoint policy.
     */
    readonly contextualServiceEndpointPolicies?: string[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * Kind of service endpoint policy. This is metadata used for the Azure portal experience.
     */
    readonly kind: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the service endpoint policy resource.
     */
    readonly provisioningState: string;
    /**
     * The resource GUID property of the service endpoint policy resource.
     */
    readonly resourceGuid: string;
    /**
     * The alias indicating if the policy belongs to a service
     */
    readonly serviceAlias?: string;
    /**
     * A collection of service endpoint policy definitions of the service endpoint policy.
     */
    readonly serviceEndpointPolicyDefinitions?: types.outputs.ServiceEndpointPolicyDefinitionResponse[];
    /**
     * A collection of references to subnets.
     */
    readonly subnets: types.outputs.SubnetResponse[];
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets the specified service Endpoint Policies in a specified resource group.
 *
 * Uses Azure REST API version 2023-02-01.
 *
 * Other available API versions: 2018-07-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-05-01.
 */
export function getServiceEndpointPolicyOutput(args: GetServiceEndpointPolicyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetServiceEndpointPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getServiceEndpointPolicy", {
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
        "serviceEndpointPolicyName": args.serviceEndpointPolicyName,
    }, opts);
}

export interface GetServiceEndpointPolicyOutputArgs {
    /**
     * Expands referenced resources.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the service endpoint policy.
     */
    serviceEndpointPolicyName: pulumi.Input<string>;
}