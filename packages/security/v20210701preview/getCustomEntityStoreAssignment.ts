import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets a single custom entity store assignment by name for the provided subscription and resource group.
 */
export function getCustomEntityStoreAssignment(args: GetCustomEntityStoreAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetCustomEntityStoreAssignmentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security/v20210701preview:getCustomEntityStoreAssignment", {
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
    readonly systemData: types.outputs.security.v20210701preview.SystemDataResponse;
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Gets a single custom entity store assignment by name for the provided subscription and resource group.
 */
export function getCustomEntityStoreAssignmentOutput(args: GetCustomEntityStoreAssignmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCustomEntityStoreAssignmentResult> {
    return pulumi.output(args).apply((a: any) => getCustomEntityStoreAssignment(a, opts))
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
