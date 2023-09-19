import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified Subscription Level SaaS.
 */
export function getSaasSubscriptionLevel(args: GetSaasSubscriptionLevelArgs, opts?: pulumi.InvokeOptions): Promise<GetSaasSubscriptionLevelResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:saas/v20180301beta:getSaasSubscriptionLevel", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetSaasSubscriptionLevelArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the resource.
     */
    resourceName: string;
}

/**
 * SaaS REST API resource definition.
 */
export interface GetSaasSubscriptionLevelResult {
    /**
     * The resource uri
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * saas properties
     */
    readonly properties: types.outputs.SaasResourceResponseProperties;
    /**
     * the resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets information about the specified Subscription Level SaaS.
 */
export function getSaasSubscriptionLevelOutput(args: GetSaasSubscriptionLevelOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSaasSubscriptionLevelResult> {
    return pulumi.output(args).apply((a: any) => getSaasSubscriptionLevel(a, opts))
}

export interface GetSaasSubscriptionLevelOutputArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the resource.
     */
    resourceName: pulumi.Input<string>;
}
