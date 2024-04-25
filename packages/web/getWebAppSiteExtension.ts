import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Description for Get site extension information by its ID for a web site, or a deployment slot.
 * Azure REST API version: 2022-09-01.
 *
 * Other available API versions: 2016-08-01, 2020-10-01, 2023-01-01, 2023-12-01.
 */
export function getWebAppSiteExtension(args: GetWebAppSiteExtensionArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppSiteExtensionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:getWebAppSiteExtension", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "siteExtensionId": args.siteExtensionId,
    }, opts);
}

export interface GetWebAppSiteExtensionArgs {
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
}

/**
 * Site Extension Information.
 */
export interface GetWebAppSiteExtensionResult {
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
 * Azure REST API version: 2022-09-01.
 *
 * Other available API versions: 2016-08-01, 2020-10-01, 2023-01-01, 2023-12-01.
 */
export function getWebAppSiteExtensionOutput(args: GetWebAppSiteExtensionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWebAppSiteExtensionResult> {
    return pulumi.output(args).apply((a: any) => getWebAppSiteExtension(a, opts))
}

export interface GetWebAppSiteExtensionOutputArgs {
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
}