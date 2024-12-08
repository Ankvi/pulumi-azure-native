import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the SAP Instance resource.
 * Azure REST API version: 2023-10-01-preview.
 */
export function getSapInstance(args: GetSapInstanceArgs, opts?: pulumi.InvokeOptions): Promise<GetSapInstanceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:workloads:getSapInstance", {
        "resourceGroupName": args.resourceGroupName,
        "sapDiscoverySiteName": args.sapDiscoverySiteName,
        "sapInstanceName": args.sapInstanceName,
    }, opts);
}

export interface GetSapInstanceArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the discovery site resource for SAP Migration.
     */
    sapDiscoverySiteName: string;
    /**
     * The name of SAP Instance resource for SAP Migration.
     */
    sapInstanceName: string;
}

/**
 * Define the SAP Instance resource.
 */
export interface GetSapInstanceResult {
    /**
     * Enter a business function/department identifier to group multiple SIDs.
     */
    readonly application: string;
    /**
     * The Environment; PRD, QA, DEV, etc to which SAP system belongs to. Select from the list of available dropdown values.
     */
    readonly environment: string;
    /**
     * Defines the errors related to SAP Instance resource.
     */
    readonly errors: types.outputs.SAPMigrateErrorResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * This is the SID of the production system in a landscape.  An SAP system could itself be a production SID or a part of a landscape with a different Production SID. This field can be used to relate non-prod SIDs, other components, SID (WEBDISP) to the prod SID. Enter the value of Production SID.
     */
    readonly landscapeSid: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Defines the provisioning states.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * This is the SID of SAP System. Keeping this not equal to ID as different landscapes can have repeated System SID IDs.
     */
    readonly systemSid: string;
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
 * Gets the SAP Instance resource.
 * Azure REST API version: 2023-10-01-preview.
 */
export function getSapInstanceOutput(args: GetSapInstanceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSapInstanceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:workloads:getSapInstance", {
        "resourceGroupName": args.resourceGroupName,
        "sapDiscoverySiteName": args.sapDiscoverySiteName,
        "sapInstanceName": args.sapInstanceName,
    }, opts);
}

export interface GetSapInstanceOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the discovery site resource for SAP Migration.
     */
    sapDiscoverySiteName: pulumi.Input<string>;
    /**
     * The name of SAP Instance resource for SAP Migration.
     */
    sapInstanceName: pulumi.Input<string>;
}