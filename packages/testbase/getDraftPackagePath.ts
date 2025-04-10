import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets draft package path and temp working path with SAS.
 *
 * Uses Azure REST API version 2023-11-01-preview.
 */
export function getDraftPackagePath(args: GetDraftPackagePathArgs, opts?: pulumi.InvokeOptions): Promise<GetDraftPackagePathResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:testbase:getDraftPackagePath", {
        "draftPackageName": args.draftPackageName,
        "resourceGroupName": args.resourceGroupName,
        "testBaseAccountName": args.testBaseAccountName,
    }, opts);
}

export interface GetDraftPackagePathArgs {
    /**
     * The resource name of the Test Base Draft Package.
     */
    draftPackageName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The resource name of the Test Base Account.
     */
    testBaseAccountName: string;
}

/**
 * The response of getting a download URL.
 */
export interface GetDraftPackagePathResult {
    /**
     * The base URL of the storage account.
     */
    readonly baseUrl: string;
    /**
     * The relative path of the folder hosting package files.
     */
    readonly draftPackagePath: string;
    /**
     * Expiry date of the SAS token.
     */
    readonly expirationTime: string;
    /**
     * A SAS token for the storage account to access workspace.
     */
    readonly sasToken: string;
    /**
     * The relative path for a temporary folder for package creation work.
     */
    readonly workingPath: string;
}
/**
 * Gets draft package path and temp working path with SAS.
 *
 * Uses Azure REST API version 2023-11-01-preview.
 */
export function getDraftPackagePathOutput(args: GetDraftPackagePathOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDraftPackagePathResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:testbase:getDraftPackagePath", {
        "draftPackageName": args.draftPackageName,
        "resourceGroupName": args.resourceGroupName,
        "testBaseAccountName": args.testBaseAccountName,
    }, opts);
}

export interface GetDraftPackagePathOutputArgs {
    /**
     * The resource name of the Test Base Draft Package.
     */
    draftPackageName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource name of the Test Base Account.
     */
    testBaseAccountName: pulumi.Input<string>;
}