import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets information about the specified application.
 */
export function getApplication(args: GetApplicationArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:batch/v20230501:getApplication", {
        "accountName": args.accountName,
        "applicationName": args.applicationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetApplicationArgs {
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
}

/**
 * Contains information about an application in a Batch account.
 */
export interface GetApplicationResult {
    /**
     * A value indicating whether packages within the application may be overwritten using the same version string.
     */
    readonly allowUpdates?: boolean;
    /**
     * The package to use if a client requests the application but does not specify a version. This property can only be set to the name of an existing package.
     */
    readonly defaultVersion?: string;
    /**
     * The display name for the application.
     */
    readonly displayName?: string;
    /**
     * The ETag of the resource, used for concurrency statements.
     */
    readonly etag: string;
    /**
     * The ID of the resource.
     */
    readonly id: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Gets information about the specified application.
 */
export function getApplicationOutput(args: GetApplicationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApplicationResult> {
    return pulumi.output(args).apply((a: any) => getApplication(a, opts))
}

export interface GetApplicationOutputArgs {
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
}
