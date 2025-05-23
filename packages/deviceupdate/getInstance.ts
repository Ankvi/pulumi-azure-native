import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns instance details for the given instance and account name.
 *
 * Uses Azure REST API version 2023-07-01.
 */
export function getInstance(args: GetInstanceArgs, opts?: pulumi.InvokeOptions): Promise<GetInstanceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:deviceupdate:getInstance", {
        "accountName": args.accountName,
        "instanceName": args.instanceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetInstanceArgs {
    /**
     * Account name.
     */
    accountName: string;
    /**
     * Instance name.
     */
    instanceName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * Device Update instance details.
 */
export interface GetInstanceResult {
    /**
     * Parent Device Update Account name which Instance belongs to.
     */
    readonly accountName: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Customer-initiated diagnostic log collection storage properties
     */
    readonly diagnosticStorageProperties?: types.outputs.DiagnosticStoragePropertiesResponse;
    /**
     * Enables or Disables the diagnostic logs collection
     */
    readonly enableDiagnostics?: boolean;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * List of IoT Hubs associated with the account.
     */
    readonly iotHubs?: types.outputs.IotHubSettingsResponse[];
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Provisioning state.
     */
    readonly provisioningState: string;
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
 * Returns instance details for the given instance and account name.
 *
 * Uses Azure REST API version 2023-07-01.
 */
export function getInstanceOutput(args: GetInstanceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetInstanceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:deviceupdate:getInstance", {
        "accountName": args.accountName,
        "instanceName": args.instanceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetInstanceOutputArgs {
    /**
     * Account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * Instance name.
     */
    instanceName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}