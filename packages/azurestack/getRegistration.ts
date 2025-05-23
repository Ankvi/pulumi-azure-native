import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Returns the properties of an Azure Stack registration.
 *
 * Uses Azure REST API version 2022-06-01.
 *
 * Other available API versions: 2020-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native azurestack [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getRegistration(args: GetRegistrationArgs, opts?: pulumi.InvokeOptions): Promise<GetRegistrationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestack:getRegistration", {
        "registrationName": args.registrationName,
        "resourceGroup": args.resourceGroup,
    }, opts);
}

export interface GetRegistrationArgs {
    /**
     * Name of the Azure Stack registration.
     */
    registrationName: string;
    /**
     * Name of the resource group.
     */
    resourceGroup: string;
}

/**
 * Registration information.
 */
export interface GetRegistrationResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Specifies the billing mode for the Azure Stack registration.
     */
    readonly billingModel?: string;
    /**
     * The identifier of the registered Azure Stack.
     */
    readonly cloudId?: string;
    /**
     * The entity tag used for optimistic concurrency when modifying the resource.
     */
    readonly etag?: string;
    /**
     * ID of the resource.
     */
    readonly id: string;
    /**
     * Location of the resource.
     */
    readonly location: string;
    /**
     * Name of the resource.
     */
    readonly name: string;
    /**
     * The object identifier associated with the Azure Stack connecting to Azure.
     */
    readonly objectId?: string;
    /**
     * Custom tags for the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Type of Resource.
     */
    readonly type: string;
}
/**
 * Returns the properties of an Azure Stack registration.
 *
 * Uses Azure REST API version 2022-06-01.
 *
 * Other available API versions: 2020-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native azurestack [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getRegistrationOutput(args: GetRegistrationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetRegistrationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azurestack:getRegistration", {
        "registrationName": args.registrationName,
        "resourceGroup": args.resourceGroup,
    }, opts);
}

export interface GetRegistrationOutputArgs {
    /**
     * Name of the Azure Stack registration.
     */
    registrationName: pulumi.Input<string>;
    /**
     * Name of the resource group.
     */
    resourceGroup: pulumi.Input<string>;
}