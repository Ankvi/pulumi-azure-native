import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns a BotService Channel registration specified by the parameters.
 */
export function getChannel(args: GetChannelArgs, opts?: pulumi.InvokeOptions): Promise<GetChannelResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:botservice/v20220915:getChannel", {
        "channelName": args.channelName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetChannelArgs {
    /**
     * The name of the Bot resource.
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
 * Bot channel resource definition
 */
export interface GetChannelResult {
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
    readonly properties: types.outputs.AcsChatChannelResponse | types.outputs.AlexaChannelResponse | types.outputs.DirectLineChannelResponse | types.outputs.DirectLineSpeechChannelResponse | types.outputs.EmailChannelResponse | types.outputs.FacebookChannelResponse | types.outputs.KikChannelResponse | types.outputs.LineChannelResponse | types.outputs.M365ExtensionsResponse | types.outputs.MsTeamsChannelResponse | types.outputs.OmnichannelResponse | types.outputs.OutlookChannelResponse | types.outputs.SearchAssistantResponse | types.outputs.SkypeChannelResponse | types.outputs.SlackChannelResponse | types.outputs.SmsChannelResponse | types.outputs.TelegramChannelResponse | types.outputs.TelephonyChannelResponse | types.outputs.WebChatChannelResponse;
    /**
     * Gets or sets the SKU of the resource.
     */
    readonly sku?: types.outputs.SkuResponse;
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
 * Returns a BotService Channel registration specified by the parameters.
 */
export function getChannelOutput(args: GetChannelOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetChannelResult> {
    return pulumi.output(args).apply((a: any) => getChannel(a, opts))
}

export interface GetChannelOutputArgs {
    /**
     * The name of the Bot resource.
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