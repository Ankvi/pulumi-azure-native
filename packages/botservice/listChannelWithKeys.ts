import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists a Channel registration for a Bot Service including secrets
 *
 * Uses Azure REST API version 2023-09-15-preview.
 *
 * Other available API versions: 2022-09-15. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native botservice [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listChannelWithKeys(args: ListChannelWithKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListChannelWithKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:botservice:listChannelWithKeys", {
        "channelName": args.channelName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface ListChannelWithKeysArgs {
    /**
     * The name of the Channel resource.
     */
    channelName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the Bot resource.
     */
    resourceName: string;
}

/**
 * The ARM channel of list channel with keys operation response.
 */
export interface ListChannelWithKeysResult {
    /**
     * Changed time of the resource
     */
    readonly changedTime?: string;
    /**
     * Entity tag of the resource
     */
    readonly entityTag?: string;
    /**
     * Entity Tag.
     */
    readonly etag?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Required. Gets or sets the Kind of the resource.
     */
    readonly kind?: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The set of properties specific to bot channel resource
     */
    readonly properties: types.outputs.AcsChatChannelResponse | types.outputs.AlexaChannelResponse | types.outputs.DirectLineChannelResponse | types.outputs.DirectLineSpeechChannelResponse | types.outputs.EmailChannelResponse | types.outputs.FacebookChannelResponse | types.outputs.KikChannelResponse | types.outputs.LineChannelResponse | types.outputs.M365ExtensionsResponse | types.outputs.MsTeamsChannelResponse | types.outputs.OmnichannelResponse | types.outputs.OutlookChannelResponse | types.outputs.SearchAssistantResponse | types.outputs.SkypeChannelResponse | types.outputs.SlackChannelResponse | types.outputs.SmsChannelResponse | types.outputs.TelegramChannelResponse | types.outputs.TelephonyChannelResponse | types.outputs.WebChatChannelResponse;
    /**
     * Provisioning state of the resource
     */
    readonly provisioningState?: string;
    /**
     * The set of properties specific to bot channel resource
     */
    readonly resource?: types.outputs.AcsChatChannelResponse | types.outputs.AlexaChannelResponse | types.outputs.DirectLineChannelResponse | types.outputs.DirectLineSpeechChannelResponse | types.outputs.EmailChannelResponse | types.outputs.FacebookChannelResponse | types.outputs.KikChannelResponse | types.outputs.LineChannelResponse | types.outputs.M365ExtensionsResponse | types.outputs.MsTeamsChannelResponse | types.outputs.OmnichannelResponse | types.outputs.OutlookChannelResponse | types.outputs.SearchAssistantResponse | types.outputs.SkypeChannelResponse | types.outputs.SlackChannelResponse | types.outputs.SmsChannelResponse | types.outputs.TelegramChannelResponse | types.outputs.TelephonyChannelResponse | types.outputs.WebChatChannelResponse;
    /**
     * Channel settings
     */
    readonly setting?: types.outputs.ChannelSettingsResponse;
    /**
     * Gets or sets the SKU of the resource.
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Entity zones
     */
    readonly zones: string[];
}
/**
 * Lists a Channel registration for a Bot Service including secrets
 *
 * Uses Azure REST API version 2023-09-15-preview.
 *
 * Other available API versions: 2022-09-15. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native botservice [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listChannelWithKeysOutput(args: ListChannelWithKeysOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListChannelWithKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:botservice:listChannelWithKeys", {
        "channelName": args.channelName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface ListChannelWithKeysOutputArgs {
    /**
     * The name of the Channel resource.
     */
    channelName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Bot resource.
     */
    resourceName: pulumi.Input<string>;
}