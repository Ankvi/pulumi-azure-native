import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets information about the specified application package.
 *
 * Uses Azure REST API version 2024-07-01.
 *
 * Other available API versions: 2023-05-01, 2023-11-01, 2024-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native batch [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getApplicationPackage(args: GetApplicationPackageArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationPackageResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:batch:getApplicationPackage", {
        "accountName": args.accountName,
        "applicationName": args.applicationName,
        "resourceGroupName": args.resourceGroupName,
        "versionName": args.versionName,
    }, opts);
}

export interface GetApplicationPackageArgs {
    /**
     * The name of the Batch account.
     */
    accountName: string;
    /**
     * The name of the application. This must be unique within the account.
     */
    applicationName: string;
    /**
     * The name of the resource group that contains the Batch account.
     */
    resourceGroupName: string;
    /**
     * The version of the application.
     */
    versionName: string;
}

/**
 * An application package which represents a particular version of an application.
 */
export interface GetApplicationPackageResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The ETag of the resource, used for concurrency statements.
     */
    readonly etag: string;
    /**
     * The format of the application package, if the package is active.
     */
    readonly format: string;
    /**
     * The ID of the resource.
     */
    readonly id: string;
    /**
     * The time at which the package was last activated, if the package is active.
     */
    readonly lastActivationTime: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The current state of the application package.
     */
    readonly state: string;
    /**
     * The URL for the application package in Azure Storage.
     */
    readonly storageUrl: string;
    /**
     * The UTC time at which the Azure Storage URL will expire.
     */
    readonly storageUrlExpiry: string;
    /**
     * The tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Gets information about the specified application package.
 *
 * Uses Azure REST API version 2024-07-01.
 *
 * Other available API versions: 2023-05-01, 2023-11-01, 2024-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native batch [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getApplicationPackageOutput(args: GetApplicationPackageOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetApplicationPackageResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:batch:getApplicationPackage", {
        "accountName": args.accountName,
        "applicationName": args.applicationName,
        "resourceGroupName": args.resourceGroupName,
        "versionName": args.versionName,
    }, opts);
}

export interface GetApplicationPackageOutputArgs {
    /**
     * The name of the Batch account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the application. This must be unique within the account.
     */
    applicationName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the Batch account.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The version of the application.
     */
    versionName: pulumi.Input<string>;
}