import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a share
 *
 * Uses Azure REST API version 2021-08-01.
 */
export function getShare(args: GetShareArgs, opts?: pulumi.InvokeOptions): Promise<GetShareResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datashare:getShare", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "shareName": args.shareName,
    }, opts);
}

export interface GetShareArgs {
    /**
     * The name of the share account.
     */
    accountName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
    /**
     * The name of the share to retrieve.
     */
    shareName: string;
}

/**
 * A share data transfer object.
 */
export interface GetShareResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Time at which the share was created.
     */
    readonly createdAt: string;
    /**
     * Share description.
     */
    readonly description?: string;
    /**
     * The resource id of the azure resource
     */
    readonly id: string;
    /**
     * Name of the azure resource
     */
    readonly name: string;
    /**
     * Gets or sets the provisioning state
     */
    readonly provisioningState: string;
    /**
     * Share kind.
     */
    readonly shareKind?: string;
    /**
     * System Data of the Azure resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Share terms.
     */
    readonly terms?: string;
    /**
     * Type of the azure resource
     */
    readonly type: string;
    /**
     * Email of the user who created the resource
     */
    readonly userEmail: string;
    /**
     * Name of the user who created the resource
     */
    readonly userName: string;
}
/**
 * Get a share
 *
 * Uses Azure REST API version 2021-08-01.
 */
export function getShareOutput(args: GetShareOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetShareResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:datashare:getShare", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "shareName": args.shareName,
    }, opts);
}

export interface GetShareOutputArgs {
    /**
     * The name of the share account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the share to retrieve.
     */
    shareName: pulumi.Input<string>;
}