import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a SuppressionList resource.
 */
export function getSuppressionList(args: GetSuppressionListArgs, opts?: pulumi.InvokeOptions): Promise<GetSuppressionListResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:communication/v20230601preview:getSuppressionList", {
        "domainName": args.domainName,
        "emailServiceName": args.emailServiceName,
        "resourceGroupName": args.resourceGroupName,
        "suppressionListName": args.suppressionListName,
    }, opts);
}

export interface GetSuppressionListArgs {
    /**
     * The name of the Domains resource.
     */
    domainName: string;
    /**
     * The name of the EmailService resource.
     */
    emailServiceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the suppression list.
     */
    suppressionListName: string;
}

/**
 * A class representing a SuppressionList resource.
 */
export interface GetSuppressionListResult {
    /**
     * The date the resource was created.
     */
    readonly createdTimeStamp: string;
    /**
     * The location where the SuppressionListAddress data is stored at rest. This value is inherited from the parent Domains resource.
     */
    readonly dataLocation: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The date the resource was last updated.
     */
    readonly lastUpdatedTimeStamp: string;
    /**
     * The the name of the suppression list. This value must match one of the valid sender usernames of the sending domain.
     */
    readonly listName?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a SuppressionList resource.
 */
export function getSuppressionListOutput(args: GetSuppressionListOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSuppressionListResult> {
    return pulumi.output(args).apply((a: any) => getSuppressionList(a, opts))
}

export interface GetSuppressionListOutputArgs {
    /**
     * The name of the Domains resource.
     */
    domainName: pulumi.Input<string>;
    /**
     * The name of the EmailService resource.
     */
    emailServiceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the suppression list.
     */
    suppressionListName: pulumi.Input<string>;
}
