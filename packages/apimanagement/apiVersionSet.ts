import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * API Version Set Contract details.
 *
 * Uses Azure REST API version 2022-09-01-preview. In version 2.x of the Azure Native provider, it used API version 2022-08-01.
 *
 * Other available API versions: 2021-04-01-preview, 2021-08-01, 2021-12-01-preview, 2022-04-01-preview, 2022-08-01, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class ApiVersionSet extends pulumi.CustomResource {
    /**
     * Get an existing ApiVersionSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ApiVersionSet {
        return new ApiVersionSet(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement:ApiVersionSet';

    /**
     * Returns true if the given object is an instance of ApiVersionSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApiVersionSet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApiVersionSet.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Description of API Version Set.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Name of API Version Set
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`.
     */
    public readonly versionHeaderName!: pulumi.Output<string | undefined>;
    /**
     * Name of query parameter that indicates the API Version if versioningScheme is set to `query`.
     */
    public readonly versionQueryName!: pulumi.Output<string | undefined>;
    /**
     * An value that determines where the API Version identifier will be located in a HTTP request.
     */
    public readonly versioningScheme!: pulumi.Output<string>;

    /**
     * Create a ApiVersionSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiVersionSetArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            if ((!args || args.versioningScheme === undefined) && !opts.urn) {
                throw new Error("Missing required property 'versioningScheme'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["versionHeaderName"] = args ? args.versionHeaderName : undefined;
            resourceInputs["versionQueryName"] = args ? args.versionQueryName : undefined;
            resourceInputs["versionSetId"] = args ? args.versionSetId : undefined;
            resourceInputs["versioningScheme"] = args ? args.versioningScheme : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["versionHeaderName"] = undefined /*out*/;
            resourceInputs["versionQueryName"] = undefined /*out*/;
            resourceInputs["versioningScheme"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement/v20170301:ApiVersionSet" }, { type: "azure-native:apimanagement/v20180101:ApiVersionSet" }, { type: "azure-native:apimanagement/v20180601preview:ApiVersionSet" }, { type: "azure-native:apimanagement/v20190101:ApiVersionSet" }, { type: "azure-native:apimanagement/v20191201:ApiVersionSet" }, { type: "azure-native:apimanagement/v20191201preview:ApiVersionSet" }, { type: "azure-native:apimanagement/v20200601preview:ApiVersionSet" }, { type: "azure-native:apimanagement/v20201201:ApiVersionSet" }, { type: "azure-native:apimanagement/v20210101preview:ApiVersionSet" }, { type: "azure-native:apimanagement/v20210401preview:ApiVersionSet" }, { type: "azure-native:apimanagement/v20210801:ApiVersionSet" }, { type: "azure-native:apimanagement/v20211201preview:ApiVersionSet" }, { type: "azure-native:apimanagement/v20220401preview:ApiVersionSet" }, { type: "azure-native:apimanagement/v20220801:ApiVersionSet" }, { type: "azure-native:apimanagement/v20220901preview:ApiVersionSet" }, { type: "azure-native:apimanagement/v20230301preview:ApiVersionSet" }, { type: "azure-native:apimanagement/v20230501preview:ApiVersionSet" }, { type: "azure-native:apimanagement/v20230901preview:ApiVersionSet" }, { type: "azure-native:apimanagement/v20240501:ApiVersionSet" }, { type: "azure-native:apimanagement/v20240601preview:ApiVersionSet" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ApiVersionSet.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ApiVersionSet resource.
 */
export interface ApiVersionSetArgs {
    /**
     * Description of API Version Set.
     */
    description?: pulumi.Input<string>;
    /**
     * Name of API Version Set
     */
    displayName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`.
     */
    versionHeaderName?: pulumi.Input<string>;
    /**
     * Name of query parameter that indicates the API Version if versioningScheme is set to `query`.
     */
    versionQueryName?: pulumi.Input<string>;
    /**
     * Api Version Set identifier. Must be unique in the current API Management service instance.
     */
    versionSetId?: pulumi.Input<string>;
    /**
     * An value that determines where the API Version identifier will be located in a HTTP request.
     */
    versioningScheme: pulumi.Input<string | types.enums.VersioningScheme>;
}