import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * ApiRelease details.
 *
 * Uses Azure REST API version 2022-09-01-preview. In version 2.x of the Azure Native provider, it used API version 2022-08-01.
 *
 * Other available API versions: 2021-04-01-preview, 2021-08-01, 2021-12-01-preview, 2022-04-01-preview, 2022-08-01, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class ApiRelease extends pulumi.CustomResource {
    /**
     * Get an existing ApiRelease resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ApiRelease {
        return new ApiRelease(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement:ApiRelease';

    /**
     * Returns true if the given object is an instance of ApiRelease.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApiRelease {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApiRelease.__pulumiType;
    }

    /**
     * Identifier of the API the release belongs to.
     */
    public readonly apiId!: pulumi.Output<string | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The time the API was released. The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard.
     */
    public /*out*/ readonly createdDateTime!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Release Notes
     */
    public readonly notes!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The time the API release was updated.
     */
    public /*out*/ readonly updatedDateTime!: pulumi.Output<string>;

    /**
     * Create a ApiRelease resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiReleaseArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["notes"] = args ? args.notes : undefined;
            resourceInputs["releaseId"] = args ? args.releaseId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["createdDateTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedDateTime"] = undefined /*out*/;
        } else {
            resourceInputs["apiId"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["createdDateTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["notes"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedDateTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement/v20170301:ApiRelease" }, { type: "azure-native:apimanagement/v20180101:ApiRelease" }, { type: "azure-native:apimanagement/v20180601preview:ApiRelease" }, { type: "azure-native:apimanagement/v20190101:ApiRelease" }, { type: "azure-native:apimanagement/v20191201:ApiRelease" }, { type: "azure-native:apimanagement/v20191201preview:ApiRelease" }, { type: "azure-native:apimanagement/v20200601preview:ApiRelease" }, { type: "azure-native:apimanagement/v20201201:ApiRelease" }, { type: "azure-native:apimanagement/v20210101preview:ApiRelease" }, { type: "azure-native:apimanagement/v20210401preview:ApiRelease" }, { type: "azure-native:apimanagement/v20210801:ApiRelease" }, { type: "azure-native:apimanagement/v20211201preview:ApiRelease" }, { type: "azure-native:apimanagement/v20220401preview:ApiRelease" }, { type: "azure-native:apimanagement/v20220801:ApiRelease" }, { type: "azure-native:apimanagement/v20220901preview:ApiRelease" }, { type: "azure-native:apimanagement/v20230301preview:ApiRelease" }, { type: "azure-native:apimanagement/v20230501preview:ApiRelease" }, { type: "azure-native:apimanagement/v20230901preview:ApiRelease" }, { type: "azure-native:apimanagement/v20240501:ApiRelease" }, { type: "azure-native:apimanagement/v20240601preview:ApiRelease" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ApiRelease.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ApiRelease resource.
 */
export interface ApiReleaseArgs {
    /**
     * Identifier of the API the release belongs to.
     */
    apiId: pulumi.Input<string>;
    /**
     * Release Notes
     */
    notes?: pulumi.Input<string>;
    /**
     * Release identifier within an API. Must be unique in the current API Management service instance.
     */
    releaseId?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}