import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the properties of a Lab Plan.
 * Azure REST API version: 2022-08-01.
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
     * The default lab shutdown profile. This can be changed on a lab resource and only provides a default profile.
     */
    readonly defaultAutoShutdownProfile?: types.outputs.labservices.AutoShutdownProfileResponse;
    /**
     * The default lab connection profile. This can be changed on a lab resource and only provides a default profile.
     */
    readonly defaultConnectionProfile?: types.outputs.labservices.ConnectionProfileResponse;
    /**
     * The lab plan network profile. To enforce lab network policies they must be defined here and cannot be changed when there are existing labs associated with this lab plan.
     */
    readonly defaultNetworkProfile?: types.outputs.labservices.LabPlanNetworkProfileResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Managed Identity Information
     */
    readonly identity?: types.outputs.labservices.IdentityResponse;
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
     * Resource ID of the Shared Image Gallery attached to this lab plan. When saving a lab template virtual machine image it will be persisted in this gallery. Shared images from the gallery can be made available to use when creating new labs.
     */
    readonly sharedGalleryId?: string;
    /**
     * Support contact information and instructions for users of the lab plan. This information is displayed to lab owners and virtual machine users for all labs in the lab plan.
     */
    readonly supportInfo?: types.outputs.labservices.SupportInfoResponse;
    /**
     * Metadata pertaining to creation and last modification of the lab plan.
     */
    readonly systemData: types.outputs.labservices.SystemDataResponse;
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
 * Azure REST API version: 2022-08-01.
 */
export function getLabPlanOutput(args: GetLabPlanOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLabPlanResult> {
    return pulumi.output(args).apply((a: any) => getLabPlan(a, opts))
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
