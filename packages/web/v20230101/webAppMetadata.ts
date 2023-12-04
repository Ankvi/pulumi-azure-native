import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * String dictionary resource.
 */
export class WebAppMetadata extends pulumi.CustomResource {
    /**
     * Get an existing WebAppMetadata resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppMetadata {
        return new WebAppMetadata(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web/v20230101:WebAppMetadata';

    /**
     * Returns true if the given object is an instance of WebAppMetadata.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebAppMetadata {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebAppMetadata.__pulumiType;
    }

    /**
     * Kind of resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Settings.
     */
    public readonly properties!: pulumi.Output<{[key: string]: string}>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WebAppMetadata resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppMetadataArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:web:WebAppMetadata" }, { type: "azure-native:web/v20150801:WebAppMetadata" }, { type: "azure-native:web/v20160801:WebAppMetadata" }, { type: "azure-native:web/v20180201:WebAppMetadata" }, { type: "azure-native:web/v20181101:WebAppMetadata" }, { type: "azure-native:web/v20190801:WebAppMetadata" }, { type: "azure-native:web/v20200601:WebAppMetadata" }, { type: "azure-native:web/v20200901:WebAppMetadata" }, { type: "azure-native:web/v20201001:WebAppMetadata" }, { type: "azure-native:web/v20201201:WebAppMetadata" }, { type: "azure-native:web/v20210101:WebAppMetadata" }, { type: "azure-native:web/v20210115:WebAppMetadata" }, { type: "azure-native:web/v20210201:WebAppMetadata" }, { type: "azure-native:web/v20210301:WebAppMetadata" }, { type: "azure-native:web/v20220301:WebAppMetadata" }, { type: "azure-native:web/v20220901:WebAppMetadata" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WebAppMetadata.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebAppMetadata resource.
 */
export interface WebAppMetadataArgs {
    /**
     * Kind of resource.
     */
    kind?: pulumi.Input<string>;
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Settings.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}