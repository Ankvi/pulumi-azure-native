import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a favorite process for a Test Base Package.
 */
export function getFavoriteProcess(args: GetFavoriteProcessArgs, opts?: pulumi.InvokeOptions): Promise<GetFavoriteProcessResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:testbase/v20220401preview:getFavoriteProcess", {
        "favoriteProcessResourceName": args.favoriteProcessResourceName,
        "packageName": args.packageName,
        "resourceGroupName": args.resourceGroupName,
        "testBaseAccountName": args.testBaseAccountName,
    }, opts);
}

export interface GetFavoriteProcessArgs {
    /**
     * The resource name of a favorite process in a package. If the process name contains characters that are not allowed in Azure Resource Name, we use 'actualProcessName' in request body to submit the name.
     */
    favoriteProcessResourceName: string;
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
 * A favorite process identifier.
 */
export interface GetFavoriteProcessResult {
    /**
     * The actual name of the favorite process. It will be equal to resource name except for the scenario that the process name contains characters that are not allowed in the resource name.
     */
    readonly actualProcessName: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The system metadata relating to this resource
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a favorite process for a Test Base Package.
 */
export function getFavoriteProcessOutput(args: GetFavoriteProcessOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFavoriteProcessResult> {
    return pulumi.output(args).apply((a: any) => getFavoriteProcess(a, opts))
}

export interface GetFavoriteProcessOutputArgs {
    /**
     * The resource name of a favorite process in a package. If the process name contains characters that are not allowed in Azure Resource Name, we use 'actualProcessName' in request body to submit the name.
     */
    favoriteProcessResourceName: pulumi.Input<string>;
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
