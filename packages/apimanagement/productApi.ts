import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * API details.
 *
 * Uses Azure REST API version 2022-09-01-preview. In version 2.x of the Azure Native provider, it used API version 2022-08-01.
 *
 * Other available API versions: 2021-04-01-preview, 2021-08-01, 2021-12-01-preview, 2022-04-01-preview, 2022-08-01, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class ProductApi extends pulumi.CustomResource {
    /**
     * Get an existing ProductApi resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ProductApi {
        return new ProductApi(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement:ProductApi';

    /**
     * Returns true if the given object is an instance of ProductApi.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ProductApi {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ProductApi.__pulumiType;
    }

    /**
     * Describes the revision of the API. If no value is provided, default revision 1 is created
     */
    public /*out*/ readonly apiRevision!: pulumi.Output<string | undefined>;
    /**
     * Description of the API Revision.
     */
    public /*out*/ readonly apiRevisionDescription!: pulumi.Output<string | undefined>;
    /**
     * Type of API.
     */
    public /*out*/ readonly apiType!: pulumi.Output<string | undefined>;
    /**
     * Indicates the version identifier of the API if the API is versioned
     */
    public /*out*/ readonly apiVersion!: pulumi.Output<string | undefined>;
    /**
     * Description of the API Version.
     */
    public /*out*/ readonly apiVersionDescription!: pulumi.Output<string | undefined>;
    /**
     * Version set details
     */
    public /*out*/ readonly apiVersionSet!: pulumi.Output<types.outputs.ApiVersionSetContractDetailsResponse | undefined>;
    /**
     * A resource identifier for the related ApiVersionSet.
     */
    public /*out*/ readonly apiVersionSetId!: pulumi.Output<string | undefined>;
    /**
     * Collection of authentication settings included into this API.
     */
    public /*out*/ readonly authenticationSettings!: pulumi.Output<types.outputs.AuthenticationSettingsContractResponse | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Contact information for the API.
     */
    public /*out*/ readonly contact!: pulumi.Output<types.outputs.ApiContactInformationResponse | undefined>;
    /**
     * Description of the API. May include HTML formatting tags.
     */
    public /*out*/ readonly description!: pulumi.Output<string | undefined>;
    /**
     * API name. Must be 1 to 300 characters long.
     */
    public /*out*/ readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * Indicates if API revision is current api revision.
     */
    public /*out*/ readonly isCurrent!: pulumi.Output<boolean | undefined>;
    /**
     * Indicates if API revision is accessible via the gateway.
     */
    public /*out*/ readonly isOnline!: pulumi.Output<boolean>;
    /**
     * License information for the API.
     */
    public /*out*/ readonly license!: pulumi.Output<types.outputs.ApiLicenseInformationResponse | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API.
     */
    public /*out*/ readonly path!: pulumi.Output<string>;
    /**
     * Describes on which protocols the operations in this API can be invoked.
     */
    public /*out*/ readonly protocols!: pulumi.Output<string[] | undefined>;
    /**
     * Absolute URL of the backend service implementing this API. Cannot be more than 2000 characters long.
     */
    public /*out*/ readonly serviceUrl!: pulumi.Output<string | undefined>;
    /**
     * API identifier of the source API.
     */
    public /*out*/ readonly sourceApiId!: pulumi.Output<string | undefined>;
    /**
     * Protocols over which API is made available.
     */
    public /*out*/ readonly subscriptionKeyParameterNames!: pulumi.Output<types.outputs.SubscriptionKeyParameterNamesContractResponse | undefined>;
    /**
     * Specifies whether an API or Product subscription is required for accessing the API.
     */
    public /*out*/ readonly subscriptionRequired!: pulumi.Output<boolean | undefined>;
    /**
     *  A URL to the Terms of Service for the API. MUST be in the format of a URL.
     */
    public /*out*/ readonly termsOfServiceUrl!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ProductApi resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProductApiArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.productId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'productId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["apiId"] = args ? args.apiId : undefined;
            resourceInputs["productId"] = args ? args.productId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["apiRevision"] = undefined /*out*/;
            resourceInputs["apiRevisionDescription"] = undefined /*out*/;
            resourceInputs["apiType"] = undefined /*out*/;
            resourceInputs["apiVersion"] = undefined /*out*/;
            resourceInputs["apiVersionDescription"] = undefined /*out*/;
            resourceInputs["apiVersionSet"] = undefined /*out*/;
            resourceInputs["apiVersionSetId"] = undefined /*out*/;
            resourceInputs["authenticationSettings"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["contact"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["isCurrent"] = undefined /*out*/;
            resourceInputs["isOnline"] = undefined /*out*/;
            resourceInputs["license"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["path"] = undefined /*out*/;
            resourceInputs["protocols"] = undefined /*out*/;
            resourceInputs["serviceUrl"] = undefined /*out*/;
            resourceInputs["sourceApiId"] = undefined /*out*/;
            resourceInputs["subscriptionKeyParameterNames"] = undefined /*out*/;
            resourceInputs["subscriptionRequired"] = undefined /*out*/;
            resourceInputs["termsOfServiceUrl"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["apiRevision"] = undefined /*out*/;
            resourceInputs["apiRevisionDescription"] = undefined /*out*/;
            resourceInputs["apiType"] = undefined /*out*/;
            resourceInputs["apiVersion"] = undefined /*out*/;
            resourceInputs["apiVersionDescription"] = undefined /*out*/;
            resourceInputs["apiVersionSet"] = undefined /*out*/;
            resourceInputs["apiVersionSetId"] = undefined /*out*/;
            resourceInputs["authenticationSettings"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["contact"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["isCurrent"] = undefined /*out*/;
            resourceInputs["isOnline"] = undefined /*out*/;
            resourceInputs["license"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["path"] = undefined /*out*/;
            resourceInputs["protocols"] = undefined /*out*/;
            resourceInputs["serviceUrl"] = undefined /*out*/;
            resourceInputs["sourceApiId"] = undefined /*out*/;
            resourceInputs["subscriptionKeyParameterNames"] = undefined /*out*/;
            resourceInputs["subscriptionRequired"] = undefined /*out*/;
            resourceInputs["termsOfServiceUrl"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement/v20170301:ProductApi" }, { type: "azure-native:apimanagement/v20180101:ProductApi" }, { type: "azure-native:apimanagement/v20180601preview:ProductApi" }, { type: "azure-native:apimanagement/v20190101:ProductApi" }, { type: "azure-native:apimanagement/v20191201:ProductApi" }, { type: "azure-native:apimanagement/v20191201preview:ProductApi" }, { type: "azure-native:apimanagement/v20200601preview:ProductApi" }, { type: "azure-native:apimanagement/v20201201:ProductApi" }, { type: "azure-native:apimanagement/v20210101preview:ProductApi" }, { type: "azure-native:apimanagement/v20210401preview:ProductApi" }, { type: "azure-native:apimanagement/v20210801:ProductApi" }, { type: "azure-native:apimanagement/v20211201preview:ProductApi" }, { type: "azure-native:apimanagement/v20220401preview:ProductApi" }, { type: "azure-native:apimanagement/v20220801:ProductApi" }, { type: "azure-native:apimanagement/v20220901preview:ProductApi" }, { type: "azure-native:apimanagement/v20230301preview:ProductApi" }, { type: "azure-native:apimanagement/v20230501preview:ProductApi" }, { type: "azure-native:apimanagement/v20230901preview:ProductApi" }, { type: "azure-native:apimanagement/v20240501:ProductApi" }, { type: "azure-native:apimanagement/v20240601preview:ProductApi" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ProductApi.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ProductApi resource.
 */
export interface ProductApiArgs {
    /**
     * API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     */
    apiId?: pulumi.Input<string>;
    /**
     * Product identifier. Must be unique in the current API Management service instance.
     */
    productId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}