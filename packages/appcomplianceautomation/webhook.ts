import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A class represent an AppComplianceAutomation webhook resource.
 *
 * Uses Azure REST API version 2024-06-27. In version 2.x of the Azure Native provider, it used API version 2024-06-27.
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
    public static readonly __pulumiType = 'azure-native:appcomplianceautomation:Webhook';

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
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * content type
     */
    public readonly contentType!: pulumi.Output<string | undefined>;
    /**
     * webhook deliveryStatus
     */
    public /*out*/ readonly deliveryStatus!: pulumi.Output<string>;
    /**
     * whether to enable ssl verification
     */
    public readonly enableSslVerification!: pulumi.Output<string | undefined>;
    /**
     * under which event notification should be sent.
     */
    public readonly events!: pulumi.Output<string[] | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * webhook payload url
     */
    public readonly payloadUrl!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Provisioning State
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * whether to send notification under any event.
     */
    public readonly sendAllEvents!: pulumi.Output<string | undefined>;
    /**
     * Webhook status.
     */
    public readonly status!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Tenant id.
     */
    public /*out*/ readonly tenantId!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * whether to update webhookKey.
     */
    public readonly updateWebhookKey!: pulumi.Output<string | undefined>;
    /**
     * Webhook id in database.
     */
    public /*out*/ readonly webhookId!: pulumi.Output<string>;
    /**
     * webhook secret token. If not set, this field value is null; otherwise, please set a string value.
     */
    public readonly webhookKey!: pulumi.Output<string | undefined>;
    /**
     * whether webhookKey is enabled.
     */
    public /*out*/ readonly webhookKeyEnabled!: pulumi.Output<string>;

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
            if ((!args || args.reportName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'reportName'");
            }
            resourceInputs["contentType"] = args ? args.contentType : undefined;
            resourceInputs["enableSslVerification"] = args ? args.enableSslVerification : undefined;
            resourceInputs["events"] = args ? args.events : undefined;
            resourceInputs["payloadUrl"] = args ? args.payloadUrl : undefined;
            resourceInputs["reportName"] = args ? args.reportName : undefined;
            resourceInputs["sendAllEvents"] = args ? args.sendAllEvents : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["updateWebhookKey"] = args ? args.updateWebhookKey : undefined;
            resourceInputs["webhookKey"] = args ? args.webhookKey : undefined;
            resourceInputs["webhookName"] = args ? args.webhookName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["deliveryStatus"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["webhookId"] = undefined /*out*/;
            resourceInputs["webhookKeyEnabled"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["contentType"] = undefined /*out*/;
            resourceInputs["deliveryStatus"] = undefined /*out*/;
            resourceInputs["enableSslVerification"] = undefined /*out*/;
            resourceInputs["events"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["payloadUrl"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sendAllEvents"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updateWebhookKey"] = undefined /*out*/;
            resourceInputs["webhookId"] = undefined /*out*/;
            resourceInputs["webhookKey"] = undefined /*out*/;
            resourceInputs["webhookKeyEnabled"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:appcomplianceautomation/v20240627:Webhook" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Webhook.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Webhook resource.
 */
export interface WebhookArgs {
    /**
     * content type
     */
    contentType?: pulumi.Input<string | types.enums.ContentType>;
    /**
     * whether to enable ssl verification
     */
    enableSslVerification?: pulumi.Input<string | types.enums.EnableSslVerification>;
    /**
     * under which event notification should be sent.
     */
    events?: pulumi.Input<pulumi.Input<string | types.enums.NotificationEvent>[]>;
    /**
     * webhook payload url
     */
    payloadUrl?: pulumi.Input<string>;
    /**
     * Report Name.
     */
    reportName: pulumi.Input<string>;
    /**
     * whether to send notification under any event.
     */
    sendAllEvents?: pulumi.Input<string | types.enums.SendAllEvents>;
    /**
     * Webhook status.
     */
    status?: pulumi.Input<string | types.enums.WebhookStatus>;
    /**
     * whether to update webhookKey.
     */
    updateWebhookKey?: pulumi.Input<string | types.enums.UpdateWebhookKey>;
    /**
     * webhook secret token. If not set, this field value is null; otherwise, please set a string value.
     */
    webhookKey?: pulumi.Input<string>;
    /**
     * Webhook Name.
     */
    webhookName?: pulumi.Input<string>;
}