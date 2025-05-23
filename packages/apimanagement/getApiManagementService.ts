import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an API Management service resource description.
 *
 * Uses Azure REST API version 2022-09-01-preview.
 *
 * Other available API versions: 2021-04-01-preview, 2021-08-01, 2021-12-01-preview, 2022-04-01-preview, 2022-08-01, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getApiManagementService(args: GetApiManagementServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetApiManagementServiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:getApiManagementService", {
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetApiManagementServiceArgs {
    /**
     * The name of the resource group. The name is case insensitive.
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
    readonly additionalLocations?: types.outputs.AdditionalLocationResponse[];
    /**
     * Control Plane Apis version constraint for the API Management service.
     */
    readonly apiVersionConstraint?: types.outputs.ApiVersionConstraintResponse;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * List of Certificates that need to be installed in the API Management service. Max supported certificates that can be installed is 10.
     */
    readonly certificates?: types.outputs.CertificateConfigurationResponse[];
    /**
     * Creation UTC date of the API Management service.The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     */
    readonly createdAtUtc: string;
    /**
     * Custom properties of the API Management service.</br>Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Ciphers.TripleDes168` will disable the cipher TLS_RSA_WITH_3DES_EDE_CBC_SHA for all TLS(1.0, 1.1 and 1.2).</br>Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Protocols.Tls11` can be used to disable just TLS 1.1.</br>Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Protocols.Tls10` can be used to disable TLS 1.0 on an API Management service.</br>Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Backend.Protocols.Tls11` can be used to disable just TLS 1.1 for communications with backends.</br>Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Backend.Protocols.Tls10` can be used to disable TLS 1.0 for communications with backends.</br>Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Protocols.Server.Http2` can be used to enable HTTP2 protocol on an API Management service.</br>Not specifying any of these properties on PATCH operation will reset omitted properties' values to their defaults. For all the settings except Http2 the default value is `True` if the service was created on or before April 1, 2018 and `False` otherwise. Http2 setting's default value is `False`.</br></br>You can disable any of the following ciphers by using settings `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Ciphers.[cipher_name]`: TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA, TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA, TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA, TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA, TLS_RSA_WITH_AES_128_GCM_SHA256, TLS_RSA_WITH_AES_256_CBC_SHA256, TLS_RSA_WITH_AES_128_CBC_SHA256, TLS_RSA_WITH_AES_256_CBC_SHA, TLS_RSA_WITH_AES_128_CBC_SHA. For example, `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Ciphers.TLS_RSA_WITH_AES_128_CBC_SHA256`:`false`. The default value is `true` for them.</br> Note: The following ciphers can't be disabled since they are required by internal platform components: TLS_AES_256_GCM_SHA384,TLS_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384,TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256,TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384,TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
     */
    readonly customProperties?: {[key: string]: string};
    /**
     * DEveloper Portal endpoint URL of the API Management service.
     */
    readonly developerPortalUrl: string;
    /**
     * Property only valid for an Api Management service deployed in multiple locations. This can be used to disable the gateway in master region.
     */
    readonly disableGateway?: boolean;
    /**
     * Property only meant to be used for Consumption SKU Service. This enforces a client certificate to be presented on each request to the gateway. This also enables the ability to authenticate the certificate in the policy on the gateway.
     */
    readonly enableClientCertificate?: boolean;
    /**
     * ETag of the resource.
     */
    readonly etag: string;
    /**
     * Gateway URL of the API Management service in the Default Region.
     */
    readonly gatewayRegionalUrl: string;
    /**
     * Gateway URL of the API Management service.
     */
    readonly gatewayUrl: string;
    /**
     * Custom hostname configuration of the API Management service.
     */
    readonly hostnameConfigurations?: types.outputs.HostnameConfigurationResponse[];
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Managed service identity of the Api Management service.
     */
    readonly identity?: types.outputs.ApiManagementServiceIdentityResponse;
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
    readonly name: string;
    /**
     * Property can be used to enable NAT Gateway for this API Management service.
     */
    readonly natGatewayState?: string;
    /**
     * Email address from which the notification will be sent.
     */
    readonly notificationSenderEmail?: string;
    /**
     * Outbound public IPV4 address prefixes associated with NAT Gateway deployed service. Available only for Premium SKU on stv2 platform.
     */
    readonly outboundPublicIPAddresses: string[];
    /**
     * Compute Platform Version running the service in this location.
     */
    readonly platformVersion: string;
    /**
     * Publisher portal endpoint Url of the API Management service.
     */
    readonly portalUrl: string;
    /**
     * List of Private Endpoint Connections of this service.
     */
    readonly privateEndpointConnections?: types.outputs.RemotePrivateEndpointConnectionWrapperResponse[];
    /**
     * Private Static Load Balanced IP addresses of the API Management service in Primary region which is deployed in an Internal Virtual Network. Available only for Basic, Standard, Premium and Isolated SKU.
     */
    readonly privateIPAddresses: string[];
    /**
     * The current provisioning state of the API Management service which can be one of the following: Created/Activating/Succeeded/Updating/Failed/Stopped/Terminating/TerminationFailed/Deleted.
     */
    readonly provisioningState: string;
    /**
     * Public Static Load Balanced IP addresses of the API Management service in Primary region. Available only for Basic, Standard, Premium and Isolated SKU.
     */
    readonly publicIPAddresses: string[];
    /**
     * Public Standard SKU IP V4 based IP address to be associated with Virtual Network deployed service in the region. Supported only for Developer and Premium SKU being deployed in Virtual Network.
     */
    readonly publicIpAddressId?: string;
    /**
     * Whether or not public endpoint access is allowed for this API Management service.  Value is optional but if passed in, must be 'Enabled' or 'Disabled'. If 'Disabled', private endpoints are the exclusive access method. Default value is 'Enabled'
     */
    readonly publicNetworkAccess?: string;
    /**
     * Publisher email.
     */
    readonly publisherEmail: string;
    /**
     * Publisher name.
     */
    readonly publisherName: string;
    /**
     * Undelete Api Management Service if it was previously soft-deleted. If this flag is specified and set to True all other properties will be ignored.
     */
    readonly restore?: boolean;
    /**
     * SCM endpoint URL of the API Management service.
     */
    readonly scmUrl: string;
    /**
     * SKU properties of the API Management service.
     */
    readonly sku: types.outputs.ApiManagementServiceSkuPropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
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
     * Virtual network configuration of the API Management service.
     */
    readonly virtualNetworkConfiguration?: types.outputs.VirtualNetworkConfigurationResponse;
    /**
     * The type of VPN in which API Management service needs to be configured in. None (Default Value) means the API Management service is not part of any Virtual Network, External means the API Management deployment is set up inside a Virtual Network having an Internet Facing Endpoint, and Internal means that API Management deployment is setup inside a Virtual Network having an Intranet Facing Endpoint only.
     */
    readonly virtualNetworkType?: string;
    /**
     * A list of availability zones denoting where the resource needs to come from.
     */
    readonly zones?: string[];
}
/**
 * Gets an API Management service resource description.
 *
 * Uses Azure REST API version 2022-09-01-preview.
 *
 * Other available API versions: 2021-04-01-preview, 2021-08-01, 2021-12-01-preview, 2022-04-01-preview, 2022-08-01, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getApiManagementServiceOutput(args: GetApiManagementServiceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetApiManagementServiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:apimanagement:getApiManagementService", {
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetApiManagementServiceOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}