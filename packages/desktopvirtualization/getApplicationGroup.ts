import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get an application group.
 * Azure REST API version: 2022-09-09.
 */
export function getApplicationGroup(args: GetApplicationGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:desktopvirtualization:getApplicationGroup", {
        "applicationGroupName": args.applicationGroupName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetApplicationGroupArgs {
    /**
     * The name of the application group
     */
    applicationGroupName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Represents a ApplicationGroup definition.
 */
export interface GetApplicationGroupResult {
    /**
     * Resource Type of ApplicationGroup.
     */
    readonly applicationGroupType: string;
    /**
     * Is cloud pc resource.
     */
    readonly cloudPcResource: boolean;
    /**
     * Description of ApplicationGroup.
     */
    readonly description?: string;
    /**
     * The etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields. 
     */
    readonly etag: string;
    /**
     * Friendly name of ApplicationGroup.
     */
    readonly friendlyName?: string;
    /**
     * HostPool arm path of ApplicationGroup.
     */
    readonly hostPoolArmPath: string;
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
     * ObjectId of ApplicationGroup. (internal use)
     */
    readonly objectId: string;
    readonly plan?: types.outputs.ResourceModelWithAllowedPropertySetResponsePlan;
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
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Workspace arm path of ApplicationGroup.
     */
    readonly workspaceArmPath: string;
}
/**
 * Get an application group.
 * Azure REST API version: 2022-09-09.
 */
export function getApplicationGroupOutput(args: GetApplicationGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApplicationGroupResult> {
    return pulumi.output(args).apply((a: any) => getApplicationGroup(a, opts))
}

export interface GetApplicationGroupOutputArgs {
    /**
     * The name of the application group
     */
    applicationGroupName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
