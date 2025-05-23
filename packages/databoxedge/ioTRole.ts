import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Compute role.
 *
 * Uses Azure REST API version 2023-07-01. In version 2.x of the Azure Native provider, it used API version 2022-03-01.
 */
export class IoTRole extends pulumi.CustomResource {
    /**
     * Get an existing IoTRole resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IoTRole {
        return new IoTRole(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:databoxedge:IoTRole';

    /**
     * Returns true if the given object is an instance of IoTRole.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IoTRole {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IoTRole.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Resource allocation
     */
    public readonly computeResource!: pulumi.Output<types.outputs.ComputeResourceResponse | undefined>;
    /**
     * Host OS supported by the IoT role.
     */
    public readonly hostPlatform!: pulumi.Output<string>;
    /**
     * Platform where the Iot runtime is hosted.
     */
    public /*out*/ readonly hostPlatformType!: pulumi.Output<string>;
    /**
     * IoT device metadata to which data box edge device needs to be connected.
     */
    public readonly ioTDeviceDetails!: pulumi.Output<types.outputs.IoTDeviceInfoResponse>;
    /**
     * Iot edge agent details to download the agent and bootstrap iot runtime.
     */
    public readonly ioTEdgeAgentInfo!: pulumi.Output<types.outputs.IoTEdgeAgentInfoResponse | undefined>;
    /**
     * IoT edge device to which the IoT role needs to be configured.
     */
    public readonly ioTEdgeDeviceDetails!: pulumi.Output<types.outputs.IoTDeviceInfoResponse>;
    /**
     * Role type.
     * Expected value is 'IOT'.
     */
    public readonly kind!: pulumi.Output<"IOT">;
    /**
     * The object name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Role status.
     */
    public readonly roleStatus!: pulumi.Output<string>;
    /**
     * Mount points of shares in role(s).
     */
    public readonly shareMappings!: pulumi.Output<types.outputs.MountPointMapResponse[] | undefined>;
    /**
     * Metadata pertaining to creation and last modification of Role
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The hierarchical type of the object.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a IoTRole resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IoTRoleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.deviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'deviceName'");
            }
            if ((!args || args.hostPlatform === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hostPlatform'");
            }
            if ((!args || args.ioTDeviceDetails === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ioTDeviceDetails'");
            }
            if ((!args || args.ioTEdgeDeviceDetails === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ioTEdgeDeviceDetails'");
            }
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.roleStatus === undefined) && !opts.urn) {
                throw new Error("Missing required property 'roleStatus'");
            }
            resourceInputs["computeResource"] = args ? args.computeResource : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["hostPlatform"] = args ? args.hostPlatform : undefined;
            resourceInputs["ioTDeviceDetails"] = args ? args.ioTDeviceDetails : undefined;
            resourceInputs["ioTEdgeAgentInfo"] = args ? args.ioTEdgeAgentInfo : undefined;
            resourceInputs["ioTEdgeDeviceDetails"] = args ? args.ioTEdgeDeviceDetails : undefined;
            resourceInputs["kind"] = "IOT";
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["roleStatus"] = args ? args.roleStatus : undefined;
            resourceInputs["shareMappings"] = args ? args.shareMappings : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["hostPlatformType"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["computeResource"] = undefined /*out*/;
            resourceInputs["hostPlatform"] = undefined /*out*/;
            resourceInputs["hostPlatformType"] = undefined /*out*/;
            resourceInputs["ioTDeviceDetails"] = undefined /*out*/;
            resourceInputs["ioTEdgeAgentInfo"] = undefined /*out*/;
            resourceInputs["ioTEdgeDeviceDetails"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["roleStatus"] = undefined /*out*/;
            resourceInputs["shareMappings"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:databoxedge/v20190301:IoTRole" }, { type: "azure-native:databoxedge/v20190701:IoTRole" }, { type: "azure-native:databoxedge/v20190801:IoTRole" }, { type: "azure-native:databoxedge/v20200501preview:IoTRole" }, { type: "azure-native:databoxedge/v20200901:IoTRole" }, { type: "azure-native:databoxedge/v20200901preview:IoTRole" }, { type: "azure-native:databoxedge/v20201201:IoTRole" }, { type: "azure-native:databoxedge/v20210201:IoTRole" }, { type: "azure-native:databoxedge/v20210201preview:IoTRole" }, { type: "azure-native:databoxedge/v20210601:IoTRole" }, { type: "azure-native:databoxedge/v20210601preview:IoTRole" }, { type: "azure-native:databoxedge/v20220301:IoTRole" }, { type: "azure-native:databoxedge/v20220401preview:IoTRole" }, { type: "azure-native:databoxedge/v20221201preview:IoTRole" }, { type: "azure-native:databoxedge/v20230101preview:CloudEdgeManagementRole" }, { type: "azure-native:databoxedge/v20230101preview:IoTRole" }, { type: "azure-native:databoxedge/v20230101preview:KubernetesRole" }, { type: "azure-native:databoxedge/v20230101preview:MECRole" }, { type: "azure-native:databoxedge/v20230701:CloudEdgeManagementRole" }, { type: "azure-native:databoxedge/v20230701:IoTRole" }, { type: "azure-native:databoxedge/v20230701:KubernetesRole" }, { type: "azure-native:databoxedge/v20230701:MECRole" }, { type: "azure-native:databoxedge/v20231201:CloudEdgeManagementRole" }, { type: "azure-native:databoxedge/v20231201:IoTRole" }, { type: "azure-native:databoxedge/v20231201:KubernetesRole" }, { type: "azure-native:databoxedge/v20231201:MECRole" }, { type: "azure-native:databoxedge:CloudEdgeManagementRole" }, { type: "azure-native:databoxedge:KubernetesRole" }, { type: "azure-native:databoxedge:MECRole" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(IoTRole.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a IoTRole resource.
 */
export interface IoTRoleArgs {
    /**
     * Resource allocation
     */
    computeResource?: pulumi.Input<types.inputs.ComputeResourceArgs>;
    /**
     * The device name.
     */
    deviceName: pulumi.Input<string>;
    /**
     * Host OS supported by the IoT role.
     */
    hostPlatform: pulumi.Input<string | types.enums.PlatformType>;
    /**
     * IoT device metadata to which data box edge device needs to be connected.
     */
    ioTDeviceDetails: pulumi.Input<types.inputs.IoTDeviceInfoArgs>;
    /**
     * Iot edge agent details to download the agent and bootstrap iot runtime.
     */
    ioTEdgeAgentInfo?: pulumi.Input<types.inputs.IoTEdgeAgentInfoArgs>;
    /**
     * IoT edge device to which the IoT role needs to be configured.
     */
    ioTEdgeDeviceDetails: pulumi.Input<types.inputs.IoTDeviceInfoArgs>;
    /**
     * Role type.
     * Expected value is 'IOT'.
     */
    kind: pulumi.Input<"IOT">;
    /**
     * The role name.
     */
    name?: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Role status.
     */
    roleStatus: pulumi.Input<string | types.enums.RoleStatus>;
    /**
     * Mount points of shares in role(s).
     */
    shareMappings?: pulumi.Input<pulumi.Input<types.inputs.MountPointMapArgs>[]>;
}