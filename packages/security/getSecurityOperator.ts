import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a specific security operator for the requested scope.
 *
 * Uses Azure REST API version 2023-01-01-preview.
 */
export function getSecurityOperator(args: GetSecurityOperatorArgs, opts?: pulumi.InvokeOptions): Promise<GetSecurityOperatorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security:getSecurityOperator", {
        "pricingName": args.pricingName,
        "securityOperatorName": args.securityOperatorName,
    }, opts);
}

export interface GetSecurityOperatorArgs {
    /**
     * Name of the pricing configuration.
     */
    pricingName: string;
    /**
     * Name of the security operator.
     */
    securityOperatorName: string;
}

/**
 * Security operator under a given subscription and pricing
 */
export interface GetSecurityOperatorResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Identity for the resource.
     */
    readonly identity?: types.outputs.IdentityResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a specific security operator for the requested scope.
 *
 * Uses Azure REST API version 2023-01-01-preview.
 */
export function getSecurityOperatorOutput(args: GetSecurityOperatorOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSecurityOperatorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:security:getSecurityOperator", {
        "pricingName": args.pricingName,
        "securityOperatorName": args.securityOperatorName,
    }, opts);
}

export interface GetSecurityOperatorOutputArgs {
    /**
     * Name of the pricing configuration.
     */
    pricingName: pulumi.Input<string>;
    /**
     * Name of the security operator.
     */
    securityOperatorName: pulumi.Input<string>;
}