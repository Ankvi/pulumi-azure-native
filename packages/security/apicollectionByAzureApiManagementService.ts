import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * An API collection as represented by Microsoft Defender for APIs.
 *
 * Uses Azure REST API version 2023-11-15. In version 2.x of the Azure Native provider, it used API version 2023-11-15.
 */
export class APICollectionByAzureApiManagementService extends pulumi.CustomResource {
    /**
     * Get an existing APICollectionByAzureApiManagementService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): APICollectionByAzureApiManagementService {
        return new APICollectionByAzureApiManagementService(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:security:APICollectionByAzureApiManagementService';

    /**
     * Returns true if the given object is an instance of APICollectionByAzureApiManagementService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is APICollectionByAzureApiManagementService {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === APICollectionByAzureApiManagementService.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The base URI for this API collection. All endpoints of this API collection extend this base URI.
     */
    public /*out*/ readonly baseUrl!: pulumi.Output<string>;
    /**
     * The resource Id of the resource from where this API collection was discovered.
     */
    public /*out*/ readonly discoveredVia!: pulumi.Output<string>;
    /**
     * The display name of the API collection.
     */
    public /*out*/ readonly displayName!: pulumi.Output<string>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The number of API endpoints discovered in this API collection.
     */
    public /*out*/ readonly numberOfApiEndpoints!: pulumi.Output<number>;
    /**
     * The number of API endpoints in this API collection which are exposing sensitive data in their requests and/or responses.
     */
    public /*out*/ readonly numberOfApiEndpointsWithSensitiveDataExposed!: pulumi.Output<number>;
    /**
     * The number of API endpoints in this API collection for which API traffic from the internet was observed.
     */
    public /*out*/ readonly numberOfExternalApiEndpoints!: pulumi.Output<number>;
    /**
     * The number of API endpoints in this API collection that have not received any API traffic in the last 30 days.
     */
    public /*out*/ readonly numberOfInactiveApiEndpoints!: pulumi.Output<number>;
    /**
     * The number of API endpoints in this API collection that are unauthenticated.
     */
    public /*out*/ readonly numberOfUnauthenticatedApiEndpoints!: pulumi.Output<number>;
    /**
     * Gets the provisioning state of the API collection.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The highest priority sensitivity label from Microsoft Purview in this API collection.
     */
    public /*out*/ readonly sensitivityLabel!: pulumi.Output<string>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a APICollectionByAzureApiManagementService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: APICollectionByAzureApiManagementServiceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["apiId"] = args ? args.apiId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["baseUrl"] = undefined /*out*/;
            resourceInputs["discoveredVia"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["numberOfApiEndpoints"] = undefined /*out*/;
            resourceInputs["numberOfApiEndpointsWithSensitiveDataExposed"] = undefined /*out*/;
            resourceInputs["numberOfExternalApiEndpoints"] = undefined /*out*/;
            resourceInputs["numberOfInactiveApiEndpoints"] = undefined /*out*/;
            resourceInputs["numberOfUnauthenticatedApiEndpoints"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sensitivityLabel"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["baseUrl"] = undefined /*out*/;
            resourceInputs["discoveredVia"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["numberOfApiEndpoints"] = undefined /*out*/;
            resourceInputs["numberOfApiEndpointsWithSensitiveDataExposed"] = undefined /*out*/;
            resourceInputs["numberOfExternalApiEndpoints"] = undefined /*out*/;
            resourceInputs["numberOfInactiveApiEndpoints"] = undefined /*out*/;
            resourceInputs["numberOfUnauthenticatedApiEndpoints"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sensitivityLabel"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:security/v20221120preview:APICollection" }, { type: "azure-native:security/v20221120preview:APICollectionByAzureApiManagementService" }, { type: "azure-native:security/v20231115:APICollectionByAzureApiManagementService" }, { type: "azure-native:security:APICollection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(APICollectionByAzureApiManagementService.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a APICollectionByAzureApiManagementService resource.
 */
export interface APICollectionByAzureApiManagementServiceArgs {
    /**
     * API revision identifier. Must be unique in the API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     */
    apiId?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}