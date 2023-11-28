import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a specific Azure Active Directory only authentication property.
 */
export function getManagedInstanceAzureADOnlyAuthentication(args: GetManagedInstanceAzureADOnlyAuthenticationArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedInstanceAzureADOnlyAuthenticationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql/v20230501preview:getManagedInstanceAzureADOnlyAuthentication", {
        "authenticationName": args.authenticationName,
        "managedInstanceName": args.managedInstanceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagedInstanceAzureADOnlyAuthenticationArgs {
    /**
     * The name of server azure active directory only authentication.
     */
    authenticationName: string;
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
 * Azure Active Directory only authentication.
 */
export interface GetManagedInstanceAzureADOnlyAuthenticationResult {
    /**
     * Azure Active Directory only Authentication enabled.
     */
    readonly azureADOnlyAuthentication: boolean;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a specific Azure Active Directory only authentication property.
 */
export function getManagedInstanceAzureADOnlyAuthenticationOutput(args: GetManagedInstanceAzureADOnlyAuthenticationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagedInstanceAzureADOnlyAuthenticationResult> {
    return pulumi.output(args).apply((a: any) => getManagedInstanceAzureADOnlyAuthentication(a, opts))
}

export interface GetManagedInstanceAzureADOnlyAuthenticationOutputArgs {
    /**
     * The name of server azure active directory only authentication.
     */
    authenticationName: pulumi.Input<string>;
    /**
     * The name of the managed instance.
     */
    managedInstanceName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
}
