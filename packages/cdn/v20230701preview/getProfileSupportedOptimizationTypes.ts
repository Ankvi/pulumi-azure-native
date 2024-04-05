import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the supported optimization types for the current profile. A user can create an endpoint with an optimization type from the listed values.
 */
export function getProfileSupportedOptimizationTypes(args: GetProfileSupportedOptimizationTypesArgs, opts?: pulumi.InvokeOptions): Promise<GetProfileSupportedOptimizationTypesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cdn/v20230701preview:getProfileSupportedOptimizationTypes", {
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetProfileSupportedOptimizationTypesArgs {
    /**
     * Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
     */
    profileName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: string;
}

/**
 * The result of the GetSupportedOptimizationTypes API
 */
export interface GetProfileSupportedOptimizationTypesResult {
    /**
     * Supported optimization types for a profile.
     */
    readonly supportedOptimizationTypes: string[];
}
/**
 * Gets the supported optimization types for the current profile. A user can create an endpoint with an optimization type from the listed values.
 */
export function getProfileSupportedOptimizationTypesOutput(args: GetProfileSupportedOptimizationTypesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProfileSupportedOptimizationTypesResult> {
    return pulumi.output(args).apply((a: any) => getProfileSupportedOptimizationTypes(a, opts))
}

export interface GetProfileSupportedOptimizationTypesOutputArgs {
    /**
     * Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
     */
    profileName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}