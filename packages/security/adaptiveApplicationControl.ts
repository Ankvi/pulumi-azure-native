import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure REST API version: 2020-01-01. Prior API version in Azure Native 1.x: 2020-01-01.
 *
 * Other available API versions: 2015-06-01-preview.
 */
export class AdaptiveApplicationControl extends pulumi.CustomResource {
    /**
     * Get an existing AdaptiveApplicationControl resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AdaptiveApplicationControl {
        return new AdaptiveApplicationControl(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:security:AdaptiveApplicationControl';

    /**
     * Returns true if the given object is an instance of AdaptiveApplicationControl.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AdaptiveApplicationControl {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AdaptiveApplicationControl.__pulumiType;
    }

    /**
     * The configuration status of the machines group or machine or rule
     */
    public /*out*/ readonly configurationStatus!: pulumi.Output<string>;
    /**
     * The application control policy enforcement/protection mode of the machine group
     */
    public readonly enforcementMode!: pulumi.Output<string | undefined>;
    public /*out*/ readonly issues!: pulumi.Output<types.outputs.AdaptiveApplicationControlIssueSummaryResponse[]>;
    /**
     * Location where the resource is stored
     */
    public /*out*/ readonly location!: pulumi.Output<string>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly pathRecommendations!: pulumi.Output<types.outputs.PathRecommendationResponse[] | undefined>;
    /**
     * The protection mode of the collection/file types. Exe/Msi/Script are used for Windows, Executable is used for Linux.
     */
    public readonly protectionMode!: pulumi.Output<types.outputs.ProtectionModeResponse | undefined>;
    /**
     * The initial recommendation status of the machine group or machine
     */
    public /*out*/ readonly recommendationStatus!: pulumi.Output<string>;
    /**
     * The source type of the machine group
     */
    public /*out*/ readonly sourceSystem!: pulumi.Output<string>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    public readonly vmRecommendations!: pulumi.Output<types.outputs.VmRecommendationResponse[] | undefined>;

    /**
     * Create a AdaptiveApplicationControl resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AdaptiveApplicationControlArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.ascLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ascLocation'");
            }
            resourceInputs["ascLocation"] = args ? args.ascLocation : undefined;
            resourceInputs["enforcementMode"] = args ? args.enforcementMode : undefined;
            resourceInputs["groupName"] = args ? args.groupName : undefined;
            resourceInputs["pathRecommendations"] = args ? args.pathRecommendations : undefined;
            resourceInputs["protectionMode"] = args ? args.protectionMode : undefined;
            resourceInputs["vmRecommendations"] = args ? args.vmRecommendations : undefined;
            resourceInputs["configurationStatus"] = undefined /*out*/;
            resourceInputs["issues"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["recommendationStatus"] = undefined /*out*/;
            resourceInputs["sourceSystem"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["configurationStatus"] = undefined /*out*/;
            resourceInputs["enforcementMode"] = undefined /*out*/;
            resourceInputs["issues"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["pathRecommendations"] = undefined /*out*/;
            resourceInputs["protectionMode"] = undefined /*out*/;
            resourceInputs["recommendationStatus"] = undefined /*out*/;
            resourceInputs["sourceSystem"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vmRecommendations"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:security/v20150601preview:AdaptiveApplicationControl" }, { type: "azure-native:security/v20200101:AdaptiveApplicationControl" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AdaptiveApplicationControl.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AdaptiveApplicationControl resource.
 */
export interface AdaptiveApplicationControlArgs {
    /**
     * The location where ASC stores the data of the subscription. can be retrieved from Get locations
     */
    ascLocation: pulumi.Input<string>;
    /**
     * The application control policy enforcement/protection mode of the machine group
     */
    enforcementMode?: pulumi.Input<string>;
    /**
     * Name of an application control machine group
     */
    groupName?: pulumi.Input<string>;
    pathRecommendations?: pulumi.Input<pulumi.Input<types.inputs.PathRecommendationArgs>[]>;
    /**
     * The protection mode of the collection/file types. Exe/Msi/Script are used for Windows, Executable is used for Linux.
     */
    protectionMode?: pulumi.Input<types.inputs.ProtectionModeArgs>;
    vmRecommendations?: pulumi.Input<pulumi.Input<types.inputs.VmRecommendationArgs>[]>;
}