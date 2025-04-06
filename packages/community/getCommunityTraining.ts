import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a CommunityTraining
 *
 * Uses Azure REST API version 2023-11-01.
 */
export function getCommunityTraining(args: GetCommunityTrainingArgs, opts?: pulumi.InvokeOptions): Promise<GetCommunityTrainingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:community:getCommunityTraining", {
        "communityTrainingName": args.communityTrainingName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCommunityTrainingArgs {
    /**
     * The name of the Community Training Resource
     */
    communityTrainingName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A CommunityProviderHub resource
 */
export interface GetCommunityTrainingResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * To indicate whether the Community Training instance has Disaster Recovery enabled
     */
    readonly disasterRecoveryEnabled: boolean;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The identity configuration of the Community Training resource
     */
    readonly identityConfiguration: types.outputs.IdentityConfigurationPropertiesResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The email address of the portal admin
     */
    readonly portalAdminEmailAddress: string;
    /**
     * The portal name (website name) of the Community Training instance
     */
    readonly portalName: string;
    /**
     * The email address of the portal owner. Will be used as the primary contact
     */
    readonly portalOwnerEmailAddress: string;
    /**
     * The organization name of the portal owner
     */
    readonly portalOwnerOrganizationName: string;
    /**
     * The status of the last operation.
     */
    readonly provisioningState: string;
    /**
     * The SKU (Stock Keeping Unit) assigned to this resource.
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * To indicate whether the Community Training instance has Zone Redundancy enabled
     */
    readonly zoneRedundancyEnabled: boolean;
}
/**
 * Get a CommunityTraining
 *
 * Uses Azure REST API version 2023-11-01.
 */
export function getCommunityTrainingOutput(args: GetCommunityTrainingOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCommunityTrainingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:community:getCommunityTraining", {
        "communityTrainingName": args.communityTrainingName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCommunityTrainingOutputArgs {
    /**
     * The name of the Community Training Resource
     */
    communityTrainingName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}