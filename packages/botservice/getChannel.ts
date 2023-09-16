import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns a BotService Channel registration specified by the parameters.
 * Azure REST API version: 2022-09-15.
 */
export function getChannel(args: GetChannelArgs, opts?: pulumi.InvokeOptions): Promise<GetChannelResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:botservice:getChannel", {
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
    readonly properties: types.outputs.botservice.AcsChatChannelResponse | types.outputs.botservice.AlexaChannelResponse | types.outputs.botservice.DirectLineChannelResponse | types.outputs.botservice.DirectLineSpeechChannelResponse | types.outputs.botservice.EmailChannelResponse | types.outputs.botservice.FacebookChannelResponse | types.outputs.botservice.KikChannelResponse | types.outputs.botservice.LineChannelResponse | types.outputs.botservice.M365ExtensionsResponse | types.outputs.botservice.MsTeamsChannelResponse | types.outputs.botservice.OmnichannelResponse | types.outputs.botservice.OutlookChannelResponse | types.outputs.botservice.SearchAssistantResponse | types.outputs.botservice.SkypeChannelResponse | types.outputs.botservice.SlackChannelResponse | types.outputs.botservice.SmsChannelResponse | types.outputs.botservice.TelegramChannelResponse | types.outputs.botservice.TelephonyChannelResponse | types.outputs.botservice.WebChatChannelResponse;
    /**
     * Gets or sets the SKU of the resource.
     */
    readonly sku?: types.outputs.botservice.SkuResponse;
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
 * Azure REST API version: 2022-09-15.
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
