import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a scaling plan.
 * Azure REST API version: 2022-09-09.
 *
 * Other available API versions: 2020-11-10-preview, 2021-02-01-preview, 2022-02-10-preview, 2022-10-14-preview, 2023-07-07-preview, 2023-09-05, 2023-10-04-preview, 2023-11-01-preview, 2024-01-16-preview, 2024-03-06-preview, 2024-04-03, 2024-04-08-preview, 2024-08-08-preview.
 */
export function getScalingPlan(args: GetScalingPlanArgs, opts?: pulumi.InvokeOptions): Promise<GetScalingPlanResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:desktopvirtualization:getScalingPlan", {
        "resourceGroupName": args.resourceGroupName,
        "scalingPlanName": args.scalingPlanName,
    }, opts);
}

export interface GetScalingPlanArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the scaling plan.
     */
    scalingPlanName: string;
}

/**
 * Represents a scaling plan definition.
 */
export interface GetScalingPlanResult {
    /**
     * Description of scaling plan.
     */
    readonly description?: string;
    /**
     * The etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields. 
     */
    readonly etag: string;
    /**
     * Exclusion tag for scaling plan.
     */
    readonly exclusionTag?: string;
    /**
     * User friendly name of scaling plan.
     */
    readonly friendlyName?: string;
    /**
     * List of ScalingHostPoolReference definitions.
     */
    readonly hostPoolReferences?: types.outputs.ScalingHostPoolReferenceResponse[];
    /**
     * HostPool type for desktop.
     */
    readonly hostPoolType?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    readonly identity?: types.outputs.ResourceModelWithAllowedPropertySetResponseIdentity;
    /**
     * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
     */
    readonly kind?: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location?: string;
    /**
     * The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource. If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource.
     */
    readonly managedBy?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * ObjectId of scaling plan. (internal use)
     */
    readonly objectId: string;
    readonly plan?: types.outputs.ResourceModelWithAllowedPropertySetResponsePlan;
    /**
     * List of ScalingPlanPooledSchedule definitions.
     */
    readonly schedules?: types.outputs.ScalingScheduleResponse[];
    readonly sku?: types.outputs.ResourceModelWithAllowedPropertySetResponseSku;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Timezone of the scaling plan.
     */
    readonly timeZone: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a scaling plan.
 * Azure REST API version: 2022-09-09.
 *
 * Other available API versions: 2020-11-10-preview, 2021-02-01-preview, 2022-02-10-preview, 2022-10-14-preview, 2023-07-07-preview, 2023-09-05, 2023-10-04-preview, 2023-11-01-preview, 2024-01-16-preview, 2024-03-06-preview, 2024-04-03, 2024-04-08-preview, 2024-08-08-preview.
 */
export function getScalingPlanOutput(args: GetScalingPlanOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetScalingPlanResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:desktopvirtualization:getScalingPlan", {
        "resourceGroupName": args.resourceGroupName,
        "scalingPlanName": args.scalingPlanName,
    }, opts);
}

export interface GetScalingPlanOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the scaling plan.
     */
    scalingPlanName: pulumi.Input<string>;
}