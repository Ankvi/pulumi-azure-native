import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Description for Gets a named add-on of an app.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2016-08-01, 2020-10-01, 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function getWebAppPremierAddOn(args: GetWebAppPremierAddOnArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppPremierAddOnResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:getWebAppPremierAddOn", {
        "name": args.name,
        "premierAddOnName": args.premierAddOnName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWebAppPremierAddOnArgs {
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
}

/**
 * Premier add-on.
 */
export interface GetWebAppPremierAddOnResult {
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
export function getWebAppPremierAddOnOutput(args: GetWebAppPremierAddOnOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWebAppPremierAddOnResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:getWebAppPremierAddOn", {
        "name": args.name,
        "premierAddOnName": args.premierAddOnName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWebAppPremierAddOnOutputArgs {
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
}