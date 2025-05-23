import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An device group resource belonging to a product resource.
 *
 * Uses Azure REST API version 2024-04-01. In version 2.x of the Azure Native provider, it used API version 2022-09-01-preview.
 *
 * Other available API versions: 2022-09-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native azuresphere [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class DeviceGroup extends pulumi.CustomResource {
    /**
     * Get an existing DeviceGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DeviceGroup {
        return new DeviceGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:azuresphere:DeviceGroup';

    /**
     * Returns true if the given object is an instance of DeviceGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DeviceGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DeviceGroup.__pulumiType;
    }

    /**
     * Flag to define if the user allows for crash dump collection.
     */
    public readonly allowCrashDumpsCollection!: pulumi.Output<string | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Description of the device group.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Deployment status for the device group.
     */
    public /*out*/ readonly hasDeployment!: pulumi.Output<boolean>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Operating system feed type of the device group.
     */
    public readonly osFeedType!: pulumi.Output<string | undefined>;
    /**
     * The status of the last operation.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Regional data boundary for the device group.
     */
    public readonly regionalDataBoundary!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Update policy of the device group.
     */
    public readonly updatePolicy!: pulumi.Output<string | undefined>;

    /**
     * Create a DeviceGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DeviceGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.catalogName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'catalogName'");
            }
            if ((!args || args.productName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'productName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["allowCrashDumpsCollection"] = args ? args.allowCrashDumpsCollection : undefined;
            resourceInputs["catalogName"] = args ? args.catalogName : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["deviceGroupName"] = args ? args.deviceGroupName : undefined;
            resourceInputs["osFeedType"] = args ? args.osFeedType : undefined;
            resourceInputs["productName"] = args ? args.productName : undefined;
            resourceInputs["regionalDataBoundary"] = args ? args.regionalDataBoundary : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["updatePolicy"] = args ? args.updatePolicy : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["hasDeployment"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["allowCrashDumpsCollection"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["hasDeployment"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["osFeedType"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["regionalDataBoundary"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatePolicy"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:azuresphere/v20220901preview:DeviceGroup" }, { type: "azure-native:azuresphere/v20240401:DeviceGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DeviceGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DeviceGroup resource.
 */
export interface DeviceGroupArgs {
    /**
     * Flag to define if the user allows for crash dump collection.
     */
    allowCrashDumpsCollection?: pulumi.Input<string | types.enums.AllowCrashDumpCollection>;
    /**
     * Name of catalog
     */
    catalogName: pulumi.Input<string>;
    /**
     * Description of the device group.
     */
    description?: pulumi.Input<string>;
    /**
     * Name of device group.
     */
    deviceGroupName?: pulumi.Input<string>;
    /**
     * Operating system feed type of the device group.
     */
    osFeedType?: pulumi.Input<string | types.enums.OSFeedType>;
    /**
     * Name of product.
     */
    productName: pulumi.Input<string>;
    /**
     * Regional data boundary for the device group.
     */
    regionalDataBoundary?: pulumi.Input<string | types.enums.RegionalDataBoundary>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Update policy of the device group.
     */
    updatePolicy?: pulumi.Input<string | types.enums.UpdatePolicy>;
}