import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Describes a Shared Private Link Resource
 * Azure REST API version: 2023-02-01. Prior API version in Azure Native 1.x: 2021-04-01-preview.
 *
 * Other available API versions: 2023-03-01-preview, 2023-06-01-preview, 2023-08-01-preview, 2024-01-01-preview, 2024-03-01, 2024-04-01-preview, 2024-08-01-preview, 2024-10-01-preview.
 */
export class WebPubSubSharedPrivateLinkResource extends pulumi.CustomResource {
    /**
     * Get an existing WebPubSubSharedPrivateLinkResource resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebPubSubSharedPrivateLinkResource {
        return new WebPubSubSharedPrivateLinkResource(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:webpubsub:WebPubSubSharedPrivateLinkResource';

    /**
     * Returns true if the given object is an instance of WebPubSubSharedPrivateLinkResource.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebPubSubSharedPrivateLinkResource {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebPubSubSharedPrivateLinkResource.__pulumiType;
    }

    /**
     * The group id from the provider of resource the shared private link resource is for
     */
    public readonly groupId!: pulumi.Output<string>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The resource id of the resource the shared private link resource is for
     */
    public readonly privateLinkResourceId!: pulumi.Output<string>;
    /**
     * Provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The request message for requesting approval of the shared private link resource
     */
    public readonly requestMessage!: pulumi.Output<string | undefined>;
    /**
     * Status of the shared private link resource
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource - e.g. "Microsoft.SignalRService/SignalR"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WebPubSubSharedPrivateLinkResource resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebPubSubSharedPrivateLinkResourceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.groupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'groupId'");
            }
            if ((!args || args.privateLinkResourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privateLinkResourceId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.resourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceName'");
            }
            resourceInputs["groupId"] = args ? args.groupId : undefined;
            resourceInputs["privateLinkResourceId"] = args ? args.privateLinkResourceId : undefined;
            resourceInputs["requestMessage"] = args ? args.requestMessage : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["sharedPrivateLinkResourceName"] = args ? args.sharedPrivateLinkResourceName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["groupId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateLinkResourceId"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["requestMessage"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:webpubsub/v20210401preview:WebPubSubSharedPrivateLinkResource" }, { type: "azure-native:webpubsub/v20210601preview:WebPubSubSharedPrivateLinkResource" }, { type: "azure-native:webpubsub/v20210901preview:WebPubSubSharedPrivateLinkResource" }, { type: "azure-native:webpubsub/v20211001:WebPubSubSharedPrivateLinkResource" }, { type: "azure-native:webpubsub/v20220801preview:WebPubSubSharedPrivateLinkResource" }, { type: "azure-native:webpubsub/v20230201:WebPubSubSharedPrivateLinkResource" }, { type: "azure-native:webpubsub/v20230301preview:WebPubSubSharedPrivateLinkResource" }, { type: "azure-native:webpubsub/v20230601preview:WebPubSubSharedPrivateLinkResource" }, { type: "azure-native:webpubsub/v20230801preview:WebPubSubSharedPrivateLinkResource" }, { type: "azure-native:webpubsub/v20240101preview:WebPubSubSharedPrivateLinkResource" }, { type: "azure-native:webpubsub/v20240301:WebPubSubSharedPrivateLinkResource" }, { type: "azure-native:webpubsub/v20240401preview:WebPubSubSharedPrivateLinkResource" }, { type: "azure-native:webpubsub/v20240801preview:WebPubSubSharedPrivateLinkResource" }, { type: "azure-native:webpubsub/v20241001preview:WebPubSubSharedPrivateLinkResource" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WebPubSubSharedPrivateLinkResource.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebPubSubSharedPrivateLinkResource resource.
 */
export interface WebPubSubSharedPrivateLinkResourceArgs {
    /**
     * The group id from the provider of resource the shared private link resource is for
     */
    groupId: pulumi.Input<string>;
    /**
     * The resource id of the resource the shared private link resource is for
     */
    privateLinkResourceId: pulumi.Input<string>;
    /**
     * The request message for requesting approval of the shared private link resource
     */
    requestMessage?: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the resource.
     */
    resourceName: pulumi.Input<string>;
    /**
     * The name of the shared private link resource
     */
    sharedPrivateLinkResourceName?: pulumi.Input<string>;
}