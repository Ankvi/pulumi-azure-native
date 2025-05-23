import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gateway hostname configuration details.
 *
 * Uses Azure REST API version 2022-09-01-preview. In version 2.x of the Azure Native provider, it used API version 2022-08-01.
 *
 * Other available API versions: 2021-04-01-preview, 2021-08-01, 2021-12-01-preview, 2022-04-01-preview, 2022-08-01, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class GatewayHostnameConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing GatewayHostnameConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): GatewayHostnameConfiguration {
        return new GatewayHostnameConfiguration(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement:GatewayHostnameConfiguration';

    /**
     * Returns true if the given object is an instance of GatewayHostnameConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GatewayHostnameConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GatewayHostnameConfiguration.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Identifier of Certificate entity that will be used for TLS connection establishment
     */
    public readonly certificateId!: pulumi.Output<string | undefined>;
    /**
     * Hostname value. Supports valid domain name, partial or full wildcard
     */
    public readonly hostname!: pulumi.Output<string | undefined>;
    /**
     * Specifies if HTTP/2.0 is supported
     */
    public readonly http2Enabled!: pulumi.Output<boolean | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Determines whether gateway requests client certificate
     */
    public readonly negotiateClientCertificate!: pulumi.Output<boolean | undefined>;
    /**
     * Specifies if TLS 1.0 is supported
     */
    public readonly tls10Enabled!: pulumi.Output<boolean | undefined>;
    /**
     * Specifies if TLS 1.1 is supported
     */
    public readonly tls11Enabled!: pulumi.Output<boolean | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a GatewayHostnameConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GatewayHostnameConfigurationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.gatewayId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'gatewayId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["certificateId"] = args ? args.certificateId : undefined;
            resourceInputs["gatewayId"] = args ? args.gatewayId : undefined;
            resourceInputs["hcId"] = args ? args.hcId : undefined;
            resourceInputs["hostname"] = args ? args.hostname : undefined;
            resourceInputs["http2Enabled"] = args ? args.http2Enabled : undefined;
            resourceInputs["negotiateClientCertificate"] = args ? args.negotiateClientCertificate : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["tls10Enabled"] = args ? args.tls10Enabled : undefined;
            resourceInputs["tls11Enabled"] = args ? args.tls11Enabled : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["certificateId"] = undefined /*out*/;
            resourceInputs["hostname"] = undefined /*out*/;
            resourceInputs["http2Enabled"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["negotiateClientCertificate"] = undefined /*out*/;
            resourceInputs["tls10Enabled"] = undefined /*out*/;
            resourceInputs["tls11Enabled"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement/v20191201:GatewayHostnameConfiguration" }, { type: "azure-native:apimanagement/v20191201preview:GatewayHostnameConfiguration" }, { type: "azure-native:apimanagement/v20200601preview:GatewayHostnameConfiguration" }, { type: "azure-native:apimanagement/v20201201:GatewayHostnameConfiguration" }, { type: "azure-native:apimanagement/v20210101preview:GatewayHostnameConfiguration" }, { type: "azure-native:apimanagement/v20210401preview:GatewayHostnameConfiguration" }, { type: "azure-native:apimanagement/v20210801:GatewayHostnameConfiguration" }, { type: "azure-native:apimanagement/v20211201preview:GatewayHostnameConfiguration" }, { type: "azure-native:apimanagement/v20220401preview:GatewayHostnameConfiguration" }, { type: "azure-native:apimanagement/v20220801:GatewayHostnameConfiguration" }, { type: "azure-native:apimanagement/v20220901preview:GatewayHostnameConfiguration" }, { type: "azure-native:apimanagement/v20230301preview:GatewayHostnameConfiguration" }, { type: "azure-native:apimanagement/v20230501preview:GatewayHostnameConfiguration" }, { type: "azure-native:apimanagement/v20230901preview:GatewayHostnameConfiguration" }, { type: "azure-native:apimanagement/v20240501:GatewayHostnameConfiguration" }, { type: "azure-native:apimanagement/v20240601preview:GatewayHostnameConfiguration" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(GatewayHostnameConfiguration.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a GatewayHostnameConfiguration resource.
 */
export interface GatewayHostnameConfigurationArgs {
    /**
     * Identifier of Certificate entity that will be used for TLS connection establishment
     */
    certificateId?: pulumi.Input<string>;
    /**
     * Gateway entity identifier. Must be unique in the current API Management service instance. Must not have value 'managed'
     */
    gatewayId: pulumi.Input<string>;
    /**
     * Gateway hostname configuration identifier. Must be unique in the scope of parent Gateway entity.
     */
    hcId?: pulumi.Input<string>;
    /**
     * Hostname value. Supports valid domain name, partial or full wildcard
     */
    hostname?: pulumi.Input<string>;
    /**
     * Specifies if HTTP/2.0 is supported
     */
    http2Enabled?: pulumi.Input<boolean>;
    /**
     * Determines whether gateway requests client certificate
     */
    negotiateClientCertificate?: pulumi.Input<boolean>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Specifies if TLS 1.0 is supported
     */
    tls10Enabled?: pulumi.Input<boolean>;
    /**
     * Specifies if TLS 1.1 is supported
     */
    tls11Enabled?: pulumi.Input<boolean>;
}