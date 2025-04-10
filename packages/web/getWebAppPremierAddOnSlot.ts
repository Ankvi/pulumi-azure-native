import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Description for Gets a named add-on of an app.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2016-08-01, 2020-10-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function getWebAppPremierAddOnSlot(args: GetWebAppPremierAddOnSlotArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppPremierAddOnSlotResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:getWebAppPremierAddOnSlot", {
        "name": args.name,
        "premierAddOnName": args.premierAddOnName,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface GetWebAppPremierAddOnSlotArgs {
    /**
     * Name of the app.
     */
    name: string;
    /**
     * Add-on name.
     */
    premierAddOnName: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will get the named add-on for the production slot.
     */
    slot: string;
}

/**
 * Premier add-on.
 */
export interface GetWebAppPremierAddOnSlotResult {
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Location.
     */
    readonly location: string;
    /**
     * Premier add on Marketplace offer.
     */
    readonly marketplaceOffer?: string;
    /**
     * Premier add on Marketplace publisher.
     */
    readonly marketplacePublisher?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Premier add on Product.
     */
    readonly product?: string;
    /**
     * Premier add on SKU.
     */
    readonly sku?: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * Premier add on Vendor.
     */
    readonly vendor?: string;
}
/**
 * Description for Gets a named add-on of an app.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2016-08-01, 2020-10-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function getWebAppPremierAddOnSlotOutput(args: GetWebAppPremierAddOnSlotOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWebAppPremierAddOnSlotResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:getWebAppPremierAddOnSlot", {
        "name": args.name,
        "premierAddOnName": args.premierAddOnName,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface GetWebAppPremierAddOnSlotOutputArgs {
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Add-on name.
     */
    premierAddOnName: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will get the named add-on for the production slot.
     */
    slot: pulumi.Input<string>;
}