import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the metadata of a privateLinkServicesForM365SecurityCenter resource.
 */
export function getPrivateLinkServicesForM365SecurityCenter(args: GetPrivateLinkServicesForM365SecurityCenterArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateLinkServicesForM365SecurityCenterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityandcompliance/v20210308:getPrivateLinkServicesForM365SecurityCenter", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetPrivateLinkServicesForM365SecurityCenterArgs {
    /**
     * The name of the resource group that contains the service instance.
     */
    resourceGroupName: string;
    /**
     * The name of the service instance.
     */
    resourceName: string;
}

/**
 * The description of the service.
 */
export interface GetPrivateLinkServicesForM365SecurityCenterResult {
    /**
     * An etag associated with the resource, used for optimistic concurrency when editing it.
     */
    readonly etag?: string;
    /**
     * The resource identifier.
     */
    readonly id: string;
    /**
     * Setting indicating whether the service has a managed identity associated with it.
     */
    readonly identity?: types.outputs.ServicesResourceResponseIdentity;
    /**
     * The kind of the service.
     */
    readonly kind: string;
    /**
     * The resource location.
     */
    readonly location: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * The common properties of a service.
     */
    readonly properties: types.outputs.ServicesPropertiesResponse;
    /**
     * Required property for system data
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The resource type.
     */
    readonly type: string;
}
/**
 * Get the metadata of a privateLinkServicesForM365SecurityCenter resource.
 */
export function getPrivateLinkServicesForM365SecurityCenterOutput(args: GetPrivateLinkServicesForM365SecurityCenterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPrivateLinkServicesForM365SecurityCenterResult> {
    return pulumi.output(args).apply((a: any) => getPrivateLinkServicesForM365SecurityCenter(a, opts))
}

export interface GetPrivateLinkServicesForM365SecurityCenterOutputArgs {
    /**
     * The name of the resource group that contains the service instance.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the service instance.
     */
    resourceName: pulumi.Input<string>;
}
