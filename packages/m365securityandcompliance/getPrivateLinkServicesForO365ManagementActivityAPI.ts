import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the metadata of a privateLinkServicesForO365ManagementActivityAPI resource.
 *
 * Uses Azure REST API version 2021-03-25-preview.
 */
export function getPrivateLinkServicesForO365ManagementActivityAPI(args: GetPrivateLinkServicesForO365ManagementActivityAPIArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateLinkServicesForO365ManagementActivityAPIResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:m365securityandcompliance:getPrivateLinkServicesForO365ManagementActivityAPI", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetPrivateLinkServicesForO365ManagementActivityAPIArgs {
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
export interface GetPrivateLinkServicesForO365ManagementActivityAPIResult {
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
 * Get the metadata of a privateLinkServicesForO365ManagementActivityAPI resource.
 *
 * Uses Azure REST API version 2021-03-25-preview.
 */
export function getPrivateLinkServicesForO365ManagementActivityAPIOutput(args: GetPrivateLinkServicesForO365ManagementActivityAPIOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPrivateLinkServicesForO365ManagementActivityAPIResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:m365securityandcompliance:getPrivateLinkServicesForO365ManagementActivityAPI", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetPrivateLinkServicesForO365ManagementActivityAPIOutputArgs {
    /**
     * The name of the resource group that contains the service instance.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the service instance.
     */
    resourceName: pulumi.Input<string>;
}