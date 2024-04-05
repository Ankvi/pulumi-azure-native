import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get information about an Automation Account.
 */
export function getAutomationAccount(args: GetAutomationAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetAutomationAccountResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:automation/v20231101:getAutomationAccount", {
        "automationAccountName": args.automationAccountName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAutomationAccountArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: string;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: string;
}

/**
 * Definition of the automation account type.
 */
export interface GetAutomationAccountResult {
    /**
     * URL of automation hybrid service which is used for hybrid worker on-boarding.
     */
    readonly automationHybridServiceUrl?: string;
    /**
     * Gets the creation time.
     */
    readonly creationTime: string;
    /**
     * Gets or sets the description.
     */
    readonly description?: string;
    /**
     * Indicates whether requests using non-AAD authentication are blocked
     */
    readonly disableLocalAuth?: boolean;
    /**
     * Encryption properties for the automation account
     */
    readonly encryption?: types.outputs.EncryptionPropertiesResponse;
    /**
     * Gets or sets the etag of the resource.
     */
    readonly etag?: string;
    /**
     * Fully qualified resource Id for the resource
     */
    readonly id: string;
    /**
     * Identity for the resource.
     */
    readonly identity?: types.outputs.IdentityResponse;
    /**
     * Gets or sets the last modified by.
     */
    readonly lastModifiedBy?: string;
    /**
     * Gets the last modified time.
     */
    readonly lastModifiedTime: string;
    /**
     * The Azure Region where the resource lives
     */
    readonly location?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * List of Automation operations supported by the Automation resource provider.
     */
    readonly privateEndpointConnections?: types.outputs.PrivateEndpointConnectionResponse[];
    /**
     * Indicates whether traffic on the non-ARM endpoint (Webhook/Agent) is allowed from the public internet
     */
    readonly publicNetworkAccess?: boolean;
    /**
     * Gets or sets the SKU of account.
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * Gets status of account.
     */
    readonly state: string;
    /**
     * Resource system metadata.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Get information about an Automation Account.
 */
export function getAutomationAccountOutput(args: GetAutomationAccountOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAutomationAccountResult> {
    return pulumi.output(args).apply((a: any) => getAutomationAccount(a, opts))
}

export interface GetAutomationAccountOutputArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}