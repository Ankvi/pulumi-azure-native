import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * An API collection as represented by Defender for APIs.
 *
 * Uses Azure REST API version 2022-11-20-preview. In version 2.x of the Azure Native provider, it used API version 2022-11-20-preview.
 */
export class APICollection extends pulumi.CustomResource {
    /**
     * Get an existing APICollection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): APICollection {
        return new APICollection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:security:APICollection';

    /**
     * Returns true if the given object is an instance of APICollection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is APICollection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === APICollection.__pulumiType;
    }

    /**
     * Additional data regarding the API collection.
     */
    public /*out*/ readonly additionalData!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The display name of the Azure API Management API.
     */
    public /*out*/ readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a APICollection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: APICollectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["apiCollectionId"] = args ? args.apiCollectionId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["additionalData"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["additionalData"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:security/v20221120preview:APICollection" }, { type: "azure-native:security/v20231115:APICollection" }, { type: "azure-native:security/v20231115:APICollectionByAzureApiManagementService" }, { type: "azure-native:security:APICollectionByAzureApiManagementService" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(APICollection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a APICollection resource.
 */
export interface APICollectionArgs {
    /**
     * A string representing the apiCollections resource within the Microsoft.Security provider namespace. This string matches the Azure API Management API name.
     */
    apiCollectionId?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}