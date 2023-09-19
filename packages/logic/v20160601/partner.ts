import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The integration account partner.
 */
export class Partner extends pulumi.CustomResource {
    /**
     * Get an existing Partner resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Partner {
        return new Partner(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:logic/v20160601:Partner';

    /**
     * Returns true if the given object is an instance of Partner.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Partner {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Partner.__pulumiType;
    }

    /**
     * The changed time.
     */
    public /*out*/ readonly changedTime!: pulumi.Output<string>;
    /**
     * The partner content.
     */
    public readonly content!: pulumi.Output<types.outputs.PartnerContentResponse>;
    /**
     * The created time.
     */
    public /*out*/ readonly createdTime!: pulumi.Output<string>;
    /**
     * The resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The metadata.
     */
    public readonly metadata!: pulumi.Output<any | undefined>;
    /**
     * Gets the resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The partner type.
     */
    public readonly partnerType!: pulumi.Output<string>;
    /**
     * The resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Gets the resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Partner resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PartnerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.content === undefined) && !opts.urn) {
                throw new Error("Missing required property 'content'");
            }
            if ((!args || args.integrationAccountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'integrationAccountName'");
            }
            if ((!args || args.partnerType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'partnerType'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["content"] = args ? args.content : undefined;
            resourceInputs["integrationAccountName"] = args ? args.integrationAccountName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["partnerName"] = args ? args.partnerName : undefined;
            resourceInputs["partnerType"] = args ? args.partnerType : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["changedTime"] = undefined /*out*/;
            resourceInputs["createdTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["changedTime"] = undefined /*out*/;
            resourceInputs["content"] = undefined /*out*/;
            resourceInputs["createdTime"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["partnerType"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:logic:Partner" }, { type: "azure-native:logic/v20150801preview:Partner" }, { type: "azure-native:logic/v20180701preview:Partner" }, { type: "azure-native:logic/v20190501:Partner" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Partner.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Partner resource.
 */
export interface PartnerArgs {
    /**
     * The partner content.
     */
    content: pulumi.Input<types.inputs.PartnerContentArgs>;
    /**
     * The integration account name.
     */
    integrationAccountName: pulumi.Input<string>;
    /**
     * The resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The metadata.
     */
    metadata?: any;
    /**
     * The integration account partner name.
     */
    partnerName?: pulumi.Input<string>;
    /**
     * The partner type.
     */
    partnerType: pulumi.Input<types.enums.PartnerType>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
