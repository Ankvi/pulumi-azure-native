import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a managed instance key.
 * Azure REST API version: 2021-11-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview.
 */
export function getManagedInstanceKey(args: GetManagedInstanceKeyArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedInstanceKeyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql:getManagedInstanceKey", {
        "keyName": args.keyName,
        "managedInstanceName": args.managedInstanceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagedInstanceKeyArgs {
    /**
     * The name of the managed instance key to be retrieved.
     */
    keyName: string;
    /**
     * The name of the managed instance.
     */
    managedInstanceName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
}

/**
 * A managed instance key.
 */
export interface GetManagedInstanceKeyResult {
    /**
     * Key auto rotation opt-in flag. Either true or false.
     */
    readonly autoRotationEnabled: boolean;
    /**
     * The key creation date.
     */
    readonly creationDate: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Kind of encryption protector. This is metadata used for the Azure portal experience.
     */
    readonly kind: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Thumbprint of the key.
     */
    readonly thumbprint: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a managed instance key.
 * Azure REST API version: 2021-11-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview.
 */
export function getManagedInstanceKeyOutput(args: GetManagedInstanceKeyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagedInstanceKeyResult> {
    return pulumi.output(args).apply((a: any) => getManagedInstanceKey(a, opts))
}

export interface GetManagedInstanceKeyOutputArgs {
    /**
     * The name of the managed instance key to be retrieved.
     */
    keyName: pulumi.Input<string>;
    /**
     * The name of the managed instance.
     */
    managedInstanceName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
}