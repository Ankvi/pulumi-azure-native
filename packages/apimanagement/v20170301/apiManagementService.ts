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
    public static readonly __pulumiType = 'azure-native:apimanagement/v20170301:ApiManagementService';

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
     * List of Certificates that need to be installed in the API Management service. Max supported certificates that can be installed is 10.
     */
    public readonly certificates!: pulumi.Output<types.outputs.CertificateConfigurationResponse[] | undefined>;
    /**
     * Creation UTC date of the API Management service.The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     */
    public /*out*/ readonly createdAtUtc!: pulumi.Output<string>;
    /**
     * Custom properties of the API Management service. Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Ciphers.TripleDes168` will disable the cipher TLS_RSA_WITH_3DES_EDE_CBC_SHA for all TLS(1.0, 1.1 and 1.2). Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Protocols.Tls11` can be used to disable just TLS 1.1 and setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Protocols.Tls10` can be used to disable TLS 1.0 on an API Management service.
     */
    public readonly customProperties!: pulumi.Output<{[key: string]: string} | undefined>;
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
     * Email address from which the notification will be sent.
     */
    public readonly notificationSenderEmail!: pulumi.Output<string | undefined>;
    /**
     * Publisher portal endpoint Url of the API Management service.
     */
    public /*out*/ readonly portalUrl!: pulumi.Output<string>;
    /**
     * The current provisioning state of the API Management service which can be one of the following: Created/Activating/Succeeded/Updating/Failed/Stopped/Terminating/TerminationFailed/Deleted.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Publisher email.
     */
    public readonly publisherEmail!: pulumi.Output<string>;
    /**
     * Publisher name.
     */
    public readonly publisherName!: pulumi.Output<string>;
    /**
     * SCM endpoint URL of the API Management service.
     */
    public /*out*/ readonly scmUrl!: pulumi.Output<string>;
    /**
     * SKU properties of the API Management service.
     */
    public readonly sku!: pulumi.Output<types.outputs.ApiManagementServiceSkuPropertiesResponse>;
    /**
     * Static IP addresses of the API Management service virtual machines. Available only for Standard and Premium SKU.
     */
    public /*out*/ readonly staticIps!: pulumi.Output<string[]>;
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
            resourceInputs["certificates"] = args ? args.certificates : undefined;
            resourceInputs["customProperties"] = args ? args.customProperties : undefined;
            resourceInputs["hostnameConfigurations"] = args ? args.hostnameConfigurations : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["notificationSenderEmail"] = args ? args.notificationSenderEmail : undefined;
            resourceInputs["publisherEmail"] = args ? args.publisherEmail : undefined;
            resourceInputs["publisherName"] = args ? args.publisherName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["sku"] = args ? (args.sku ? pulumi.output(args.sku).apply(types.inputs.apiManagementServiceSkuPropertiesArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["virtualNetworkConfiguration"] = args ? args.virtualNetworkConfiguration : undefined;
            resourceInputs["virtualNetworkType"] = (args ? args.virtualNetworkType : undefined) ?? "None";
            resourceInputs["createdAtUtc"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["gatewayRegionalUrl"] = undefined /*out*/;
            resourceInputs["gatewayUrl"] = undefined /*out*/;
            resourceInputs["managementApiUrl"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["portalUrl"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["scmUrl"] = undefined /*out*/;
            resourceInputs["staticIps"] = undefined /*out*/;
            resourceInputs["targetProvisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["additionalLocations"] = undefined /*out*/;
            resourceInputs["certificates"] = undefined /*out*/;
            resourceInputs["createdAtUtc"] = undefined /*out*/;
            resourceInputs["customProperties"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["gatewayRegionalUrl"] = undefined /*out*/;
            resourceInputs["gatewayUrl"] = undefined /*out*/;
            resourceInputs["hostnameConfigurations"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managementApiUrl"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["notificationSenderEmail"] = undefined /*out*/;
            resourceInputs["portalUrl"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publisherEmail"] = undefined /*out*/;
            resourceInputs["publisherName"] = undefined /*out*/;
            resourceInputs["scmUrl"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["staticIps"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["targetProvisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualNetworkConfiguration"] = undefined /*out*/;
            resourceInputs["virtualNetworkType"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement:ApiManagementService" }, { type: "azure-native:apimanagement/v20160707:ApiManagementService" }, { type: "azure-native:apimanagement/v20161010:ApiManagementService" }, { type: "azure-native:apimanagement/v20180101:ApiManagementService" }, { type: "azure-native:apimanagement/v20180601preview:ApiManagementService" }, { type: "azure-native:apimanagement/v20190101:ApiManagementService" }, { type: "azure-native:apimanagement/v20191201:ApiManagementService" }, { type: "azure-native:apimanagement/v20191201preview:ApiManagementService" }, { type: "azure-native:apimanagement/v20200601preview:ApiManagementService" }, { type: "azure-native:apimanagement/v20201201:ApiManagementService" }, { type: "azure-native:apimanagement/v20210101preview:ApiManagementService" }, { type: "azure-native:apimanagement/v20210401preview:ApiManagementService" }, { type: "azure-native:apimanagement/v20210801:ApiManagementService" }, { type: "azure-native:apimanagement/v20211201preview:ApiManagementService" }, { type: "azure-native:apimanagement/v20220401preview:ApiManagementService" }, { type: "azure-native:apimanagement/v20220801:ApiManagementService" }, { type: "azure-native:apimanagement/v20220901preview:ApiManagementService" }, { type: "azure-native:apimanagement/v20230301preview:ApiManagementService" }, { type: "azure-native:apimanagement/v20230501preview:ApiManagementService" }] };
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
     * List of Certificates that need to be installed in the API Management service. Max supported certificates that can be installed is 10.
     */
    certificates?: pulumi.Input<pulumi.Input<types.inputs.CertificateConfigurationArgs>[]>;
    /**
     * Custom properties of the API Management service. Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Ciphers.TripleDes168` will disable the cipher TLS_RSA_WITH_3DES_EDE_CBC_SHA for all TLS(1.0, 1.1 and 1.2). Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Protocols.Tls11` can be used to disable just TLS 1.1 and setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Protocols.Tls10` can be used to disable TLS 1.0 on an API Management service.
     */
    customProperties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
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
     * Email address from which the notification will be sent.
     */
    notificationSenderEmail?: pulumi.Input<string>;
    /**
     * Publisher email.
     */
    publisherEmail: pulumi.Input<string>;
    /**
     * Publisher name.
     */
    publisherName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
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
}