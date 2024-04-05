import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets information about the specified application security group.
 */
export function getApplicationSecurityGroup(args: GetApplicationSecurityGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationSecurityGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20230201:getApplicationSecurityGroup", {
        "applicationSecurityGroupName": args.applicationSecurityGroupName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetApplicationSecurityGroupArgs {
    /**
     * The name of the application security group.
     */
    applicationSecurityGroupName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * An application security group in a resource group.
 */
export interface GetApplicationSecurityGroupResult {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the application security group resource.
     */
    readonly provisioningState: string;
    /**
     * The resource GUID property of the application security group resource. It uniquely identifies a resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.
     */
    readonly resourceGuid: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets information about the specified application security group.
 */
export function getApplicationSecurityGroupOutput(args: GetApplicationSecurityGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApplicationSecurityGroupResult> {
    return pulumi.output(args).apply((a: any) => getApplicationSecurityGroup(a, opts))
}

export interface GetApplicationSecurityGroupOutputArgs {
    /**
     * The name of the application security group.
     */
    applicationSecurityGroupName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}