import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Defines the inventory item.
 *
 * Uses Azure REST API version 2022-07-15-preview. In version 1.x of the Azure Native provider, it used API version 2020-10-01-preview.
 *
 * Other available API versions: 2023-03-01-preview, 2023-10-01, 2023-12-01.
 */
export class InventoryItem extends pulumi.CustomResource {
    /**
     * Get an existing InventoryItem resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): InventoryItem {
        return new InventoryItem(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:connectedvmwarevsphere:InventoryItem';

    /**
     * Returns true if the given object is an instance of InventoryItem.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is InventoryItem {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === InventoryItem.__pulumiType;
    }

    /**
     * They inventory type.
     */
    public readonly inventoryType!: pulumi.Output<string>;
    /**
     * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the tracked resource id corresponding to the inventory resource.
     */
    public readonly managedResourceId!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the vCenter Managed Object name for the inventory item.
     */
    public readonly moName!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the MoRef (Managed Object Reference) ID for the inventory item.
     */
    public readonly moRefId!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Gets or sets the provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The system data.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a InventoryItem resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InventoryItemArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.inventoryType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'inventoryType'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.vcenterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vcenterName'");
            }
            resourceInputs["inventoryItemName"] = args ? args.inventoryItemName : undefined;
            resourceInputs["inventoryType"] = args ? args.inventoryType : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["managedResourceId"] = args ? args.managedResourceId : undefined;
            resourceInputs["moName"] = args ? args.moName : undefined;
            resourceInputs["moRefId"] = args ? args.moRefId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["vcenterName"] = args ? args.vcenterName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["inventoryType"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["managedResourceId"] = undefined /*out*/;
            resourceInputs["moName"] = undefined /*out*/;
            resourceInputs["moRefId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:connectedvmwarevsphere/v20201001preview:InventoryItem" }, { type: "azure-native:connectedvmwarevsphere/v20220110preview:InventoryItem" }, { type: "azure-native:connectedvmwarevsphere/v20220715preview:InventoryItem" }, { type: "azure-native:connectedvmwarevsphere/v20230301preview:InventoryItem" }, { type: "azure-native:connectedvmwarevsphere/v20231001:InventoryItem" }, { type: "azure-native:connectedvmwarevsphere/v20231201:InventoryItem" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(InventoryItem.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a InventoryItem resource.
 */
export interface InventoryItemArgs {
    /**
     * Name of the inventoryItem.
     */
    inventoryItemName?: pulumi.Input<string>;
    /**
     * They inventory type.
     */
    inventoryType: pulumi.Input<string | types.enums.InventoryType>;
    /**
     * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
     */
    kind?: pulumi.Input<string>;
    /**
     * Gets or sets the tracked resource id corresponding to the inventory resource.
     */
    managedResourceId?: pulumi.Input<string>;
    /**
     * Gets or sets the vCenter Managed Object name for the inventory item.
     */
    moName?: pulumi.Input<string>;
    /**
     * Gets or sets the MoRef (Managed Object Reference) ID for the inventory item.
     */
    moRefId?: pulumi.Input<string>;
    /**
     * The Resource Group Name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the vCenter.
     */
    vcenterName: pulumi.Input<string>;
}