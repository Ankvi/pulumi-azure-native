import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a single custom entity store assignment by name for the provided subscription and resource group.
 *
 * Uses Azure REST API version 2021-07-01-preview.
 */
export function getCustomEntityStoreAssignment(args: GetCustomEntityStoreAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetCustomEntityStoreAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security:getCustomEntityStoreAssignment", {
        "customEntityStoreAssignmentName": args.customEntityStoreAssignmentName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCustomEntityStoreAssignmentArgs {
    /**
     * Name of the custom entity store assignment. Generated name is GUID.
     */
    customEntityStoreAssignmentName: string;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Custom entity store assignment
 */
export interface GetCustomEntityStoreAssignmentResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The link to entity store database.
     */
    readonly entityStoreDatabaseLink?: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * The principal assigned with entity store. Format of principal is: [AAD type]=[PrincipalObjectId];[TenantId]
     */
    readonly principal?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Gets a single custom entity store assignment by name for the provided subscription and resource group.
 *
 * Uses Azure REST API version 2021-07-01-preview.
 */
export function getCustomEntityStoreAssignmentOutput(args: GetCustomEntityStoreAssignmentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCustomEntityStoreAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:security:getCustomEntityStoreAssignment", {
        "customEntityStoreAssignmentName": args.customEntityStoreAssignmentName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCustomEntityStoreAssignmentOutputArgs {
    /**
     * Name of the custom entity store assignment. Generated name is GUID.
     */
    customEntityStoreAssignmentName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}