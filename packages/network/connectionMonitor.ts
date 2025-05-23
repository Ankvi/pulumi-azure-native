import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Information about the connection monitor.
 *
 * Uses Azure REST API version 2024-05-01. In version 2.x of the Azure Native provider, it used API version 2023-02-01.
 *
 * Other available API versions: 2018-06-01, 2018-07-01, 2018-08-01, 2018-10-01, 2018-11-01, 2018-12-01, 2019-02-01, 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
    public static readonly __pulumiType = 'azure-native:network:ConnectionMonitor';

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
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Type of connection monitor.
     */
    public /*out*/ readonly connectionMonitorType!: pulumi.Output<string>;
    /**
     * Describes the destination of connection monitor.
     */
    public readonly destination!: pulumi.Output<types.outputs.ConnectionMonitorDestinationResponse | undefined>;
    /**
     * List of connection monitor endpoints.
     */
    public readonly endpoints!: pulumi.Output<types.outputs.ConnectionMonitorEndpointResponse[] | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
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
    public /*out*/ readonly monitoringStatus!: pulumi.Output<string>;
    /**
     * Name of the connection monitor.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Optional notes to be associated with the connection monitor.
     */
    public readonly notes!: pulumi.Output<string | undefined>;
    /**
     * List of connection monitor outputs.
     */
    public readonly outputs!: pulumi.Output<types.outputs.ConnectionMonitorOutputResponse[] | undefined>;
    /**
     * The provisioning state of the connection monitor.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Describes the source of connection monitor.
     */
    public readonly source!: pulumi.Output<types.outputs.ConnectionMonitorSourceResponse | undefined>;
    /**
     * The date and time when the connection monitor was started.
     */
    public /*out*/ readonly startTime!: pulumi.Output<string>;
    /**
     * Connection monitor tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * List of connection monitor test configurations.
     */
    public readonly testConfigurations!: pulumi.Output<types.outputs.ConnectionMonitorTestConfigurationResponse[] | undefined>;
    /**
     * List of connection monitor test groups.
     */
    public readonly testGroups!: pulumi.Output<types.outputs.ConnectionMonitorTestGroupResponse[] | undefined>;
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
            if ((!args || args.networkWatcherName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkWatcherName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["autoStart"] = (args ? args.autoStart : undefined) ?? true;
            resourceInputs["connectionMonitorName"] = args ? args.connectionMonitorName : undefined;
            resourceInputs["destination"] = args ? args.destination : undefined;
            resourceInputs["endpoints"] = args ? args.endpoints : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["migrate"] = args ? args.migrate : undefined;
            resourceInputs["monitoringIntervalInSeconds"] = (args ? args.monitoringIntervalInSeconds : undefined) ?? 60;
            resourceInputs["networkWatcherName"] = args ? args.networkWatcherName : undefined;
            resourceInputs["notes"] = args ? args.notes : undefined;
            resourceInputs["outputs"] = args ? args.outputs : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["source"] = args ? args.source : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["testConfigurations"] = args ? args.testConfigurations : undefined;
            resourceInputs["testGroups"] = args ? args.testGroups : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["connectionMonitorType"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["monitoringStatus"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["startTime"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["autoStart"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["connectionMonitorType"] = undefined /*out*/;
            resourceInputs["destination"] = undefined /*out*/;
            resourceInputs["endpoints"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["monitoringIntervalInSeconds"] = undefined /*out*/;
            resourceInputs["monitoringStatus"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["notes"] = undefined /*out*/;
            resourceInputs["outputs"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["source"] = undefined /*out*/;
            resourceInputs["startTime"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["testConfigurations"] = undefined /*out*/;
            resourceInputs["testGroups"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20171001:ConnectionMonitor" }, { type: "azure-native:network/v20171101:ConnectionMonitor" }, { type: "azure-native:network/v20180101:ConnectionMonitor" }, { type: "azure-native:network/v20180201:ConnectionMonitor" }, { type: "azure-native:network/v20180401:ConnectionMonitor" }, { type: "azure-native:network/v20180601:ConnectionMonitor" }, { type: "azure-native:network/v20180701:ConnectionMonitor" }, { type: "azure-native:network/v20180801:ConnectionMonitor" }, { type: "azure-native:network/v20181001:ConnectionMonitor" }, { type: "azure-native:network/v20181101:ConnectionMonitor" }, { type: "azure-native:network/v20181201:ConnectionMonitor" }, { type: "azure-native:network/v20190201:ConnectionMonitor" }, { type: "azure-native:network/v20190401:ConnectionMonitor" }, { type: "azure-native:network/v20190601:ConnectionMonitor" }, { type: "azure-native:network/v20190701:ConnectionMonitor" }, { type: "azure-native:network/v20190801:ConnectionMonitor" }, { type: "azure-native:network/v20190901:ConnectionMonitor" }, { type: "azure-native:network/v20191101:ConnectionMonitor" }, { type: "azure-native:network/v20191201:ConnectionMonitor" }, { type: "azure-native:network/v20200301:ConnectionMonitor" }, { type: "azure-native:network/v20200401:ConnectionMonitor" }, { type: "azure-native:network/v20200501:ConnectionMonitor" }, { type: "azure-native:network/v20200601:ConnectionMonitor" }, { type: "azure-native:network/v20200701:ConnectionMonitor" }, { type: "azure-native:network/v20200801:ConnectionMonitor" }, { type: "azure-native:network/v20201101:ConnectionMonitor" }, { type: "azure-native:network/v20210201:ConnectionMonitor" }, { type: "azure-native:network/v20210301:ConnectionMonitor" }, { type: "azure-native:network/v20210501:ConnectionMonitor" }, { type: "azure-native:network/v20210801:ConnectionMonitor" }, { type: "azure-native:network/v20220101:ConnectionMonitor" }, { type: "azure-native:network/v20220501:ConnectionMonitor" }, { type: "azure-native:network/v20220701:ConnectionMonitor" }, { type: "azure-native:network/v20220901:ConnectionMonitor" }, { type: "azure-native:network/v20221101:ConnectionMonitor" }, { type: "azure-native:network/v20230201:ConnectionMonitor" }, { type: "azure-native:network/v20230401:ConnectionMonitor" }, { type: "azure-native:network/v20230501:ConnectionMonitor" }, { type: "azure-native:network/v20230601:ConnectionMonitor" }, { type: "azure-native:network/v20230901:ConnectionMonitor" }, { type: "azure-native:network/v20231101:ConnectionMonitor" }, { type: "azure-native:network/v20240101:ConnectionMonitor" }, { type: "azure-native:network/v20240301:ConnectionMonitor" }, { type: "azure-native:network/v20240501:ConnectionMonitor" }] };
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
    destination?: pulumi.Input<types.inputs.ConnectionMonitorDestinationArgs>;
    /**
     * List of connection monitor endpoints.
     */
    endpoints?: pulumi.Input<pulumi.Input<types.inputs.ConnectionMonitorEndpointArgs>[]>;
    /**
     * Connection monitor location.
     */
    location?: pulumi.Input<string>;
    /**
     * Value indicating whether connection monitor V1 should be migrated to V2 format.
     */
    migrate?: pulumi.Input<string>;
    /**
     * Monitoring interval in seconds.
     */
    monitoringIntervalInSeconds?: pulumi.Input<number>;
    /**
     * The name of the Network Watcher resource.
     */
    networkWatcherName: pulumi.Input<string>;
    /**
     * Optional notes to be associated with the connection monitor.
     */
    notes?: pulumi.Input<string>;
    /**
     * List of connection monitor outputs.
     */
    outputs?: pulumi.Input<pulumi.Input<types.inputs.ConnectionMonitorOutputArgs>[]>;
    /**
     * The name of the resource group containing Network Watcher.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Describes the source of connection monitor.
     */
    source?: pulumi.Input<types.inputs.ConnectionMonitorSourceArgs>;
    /**
     * Connection monitor tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * List of connection monitor test configurations.
     */
    testConfigurations?: pulumi.Input<pulumi.Input<types.inputs.ConnectionMonitorTestConfigurationArgs>[]>;
    /**
     * List of connection monitor test groups.
     */
    testGroups?: pulumi.Input<pulumi.Input<types.inputs.ConnectionMonitorTestGroupArgs>[]>;
}