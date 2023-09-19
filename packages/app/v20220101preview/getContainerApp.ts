import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Container App.
 */
export function getContainerApp(args: GetContainerAppArgs, opts?: pulumi.InvokeOptions): Promise<GetContainerAppResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:app/v20220101preview:getContainerApp", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetContainerAppArgs {
    /**
     * Name of the Container App.
     */
    name: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Container App.
 */
export interface GetContainerAppResult {
    /**
     * Non versioned Container App configuration properties.
     */
    readonly configuration?: types.outputs.ConfigurationResponse;
    /**
     * Id used to verify domain name ownership
     */
    readonly customDomainVerificationId: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * managed identities for the Container App to interact with other Azure services without maintaining any secrets or credentials in code.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * Fully Qualified Domain Name of the latest revision of the Container App.
     */
    readonly latestRevisionFqdn: string;
    /**
     * Name of the latest revision of the Container App.
     */
    readonly latestRevisionName: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Resource ID of the Container App's environment.
     */
    readonly managedEnvironmentId?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Outbound IP Addresses for container app.
     */
    readonly outboundIpAddresses: string[];
    /**
     * Provisioning state of the Container App.
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
     * Container App versioned application definition.
     */
    readonly template?: types.outputs.TemplateResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Container App.
 */
export function getContainerAppOutput(args: GetContainerAppOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetContainerAppResult> {
    return pulumi.output(args).apply((a: any) => getContainerApp(a, opts))
}

export interface GetContainerAppOutputArgs {
    /**
     * Name of the Container App.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
