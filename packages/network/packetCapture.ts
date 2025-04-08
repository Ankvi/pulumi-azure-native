import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Information about packet capture session.
 *
 * Uses Azure REST API version 2024-05-01. In version 2.x of the Azure Native provider, it used API version 2023-02-01.
 *
 * Other available API versions: 2018-06-01, 2018-07-01, 2018-08-01, 2018-10-01, 2018-11-01, 2018-12-01, 2019-02-01, 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class PacketCapture extends pulumi.CustomResource {
    /**
     * Get an existing PacketCapture resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PacketCapture {
        return new PacketCapture(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:PacketCapture';

    /**
     * Returns true if the given object is an instance of PacketCapture.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PacketCapture {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PacketCapture.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Number of bytes captured per packet, the remaining bytes are truncated.
     */
    public readonly bytesToCapturePerPacket!: pulumi.Output<number | undefined>;
    /**
     * The capture setting holds the 'FileCount', 'FileSizeInBytes', 'SessionTimeLimitInSeconds' values.
     */
    public readonly captureSettings!: pulumi.Output<types.outputs.PacketCaptureSettingsResponse | undefined>;
    /**
     * This continuous capture is a nullable boolean, which can hold 'null', 'true' or 'false' value. If we do not pass this parameter, it would be consider as 'null', default value is 'null'.
     */
    public readonly continuousCapture!: pulumi.Output<boolean | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * A list of packet capture filters.
     */
    public readonly filters!: pulumi.Output<types.outputs.PacketCaptureFilterResponse[] | undefined>;
    /**
     * Name of the packet capture session.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the packet capture session.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * A list of AzureVMSS instances which can be included or excluded to run packet capture. If both included and excluded are empty, then the packet capture will run on all instances of AzureVMSS.
     */
    public readonly scope!: pulumi.Output<types.outputs.PacketCaptureMachineScopeResponse | undefined>;
    /**
     * The storage location for a packet capture session.
     */
    public readonly storageLocation!: pulumi.Output<types.outputs.PacketCaptureStorageLocationResponse>;
    /**
     * The ID of the targeted resource, only AzureVM and AzureVMSS as target type are currently supported.
     */
    public readonly target!: pulumi.Output<string>;
    /**
     * Target type of the resource provided.
     */
    public readonly targetType!: pulumi.Output<string | undefined>;
    /**
     * Maximum duration of the capture session in seconds.
     */
    public readonly timeLimitInSeconds!: pulumi.Output<number | undefined>;
    /**
     * Maximum size of the capture output.
     */
    public readonly totalBytesPerSession!: pulumi.Output<number | undefined>;

    /**
     * Create a PacketCapture resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PacketCaptureArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.networkWatcherName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkWatcherName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.storageLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storageLocation'");
            }
            if ((!args || args.target === undefined) && !opts.urn) {
                throw new Error("Missing required property 'target'");
            }
            resourceInputs["bytesToCapturePerPacket"] = (args ? args.bytesToCapturePerPacket : undefined) ?? 0;
            resourceInputs["captureSettings"] = args ? (args.captureSettings ? pulumi.output(args.captureSettings).apply(types.inputs.packetCaptureSettingsArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["continuousCapture"] = args ? args.continuousCapture : undefined;
            resourceInputs["filters"] = args ? args.filters : undefined;
            resourceInputs["networkWatcherName"] = args ? args.networkWatcherName : undefined;
            resourceInputs["packetCaptureName"] = args ? args.packetCaptureName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["storageLocation"] = args ? args.storageLocation : undefined;
            resourceInputs["target"] = args ? args.target : undefined;
            resourceInputs["targetType"] = args ? args.targetType : undefined;
            resourceInputs["timeLimitInSeconds"] = (args ? args.timeLimitInSeconds : undefined) ?? 18000;
            resourceInputs["totalBytesPerSession"] = (args ? args.totalBytesPerSession : undefined) ?? 1073741824;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["bytesToCapturePerPacket"] = undefined /*out*/;
            resourceInputs["captureSettings"] = undefined /*out*/;
            resourceInputs["continuousCapture"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["filters"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["scope"] = undefined /*out*/;
            resourceInputs["storageLocation"] = undefined /*out*/;
            resourceInputs["target"] = undefined /*out*/;
            resourceInputs["targetType"] = undefined /*out*/;
            resourceInputs["timeLimitInSeconds"] = undefined /*out*/;
            resourceInputs["totalBytesPerSession"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20160901:PacketCapture" }, { type: "azure-native:network/v20161201:PacketCapture" }, { type: "azure-native:network/v20170301:PacketCapture" }, { type: "azure-native:network/v20170601:PacketCapture" }, { type: "azure-native:network/v20170801:PacketCapture" }, { type: "azure-native:network/v20170901:PacketCapture" }, { type: "azure-native:network/v20171001:PacketCapture" }, { type: "azure-native:network/v20171101:PacketCapture" }, { type: "azure-native:network/v20180101:PacketCapture" }, { type: "azure-native:network/v20180201:PacketCapture" }, { type: "azure-native:network/v20180401:PacketCapture" }, { type: "azure-native:network/v20180601:PacketCapture" }, { type: "azure-native:network/v20180701:PacketCapture" }, { type: "azure-native:network/v20180801:PacketCapture" }, { type: "azure-native:network/v20181001:PacketCapture" }, { type: "azure-native:network/v20181101:PacketCapture" }, { type: "azure-native:network/v20181201:PacketCapture" }, { type: "azure-native:network/v20190201:PacketCapture" }, { type: "azure-native:network/v20190401:PacketCapture" }, { type: "azure-native:network/v20190601:PacketCapture" }, { type: "azure-native:network/v20190701:PacketCapture" }, { type: "azure-native:network/v20190801:PacketCapture" }, { type: "azure-native:network/v20190901:PacketCapture" }, { type: "azure-native:network/v20191101:PacketCapture" }, { type: "azure-native:network/v20191201:PacketCapture" }, { type: "azure-native:network/v20200301:PacketCapture" }, { type: "azure-native:network/v20200401:PacketCapture" }, { type: "azure-native:network/v20200501:PacketCapture" }, { type: "azure-native:network/v20200601:PacketCapture" }, { type: "azure-native:network/v20200701:PacketCapture" }, { type: "azure-native:network/v20200801:PacketCapture" }, { type: "azure-native:network/v20201101:PacketCapture" }, { type: "azure-native:network/v20210201:PacketCapture" }, { type: "azure-native:network/v20210301:PacketCapture" }, { type: "azure-native:network/v20210501:PacketCapture" }, { type: "azure-native:network/v20210801:PacketCapture" }, { type: "azure-native:network/v20220101:PacketCapture" }, { type: "azure-native:network/v20220501:PacketCapture" }, { type: "azure-native:network/v20220701:PacketCapture" }, { type: "azure-native:network/v20220901:PacketCapture" }, { type: "azure-native:network/v20221101:PacketCapture" }, { type: "azure-native:network/v20230201:PacketCapture" }, { type: "azure-native:network/v20230401:PacketCapture" }, { type: "azure-native:network/v20230501:PacketCapture" }, { type: "azure-native:network/v20230601:PacketCapture" }, { type: "azure-native:network/v20230901:PacketCapture" }, { type: "azure-native:network/v20231101:PacketCapture" }, { type: "azure-native:network/v20240101:PacketCapture" }, { type: "azure-native:network/v20240301:PacketCapture" }, { type: "azure-native:network/v20240501:PacketCapture" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PacketCapture.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PacketCapture resource.
 */
export interface PacketCaptureArgs {
    /**
     * Number of bytes captured per packet, the remaining bytes are truncated.
     */
    bytesToCapturePerPacket?: pulumi.Input<number>;
    /**
     * The capture setting holds the 'FileCount', 'FileSizeInBytes', 'SessionTimeLimitInSeconds' values.
     */
    captureSettings?: pulumi.Input<types.inputs.PacketCaptureSettingsArgs>;
    /**
     * This continuous capture is a nullable boolean, which can hold 'null', 'true' or 'false' value. If we do not pass this parameter, it would be consider as 'null', default value is 'null'.
     */
    continuousCapture?: pulumi.Input<boolean>;
    /**
     * A list of packet capture filters.
     */
    filters?: pulumi.Input<pulumi.Input<types.inputs.PacketCaptureFilterArgs>[]>;
    /**
     * The name of the network watcher.
     */
    networkWatcherName: pulumi.Input<string>;
    /**
     * The name of the packet capture session.
     */
    packetCaptureName?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A list of AzureVMSS instances which can be included or excluded to run packet capture. If both included and excluded are empty, then the packet capture will run on all instances of AzureVMSS.
     */
    scope?: pulumi.Input<types.inputs.PacketCaptureMachineScopeArgs>;
    /**
     * The storage location for a packet capture session.
     */
    storageLocation: pulumi.Input<types.inputs.PacketCaptureStorageLocationArgs>;
    /**
     * The ID of the targeted resource, only AzureVM and AzureVMSS as target type are currently supported.
     */
    target: pulumi.Input<string>;
    /**
     * Target type of the resource provided.
     */
    targetType?: pulumi.Input<types.enums.PacketCaptureTargetType>;
    /**
     * Maximum duration of the capture session in seconds.
     */
    timeLimitInSeconds?: pulumi.Input<number>;
    /**
     * Maximum size of the capture output.
     */
    totalBytesPerSession?: pulumi.Input<number>;
}