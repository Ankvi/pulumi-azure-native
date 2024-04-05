import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Live Event.
 */
export class LiveEvent extends pulumi.CustomResource {
    /**
     * Get an existing LiveEvent resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): LiveEvent {
        return new LiveEvent(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:media/v20180601preview:LiveEvent';

    /**
     * Returns true if the given object is an instance of LiveEvent.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LiveEvent {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LiveEvent.__pulumiType;
    }

    /**
     * The exact time the Live Event was created.
     */
    public /*out*/ readonly created!: pulumi.Output<string>;
    /**
     * The Live Event access policies.
     */
    public readonly crossSiteAccessPolicies!: pulumi.Output<types.outputs.CrossSiteAccessPoliciesResponse | undefined>;
    /**
     * The Live Event description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The Live Event encoding.
     */
    public readonly encoding!: pulumi.Output<types.outputs.LiveEventEncodingResponse | undefined>;
    /**
     * The Live Event input.
     */
    public readonly input!: pulumi.Output<types.outputs.LiveEventInputResponse>;
    /**
     * The exact time the Live Event was last modified.
     */
    public /*out*/ readonly lastModified!: pulumi.Output<string>;
    /**
     * The Azure Region of the resource.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The Live Event preview.
     */
    public readonly preview!: pulumi.Output<types.outputs.LiveEventPreviewResponse | undefined>;
    /**
     * The provisioning state of the Live Event.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The resource state of the Live Event.
     */
    public /*out*/ readonly resourceState!: pulumi.Output<string>;
    /**
     * The stream options.
     */
    public readonly streamOptions!: pulumi.Output<string[] | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The Live Event vanity URL flag.
     */
    public readonly vanityUrl!: pulumi.Output<boolean | undefined>;

    /**
     * Create a LiveEvent resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LiveEventArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.input === undefined) && !opts.urn) {
                throw new Error("Missing required property 'input'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["autoStart"] = args ? args.autoStart : undefined;
            resourceInputs["crossSiteAccessPolicies"] = args ? args.crossSiteAccessPolicies : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["encoding"] = args ? args.encoding : undefined;
            resourceInputs["input"] = args ? args.input : undefined;
            resourceInputs["liveEventName"] = args ? args.liveEventName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["preview"] = args ? args.preview : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["streamOptions"] = args ? args.streamOptions : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vanityUrl"] = args ? args.vanityUrl : undefined;
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["lastModified"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["crossSiteAccessPolicies"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["encoding"] = undefined /*out*/;
            resourceInputs["input"] = undefined /*out*/;
            resourceInputs["lastModified"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["preview"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceState"] = undefined /*out*/;
            resourceInputs["streamOptions"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vanityUrl"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:media:LiveEvent" }, { type: "azure-native:media/v20180330preview:LiveEvent" }, { type: "azure-native:media/v20180701:LiveEvent" }, { type: "azure-native:media/v20190501preview:LiveEvent" }, { type: "azure-native:media/v20200501:LiveEvent" }, { type: "azure-native:media/v20210601:LiveEvent" }, { type: "azure-native:media/v20211101:LiveEvent" }, { type: "azure-native:media/v20220801:LiveEvent" }, { type: "azure-native:media/v20221101:LiveEvent" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(LiveEvent.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a LiveEvent resource.
 */
export interface LiveEventArgs {
    /**
     * The Media Services account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The flag indicates if auto start the Live Event.
     */
    autoStart?: pulumi.Input<boolean>;
    /**
     * The Live Event access policies.
     */
    crossSiteAccessPolicies?: pulumi.Input<types.inputs.CrossSiteAccessPoliciesArgs>;
    /**
     * The Live Event description.
     */
    description?: pulumi.Input<string>;
    /**
     * The Live Event encoding.
     */
    encoding?: pulumi.Input<types.inputs.LiveEventEncodingArgs>;
    /**
     * The Live Event input.
     */
    input: pulumi.Input<types.inputs.LiveEventInputArgs>;
    /**
     * The name of the Live Event.
     */
    liveEventName?: pulumi.Input<string>;
    /**
     * The Azure Region of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The Live Event preview.
     */
    preview?: pulumi.Input<types.inputs.LiveEventPreviewArgs>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The stream options.
     */
    streamOptions?: pulumi.Input<pulumi.Input<types.enums.StreamOptionsFlag>[]>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The Live Event vanity URL flag.
     */
    vanityUrl?: pulumi.Input<boolean>;
}