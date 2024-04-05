import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Description for Get site extension information by its ID for a web site, or a deployment slot.
 */
export function getWebAppSiteExtensionSlot(args: GetWebAppSiteExtensionSlotArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppSiteExtensionSlotResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20230101:getWebAppSiteExtensionSlot", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "siteExtensionId": args.siteExtensionId,
        "slot": args.slot,
    }, opts);
}

export interface GetWebAppSiteExtensionSlotArgs {
    /**
     * Site name.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
    /**
     * Site extension name.
     */
    siteExtensionId: string;
    /**
     * Name of the deployment slot. If a slot is not specified, the API uses the production slot.
     */
    slot: string;
}

/**
 * Site Extension Information.
 */
export interface GetWebAppSiteExtensionSlotResult {
    /**
     * List of authors.
     */
    readonly authors?: string[];
    /**
     * Site Extension comment.
     */
    readonly comment?: string;
    /**
     * Detailed description.
     */
    readonly description?: string;
    /**
     * Count of downloads.
     */
    readonly downloadCount?: number;
    /**
     * Site extension ID.
     */
    readonly extensionId?: string;
    /**
     * Site extension type.
     */
    readonly extensionType?: string;
    /**
     * Extension URL.
     */
    readonly extensionUrl?: string;
    /**
     * Feed URL.
     */
    readonly feedUrl?: string;
    /**
     * Icon URL.
     */
    readonly iconUrl?: string;
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Installed timestamp.
     */
    readonly installedDateTime?: string;
    /**
     * Installer command line parameters.
     */
    readonly installerCommandLineParams?: string;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * License URL.
     */
    readonly licenseUrl?: string;
    /**
     * <code>true</code> if the local version is the latest version; <code>false</code> otherwise.
     */
    readonly localIsLatestVersion?: boolean;
    /**
     * Local path.
     */
    readonly localPath?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Project URL.
     */
    readonly projectUrl?: string;
    /**
     * Provisioning state.
     */
    readonly provisioningState?: string;
    /**
     * Published timestamp.
     */
    readonly publishedDateTime?: string;
    /**
     * Summary description.
     */
    readonly summary?: string;
    readonly title?: string;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * Version information.
     */
    readonly version?: string;
}
/**
 * Description for Get site extension information by its ID for a web site, or a deployment slot.
 */
export function getWebAppSiteExtensionSlotOutput(args: GetWebAppSiteExtensionSlotOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWebAppSiteExtensionSlotResult> {
    return pulumi.output(args).apply((a: any) => getWebAppSiteExtensionSlot(a, opts))
}

export interface GetWebAppSiteExtensionSlotOutputArgs {
    /**
     * Site name.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Site extension name.
     */
    siteExtensionId: pulumi.Input<string>;
    /**
     * Name of the deployment slot. If a slot is not specified, the API uses the production slot.
     */
    slot: pulumi.Input<string>;
}