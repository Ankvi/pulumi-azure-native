import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Network watcher in a resource group.
 * Azure REST API version: 2023-02-01. Prior API version in Azure Native 1.x: 2020-11-01.
 *
 * Other available API versions: 2018-01-01, 2022-05-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01.
 */
export class NetworkWatcher extends pulumi.CustomResource {
    /**
     * Get an existing NetworkWatcher resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NetworkWatcher {
        return new NetworkWatcher(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:NetworkWatcher';

    /**
     * Returns true if the given object is an instance of NetworkWatcher.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkWatcher {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkWatcher.__pulumiType;
    }

    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the network watcher resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a NetworkWatcher resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkWatcherArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["networkWatcherName"] = args ? args.networkWatcherName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20160901:NetworkWatcher" }, { type: "azure-native:network/v20161201:NetworkWatcher" }, { type: "azure-native:network/v20170301:NetworkWatcher" }, { type: "azure-native:network/v20170601:NetworkWatcher" }, { type: "azure-native:network/v20170801:NetworkWatcher" }, { type: "azure-native:network/v20170901:NetworkWatcher" }, { type: "azure-native:network/v20171001:NetworkWatcher" }, { type: "azure-native:network/v20171101:NetworkWatcher" }, { type: "azure-native:network/v20180101:NetworkWatcher" }, { type: "azure-native:network/v20180201:NetworkWatcher" }, { type: "azure-native:network/v20180401:NetworkWatcher" }, { type: "azure-native:network/v20180601:NetworkWatcher" }, { type: "azure-native:network/v20180701:NetworkWatcher" }, { type: "azure-native:network/v20180801:NetworkWatcher" }, { type: "azure-native:network/v20181001:NetworkWatcher" }, { type: "azure-native:network/v20181101:NetworkWatcher" }, { type: "azure-native:network/v20181201:NetworkWatcher" }, { type: "azure-native:network/v20190201:NetworkWatcher" }, { type: "azure-native:network/v20190401:NetworkWatcher" }, { type: "azure-native:network/v20190601:NetworkWatcher" }, { type: "azure-native:network/v20190701:NetworkWatcher" }, { type: "azure-native:network/v20190801:NetworkWatcher" }, { type: "azure-native:network/v20190901:NetworkWatcher" }, { type: "azure-native:network/v20191101:NetworkWatcher" }, { type: "azure-native:network/v20191201:NetworkWatcher" }, { type: "azure-native:network/v20200301:NetworkWatcher" }, { type: "azure-native:network/v20200401:NetworkWatcher" }, { type: "azure-native:network/v20200501:NetworkWatcher" }, { type: "azure-native:network/v20200601:NetworkWatcher" }, { type: "azure-native:network/v20200701:NetworkWatcher" }, { type: "azure-native:network/v20200801:NetworkWatcher" }, { type: "azure-native:network/v20201101:NetworkWatcher" }, { type: "azure-native:network/v20210201:NetworkWatcher" }, { type: "azure-native:network/v20210301:NetworkWatcher" }, { type: "azure-native:network/v20210501:NetworkWatcher" }, { type: "azure-native:network/v20210801:NetworkWatcher" }, { type: "azure-native:network/v20220101:NetworkWatcher" }, { type: "azure-native:network/v20220501:NetworkWatcher" }, { type: "azure-native:network/v20220701:NetworkWatcher" }, { type: "azure-native:network/v20220901:NetworkWatcher" }, { type: "azure-native:network/v20221101:NetworkWatcher" }, { type: "azure-native:network/v20230201:NetworkWatcher" }, { type: "azure-native:network/v20230401:NetworkWatcher" }, { type: "azure-native:network/v20230501:NetworkWatcher" }, { type: "azure-native:network/v20230601:NetworkWatcher" }, { type: "azure-native:network/v20230901:NetworkWatcher" }, { type: "azure-native:network/v20231101:NetworkWatcher" }, { type: "azure-native:network/v20240101:NetworkWatcher" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(NetworkWatcher.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NetworkWatcher resource.
 */
export interface NetworkWatcherArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the network watcher.
     */
    networkWatcherName?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}