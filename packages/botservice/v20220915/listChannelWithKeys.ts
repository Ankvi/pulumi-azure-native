import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Lists a Channel registration for a Bot Service including secrets
 */
export function listChannelWithKeys(args: ListChannelWithKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListChannelWithKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:botservice/v20220915:listChannelWithKeys", {
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
     * The name of the Bot resource group in the user subscription.
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
     * Specifies the resource ID.
     */
    readonly id: string;
    /**
     * Required. Gets or sets the Kind of the resource.
     */
    readonly kind?: string;
    /**
     * Specifies the location of the resource.
     */
    readonly location?: string;
    /**
     * Specifies the name of the resource.
     */
    readonly name: string;
    /**
     * The set of properties specific to bot channel resource
     */
    readonly properties: types.outputs.botservice.v20220915.AcsChatChannelResponse | types.outputs.botservice.v20220915.AlexaChannelResponse | types.outputs.botservice.v20220915.DirectLineChannelResponse | types.outputs.botservice.v20220915.DirectLineSpeechChannelResponse | types.outputs.botservice.v20220915.EmailChannelResponse | types.outputs.botservice.v20220915.FacebookChannelResponse | types.outputs.botservice.v20220915.KikChannelResponse | types.outputs.botservice.v20220915.LineChannelResponse | types.outputs.botservice.v20220915.M365ExtensionsResponse | types.outputs.botservice.v20220915.MsTeamsChannelResponse | types.outputs.botservice.v20220915.OmnichannelResponse | types.outputs.botservice.v20220915.OutlookChannelResponse | types.outputs.botservice.v20220915.SearchAssistantResponse | types.outputs.botservice.v20220915.SkypeChannelResponse | types.outputs.botservice.v20220915.SlackChannelResponse | types.outputs.botservice.v20220915.SmsChannelResponse | types.outputs.botservice.v20220915.TelegramChannelResponse | types.outputs.botservice.v20220915.TelephonyChannelResponse | types.outputs.botservice.v20220915.WebChatChannelResponse;
    /**
     * Provisioning state of the resource
     */
    readonly provisioningState?: string;
    /**
     * The set of properties specific to bot channel resource
     */
    readonly resource?: types.outputs.botservice.v20220915.AcsChatChannelResponse | types.outputs.botservice.v20220915.AlexaChannelResponse | types.outputs.botservice.v20220915.DirectLineChannelResponse | types.outputs.botservice.v20220915.DirectLineSpeechChannelResponse | types.outputs.botservice.v20220915.EmailChannelResponse | types.outputs.botservice.v20220915.FacebookChannelResponse | types.outputs.botservice.v20220915.KikChannelResponse | types.outputs.botservice.v20220915.LineChannelResponse | types.outputs.botservice.v20220915.M365ExtensionsResponse | types.outputs.botservice.v20220915.MsTeamsChannelResponse | types.outputs.botservice.v20220915.OmnichannelResponse | types.outputs.botservice.v20220915.OutlookChannelResponse | types.outputs.botservice.v20220915.SearchAssistantResponse | types.outputs.botservice.v20220915.SkypeChannelResponse | types.outputs.botservice.v20220915.SlackChannelResponse | types.outputs.botservice.v20220915.SmsChannelResponse | types.outputs.botservice.v20220915.TelegramChannelResponse | types.outputs.botservice.v20220915.TelephonyChannelResponse | types.outputs.botservice.v20220915.WebChatChannelResponse;
    /**
     * Channel settings
     */
    readonly setting?: types.outputs.botservice.v20220915.ChannelSettingsResponse;
    /**
     * Gets or sets the SKU of the resource.
     */
    readonly sku?: types.outputs.botservice.v20220915.SkuResponse;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Specifies the type of the resource.
     */
    readonly type: string;
    /**
     * Entity zones
     */
    readonly zones: string[];
}
/**
 * Lists a Channel registration for a Bot Service including secrets
 */
export function listChannelWithKeysOutput(args: ListChannelWithKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListChannelWithKeysResult> {
    return pulumi.output(args).apply((a: any) => listChannelWithKeys(a, opts))
}

export interface ListChannelWithKeysOutputArgs {
    /**
     * The name of the Channel resource.
     */
    channelName: pulumi.Input<string>;
    /**
     * The name of the Bot resource group in the user subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Bot resource.
     */
    resourceName: pulumi.Input<string>;
}
