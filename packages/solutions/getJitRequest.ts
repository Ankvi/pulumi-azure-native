import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the JIT request.
 * Azure REST API version: 2021-07-01.
 */
export function getJitRequest(args: GetJitRequestArgs, opts?: pulumi.InvokeOptions): Promise<GetJitRequestResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:solutions:getJitRequest", {
        "jitRequestName": args.jitRequestName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetJitRequestArgs {
    /**
     * The name of the JIT request.
     */
    jitRequestName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Information about JIT request definition.
 */
export interface GetJitRequestResult {
    /**
     * The parent application id.
     */
    readonly applicationResourceId: string;
    /**
     * The client entity that created the JIT request.
     */
    readonly createdBy: types.outputs.ApplicationClientDetailsResponse;
    /**
     * Resource ID
     */
    readonly id: string;
    /**
     * The JIT authorization policies.
     */
    readonly jitAuthorizationPolicies: types.outputs.JitAuthorizationPoliciesResponse[];
    /**
     * The JIT request state.
     */
    readonly jitRequestState: string;
    /**
     * The JIT request properties.
     */
    readonly jitSchedulingPolicy: types.outputs.JitSchedulingPolicyResponse;
    /**
     * Resource location
     */
    readonly location?: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * The JIT request provisioning state.
     */
    readonly provisioningState: string;
    /**
     * The publisher tenant id.
     */
    readonly publisherTenantId: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * The client entity that last updated the JIT request.
     */
    readonly updatedBy: types.outputs.ApplicationClientDetailsResponse;
}
/**
 * Gets the JIT request.
 * Azure REST API version: 2021-07-01.
 */
export function getJitRequestOutput(args: GetJitRequestOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetJitRequestResult> {
    return pulumi.output(args).apply((a: any) => getJitRequest(a, opts))
}

export interface GetJitRequestOutputArgs {
    /**
     * The name of the JIT request.
     */
    jitRequestName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
