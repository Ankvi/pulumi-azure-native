import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get information about an EnterprisePolicy
 * Azure REST API version: 2020-10-30-preview.
 */
export function getEnterprisePolicy(args: GetEnterprisePolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetEnterprisePolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:powerplatform:getEnterprisePolicy", {
        "enterprisePolicyName": args.enterprisePolicyName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEnterprisePolicyArgs {
    /**
     * The EnterprisePolicy name.
     */
    enterprisePolicyName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Definition of the EnterprisePolicy.
 */
export interface GetEnterprisePolicyResult {
    /**
     * The encryption settings for a configuration store.
     */
    readonly encryption?: types.outputs.PropertiesResponseEncryption;
    /**
     * The health status of the resource.
     */
    readonly healthStatus?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The identity of the EnterprisePolicy.
     */
    readonly identity?: types.outputs.EnterprisePolicyIdentityResponse;
    /**
     * The kind (type) of Enterprise Policy.
     */
    readonly kind: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Settings concerning lockbox.
     */
    readonly lockbox?: types.outputs.PropertiesResponseLockbox;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Settings concerning network injection.
     */
    readonly networkInjection?: types.outputs.PropertiesResponseNetworkInjection;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The internally assigned unique identifier of the resource.
     */
    readonly systemId: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get information about an EnterprisePolicy
 * Azure REST API version: 2020-10-30-preview.
 */
export function getEnterprisePolicyOutput(args: GetEnterprisePolicyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetEnterprisePolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:powerplatform:getEnterprisePolicy", {
        "enterprisePolicyName": args.enterprisePolicyName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEnterprisePolicyOutputArgs {
    /**
     * The EnterprisePolicy name.
     */
    enterprisePolicyName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}