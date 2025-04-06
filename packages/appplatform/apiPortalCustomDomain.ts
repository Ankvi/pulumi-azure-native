import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Custom domain of the API portal
 *
 * Uses Azure REST API version 2024-01-01-preview. In version 2.x of the Azure Native provider, it used API version 2023-05-01-preview.
 *
 * Other available API versions: 2023-05-01-preview, 2023-07-01-preview, 2023-09-01-preview, 2023-11-01-preview, 2023-12-01, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native appplatform [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class ApiPortalCustomDomain extends pulumi.CustomResource {
    /**
     * Get an existing ApiPortalCustomDomain resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ApiPortalCustomDomain {
        return new ApiPortalCustomDomain(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:appplatform:ApiPortalCustomDomain';

    /**
     * Returns true if the given object is an instance of ApiPortalCustomDomain.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApiPortalCustomDomain {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApiPortalCustomDomain.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The properties of custom domain for API portal
     */
    public readonly properties!: pulumi.Output<types.outputs.ApiPortalCustomDomainPropertiesResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ApiPortalCustomDomain resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiPortalCustomDomainArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.apiPortalName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiPortalName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["apiPortalName"] = args ? args.apiPortalName : undefined;
            resourceInputs["domainName"] = args ? args.domainName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:appplatform/v20220101preview:ApiPortalCustomDomain" }, { type: "azure-native:appplatform/v20220301preview:ApiPortalCustomDomain" }, { type: "azure-native:appplatform/v20220501preview:ApiPortalCustomDomain" }, { type: "azure-native:appplatform/v20220901preview:ApiPortalCustomDomain" }, { type: "azure-native:appplatform/v20221101preview:ApiPortalCustomDomain" }, { type: "azure-native:appplatform/v20221201:ApiPortalCustomDomain" }, { type: "azure-native:appplatform/v20230101preview:ApiPortalCustomDomain" }, { type: "azure-native:appplatform/v20230301preview:ApiPortalCustomDomain" }, { type: "azure-native:appplatform/v20230501preview:ApiPortalCustomDomain" }, { type: "azure-native:appplatform/v20230701preview:ApiPortalCustomDomain" }, { type: "azure-native:appplatform/v20230901preview:ApiPortalCustomDomain" }, { type: "azure-native:appplatform/v20231101preview:ApiPortalCustomDomain" }, { type: "azure-native:appplatform/v20231201:ApiPortalCustomDomain" }, { type: "azure-native:appplatform/v20240101preview:ApiPortalCustomDomain" }, { type: "azure-native:appplatform/v20240501preview:ApiPortalCustomDomain" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ApiPortalCustomDomain.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ApiPortalCustomDomain resource.
 */
export interface ApiPortalCustomDomainArgs {
    /**
     * The name of API portal.
     */
    apiPortalName: pulumi.Input<string>;
    /**
     * The name of the API portal custom domain.
     */
    domainName?: pulumi.Input<string>;
    /**
     * The properties of custom domain for API portal
     */
    properties?: pulumi.Input<types.inputs.ApiPortalCustomDomainPropertiesArgs>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Service resource.
     */
    serviceName: pulumi.Input<string>;
}