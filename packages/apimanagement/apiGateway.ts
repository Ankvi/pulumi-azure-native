import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A single API Management gateway resource in List or Get response.
 *
 * Uses Azure REST API version 2024-06-01-preview. In version 2.x of the Azure Native provider, it used API version 2023-09-01-preview.
 *
 * Other available API versions: 2023-09-01-preview, 2024-05-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class ApiGateway extends pulumi.CustomResource {
    /**
     * Get an existing ApiGateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ApiGateway {
        return new ApiGateway(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement:ApiGateway';

    /**
     * Returns true if the given object is an instance of ApiGateway.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApiGateway {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApiGateway.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Information regarding how the gateway should integrate with backend systems.
     */
    public readonly backend!: pulumi.Output<types.outputs.BackendConfigurationResponse | undefined>;
    /**
     * Information regarding the Configuration API of the API Management gateway. This is only applicable for API gateway with Standard SKU.
     */
    public /*out*/ readonly configurationApi!: pulumi.Output<types.outputs.GatewayConfigurationApiResponse | undefined>;
    /**
     * Creation UTC date of the API Management gateway.The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     */
    public /*out*/ readonly createdAtUtc!: pulumi.Output<string>;
    /**
     * ETag of the resource.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Information regarding how the gateway should be exposed.
     */
    public /*out*/ readonly frontend!: pulumi.Output<types.outputs.FrontendConfigurationResponse | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The current provisioning state of the API Management gateway which can be one of the following: Created/Activating/Succeeded/Updating/Failed/Stopped/Terminating/TerminationFailed/Deleted.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * SKU properties of the API Management gateway.
     */
    public readonly sku!: pulumi.Output<types.outputs.ApiManagementGatewaySkuPropertiesResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The provisioning state of the API Management gateway, which is targeted by the long running operation started on the gateway.
     */
    public /*out*/ readonly targetProvisioningState!: pulumi.Output<string>;
    /**
     * Resource type for API Management resource is set to Microsoft.ApiManagement.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The type of VPN in which API Management gateway needs to be configured in. 
     */
    public readonly virtualNetworkType!: pulumi.Output<string | undefined>;

    /**
     * Create a ApiGateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiGatewayArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sku'");
            }
            resourceInputs["backend"] = args ? args.backend : undefined;
            resourceInputs["gatewayName"] = args ? args.gatewayName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["virtualNetworkType"] = args ? args.virtualNetworkType : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["configurationApi"] = undefined /*out*/;
            resourceInputs["createdAtUtc"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["frontend"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["targetProvisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["backend"] = undefined /*out*/;
            resourceInputs["configurationApi"] = undefined /*out*/;
            resourceInputs["createdAtUtc"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["frontend"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["targetProvisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualNetworkType"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement/v20230901preview:ApiGateway" }, { type: "azure-native:apimanagement/v20240501:ApiGateway" }, { type: "azure-native:apimanagement/v20240601preview:ApiGateway" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ApiGateway.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ApiGateway resource.
 */
export interface ApiGatewayArgs {
    /**
     * Information regarding how the gateway should integrate with backend systems.
     */
    backend?: pulumi.Input<types.inputs.BackendConfigurationArgs>;
    /**
     * The name of the API Management gateway.
     */
    gatewayName?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * SKU properties of the API Management gateway.
     */
    sku: pulumi.Input<types.inputs.ApiManagementGatewaySkuPropertiesArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The type of VPN in which API Management gateway needs to be configured in. 
     */
    virtualNetworkType?: pulumi.Input<string | types.enums.VirtualNetworkType>;
}