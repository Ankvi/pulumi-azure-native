import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets information about the specified application package.
 */
export function getApplicationPackage(args: GetApplicationPackageArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationPackageResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:batch/v20230501:getApplicationPackage", {
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
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Gets information about the specified application package.
 */
export function getApplicationPackageOutput(args: GetApplicationPackageOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApplicationPackageResult> {
    return pulumi.output(args).apply((a: any) => getApplicationPackage(a, opts))
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