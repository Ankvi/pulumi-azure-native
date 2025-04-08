import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The streaming endpoint.
 *
 * Uses Azure REST API version 2022-11-01. In version 1.x of the Azure Native provider, it used API version 2020-05-01.
 *
 * Other available API versions: 2018-06-01-preview.
 */
export class StreamingEndpoint extends pulumi.CustomResource {
    /**
     * Get an existing StreamingEndpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): StreamingEndpoint {
        return new StreamingEndpoint(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:media:StreamingEndpoint';

    /**
     * Returns true if the given object is an instance of StreamingEndpoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StreamingEndpoint {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StreamingEndpoint.__pulumiType;
    }

    /**
     * The access control definition of the streaming endpoint.
     */
    public readonly accessControl!: pulumi.Output<types.outputs.StreamingEndpointAccessControlResponse | undefined>;
    /**
     * This feature is deprecated, do not set a value for this property.
     */
    public readonly availabilitySetName!: pulumi.Output<string | undefined>;
    /**
     * The CDN enabled flag.
     */
    public readonly cdnEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * The CDN profile name.
     */
    public readonly cdnProfile!: pulumi.Output<string | undefined>;
    /**
     * The CDN provider name.
     */
    public readonly cdnProvider!: pulumi.Output<string | undefined>;
    /**
     * The exact time the streaming endpoint was created.
     */
    public /*out*/ readonly created!: pulumi.Output<string>;
    /**
     * The streaming endpoint access policies.
     */
    public readonly crossSiteAccessPolicies!: pulumi.Output<types.outputs.CrossSiteAccessPoliciesResponse | undefined>;
    /**
     * The custom host names of the streaming endpoint
     */
    public readonly customHostNames!: pulumi.Output<string[] | undefined>;
    /**
     * The streaming endpoint description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The free trial expiration time.
     */
    public /*out*/ readonly freeTrialEndTime!: pulumi.Output<string>;
    /**
     * The streaming endpoint host name.
     */
    public /*out*/ readonly hostName!: pulumi.Output<string>;
    /**
     * The exact time the streaming endpoint was last modified.
     */
    public /*out*/ readonly lastModified!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Max cache age
     */
    public readonly maxCacheAge!: pulumi.Output<number | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the streaming endpoint.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The resource state of the streaming endpoint.
     */
    public /*out*/ readonly resourceState!: pulumi.Output<string>;
    /**
     * The number of scale units. Use the Scale operation to adjust this value.
     */
    public readonly scaleUnits!: pulumi.Output<number>;
    /**
     * The streaming endpoint sku.
     */
    public readonly sku!: pulumi.Output<types.outputs.ArmStreamingEndpointCurrentSkuResponse | undefined>;
    /**
     * The system metadata relating to this resource.
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
     * Create a StreamingEndpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StreamingEndpointArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.scaleUnits === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scaleUnits'");
            }
            resourceInputs["accessControl"] = args ? args.accessControl : undefined;
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["autoStart"] = args ? args.autoStart : undefined;
            resourceInputs["availabilitySetName"] = args ? args.availabilitySetName : undefined;
            resourceInputs["cdnEnabled"] = args ? args.cdnEnabled : undefined;
            resourceInputs["cdnProfile"] = args ? args.cdnProfile : undefined;
            resourceInputs["cdnProvider"] = args ? args.cdnProvider : undefined;
            resourceInputs["crossSiteAccessPolicies"] = args ? args.crossSiteAccessPolicies : undefined;
            resourceInputs["customHostNames"] = args ? args.customHostNames : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["maxCacheAge"] = args ? args.maxCacheAge : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scaleUnits"] = args ? args.scaleUnits : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["streamingEndpointName"] = args ? args.streamingEndpointName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["freeTrialEndTime"] = undefined /*out*/;
            resourceInputs["hostName"] = undefined /*out*/;
            resourceInputs["lastModified"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["accessControl"] = undefined /*out*/;
            resourceInputs["availabilitySetName"] = undefined /*out*/;
            resourceInputs["cdnEnabled"] = undefined /*out*/;
            resourceInputs["cdnProfile"] = undefined /*out*/;
            resourceInputs["cdnProvider"] = undefined /*out*/;
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["crossSiteAccessPolicies"] = undefined /*out*/;
            resourceInputs["customHostNames"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["freeTrialEndTime"] = undefined /*out*/;
            resourceInputs["hostName"] = undefined /*out*/;
            resourceInputs["lastModified"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["maxCacheAge"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceState"] = undefined /*out*/;
            resourceInputs["scaleUnits"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:media/v20180330preview:StreamingEndpoint" }, { type: "azure-native:media/v20180601preview:StreamingEndpoint" }, { type: "azure-native:media/v20180701:StreamingEndpoint" }, { type: "azure-native:media/v20190501preview:StreamingEndpoint" }, { type: "azure-native:media/v20200501:StreamingEndpoint" }, { type: "azure-native:media/v20210601:StreamingEndpoint" }, { type: "azure-native:media/v20211101:StreamingEndpoint" }, { type: "azure-native:media/v20220801:StreamingEndpoint" }, { type: "azure-native:media/v20221101:StreamingEndpoint" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(StreamingEndpoint.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a StreamingEndpoint resource.
 */
export interface StreamingEndpointArgs {
    /**
     * The access control definition of the streaming endpoint.
     */
    accessControl?: pulumi.Input<types.inputs.StreamingEndpointAccessControlArgs>;
    /**
     * The Media Services account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The flag indicates if the resource should be automatically started on creation.
     */
    autoStart?: pulumi.Input<boolean>;
    /**
     * This feature is deprecated, do not set a value for this property.
     */
    availabilitySetName?: pulumi.Input<string>;
    /**
     * The CDN enabled flag.
     */
    cdnEnabled?: pulumi.Input<boolean>;
    /**
     * The CDN profile name.
     */
    cdnProfile?: pulumi.Input<string>;
    /**
     * The CDN provider name.
     */
    cdnProvider?: pulumi.Input<string>;
    /**
     * The streaming endpoint access policies.
     */
    crossSiteAccessPolicies?: pulumi.Input<types.inputs.CrossSiteAccessPoliciesArgs>;
    /**
     * The custom host names of the streaming endpoint
     */
    customHostNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The streaming endpoint description.
     */
    description?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Max cache age
     */
    maxCacheAge?: pulumi.Input<number>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The number of scale units. Use the Scale operation to adjust this value.
     */
    scaleUnits: pulumi.Input<number>;
    /**
     * The streaming endpoint sku.
     */
    sku?: pulumi.Input<types.inputs.ArmStreamingEndpointCurrentSkuArgs>;
    /**
     * The name of the streaming endpoint, maximum length is 24.
     */
    streamingEndpointName?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}