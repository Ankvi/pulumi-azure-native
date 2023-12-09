import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Description of a NotificationHub Resource.
 */
export class NotificationHub extends pulumi.CustomResource {
    /**
     * Get an existing NotificationHub resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NotificationHub {
        return new NotificationHub(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:notificationhubs/v20170401:NotificationHub';

    /**
     * Returns true if the given object is an instance of NotificationHub.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NotificationHub {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NotificationHub.__pulumiType;
    }

    /**
     * The AdmCredential of the created NotificationHub
     */
    public readonly admCredential!: pulumi.Output<types.outputs.AdmCredentialResponse | undefined>;
    /**
     * The ApnsCredential of the created NotificationHub
     */
    public readonly apnsCredential!: pulumi.Output<types.outputs.ApnsCredentialResponse | undefined>;
    /**
     * The AuthorizationRules of the created NotificationHub
     */
    public readonly authorizationRules!: pulumi.Output<types.outputs.SharedAccessAuthorizationRulePropertiesResponse[] | undefined>;
    /**
     * The BaiduCredential of the created NotificationHub
     */
    public readonly baiduCredential!: pulumi.Output<types.outputs.BaiduCredentialResponse | undefined>;
    /**
     * The GcmCredential of the created NotificationHub
     */
    public readonly gcmCredential!: pulumi.Output<types.outputs.GcmCredentialResponse | undefined>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The MpnsCredential of the created NotificationHub
     */
    public readonly mpnsCredential!: pulumi.Output<types.outputs.MpnsCredentialResponse | undefined>;
    /**
     * Resource name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The RegistrationTtl of the created NotificationHub
     */
    public readonly registrationTtl!: pulumi.Output<string | undefined>;
    /**
     * The sku of the created namespace
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse | undefined>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The WnsCredential of the created NotificationHub
     */
    public readonly wnsCredential!: pulumi.Output<types.outputs.WnsCredentialResponse | undefined>;

    /**
     * Create a NotificationHub resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NotificationHubArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.namespaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'namespaceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["admCredential"] = args ? args.admCredential : undefined;
            resourceInputs["apnsCredential"] = args ? args.apnsCredential : undefined;
            resourceInputs["authorizationRules"] = args ? args.authorizationRules : undefined;
            resourceInputs["baiduCredential"] = args ? args.baiduCredential : undefined;
            resourceInputs["gcmCredential"] = args ? args.gcmCredential : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["mpnsCredential"] = args ? args.mpnsCredential : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["namespaceName"] = args ? args.namespaceName : undefined;
            resourceInputs["notificationHubName"] = args ? args.notificationHubName : undefined;
            resourceInputs["registrationTtl"] = args ? args.registrationTtl : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["wnsCredential"] = args ? args.wnsCredential : undefined;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["admCredential"] = undefined /*out*/;
            resourceInputs["apnsCredential"] = undefined /*out*/;
            resourceInputs["authorizationRules"] = undefined /*out*/;
            resourceInputs["baiduCredential"] = undefined /*out*/;
            resourceInputs["gcmCredential"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["mpnsCredential"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["registrationTtl"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["wnsCredential"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:notificationhubs:NotificationHub" }, { type: "azure-native:notificationhubs/v20140901:NotificationHub" }, { type: "azure-native:notificationhubs/v20160301:NotificationHub" }, { type: "azure-native:notificationhubs/v20230101preview:NotificationHub" }, { type: "azure-native:notificationhubs/v20230901:NotificationHub" }, { type: "azure-native:notificationhubs/v20231001preview:NotificationHub" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(NotificationHub.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NotificationHub resource.
 */
export interface NotificationHubArgs {
    /**
     * The AdmCredential of the created NotificationHub
     */
    admCredential?: pulumi.Input<types.inputs.AdmCredentialArgs>;
    /**
     * The ApnsCredential of the created NotificationHub
     */
    apnsCredential?: pulumi.Input<types.inputs.ApnsCredentialArgs>;
    /**
     * The AuthorizationRules of the created NotificationHub
     */
    authorizationRules?: pulumi.Input<pulumi.Input<types.inputs.SharedAccessAuthorizationRulePropertiesArgs>[]>;
    /**
     * The BaiduCredential of the created NotificationHub
     */
    baiduCredential?: pulumi.Input<types.inputs.BaiduCredentialArgs>;
    /**
     * The GcmCredential of the created NotificationHub
     */
    gcmCredential?: pulumi.Input<types.inputs.GcmCredentialArgs>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * The MpnsCredential of the created NotificationHub
     */
    mpnsCredential?: pulumi.Input<types.inputs.MpnsCredentialArgs>;
    /**
     * The NotificationHub name.
     */
    name?: pulumi.Input<string>;
    /**
     * The namespace name.
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The notification hub name.
     */
    notificationHubName?: pulumi.Input<string>;
    /**
     * The RegistrationTtl of the created NotificationHub
     */
    registrationTtl?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The sku of the created namespace
     */
    sku?: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The WnsCredential of the created NotificationHub
     */
    wnsCredential?: pulumi.Input<types.inputs.WnsCredentialArgs>;
}
