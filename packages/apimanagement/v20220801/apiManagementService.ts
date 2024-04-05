import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A single API Management service resource in List or Get response.
 */
export class ApiManagementService extends pulumi.CustomResource {
    /**
     * Get an existing ApiManagementService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ApiManagementService {
        return new ApiManagementService(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement/v20220801:ApiManagementService';

    /**
     * Returns true if the given object is an instance of ApiManagementService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApiManagementService {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApiManagementService.__pulumiType;
    }

    /**
     * Additional datacenter locations of the API Management service.
     */
    public readonly additionalLocations!: pulumi.Output<types.outputs.AdditionalLocationResponse[] | undefined>;
    /**
     * Control Plane Apis version constraint for the API Management service.
     */
    public readonly apiVersionConstraint!: pulumi.Output<types.outputs.ApiVersionConstraintResponse | undefined>;
    /**
     * List of Certificates that need to be installed in the API Management service. Max supported certificates that can be installed is 10.
     */
    public readonly certificates!: pulumi.Output<types.outputs.CertificateConfigurationResponse[] | undefined>;
    /**
     * Creation UTC date of the API Management service.The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     */
    public /*out*/ readonly createdAtUtc!: pulumi.Output<string>;
    /**
     * Custom properties of the API Management service.</br>Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Ciphers.TripleDes168` will disable the cipher TLS_RSA_WITH_3DES_EDE_CBC_SHA for all TLS(1.0, 1.1 and 1.2).</br>Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Protocols.Tls11` can be used to disable just TLS 1.1.</br>Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Protocols.Tls10` can be used to disable TLS 1.0 on an API Management service.</br>Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Backend.Protocols.Tls11` can be used to disable just TLS 1.1 for communications with backends.</br>Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Backend.Protocols.Tls10` can be used to disable TLS 1.0 for communications with backends.</br>Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Protocols.Server.Http2` can be used to enable HTTP2 protocol on an API Management service.</br>Not specifying any of these properties on PATCH operation will reset omitted properties' values to their defaults. For all the settings except Http2 the default value is `True` if the service was created on or before April 1, 2018 and `False` otherwise. Http2 setting's default value is `False`.</br></br>You can disable any of the following ciphers by using settings `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Ciphers.[cipher_name]`: TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA, TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA, TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA, TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA, TLS_RSA_WITH_AES_128_GCM_SHA256, TLS_RSA_WITH_AES_256_CBC_SHA256, TLS_RSA_WITH_AES_128_CBC_SHA256, TLS_RSA_WITH_AES_256_CBC_SHA, TLS_RSA_WITH_AES_128_CBC_SHA. For example, `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Ciphers.TLS_RSA_WITH_AES_128_CBC_SHA256`:`false`. The default value is `true` for them.</br> Note: The following ciphers can't be disabled since they are required by internal platform components: TLS_AES_256_GCM_SHA384,TLS_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384,TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256,TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384,TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
     */
    public readonly customProperties!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * DEveloper Portal endpoint URL of the API Management service.
     */
    public /*out*/ readonly developerPortalUrl!: pulumi.Output<string>;
    /**
     * Property only valid for an Api Management service deployed in multiple locations. This can be used to disable the gateway in master region.
     */
    public readonly disableGateway!: pulumi.Output<boolean | undefined>;
    /**
     * Property only meant to be used for Consumption SKU Service. This enforces a client certificate to be presented on each request to the gateway. This also enables the ability to authenticate the certificate in the policy on the gateway.
     */
    public readonly enableClientCertificate!: pulumi.Output<boolean | undefined>;
    /**
     * ETag of the resource.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Gateway URL of the API Management service in the Default Region.
     */
    public /*out*/ readonly gatewayRegionalUrl!: pulumi.Output<string>;
    /**
     * Gateway URL of the API Management service.
     */
    public /*out*/ readonly gatewayUrl!: pulumi.Output<string>;
    /**
     * Custom hostname configuration of the API Management service.
     */
    public readonly hostnameConfigurations!: pulumi.Output<types.outputs.HostnameConfigurationResponse[] | undefined>;
    /**
     * Managed service identity of the Api Management service.
     */
    public readonly identity!: pulumi.Output<types.outputs.ApiManagementServiceIdentityResponse | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Management API endpoint URL of the API Management service.
     */
    public /*out*/ readonly managementApiUrl!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Property can be used to enable NAT Gateway for this API Management service.
     */
    public readonly natGatewayState!: pulumi.Output<string | undefined>;
    /**
     * Email address from which the notification will be sent.
     */
    public readonly notificationSenderEmail!: pulumi.Output<string | undefined>;
    /**
     * Outbound public IPV4 address prefixes associated with NAT Gateway deployed service. Available only for Premium SKU on stv2 platform.
     */
    public /*out*/ readonly outboundPublicIPAddresses!: pulumi.Output<string[]>;
    /**
     * Compute Platform Version running the service in this location.
     */
    public /*out*/ readonly platformVersion!: pulumi.Output<string>;
    /**
     * Publisher portal endpoint Url of the API Management service.
     */
    public /*out*/ readonly portalUrl!: pulumi.Output<string>;
    /**
     * List of Private Endpoint Connections of this service.
     */
    public readonly privateEndpointConnections!: pulumi.Output<types.outputs.RemotePrivateEndpointConnectionWrapperResponse[] | undefined>;
    /**
     * Private Static Load Balanced IP addresses of the API Management service in Primary region which is deployed in an Internal Virtual Network. Available only for Basic, Standard, Premium and Isolated SKU.
     */
    public /*out*/ readonly privateIPAddresses!: pulumi.Output<string[]>;
    /**
     * The current provisioning state of the API Management service which can be one of the following: Created/Activating/Succeeded/Updating/Failed/Stopped/Terminating/TerminationFailed/Deleted.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Public Static Load Balanced IP addresses of the API Management service in Primary region. Available only for Basic, Standard, Premium and Isolated SKU.
     */
    public /*out*/ readonly publicIPAddresses!: pulumi.Output<string[]>;
    /**
     * Public Standard SKU IP V4 based IP address to be associated with Virtual Network deployed service in the region. Supported only for Developer and Premium SKU being deployed in Virtual Network.
     */
    public readonly publicIpAddressId!: pulumi.Output<string | undefined>;
    /**
     * Whether or not public endpoint access is allowed for this API Management service.  Value is optional but if passed in, must be 'Enabled' or 'Disabled'. If 'Disabled', private endpoints are the exclusive access method. Default value is 'Enabled'
     */
    public readonly publicNetworkAccess!: pulumi.Output<string | undefined>;
    /**
     * Publisher email.
     */
    public readonly publisherEmail!: pulumi.Output<string>;
    /**
     * Publisher name.
     */
    public readonly publisherName!: pulumi.Output<string>;
    /**
     * Undelete Api Management Service if it was previously soft-deleted. If this flag is specified and set to True all other properties will be ignored.
     */
    public readonly restore!: pulumi.Output<boolean | undefined>;
    /**
     * SCM endpoint URL of the API Management service.
     */
    public /*out*/ readonly scmUrl!: pulumi.Output<string>;
    /**
     * SKU properties of the API Management service.
     */
    public readonly sku!: pulumi.Output<types.outputs.ApiManagementServiceSkuPropertiesResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The provisioning state of the API Management service, which is targeted by the long running operation started on the service.
     */
    public /*out*/ readonly targetProvisioningState!: pulumi.Output<string>;
    /**
     * Resource type for API Management resource is set to Microsoft.ApiManagement.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Virtual network configuration of the API Management service.
     */
    public readonly virtualNetworkConfiguration!: pulumi.Output<types.outputs.VirtualNetworkConfigurationResponse | undefined>;
    /**
     * The type of VPN in which API Management service needs to be configured in. None (Default Value) means the API Management service is not part of any Virtual Network, External means the API Management deployment is set up inside a Virtual Network having an Internet Facing Endpoint, and Internal means that API Management deployment is setup inside a Virtual Network having an Intranet Facing Endpoint only.
     */
    public readonly virtualNetworkType!: pulumi.Output<string | undefined>;
    /**
     * A list of availability zones denoting where the resource needs to come from.
     */
    public readonly zones!: pulumi.Output<string[] | undefined>;

