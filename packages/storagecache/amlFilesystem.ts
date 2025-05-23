import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An AML file system instance. Follows Azure Resource Manager standards: https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/resource-api-reference.md
 *
 * Uses Azure REST API version 2024-03-01.
 *
 * Other available API versions: 2023-05-01, 2023-11-01-preview, 2024-07-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native storagecache [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class AmlFilesystem extends pulumi.CustomResource {
    /**
     * Get an existing AmlFilesystem resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AmlFilesystem {
        return new AmlFilesystem(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:storagecache:AmlFilesystem';

    /**
     * Returns true if the given object is an instance of AmlFilesystem.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AmlFilesystem {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AmlFilesystem.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Client information for the AML file system.
     */
    public /*out*/ readonly clientInfo!: pulumi.Output<types.outputs.AmlFilesystemClientInfoResponse>;
    /**
     * Specifies encryption settings of the AML file system.
     */
    public readonly encryptionSettings!: pulumi.Output<types.outputs.AmlFilesystemEncryptionSettingsResponse | undefined>;
    /**
     * Subnet used for managing the AML file system and for client-facing operations. This subnet should have at least a /24 subnet mask within the VNET's address space.
     */
    public readonly filesystemSubnet!: pulumi.Output<string>;
    /**
     * Health of the AML file system.
     */
    public /*out*/ readonly health!: pulumi.Output<types.outputs.AmlFilesystemHealthResponse>;
    /**
     * Hydration and archive settings and status
     */
    public readonly hsm!: pulumi.Output<types.outputs.AmlFilesystemResponseHsm | undefined>;
    /**
     * The managed identity used by the AML file system, if configured.
     */
    public readonly identity!: pulumi.Output<types.outputs.AmlFilesystemIdentityResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Start time of a 30-minute weekly maintenance window.
     */
    public readonly maintenanceWindow!: pulumi.Output<types.outputs.AmlFilesystemResponseMaintenanceWindow>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * ARM provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Specifies root squash settings of the AML file system.
     */
    public readonly rootSquashSettings!: pulumi.Output<types.outputs.AmlFilesystemRootSquashSettingsResponse | undefined>;
    /**
     * SKU for the resource.
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuNameResponse | undefined>;
    /**
     * The size of the AML file system, in TiB. This might be rounded up.
     */
    public readonly storageCapacityTiB!: pulumi.Output<number>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Throughput provisioned in MB per sec, calculated as storageCapacityTiB * per-unit storage throughput
     */
    public /*out*/ readonly throughputProvisionedMBps!: pulumi.Output<number>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Availability zones for resources. This field should only contain a single element in the array.
     */
    public readonly zones!: pulumi.Output<string[] | undefined>;

    /**
     * Create a AmlFilesystem resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AmlFilesystemArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.filesystemSubnet === undefined) && !opts.urn) {
                throw new Error("Missing required property 'filesystemSubnet'");
            }
            if ((!args || args.maintenanceWindow === undefined) && !opts.urn) {
                throw new Error("Missing required property 'maintenanceWindow'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.storageCapacityTiB === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storageCapacityTiB'");
            }
            resourceInputs["amlFilesystemName"] = args ? args.amlFilesystemName : undefined;
            resourceInputs["encryptionSettings"] = args ? args.encryptionSettings : undefined;
            resourceInputs["filesystemSubnet"] = args ? args.filesystemSubnet : undefined;
            resourceInputs["hsm"] = args ? (args.hsm ? pulumi.output(args.hsm).apply(types.inputs.amlFilesystemHsmArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["maintenanceWindow"] = args ? args.maintenanceWindow : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["rootSquashSettings"] = args ? args.rootSquashSettings : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["storageCapacityTiB"] = args ? args.storageCapacityTiB : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["zones"] = args ? args.zones : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["clientInfo"] = undefined /*out*/;
            resourceInputs["health"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["throughputProvisionedMBps"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["clientInfo"] = undefined /*out*/;
            resourceInputs["encryptionSettings"] = undefined /*out*/;
            resourceInputs["filesystemSubnet"] = undefined /*out*/;
            resourceInputs["health"] = undefined /*out*/;
            resourceInputs["hsm"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["maintenanceWindow"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["rootSquashSettings"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["storageCapacityTiB"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["throughputProvisionedMBps"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["zones"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:storagecache/v20230301preview:AmlFilesystem" }, { type: "azure-native:storagecache/v20230501:AmlFilesystem" }, { type: "azure-native:storagecache/v20231101preview:AmlFilesystem" }, { type: "azure-native:storagecache/v20240301:AmlFilesystem" }, { type: "azure-native:storagecache/v20240701:AmlFilesystem" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AmlFilesystem.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AmlFilesystem resource.
 */
export interface AmlFilesystemArgs {
    /**
     * Name for the AML file system. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
     */
    amlFilesystemName?: pulumi.Input<string>;
    /**
     * Specifies encryption settings of the AML file system.
     */
    encryptionSettings?: pulumi.Input<types.inputs.AmlFilesystemEncryptionSettingsArgs>;
    /**
     * Subnet used for managing the AML file system and for client-facing operations. This subnet should have at least a /24 subnet mask within the VNET's address space.
     */
    filesystemSubnet: pulumi.Input<string>;
    /**
     * Hydration and archive settings and status
     */
    hsm?: pulumi.Input<types.inputs.AmlFilesystemHsmArgs>;
    /**
     * The managed identity used by the AML file system, if configured.
     */
    identity?: pulumi.Input<types.inputs.AmlFilesystemIdentityArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Start time of a 30-minute weekly maintenance window.
     */
    maintenanceWindow: pulumi.Input<types.inputs.AmlFilesystemMaintenanceWindowArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies root squash settings of the AML file system.
     */
    rootSquashSettings?: pulumi.Input<types.inputs.AmlFilesystemRootSquashSettingsArgs>;
    /**
     * SKU for the resource.
     */
    sku?: pulumi.Input<types.inputs.SkuNameArgs>;
    /**
     * The size of the AML file system, in TiB. This might be rounded up.
     */
    storageCapacityTiB: pulumi.Input<number>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Availability zones for resources. This field should only contain a single element in the array.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}