import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Monitoring Setting resource
 */
export class MonitoringSetting extends pulumi.CustomResource {
    /**
     * Get an existing MonitoringSetting resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MonitoringSetting {
        return new MonitoringSetting(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:appplatform/v20230501preview:MonitoringSetting';

    /**
     * Returns true if the given object is an instance of MonitoringSetting.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MonitoringSetting {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MonitoringSetting.__pulumiType;
    }

    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Properties of the Monitoring Setting resource
     */
    public readonly properties!: pulumi.Output<types.outputs.MonitoringSettingPropertiesResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a MonitoringSetting resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MonitoringSettingArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:appplatform:MonitoringSetting" }, { type: "azure-native:appplatform/v20200701:MonitoringSetting" }, { type: "azure-native:appplatform/v20201101preview:MonitoringSetting" }, { type: "azure-native:appplatform/v20210601preview:MonitoringSetting" }, { type: "azure-native:appplatform/v20210901preview:MonitoringSetting" }, { type: "azure-native:appplatform/v20220101preview:MonitoringSetting" }, { type: "azure-native:appplatform/v20220301preview:MonitoringSetting" }, { type: "azure-native:appplatform/v20220401:MonitoringSetting" }, { type: "azure-native:appplatform/v20220501preview:MonitoringSetting" }, { type: "azure-native:appplatform/v20220901preview:MonitoringSetting" }, { type: "azure-native:appplatform/v20221101preview:MonitoringSetting" }, { type: "azure-native:appplatform/v20221201:MonitoringSetting" }, { type: "azure-native:appplatform/v20230101preview:MonitoringSetting" }, { type: "azure-native:appplatform/v20230301preview:MonitoringSetting" }, { type: "azure-native:appplatform/v20230701preview:MonitoringSetting" }, { type: "azure-native:appplatform/v20230901preview:MonitoringSetting" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(MonitoringSetting.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a MonitoringSetting resource.
 */
export interface MonitoringSettingArgs {
    /**
     * Properties of the Monitoring Setting resource
     */
    properties?: pulumi.Input<types.inputs.MonitoringSettingPropertiesArgs>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Service resource.
     */
    serviceName: pulumi.Input<string>;
}
