import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Returns the activation key of the manager.
 */
export function listManagerActivationKey(args: ListManagerActivationKeyArgs, opts?: pulumi.InvokeOptions): Promise<ListManagerActivationKeyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storsimple/v20170601:listManagerActivationKey", {
        "managerName": args.managerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListManagerActivationKeyArgs {
    /**
     * The manager name
     */
    managerName: string;
    /**
     * The resource group name
     */
    resourceGroupName: string;
}

/**
 * The key.
 */
export interface ListManagerActivationKeyResult {
    /**
     * The activation key for the device.
     */
    readonly activationKey: string;
}
/**
 * Returns the activation key of the manager.
 */
export function listManagerActivationKeyOutput(args: ListManagerActivationKeyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListManagerActivationKeyResult> {
    return pulumi.output(args).apply((a: any) => listManagerActivationKey(a, opts))
}

export interface ListManagerActivationKeyOutputArgs {
    /**
     * The manager name
     */
    managerName: pulumi.Input<string>;
    /**
     * The resource group name
     */
    resourceGroupName: pulumi.Input<string>;
}