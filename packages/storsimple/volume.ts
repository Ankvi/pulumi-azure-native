import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The volume.
 *
 * Uses Azure REST API version 2017-06-01. In version 2.x of the Azure Native provider, it used API version 2017-06-01.
 */
export class Volume extends pulumi.CustomResource {
    /**
     * Get an existing Volume resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Volume {
        return new Volume(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:storsimple:Volume';

    /**
     * Returns true if the given object is an instance of Volume.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Volume {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Volume.__pulumiType;
    }

    /**
     * The IDs of the access control records, associated with the volume.
     */
    public readonly accessControlRecordIds!: pulumi.Output<string[]>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The IDs of the backup policies, in which this volume is part of.
     */
    public /*out*/ readonly backupPolicyIds!: pulumi.Output<string[]>;
    /**
     * The backup status of the volume.
     */
    public /*out*/ readonly backupStatus!: pulumi.Output<string>;
    /**
     * The Kind of the object. Currently only Series8000 is supported
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * The monitoring status of the volume.
     */
    public readonly monitoringStatus!: pulumi.Output<string>;
    /**
     * The name of the object.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The operation status on the volume.
     */
    public /*out*/ readonly operationStatus!: pulumi.Output<string>;
    /**
     * The size of the volume in bytes.
     */
    public readonly sizeInBytes!: pulumi.Output<number>;
    /**
     * The hierarchical type of the object.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The ID of the volume container, in which this volume is created.
     */
    public /*out*/ readonly volumeContainerId!: pulumi.Output<string>;
    /**
     * The volume status.
     */
    public readonly volumeStatus!: pulumi.Output<string>;
    /**
     * The type of the volume.
     */
    public readonly volumeType!: pulumi.Output<string>;

    /**
     * Create a Volume resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VolumeArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accessControlRecordIds === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accessControlRecordIds'");
            }
            if ((!args || args.deviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'deviceName'");
            }
            if ((!args || args.managerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'managerName'");
            }
            if ((!args || args.monitoringStatus === undefined) && !opts.urn) {
                throw new Error("Missing required property 'monitoringStatus'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sizeInBytes === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sizeInBytes'");
            }
            if ((!args || args.volumeContainerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'volumeContainerName'");
            }
            if ((!args || args.volumeStatus === undefined) && !opts.urn) {
                throw new Error("Missing required property 'volumeStatus'");
            }
            if ((!args || args.volumeType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'volumeType'");
            }
            resourceInputs["accessControlRecordIds"] = args ? args.accessControlRecordIds : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["managerName"] = args ? args.managerName : undefined;
            resourceInputs["monitoringStatus"] = args ? args.monitoringStatus : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sizeInBytes"] = args ? args.sizeInBytes : undefined;
            resourceInputs["volumeContainerName"] = args ? args.volumeContainerName : undefined;
            resourceInputs["volumeName"] = args ? args.volumeName : undefined;
            resourceInputs["volumeStatus"] = args ? args.volumeStatus : undefined;
            resourceInputs["volumeType"] = args ? args.volumeType : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["backupPolicyIds"] = undefined /*out*/;
            resourceInputs["backupStatus"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["operationStatus"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["volumeContainerId"] = undefined /*out*/;
        } else {
            resourceInputs["accessControlRecordIds"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["backupPolicyIds"] = undefined /*out*/;
            resourceInputs["backupStatus"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["monitoringStatus"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["operationStatus"] = undefined /*out*/;
            resourceInputs["sizeInBytes"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["volumeContainerId"] = undefined /*out*/;
            resourceInputs["volumeStatus"] = undefined /*out*/;
            resourceInputs["volumeType"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:storsimple/v20170601:Volume" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Volume.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Volume resource.
 */
export interface VolumeArgs {
    /**
     * The IDs of the access control records, associated with the volume.
     */
    accessControlRecordIds: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The device name
     */
    deviceName: pulumi.Input<string>;
    /**
     * The Kind of the object. Currently only Series8000 is supported
     */
    kind?: pulumi.Input<types.enums.Kind>;
    /**
     * The manager name
     */
    managerName: pulumi.Input<string>;
    /**
     * The monitoring status of the volume.
     */
    monitoringStatus: pulumi.Input<types.enums.MonitoringStatus>;
    /**
     * The resource group name
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The size of the volume in bytes.
     */
    sizeInBytes: pulumi.Input<number>;
    /**
     * The volume container name.
     */
    volumeContainerName: pulumi.Input<string>;
    /**
     * The volume name.
     */
    volumeName?: pulumi.Input<string>;
    /**
     * The volume status.
     */
    volumeStatus: pulumi.Input<types.enums.VolumeStatus>;
    /**
     * The type of the volume.
     */
    volumeType: pulumi.Input<types.enums.VolumeType>;
}