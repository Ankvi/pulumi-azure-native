import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a specific security operator for the requested scope.
 * Azure REST API version: 2023-01-01-preview.
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
     * name of the pricing configuration
     */
    pricingName: string;
    /**
     * name of the securityOperator
     */
    securityOperatorName: string;
}

/**
 * Security operator under a given subscription and pricing
 */
export interface GetSecurityOperatorResult {
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Identity for the resource.
     */
    readonly identity?: types.outputs.security.IdentityResponse;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Get a specific security operator for the requested scope.
 * Azure REST API version: 2023-01-01-preview.
 */
export function getSecurityOperatorOutput(args: GetSecurityOperatorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSecurityOperatorResult> {
    return pulumi.output(args).apply((a: any) => getSecurityOperator(a, opts))
}

export interface GetSecurityOperatorOutputArgs {
    /**
     * name of the pricing configuration
     */
    pricingName: pulumi.Input<string>;
    /**
     * name of the securityOperator
     */
    securityOperatorName: pulumi.Input<string>;
}
