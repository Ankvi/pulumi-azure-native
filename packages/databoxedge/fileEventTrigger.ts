import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Trigger details.
 *
 * Uses Azure REST API version 2023-07-01. In version 2.x of the Azure Native provider, it used API version 2022-03-01.
 */
export class FileEventTrigger extends pulumi.CustomResource {
    /**
     * Get an existing FileEventTrigger resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): FileEventTrigger {
        return new FileEventTrigger(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:databoxedge:FileEventTrigger';

    /**
     * Returns true if the given object is an instance of FileEventTrigger.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FileEventTrigger {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FileEventTrigger.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * A custom context tag typically used to correlate the trigger against its usage. For example, if a periodic timer trigger is intended for certain specific IoT modules in the device, the tag can be the name or the image URL of the module.
     */
    public readonly customContextTag!: pulumi.Output<string | undefined>;
    /**
     * Trigger Kind.
     * Expected value is 'FileEvent'.
     */
    public readonly kind!: pulumi.Output<"FileEvent">;
    /**
     * The object name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Role sink info.
     */
    public readonly sinkInfo!: pulumi.Output<types.outputs.RoleSinkInfoResponse>;
    /**
     * File event source details.
     */
    public readonly sourceInfo!: pulumi.Output<types.outputs.FileSourceInfoResponse>;
    /**
     * Metadata pertaining to creation and last modification of Trigger
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The hierarchical type of the object.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a FileEventTrigger resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FileEventTriggerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.deviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'deviceName'");
            }
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sinkInfo === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sinkInfo'");
            }
            if ((!args || args.sourceInfo === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceInfo'");
            }
            resourceInputs["customContextTag"] = args ? args.customContextTag : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["kind"] = "FileEvent";
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sinkInfo"] = args ? args.sinkInfo : undefined;
            resourceInputs["sourceInfo"] = args ? args.sourceInfo : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["customContextTag"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["sinkInfo"] = undefined /*out*/;
            resourceInputs["sourceInfo"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:databoxedge/v20190301:FileEventTrigger" }, { type: "azure-native:databoxedge/v20190701:FileEventTrigger" }, { type: "azure-native:databoxedge/v20190801:FileEventTrigger" }, { type: "azure-native:databoxedge/v20200501preview:FileEventTrigger" }, { type: "azure-native:databoxedge/v20200901:FileEventTrigger" }, { type: "azure-native:databoxedge/v20200901preview:FileEventTrigger" }, { type: "azure-native:databoxedge/v20201201:FileEventTrigger" }, { type: "azure-native:databoxedge/v20210201:FileEventTrigger" }, { type: "azure-native:databoxedge/v20210201preview:FileEventTrigger" }, { type: "azure-native:databoxedge/v20210601:FileEventTrigger" }, { type: "azure-native:databoxedge/v20210601preview:FileEventTrigger" }, { type: "azure-native:databoxedge/v20220301:FileEventTrigger" }, { type: "azure-native:databoxedge/v20220401preview:FileEventTrigger" }, { type: "azure-native:databoxedge/v20221201preview:FileEventTrigger" }, { type: "azure-native:databoxedge/v20230101preview:FileEventTrigger" }, { type: "azure-native:databoxedge/v20230101preview:PeriodicTimerEventTrigger" }, { type: "azure-native:databoxedge/v20230701:FileEventTrigger" }, { type: "azure-native:databoxedge/v20230701:PeriodicTimerEventTrigger" }, { type: "azure-native:databoxedge/v20231201:FileEventTrigger" }, { type: "azure-native:databoxedge/v20231201:PeriodicTimerEventTrigger" }, { type: "azure-native:databoxedge:PeriodicTimerEventTrigger" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(FileEventTrigger.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a FileEventTrigger resource.
 */
export interface FileEventTriggerArgs {
    /**
     * A custom context tag typically used to correlate the trigger against its usage. For example, if a periodic timer trigger is intended for certain specific IoT modules in the device, the tag can be the name or the image URL of the module.
     */
    customContextTag?: pulumi.Input<string>;
    /**
     * Creates or updates a trigger
     */
    deviceName: pulumi.Input<string>;
    /**
     * Trigger Kind.
     * Expected value is 'FileEvent'.
     */
    kind: pulumi.Input<"FileEvent">;
    /**
     * The trigger name.
     */
    name?: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Role sink info.
     */
    sinkInfo: pulumi.Input<types.inputs.RoleSinkInfoArgs>;
    /**
     * File event source details.
     */
    sourceInfo: pulumi.Input<types.inputs.FileSourceInfoArgs>;
}