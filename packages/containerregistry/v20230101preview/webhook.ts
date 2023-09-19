import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An object that represents a webhook for a container registry.
 */
export class Webhook extends pulumi.CustomResource {
    /**
     * Get an existing Webhook resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Webhook {
        return new Webhook(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:containerregistry/v20230101preview:Webhook';

    /**
     * Returns true if the given object is an instance of Webhook.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Webhook {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Webhook.__pulumiType;
    }

    /**
     * The list of actions that trigger the webhook to post notifications.
     */
    public readonly actions!: pulumi.Output<string[]>;
    /**
     * The location of the resource. This cannot be changed after the resource is created.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the webhook at the time the operation was called.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The scope of repositories where the event can be triggered. For example, 'foo:*' means events for all tags under repository 'foo'. 'foo:bar' means events for 'foo:bar' only. 'foo' is equivalent to 'foo:latest'. Empty means all events.
     */
    public readonly scope!: pulumi.Output<string | undefined>;
    /**
     * The status of the webhook at the time the operation was called.
     */
    public readonly status!: pulumi.Output<string | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The tags of the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Webhook resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebhookArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.actions === undefined) && !opts.urn) {
                throw new Error("Missing required property 'actions'");
            }
            if ((!args || args.registryName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'registryName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceUri === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceUri'");
            }
            resourceInputs["actions"] = args ? args.actions : undefined;
            resourceInputs["customHeaders"] = args ? args.customHeaders : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["registryName"] = args ? args.registryName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["serviceUri"] = args ? args.serviceUri : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["webhookName"] = args ? args.webhookName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["actions"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["scope"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:containerregistry:Webhook" }, { type: "azure-native:containerregistry/v20170601preview:Webhook" }, { type: "azure-native:containerregistry/v20171001:Webhook" }, { type: "azure-native:containerregistry/v20190501:Webhook" }, { type: "azure-native:containerregistry/v20191201preview:Webhook" }, { type: "azure-native:containerregistry/v20201101preview:Webhook" }, { type: "azure-native:containerregistry/v20210601preview:Webhook" }, { type: "azure-native:containerregistry/v20210801preview:Webhook" }, { type: "azure-native:containerregistry/v20210901:Webhook" }, { type: "azure-native:containerregistry/v20211201preview:Webhook" }, { type: "azure-native:containerregistry/v20220201preview:Webhook" }, { type: "azure-native:containerregistry/v20221201:Webhook" }, { type: "azure-native:containerregistry/v20230601preview:Webhook" }, { type: "azure-native:containerregistry/v20230701:Webhook" }, { type: "azure-native:containerregistry/v20230801preview:Webhook" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Webhook.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Webhook resource.
 */
export interface WebhookArgs {
    /**
     * The list of actions that trigger the webhook to post notifications.
     */
    actions: pulumi.Input<pulumi.Input<string | types.enums.WebhookAction>[]>;
    /**
     * Custom headers that will be added to the webhook notifications.
     */
    customHeaders?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The location of the webhook. This cannot be changed after the resource is created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the container registry.
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The scope of repositories where the event can be triggered. For example, 'foo:*' means events for all tags under repository 'foo'. 'foo:bar' means events for 'foo:bar' only. 'foo' is equivalent to 'foo:latest'. Empty means all events.
     */
    scope?: pulumi.Input<string>;
    /**
     * The service URI for the webhook to post notifications.
     */
    serviceUri: pulumi.Input<string>;
    /**
     * The status of the webhook at the time the operation was called.
     */
    status?: pulumi.Input<string | types.enums.WebhookStatus>;
    /**
     * The tags for the webhook.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the webhook.
     */
    webhookName?: pulumi.Input<string>;
}
