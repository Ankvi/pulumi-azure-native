import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an API Management service resource description.
 */
export function getApiManagementService(args: GetApiManagementServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetApiManagementServiceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement/v20161010:getApiManagementService", {
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetApiManagementServiceArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    serviceName: string;
}

/**
 * A single API Management service resource in List or Get response.
 */
export interface GetApiManagementServiceResult {
    /**
     * Additional datacenter locations of the API Management service.
     */
    readonly additionalLocations?: types.outputs.AdditionalRegionResponse[];
    /**
     * Addresser email.
     */
    readonly addresserEmail?: string;
    /**
     * Creation UTC date of the API Management service.The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     */
    readonly createdAtUtc: string;
    /**
     * Custom properties of the API Management service, like disabling TLS 1.0.
     */
    readonly customProperties?: {[key: string]: string};
    /**
     * ETag of the resource.
     */
    readonly etag: string;
    /**
     * Custom hostname configuration of the API Management service.
     */
    readonly hostnameConfigurations?: types.outputs.HostnameConfigurationResponse[];
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Management API endpoint URL of the API Management service.
     */
    readonly managementApiUrl: string;
    /**
     * Resource name.
     */
    readonly name?: string;
    /**
     * Publisher portal endpoint Url of the API Management service.
     */
    readonly portalUrl: string;
    /**
     * The current provisioning state of the API Management service which can be one of the following: Created/Activating/Succeeded/Updating/Failed/Stopped/Terminating/TerminationFailed/Deleted.
     */
    readonly provisioningState: string;
    /**
     * Publisher email.
     */
    readonly publisherEmail: string;
    /**
     * Publisher name.
     */
    readonly publisherName: string;
    /**
     * Proxy endpoint URL of the API Management service.
     */
    readonly runtimeUrl: string;
    /**
     * SCM endpoint URL of the API Management service.
     */
    readonly scmUrl: string;
    /**
     * SKU properties of the API Management service.
     */
    readonly sku: types.outputs.ApiManagementServiceSkuPropertiesResponse;
    /**
     * Static IP addresses of the API Management service virtual machines. Available only for Standard and Premium SKU.
     */
    readonly staticIPs: string[];
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The provisioning state of the API Management service, which is targeted by the long running operation started on the service.
     */
    readonly targetProvisioningState: string;
    /**
     * Resource type for API Management resource is set to Microsoft.ApiManagement.
     */
    readonly type: string;
    /**
     * The type of VPN in which API Management service needs to be configured in. None (Default Value) means the API Management service is not part of any Virtual Network, External means the API Management deployment is set up inside a Virtual Network having an Internet Facing Endpoint, and Internal means that API Management deployment is setup inside a Virtual Network having an Intranet Facing Endpoint only.
     */
    readonly vpnType?: string;
    /**
     * Virtual network configuration of the API Management service.
     */
    readonly vpnconfiguration?: types.outputs.VirtualNetworkConfigurationResponse;
}
/**
 * Gets an API Management service resource description.
 */
export function getApiManagementServiceOutput(args: GetApiManagementServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApiManagementServiceResult> {
    return pulumi.output(args).apply((a: any) => getApiManagementService(a, opts))
}

export interface GetApiManagementServiceOutputArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}
