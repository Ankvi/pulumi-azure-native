import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a private link policy with a given name.
 */
export function getPrivateLinkForAzureAd(args: GetPrivateLinkForAzureAdArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateLinkForAzureAdResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:aadiam/v20200301preview:getPrivateLinkForAzureAd", {
        "policyName": args.policyName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPrivateLinkForAzureAdArgs {
    /**
     * The name of the private link policy in Azure AD.
     */
    policyName: string;
    /**
     * Name of an Azure resource group.
     */
    resourceGroupName: string;
}

/**
 * PrivateLink Policy configuration object.
 */
export interface GetPrivateLinkForAzureAdResult {
    /**
     * Flag indicating whether all tenants are allowed
     */
    readonly allTenants?: boolean;
    /**
     * String Id used to locate any resource on Azure.
     */
    readonly id: string;
    /**
     * Name of this resource.
     */
    readonly name?: string;
    /**
     * Guid of the owner tenant
     */
    readonly ownerTenantId?: string;
    /**
     * Name of the resource group
     */
    readonly resourceGroup?: string;
    /**
     * Name of the private link policy resource
     */
    readonly resourceName?: string;
    /**
     * Subscription Identifier
     */
    readonly subscriptionId?: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The list of tenantIds.
     */
    readonly tenants?: string[];
    /**
     * Type of this resource.
     */
    readonly type: string;
}
/**
 * Gets a private link policy with a given name.
 */
export function getPrivateLinkForAzureAdOutput(args: GetPrivateLinkForAzureAdOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPrivateLinkForAzureAdResult> {
    return pulumi.output(args).apply((a: any) => getPrivateLinkForAzureAd(a, opts))
}

export interface GetPrivateLinkForAzureAdOutputArgs {
    /**
     * The name of the private link policy in Azure AD.
     */
    policyName: pulumi.Input<string>;
    /**
     * Name of an Azure resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
