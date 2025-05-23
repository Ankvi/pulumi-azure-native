import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Uses Azure REST API version 2025-02-01. In version 2.x of the Azure Native provider, it used API version 2023-10-01-preview.
 *
 * Other available API versions: 2024-07-01, 2024-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native networkcloud [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class StorageAppliance extends pulumi.CustomResource {
    /**
     * Get an existing StorageAppliance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): StorageAppliance {
        return new StorageAppliance(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:networkcloud:StorageAppliance';

    /**
     * Returns true if the given object is an instance of StorageAppliance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StorageAppliance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StorageAppliance.__pulumiType;
    }

    /**
     * The credentials of the administrative interface on this storage appliance.
     */
    public readonly administratorCredentials!: pulumi.Output<types.outputs.AdministrativeCredentialsResponse>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The total capacity of the storage appliance. Measured in GiB.
     */
    public /*out*/ readonly capacity!: pulumi.Output<number>;
    /**
     * The amount of storage consumed.
     */
    public /*out*/ readonly capacityUsed!: pulumi.Output<number>;
    /**
     * The resource ID of the cluster this storage appliance is associated with. Measured in GiB.
     */
    public /*out*/ readonly clusterId!: pulumi.Output<string>;
    /**
     * The detailed status of the storage appliance.
     */
    public /*out*/ readonly detailedStatus!: pulumi.Output<string>;
    /**
     * The descriptive message about the current detailed status.
     */
    public /*out*/ readonly detailedStatusMessage!: pulumi.Output<string>;
    /**
     * Resource ETag.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The extended location of the cluster associated with the resource.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The endpoint for the management interface of the storage appliance.
     */
    public /*out*/ readonly managementIpv4Address!: pulumi.Output<string>;
    /**
     * The manufacturer of the storage appliance.
     */
    public /*out*/ readonly manufacturer!: pulumi.Output<string>;
    /**
     * The model of the storage appliance.
     */
    public /*out*/ readonly model!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the storage appliance.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The resource ID of the rack where this storage appliance resides.
     */
    public readonly rackId!: pulumi.Output<string>;
    /**
     * The slot the storage appliance is in the rack based on the BOM configuration.
     */
    public readonly rackSlot!: pulumi.Output<number>;
    /**
     * The indicator of whether the storage appliance supports remote vendor management.
     */
    public /*out*/ readonly remoteVendorManagementFeature!: pulumi.Output<string>;
    /**
     * The indicator of whether the remote vendor management feature is enabled or disabled, or unsupported if it is an unsupported feature.
     */
    public /*out*/ readonly remoteVendorManagementStatus!: pulumi.Output<string>;
    /**
     * The list of statuses that represent secret rotation activity.
     */
    public /*out*/ readonly secretRotationStatus!: pulumi.Output<types.outputs.SecretRotationStatusResponse[]>;
    /**
     * The serial number for the storage appliance.
     */
    public readonly serialNumber!: pulumi.Output<string>;
    /**
     * The SKU for the storage appliance.
     */
    public readonly storageApplianceSkuId!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The version of the storage appliance.
     */
    public /*out*/ readonly version!: pulumi.Output<string>;

    /**
     * Create a StorageAppliance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StorageApplianceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.administratorCredentials === undefined) && !opts.urn) {
                throw new Error("Missing required property 'administratorCredentials'");
            }
            if ((!args || args.extendedLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'extendedLocation'");
            }
            if ((!args || args.rackId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'rackId'");
            }
            if ((!args || args.rackSlot === undefined) && !opts.urn) {
                throw new Error("Missing required property 'rackSlot'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serialNumber === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serialNumber'");
            }
            if ((!args || args.storageApplianceSkuId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storageApplianceSkuId'");
            }
            resourceInputs["administratorCredentials"] = args ? args.administratorCredentials : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["rackId"] = args ? args.rackId : undefined;
            resourceInputs["rackSlot"] = args ? args.rackSlot : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serialNumber"] = args ? args.serialNumber : undefined;
            resourceInputs["storageApplianceName"] = args ? args.storageApplianceName : undefined;
            resourceInputs["storageApplianceSkuId"] = args ? args.storageApplianceSkuId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["capacity"] = undefined /*out*/;
            resourceInputs["capacityUsed"] = undefined /*out*/;
            resourceInputs["clusterId"] = undefined /*out*/;
            resourceInputs["detailedStatus"] = undefined /*out*/;
            resourceInputs["detailedStatusMessage"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["managementIpv4Address"] = undefined /*out*/;
            resourceInputs["manufacturer"] = undefined /*out*/;
            resourceInputs["model"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["remoteVendorManagementFeature"] = undefined /*out*/;
            resourceInputs["remoteVendorManagementStatus"] = undefined /*out*/;
            resourceInputs["secretRotationStatus"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        } else {
            resourceInputs["administratorCredentials"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["capacity"] = undefined /*out*/;
            resourceInputs["capacityUsed"] = undefined /*out*/;
            resourceInputs["clusterId"] = undefined /*out*/;
            resourceInputs["detailedStatus"] = undefined /*out*/;
            resourceInputs["detailedStatusMessage"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managementIpv4Address"] = undefined /*out*/;
            resourceInputs["manufacturer"] = undefined /*out*/;
            resourceInputs["model"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["rackId"] = undefined /*out*/;
            resourceInputs["rackSlot"] = undefined /*out*/;
            resourceInputs["remoteVendorManagementFeature"] = undefined /*out*/;
            resourceInputs["remoteVendorManagementStatus"] = undefined /*out*/;
            resourceInputs["secretRotationStatus"] = undefined /*out*/;
            resourceInputs["serialNumber"] = undefined /*out*/;
            resourceInputs["storageApplianceSkuId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:networkcloud/v20230701:StorageAppliance" }, { type: "azure-native:networkcloud/v20231001preview:StorageAppliance" }, { type: "azure-native:networkcloud/v20240601preview:StorageAppliance" }, { type: "azure-native:networkcloud/v20240701:StorageAppliance" }, { type: "azure-native:networkcloud/v20241001preview:StorageAppliance" }, { type: "azure-native:networkcloud/v20250201:StorageAppliance" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(StorageAppliance.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a StorageAppliance resource.
 */
export interface StorageApplianceArgs {
    /**
     * The credentials of the administrative interface on this storage appliance.
     */
    administratorCredentials: pulumi.Input<types.inputs.AdministrativeCredentialsArgs>;
    /**
     * The extended location of the cluster associated with the resource.
     */
    extendedLocation: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The resource ID of the rack where this storage appliance resides.
     */
    rackId: pulumi.Input<string>;
    /**
     * The slot the storage appliance is in the rack based on the BOM configuration.
     */
    rackSlot: pulumi.Input<number>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The serial number for the storage appliance.
     */
    serialNumber: pulumi.Input<string>;
    /**
     * The name of the storage appliance.
     */
    storageApplianceName?: pulumi.Input<string>;
    /**
     * The SKU for the storage appliance.
     */
    storageApplianceSkuId: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}