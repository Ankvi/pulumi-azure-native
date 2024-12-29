import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A VmwareSite
 * Azure REST API version: 2023-06-06.
 *
 * Other available API versions: 2023-10-01-preview, 2024-05-01-preview.
 */
export class SitesController extends pulumi.CustomResource {
    /**
     * Get an existing SitesController resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SitesController {
        return new SitesController(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:offazure:SitesController';

    /**
     * Returns true if the given object is an instance of SitesController.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SitesController {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SitesController.__pulumiType;
    }

    /**
     * Gets or sets the on-premises agent details.
     */
    public readonly agentDetails!: pulumi.Output<types.outputs.SiteAgentPropertiesResponse | undefined>;
    /**
     * Gets or sets the Appliance Name.
     */
    public readonly applianceName!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the ARM ID of migration hub solution for SDS.
     */
    public readonly discoverySolutionId!: pulumi.Output<string | undefined>;
    /**
     * If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
     */
    public /*out*/ readonly eTag!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Gets the Master Site this site is linked to.
     */
    public /*out*/ readonly masterSiteId!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The status of the last operation.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Gets the service endpoint.
     */
    public /*out*/ readonly serviceEndpoint!: pulumi.Output<string>;
    /**
     * Gets or sets the service principal identity details used by agent for
     * communication
     *             to the service.
     */
    public readonly servicePrincipalIdentityDetails!: pulumi.Output<types.outputs.SiteSpnPropertiesResponse | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SitesController resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SitesControllerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["agentDetails"] = args ? args.agentDetails : undefined;
            resourceInputs["applianceName"] = args ? args.applianceName : undefined;
            resourceInputs["discoverySolutionId"] = args ? args.discoverySolutionId : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["servicePrincipalIdentityDetails"] = args ? args.servicePrincipalIdentityDetails : undefined;
            resourceInputs["siteName"] = args ? args.siteName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["eTag"] = undefined /*out*/;
            resourceInputs["masterSiteId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["serviceEndpoint"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["agentDetails"] = undefined /*out*/;
            resourceInputs["applianceName"] = undefined /*out*/;
            resourceInputs["discoverySolutionId"] = undefined /*out*/;
            resourceInputs["eTag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["masterSiteId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["serviceEndpoint"] = undefined /*out*/;
            resourceInputs["servicePrincipalIdentityDetails"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:offazure/v20200101:SitesController" }, { type: "azure-native:offazure/v20200707:SitesController" }, { type: "azure-native:offazure/v20230606:SitesController" }, { type: "azure-native:offazure/v20231001preview:SitesController" }, { type: "azure-native:offazure/v20240501preview:SitesController" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SitesController.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SitesController resource.
 */
export interface SitesControllerArgs {
    /**
     * Gets or sets the on-premises agent details.
     */
    agentDetails?: pulumi.Input<types.inputs.SiteAgentPropertiesArgs>;
    /**
     * Gets or sets the Appliance Name.
     */
    applianceName?: pulumi.Input<string>;
    /**
     * Gets or sets the ARM ID of migration hub solution for SDS.
     */
    discoverySolutionId?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Gets or sets the service principal identity details used by agent for
     * communication
     *             to the service.
     */
    servicePrincipalIdentityDetails?: pulumi.Input<types.inputs.SiteSpnPropertiesArgs>;
    /**
     * Site name
     */
    siteName?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}