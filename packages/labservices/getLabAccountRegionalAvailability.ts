import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get regional availability information for each size category configured under a lab account
 * Azure REST API version: 2018-10-15.
 */
export function getLabAccountRegionalAvailability(args: GetLabAccountRegionalAvailabilityArgs, opts?: pulumi.InvokeOptions): Promise<GetLabAccountRegionalAvailabilityResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:labservices:getLabAccountRegionalAvailability", {
        "labAccountName": args.labAccountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLabAccountRegionalAvailabilityArgs {
    /**
     * The name of the lab Account.
     */
    labAccountName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * The response model from the GetRegionalAvailability action
 */
export interface GetLabAccountRegionalAvailabilityResult {
    /**
     * Availability information for different size categories per region
     */
    readonly regionalAvailability?: types.outputs.RegionalAvailabilityResponse[];
}
/**
 * Get regional availability information for each size category configured under a lab account
 * Azure REST API version: 2018-10-15.
 */
export function getLabAccountRegionalAvailabilityOutput(args: GetLabAccountRegionalAvailabilityOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLabAccountRegionalAvailabilityResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:labservices:getLabAccountRegionalAvailability", {
        "labAccountName": args.labAccountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLabAccountRegionalAvailabilityOutputArgs {
    /**
     * The name of the lab Account.
     */
    labAccountName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}