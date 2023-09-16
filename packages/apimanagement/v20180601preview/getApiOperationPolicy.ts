import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the policy configuration at the API Operation level.
 */
export function getApiOperationPolicy(args: GetApiOperationPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetApiOperationPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement/v20180601preview:getApiOperationPolicy", {
        "apiId": args.apiId,
        "operationId": args.operationId,
        "policyId": args.policyId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetApiOperationPolicyArgs {
    /**
     * API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     */
    apiId: string;
    /**
     * Operation identifier within an API. Must be unique in the current API Management service instance.
     */
    operationId: string;
    /**
     * The identifier of the Policy.
     */
    policyId: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    serviceName: string;
}

/**
 * Policy Contract details.
 */
export interface GetApiOperationPolicyResult {
    /**
     * Format of the policyContent.
     */
    readonly contentFormat?: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Json escaped Xml Encoded contents of the Policy.
     */
    readonly policyContent: string;
    /**
     * Resource type for API Management resource.
     */
    readonly type: string;
}
/**
 * Get the policy configuration at the API Operation level.
 */
export function getApiOperationPolicyOutput(args: GetApiOperationPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApiOperationPolicyResult> {
    return pulumi.output(args).apply((a: any) => getApiOperationPolicy(a, opts))
}

export interface GetApiOperationPolicyOutputArgs {
    /**
     * API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     */
    apiId: pulumi.Input<string>;
    /**
     * Operation identifier within an API. Must be unique in the current API Management service instance.
     */
    operationId: pulumi.Input<string>;
    /**
     * The identifier of the Policy.
     */
    policyId: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}
