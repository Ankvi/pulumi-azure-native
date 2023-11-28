import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Information about the connection monitor.
 */
export class ConnectionMonitor extends pulumi.CustomResource {
    /**
     * Get an existing ConnectionMonitor resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ConnectionMonitor {
        return new ConnectionMonitor(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network/v20190901:ConnectionMonitor';

    /**
     * Returns true if the given object is an instance of ConnectionMonitor.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ConnectionMonitor {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ConnectionMonitor.__pulumiType;
    }

    /**
     * Determines if the connection monitor will start automatically once created.
     */
    public readonly autoStart!: pulumi.Output<boolean | undefined>;
    /**
     * Describes the destination of connection monitor.
     */
    public readonly destination!: pulumi.Output<types.outputs.ConnectionMonitorDestinationResponse>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * Connection monitor location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Monitoring interval in seconds.
     */
    public readonly monitoringIntervalInSeconds!: pulumi.Output<number | undefined>;
    /**
     * The monitoring status of the connection monitor.
     */
    public /*out*/ readonly monitoringStatus!: pulumi.Output<string | undefined>;
    /**
     * Name of the connection monitor.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the connection monitor.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Describes the source of connection monitor.
     */
    public readonly source!: pulumi.Output<types.outputs.ConnectionMonitorSourceResponse>;
    /**
     * The date and time when the connection monitor was started.
     */
    public /*out*/ readonly startTime!: pulumi.Output<string | undefined>;
    /**
     * Connection monitor tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Connection monitor type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ConnectionMonitor resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConnectionMonitorArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.destination === undefined) && !opts.urn) {
                throw new Error("Missing required property 'destination'");
            }
            if ((!args || args.networkWatcherName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkWatcherName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.source === undefined) && !opts.urn) {
                throw new Error("Missing required property 'source'");
            }
            resourceInputs["autoStart"] = (args ? args.autoStart : undefined) ?? true;
            resourceInputs["connectionMonitorName"] = args ? args.connectionMonitorName : undefined;
            resourceInputs["destination"] = args ? args.destination : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["monitoringIntervalInSeconds"] = (args ? args.monitoringIntervalInSeconds : undefined) ?? 60;
            resourceInputs["networkWatcherName"] = args ? args.networkWatcherName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["source"] = args ? args.source : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["monitoringStatus"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["startTime"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["autoStart"] = undefined /*out*/;
            resourceInputs["destination"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["monitoringIntervalInSeconds"] = undefined /*out*/;
            resourceInputs["monitoringStatus"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["source"] = undefined /*out*/;
            resourceInputs["startTime"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:ConnectionMonitor" }, { type: "azure-native:network/v20171001:ConnectionMonitor" }, { type: "azure-native:network/v20171101:ConnectionMonitor" }, { type: "azure-native:network/v20180101:ConnectionMonitor" }, { type: "azure-native:network/v20180201:ConnectionMonitor" }, { type: "azure-native:network/v20180401:ConnectionMonitor" }, { type: "azure-native:network/v20180601:ConnectionMonitor" }, { type: "azure-native:network/v20180701:ConnectionMonitor" }, { type: "azure-native:network/v20180801:ConnectionMonitor" }, { type: "azure-native:network/v20181001:ConnectionMonitor" }, { type: "azure-native:network/v20181101:ConnectionMonitor" }, { type: "azure-native:network/v20181201:ConnectionMonitor" }, { type: "azure-native:network/v20190201:ConnectionMonitor" }, { type: "azure-native:network/v20190401:ConnectionMonitor" }, { type: "azure-native:network/v20190601:ConnectionMonitor" }, { type: "azure-native:network/v20190701:ConnectionMonitor" }, { type: "azure-native:network/v20190801:ConnectionMonitor" }, { type: "azure-native:network/v20191101:ConnectionMonitor" }, { type: "azure-native:network/v20191201:ConnectionMonitor" }, { type: "azure-native:network/v20200301:ConnectionMonitor" }, { type: "azure-native:network/v20200401:ConnectionMonitor" }, { type: "azure-native:network/v20200501:ConnectionMonitor" }, { type: "azure-native:network/v20200601:ConnectionMonitor" }, { type: "azure-native:network/v20200701:ConnectionMonitor" }, { type: "azure-native:network/v20200801:ConnectionMonitor" }, { type: "azure-native:network/v20201101:ConnectionMonitor" }, { type: "azure-native:network/v20210201:ConnectionMonitor" }, { type: "azure-native:network/v20210301:ConnectionMonitor" }, { type: "azure-native:network/v20210501:ConnectionMonitor" }, { type: "azure-native:network/v20210801:ConnectionMonitor" }, { type: "azure-native:network/v20220101:ConnectionMonitor" }, { type: "azure-native:network/v20220501:ConnectionMonitor" }, { type: "azure-native:network/v20220701:ConnectionMonitor" }, { type: "azure-native:network/v20220901:ConnectionMonitor" }, { type: "azure-native:network/v20221101:ConnectionMonitor" }, { type: "azure-native:network/v20230201:ConnectionMonitor" }, { type: "azure-native:network/v20230401:ConnectionMonitor" }, { type: "azure-native:network/v20230501:ConnectionMonitor" }, { type: "azure-native:network/v20230601:ConnectionMonitor" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ConnectionMonitor.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ConnectionMonitor resource.
 */
export interface ConnectionMonitorArgs {
    /**
     * Determines if the connection monitor will start automatically once created.
     */
    autoStart?: pulumi.Input<boolean>;
    /**
     * The name of the connection monitor.
     */
    connectionMonitorName?: pulumi.Input<string>;
    /**
     * Describes the destination of connection monitor.
     */
    destination: pulumi.Input<types.inputs.ConnectionMonitorDestinationArgs>;
    /**
     * Connection monitor location.
     */
    location?: pulumi.Input<string>;
    /**
     * Monitoring interval in seconds.
     */
    monitoringIntervalInSeconds?: pulumi.Input<number>;
    /**
     * The name of the Network Watcher resource.
     */
    networkWatcherName: pulumi.Input<string>;
    /**
     * The name of the resource group containing Network Watcher.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Describes the source of connection monitor.
     */
    source: pulumi.Input<types.inputs.ConnectionMonitorSourceArgs>;
    /**
     * Connection monitor tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
