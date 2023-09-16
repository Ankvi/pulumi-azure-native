import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Configures how to correlate scan data and logs with resources associated with the subscription.
 * Azure REST API version: 2021-01-15-preview. Prior API version in Azure Native 1.x: 2021-01-15-preview
 */
export class IngestionSetting extends pulumi.CustomResource {
    /**
     * Get an existing IngestionSetting resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IngestionSetting {
        return new IngestionSetting(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:security:IngestionSetting';

    /**
     * Returns true if the given object is an instance of IngestionSetting.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IngestionSetting {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IngestionSetting.__pulumiType;
    }

    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a IngestionSetting resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: IngestionSettingArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["ingestionSettingName"] = args ? args.ingestionSettingName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:security/v20210115preview:IngestionSetting" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(IngestionSetting.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a IngestionSetting resource.
 */
export interface IngestionSettingArgs {
    /**
     * Name of the ingestion setting
     */
    ingestionSettingName?: pulumi.Input<string>;
}
