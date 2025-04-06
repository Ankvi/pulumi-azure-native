import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the properties of a Confidential Ledger.
 *
 * Uses Azure REST API version 2023-06-28-preview.
 *
 * Other available API versions: 2022-05-13, 2022-09-08-preview, 2023-01-26-preview, 2024-07-09-preview, 2024-09-19-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native confidentialledger [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getLedger(args: GetLedgerArgs, opts?: pulumi.InvokeOptions): Promise<GetLedgerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:confidentialledger:getLedger", {
        "ledgerName": args.ledgerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLedgerArgs {
    /**
     * Name of the Confidential Ledger
     */
    ledgerName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Confidential Ledger. Contains the properties of Confidential Ledger Resource.
 */
export interface GetLedgerResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Properties of Confidential Ledger Resource.
     */
    readonly properties: types.outputs.LedgerPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Retrieves the properties of a Confidential Ledger.
 *
 * Uses Azure REST API version 2023-06-28-preview.
 *
 * Other available API versions: 2022-05-13, 2022-09-08-preview, 2023-01-26-preview, 2024-07-09-preview, 2024-09-19-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native confidentialledger [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getLedgerOutput(args: GetLedgerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetLedgerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:confidentialledger:getLedger", {
        "ledgerName": args.ledgerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLedgerOutputArgs {
    /**
     * Name of the Confidential Ledger
     */
    ledgerName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}