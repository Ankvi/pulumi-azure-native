import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Defines the inventory item.
 *
 * Uses Azure REST API version 2023-04-01-preview. In version 2.x of the Azure Native provider, it used API version 2022-05-21-preview.
 *
 * Other available API versions: 2022-05-21-preview, 2023-10-07, 2024-06-01, 2025-03-13. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native scvmm [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
    public static readonly __pulumiType = 'azure-native:scvmm:InventoryItem';

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
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Gets the Managed Object name in VMM for the inventory item.
     */
    public readonly inventoryItemName!: pulumi.Output<string>;
    /**
     * They inventory type.
     */
    public readonly inventoryType!: pulumi.Output<string>;
    /**
     * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Gets the tracked resource id corresponding to the inventory resource.
     */
    public /*out*/ readonly managedResourceId!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Gets the provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Gets the UUID (which is assigned by VMM) for the inventory item.
     */
    public /*out*/ readonly uuid!: pulumi.Output<string>;

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
            if ((!args || args.vmmServerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vmmServerName'");
            }
            resourceInputs["inventoryItemName"] = args ? args.inventoryItemName : undefined;
            resourceInputs["inventoryType"] = args ? args.inventoryType : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["vmmServerName"] = args ? args.vmmServerName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["managedResourceId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uuid"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["inventoryItemName"] = undefined /*out*/;
            resourceInputs["inventoryType"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["managedResourceId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uuid"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:scvmm/v20200605preview:InventoryItem" }, { type: "azure-native:scvmm/v20220521preview:InventoryItem" }, { type: "azure-native:scvmm/v20230401preview:InventoryItem" }, { type: "azure-native:scvmm/v20231007:InventoryItem" }, { type: "azure-native:scvmm/v20240601:InventoryItem" }, { type: "azure-native:scvmm/v20250313:InventoryItem" }] };
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
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the VMMServer.
     */
    vmmServerName: pulumi.Input<string>;
}