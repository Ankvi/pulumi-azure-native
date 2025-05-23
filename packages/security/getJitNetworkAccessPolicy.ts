import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Policies for protecting resources using Just-in-Time access control for the subscription, location
 *
 * Uses Azure REST API version 2020-01-01.
 */
export function getJitNetworkAccessPolicy(args: GetJitNetworkAccessPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetJitNetworkAccessPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security:getJitNetworkAccessPolicy", {
        "ascLocation": args.ascLocation,
        "jitNetworkAccessPolicyName": args.jitNetworkAccessPolicyName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetJitNetworkAccessPolicyArgs {
    /**
     * The location where ASC stores the data of the subscription. can be retrieved from Get locations
     */
    ascLocation: string;
    /**
     * Name of a Just-in-Time access configuration policy.
     */
    jitNetworkAccessPolicyName: string;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: string;
}

export interface GetJitNetworkAccessPolicyResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Kind of the resource
     */
    readonly kind?: string;
    /**
     * Location where the resource is stored
     */
    readonly location: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Gets the provisioning state of the Just-in-Time policy.
     */
    readonly provisioningState: string;
    readonly requests?: types.outputs.JitNetworkAccessRequestResponse[];
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * Configurations for Microsoft.Compute/virtualMachines resource type.
     */
    readonly virtualMachines: types.outputs.JitNetworkAccessPolicyVirtualMachineResponse[];
}
/**
 * Policies for protecting resources using Just-in-Time access control for the subscription, location
 *
 * Uses Azure REST API version 2020-01-01.
 */
export function getJitNetworkAccessPolicyOutput(args: GetJitNetworkAccessPolicyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetJitNetworkAccessPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:security:getJitNetworkAccessPolicy", {
        "ascLocation": args.ascLocation,
        "jitNetworkAccessPolicyName": args.jitNetworkAccessPolicyName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetJitNetworkAccessPolicyOutputArgs {
    /**
     * The location where ASC stores the data of the subscription. can be retrieved from Get locations
     */
    ascLocation: pulumi.Input<string>;
    /**
     * Name of a Just-in-Time access configuration policy.
     */
    jitNetworkAccessPolicyName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}