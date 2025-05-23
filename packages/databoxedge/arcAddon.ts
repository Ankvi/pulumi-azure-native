import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Arc Addon.
 *
 * Uses Azure REST API version 2023-07-01. In version 2.x of the Azure Native provider, it used API version 2022-03-01.
 */
export class ArcAddon extends pulumi.CustomResource {
    /**
     * Get an existing ArcAddon resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ArcAddon {
        return new ArcAddon(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:databoxedge:ArcAddon';

    /**
     * Returns true if the given object is an instance of ArcAddon.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ArcAddon {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ArcAddon.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Host OS supported by the Arc addon.
     */
    public /*out*/ readonly hostPlatform!: pulumi.Output<string>;
    /**
     * Platform where the runtime is hosted.
     */
    public /*out*/ readonly hostPlatformType!: pulumi.Output<string>;
    /**
     * Addon type.
     * Expected value is 'ArcForKubernetes'.
     */
    public readonly kind!: pulumi.Output<"ArcForKubernetes">;
    /**
     * The object name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Addon Provisioning State
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Arc resource group name
     */
    public readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * Arc resource location
     */
    public readonly resourceLocation!: pulumi.Output<string>;
    /**
     * Arc resource Name
     */
    public readonly resourceName!: pulumi.Output<string>;
    /**
     * Arc resource subscription Id
     */
    public readonly subscriptionId!: pulumi.Output<string>;
    /**
     * Metadata pertaining to creation and last modification of Addon
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The hierarchical type of the object.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Arc resource version
     */
    public /*out*/ readonly version!: pulumi.Output<string>;

    /**
     * Create a ArcAddon resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ArcAddonArgs, opts?: pulumi.CustomResourceOptions) {
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
            if ((!args || args.resourceLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceLocation'");
            }
            if ((!args || args.resourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceName'");
            }
            if ((!args || args.roleName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'roleName'");
            }
            if ((!args || args.subscriptionId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subscriptionId'");
            }
            resourceInputs["addonName"] = args ? args.addonName : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["kind"] = "ArcForKubernetes";
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceLocation"] = args ? args.resourceLocation : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["roleName"] = args ? args.roleName : undefined;
            resourceInputs["subscriptionId"] = args ? args.subscriptionId : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["hostPlatform"] = undefined /*out*/;
            resourceInputs["hostPlatformType"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["hostPlatform"] = undefined /*out*/;
            resourceInputs["hostPlatformType"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGroupName"] = undefined /*out*/;
            resourceInputs["resourceLocation"] = undefined /*out*/;
            resourceInputs["resourceName"] = undefined /*out*/;
            resourceInputs["subscriptionId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:databoxedge/v20200901:ArcAddon" }, { type: "azure-native:databoxedge/v20200901preview:ArcAddon" }, { type: "azure-native:databoxedge/v20201201:ArcAddon" }, { type: "azure-native:databoxedge/v20210201:ArcAddon" }, { type: "azure-native:databoxedge/v20210201preview:ArcAddon" }, { type: "azure-native:databoxedge/v20210601:ArcAddon" }, { type: "azure-native:databoxedge/v20210601preview:ArcAddon" }, { type: "azure-native:databoxedge/v20220301:ArcAddon" }, { type: "azure-native:databoxedge/v20220301:IoTAddon" }, { type: "azure-native:databoxedge/v20220401preview:ArcAddon" }, { type: "azure-native:databoxedge/v20221201preview:ArcAddon" }, { type: "azure-native:databoxedge/v20230101preview:ArcAddon" }, { type: "azure-native:databoxedge/v20230701:ArcAddon" }, { type: "azure-native:databoxedge/v20230701:IoTAddon" }, { type: "azure-native:databoxedge/v20231201:ArcAddon" }, { type: "azure-native:databoxedge/v20231201:IoTAddon" }, { type: "azure-native:databoxedge:IoTAddon" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ArcAddon.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ArcAddon resource.
 */
export interface ArcAddonArgs {
    /**
     * The addon name.
     */
    addonName?: pulumi.Input<string>;
    /**
     * The device name.
     */
    deviceName: pulumi.Input<string>;
    /**
     * Addon type.
     * Expected value is 'ArcForKubernetes'.
     */
    kind: pulumi.Input<"ArcForKubernetes">;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Arc resource location
     */
    resourceLocation: pulumi.Input<string>;
    /**
     * Arc resource Name
     */
    resourceName: pulumi.Input<string>;
    /**
     * The role name.
     */
    roleName: pulumi.Input<string>;
    /**
     * Arc resource subscription Id
     */
    subscriptionId: pulumi.Input<string>;
}