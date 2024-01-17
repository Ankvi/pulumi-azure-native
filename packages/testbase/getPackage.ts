import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a Test Base Package.
 * Azure REST API version: 2022-04-01-preview.
 *
 * Other available API versions: 2023-11-01-preview.
 */
export function getPackage(args: GetPackageArgs, opts?: pulumi.InvokeOptions): Promise<GetPackageResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:testbase:getPackage", {
        "packageName": args.packageName,
        "resourceGroupName": args.resourceGroupName,
        "testBaseAccountName": args.testBaseAccountName,
    }, opts);
}

export interface GetPackageArgs {
    /**
     * The resource name of the Test Base Package.
     */
    packageName: string;
    /**
     * The name of the resource group that contains the resource.
     */
    resourceGroupName: string;
    /**
     * The resource name of the Test Base Account.
     */
    testBaseAccountName: string;
}

/**
 * The Test Base Package resource.
 */
export interface GetPackageResult {
    /**
     * Application name
     */
    readonly applicationName: string;
    /**
     * The file path of the package.
     */
    readonly blobPath: string;
    /**
     * Resource Etag.
     */
    readonly etag: string;
    /**
     * The flighting ring for feature update.
     */
    readonly flightingRing: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Flag showing that whether the package is enabled. It doesn't schedule test for package which is not enabled.
     */
    readonly isEnabled: boolean;
    /**
     * The UTC timestamp when the package was last modified.
     */
    readonly lastModifiedTime: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The status of the package.
     */
    readonly packageStatus: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * The system metadata relating to this resource
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Specifies the target OSs of specific OS Update types.
     */
    readonly targetOSList: types.outputs.TargetOSInfoResponse[];
    /**
     * OOB, functional or both. Mapped to the data in 'tests' property.
     */
    readonly testTypes: string[];
    /**
     * The detailed test information.
     */
    readonly tests: types.outputs.TestResponse[];
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * The validation results. There's validation on package when it's created or updated.
     */
    readonly validationResults: types.outputs.PackageValidationResultResponse[];
    /**
     * Application version
     */
    readonly version: string;
}
/**
 * Gets a Test Base Package.
 * Azure REST API version: 2022-04-01-preview.
 *
 * Other available API versions: 2023-11-01-preview.
 */
export function getPackageOutput(args: GetPackageOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPackageResult> {
    return pulumi.output(args).apply((a: any) => getPackage(a, opts))
}

export interface GetPackageOutputArgs {
    /**
     * The resource name of the Test Base Package.
     */
    packageName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource name of the Test Base Account.
     */
    testBaseAccountName: pulumi.Input<string>;
}