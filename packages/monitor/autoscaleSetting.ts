import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The autoscale setting resource.
 *
 * Uses Azure REST API version 2021-05-01-preview.
 */
export class AutoscaleSetting extends pulumi.CustomResource {
    /**
     * Get an existing AutoscaleSetting resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AutoscaleSetting {
        return new AutoscaleSetting(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:monitor:AutoscaleSetting';

    /**
     * Returns true if the given object is an instance of AutoscaleSetting.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AutoscaleSetting {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AutoscaleSetting.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Azure resource name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The autoscale setting of the resource.
     */
    public /*out*/ readonly properties!: pulumi.Output<types.outputs.AutoscaleSettingResponse>;
    /**
     * The system metadata related to the response.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater in length than 128 characters and a value no greater in length than 256 characters.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Azure resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a AutoscaleSetting resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AutoscaleSettingArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.profiles === undefined) && !opts.urn) {
                throw new Error("Missing required property 'profiles'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["autoscaleSettingName"] = args ? args.autoscaleSettingName : undefined;
            resourceInputs["enabled"] = (args ? args.enabled : undefined) ?? false;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["notifications"] = args ? args.notifications : undefined;
            resourceInputs["predictiveAutoscalePolicy"] = args ? args.predictiveAutoscalePolicy : undefined;
            resourceInputs["profiles"] = args ? args.profiles : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["targetResourceLocation"] = args ? args.targetResourceLocation : undefined;
            resourceInputs["targetResourceUri"] = args ? args.targetResourceUri : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:insights/v20221001:AutoscaleSetting" }, { type: "azure-native:insights:AutoscaleSetting" }, { type: "azure-native:monitor/v20140401:AutoscaleSetting" }, { type: "azure-native:monitor/v20150401:AutoscaleSetting" }, { type: "azure-native:monitor/v20210501preview:AutoscaleSetting" }, { type: "azure-native:monitor/v20221001:AutoscaleSetting" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AutoscaleSetting.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AutoscaleSetting resource.
 */
export interface AutoscaleSettingArgs {
    /**
     * The autoscale setting name.
     */
    autoscaleSettingName?: pulumi.Input<string>;
    /**
     * the enabled flag. Specifies whether automatic scaling is enabled for the resource. The default value is 'false'.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * the name of the autoscale setting.
     */
    name?: pulumi.Input<string>;
    /**
     * the collection of notifications.
     */
    notifications?: pulumi.Input<pulumi.Input<types.inputs.AutoscaleNotificationArgs>[]>;
    /**
     * the predictive autoscale policy mode.
     */
    predictiveAutoscalePolicy?: pulumi.Input<types.inputs.PredictiveAutoscalePolicyArgs>;
    /**
     * the collection of automatic scaling profiles that specify different scaling parameters for different time periods. A maximum of 20 profiles can be specified.
     */
    profiles: pulumi.Input<pulumi.Input<types.inputs.AutoscaleProfileArgs>[]>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater in length than 128 characters and a value no greater in length than 256 characters.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * the location of the resource that the autoscale setting should be added to.
     */
    targetResourceLocation?: pulumi.Input<string>;
    /**
     * the resource identifier of the resource that the autoscale setting should be added to.
     */
    targetResourceUri?: pulumi.Input<string>;
}