    /**
     * Create a ApiManagementService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiManagementServiceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.publisherEmail === undefined) && !opts.urn) {
                throw new Error("Missing required property 'publisherEmail'");
            }
            if ((!args || args.publisherName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'publisherName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sku'");
            }
            resourceInputs["additionalLocations"] = args ? args.additionalLocations : undefined;
            resourceInputs["apiVersionConstraint"] = args ? args.apiVersionConstraint : undefined;
            resourceInputs["certificates"] = args ? args.certificates : undefined;
            resourceInputs["customProperties"] = args ? args.customProperties : undefined;
            resourceInputs["disableGateway"] = (args ? args.disableGateway : undefined) ?? false;
            resourceInputs["enableClientCertificate"] = (args ? args.enableClientCertificate : undefined) ?? false;
            resourceInputs["hostnameConfigurations"] = args ? args.hostnameConfigurations : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["natGatewayState"] = (args ? args.natGatewayState : undefined) ?? "Disabled";
            resourceInputs["notificationSenderEmail"] = args ? args.notificationSenderEmail : undefined;
            resourceInputs["privateEndpointConnections"] = args ? args.privateEndpointConnections : undefined;
            resourceInputs["publicIpAddressId"] = args ? args.publicIpAddressId : undefined;
            resourceInputs["publicNetworkAccess"] = args ? args.publicNetworkAccess : undefined;
            resourceInputs["publisherEmail"] = args ? args.publisherEmail : undefined;
            resourceInputs["publisherName"] = args ? args.publisherName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["restore"] = (args ? args.restore : undefined) ?? false;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["virtualNetworkConfiguration"] = args ? args.virtualNetworkConfiguration : undefined;
            resourceInputs["virtualNetworkType"] = (args ? args.virtualNetworkType : undefined) ?? "None";
            resourceInputs["zones"] = args ? args.zones : undefined;
            resourceInputs["createdAtUtc"] = undefined /*out*/;
            resourceInputs["developerPortalUrl"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["gatewayRegionalUrl"] = undefined /*out*/;
            resourceInputs["gatewayUrl"] = undefined /*out*/;
            resourceInputs["managementApiUrl"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["outboundPublicIPAddresses"] = undefined /*out*/;
            resourceInputs["platformVersion"] = undefined /*out*/;
            resourceInputs["portalUrl"] = undefined /*out*/;
            resourceInputs["privateIPAddresses"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicIPAddresses"] = undefined /*out*/;
            resourceInputs["scmUrl"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["targetProvisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["additionalLocations"] = undefined /*out*/;
            resourceInputs["apiVersionConstraint"] = undefined /*out*/;
            resourceInputs["certificates"] = undefined /*out*/;
            resourceInputs["createdAtUtc"] = undefined /*out*/;
            resourceInputs["customProperties"] = undefined /*out*/;
            resourceInputs["developerPortalUrl"] = undefined /*out*/;
            resourceInputs["disableGateway"] = undefined /*out*/;
            resourceInputs["enableClientCertificate"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["gatewayRegionalUrl"] = undefined /*out*/;
            resourceInputs["gatewayUrl"] = undefined /*out*/;
            resourceInputs["hostnameConfigurations"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managementApiUrl"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["natGatewayState"] = undefined /*out*/;
            resourceInputs["notificationSenderEmail"] = undefined /*out*/;
            resourceInputs["outboundPublicIPAddresses"] = undefined /*out*/;
            resourceInputs["platformVersion"] = undefined /*out*/;
            resourceInputs["portalUrl"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["privateIPAddresses"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicIPAddresses"] = undefined /*out*/;
            resourceInputs["publicIpAddressId"] = undefined /*out*/;
            resourceInputs["publicNetworkAccess"] = undefined /*out*/;
            resourceInputs["publisherEmail"] = undefined /*out*/;
            resourceInputs["publisherName"] = undefined /*out*/;
            resourceInputs["restore"] = undefined /*out*/;
            resourceInputs["scmUrl"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["targetProvisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualNetworkConfiguration"] = undefined /*out*/;
            resourceInputs["virtualNetworkType"] = undefined /*out*/;
            resourceInputs["zones"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement:ApiManagementService" }, { type: "azure-native:apimanagement/v20160707:ApiManagementService" }, { type: "azure-native:apimanagement/v20161010:ApiManagementService" }, { type: "azure-native:apimanagement/v20170301:ApiManagementService" }, { type: "azure-native:apimanagement/v20180101:ApiManagementService" }, { type: "azure-native:apimanagement/v20180601preview:ApiManagementService" }, { type: "azure-native:apimanagement/v20190101:ApiManagementService" }, { type: "azure-native:apimanagement/v20191201:ApiManagementService" }, { type: "azure-native:apimanagement/v20191201preview:ApiManagementService" }, { type: "azure-native:apimanagement/v20200601preview:ApiManagementService" }, { type: "azure-native:apimanagement/v20201201:ApiManagementService" }, { type: "azure-native:apimanagement/v20210101preview:ApiManagementService" }, { type: "azure-native:apimanagement/v20210401preview:ApiManagementService" }, { type: "azure-native:apimanagement/v20210801:ApiManagementService" }, { type: "azure-native:apimanagement/v20211201preview:ApiManagementService" }, { type: "azure-native:apimanagement/v20220401preview:ApiManagementService" }, { type: "azure-native:apimanagement/v20220901preview:ApiManagementService" }, { type: "azure-native:apimanagement/v20230301preview:ApiManagementService" }, { type: "azure-native:apimanagement/v20230501preview:ApiManagementService" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ApiManagementService.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ApiManagementService resource.
 */
export interface ApiManagementServiceArgs {
    /**
     * Additional datacenter locations of the API Management service.
     */
    additionalLocations?: pulumi.Input<pulumi.Input<types.inputs.AdditionalLocationArgs>[]>;
    /**
     * Control Plane Apis version constraint for the API Management service.
     */
    apiVersionConstraint?: pulumi.Input<types.inputs.ApiVersionConstraintArgs>;
    /**
     * List of Certificates that need to be installed in the API Management service. Max supported certificates that can be installed is 10.
     */
    certificates?: pulumi.Input<pulumi.Input<types.inputs.CertificateConfigurationArgs>[]>;
    /**
     * Custom properties of the API Management service.</br>Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Ciphers.TripleDes168` will disable the cipher TLS_RSA_WITH_3DES_EDE_CBC_SHA for all TLS(1.0, 1.1 and 1.2).</br>Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Protocols.Tls11` can be used to disable just TLS 1.1.</br>Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Protocols.Tls10` can be used to disable TLS 1.0 on an API Management service.</br>Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Backend.Protocols.Tls11` can be used to disable just TLS 1.1 for communications with backends.</br>Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Backend.Protocols.Tls10` can be used to disable TLS 1.0 for communications with backends.</br>Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Protocols.Server.Http2` can be used to enable HTTP2 protocol on an API Management service.</br>Not specifying any of these properties on PATCH operation will reset omitted properties' values to their defaults. For all the settings except Http2 the default value is `True` if the service was created on or before April 1, 2018 and `False` otherwise. Http2 setting's default value is `False`.</br></br>You can disable any of the following ciphers by using settings `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Ciphers.[cipher_name]`: TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA, TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA, TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA, TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA, TLS_RSA_WITH_AES_128_GCM_SHA256, TLS_RSA_WITH_AES_256_CBC_SHA256, TLS_RSA_WITH_AES_128_CBC_SHA256, TLS_RSA_WITH_AES_256_CBC_SHA, TLS_RSA_WITH_AES_128_CBC_SHA. For example, `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Ciphers.TLS_RSA_WITH_AES_128_CBC_SHA256`:`false`. The default value is `true` for them.</br> Note: The following ciphers can't be disabled since they are required by internal platform components: TLS_AES_256_GCM_SHA384,TLS_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384,TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256,TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384,TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
     */
    customProperties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Property only valid for an Api Management service deployed in multiple locations. This can be used to disable the gateway in master region.
     */
    disableGateway?: pulumi.Input<boolean>;
    /**
     * Property only meant to be used for Consumption SKU Service. This enforces a client certificate to be presented on each request to the gateway. This also enables the ability to authenticate the certificate in the policy on the gateway.
     */
    enableClientCertificate?: pulumi.Input<boolean>;
    /**
     * Custom hostname configuration of the API Management service.
     */
    hostnameConfigurations?: pulumi.Input<pulumi.Input<types.inputs.HostnameConfigurationArgs>[]>;
    /**
     * Managed service identity of the Api Management service.
     */
    identity?: pulumi.Input<types.inputs.ApiManagementServiceIdentityArgs>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * Property can be used to enable NAT Gateway for this API Management service.
     */
    natGatewayState?: pulumi.Input<string | types.enums.NatGatewayState>;
    /**
     * Email address from which the notification will be sent.
     */
    notificationSenderEmail?: pulumi.Input<string>;
    /**
     * List of Private Endpoint Connections of this service.
     */
    privateEndpointConnections?: pulumi.Input<pulumi.Input<types.inputs.RemotePrivateEndpointConnectionWrapperArgs>[]>;
    /**
     * Public Standard SKU IP V4 based IP address to be associated with Virtual Network deployed service in the region. Supported only for Developer and Premium SKU being deployed in Virtual Network.
     */
    publicIpAddressId?: pulumi.Input<string>;
    /**
     * Whether or not public endpoint access is allowed for this API Management service.  Value is optional but if passed in, must be 'Enabled' or 'Disabled'. If 'Disabled', private endpoints are the exclusive access method. Default value is 'Enabled'
     */
    publicNetworkAccess?: pulumi.Input<string | types.enums.PublicNetworkAccess>;
    /**
     * Publisher email.
     */
    publisherEmail: pulumi.Input<string>;
    /**
     * Publisher name.
     */
    publisherName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Undelete Api Management Service if it was previously soft-deleted. If this flag is specified and set to True all other properties will be ignored.
     */
    restore?: pulumi.Input<boolean>;
    /**
     * The name of the API Management service.
     */
    serviceName?: pulumi.Input<string>;
    /**
     * SKU properties of the API Management service.
     */
    sku: pulumi.Input<types.inputs.ApiManagementServiceSkuPropertiesArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Virtual network configuration of the API Management service.
     */
    virtualNetworkConfiguration?: pulumi.Input<types.inputs.VirtualNetworkConfigurationArgs>;
    /**
     * The type of VPN in which API Management service needs to be configured in. None (Default Value) means the API Management service is not part of any Virtual Network, External means the API Management deployment is set up inside a Virtual Network having an Internet Facing Endpoint, and Internal means that API Management deployment is setup inside a Virtual Network having an Intranet Facing Endpoint only.
     */
    virtualNetworkType?: pulumi.Input<string | types.enums.VirtualNetworkType>;
    /**
     * A list of availability zones denoting where the resource needs to come from.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}