import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Site REST Resource.
 *
 * Uses Azure REST API version 2020-07-07. In version 2.x of the Azure Native provider, it used API version 2020-07-07.
 */
export class Site extends pulumi.CustomResource {
    /**
     * Get an existing Site resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Site {
        return new Site(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:offazure:Site';

    /**
     * Returns true if the given object is an instance of Site.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Site {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Site.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * eTag for concurrency control.
     */
    public readonly eTag!: pulumi.Output<string | undefined>;
    /**
     * Azure location in which Sites is created.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Name of the VMware site.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * Nested properties of VMWare site.
     */
    public readonly properties!: pulumi.Output<types.outputs.SitePropertiesResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Type of resource. Type = Microsoft.OffAzure/VMWareSites.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Site resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SiteArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["eTag"] = args ? args.eTag : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["siteName"] = args ? args.siteName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["eTag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:offazure/v20200101:Site" }, { type: "azure-native:offazure/v20200707:Site" }, { type: "azure-native:offazure/v20230606:Site" }, { type: "azure-native:offazure/v20230606:SitesController" }, { type: "azure-native:offazure/v20231001preview:Site" }, { type: "azure-native:offazure/v20231001preview:SitesController" }, { type: "azure-native:offazure/v20240501preview:Site" }, { type: "azure-native:offazure/v20240501preview:SitesController" }, { type: "azure-native:offazure:SitesController" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Site.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Site resource.
 */
export interface SiteArgs {
    /**
     * eTag for concurrency control.
     */
    eTag?: pulumi.Input<string>;
    /**
     * Azure location in which Sites is created.
     */
    location?: pulumi.Input<string>;
    /**
     * Name of the VMware site.
     */
    name?: pulumi.Input<string>;
    /**
     * Nested properties of VMWare site.
     */
    properties?: pulumi.Input<types.inputs.SitePropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Site name.
     */
    siteName?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}