import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * String dictionary resource.
 */
export class WebAppConnectionStrings extends pulumi.CustomResource {
    /**
     * Get an existing WebAppConnectionStrings resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppConnectionStrings {
        return new WebAppConnectionStrings(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web/v20220901:WebAppConnectionStrings';

    /**
     * Returns true if the given object is an instance of WebAppConnectionStrings.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebAppConnectionStrings {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebAppConnectionStrings.__pulumiType;
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
     * Connection strings.
     */
    public readonly properties!: pulumi.Output<{[key: string]: types.outputs.ConnStringValueTypePairResponse}>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WebAppConnectionStrings resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppConnectionStringsArgs, opts?: pulumi.CustomResourceOptions) {
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
        const aliasOpts = { aliases: [{ type: "azure-native:web:WebAppConnectionStrings" }, { type: "azure-native:web/v20150801:WebAppConnectionStrings" }, { type: "azure-native:web/v20160801:WebAppConnectionStrings" }, { type: "azure-native:web/v20180201:WebAppConnectionStrings" }, { type: "azure-native:web/v20181101:WebAppConnectionStrings" }, { type: "azure-native:web/v20190801:WebAppConnectionStrings" }, { type: "azure-native:web/v20200601:WebAppConnectionStrings" }, { type: "azure-native:web/v20200901:WebAppConnectionStrings" }, { type: "azure-native:web/v20201001:WebAppConnectionStrings" }, { type: "azure-native:web/v20201201:WebAppConnectionStrings" }, { type: "azure-native:web/v20210101:WebAppConnectionStrings" }, { type: "azure-native:web/v20210115:WebAppConnectionStrings" }, { type: "azure-native:web/v20210201:WebAppConnectionStrings" }, { type: "azure-native:web/v20210301:WebAppConnectionStrings" }, { type: "azure-native:web/v20220301:WebAppConnectionStrings" }, { type: "azure-native:web/v20230101:WebAppConnectionStrings" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WebAppConnectionStrings.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebAppConnectionStrings resource.
 */
export interface WebAppConnectionStringsArgs {
    /**
     * Kind of resource.
     */
    kind?: pulumi.Input<string>;
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Connection strings.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<types.inputs.ConnStringValueTypePairArgs>}>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}
