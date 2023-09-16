import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets the specified service Endpoint Policies in a specified resource group.
 */
export function getServiceEndpointPolicy(args: GetServiceEndpointPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceEndpointPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20180701:getServiceEndpointPolicy", {
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
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the service endpoint policy. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState?: string;
    /**
     * The resource GUID property of the service endpoint policy resource.
     */
    readonly resourceGuid?: string;
    /**
     * A collection of service endpoint policy definitions of the service endpoint policy.
     */
    readonly serviceEndpointPolicyDefinitions?: types.outputs.network.v20180701.ServiceEndpointPolicyDefinitionResponse[];
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
 */
export function getServiceEndpointPolicyOutput(args: GetServiceEndpointPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServiceEndpointPolicyResult> {
    return pulumi.output(args).apply((a: any) => getServiceEndpointPolicy(a, opts))
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
