import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified Subscription Level SaaS.
 * Azure REST API version: 2018-03-01-beta.
 */
export function getSaasSubscriptionLevel(args: GetSaasSubscriptionLevelArgs, opts?: pulumi.InvokeOptions): Promise<GetSaasSubscriptionLevelResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:saas:getSaasSubscriptionLevel", {
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
 * Azure REST API version: 2018-03-01-beta.
 */
export function getSaasSubscriptionLevelOutput(args: GetSaasSubscriptionLevelOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSaasSubscriptionLevelResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:saas:getSaasSubscriptionLevel", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
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