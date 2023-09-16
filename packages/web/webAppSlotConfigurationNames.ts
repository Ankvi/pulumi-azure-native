import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Slot Config names azure resource.
 * Azure REST API version: 2022-09-01. Prior API version in Azure Native 1.x: 2020-12-01
 */
export class WebAppSlotConfigurationNames extends pulumi.CustomResource {
    /**
     * Get an existing WebAppSlotConfigurationNames resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppSlotConfigurationNames {
        return new WebAppSlotConfigurationNames(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web:WebAppSlotConfigurationNames';

    /**
     * Returns true if the given object is an instance of WebAppSlotConfigurationNames.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebAppSlotConfigurationNames {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebAppSlotConfigurationNames.__pulumiType;
    }

    /**
     * List of application settings names.
     */
    public readonly appSettingNames!: pulumi.Output<string[] | undefined>;
    /**
     * List of external Azure storage account identifiers.
     */
    public readonly azureStorageConfigNames!: pulumi.Output<string[] | undefined>;
    /**
     * List of connection string names.
     */
    public readonly connectionStringNames!: pulumi.Output<string[] | undefined>;
    /**
     * Kind of resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WebAppSlotConfigurationNames resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppSlotConfigurationNamesArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["appSettingNames"] = args ? args.appSettingNames : undefined;
            resourceInputs["azureStorageConfigNames"] = args ? args.azureStorageConfigNames : undefined;
            resourceInputs["connectionStringNames"] = args ? args.connectionStringNames : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["appSettingNames"] = undefined /*out*/;
            resourceInputs["azureStorageConfigNames"] = undefined /*out*/;
            resourceInputs["connectionStringNames"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:web/v20150801:WebAppSlotConfigurationNames" }, { type: "azure-native:web/v20160801:WebAppSlotConfigurationNames" }, { type: "azure-native:web/v20180201:WebAppSlotConfigurationNames" }, { type: "azure-native:web/v20181101:WebAppSlotConfigurationNames" }, { type: "azure-native:web/v20190801:WebAppSlotConfigurationNames" }, { type: "azure-native:web/v20200601:WebAppSlotConfigurationNames" }, { type: "azure-native:web/v20200901:WebAppSlotConfigurationNames" }, { type: "azure-native:web/v20201001:WebAppSlotConfigurationNames" }, { type: "azure-native:web/v20201201:WebAppSlotConfigurationNames" }, { type: "azure-native:web/v20210101:WebAppSlotConfigurationNames" }, { type: "azure-native:web/v20210115:WebAppSlotConfigurationNames" }, { type: "azure-native:web/v20210201:WebAppSlotConfigurationNames" }, { type: "azure-native:web/v20210301:WebAppSlotConfigurationNames" }, { type: "azure-native:web/v20220301:WebAppSlotConfigurationNames" }, { type: "azure-native:web/v20220901:WebAppSlotConfigurationNames" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WebAppSlotConfigurationNames.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebAppSlotConfigurationNames resource.
 */
export interface WebAppSlotConfigurationNamesArgs {
    /**
     * List of application settings names.
     */
    appSettingNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of external Azure storage account identifiers.
     */
    azureStorageConfigNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of connection string names.
     */
    connectionStringNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Kind of resource.
     */
    kind?: pulumi.Input<string>;
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}
