import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Contract details.
 *
 * Uses Azure REST API version 2022-09-01-preview. In version 2.x of the Azure Native provider, it used API version 2022-08-01.
 *
 * Other available API versions: 2021-04-01-preview, 2021-08-01, 2021-12-01-preview, 2022-04-01-preview, 2022-08-01, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class ApiTagDescription extends pulumi.CustomResource {
    /**
     * Get an existing ApiTagDescription resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ApiTagDescription {
        return new ApiTagDescription(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement:ApiTagDescription';

    /**
     * Returns true if the given object is an instance of ApiTagDescription.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApiTagDescription {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApiTagDescription.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Description of the Tag.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Tag name.
     */
    public /*out*/ readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * Description of the external resources describing the tag.
     */
    public readonly externalDocsDescription!: pulumi.Output<string | undefined>;
    /**
     * Absolute URL of external resources describing the tag.
     */
    public readonly externalDocsUrl!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Identifier of the tag in the form of /tags/{tagId}
     */
    public /*out*/ readonly tagId!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ApiTagDescription resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiTagDescriptionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.apiId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["apiId"] = args ? args.apiId : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["externalDocsDescription"] = args ? args.externalDocsDescription : undefined;
            resourceInputs["externalDocsUrl"] = args ? args.externalDocsUrl : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["tagDescriptionId"] = args ? args.tagDescriptionId : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["tagId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["externalDocsDescription"] = undefined /*out*/;
            resourceInputs["externalDocsUrl"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["tagId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement/v20170301:ApiTagDescription" }, { type: "azure-native:apimanagement/v20180101:ApiTagDescription" }, { type: "azure-native:apimanagement/v20180601preview:ApiTagDescription" }, { type: "azure-native:apimanagement/v20180601preview:TagDescription" }, { type: "azure-native:apimanagement/v20190101:ApiTagDescription" }, { type: "azure-native:apimanagement/v20191201:ApiTagDescription" }, { type: "azure-native:apimanagement/v20191201preview:ApiTagDescription" }, { type: "azure-native:apimanagement/v20200601preview:ApiTagDescription" }, { type: "azure-native:apimanagement/v20201201:ApiTagDescription" }, { type: "azure-native:apimanagement/v20210101preview:ApiTagDescription" }, { type: "azure-native:apimanagement/v20210401preview:ApiTagDescription" }, { type: "azure-native:apimanagement/v20210801:ApiTagDescription" }, { type: "azure-native:apimanagement/v20211201preview:ApiTagDescription" }, { type: "azure-native:apimanagement/v20220401preview:ApiTagDescription" }, { type: "azure-native:apimanagement/v20220801:ApiTagDescription" }, { type: "azure-native:apimanagement/v20220901preview:ApiTagDescription" }, { type: "azure-native:apimanagement/v20230301preview:ApiTagDescription" }, { type: "azure-native:apimanagement/v20230501preview:ApiTagDescription" }, { type: "azure-native:apimanagement/v20230901preview:ApiTagDescription" }, { type: "azure-native:apimanagement/v20240501:ApiTagDescription" }, { type: "azure-native:apimanagement/v20240601preview:ApiTagDescription" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ApiTagDescription.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ApiTagDescription resource.
 */
export interface ApiTagDescriptionArgs {
    /**
     * API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     */
    apiId: pulumi.Input<string>;
    /**
     * Description of the Tag.
     */
    description?: pulumi.Input<string>;
    /**
     * Description of the external resources describing the tag.
     */
    externalDocsDescription?: pulumi.Input<string>;
    /**
     * Absolute URL of external resources describing the tag.
     */
    externalDocsUrl?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Tag description identifier. Used when creating tagDescription for API/Tag association. Based on API and Tag names.
     */
    tagDescriptionId?: pulumi.Input<string>;
}