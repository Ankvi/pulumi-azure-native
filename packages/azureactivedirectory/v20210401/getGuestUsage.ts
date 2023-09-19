import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a Guest Usages resource for the Microsoft.AzureActiveDirectory resource provider
 */
export function getGuestUsage(args: GetGuestUsageArgs, opts?: pulumi.InvokeOptions): Promise<GetGuestUsageResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azureactivedirectory/v20210401:getGuestUsage", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetGuestUsageArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The initial domain name of the Azure AD B2C tenant.
     */
    resourceName: string;
}

/**
 * Guest Usages Resource
 */
export interface GetGuestUsageResult {
    /**
     * An identifier that represents the Guest Usages resource.
     */
    readonly id: string;
    /**
     * Location of the Guest Usages resource.
     */
    readonly location?: string;
    /**
     * The name of the Guest Usages resource.
     */
    readonly name: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Key-value pairs of additional resource provisioning properties.
     */
    readonly tags?: {[key: string]: string};
    /**
     * An identifier for the tenant for which the resource is being created
     */
    readonly tenantId?: string;
    /**
     * The type of the Guest Usages resource.
     */
    readonly type: string;
}
/**
 * Gets a Guest Usages resource for the Microsoft.AzureActiveDirectory resource provider
 */
export function getGuestUsageOutput(args: GetGuestUsageOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGuestUsageResult> {
    return pulumi.output(args).apply((a: any) => getGuestUsage(a, opts))
}

export interface GetGuestUsageOutputArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The initial domain name of the Azure AD B2C tenant.
     */
    resourceName: pulumi.Input<string>;
}
