import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Site Extension Information.
 */
export class WebAppSiteExtensionSlot extends pulumi.CustomResource {
    /**
     * Get an existing WebAppSiteExtensionSlot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppSiteExtensionSlot {
        return new WebAppSiteExtensionSlot(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web/v20201001:WebAppSiteExtensionSlot';

    /**
     * Returns true if the given object is an instance of WebAppSiteExtensionSlot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebAppSiteExtensionSlot {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebAppSiteExtensionSlot.__pulumiType;
    }

    /**
     * List of authors.
     */
    public /*out*/ readonly authors!: pulumi.Output<string[] | undefined>;
    /**
     * Site Extension comment.
     */
    public /*out*/ readonly comment!: pulumi.Output<string | undefined>;
    /**
     * Detailed description.
     */
    public /*out*/ readonly description!: pulumi.Output<string | undefined>;
    /**
     * Count of downloads.
     */
    public /*out*/ readonly downloadCount!: pulumi.Output<number | undefined>;
    /**
     * Site extension ID.
     */
    public /*out*/ readonly extensionId!: pulumi.Output<string | undefined>;
    /**
     * Site extension type.
     */
    public /*out*/ readonly extensionType!: pulumi.Output<string | undefined>;
    /**
     * Extension URL.
     */
    public /*out*/ readonly extensionUrl!: pulumi.Output<string | undefined>;
    /**
     * Feed URL.
     */
    public /*out*/ readonly feedUrl!: pulumi.Output<string | undefined>;
    /**
     * Icon URL.
     */
    public /*out*/ readonly iconUrl!: pulumi.Output<string | undefined>;
    /**
     * Installed timestamp.
     */
    public /*out*/ readonly installedDateTime!: pulumi.Output<string | undefined>;
    /**
     * Installer command line parameters.
     */
    public /*out*/ readonly installerCommandLineParams!: pulumi.Output<string | undefined>;
    /**
     * Kind of resource.
     */
    public /*out*/ readonly kind!: pulumi.Output<string | undefined>;
    /**
     * License URL.
     */
    public /*out*/ readonly licenseUrl!: pulumi.Output<string | undefined>;
    /**
     * <code>true</code> if the local version is the latest version; <code>false</code> otherwise.
     */
    public /*out*/ readonly localIsLatestVersion!: pulumi.Output<boolean | undefined>;
    /**
     * Local path.
     */
    public /*out*/ readonly localPath!: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Project URL.
     */
    public /*out*/ readonly projectUrl!: pulumi.Output<string | undefined>;
    /**
     * Provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * Published timestamp.
     */
    public /*out*/ readonly publishedDateTime!: pulumi.Output<string | undefined>;
    /**
     * Summary description.
     */
    public /*out*/ readonly summary!: pulumi.Output<string | undefined>;
    /**
     * The system metadata relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    public /*out*/ readonly title!: pulumi.Output<string | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Version information.
     */
    public /*out*/ readonly version!: pulumi.Output<string | undefined>;

    /**
     * Create a WebAppSiteExtensionSlot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppSiteExtensionSlotArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.slot === undefined) && !opts.urn) {
                throw new Error("Missing required property 'slot'");
            }
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["siteExtensionId"] = args ? args.siteExtensionId : undefined;
            resourceInputs["slot"] = args ? args.slot : undefined;
            resourceInputs["authors"] = undefined /*out*/;
            resourceInputs["comment"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["downloadCount"] = undefined /*out*/;
            resourceInputs["extensionId"] = undefined /*out*/;
            resourceInputs["extensionType"] = undefined /*out*/;
            resourceInputs["extensionUrl"] = undefined /*out*/;
            resourceInputs["feedUrl"] = undefined /*out*/;
            resourceInputs["iconUrl"] = undefined /*out*/;
            resourceInputs["installedDateTime"] = undefined /*out*/;
            resourceInputs["installerCommandLineParams"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["licenseUrl"] = undefined /*out*/;
            resourceInputs["localIsLatestVersion"] = undefined /*out*/;
            resourceInputs["localPath"] = undefined /*out*/;
            resourceInputs["projectUrl"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publishedDateTime"] = undefined /*out*/;
            resourceInputs["summary"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["title"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        } else {
            resourceInputs["authors"] = undefined /*out*/;
            resourceInputs["comment"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["downloadCount"] = undefined /*out*/;
            resourceInputs["extensionId"] = undefined /*out*/;
            resourceInputs["extensionType"] = undefined /*out*/;
            resourceInputs["extensionUrl"] = undefined /*out*/;
            resourceInputs["feedUrl"] = undefined /*out*/;
            resourceInputs["iconUrl"] = undefined /*out*/;
            resourceInputs["installedDateTime"] = undefined /*out*/;
            resourceInputs["installerCommandLineParams"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["licenseUrl"] = undefined /*out*/;
            resourceInputs["localIsLatestVersion"] = undefined /*out*/;
            resourceInputs["localPath"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["projectUrl"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publishedDateTime"] = undefined /*out*/;
            resourceInputs["summary"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["title"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:web:WebAppSiteExtensionSlot" }, { type: "azure-native:web/v20160801:WebAppSiteExtensionSlot" }, { type: "azure-native:web/v20180201:WebAppSiteExtensionSlot" }, { type: "azure-native:web/v20181101:WebAppSiteExtensionSlot" }, { type: "azure-native:web/v20190801:WebAppSiteExtensionSlot" }, { type: "azure-native:web/v20200601:WebAppSiteExtensionSlot" }, { type: "azure-native:web/v20200901:WebAppSiteExtensionSlot" }, { type: "azure-native:web/v20201201:WebAppSiteExtensionSlot" }, { type: "azure-native:web/v20210101:WebAppSiteExtensionSlot" }, { type: "azure-native:web/v20210115:WebAppSiteExtensionSlot" }, { type: "azure-native:web/v20210201:WebAppSiteExtensionSlot" }, { type: "azure-native:web/v20210301:WebAppSiteExtensionSlot" }, { type: "azure-native:web/v20220301:WebAppSiteExtensionSlot" }, { type: "azure-native:web/v20220901:WebAppSiteExtensionSlot" }, { type: "azure-native:web/v20230101:WebAppSiteExtensionSlot" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WebAppSiteExtensionSlot.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebAppSiteExtensionSlot resource.
 */
export interface WebAppSiteExtensionSlotArgs {
    /**
     * Site name.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Site extension name.
     */
    siteExtensionId?: pulumi.Input<string>;
    /**
     * Name of the deployment slot. If a slot is not specified, the API uses the production slot.
     */
    slot: pulumi.Input<string>;
}
