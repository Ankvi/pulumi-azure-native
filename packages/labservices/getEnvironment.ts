import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get environment
 *
 * Uses Azure REST API version 2018-10-15.
 */
export function getEnvironment(args: GetEnvironmentArgs, opts?: pulumi.InvokeOptions): Promise<GetEnvironmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:labservices:getEnvironment", {
        "environmentName": args.environmentName,
        "environmentSettingName": args.environmentSettingName,
        "expand": args.expand,
        "labAccountName": args.labAccountName,
        "labName": args.labName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEnvironmentArgs {
    /**
     * The name of the environment.
     */
    environmentName: string;
    /**
     * The name of the environment Setting.
     */
    environmentSettingName: string;
    /**
     * Specify the $expand query. Example: 'properties($expand=networkInterface)'
     */
    expand?: string;
    /**
     * The name of the lab Account.
     */
    labAccountName: string;
    /**
     * The name of the lab.
     */
    labName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Represents an environment instance
 */
export interface GetEnvironmentResult {
    /**
     * The name or email address of the user who has claimed the environment
     */
    readonly claimedByUserName: string;
    /**
     * The AAD object Id of the user who has claimed the environment
     */
    readonly claimedByUserObjectId: string;
    /**
     * The user principal Id of the user who has claimed the environment
     */
    readonly claimedByUserPrincipalId: string;
    /**
     * The identifier of the resource.
     */
    readonly id: string;
    /**
     * Is the environment claimed or not
     */
    readonly isClaimed: boolean;
    /**
     * Last known power state of the environment
     */
    readonly lastKnownPowerState: string;
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
     * Network details of the environment
     */
    readonly networkInterface: types.outputs.NetworkInterfaceResponse;
    /**
     * When the password was last reset on the environment.
     */
    readonly passwordLastReset: string;
    /**
     * The provisioning status of the resource.
     */
    readonly provisioningState?: string;
    /**
     * The set of a VM and the setting id it was created for
     */
    readonly resourceSets?: types.outputs.ResourceSetResponse;
    /**
     * The tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * How long the environment has been used by a lab user
     */
    readonly totalUsage: string;
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
 * Get environment
 *
 * Uses Azure REST API version 2018-10-15.
 */
export function getEnvironmentOutput(args: GetEnvironmentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetEnvironmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:labservices:getEnvironment", {
        "environmentName": args.environmentName,
        "environmentSettingName": args.environmentSettingName,
        "expand": args.expand,
        "labAccountName": args.labAccountName,
        "labName": args.labName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEnvironmentOutputArgs {
    /**
     * The name of the environment.
     */
    environmentName: pulumi.Input<string>;
    /**
     * The name of the environment Setting.
     */
    environmentSettingName: pulumi.Input<string>;
    /**
     * Specify the $expand query. Example: 'properties($expand=networkInterface)'
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the lab Account.
     */
    labAccountName: pulumi.Input<string>;
    /**
     * The name of the lab.
     */
    labName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}