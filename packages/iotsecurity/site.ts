import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * IoT site model
 * Azure REST API version: 2021-02-01-preview. Prior API version in Azure Native 1.x: 2021-02-01-preview
 */
export class Site extends pulumi.CustomResource {
    /**
     * Get an existing Site resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Site {
        return new Site(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:iotsecurity:Site';

    /**
     * Returns true if the given object is an instance of Site.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Site {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Site.__pulumiType;
    }

    /**
     * Display name of the IoT site
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.iotsecurity.SystemDataResponse>;
    /**
     * Tags of the IoT site
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Site resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SiteArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.scope === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scope'");
            }
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:iotsecurity/v20210201preview:Site" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Site.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Site resource.
 */
export interface SiteArgs {
    /**
     * Display name of the IoT site
     */
    displayName: pulumi.Input<string>;
    /**
     * Scope of the query (IoT Hub, /providers/Microsoft.Devices/iotHubs/myHub)
     */
    scope: pulumi.Input<string>;
    /**
     * Tags of the IoT site
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
