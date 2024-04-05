import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The StreamingEndpoint.
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
    public static readonly __pulumiType = 'azure-native:media/v20180601preview:StreamingEndpoint';

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
     * The access control definition of the StreamingEndpoint.
     */
    public readonly accessControl!: pulumi.Output<types.outputs.StreamingEndpointAccessControlResponse | undefined>;
    /**
     * AvailabilitySet name
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
     * The exact time the StreamingEndpoint was created.
     */
    public /*out*/ readonly created!: pulumi.Output<string>;
    /**
     * The StreamingEndpoint access policies.
     */
    public readonly crossSiteAccessPolicies!: pulumi.Output<types.outputs.CrossSiteAccessPoliciesResponse | undefined>;
    /**
     * The custom host names of the StreamingEndpoint
     */
    public readonly customHostNames!: pulumi.Output<string[] | undefined>;
    /**
     * The StreamingEndpoint description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The free trial expiration time.
     */
    public /*out*/ readonly freeTrialEndTime!: pulumi.Output<string>;
    /**
     * The StreamingEndpoint host name.
     */
    public /*out*/ readonly hostName!: pulumi.Output<string>;
    /**
     * The exact time the StreamingEndpoint was last modified.
     */
    public /*out*/ readonly lastModified!: pulumi.Output<string>;
    /**
     * The Azure Region of the resource.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Max cache age
     */
    public readonly maxCacheAge!: pulumi.Output<number | undefined>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the StreamingEndpoint.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The resource state of the StreamingEndpoint.
     */
    public /*out*/ readonly resourceState!: pulumi.Output<string>;
    /**
     * The number of scale units.
     */
    public readonly scaleUnits!: pulumi.Output<number | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource.
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
            resourceInputs["streamingEndpointName"] = args ? args.streamingEndpointName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["freeTrialEndTime"] = undefined /*out*/;
            resourceInputs["hostName"] = undefined /*out*/;
            resourceInputs["lastModified"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceState"] = undefined /*out*/;
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
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:media:StreamingEndpoint" }, { type: "azure-native:media/v20180330preview:StreamingEndpoint" }, { type: "azure-native:media/v20180701:StreamingEndpoint" }, { type: "azure-native:media/v20190501preview:StreamingEndpoint" }, { type: "azure-native:media/v20200501:StreamingEndpoint" }, { type: "azure-native:media/v20210601:StreamingEndpoint" }, { type: "azure-native:media/v20211101:StreamingEndpoint" }, { type: "azure-native:media/v20220801:StreamingEndpoint" }, { type: "azure-native:media/v20221101:StreamingEndpoint" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(StreamingEndpoint.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a StreamingEndpoint resource.
 */
export interface StreamingEndpointArgs {
    /**
     * The access control definition of the StreamingEndpoint.
     */
    accessControl?: pulumi.Input<types.inputs.StreamingEndpointAccessControlArgs>;
    /**
     * The Media Services account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The flag indicates if auto start the Live Event.
     */
    autoStart?: pulumi.Input<boolean>;
    /**
     * AvailabilitySet name
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
     * The StreamingEndpoint access policies.
     */
    crossSiteAccessPolicies?: pulumi.Input<types.inputs.CrossSiteAccessPoliciesArgs>;
    /**
     * The custom host names of the StreamingEndpoint
     */
    customHostNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The StreamingEndpoint description.
     */
    description?: pulumi.Input<string>;
    /**
     * The Azure Region of the resource.
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
     * The number of scale units.
     */
    scaleUnits?: pulumi.Input<number>;
    /**
     * The name of the StreamingEndpoint.
     */
    streamingEndpointName?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}