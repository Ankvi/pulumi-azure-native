import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Notification Hub Resource.
 *
 * Uses Azure REST API version 2023-10-01-preview. In version 2.x of the Azure Native provider, it used API version 2023-01-01-preview.
 *
 * Other available API versions: 2023-01-01-preview, 2023-09-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native notificationhubs [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
    public static readonly __pulumiType = 'azure-native:notificationhubs:NotificationHub';

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
     * Description of a NotificationHub AdmCredential.
     */
    public readonly admCredential!: pulumi.Output<types.outputs.AdmCredentialResponse | undefined>;
    /**
     * Description of a NotificationHub ApnsCredential.
     */
    public readonly apnsCredential!: pulumi.Output<types.outputs.ApnsCredentialResponse | undefined>;
    /**
     * Gets or sets the AuthorizationRules of the created NotificationHub
     */
    public /*out*/ readonly authorizationRules!: pulumi.Output<types.outputs.SharedAccessAuthorizationRulePropertiesResponse[]>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Description of a NotificationHub BaiduCredential.
     */
    public readonly baiduCredential!: pulumi.Output<types.outputs.BaiduCredentialResponse | undefined>;
    /**
     * Description of a NotificationHub BrowserCredential.
     */
    public readonly browserCredential!: pulumi.Output<types.outputs.BrowserCredentialResponse | undefined>;
    public /*out*/ readonly dailyMaxActiveDevices!: pulumi.Output<number>;
    /**
     * Description of a NotificationHub FcmV1Credential.
     */
    public readonly fcmV1Credential!: pulumi.Output<types.outputs.FcmV1CredentialResponse | undefined>;
    /**
     * Description of a NotificationHub GcmCredential.
     */
    public readonly gcmCredential!: pulumi.Output<types.outputs.GcmCredentialResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Description of a NotificationHub MpnsCredential.
     */
    public readonly mpnsCredential!: pulumi.Output<types.outputs.MpnsCredentialResponse | undefined>;
    /**
     * The name of the resource
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Gets or sets the RegistrationTtl of the created NotificationHub
     */
    public readonly registrationTtl!: pulumi.Output<string | undefined>;
    /**
     * The Sku description for a namespace
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Description of a NotificationHub WnsCredential.
     */
    public readonly wnsCredential!: pulumi.Output<types.outputs.WnsCredentialResponse | undefined>;
    /**
     * Description of a NotificationHub XiaomiCredential.
     */
    public readonly xiaomiCredential!: pulumi.Output<types.outputs.XiaomiCredentialResponse | undefined>;

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
            resourceInputs["baiduCredential"] = args ? args.baiduCredential : undefined;
            resourceInputs["browserCredential"] = args ? args.browserCredential : undefined;
            resourceInputs["fcmV1Credential"] = args ? args.fcmV1Credential : undefined;
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
            resourceInputs["xiaomiCredential"] = args ? args.xiaomiCredential : undefined;
            resourceInputs["authorizationRules"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["dailyMaxActiveDevices"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["admCredential"] = undefined /*out*/;
            resourceInputs["apnsCredential"] = undefined /*out*/;
            resourceInputs["authorizationRules"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["baiduCredential"] = undefined /*out*/;
            resourceInputs["browserCredential"] = undefined /*out*/;
            resourceInputs["dailyMaxActiveDevices"] = undefined /*out*/;
            resourceInputs["fcmV1Credential"] = undefined /*out*/;
            resourceInputs["gcmCredential"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["mpnsCredential"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["registrationTtl"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["wnsCredential"] = undefined /*out*/;
            resourceInputs["xiaomiCredential"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:notificationhubs/v20140901:NotificationHub" }, { type: "azure-native:notificationhubs/v20160301:NotificationHub" }, { type: "azure-native:notificationhubs/v20170401:NotificationHub" }, { type: "azure-native:notificationhubs/v20230101preview:NotificationHub" }, { type: "azure-native:notificationhubs/v20230901:NotificationHub" }, { type: "azure-native:notificationhubs/v20231001preview:NotificationHub" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(NotificationHub.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NotificationHub resource.
 */
export interface NotificationHubArgs {
    /**
     * Description of a NotificationHub AdmCredential.
     */
    admCredential?: pulumi.Input<types.inputs.AdmCredentialArgs>;
    /**
     * Description of a NotificationHub ApnsCredential.
     */
    apnsCredential?: pulumi.Input<types.inputs.ApnsCredentialArgs>;
    /**
     * Description of a NotificationHub BaiduCredential.
     */
    baiduCredential?: pulumi.Input<types.inputs.BaiduCredentialArgs>;
    /**
     * Description of a NotificationHub BrowserCredential.
     */
    browserCredential?: pulumi.Input<types.inputs.BrowserCredentialArgs>;
    /**
     * Description of a NotificationHub FcmV1Credential.
     */
    fcmV1Credential?: pulumi.Input<types.inputs.FcmV1CredentialArgs>;
    /**
     * Description of a NotificationHub GcmCredential.
     */
    gcmCredential?: pulumi.Input<types.inputs.GcmCredentialArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Description of a NotificationHub MpnsCredential.
     */
    mpnsCredential?: pulumi.Input<types.inputs.MpnsCredentialArgs>;
    /**
     * Gets or sets the NotificationHub name.
     */
    name?: pulumi.Input<string>;
    /**
     * Namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * Notification Hub name
     */
    notificationHubName?: pulumi.Input<string>;
    /**
     * Gets or sets the RegistrationTtl of the created NotificationHub
     */
    registrationTtl?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Sku description for a namespace
     */
    sku?: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Description of a NotificationHub WnsCredential.
     */
    wnsCredential?: pulumi.Input<types.inputs.WnsCredentialArgs>;
    /**
     * Description of a NotificationHub XiaomiCredential.
     */
    xiaomiCredential?: pulumi.Input<types.inputs.XiaomiCredentialArgs>;
}