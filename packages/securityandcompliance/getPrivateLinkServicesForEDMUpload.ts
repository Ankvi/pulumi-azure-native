import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the metadata of a privateLinkServicesForEDMUpload resource.
 * Azure REST API version: 2021-03-08.
 */
export function getPrivateLinkServicesForEDMUpload(args: GetPrivateLinkServicesForEDMUploadArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateLinkServicesForEDMUploadResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityandcompliance:getPrivateLinkServicesForEDMUpload", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetPrivateLinkServicesForEDMUploadArgs {
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
export interface GetPrivateLinkServicesForEDMUploadResult {
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
    readonly identity?: types.outputs.securityandcompliance.ServicesResourceResponseIdentity;
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
    readonly properties: types.outputs.securityandcompliance.ServicesPropertiesResponse;
    /**
     * Required property for system data
     */
    readonly systemData: types.outputs.securityandcompliance.SystemDataResponse;
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
 * Get the metadata of a privateLinkServicesForEDMUpload resource.
 * Azure REST API version: 2021-03-08.
 */
export function getPrivateLinkServicesForEDMUploadOutput(args: GetPrivateLinkServicesForEDMUploadOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPrivateLinkServicesForEDMUploadResult> {
    return pulumi.output(args).apply((a: any) => getPrivateLinkServicesForEDMUpload(a, opts))
}

export interface GetPrivateLinkServicesForEDMUploadOutputArgs {
    /**
     * The name of the resource group that contains the service instance.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the service instance.
     */
    resourceName: pulumi.Input<string>;
}
