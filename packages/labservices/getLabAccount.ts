import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get lab account
 *
 * Uses Azure REST API version 2018-10-15.
 */
export function getLabAccount(args: GetLabAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetLabAccountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:labservices:getLabAccount", {
        "expand": args.expand,
        "labAccountName": args.labAccountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLabAccountArgs {
    /**
     * Specify the $expand query. Example: 'properties($expand=sizeConfiguration)'
     */
    expand?: string;
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
 * Represents a lab account.
 */
export interface GetLabAccountResult {
    /**
     * Represents if region selection is enabled
     */
    readonly enabledRegionSelection?: boolean;
    /**
     * The identifier of the resource.
     */
    readonly id: string;
    /**
     * The details of the latest operation. ex: status, error
     */
    readonly latestOperationResult: types.outputs.LatestOperationResultResponse;
    /**
     * The location of the resource.
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState?: string;
    /**
     * Represents the size configuration under the lab account
     */
    readonly sizeConfiguration: types.outputs.SizeConfigurationPropertiesResponse;
    /**
     * The tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    readonly uniqueIdentifier?: string;
}
/**
 * Get lab account
 *
 * Uses Azure REST API version 2018-10-15.
 */
export function getLabAccountOutput(args: GetLabAccountOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetLabAccountResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:labservices:getLabAccount", {
        "expand": args.expand,
        "labAccountName": args.labAccountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLabAccountOutputArgs {
    /**
     * Specify the $expand query. Example: 'properties($expand=sizeConfiguration)'
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the lab Account.
     */
    labAccountName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}