import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the specified Subscription keys.
 */
export function listSubscriptionSecrets(args: ListSubscriptionSecretsArgs, opts?: pulumi.InvokeOptions): Promise<ListSubscriptionSecretsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement/v20230301preview:listSubscriptionSecrets", {
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "sid": args.sid,
    }, opts);
}

export interface ListSubscriptionSecretsArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    serviceName: string;
    /**
     * Subscription entity Identifier. The entity represents the association between a user and a product in API Management.
     */
    sid: string;
}

/**
 * Subscription keys.
 */
export interface ListSubscriptionSecretsResult {
    /**
     * Subscription primary key.
     */
    readonly primaryKey?: string;
    /**
     * Subscription secondary key.
     */
    readonly secondaryKey?: string;
}
/**
 * Gets the specified Subscription keys.
 */
export function listSubscriptionSecretsOutput(args: ListSubscriptionSecretsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListSubscriptionSecretsResult> {
    return pulumi.output(args).apply((a: any) => listSubscriptionSecrets(a, opts))
}

export interface ListSubscriptionSecretsOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Subscription entity Identifier. The entity represents the association between a user and a product in API Management.
     */
    sid: pulumi.Input<string>;
}
