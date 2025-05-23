import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the properties of a Lab Plan.
 *
 * Uses Azure REST API version 2023-06-07.
 *
 * Other available API versions: 2021-10-01-preview, 2021-11-15-preview, 2022-08-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native labservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getLabPlan(args: GetLabPlanArgs, opts?: pulumi.InvokeOptions): Promise<GetLabPlanResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:labservices:getLabPlan", {
        "labPlanName": args.labPlanName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLabPlanArgs {
    /**
     * The name of the lab plan that uniquely identifies it within containing resource group. Used in resource URIs and in UI.
     */
    labPlanName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Lab Plans act as a permission container for creating labs via labs.azure.com. Additionally, they can provide a set of default configurations that will apply at the time of creating a lab, but these defaults can still be overwritten.
 */
export interface GetLabPlanResult {
    /**
     * The allowed regions for the lab creator to use when creating labs using this lab plan.
     */
    readonly allowedRegions?: string[];
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The default lab shutdown profile. This can be changed on a lab resource and only provides a default profile.
     */
    readonly defaultAutoShutdownProfile?: types.outputs.AutoShutdownProfileResponse;
    /**
     * The default lab connection profile. This can be changed on a lab resource and only provides a default profile.
     */
    readonly defaultConnectionProfile?: types.outputs.ConnectionProfileResponse;
    /**
     * The lab plan network profile. To enforce lab network policies they must be defined here and cannot be changed when there are existing labs associated with this lab plan.
     */
    readonly defaultNetworkProfile?: types.outputs.LabPlanNetworkProfileResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Managed Identity Information
     */
    readonly identity?: types.outputs.IdentityResponse;
    /**
     * Base Url of the lms instance this lab plan can link lab rosters against.
     */
    readonly linkedLmsInstance?: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Current provisioning state of the lab plan.
     */
    readonly provisioningState: string;
    /**
     * Error details of last operation done on lab plan.
     */
    readonly resourceOperationError: types.outputs.ResourceOperationErrorResponse;
    /**
     * Resource ID of the Shared Image Gallery attached to this lab plan. When saving a lab template virtual machine image it will be persisted in this gallery. Shared images from the gallery can be made available to use when creating new labs.
     */
    readonly sharedGalleryId?: string;
    /**
     * Support contact information and instructions for users of the lab plan. This information is displayed to lab owners and virtual machine users for all labs in the lab plan.
     */
    readonly supportInfo?: types.outputs.SupportInfoResponse;
    /**
     * Metadata pertaining to creation and last modification of the lab plan.
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
}
/**
 * Retrieves the properties of a Lab Plan.
 *
 * Uses Azure REST API version 2023-06-07.
 *
 * Other available API versions: 2021-10-01-preview, 2021-11-15-preview, 2022-08-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native labservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getLabPlanOutput(args: GetLabPlanOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetLabPlanResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:labservices:getLabPlan", {
        "labPlanName": args.labPlanName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLabPlanOutputArgs {
    /**
     * The name of the lab plan that uniquely identifies it within containing resource group. Used in resource URIs and in UI.
     */
    labPlanName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}